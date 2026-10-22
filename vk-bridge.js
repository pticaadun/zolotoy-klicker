/*! @vkontakte/vk-bridge 3.0.2 (MIT, VK) — собрано из исходников github.com/VKCOM/vk-bridge */
(function(){
// utils.js
function createInstanceId() {
    const allNumbersAndLetters = 36;
    const positionAfterZeroAnDot = 2;
    const keyLength = 3;
    return Math.random()
        .toString(allNumbersAndLetters)
        .substring(positionAfterZeroAnDot, positionAfterZeroAnDot + keyLength);
}

// promisifySend.js
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/**
 * Creates counter interface.
 */
function createCounter() {
    return {
        current: 0,
        next() {
            return ++this.current;
        },
    };
}
/**
 * Creates interface for resolving request promises by request id's (or not).
 *
 * @param instanceId Uniq bridge instance ID.
 */
function createRequestResolver(instanceId) {
    const counter = createCounter();
    const promiseControllers = {};
    return {
        /**
         * Adds new controller with resolve/reject methods.
         *
         * @param controller Object with `resolve` and `reject` functions
         * @param customId Custom `request_id`
         * @returns New request id of the added controller.
         */
        add(controller, customId) {
            const id = customId != null ? customId : `${counter.next()}_${instanceId}`;
            promiseControllers[id] = controller;
            return id;
        },
        /**
         * Resolves/rejects an added promise by request id and the `isSuccess`
         * predicate.
         *
         * @param requestId Request ID.
         * @param data Data to pass to the resolve- or reject-function.
         * @param isSuccess Predicate to select the desired function.
         */
        resolve(requestId, data, isSuccess) {
            const requestPromise = promiseControllers[requestId];
            if (requestPromise) {
                if (isSuccess(data)) {
                    requestPromise.resolve(data);
                }
                else {
                    requestPromise.reject(data);
                }
                promiseControllers[requestId] = null;
            }
        },
    };
}
/**
 * Returns send function that returns promises.
 *
 * @param sendEvent Send event function.
 * @param subscribe Subscribe event function.
 * @param instanceId Uniq bridge instance ID.
 * @returns Send function which returns the Promise object.
 */
function promisifySend(sendEvent, subscribe, instanceId) {
    const requestResolver = createRequestResolver(instanceId);
    // Subscribe to receive a data
    subscribe((event) => {
        var _a;
        if (!((_a = event.detail) === null || _a === void 0 ? void 0 : _a.data) || typeof event.detail.data !== 'object') {
            return;
        }
        // There is no request_id in receive-only events, so we check its existence.
        if ('request_id' in event.detail.data) {
            const _b = event.detail.data, { request_id: requestId } = _b, data = __rest(_b, ["request_id"]);
            if (requestId) {
                requestResolver.resolve(requestId, data, (data) => !('error_type' in data));
            }
        }
    });
    return function promisifiedSend(method, props = {}) {
        return new Promise((resolve, reject) => {
            const requestId = requestResolver.add({ resolve, reject }, props.request_id);
            sendEvent(method, Object.assign(Object.assign({}, props), { request_id: requestId }));
        });
    };
}

// bridge.js
var _a, _b;


/** Is the client side runtime environment */
const IS_CLIENT_SIDE = typeof window !== 'undefined';
/** Is the runtime environment an Android app */
const IS_ANDROID_WEBVIEW = Boolean(IS_CLIENT_SIDE && window.AndroidBridge);
/** Is the runtime environment an iOS app */
const IS_IOS_WEBVIEW = Boolean(IS_CLIENT_SIDE && ((_b = (_a = window.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.VKWebAppClose));
const IS_REACT_NATIVE_WEBVIEW = Boolean(IS_CLIENT_SIDE &&
    window.ReactNativeWebView &&
    typeof window.ReactNativeWebView.postMessage === 'function');
/** Is the runtime environment a browser */
const IS_WEB = IS_CLIENT_SIDE && !IS_ANDROID_WEBVIEW && !IS_IOS_WEBVIEW;
/** Is the runtime environment m.vk.ru */
const IS_MVK = IS_WEB && /(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search);
/** Is the runtime environment vk.ru */
const IS_DESKTOP_VK = IS_WEB && !IS_MVK;
/** Type of subscribe event */
const EVENT_TYPE = IS_WEB ? 'message' : 'VKWebAppEvent';
/** Methods supported on the desktop */
const DESKTOP_METHODS = [
    'VKWebAppInit',
    'VKWebAppGetCommunityAuthToken',
    'VKWebAppAddToCommunity',
    'VKWebAppAddToHomeScreenInfo',
    'VKWebAppClose',
    'VKWebAppCopyText',
    'VKWebAppCreateHash',
    'VKWebAppGetUserInfo',
    'VKWebAppSetLocation',
    'VKWebAppSendToClient',
    'VKWebAppGetClientVersion',
    'VKWebAppGetPhoneNumber',
    'VKWebAppGetEmail',
    'VKWebAppGetGroupInfo',
    'VKWebAppGetGeodata',
    'VKWebAppGetCommunityToken',
    'VKWebAppGetConfig',
    'VKWebAppGetLaunchParams',
    'VKWebAppSetTitle',
    'VKWebAppGetAuthToken',
    'VKWebAppCallAPIMethod',
    'VKWebAppJoinGroup',
    'VKWebAppLeaveGroup',
    'VKWebAppAllowMessagesFromGroup',
    'VKWebAppDenyNotifications',
    'VKWebAppAllowNotifications',
    'VKWebAppOpenPayForm',
    'VKWebAppOpenApp',
    'VKWebAppShare',
    'VKWebAppShowWallPostBox',
    'VKWebAppScroll',
    'VKWebAppShowOrderBox',
    'VKWebAppShowLeaderBoardBox',
    'VKWebAppShowInviteBox',
    'VKWebAppShowRequestBox',
    'VKWebAppAddToFavorites',
    'VKWebAppShowStoryBox',
    'VKWebAppStorageGet',
    'VKWebAppStorageGetKeys',
    'VKWebAppStorageSet',
    'VKWebAppFlashGetInfo',
    'VKWebAppSubscribeStoryApp',
    'VKWebAppOpenWallPost',
    'VKWebAppCheckAllowedScopes',
    'VKWebAppCheckBannerAd',
    'VKWebAppHideBannerAd',
    'VKWebAppShowBannerAd',
    'VKWebAppCheckNativeAds',
    'VKWebAppShowNativeAds',
    'VKWebAppRetargetingPixel',
    'VKWebAppConversionHit',
    'VKWebAppShowSubscriptionBox',
    'VKWebAppCheckSurvey',
    'VKWebAppShowSurvey',
    'VKWebAppScrollTop',
    'VKWebAppScrollTopStart',
    'VKWebAppScrollTopStop',
    'VKWebAppShowSlidesSheet',
    'VKWebAppTranslate',
    'VKWebAppRecommend',
    'VKWebAppAddToProfile',
    'VKWebAppGetFriends',
    // Desktop web specific events
    ...(IS_DESKTOP_VK
        ? [
            'VKWebAppResizeWindow',
            'VKWebAppAddToMenu',
            'VKWebAppShowInstallPushBox',
            'VKWebAppShowCommunityWidgetPreviewBox',
            'VKWebAppCallStart',
            'VKWebAppCallJoin',
            'VKWebAppCallGetStatus',
        ]
        : ['VKWebAppShowImages']),
];
/** Cache for supported methods */
let supportedHandlers;
/** Android VK Bridge interface. */
const androidBridge = IS_CLIENT_SIDE ? window.AndroidBridge : undefined;
/** iOS VK Bridge interface. */
const iosBridge = IS_IOS_WEBVIEW ? window.webkit.messageHandlers : undefined;
/** Web VK Bridge interface. */
const webBridge = IS_WEB
    ? parent
    : undefined;
// [Примечание 1] Отключили использование в этом PR https://github.com/VKCOM/vk-bridge/pull/262
// let webSdkHandlers: string[] | undefined;
/**
 * Creates a VK Bridge API that holds functions for interact with runtime
 * environment.
 *
 * @param version Version of the package
 */
function createVKBridge(version) {
    /** Current frame id. */
    let webFrameId;
    /** List of functions that subscribed on events. */
    const subscribers = [];
    /** Uniq instance ID */
    const instanceId = createInstanceId();
    /**
     * Sends an event to the runtime env. In the case of Android/iOS application
     * env is the application itself. In the case of the browser, the parent
     * frame in which the event handlers is located.
     *
     * @param method The method (event) name to send
     * @param [props] Method properties
     */
    function send(method, props) {
        // Sending data through Android bridge
        var _a, _b;
        if (androidBridge === null || androidBridge === void 0 ? void 0 : androidBridge[method]) {
            androidBridge[method](JSON.stringify(props));
        }
        // Sending data through iOS bridge
        else if ((iosBridge === null || iosBridge === void 0 ? void 0 : iosBridge[method]) && typeof iosBridge[method].postMessage === 'function') {
            (_b = (_a = iosBridge[method]).postMessage) === null || _b === void 0 ? void 0 : _b.call(_a, props);
        }
        // Sending data through React Native bridge
        else if (IS_REACT_NATIVE_WEBVIEW) {
            window.ReactNativeWebView.postMessage(JSON.stringify({
                handler: method,
                params: props,
            }));
        }
        // Sending data through web bridge
        else if (webBridge && typeof webBridge.postMessage === 'function') {
            webBridge.postMessage({
                handler: method,
                params: props,
                type: 'vk-connect',
                webFrameId,
                connectVersion: version,
            }, '*');
        }
    }
    /**
     * Adds an event listener. It will be called any time a data is received.
     *
     * @param listener A callback to be invoked on every event receive.
     */
    function subscribe(listener) {
        subscribers.push(listener);
    }
    /**
     * Removes an event listener which has been subscribed for event listening.
     *
     * @param listener A callback to unsubscribe.
     */
    function unsubscribe(listener) {
        const index = subscribers.indexOf(listener);
        if (index > -1) {
            subscribers.splice(index, 1);
        }
    }
    function supportsInner(method) {
        if (IS_ANDROID_WEBVIEW) {
            // Android support check
            return !!(androidBridge && typeof androidBridge[method] === 'function');
        }
        else if (IS_IOS_WEBVIEW) {
            // iOS support check
            return !!((iosBridge === null || iosBridge === void 0 ? void 0 : iosBridge[method]) && typeof iosBridge[method].postMessage === 'function');
        }
        else if (IS_WEB) {
            // Web support check
            return DESKTOP_METHODS.includes(method);
            // см. Примечание 1
            // if (!webSdkHandlers) {
            //   console.error('You should call bridge.send("VKWebAppInit") first');
            //   return false;
            // }
            // return webSdkHandlers.includes(method);
        }
        return false;
    }
    /**
     * Checks if a method is supported on runtime platform.
     *
     * @param method Method (event) name to check.
     * @returns Result of checking.
     * @deprecated This method is deprecated. Use supportsAsync instead.
     */
    function supports(method) {
        console.warn('bridge.supports method is deprecated. Use bridge.supportsAsync instead.');
        return supportsInner(method);
    }
    /**
     * Checks whether the runtime is a WebView.
     *
     * @returns Result of checking.
     */
    function isWebView() {
        return IS_IOS_WEBVIEW || IS_ANDROID_WEBVIEW;
    }
    /**
     * Checks whether the runtime is an iframe.
     *
     * @returns Result of checking.
     */
    function isIframe() {
        return IS_WEB && window.parent !== window;
    }
    /**
     * Checks whether the runtime is embedded.
     *
     * @returns Result of checking.
     */
    function isEmbedded() {
        return isWebView() || isIframe();
    }
    /**
     * Checks whether the runtime is standalone.
     *
     * @returns Result of checking.
     */
    function isStandalone() {
        return !isEmbedded();
    }
    function handleEvent(event) {
        if (IS_IOS_WEBVIEW || IS_ANDROID_WEBVIEW) {
            // If it's webview
            return [...subscribers].map((fn) => fn.call(null, event));
        }
        let bridgeEventData = event === null || event === void 0 ? void 0 : event.data;
        if (!IS_WEB || !bridgeEventData) {
            return;
        }
        if (IS_REACT_NATIVE_WEBVIEW && typeof bridgeEventData === 'string') {
            try {
                bridgeEventData = JSON.parse(bridgeEventData);
            }
            catch (_a) { }
        }
        const { type, data, frameId } = bridgeEventData;
        if (!type) {
            return;
        }
        // см. Примечание 1
        // if (type === 'SetSupportedHandlers') {
        //   webSdkHandlers = data.supportedHandlers;
        //   return;
        // }
        if (type === 'VKWebAppSettings') {
            webFrameId = frameId;
            return;
        }
        [...subscribers].map((fn) => fn({ detail: { type, data } }));
    }
    // Subscribes to listening messages from a runtime for calling each
    // subscribed event listener.
    if (IS_REACT_NATIVE_WEBVIEW && /(android)/i.test(navigator.userAgent)) {
        document.addEventListener(EVENT_TYPE, handleEvent);
    }
    else if (typeof window !== 'undefined' && 'addEventListener' in window) {
        window.addEventListener(EVENT_TYPE, handleEvent);
    }
    /**
     * Enhanced send functions for the ability to receive response data in
     * the Promise object.
     */
    const sendPromise = promisifySend(send, subscribe, instanceId);
    async function supportsAsync(method) {
        if (IS_ANDROID_WEBVIEW || IS_IOS_WEBVIEW) {
            return supportsInner(method);
        }
        if (supportedHandlers) {
            return supportedHandlers.has(method);
        }
        try {
            const response = await sendPromise('SetSupportedHandlers');
            supportedHandlers = new Set(response.supportedHandlers);
        }
        catch (_error) {
            supportedHandlers = new Set(['VKWebAppInit']);
        }
        return supportedHandlers.has(method);
    }
    subscribe((event) => {
        if (!event.detail) {
            return;
        }
        switch (event.detail.type) {
            case 'SetSupportedHandlers':
                supportedHandlers = new Set(event.detail.data.supportedHandlers);
        }
    });
    return {
        send: sendPromise,
        sendPromise,
        subscribe,
        unsubscribe,
        supports,
        supportsAsync,
        isWebView,
        isIframe,
        isEmbedded,
        isStandalone,
    };
}

// entry.js

window.vkBridge = window.vkConnect = createVKBridge('3.0.2');

})();
