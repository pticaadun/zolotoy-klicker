/*
 * Платформенный слой для VK Mini Apps (VK Игры).
 * Даёт игре тот же интерфейс, что она ждёт от платформы (window.PlatformSDK.init()),
 * но всё делает через VK Bridge: запуск, язык, сохранения (VK Storage), реклама VK,
 * покупки за голоса, пауза при сворачивании, ярлык на главный экран.
 *
 * ЦЕНЫ В ГОЛОСАХ: должны совпадать с ценами в обработчике платежей (vk-payments-worker.js).
 */
(function () {
    'use strict';
    window.__PLATFORM__ = 'vk';

    var VOTE_PRICES = {
        no_ads: 15,
        starter_pack: 5,
        imperial_pass: 25,
        gems_50: 3,
        gems_150: 8,
        gems_500: 22
    };

    // Межстраничная реклама: не при запуске и не чаще 1 раза в 30 секунд (правила VK, п. 5.1.5.1)
    var INTERSTITIAL_MIN_GAP = 30000;
    var INTERSTITIAL_NOT_BEFORE = 60000;

    var B = window.vkBridge;
    var qs = new URLSearchParams(location.search);
    var vkPlatform = qs.get('vk_platform') || '';
    var vkLang = qs.get('vk_language') || 'ru';
    var vkUserId = qs.get('vk_user_id') || '';
    var IS_IOS = /iphone|ipad/i.test(vkPlatform);
    var startedAt = Date.now();
    var lastInterstitialAt = 0;

    function send(method, params) {
        if (!B) return Promise.reject(new Error('VK Bridge не загружен'));
        try { return B.send(method, params || {}); } catch (e) { return Promise.reject(e); }
    }
    function withTimeout(p, ms) {
        return new Promise(function (res, rej) {
            var t = setTimeout(function () { rej(new Error('timeout')); }, ms);
            p.then(function (v) { clearTimeout(t); res(v); }, function (e) { clearTimeout(t); rej(e); });
        });
    }

    // ---------- События платформы (сворачивание приложения) ----------
    var listeners = {};
    function emit(name) { (listeners[name] || []).forEach(function (fn) { try { fn(); } catch (e) {} }); }
    if (B && B.subscribe) {
        B.subscribe(function (e) {
            var t = e && e.detail && e.detail.type;
            if (t === 'VKWebAppViewHide') emit('game_api_pause');
            else if (t === 'VKWebAppViewRestore') emit('game_api_resume');
        });
    }

    // ---------- Сохранения: VK Storage (значение до 4096 байт → режем на части) ----------
    // Пишем попеременно в слоты a/b, а «указатель» (s_meta) обновляем последним —
    // так оборванная запись никогда не портит предыдущее сохранение.
    var CHUNK = 3800;
    var curSlot = null;
    function asciiJson(obj) {
        return JSON.stringify(obj).replace(/[\u007f-￿]/g, function (c) {
            return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
        });
    }
    function storageGet(keys) {
        return send('VKWebAppStorageGet', { keys: keys }).then(function (r) {
            var out = {};
            ((r && r.keys) || []).forEach(function (k) { out[k.key] = k.value; });
            return out;
        });
    }
    function getData() {
        return storageGet(['s_meta']).then(function (m) {
            if (!m.s_meta) return {};
            var meta = JSON.parse(m.s_meta);
            curSlot = meta.slot;
            var keys = [];
            for (var i = 0; i < meta.n; i++) keys.push('s_' + meta.slot + '_' + i);
            return storageGet(keys).then(function (parts) {
                var str = keys.map(function (k) { return parts[k] || ''; }).join('');
                if (str.length !== meta.len) throw new Error('сохранение повреждено');
                return JSON.parse(str);
            });
        });
    }
    var writing = Promise.resolve();
    function setData(obj) {
        var str = asciiJson(obj);
        writing = writing.catch(function () {}).then(function () {
            var slot = curSlot === 'a' ? 'b' : 'a';
            var n = Math.ceil(str.length / CHUNK);
            var jobs = [];
            for (var i = 0; i < n; i++) {
                jobs.push(send('VKWebAppStorageSet', { key: 's_' + slot + '_' + i, value: str.slice(i * CHUNK, (i + 1) * CHUNK) }));
            }
            return Promise.all(jobs).then(function () {
                return send('VKWebAppStorageSet', { key: 's_meta', value: JSON.stringify({ slot: slot, n: n, len: str.length, t: Date.now() }) });
            }).then(function () { curSlot = slot; });
        });
        return writing;
    }

    // ---------- Реклама VK ----------
    function preloadAds() {
        send('VKWebAppCheckNativeAds', { ad_format: 'reward' }).catch(function () {});
        send('VKWebAppCheckNativeAds', { ad_format: 'interstitial' }).catch(function () {});
    }
    var adv = {
        showFullscreenAdv: function (o) {
            var cb = (o && o.callbacks) || {};
            var now = Date.now();
            if (now - startedAt < INTERSTITIAL_NOT_BEFORE || now - lastInterstitialAt < INTERSTITIAL_MIN_GAP) {
                setTimeout(function () { cb.onClose && cb.onClose(false); }, 0);
                return;
            }
            lastInterstitialAt = now;
            cb.onOpen && cb.onOpen();
            send('VKWebAppShowNativeAds', { ad_format: 'interstitial' }).then(function (r) {
                cb.onClose && cb.onClose(!!(r && r.result));
            }).catch(function (e) {
                cb.onError ? cb.onError(e) : (cb.onClose && cb.onClose(false));
            }).then(function () { setTimeout(preloadAds, 3000); });
        },
        showRewardedVideo: function (o) {
            var cb = (o && o.callbacks) || {};
            cb.onOpen && cb.onOpen();
            send('VKWebAppShowNativeAds', { ad_format: 'reward' }).then(function (r) {
                if (r && r.result) { cb.onRewarded && cb.onRewarded(); cb.onClose && cb.onClose(); }
                else cb.onError && cb.onError(new Error('no ad'));
            }).catch(function (e) {
                cb.onError && cb.onError(e);
            }).then(function () { setTimeout(preloadAds, 3000); });
        }
    };

    // ---------- Покупки за голоса ----------
    function votesWord(n) {
        var en = window.I18N && window.I18N.lang === 'en';
        if (en) return n === 1 ? 'vote' : 'votes';
        var m10 = n % 10, m100 = n % 100;
        if (m10 === 1 && m100 !== 11) return 'голос';
        if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return 'голоса';
        return 'голосов';
    }
    var paymentsApi = {
        getCatalog: function () {
            return Promise.resolve(Object.keys(VOTE_PRICES).map(function (id) {
                var n = VOTE_PRICES[id];
                return { id: id, priceValue: '', price: n + ' ' + votesWord(n) };
            }));
        },
        // У VK нет списка незавершённых покупок: товар выдаётся сразу после оплаты
        getPurchases: function () { return Promise.resolve([]); },
        purchase: function (o) {
            return send('VKWebAppShowOrderBox', { type: 'item', item: o.id }).then(function (r) {
                if (r && r.success) return { productID: o.id, purchaseToken: String(r.order_id || '') };
                throw new Error('cancelled');
            });
        },
        consumePurchase: function () { return Promise.resolve(); }
    };

    // ---------- Объект платформы ----------
    var player = {
        getMode: function () { return ''; },
        getUniqueID: function () { return vkUserId; },
        getName: function () { return ''; },
        getData: getData,
        setData: setData
    };
    var sdk = {
        platform: 'vk',
        isIOS: IS_IOS,
        environment: { i18n: { lang: vkLang } },
        on: function (name, fn) { (listeners[name] = listeners[name] || []).push(fn); },
        features: {
            LoadingAPI: { ready: function () {} },
            GameplayAPI: { start: function () {}, stop: function () {} }
        },
        adv: adv,
        getPlayer: function () {
            // Storage работает только внутри VK: проверяем, что мост отвечает
            return withTimeout(storageGet(['s_meta']), 15000).then(function () { return player; });
        },
        // Голоса нельзя принимать в iOS-приложении VK (ограничение Apple) — там магазин скрыт
        getPayments: function () {
            return IS_IOS ? Promise.reject(new Error('ios')) : Promise.resolve(paymentsApi);
        },
        shortcut: {
            canShowPrompt: function () {
                return send('VKWebAppAddToHomeScreenInfo').then(function (r) {
                    return { canShow: !!(r && r.is_feature_supported && !r.is_added_to_home_screen) };
                }).catch(function () { return { canShow: false }; });
            },
            showPrompt: function () {
                return send('VKWebAppAddToHomeScreen').then(function () { return { outcome: 'accepted' }; })
                    .catch(function () { return { outcome: 'rejected' }; });
            }
        }
    };

    window.PlatformSDK = {
        init: function () {
            return withTimeout(send('VKWebAppInit'), 4000).catch(function (e) {
                console.warn('VKWebAppInit:', e);
            }).then(function () {
                preloadAds();
                setInterval(preloadAds, 120000);
                return sdk;
            });
        }
    };
})();
