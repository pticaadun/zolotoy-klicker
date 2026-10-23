// ========================================================
// ПЕРЕВОД ИГРЫ (i18n): русский — исходный язык, английский — словарь ниже.
// Работает поверх готовой игры: переводит текст на экране по мере появления.
// Язык: ручной выбор в настройках > язык Яндекс Игр > язык браузера.
// Добавить фразу: впишите её в EN_EXACT (точная строка) или EN_PATTERNS ({0}, {1} — подстановки).
// ========================================================
(function () {
    'use strict';
    const EN_EXACT = {
    "Звёздный Лис": "Star Fox",
    "Комета": "Comet",
    "Эксклюзив пропуска сезона «Звёздная ярмарка». Ловкий лис с хвостом-звездой: усиливает весь доход и дары золотых комет.": "Exclusive of the «Star Fair» pass season. A nimble fox with a star tail: boosts all income and golden comet gifts.",
    "Хвост-звезда к удаче! 🌟": "A star tail for luck! 🌟",
    "Чую комету — лови! ☄️": "I smell a comet — catch it! ☄️",
    "Ярмарка открыта! 🎠": "The fair is open! 🎠",
    "+20% к дарам золотых комет за уровень (до +80%)": "+20% to golden comet gifts per level (up to +80%)",
    "Ярмарочный салют": "Fair Fireworks",
    "Салют": "Fireworks",
    "Лис": "Fox",
    "При тапе в небо взлетают разноцветные залпы салюта": "Colorful fireworks burst into the sky when you tap",
    "Эффекты тапа переключаются в окне пропуска": "Tap effects are switched in the pass window",
    "Звёздная карусель": "Star Carousel",
    "Карусель": "Carousel",
    "Карусель с огоньками встаёт на площади Делового центра": "A carousel with lights appears on the Business District square",
    "Вместе с ней — сундук: 60 кристаллов, 10 сфер и 5 звёзд": "Along with it — a chest: 60 crystals, 10 spheres and 5 stars",
    "Статуя императора встаёт на площади Старого города": "The emperor's statue appears on the Old Town square",
    "Звёздная карусель на площади Делового центра": "Star Carousel on the Business District square",
    "Золотой монумент на площади города": "Golden monument on the city square",
    "Золотой Кликер 1.0": "Golden Clicker 1.0",
    "✨ ЧТО ЕСТЬ В ИГРЕ": "✨ WHAT'S IN THE GAME",
    "👆 Тапай по монете: 30+ улучшений клика, критические удары, комбо и «Огонь»": "👆 Tap the coin: 30+ tap upgrades, critical hits, combo and «Fire»",
    "🏭 35+ предприятий — от хомяка до врат варп-прыжка, каждое строит здание в городе": "🏭 35+ businesses — from a hamster to a warp gate, each builds a building in the city",
    "🏙️ Город из 4 районов: Старый город, Деловой центр, Техно-квартал и Космопорт — у каждого мэр и задание дня": "🏙️ A city of 4 districts: Old Town, Business District, Tech Quarter and Spaceport — each with a mayor and a daily task",
    "🐙 6 боссов со своей механикой и босс недели с двойной наградой": "🐙 6 bosses with their own mechanics and a boss of the week with double rewards",
    "🎮 8 мини-игр: Монетопад, Гонка дронов, Взлом сервера, Кузница, Звёздная карта, Сокровищница памяти, Напёрстки и Взлом сейфа": "🎮 8 mini-games: Coinfall, Drone Race, Server Hack, Forge, Star Map, Treasury of Memory, Lucky Cups and Safe Cracking",
    "🐾 Питомцы растут, меняют облик и ходят в экспедиции за добычей": "🐾 Pets grow, change their look and go on expeditions for loot",
    "🎨 25 анимированных обликов монеты: обычные, сезонные и эксклюзивы пропуска": "🎨 25 animated coin skins: regular, seasonal and pass exclusives",
    "🌌 Вознесение и Небесное Древо, а после 25 вознесений — Трансцендентность": "🌌 Ascension and the Heavenly Tree, and after 25 ascensions — Transcendence",
    "🎫 Имперский пропуск, сезонные события, тематические недели и ярмарка выходных": "🎫 Imperial Pass, seasonal events, theme weeks and the weekend fair",
    "📜 Задания, достижения, указы императора, альбом коллекций и артефакты": "📜 Quests, achievements, imperial decrees, collection album and artifacts",
    "🤖 Автокликер и авто-покупка, ⏩ ускорение времени и сундуки в магазине": "🤖 Auto-clicker and auto-buy, ⏩ time warp and chests in the shop",
    "☁️ Прогресс сохраняется сам — играйте на телефоне и компьютере": "☁️ Progress saves automatically — play on phone and computer",
    "Найден прогресс с другого устройства": "Progress found from another device",
    "Загрузить прогресс": "Load progress",
    "Оставить этот": "Keep this one",
    "☁️ Загружаем прогресс…": "☁️ Loading progress…",
    "☁️ Этот прогресс сохранён в облако": "☁️ This progress was saved to the cloud",
    "☁️ Синхронизировать": "☁️ Sync",
    "☁️ Проверяем облако…": "☁️ Checking the cloud…",
    "☁️ Прогресс сохранён в облако": "☁️ Progress saved to the cloud",
    "☁️ Не удалось сохранить — попробуйте позже": "☁️ Couldn't save — try again later",
    "☁️ Облако не отвечает — попробуйте позже": "☁️ The cloud isn't responding — try again later",
    "☁️ Облако недоступно вне VK": "☁️ The cloud is unavailable outside VK",
    "☁️ Облако VK: нет связи — прогресс пока только на этом устройстве": "☁️ VK cloud: no connection — progress is only on this device for now",
    "☁️ СОХРАНЕНИЕ": "☁️ SAVE",
    "Ускорение времени": "Time Warp",
    "Мгновенно получите монеты — столько, сколько империя заработает за это время. Бонус кристаллов к доходу не уменьшается.": "Instantly get coins — as much as your empire earns in that time. The crystal income bonus is not reduced.",
    "4 часа дохода": "4 hours of income",
    "12 часов дохода": "12 hours of income",
    "ВЫГОДНО": "BEST VALUE",
    "Точно?": "Sure?",
    "Каждый кристалл даёт +3.75%/+5%/+6.25% к доходу вместо +2.5%!": "Each crystal gives +3.75%/+5%/+6.25% income instead of +2.5%!",
    "Статистика": "Statistics",
    "Кибернетическая ищейка: роет землю под городом и приносит клады — монеты, а иногда кристаллы!": "A cyber sniffer dog: digs under the city and brings treasure — coins, and sometimes crystals!",
    "Гав! Откопал клад! 🦴": "Woof! Dug up a treasure! 🦴",
    "Вуф! Чую золото под мостовой! 🐾": "Woof! I smell gold under the pavement! 🐾",
    "Кибер-Пёс откопал больше кладов, чем весь совет министров. Министры обиделись.": "The Cyber-Dog dug up more treasure than the entire council of ministers. The ministers are offended.",
    "🐾 Кибер-Пёс откопал кристалл! +1 💎": "🐾 The Cyber-Dog dug up a crystal! +1 💎",
    "▶ реклама": "▶ ad",
    "Посмотреть рекламу: доход x2 на 2 минуты": "Watch an ad: x2 income for 2 minutes",
    "Золотой Кликер": "Golden Clicker",
    "Тап-Империя": "Tap Empire",
    "▶ Играть": "▶ Play",
    "⚙️ Настройки": "⚙️ Settings",
    "❓ Как играть": "❓ How to play",
    "← Назад": "← Back",
    "Игра для всех возрастов": "A game for all ages",
    "Возрастное ограничение": "Age rating",
    "🏠 Главное меню": "🏠 Main menu",
    "Нажимай на монету, чтобы получать золото. Покупай улучшения клика и предприятия во вкладках «Клик» и «Бизнес» — здания появляются в городе, районы листаются свайпом.": "Tap the coin to earn gold. Buy tap upgrades and businesses in the \"Tap\" and \"Business\" tabs — buildings appear in the city, and you can swipe between districts.",
    "Лови летающие кометы и побеждай боссов — они дают бонусы. Когда накопишь достаточно, вознесись: начнёшь заново, но с небесными звёздами для вечных улучшений.": "Catch flying comets and defeat bosses — they give bonuses. When you've earned enough, ascend: you start over, but with heavenly stars for permanent upgrades.",
    "Вернуться в это меню можно в любой момент: ⚙️ Настройки → 🏠 Главное меню.": "You can return to this menu at any time: ⚙️ Settings → 🏠 Main menu.",
    "Покупки за голоса недоступны на этом устройстве.": "Purchases with votes aren't available on this device.",
    "Оплата голосами. Покупки сохраняются вместе с прогрессом.": "Paid with votes. Purchases are saved with your progress.",
"🎫 Облики пропуска": "🎫 Pass looks",
"🪙 Обычные": "🪙 Regular",
"🗓️ Сезонные": "🗓️ Seasonal",
"🎫 Пропуск": "🎫 Pass",
"Неделя кибер-угрозы": "Cyber Threat Week",
"Неделя небесных пиратов": "Sky Pirates Week",
"Неделя титанов": "Titans Week",
"Неделя сокровищ": "Treasure Week",
"Звёздная неделя": "Star Week",
"Хакеры атакуют город! Хакерская атака, ИИ-захватчик и Взлом сервера приходят чаще и дают двойную награду.": "Hackers are attacking the city! Hacker Attack, the AI Invader and Server Hack come more often and give double rewards.",
"Небо над городом неспокойно! Дрон-налётчик, Дирижабль и Гонка дронов приходят чаще и дают двойную награду.": "The sky over the city is restless! The Raider Drone, the Airship and the Drone Race come more often and give double rewards.",
"Гиганты у ворот! Боевой мех, Кибер-Спрут и Имперская Кузница приходят чаще и дают двойную награду.": "Giants at the gates! The Battle Mech, the Cyber Octopus and the Imperial Forge come more often and give double rewards.",
"Казна открыта! Взлом сейфа, Напёрстки и Монетопад приходят чаще и дают двойную награду.": "The treasury is open! Safe Cracking, Lucky Cups and Coinfall come more often and give double rewards.",
"Звездочёты в городе! Звёздная карта и Сокровищница памяти приходят чаще и дают двойную награду.": "Stargazers are in town! Star Map and Treasury of Memory come more often and give double rewards.",
"Тема недели": "Theme of the week",
"🤖 АВТОМАТИЗАЦИЯ": "🤖 AUTOMATION",
"Автоматизация": "Automation",
"Автокликер": "Auto-clicker",
"Авто-покупка": "Auto-buy",
"Сама покупает самое выгодное предприятие и улучшения клика, когда хватает монет": "Automatically buys the most profitable business and tap upgrades when you have enough coins",
"Всё": "Everything",
"Только предприятия": "Businesses only",
"✓ Открыто навсегда": "✓ Unlocked forever",
"✓ Открыто премиум-пропуском": "✓ Unlocked by the premium pass",
"Работает, пока игра открыта. Задания на тапы автокликер не выполняет.": "Works while the game is open. The auto-clicker doesn't count toward tap quests.",
"Переключить": "Toggle",
"🤖 Автокликер: включено": "🤖 Auto-clicker: on",
"🤖 Автокликер: выключено": "🤖 Auto-clicker: off",
"🛒 Авто-покупка: включено": "🛒 Auto-buy: on",
"🛒 Авто-покупка: выключено": "🛒 Auto-buy: off",
"Обычный": "Common",
"Редкий": "Rare",
"Эпический": "Epic",
"Обычный сундук!": "Common chest!",
"Редкий сундук!": "Rare chest!",
"Эпический сундук!": "Epic chest!",
"Легендарный сундук!": "Legendary chest!",
"ЧЕСТНЫЕ ШАНСЫ": "FAIR ODDS",
"Сундук за рекламу": "Ad chest",
"На сегодня сундуки закончились — новые завтра": "No more chests today — new ones tomorrow",
"Монеты, кристаллы, сферы — а в легендарном и звёзды. Нажмите, чтобы увидеть шансы.": "Coins, crystals, spheres — and stars in the legendary one. Tap to see the odds.",
"Открыть": "Open",
"Завтра": "Tomorrow",
"Новогодняя Ёлка": "New Year Tree",
"Сердце Империи": "Heart of the Empire",
"Весенний Первоцвет": "Spring Primrose",
"Закат у Моря": "Sunset by the Sea",
"Тыквенный Король": "Pumpkin King",
"Звёздная Ярмарка": "Star Fair",
"Неоновый Император": "Neon Emperor",
"Лампа Изобретателя": "Inventor's Lamp",
"Штурвал Торговца": "Merchant's Helm",
"Небесные Фонарики": "Sky Lanterns",
"Сезонный облик Нового года: ёлка в огнях и снегопад.": "New Year seasonal look: a lit-up tree and snowfall.",
"Сезонный облик Дня влюблённых: сердце в золотой короне.": "Valentine's Day seasonal look: a heart in a golden crown.",
"Сезонный облик весны: золотое яйцо среди тюльпанов.": "Spring seasonal look: a golden egg among tulips.",
"Сезонный облик лета: закат над морем и пальма.": "Summer seasonal look: a sunset over the sea and a palm tree.",
"Сезонный облик Хэллоуина: тыква в короне и летучие мыши.": "Halloween seasonal look: a crowned pumpkin and bats.",
"Эксклюзив пропуска сезона «Звёздная ярмарка»: колесо обозрения в огнях.": "Exclusive of the «Star Fair» pass season: a Ferris wheel in lights.",
"Эксклюзив пропуска сезона «Неоновый сезон»: корона из неона над ночным городом.": "Exclusive of the «Neon Season» pass season: a neon crown over the night city.",
"Эксклюзив пропуска сезона «Эпоха изобретений»: лампа с шестерёнкой внутри.": "Exclusive of the «Age of Inventions» pass season: a lamp with a gear inside.",
"Эксклюзив пропуска сезона «Морская торговля»: штурвал и якорь.": "Exclusive of the «Sea Trade» pass season: a ship's wheel and an anchor.",
"Эксклюзив пропуска сезона «Небесный фестиваль»: фонарики и салют.": "Exclusive of the «Sky Festival» pass season: lanterns and fireworks.",
"колесо обозрения в огнях.": "a Ferris wheel in lights.",
"корона из неона над ночным городом.": "a neon crown over the night city.",
"лампа с шестерёнкой внутри.": "a lamp with a gear inside.",
"штурвал и якорь.": "a ship's wheel and an anchor.",
"фонарики и салют.": "lanterns and fireworks.",
"красный дракон императоров, приносящий кликам богатство.": "the red dragon of emperors that brings wealth to your taps.",
"+35% ко всему доходу и +20% к тапу": "+35% to all income and +20% to taps",
"🗓️ Сезонные облики": "🗓️ Seasonal looks",
"соберите все находки сезона или купите, пока сезон идёт": "collect all of a season's finds or buy it while the season is on",
"Облики пропуска": "Pass looks",
"Эксклюзив другого сезона пропуска": "Exclusive of another pass season",
"Этот облик можно купить только во время его сезона": "This look can only be bought during its season",
"Облик сезона": "Season look",
"Только в пропуске этого сезона — в каждом сезоне свой облик": "Only in this season's pass — every season has its own look",
"Детёныш": "Baby",
"Взрослый": "Adult",
"Легендарный": "Legendary",
"✨ Эволюция!": "✨ Evolve!",
"Растёт от ласки (тапы по питомцу), угощений, походов и прокачки": "Grows from petting (tapping the pet), treats, expeditions and upgrades",
"Питомцы уже сыты — угощать можно 3 раза в день": "Your pets are full — you can give treats 3 times a day",
"ЭВОЛЮЦИЯ": "EVOLUTION",
"Высшая стадия: питомец сияет легендарной аурой": "Top stage: the pet shines with a legendary aura",
"Питомец вырос и стал сильнее": "Your pet has grown and become stronger",
"Легендарная аура над питомцем на поле": "Legendary aura around the pet on the field",
"Трансцендентность": "Transcendence",
"Второй слой престижа": "Second prestige layer",
"Древо Трансцендентности": "Transcendence Tree",
"ВТОРОЙ СЛОЙ ПРЕСТИЖА": "SECOND PRESTIGE LAYER",
"Останутся: Небесное Древо, кристаллы, питомцы, скины, артефакты, достижения, мэры районов": "Kept: the Heavenly Tree, crystals, pets, skins, artifacts, achievements, district mayors",
"Эфир тратится в Древе Трансцендентности — бонусы навсегда": "Aether is spent in the Transcendence Tree — permanent bonuses",
"✴ Трансцендировать": "✴ Transcend",
"ТРАНСЦЕНДЕНТНОСТЬ": "TRANSCENDENCE",
"✴ ДРЕВО ТРАНСЦЕНДЕНТНОСТИ": "✴ TRANSCENDENCE TREE",
"Открыто ✓": "Unlocked ✓",
"(за уровень)": "(per level)",
"Эфирное Ядро": "Aether Core",
"Весь доход ×2": "All income ×2",
"Эхо Вознесений": "Echo of Ascensions",
"+1 Небесная звезда за каждое вознесение": "+1 Heavenly Star per ascension",
"Короткий Путь": "Short Path",
"Вознесению нужно на 8% меньше монет": "Ascension needs 8% fewer coins",
"Тап Вечности": "Eternal Tap",
"Сила тапа +50%": "Tap power +50%",
"Звериная Душа": "Beast Soul",
"Питомцы растут вдвое быстрее, для эволюции нужно на 25% меньше роста": "Pets grow twice as fast and need 25% less growth to evolve",
"Вечный Город": "Eternal City",
"Каждый уровень района даёт +10% вместо +5%": "Each district level gives +10% instead of +5%",
"Охотник на Титанов": "Titan Hunter",
"Награды боссов и мини-игр ×2": "Boss and mini-game rewards ×2",
"Кристальный Дождь": "Crystal Rain",
"+5 кристаллов при каждом вознесении": "+5 crystals on every ascension",
"Сон Вечности": "Eternal Sleep",
"Доход вне игры ×2": "Offline income ×2",
"Память Звёзд": "Star Memory",
"После Трансцендентности уровень вознесения начинается с 5": "After Transcendence your ascension level starts at 5",
"Сверхновая": "Supernova",
"Весь доход ×3": "All income ×3",
"Бесконечность": "Infinity",
"Весь доход +50%": "All income +50%",
"Гонка дронов!": "Drone Race!",
"Над городом стартует ночная гонка — проведите дрон через трассу и соберите монеты!": "A night race starts over the city — fly your drone through the course and collect coins!",
"🏁 ГОНКА ДРОНОВ": "🏁 DRONE RACE",
"Взлом сервера!": "Server Hack!",
"Хакер оставил открытый сервер — соедините цепь от входа к ядру, пока не сработала защита!": "A hacker left a server open — connect the circuit from the input to the core before security kicks in!",
"💻 ВЗЛОМ СЕРВЕРА": "💻 SERVER HACK",
"Тапайте слева или справа от дрона — он сменит полосу. Облетайте барьеры и собирайте монеты до финиша!": "Tap left or right of the drone to change lanes. Dodge barriers and collect coins until the finish!",
"Тапайте по плиткам, чтобы повернуть их. Проведите ток от входа ⚡ слева к ядру CORE справа!": "Tap tiles to rotate them. Run the current from the ⚡ input on the left to the CORE on the right!",
"Долетите до финиша и соберите монеты.": "Reach the finish and collect coins.",
"Тап слева от дрона — полоса влево, справа — вправо (на ПК — стрелки).": "Tap left of the drone to move left, right to move right (arrow keys on PC).",
"Барьер отнимает щит. Потеряете все три — дрон разбит.": "A barrier costs a shield. Lose all three and the drone crashes.",
"Монета +1, кристалл +3. Трасса постепенно ускоряется.": "Coin +1, crystal +3. The course gradually speeds up.",
"Собрать половину цели по монетам": "Collect half of the coin goal",
"Долететь до финиша": "Reach the finish",
"Долететь до финиша и собрать цель по монетам": "Reach the finish and hit the coin goal",
"Проведите ток от входа ⚡ к ядру сервера.": "Run the current from the ⚡ input to the server core.",
"Тап по плитке поворачивает её на четверть оборота.": "Tapping a tile rotates it a quarter turn.",
"Плитки, по которым идёт ток, светятся — следите, докуда он дошёл.": "Tiles carrying current glow — watch how far it has reached.",
"Цепь от левого края до ядра справа — сервер взломан.": "A circuit from the left edge to the core on the right — server hacked.",
"Довести ток до середины поля": "Bring the current to the middle of the board",
"Взломать сервер": "Hack the server",
"Взломать, когда осталось 40% времени или больше": "Hack it with 40% of the time or more left",
"Дрон разбит о барьеры": "The drone crashed into barriers",
"Защита сервера сработала": "Server security kicked in",
"🏁 Гонка дронов": "🏁 Drone Race",
"💻 Взлом сервера": "💻 Server Hack",
"Подрос!": "Grown Up!",
"Эволюционировать питомца": "Evolve a pet",
"Живая легенда": "Living Legend",
"Вырастить легендарного питомца": "Raise a legendary pet",
"За гранью Астрала": "Beyond the Astral",
"Пройти Трансцендентность": "Go through Transcendence",
"Вечный странник": "Eternal Wanderer",
"Пройти Трансцендентность 3 раза": "Go through Transcendence 3 times",
"Ас трассы": "Track Ace",
"Получить 3 звезды в Гонке дронов": "Get 3 stars in the Drone Race",
"Хакер": "Hacker",
"Получить 3 звезды во Взломе сервера": "Get 3 stars in Server Hack",
"Космопорт": "Spaceport",
"Стартовая площадка": "Launch Pad",
"Астероидная шахта": "Asteroid Mine",
"Верфь звездолётов": "Starship Yard",
"Космический лифт": "Space Elevator",
"Врата варп-прыжка": "Warp Gate",
"Сила тапа +8% за уровень": "Tap power +8% per level",
"Все предприятия дешевле на 2% за уровень": "All businesses 2% cheaper per level",
"Кометы прилетают на 4% чаще за уровень": "Comets arrive 4% more often per level",
"Весь доход +4% за уровень": "All income +4% per level",
"🏙️ РАЙОН ГОРОДА": "🏙️ CITY DISTRICT",
"Уровень района": "District level",
"Здания района": "District buildings",
"📋 Задание района на сегодня": "📋 Today's district task",
"Назначить мэра": "Appoint a mayor",
"Повысить": "Upgrade",
"Мэр на максимальном уровне": "Mayor is at max level",
"Награда получена ✓": "Reward claimed ✓",
"Район достиг максимального уровня!": "The district has reached max level!",
"Городской совет": "City Council",
"Назначить мэра во всех четырёх районах": "Appoint a mayor in all four districts",
"Образцовый район": "Model District",
"Довести любой район до 5-го уровня": "Bring any district to level 5",
"Космодром": "Cosmodrome",
"Построить все 5 новых зданий Космопорта": "Build all 5 new Spaceport buildings",
"Предыдущий район": "Previous district",
"Следующий район": "Next district",
"Купите 25 уровней зданий этого района": "Buy 25 building levels in this district",
"Над городом кружит босс —": "A boss is circling over the city —",
"! Он появится, как только заберёте доход": "! It will appear as soon as you collect your income",
"Кибер-Спрут!": "Cyber Octopus!",
"Кибер-Спрут": "Cyber Octopus",
"Рейдерский Дирижабль!": "Raider Airship!",
"Рейдерский Дирижабль": "Raider Airship",
"ИИ-Корпорация!": "AI Corporation!",
"ИИ-Корпорация": "AI Corporation",
"Гигантский кибер-спрут обвил щупальцами здания и качает из них золото. Отбивайте здания — пока спрут держит город, его щит не пробить!": "A giant cyber octopus has wrapped its tentacles around the buildings and is pumping gold out of them. Free the buildings — while it holds the city, its shield can't be broken!",
"Над городом завис дирижабль рейдеров и сбрасывает бомбы. Сбивайте бомбы и выводите из строя двигатели!": "A raider airship hangs over the city dropping bombs. Shoot down the bombs and knock out its engines!",
"Взбесившийся ИИ захватил серверы казны. Повторяйте коды доступа, чтобы пробить его файрвол!": "A rogue AI has seized the treasury servers. Repeat the access codes to break through its firewall!",
"Отбивайте здания из щупалец (по несколько тапов). Пока спрут держит хоть одно здание — у головы щит.": "Free buildings from the tentacles (a few taps each). While the octopus holds any building, its head is shielded.",
"Бейте по двигателям дирижабля и сбивайте падающие бомбы — каждая упавшая отнимает 2 секунды.": "Hit the airship's engines and shoot down falling bombs — each one that lands costs 2 seconds.",
"Запомните, какие серверы мигнули, и нажмите их в том же порядке. Каждый верный код пробивает файрвол.": "Remember which servers blinked and tap them in the same order. Each correct code breaches the firewall.",
"Разбейте Кибер-Спрута, пока он не утащил три здания.": "Defeat the Cyber Octopus before it drags away three buildings.",
"Щупальца хватают здания — тапайте по щупальцу, пока счётчик не дойдёт до нуля: здание освободится, а спрут получит урон.": "Tentacles grab buildings — tap a tentacle until its counter reaches zero: the building is freed and the octopus takes damage.",
"Пока спрут держит хоть одно здание, у головы щит. Когда все здания свободны — бейте прямо по голове.": "While the octopus holds any building, its head is shielded. When all buildings are free — hit the head directly.",
"Не успели освободить здание — спрут его утащит. Три здания — поражение.": "If you don't free a building in time, the octopus drags it away. Three buildings — defeat.",
"Снять половину прочности спрута": "Take down half of the octopus's health",
"Разбить спрута": "Defeat the octopus",
"Разбить спрута, когда осталось 10 с или больше": "Defeat the octopus with 10 s or more left",
"Выведите из строя все двигатели дирижабля.": "Knock out all of the airship's engines.",
"Тапайте по двигателям на корпусе — у каждого свой запас прочности.": "Tap the engines on the hull — each has its own durability.",
"Дирижабль сбрасывает бомбы: тапните по бомбе, пока она падает. Упавшая бомба отнимает 2 секунды.": "The airship drops bombs: tap a bomb while it's falling. A bomb that lands costs 2 seconds.",
"Снять половину прочности двигателей": "Take down half of the engines' durability",
"Сбить дирижабль": "Shoot down the airship",
"Сбить дирижабль, когда осталось 10 с или больше": "Shoot down the airship with 10 s or more left",
"Пробейте файрвол ИИ: повторите все коды доступа.": "Breach the AI's firewall: repeat all the access codes.",
"Серверы мигают по очереди — запомните порядок.": "Servers blink one by one — remember the order.",
"Когда появится «Повторите код», нажмите серверы в том же порядке. С каждым раундом код длиннее.": "When «Repeat the code» appears, tap the servers in the same order. The code gets longer every round.",
"Ошибка отнимает жизнь (всего 3) и показывает новый код.": "A mistake costs a life (3 in total) and shows a new code.",
"Пробить половину файрвола": "Breach half of the firewall",
"Пробить файрвол": "Breach the firewall",
"Пробить файрвол, когда осталось 10 с или больше": "Breach the firewall with 10 s or more left",
"Смотрите на код…": "Watch the code…",
"Ошибка доступа!": "Access denied!",
"ПРОБОЙ!": "BREACH!",
"Щит!": "Shield!",
"Спрут разбит! Щупальца отпустили город, а золото — ваше!": "The octopus is defeated! The tentacles let go of the city, and the gold is yours!",
"Спрут уполз, бросив часть добычи": "The octopus crawled away, dropping part of the loot",
"Спрут утащил три здания…": "The octopus dragged away three buildings…",
"Спрут удержал город…": "The octopus held on to the city…",
"Дирижабль рухнул за городом! Груз золота ваш!": "The airship crashed outside the city! The gold cargo is yours!",
"Дирижабль ушёл на одном двигателе, сбросив часть груза": "The airship limped away on one engine, dropping part of its cargo",
"Рейдеры улетели с добычей…": "The raiders flew off with the loot…",
"Файрвол пробит! ИИ отключён, казна снова ваша!": "Firewall breached! The AI is shut down and the treasury is yours again!",
"ИИ закрылся в облаке, но часть золота вернулась": "The AI locked itself in the cloud, but part of the gold came back",
"ИИ распознал взлом и заблокировал доступ…": "The AI detected the hack and blocked access…",
"ИИ успел перекачать золото…": "The AI managed to siphon off the gold…",
"−2 с": "−2 s",
"Босс недели": "Boss of the week",
"Вызвать": "Summon",
"Трофей": "Trophy",
"Трофей недели": "Trophy of the week",
"1 ч дохода": "1 h of income",
"сферы": "spheres",
"небесная звезда": "heavenly star",
"небесных звёзд": "heavenly stars",
"сфер": "spheres",
"🏆 Цель «Босса недели» выполнена! Заберите сундук в «Заданиях»": "🏆 «Boss of the week» goal complete! Claim the chest in «Quests»",
"Охотник недели": "Hunter of the week",
"Выполнить цель «Босса недели» 3 раза": "Complete the «Boss of the week» goal 3 times",
"Морепродукт": "Seafood",
"Разбить Кибер-Спрута": "Defeat the Cyber Octopus",
"ПВО империи": "Imperial air defense",
"Сбить Рейдерский Дирижабль": "Shoot down the Raider Airship",
"Восстание машин отменяется": "The machine uprising is cancelled",
"Пробить файрвол ИИ-Корпорации": "Breach the AI Corporation's firewall",
"🐙 Босс Кибер-Спрут": "🐙 Boss: Cyber Octopus",
"🎈 Босс Рейдерский Дирижабль": "🎈 Boss: Raider Airship",
"🧠 Босс ИИ-Корпорация": "🧠 Boss: AI Corporation",
"День пальцев": "Finger Day",
"Промышленный бум": "Industrial Boom",
"Распродажа": "Sale",
"Турнир": "Tournament",
"Золотая лихорадка": "Gold Rush",
"Кометы прилетают в 3 раза чаще": "Comets arrive 3 times more often",
"Сила тапа −50%": "Tap power −50%",
"Сила тапа ×3": "Tap power ×3",
"Доход предприятий −50%": "Business income −50%",
"Доход предприятий ×2": "Business income ×2",
"Кометы прилетают в 2 раза реже": "Comets arrive 2 times less often",
"Предприятия дешевле на 30%": "Businesses are 30% cheaper",
"Сила тапа −30%": "Tap power −30%",
"«Огонь x3» горит вдвое дольше": "«Fire x3» burns twice as long",
"Доход предприятий −25%": "Business income −25%",
"Награды мини-игр и боссов ×2": "Mini-game and boss rewards ×2",
"Кометы чаще в 2 раза и тап ×2": "Comets 2 times more often and tap ×2",
"Доход предприятий −60%": "Business income −60%",
"Награда за правило получена ✓": "Rule reward received ✓",
"Подарок 30-го дня!": "Day 30 gift!",
"Сегодня — большой сундук!": "Today — the big chest!",
"Награда на сегодня получена. Пропуски дней не сбрасывают прогресс.": "Today's reward is claimed. Skipping days doesn't reset progress.",
"Одна награда в день. Пропуски дней не сбрасывают прогресс — календарь просто продолжится.": "One reward per day. Skipping days doesn't reset progress — the calendar just continues.",
"Награда за вход": "Login reward",
"До закалки x2": "Until x2 tempering",
"Хакерская атака": "Hacker Attack",
"Боевой Мех": "Battle Mech",
"☁️ Вы играете как гость": "☁️ You are playing as a guest",
"Прогресс сохраняется только на этом устройстве. Войдите в Яндекс, чтобы играть с одним прогрессом на телефоне и компьютере.": "Progress is saved only on this device. Sign in to Yandex to keep one progress on your phone and computer.",
"Войти": "Sign in",
"Вход выполнен — загружаем прогресс…": "Signed in — loading your progress…",
"☁️ В облаке найден прогресс больше — перезапустите игру, чтобы продолжить с него": "☁️ Bigger progress found in the cloud — restart the game to continue from it",
"Луна": "Moon",
"Марс": "Mars",
"Солнце": "Sun",
"Сундуки пропуска": "Pass chests",
"сфер — удача!": "spheres — lucky!",
"Как играть": "How to play",
"Звёзды": "Stars",
"Сложность": "Difficulty",
"Понятно": "Got it",
"Чем сложнее, тем быстрее и труднее игра, но награда больше: лёгкая ×1, средняя ×2, сложная ×4. Кристаллы дают только за победу.": "The harder it is, the faster and tougher the game, but the reward is bigger: easy ×1, medium ×2, hard ×4. Crystals are given only for a win.",
"Собейте дрона-налётчика, пока не вышло время.": "Shoot down the raider drone before time runs out.",
"Тапайте по дрону — он перелетает с места на место, успевайте за ним.": "Tap the drone — it hops from place to place, keep up with it.",
"Иногда удар критический — урон ×3.": "Sometimes a hit is critical — ×3 damage.",
"Подбить дрона хотя бы наполовину": "Damage the drone at least halfway",
"Сбить дрона": "Shoot down the drone",
"Сбить дрона, когда осталось 10 с или больше": "Shoot down the drone with 10 s or more left",
"Отбейте хакерскую атаку: снизьте прочность хакера до нуля.": "Repel the hacker attack: bring the hacker's integrity to zero.",
"Давите вирусных червей, пока они торчат из серверов.": "Squash virus worms while they stick out of the servers.",
"Золотой червь — удар ×5.": "A golden worm — ×5 hit.",
"Пропустите трёх червей — экран заглючит.": "Miss three worms — the screen glitches.",
"Снять половину прочности хакера": "Take down half of the hacker's integrity",
"Отбить атаку": "Repel the attack",
"Отбить атаку, когда осталось 10 с или больше": "Repel the attack with 10 s or more left",
"Взорвите боевого меха.": "Blow up the battle mech.",
"Сначала сбейте слабые точки брони — они вспыхивают по очереди.": "First knock out the armor weak points — they light up one by one.",
"Потом бейте в реактор, пока он открыт и светится. Закрытый реактор урон не получает.": "Then hit the reactor while it is open and glowing. A closed reactor takes no damage.",
"Сбить всю броню": "Knock off all the armor",
"Взорвать меха": "Blow up the mech",
"Взорвать меха, когда осталось 8 с или больше": "Blow up the mech with 8 s or more left",
"Найдите кувшин с золотом.": "Find the jug with the gold.",
"Запомните, под каким кувшином золото.": "Remember which jug hides the gold.",
"Следите за ним, пока кувшины перемешиваются, и нажмите на него.": "Follow it while the jugs are shuffled, then tap it.",
"Промах — утешительный приз": "Miss — consolation prize",
"Угадать на лёгкой сложности": "Guess right on easy",
"Угадать на средней или сложной": "Guess right on medium or hard",
"Найдите все пары карточек.": "Find all pairs of cards.",
"Открывайте по две карточки — одинаковые остаются открытыми.": "Flip two cards at a time — matching ones stay open.",
"Ошибка отнимает время.": "A mistake costs time.",
"Найти хотя бы одну пару": "Find at least one pair",
"Найти все пары": "Find all pairs",
"Найти все пары, когда осталось 30% времени или больше": "Find all pairs with 30% of the time or more left",
"Наполните корзину монетами до цели.": "Fill the basket with coins up to the goal.",
"Водите пальцем — корзина едет за ним.": "Slide your finger — the basket follows it.",
"Монета +1, кристалл +3, жук −3.": "Coin +1, crystal +3, beetle −3.",
"Серия из 5 поимок подряд — всё ×2.": "A streak of 5 catches in a row — everything ×2.",
"Поймать 30% от цели": "Catch 30% of the goal",
"Наполнить корзину (цель)": "Fill the basket (goal)",
"Переполнить корзину на 30% (например, 63 при цели 48)": "Overfill the basket by 30% (e.g. 63 with a goal of 48)",
"Выкуйте слиток точными ударами.": "Forge an ingot with precise strikes.",
"Бейте по кругу, когда внешнее кольцо сожмётся до него — чем точнее, тем лучше.": "Hit the circle when the outer ring shrinks onto it — the more precise, the better.",
"Двойные и тройные удары — бейте по порядку цифр.": "Double and triple strikes — hit in the order of the numbers.",
"Точность от 45%": "Accuracy 45% or more",
"Точность от 75%": "Accuracy 75% or more",
"Точность от 90% и ни одного промаха": "Accuracy 90% or more and no misses",
"Соедините все звёзды по возрастанию чисел.": "Connect all stars in ascending order of numbers.",
"Нажимайте звёзды по порядку: 1, 2, 3…": "Tap the stars in order: 1, 2, 3…",
"На сложной числа идут с пропусками, а звёзды плывут.": "On hard, numbers skip and the stars drift.",
"Соединить половину звёзд": "Connect half of the stars",
"Соединить все звёзды": "Connect all stars",
"Все звёзды без ошибок, когда осталось 35% времени или больше": "All stars with no mistakes and 35% of the time or more left",
"Нейро-интерфейс": "Neuro Link",
"Нано-рой": "Nano Swarm",
"Фотонное копьё": "Photon Lance",
"Длань Сверхновой": "Supernova Hand",
"Перстень Пульсара": "Pulsar Ring",
"Касание Кротовой Норы": "Wormhole Touch",
"Тахионный Тап": "Tachyon Tap",
"Ладонь Мультивселенной": "Multiverse Palm",
"Перст Творения": "Finger of Genesis",
"Омега-Клик": "Omega Click",
"СОВЕТ ХРАНИТЕЛЕЙ": "COUNCIL OF KEEPERS",
"Кого поставить в этот слот? Стоит 1": "Who goes into this slot? Costs 1",
"· Влияние:": "· Influence:",
"Сейчас:": "Now:",
"перейдёт из другого слота": "moves from another slot",
"Нет Влияния — оно восстанавливается по 1 в час": "No Influence — it restores 1 per hour",
"Звёздная Жатва": "Star Harvest",
"Вечная Казна": "Eternal Vault",
"Имперское Наследство": "Imperial Heritage",
"Кристальная Память": "Crystal Memory",
"Звёздный Старт": "Star Start",
"Перст Титана": "Titan's Finger",
"Вечное Пламя": "Eternal Flame",
"Охотник на Боссов": "Boss Hunter",
"Звёздная Связь": "Star Bond",
"Небесные Скидки": "Heavenly Discounts",
"Золотое Касание": "Golden Touch",
"Звездопад": "Starfall",
"Астральный Двигатель": "Astral Engine",
"Абсолют": "Absolute",
"Каждое Вознесение приносит больше звёзд: +1 небесная звезда за каждый уровень (до +3).": "Every Ascension brings more stars: +1 heavenly star per level (up to +3).",
"Офлайн-доход копится до 36 часов и приходит на 50% больше.": "Offline income accumulates for up to 36 hours and is 50% bigger.",
"После Вознесения сразу есть 25 Авто-кликеров, 15 Обученных хомяков и 10 Деревянных счётов.": "After Ascension you start with 25 Auto-clickers, 15 Trained Hamsters and 10 Wooden Abacuses.",
"Каждое Вознесение дарит +5 кристаллов.": "Every Ascension grants +5 crystals.",
"Первые 15 минут после Вознесения весь доход ×3 — новый забег разгоняется мгновенно.": "For the first 15 minutes after Ascension all income is ×3 — the new run speeds up instantly.",
"Сила тапа растёт навсегда: +20% за каждый уровень (до +100%).": "Tap power grows permanently: +20% per level (up to +100%).",
"Огонь x3 горит на 50% дольше.": "Fire x3 burns 50% longer.",
"Награды мини-игр и боссов ×1.5.": "Mini-game and boss rewards ×1.5.",
"Экспедиции питомцев идут на 25% быстрее и приносят на 25% больше добычи.": "Pet expeditions are 25% faster and bring 25% more loot.",
"Предприятия дешевле на 3% за каждый уровень (до −15%).": "Businesses are 3% cheaper per level (up to −15%).",
"«Счастливчик» с комет даёт ×1.5 монет, а алмазный метеорит — на 1 кристалл больше.": "Comet «Lucky» gives ×1.5 coins, and the diamond meteorite gives 1 more crystal.",
"С шансом 15% сразу после пойманной кометы прилетает ещё одна.": "With a 15% chance another comet flies in right after you catch one.",
"Доход предприятий +10% за каждый уровень навсегда (до +50%).": "Business income +10% per level permanently (up to +50%).",
"Вершина Небесного Древа: весь доход ×2 навсегда.": "The peak of the Heavenly Tree: all income ×2 permanently.",
"☄️ Звездопад! Следом летит ещё одна комета!": "☄️ Starfall! Another comet is on its way!",
"🚀 Звёздный Старт: весь доход ×3 на 15 минут!": "🚀 Star Start: all income ×3 for 15 minutes!",
"Отрядов в пути": "Parties out",
"Ждут добычу": "Loot ready",
"Походов": "Expeditions",
"👑 Золотой монумент": "👑 Golden Monument",
"Подданные принесли дары Императору:": "Your subjects brought gifts to the Emperor:",
"Следующее подношение через 4 ч": "Next offering in 4 h",
"Статуя Императора — эксклюзив премиум-пропуска": "The Emperor's statue — a premium pass exclusive",
"СКИНЫ": "SKINS",
"АРТЕФАКТЫ": "ARTIFACTS",
"ВОЗНЕСЕНИЕ": "ASCENSION",
"ДОСТИЖЕНИЯ": "ACHIEVEMENTS",
"Премиум-пропуск активирован!": "Premium pass activated!",
"Облик-дракон": "Dragon skin",
"Великолепно!": "Magnificent!",
"Бонусный сундук": "Bonus chest",
"Нажмите на сундук": "Tap the chest",
"сфера — удача!": "sphere — lucky!",
"Сначала сбейте слабые точки брони — они вспыхивают по очереди. Потом бейте в реактор, пока он открыт и светится.": "First knock out the armor weak points — they light up one by one. Then hit the reactor while it's open and glowing.",
"Бейте в реактор!": "Hit the reactor!",
"Пробито!": "Pierced!",
"Рейдеры прислали боевого меха захватить золотой рудник. Сбейте слабые точки брони и бейте в реактор!": "Raiders sent a battle mech to seize the gold mine. Knock out the armor weak points and hit the reactor!",
"ПВО казны": "Treasury Air Defense",
"Сбить Дрона-Налётчика": "Shoot down the Raider Drone",
"Гроза дронов": "Drone Bane",
"Сбить Дрона-Налётчика 5 раз": "Shoot down the Raider Drone 5 times",
"Небесный щит": "Sky Shield",
"Сбить Дрона-Налётчика 15 раз": "Shoot down the Raider Drone 15 times",
"Антивирус": "Antivirus",
"Отбить хакерскую атаку": "Repel the hacker attack",
"Металлолом": "Scrap Metal",
"Победить Боевого Меха": "Defeat the Battle Mech",
"Победить Дрона, Хакера и Меха": "Defeat the Drone, the Hacker and the Mech",
"Дроны-налётчики облетают империю стороной. Один даже прислал письмо с извинениями.": "Raider drones avoid the empire. One even sent a letter of apology.",
"🛸 Дрон-Налётчик: босс, которого нужно сбить за 30 секунд": "🛸 Raider Drone: a boss you must shoot down in 30 seconds",
"💻 Новые боссы — Хакерская атака и Боевой Мех": "💻 New bosses — Hacker Attack and Battle Mech",
"🛸 Дрон-Налётчик": "🛸 Raider Drone",
"💻 Босс Хакер": "💻 Boss Hacker",
"🤖 Босс Боевой Мех": "🤖 Boss Battle Mech",
"Радар засёк дрона": "Radar spotted a drone",
"Радары засекли над горами Дрона-Налётчика. Он летит к казне.": "Radars spotted the Raider Drone over the mountains. It's heading for the treasury.",
"дрон прилетит прямо сейчас": "the drone arrives right now",
"+3 мин дохода, дрон пролетит мимо": "+3 min of income, the drone flies past",
"Дрон-Налётчик!": "Raider Drone!",
"Огромный боевой дрон кружит над казной и тянет манипулятор к золоту. Сбейте его, пока он не улетел с добычей!": "A huge combat drone circles the treasury, reaching for the gold with its claw. Shoot it down before it flies off with the loot!",
"Дрон сбит! Весь груз золота ваш!": "Drone down! All the gold is yours!",
"Дрон подбит и улетел, обронив часть золота": "The damaged drone flew off, dropping some of the gold",
"Дрон улетел невредимым…": "The drone got away unharmed…",
"Неоновый сезон": "Neon Season",
"🛸 Дрон": "🛸 Drone",
"💻 Хакер": "💻 Hacker",
"🤖 Мех": "🤖 Mech",
"🛸 БОСС": "🛸 BOSS",
"💻 БОСС": "💻 BOSS",
"🤖 БОСС": "🤖 BOSS",
"Хакерская атака!": "Hacker Attack!",
"Хакер Zer0 запустил вирусных червей в серверы казны. Давите червей, пока они не скачали золото!": "The hacker Zer0 has unleashed virus worms into the treasury servers. Squash the worms before they download the gold!",
"Боевой Мех!": "Battle Mech!",
"Рейдеры прислали боевого меха захватить золотой рудник. Сбейте болты брони и бейте в реактор!": "Raiders sent a battle mech to seize the gold mine. Knock out the armor bolts and hit the reactor!",
"Атака отбита! Хакер сбежал, бросив украденное!": "Attack repelled! The hacker fled, leaving the loot behind!",
"Хакер отступил, но успел скачать часть золота": "The hacker retreated, but managed to download some of the gold",
"Хакер увёл золото из казны…": "The hacker stole the gold from the treasury…",
"Мех взорван — золотой рудник ваш!": "Mech destroyed — the gold mine is yours!",
"Броня сбита, но мех устоял. Часть золота ваша": "The armor is down, but the mech held. Part of the gold is yours",
"Мех остался невредим…": "The mech is unharmed…",
"Болт!": "Bolt!",
"Бейте в красный реактор!": "Hit the red reactor!",
"Зелёный — ремонт меха!": "Green means repair!",
"Ремонт +2": "Repair +2",
"Давите вирусных червей, пока они торчат из серверов! Золотой червь — удар ×5. Пропустите трёх — экран заглючит.": "Squash the virus worms while they stick out of the servers! A golden worm counts ×5. Miss three and the screen glitches.",
"Сначала сбейте болты брони — они вспыхивают по очереди. Потом бейте в реактор, когда он красный. Зелёный реактор чинит меха — его не трогайте!": "First knock out the armor bolts — they light up one by one. Then hit the reactor while it's red. A green reactor repairs the mech — don't touch it!",
"Тапайте по дрону! Он перелетает — успевайте за ним. Иногда удар критический (×3).": "Tap the drone! It moves around — keep up with it. Some hits are critical (×3).",
"Бейте в красное ядро!": "Hit the red core!",
"Зелёное лечит голема!": "Green heals the golem!",
"Лечение +2": "Heal +2",
"Сначала разбейте руны брони — они вспыхивают по очереди. Потом бейте в ядро, когда оно красное. Зелёное ядро лечит голема — его не трогайте!": "First break the armor runes — they light up one by one. Then hit the core while it's red. A green core heals the golem — don't touch it!",
"Нажмите, чтобы продолжить": "Tap to continue",
"ступень 25": "tier 25",
"Нажмите на награду, чтобы узнать, что она даёт": "Tap a reward to see what it gives",
"Неутомимый палец": "Tireless Finger",
"Сделать 1 500 тапов": "Make 1,500 taps",
"Стройка века": "Construction of the Century",
"Купить 25 улучшений или построек": "Buy 25 upgrades or buildings",
"Звездочёт": "Stargazer",
"Поймать 4 кометы": "Catch 4 comets",
"Игрок дня": "Player of the Day",
"Победить в мини-игре": "Win a mini-game",
"Ученик мага": "Mage's Apprentice",
"Сотворить 2 заклинания": "Cast 2 spells",
"Жаркий день": "Hot Day",
"Запустить Лихорадку 2 раза": "Start Fever 2 times",
"Испытать удачу": "Try Your Luck",
"Крутнуть Колесо фортуны": "Spin the Wheel of Fortune",
"Железная хватка": "Iron Grip",
"Сделать 20 000 тапов": "Make 20,000 taps",
"Ловец звёзд": "Star Catcher",
"Поймать 25 комет": "Catch 25 comets",
"Чемпион арены": "Arena Champion",
"Победить в 6 мини-играх": "Win 6 mini-games",
"Архитектор": "Architect",
"Купить 150 улучшений или построек": "Buy 150 upgrades or buildings",
"Дальние дороги": "Long Roads",
"Завершить 3 экспедиции": "Complete 3 expeditions",
"Гроза чудовищ": "Bane of Monsters",
"Победить 2 боссов": "Defeat 2 bosses",
"Чернокнижник": "Warlock",
"Сотворить 12 заклинаний": "Cast 12 spells",
"Задания Имперского пропуска": "Imperial Pass tasks",
"Задания пропуска": "Pass tasks",
"🎫 Пропуск": "🎫 Pass",
"Ежедневно": "Daily",
"Еженедельно": "Weekly",
"✨ ВЕРНУТЬСЯ": "✨ RETURN",
"👑 Премиум-пропуск: эксклюзивный Грифон, облик «Императорский Дракон», короны при тапе и золотой монумент": "👑 Premium pass: the exclusive Griffin, the «Imperial Dragon» skin, tap crowns and a golden monument",
"🗺️ Экспедиции: питомцы уходят в походы и приносят добычу": "🗺️ Expeditions: pets go on trips and bring back loot",
"🐙 Новые боссы — Кракен и Каменный Голем": "🐙 New bosses — the Kraken and the Stone Golem",
"🎪 Ярмарка выходных: по субботам и воскресеньям x2 к наградам мини-игр и свои задания": "🎪 Weekend Fair: x2 mini-game rewards and special tasks every Saturday and Sunday",
"2. Кто пойдёт?": "2. Who's going?",
"Ускорить ×2": "Speed up ×2",
"Грифон, облик «Императорский Дракон», короны при тапе, монумент в городе, шкатулка каждый день, ~180": "Griffin, the «Imperial Dragon» skin, tap crowns, a city monument, a daily box, ~180",
"+15% к наградам мини-игр за уровень (до +60%)": "+15% mini-game rewards per level (up to +60%)",
"+3 кристалла каждый день": "+3 gems every day",
"+30 минут дохода каждый день": "+30 minutes of income every day",
"+5% ко всему доходу за каждый уровень (до +20%)": "+5% to all income per level (up to +20%)",
"+70% к силе тапа": "+70% tap power",
"1. Куда отправимся?": "1. Where to?",
"x2 к наградам мини-игр и боссов": "x2 rewards from mini-games and bosses",
"Активно": "Active",
"Бейте в ядро!": "Hit the core!",
"Бейте по щупальцам, пока они над водой! Золотое щупальце — удар ×5. Упустите три — Кракен брызнет чернилами.": "Hit the tentacles while they're above water! A golden tentacle counts ×5. Miss three and the Kraken squirts ink.",
"Блок!": "Blocked!",
"Броня": "Armor",
"Броня разбита, но голем устоял. Часть золота ваша": "The armor is broken, but the golem stood firm. Part of the gold is yours",
"В походе": "On expedition",
"Великий путешественник": "Great Traveler",
"Включается и выключается в окне пропуска": "Toggle it on and off in the pass window",
"Вместе с ним — сундук: 60 кристаллов, 10 сфер и 5 звёзд": "Comes with a chest: 60 gems, 10 spheres and 5 stars",
"Возвышается до ★★★ — с короной и золотыми крыльями": "Ascends up to ★★★ — with a crown and golden wings",
"Второй отряд": "Second party",
"Выполнить 15 заданий Ярмарки выходных": "Complete 15 Weekend Fair tasks",
"Выполнить 3 задания Ярмарки выходных": "Complete 3 Weekend Fair tasks",
"Голем остался невредим…": "The golem is unharmed…",
"Голем рассыпался — золотая жила ваша!": "The golem crumbled — the gold vein is yours!",
"Горный перевал": "Mountain Pass",
"Гость ярмарки": "Fair Guest",
"Готово — заберите в пропуске": "Ready — claim it in the pass",
"Гроза морей": "Terror of the Seas",
"Добыча экспедиции": "Expedition loot",
"Древние руины, полные сокровищ": "Ancient ruins full of treasure",
"Древний голем охраняет золотую жилу. Разбейте руны брони и бейте в ядро!": "An ancient golem guards a gold vein. Break the armor runes and hit the core!",
"Душа праздника": "Life of the Party",
"ЗОЛОТО −5": "GOLD −5",
"Забрать добычу": "Claim loot",
"Завершить 25 экспедиций": "Complete 25 expeditions",
"Завершить первую экспедицию": "Complete your first expedition",
"Затерянный город": "Lost City",
"Золотой монумент": "Golden Monument",
"Идёт сейчас!": "On now!",
"Из гавани поднялся Кракен и тянет щупальца к казне. Бейте по щупальцам, пока он не утащил золото!": "The Kraken has risen from the harbor and reaches for the treasury. Hit the tentacles before it drags the gold away!",
"Из-под пальца вылетают золотые короны": "Golden crowns fly out from under your finger",
"Императорский Дракон": "Imperial Dragon",
"Имперские короны": "Imperial Crowns",
"К пропуску": "To the pass",
"Каждую субботу и воскресенье Империя гуляет!": "Every Saturday and Sunday the Empire celebrates!",
"Каждую субботу и воскресенье Империя устраивает ярмарку. Заглядывайте!": "Every Saturday and Sunday the Empire holds a fair. Drop by!",
"Каменный Голем!": "Stone Golem!",
"Камнелом": "Stonebreaker",
"Карта Империи": "Map of the Empire",
"Короткий поход за ходовым товаром": "A short trip for popular goods",
"Кракен ранен и ушёл под воду, обронив часть золота": "The wounded Kraken dove under, dropping some of the gold",
"Кракен уплыл в глубины, бросив сокровища!": "The Kraken fled into the depths, leaving its treasure!",
"Кракен утащил золото на дно…": "The Kraken dragged the gold to the bottom…",
"Кракен!": "Kraken!",
"Красный дракон императоров на вашей монете": "The emperors' red dragon on your coin",
"Нет свободных питомцев. Спутник остаётся с вами — заведите ещё питомца во вкладке «Питомцы».": "No free pets. Your companion stays with you — get another pet in the «Pets» tab.",
"Нужен второй питомец: спутник остаётся с вами": "You need a second pet: your companion stays with you",
"Нужен второй питомец (первый остаётся спутником)": "You need a second pet (the first stays as a companion)",
"Выберите маршрут и питомца": "Choose a route and a pet",
"Нужен премиум-пропуск": "Premium pass required",
"Облик": "Skin",
"Облик монеты": "Coin skin",
"Остаётся в городе навсегда": "Stays in the city forever",
"Остаётся навсегда, купить отдельно нельзя": "Yours forever, can't be bought separately",
"Откроется, когда у вас будет 4 питомца или после первого Вознесения": "Unlocks when you have 4 pets or after your first Ascension",
"Открывается в окне пропуска, пока активен премиум": "Opens in the pass window while premium is active",
"Отправить экспедицию": "Send an expedition",
"Отправьте питомца в поход за добычей": "Send a pet out for loot",
"Охотник на чудовищ": "Monster Hunter",
"Первопроходец": "Pathfinder",
"Питомец": "Pet",
"Питомцы уходят в походы и приносят добычу — даже когда вы не в игре. Питомец-спутник остаётся с вами.": "Pets go on expeditions and bring back loot — even while you're offline. Your companion pet stays with you.",
"Победить Дракона, Кракена и Голема": "Defeat the Dragon, the Kraken and the Golem",
"Победить Каменного Голема": "Defeat the Stone Golem",
"Победить Кракена": "Defeat the Kraken",
"Победить в 3 мини-играх": "Win 3 mini-games",
"Победить любого босса": "Defeat any boss",
"Подарок каждый день": "A gift every day",
"Получить 3 звезды в 7 разных мини-играх": "Get 3 stars in 7 different mini-games",
"Походы питомцев": "Pet expeditions",
"Премиум-пропуск, ступень 25": "Premium pass, tier 25",
"Премиум-линейка наград текущего сезона: эксклюзивный питомец Грифон, облик монеты «Императорский Дракон», короны при тапе, золотой монумент в городе, шкатулка каждый день и +10% к доходу до конца сезона.": "The premium reward track of the current season: the exclusive Griffin pet, the «Imperial Dragon» coin skin, tap crowns, a golden monument in the city, a daily box and +10% income until the end of the season.",
"Руна!": "Rune!",
"Сначала разбейте руны брони — они вспыхивают по очереди. Потом бейте в ядро, пока оно светится!": "First break the armor runes — they light up one by one. Then hit the core while it glows!",
"Собрать все 14 обычных обликов монеты": "Collect all 14 regular coin skins",
"События и боссы приходят чаще": "Events and bosses come more often",
"Кометы прилетают на 30% чаще": "Comets arrive 30% more often",
"Статуя императора встаёт на центральной площади": "The emperor's statue rises on the central square",
"Суббота и воскресенье": "Saturday and Sunday",
"Только в Имперском пропуске": "Only in the Imperial Pass",
"Только у владельцев премиума": "Premium owners only",
"Тропы через перевал к самоцветным копям": "Trails across the pass to the gem mines",
"Украшение города": "City decoration",
"Фейерверки над городом по вечерам": "Fireworks over the city in the evenings",
"Шкатулка": "Box",
"ЭКСПЕДИЦИИ": "EXPEDITIONS",
"Эксклюзив Имперского пропуска: красный дракон императоров, приносящий кликам богатство.": "Imperial Pass exclusive: the emperors' red dragon that brings wealth to every click.",
"Эксклюзив пропуска — подробнее": "Pass exclusive — details",
"Эксклюзивные Грифон и облик-дракон, короны при тапе, монумент в городе, шкатулка каждый день и +10% к доходу. Нажмите, чтобы посмотреть.": "Exclusive Griffin and dragon skin, tap crowns, a city monument, a daily box and +10% income. Tap to take a look.",
"Экспедиции": "Expeditions",
"Экспедиция ускорена вдвое!": "Expedition sped up ×2!",
"Эффект тапа": "Tap effect",
"Ядро": "Core",
"Ярмарка": "Fair",
"Ярмарка выходных": "Weekend Fair",
"Ярмарка соседей": "Neighbors' Fair",
"облик уже ваш — вместо него +35 💎": "skin already yours — +35 💎 instead",
"облик монеты «Императорский Дракон»!": "the «Imperial Dragon» coin skin!",
"✓ Уже ваше": "✓ Already yours",
"🐙 Босс Кракен": "🐙 Boss Kraken",
"🐙 Кракен": "🐙 Kraken",
"🗿 Босс Каменный Голем": "🗿 Boss Stone Golem",
"🗿 Голем": "🗿 Golem",
"🐙 БОСС": "🐙 BOSS",
"🗿 БОСС": "🗿 BOSS",
"Имперский Грифон": "Imperial Griffin",
"Аурелий": "Aurelius",
"Эксклюзив Имперского пропуска. Страж казны: усиливает весь доход и награды мини-игр.": "Imperial Pass exclusive. Guardian of the treasury: boosts all income and mini-game rewards.",
"Казна под охраной! 🦅": "The treasury is guarded! 🦅",
"Ни одна монета не пропадёт! 👑": "Not a single coin will be lost! 👑",
"Империя в надёжных когтях! ✨": "The empire is in safe claws! ✨",
"Эксклюзив пропуска": "Pass exclusive",
"Эксклюзив премиума": "Premium exclusives",
"Грифон": "Griffin",
"Короны при тапе": "Crowns on tap",
"Монумент в городе": "City monument",
"Шкатулка дня": "Daily casket",
"ступень 10": "tier 10",
"ступень 20": "tier 20",
"ступень 30": "tier 30",
"каждый день": "every day",
"✓ ваше": "✓ yours",
"Монумент": "Monument",
"Короны": "Crowns",
"Короны при тапе:": "Crowns on tap:",
"вкл": "on",
"выкл": "off",
"Открыть шкатулку дня: +3": "Open the daily casket: +3",
"и 30 мин дохода": "and 30 min of income",
"Грифон, короны при тапе, монумент в городе, шкатулка каждый день, ~180": "Griffin, crowns on tap, a city monument, a daily casket, ~180",
", сферы и звёзды. +10% к доходу до конца сезона. Награды за пройденные ступени тоже откроются.": ", spheres and stars. +10% income until the season ends. Rewards for reached tiers unlock too.",
"Эксклюзивный Грифон, короны при тапе, монумент в городе, шкатулка каждый день и +10% к доходу. Нажмите, чтобы посмотреть.": "Exclusive Griffin, crowns on tap, a city monument, a daily casket and +10% income. Tap to see more.",
"Премиум-линейка наград текущего сезона: эксклюзивный питомец Грифон, короны при тапе, золотой монумент в городе, шкатулка каждый день и +10% к доходу до конца сезона.": "Premium reward track for the current season: exclusive Griffin pet, crowns on tap, a golden city monument, a daily casket and +10% income until the season ends.",
"Грифон уже ваш — вместо него +30 💎": "You already have the Griffin — +30 💎 instead",
"Имперский Грифон теперь ваш питомец!": "The Imperial Griffin is now your pet!",
"Короны уже ваши — вместо них +20 💎": "You already have the crowns — +20 💎 instead",
"эффект «Имперские короны» при тапе!": "the “Imperial Crowns” tap effect!",
"Подданный сезона": "Season Subject",
"Дойти до 10-й ступени Имперского пропуска": "Reach tier 10 of the Imperial Pass",
"Гордость сезона": "Pride of the Season",
"Пройти все 30 ступеней Имперского пропуска": "Complete all 30 Imperial Pass tiers",
"Имперский меценат": "Imperial Patron",
"Открыть премиум-пропуск": "Unlock the premium pass",
"Повелитель грифонов": "Griffin Lord",
"Получить Имперского Грифона": "Get the Imperial Griffin",
"Верный подданный": "Loyal Subject",
"Открыть 7 шкатулок дня": "Open 7 daily caskets",
"Получить 3 звезды в любой мини-игре": "Get 3 stars in any mini-game",
"Мастер развлечений": "Master of Games",
"Получить 3 звезды в 4 разных мини-играх": "Get 3 stars in 4 different mini-games",
"Чемпион ярмарки": "Fair Champion",
"Получить 3 звезды во всех 7 мини-играх": "Get 3 stars in all 7 mini-games",
"Мастер-кузнец": "Master Smith",
"Собрать комбо 20 в Имперской Кузнице": "Reach a 20 combo in the Imperial Forge",
"Ловкие руки": "Nimble Hands",
"Поймать 15 монет подряд в Монетопаде": "Catch 15 coins in a row in Coinfall",
"Мастер связей": "Master of Links",
"Купить 10 синергий": "Buy 10 synergies",
"Всё связано": "All Connected",
"Купить все синергии": "Buy every synergy",
"Чародей": "Sorcerer",
"Сотворить 25 заклинаний": "Cast 25 spells",
"Архимаг": "Archmage",
"Сотворить 150 заклинаний": "Cast 150 spells",
"Применить Кристаллизацию 7 раз": "Use Crystallization 7 times",
"Город построен": "City Complete",
"Построить все 20 наземных зданий города": "Build all 20 ground buildings in the city",
"Отцы города": "City Fathers",
"Довести Ратушу до 100 уровня": "Bring the Town Hall to level 100",
"Золотые руки": "Golden Hands",
"Купить все улучшения тапа": "Buy every tap upgrade",
"🏛️ 8 новых предприятий (Ратуша, Монетный двор, Торговый порт…) и фонтан на центральной площади": "🏛️ 8 new businesses (Town Hall, Royal Mint, Trade Port…) and a fountain on the central square",
"👆 6 новых улучшений тапа, 12 новых синергий и 6 новых заклинаний в Альманахе": "👆 6 new tap upgrades, 12 new synergies and 6 new spells in the Almanac",
"Лавка менялы": "Money Changer",
"Типография": "Printing House",
"Ломбард": "Pawn Shop",
"Ювелирный дом": "Jewelry House",
"Монетный двор": "Royal Mint",
"Торговый порт": "Trade Port",
"Ратуша": "Town Hall",
"Золотой рудник": "Gold Mine",
"Перстень казначея": "Treasurer's Signet",
"Золотой скипетр": "Golden Scepter",
"Имперский жезл": "Imperial Rod",
"Громовой молот": "Thunder Hammer",
"Штормовая перчатка": "Storm Gauntlet",
"Ионный пульсар": "Ion Pulsar",
"Бабушкины Сбережения": "Granny's Savings",
"Цифровая Печать": "Digital Printing",
"Менялы и Ростовщики": "Changers & Lenders",
"Лазерная Огранка": "Laser Cut",
"Печатный Двор": "Press Court",
"Цифровая Монета": "Digital Coin",
"Морская Торговля": "Sea Trade",
"Городская Казна": "City Treasury",
"Золотая Жила": "Gold Vein",
"Танкерный Флот": "Tanker Fleet",
"Марсианское Золото": "Martian Gold",
"Звёздная Чеканка": "Star Minting",
"Бабушки несут сбережения меняле: доход Лавки менялы удваивается (x2)!": "Grannies bring their savings to the changer: Money Changer income doubles (x2)!",
"Серверы управляют станками: Типография печатает вдвое больше (x2)!": "Servers run the presses: the Printing House prints twice as much (x2)!",
"Менялы отправляют клиентов в Ломбард: его доход удваивается (x2)!": "Changers send clients to the Pawn Shop: its income doubles (x2)!",
"Видеокарты рассчитывают идеальную огранку: Ювелирный дом приносит x2!": "GPUs compute the perfect cut: the Jewelry House earns x2!",
"Типография и Монетный двор работают в паре: доход Монетного двора x2!": "The Printing House and the Royal Mint work together: Royal Mint income x2!",
"Монетный двор выпускает цифровые монеты: Дата-центр приносит +80%!": "The Royal Mint issues digital coins: the Data Center earns +80%!",
"Биржа скупает грузы прямо в порту: доход Торгового порта x2!": "The exchange buys cargo right at the port: Trade Port income x2!",
"Ратуша хранит налоги в Банке: доход Ратуши и Банка удваивается (x2)!": "The Town Hall keeps taxes in the Bank: Town Hall and Bank income doubles (x2)!",
"Рудник поставляет золото ювелирам: Ювелирный дом приносит x2.5!": "The mine supplies gold to jewelers: the Jewelry House earns x2.5!",
"Порт отправляет нефть танкерами: доход Нефтяных вышек x2!": "The port ships oil by tanker: Oil Rig income x2!",
"Колония добывает золото на Марсе: Золотой рудник приносит x3!": "The colony mines gold on Mars: the Gold Mine earns x3!",
"Звёздная кузница чеканит монеты из звёздного металла: Монетный двор x3!": "The Star Forge mints coins from star metal: Royal Mint x3!",
"Пламя Усердия": "Flame of Zeal",
"Городской Сбор": "City Harvest",
"Дождь Монет": "Coin Shower",
"Ускорение Времени": "Time Haste",
"Кристаллизация": "Crystallization",
"Мгновенно зажигает «Огонь x3» на 15 секунд — даже если он на перезарядке.": "Instantly ignites “Fire x3” for 15 seconds — even if it's on cooldown.",
"Призывает три кометы подряд — одну сейчас и ещё две с интервалом в 6 секунд.": "Summons three comets in a row — one now and two more 6 seconds apart.",
"Над зданиями города сразу появляются монетки дохода (до 3). Соберите их тапом!": "Income coins instantly appear above city buildings (up to 3). Tap to collect!",
"Вызывает золотой дождь на 12 секунд. Ловите монеты и самоцветы!": "Calls a golden rain for 12 seconds. Catch coins and gems!",
"x2 ко всему доходу на 3 минуты (складывается с другими ускорениями по времени).": "x2 to all income for 3 minutes (stacks in time with other boosts).",
"Сгущает всю ману в 1 кристалл. Не чаще раза в день.": "Condenses all your mana into 1 crystal. Once per day.",
"🔥 Огонь уже горит!": "🔥 Fire is already burning!",
"🔥 Пламя Усердия: Огонь x3!": "🔥 Flame of Zeal: Fire x3!",
"☄️ Звездопад: ловите кометы!": "☄️ Starfall: catch the comets!",
"🏙️ Над городом уже полно монеток — соберите их!": "🏙️ The city already has plenty of coins — collect them!",
"🏙️ Городской Сбор: над зданиями появились монетки!": "🏙️ City Harvest: coins appeared above the buildings!",
"Сейчас не получится — дождь или мини-игра уже идёт": "Not now — a rain or mini-game is already running",
"⏩ Ускорение Времени: x2 к доходу на 3 минуты!": "⏩ Time Haste: x2 income for 3 minutes!",
"💠 Кристаллизация уже была сегодня — приходите завтра!": "💠 Crystallization was already used today — come back tomorrow!",
"💠 Кристаллизация: +1 💎": "💠 Crystallization: +1 💎",
"Блестяще!": "Brilliant!",
"Победа!": "Victory!",
"Неплохо": "Not bad",
"Не вышло": "No luck",
"Продолжить": "Continue",
"Сейф взломан! Сокровищница открыта!": "Safe cracked! The vault is open!",
"ВЗЛОМАТЬ ЗАМОК!": "CRACK THE LOCK!",
"КРИТ −3": "CRIT −3",
"Рано!": "Early!",
"Водите пальцем — корзина едет за ним. Монеты +1, кристаллы +3, жуки −3. Серия из 5 поимок — всё ×2!": "Slide your finger — the basket follows. Coins +1, crystals +3, beetles −3. A streak of 5 catches makes everything ×2!",
"Бейте по кругу, когда внешнее кольцо сожмётся до него. Бывают двойные и тройные удары — бейте по порядку цифр!": "Tap the circle when the outer ring shrinks onto it. There are double and triple hits — tap them in number order!",
"Соединяйте звёзды по возрастанию чисел. Ошибка отнимает время. На сложной числа идут с пропусками, а звёзды плывут!": "Connect the stars in ascending order. Mistakes cost time. On hard the numbers skip and the stars drift!",
"Обновление 1.9": "Update 1.9",
"Обновление 1.8": "Update 1.8",
"🎫 Имперский пропуск: сезоны по 28 дней, 30 ступеней наград за обычную игру, бесплатная и премиум-линейка": "🎫 Imperial Pass: 28-day seasons, 30 reward tiers for regular play, free and premium tracks",
"🧺 Новые события: «Монетопад», «Имперская Кузница» и «Звёздная Карта» — в сезон Монетопад сыплет сезонными находками": "🧺 New events: “Coinfall”, “Imperial Forge” and “Star Map” — during a season Coinfall drops seasonal finds",
"🏙️ Районы города: Старый город с черепицей, неоновый Техно-квартал и Деловой центр с флагами, деревья и скамейки на улице": "🏙️ City districts: tiled Old Town, neon Tech Quarter and a Business District with flags, plus trees and benches on the street",
"⚡ Игра загружается быстрее": "⚡ The game loads faster",
"📅 Награда за вход на видном месте — пропуск дня не сбрасывает серию": "📅 Login reward is front and center — missing a day doesn't reset the streak",
"🏙️ Монетки дохода над зданиями, снег и фейерверки в городе, новые космические постройки": "🏙️ Income coins above buildings, snow and fireworks in the city, new space buildings",
"📖 Альбом коллекций, ⭐ возвышение питомцев и новый питомец — Феникс": "📖 Collection album, ⭐ pet evolution and a new pet — the Phoenix",
"🎯 Испытание дня, новые артефакты, достижения, задания и указы": "🎯 Daily challenge, new artifacts, achievements, quests and decrees",
"Старый город": "Old Town",
"Техно-квартал": "Tech Quarter",
"Деловой центр": "Business District",
"Монетопад!": "Coinfall!",
"Монетопад": "Coinfall",
"Над площадью прорвало казну — ловите монеты корзиной, но не жуков!": "The treasury burst over the square — catch coins in the basket, but not the beetles!",
"🧺 МОНЕТОПАД": "🧺 COINFALL",
"Имперская Кузница!": "Imperial Forge!",
"Имперская Кузница": "Imperial Forge",
"Мастер куёт золотой слиток — бейте молотом точно в такт!": "The master forges a gold ingot — strike the hammer right on the beat!",
"⚒️ КУЗНИЦА": "⚒️ FORGE",
"Звёздная Карта!": "Star Map!",
"Звёздная Карта": "Star Map",
"Звездочёт просит соединить созвездие по порядку, пока не рассвело!": "The stargazer asks you to connect the constellation in order before dawn!",
"✨ СОЗВЕЗДИЕ": "✨ CONSTELLATION",
"Водите пальцем по полю — корзина едет за ним. Монеты +1, кристаллы +3, жуки −3!": "Slide your finger across the field — the basket follows. Coins +1, crystals +3, beetles −3!",
"Жмите, когда сжимающееся кольцо совпадёт с золотым. Точно в кольцо — «Идеально!» и вдвое больше очков.": "Tap when the shrinking ring matches the golden one. Spot on is “Perfect!” and double points.",
"Тапайте звёзды по порядку: 1, 2, 3… Ошибка отнимает 2 секунды.": "Tap the stars in order: 1, 2, 3… A mistake costs 2 seconds.",
"Идеально!": "Perfect!",
"Хорошо": "Good",
"Мимо": "Miss",
"Корзина полна! Казна спасена!": "Basket full! The treasury is saved!",
"Слиток треснул — молот бил не в такт": "The ingot cracked — the hammer was off-beat",
"Безупречная ковка! Слиток чистого золота!": "Flawless forging! An ingot of pure gold!",
"Отличный слиток!": "Excellent ingot!",
"Слиток выкован": "Ingot forged",
"Рассвело — звёзды погасли": "Dawn came — the stars faded",
"Кузница": "Forge",
"Созвездие": "Constellation",
"Имперский пропуск": "Imperial Pass",
"ИМПЕРСКИЙ ПРОПУСК": "IMPERIAL PASS",
"Пропуск": "Pass",
"Сезонные награды": "Season rewards",
"Золотой век": "Golden Age",
"Звёздная ярмарка": "Star Fair",
"Драконий сезон": "Dragon Season",
"Эпоха изобретений": "Age of Invention",
"Морская торговля": "Sea Trade",
"Небесный фестиваль": "Sky Festival",
"До конца сезона:": "Season ends in:",
"До конца сезона: ": "Season ends in: ",
"Премиум активен": "Premium active",
"Премиум-пропуск": "Premium Pass",
"Премиум": "Premium",
"Ступень": "Tier",
"+10% ко всему доходу до конца сезона и вторая линейка наград": "+10% to all income until the season ends and a second reward track",
"Вторая линейка: ~230": "Second track: ~230",
", сферы, звёзды и сундук. +10% к доходу до конца сезона. Награды за уже пройденные ступени тоже откроются.": ", spheres, stars and a chest. +10% income until the season ends. Rewards for tiers you already reached unlock too.",
"Забрать всё": "Claim all",
"Сундук": "Chest",
"+50 очков": "+50 points",
"Завтра снова": "Again tomorrow",
"Как получать очки": "How to earn points",
"Задание дня +15, недели +50 · Испытание дня +40 · Награда за вход +25": "Daily quest +15, weekly +50 · Daily challenge +40 · Login reward +25",
"Победа в мини-игре +20 · Указ +8 · Вознесение +100": "Mini-game win +20 · Decree +8 · Ascension +100",
"Кометы, колесо, покупки, тапы, город — до 150 очков в день": "Comets, wheel, purchases, taps, city — up to 150 points a day",
"Пропуск идёт сезонами по 28 дней. За обычную игру начисляются очки, каждые 100 очков — новая ступень.": "The pass runs in 28-day seasons. Regular play earns points; every 100 points is a new tier.",
"На каждой ступени есть бесплатная награда. Премиум открывает вторую линейку и +10% к доходу до конца сезона.": "Every tier has a free reward. Premium unlocks a second track and +10% income until the season ends.",
"Неполученные награды в конце сезона выдаются сами. Новый сезон — новые ступени.": "Unclaimed rewards are granted automatically when the season ends. New season — new tiers.",
"Вторая линейка наград сезона и +10% к доходу. Нажмите, чтобы посмотреть награды.": "A second season reward track and +10% income. Tap to see the rewards.",
"Премиум активен до конца сезона. Нажмите, чтобы открыть пропуск.": "Premium is active until the season ends. Tap to open the pass.",
"Премиум-линейка наград текущего сезона и +10% к доходу до конца сезона.": "Premium reward track for the current season and +10% income until it ends.",
"x2 за рекламу": "x2 for an ad",
"НАГРАДА ЗА ВХОД": "LOGIN REWARD",
"Медаль Испытателя": "Challenger's Medal",
"+1 кристалл за каждое Испытание дня за уровень": "+1 crystal per Daily Challenge per level",
"Золотой Компас": "Golden Compass",
"+10% ко всему доходу за уровень": "+10% to all income per level",
"Городская Хартия": "City Charter",
"Монетки над зданиями города дают на 50% больше и появляются на 15% чаще за уровень": "City coins give 50% more and appear 15% more often per level",
"Золотой Феникс": "Golden Phoenix",
"Солар": "Solar",
"Птица из чистого золота: монетки над городом появляются вдвое чаще и дают больше, а ещё усиливает весь доход.": "A bird of pure gold: city coins appear twice as often and give more, plus it boosts all income.",
"Кррра! Город сияет золотом! ✨": "Krrra! The city shines with gold! ✨",
"Из пепла — в казну! 🔥": "From ashes to the treasury! 🔥",
"Лечу собирать ренту! 🏙️": "Off to collect the rent! 🏙️",
"Сборщик ренты": "Rent Collector",
"Собрать 10 монеток над зданиями города": "Collect 10 coins above city buildings",
"Городской казначей": "City Treasurer",
"Собрать 100 монеток над зданиями города": "Collect 100 coins above city buildings",
"Первая страница": "First Page",
"Вклеить первый набор в альбом": "Paste your first set into the album",
"Коллекционер": "Collector",
"Вклеить 5 наборов в альбом": "Paste 5 sets into the album",
"Полный альбом": "Complete Album",
"Вклеить все наборы альбома": "Paste every album set",
"Возвышение": "Pet Ascension",
"Возвысить любого питомца": "Ascend any pet",
"Легенда зверинца": "Menagerie Legend",
"Возвысить питомца до ★★★": "Ascend a pet to ★★★",
"Из пепла": "From the Ashes",
"Приручить Золотого Феникса": "Tame the Golden Phoenix",
"Испытатель": "Challenger",
"Выполнить первое Испытание дня": "Complete your first Daily Challenge",
"Неутомимый": "Tireless",
"Выполнить 10 Испытаний дня": "Complete 10 Daily Challenges",
"Железная воля": "Iron Will",
"Выполнить 30 Испытаний дня": "Complete 30 Daily Challenges",
"Неделя верности": "Week of Loyalty",
"Забрать 7 наград за вход": "Claim 7 login rewards",
"Месяц с империей": "A Month with the Empire",
"Забрать 30 наград за вход": "Claim 30 login rewards",
"Тапо-титан": "Tap Titan",
"Сделать 500 000 тапов": "Make 500,000 taps",
"Гроза комет": "Comet Terror",
"Поймать 150 комет": "Catch 150 comets",
"Вечный странник": "Eternal Wanderer",
"Совершить 10 Вознесений": "Ascend 10 times",
"Драконий бич": "Dragon Bane",
"Победить Золотого Дракона 15 раз": "Defeat the Golden Dragon 15 times",
"Канцлер": "Chancellor",
"Подписать 100 указов": "Sign 100 decrees",
"Тапо-марафон: 2000 тапов за день": "Tap marathon: 2000 taps in a day",
"Звездопад: поймайте 8 комет": "Starfall: catch 8 comets",
"Стройка века: купите 120 уровней": "Build of the century: buy 120 levels",
"Рантье: соберите 6 монеток над городом": "Landlord: collect 6 coins above the city",
"Поймайте 6 бонусов (кометы, подарки)": "Catch 6 bonuses (comets, gifts)",
"Вскройте сейф в событии": "Crack a safe in an event",
"Городской рантье": "City Landlord",
"Собрать 12 монеток над зданиями города": "Collect 12 coins above city buildings",
"Неделя испытаний": "Week of Challenges",
"Выполнить 4 Испытания дня": "Complete 4 Daily Challenges",
"Сбор ренты": "Rent Day",
"Собрать 2 монетки над зданиями города": "Collect 2 coins above city buildings",
"Просьба мэра": "The Mayor's Request",
"Мэр столицы просит денег на новые фонари и обещает, что город станет приносить больше ренты.": "The capital's mayor asks for money for new streetlights and promises the city will bring in more rent.",
"Выделить": "Grant it",
"Пусть сами": "Let them manage",
"Звёздные кузнецы": "Star Smiths",
"Кузнецы Звёздной кузницы предлагают перековать ваши монеты в «звёздные». Блестят сильнее, но жар нужен огромный.": "The Star Forge smiths offer to reforge your coins into «star coins». They shine brighter, but need enormous heat.",
"Перековать": "Reforge",
"Отказать": "Refuse",
"Праздник огней": "Festival of Lights",
"Горожане хотят устроить праздник с фейерверками в честь вашего правления.": "The citizens want a fireworks festival in honor of your reign.",
"Устроить": "Hold it",
"Работать!": "Back to work!",
"⭐ Звёздные монеты ×1.5": "⭐ Star coins ×1.5",
"⭐ Злые кузнецы ×2": "⭐ Angry smiths ×2",
"🎆 Праздник: тап ×3": "🎆 Festival: tap ×3",
"🛠 Без праздников ×1.25": "🛠 No holidays ×1.25",
"−8 мин дохода · сразу 2 монетки над городом": "−8 min of income · 2 coins appear above the city right away",
"+3 мин дохода (мэр обиделся, но заплатил налог)": "+3 min of income (the mayor sulked but paid his taxes)",
"−15 мин дохода · доход ×1.5 на 15 мин": "−15 min of income · income ×1.5 for 15 min",
"кузница ×2 на 30 мин (кузнецы работают со злости)": "forge ×2 for 30 min (the smiths work out of spite)",
"−5 мин дохода · тап ×3 на 10 мин и фейерверк": "−5 min of income · tap ×3 for 10 min and fireworks",
"доход ×1.25 на 20 мин": "income ×1.25 for 20 min",
"В Звёздной кузнице выковали первую монету из настоящей звезды. Она до сих пор горячая.": "The Star Forge minted its first coin from a real star. It is still hot.",
"Казна чёрной дыры принимает вклады, но отказывается их показывать. «Они там, честно».": "The Black Hole Vault accepts deposits but refuses to show them. «They're in there, honest».",
"Хроно-банк выдал кредит вчерашнему вам. Сегодняшний вы уже его вернули.": "The Chrono Bank lent money to yesterday's you. Today's you has already paid it back.",
"Звёздные кузнецы просят солнцезащитные очки. Им выдали очки из золота.": "The star smiths asked for sunglasses. They were given golden ones.",
"Над крышами города замечены золотые монетки. Мэр просит не кидать их в прохожих.": "Golden coins spotted above the city roofs. The mayor asks not to throw them at passers-by.",
"Горожане научились ловить ренту сачками. Налоговая проверяет сачки.": "Citizens learned to catch rent with butterfly nets. The tax office is inspecting the nets.",
"Императорский альбом коллекций выставлен в музее. Очередь — до самой Луны.": "The imperial collection album is on display at the museum. The queue reaches the Moon.",
"Возвышенный питомец светится по ночам. Соседи жалуются, что не могут уснуть.": "The ascended pet glows at night. The neighbors complain they can't sleep.",
"Золотой Феникс сгорел и возродился трижды за утро. Говорит, просто разминался.": "The Golden Phoenix burned and was reborn three times this morning. Says it was just warming up.",
"Подданные спорят, какое Испытание дня будет завтра. Букмекеры принимают ставки.": "Subjects argue about tomorrow's Daily Challenge. Bookmakers are taking bets.",
"Ваши испытания включили в школьную программу. Двоечники в ужасе.": "Your challenges are now part of the school curriculum. Slackers are terrified.",
"Императора видят в столице каждую неделю. Подданные пекут пироги заранее.": "The emperor is seen in the capital every week. Subjects bake pies in advance.",
"Город так разросся, что такси теперь ездят по двум полосам. Пробки — только из золотых машин.": "The city has grown so big that taxis now use two lanes. Traffic jams are made of golden cars only.",
"Архитекторы закончили последний квартал. Теперь строят небоскрёбы для небоскрёбов.": "Architects finished the last district. Now they build skyscrapers for skyscrapers.",
"Монета отполирована тапами до зеркального блеска. В неё смотрятся министры.": "The coin is polished to a mirror shine by taps. Ministers use it as a mirror.",
"Десятое Вознесение! Звёзды выстраиваются в форму короны, чтобы вы заметили.": "Tenth Ascension! The stars line up into a crown so you'd notice.",
"В казне сто кристаллов. Ювелиры империи впервые взяли отпуск.": "A hundred crystals in the treasury. The empire's jewelers took their first vacation.",
"Кибер-Пёс натапал больше, чем весь совет министров. Министры обиделись.": "The Cyber-Dog tapped more than the entire council of ministers. The ministers are offended.",
"Мудрая Сова прочитала все задания наперёд и подсказывает ответы. Тсс.": "The Wise Owl read all the quests in advance and whispers the answers. Shh.",
"Не изучено": "Not studied",
"КАК ЭТО РАБОТАЕТ": "HOW IT WORKS",
"Награда": "Reward",
"Звёздная кузница": "Star Forge",
"Казна чёрной дыры": "Black Hole Vault",
"Хроно-банк": "Chrono Bank",
"Альбом": "Album",
"Наборы и вечные бонусы": "Sets & permanent bonuses",
"Испытание дня": "Daily challenge",
"Новое каждый день": "New every day",
"АЛЬБОМ КОЛЛЕКЦИЙ": "COLLECTION ALBUM",
"Альбом коллекций": "Collection album",
"Собирайте наборы: сезонные находки, облики монеты, питомцев, предприятия и артефакты.": "Collect sets: seasonal finds, coin skins, pets, businesses and artifacts.",
"Полный набор можно «вклеить» — он даёт постоянный бонус ко всему доходу, даже после Вознесения.": "A full set can be «pasted in» for a permanent income bonus that survives Ascension.",
"Облики монеты": "Coin skins",
"Зверинец": "Menagerie",
"Мастер питомцев (все на макс. уровне)": "Pet master (all at max level)",
"Империя построена (все предприятия)": "Empire built (all businesses)",
"Небоскрёбы (все предприятия 150+ ур.)": "Skyscrapers (all businesses lvl 150+)",
"Сокровищница артефактов": "Artifact treasury",
"Испытание дня выполнено! Заберите награду в «Заданиях»": "Daily challenge complete! Claim the reward in «Quests»",
"Сделайте 600 тапов по монете": "Tap the coin 600 times",
"Поймайте 4 кометы": "Catch 4 comets",
"Купите 40 уровней улучшений и предприятий": "Buy 40 levels of upgrades and businesses",
"Крутаните Колесо Фортуны 2 раза": "Spin the Wheel of Fortune twice",
"Включите «Огонь x3» 2 раза": "Trigger «Fire x3» twice",
"Соберите 3 монетки над зданиями города": "Collect 3 coins above city buildings",
"Поймайте 25 капель Золотого дождя": "Catch 25 Golden Rain drops",
"Забрать": "Claim",
"Готово ✓": "Done ✓",
"Новое завтра": "New one tomorrow",
"Награда: 20 мин дохода": "Reward: 20 min of income",
"и +2": "and +2",
"Награда на сегодня получена. Следующая — завтра или в любой другой день: пропуски не сбрасывают прогресс.": "Today's reward is claimed. The next one is available tomorrow or any later day — skipped days don't reset progress.",
"Одна награда в день. Можно заходить не каждый день — прогресс не сгорает.": "One reward per day. You don't have to log in every day — progress never resets.",
"Недостаточно кристаллов!": "Not enough crystals!",
"★★★ ВОЗВЫШЕН": "★★★ ASCENDED",
"🏙️ Монетка над зданием": "🏙️ Coin above a building",
"🌧️ Дождь над городом": "🌧️ Rain over the city",
"❄️ Снег над городом": "❄️ Snow over the city",
"🎆 Фейерверк": "🎆 Fireworks",
"Торговец ушёл...": "The merchant left...",
"Сделка совершена! Получен +1 Кристалл!": "Deal done! You got +1 Crystal!",
"Сделка совершена! x5 Мега-Буст на 3 минуты!": "Deal done! x5 Mega Boost for 3 minutes!",
"СЛУЧАЙНОЕ СОБЫТИЕ": "RANDOM EVENT",
"Торговец": "Merchant",
"Купите в «Бизнесе», чтобы здание выросло здесь": "Buy it in «Business» to build it here",
"Здание достроено полностью!": "Fully built!",
"Посёлок": "Village",
"Городок": "Town",
"Город": "City",
"Мегаполис": "Metropolis",
"Столица Империи": "Imperial Capital",
"Сменить за": "Switch for",
"Нефритовый слот · 25%": "Jade slot · 25%",
"Рубиновый слот · 50%": "Ruby slot · 50%",
"Алмазный слот · 100%": "Diamond slot · 100%",
"Влияние:": "Influence:",
"Советник докладывает:": "The advisor reports:",
"Улучшить:": "Upgrade:",
"🌌 Можно вознестись:": "🌌 You can ascend:",
"повышают астральный уровень предприятий (кнопка": "raise the astral level of businesses (the",
"на карточке здания во вкладке «Бизнес»). Каждый уровень даёт": "button on a building card in the «Business» tab). Each level gives",
"НЕБЕСНЫЕ ЗВЁЗДЫ": "HEAVENLY STARS",
"Ваши Звёзды:": "Your Stars:",
"Звёзд за вознесение:": "Stars per ascension:",
"Совет": "Council",
"Престиж": "Prestige",
"Получить больше кристаллов": "Get more crystals",
"Астральные Сферы": "Astral Spheres",
"Небесные Звёзды": "Heavenly Stars",
"Престижные Кристаллы": "Prestige Crystals",
"НЕБЕСНЫЕ ЧИПЫ": "HEAVENLY STARS",
"Чипов при вознесении:": "Stars on ascension:",
"Вознестись": "Ascend",
"Не хватает монет": "Not enough coins",
"Указы: чаще спокойные, а потери в рискованных — вдвое меньше": "Decrees: more often calm, and losses in risky ones are halved",
"Указы: чаще рискованные, а выигрыш в них в 1.5 раза больше": "Decrees: more often risky, and their wins are 1.5× bigger",
"📜 Указ императора": "📜 Emperor's Decree",
"−8 мин дохода · счёты ×4 на 30 мин": "−8 min of income · abacuses ×4 for 30 min",
"−5 мин дохода · шанс 20% выиграть 60 мин дохода": "−5 min of income · 20% chance to win 60 min of income",
"−5 мин дохода · сразу начинается золотой дождь": "−5 min of income · golden rain starts right away",
"−5 мин дохода · серверы ×2 на 40 мин": "−5 min of income · servers ×2 for 40 min",
"−5 мин дохода · предприятия ×1.25 на 30 мин": "−5 min of income · businesses ×1.25 for 30 min",
"−5 мин дохода · весь доход ×1.5 на 30 мин": "−5 min of income · all income ×1.5 for 30 min",
"−2 мин дохода · весь доход ×1.15 на 20 мин": "−2 min of income · all income ×1.15 for 20 min",
"−10 мин дохода · хранилища ×2 на 1 час": "−10 min of income · vaults ×2 for 1 hour",
"−10 мин дохода · крипто-фермы ×3 на 30 мин": "−10 min of income · crypto farms ×3 for 30 min",
"−10 мин дохода · бабушки ×2 на 1 час": "−10 min of income · grannies ×2 for 1 hour",
"хомяки отдыхают 5 мин, потом ×3 на 15 мин": "hamsters rest 5 min, then ×3 for 15 min",
"тап ×2 на 20 мин (злость придаёт сил)": "tap ×2 for 20 min (anger gives strength)",
"предприятия дешевле на 15% на 30 мин": "businesses 15% cheaper for 30 min",
"ничего не происходит": "nothing happens",
"кометы на 30% чаще 20 мин": "comets 30% more often for 20 min",
"комета прилетит прямо сейчас": "a comet arrives right now",
"дракон прилетит прямо сейчас": "the dragon arrives right now",
"доход ×1.2 на 20 мин · кометы реже": "income ×1.2 for 20 min · fewer comets",
"50%: +20% монет · 50%: −10% монет": "50%: +20% coins · 50%: −10% coins",
"+5 мин дохода": "+5 min of income",
"+5 мин дохода · серверы ×0.7 на 30 мин": "+5 min of income · servers ×0.7 for 30 min",
"+5 мин дохода · бабушки ×0.5 на 30 мин": "+5 min of income · grannies ×0.5 for 30 min",
"+5 мин дохода (сэкономили на каше)": "+5 min of income (saved on porridge)",
"+5 мин дохода (продали его карандаш)": "+5 min of income (sold his pencil)",
"+3 мин дохода": "+3 min of income",
"+3 мин дохода, дракон пролетит мимо": "+3 min of income, the dragon flies past",
"+20 мин дохода": "+20 min of income",
"+20 мин дохода · фермы ×0.5 на 30 мин": "+20 min of income · farms ×0.5 for 30 min",
"+2 💎": "+2 💎",
"+2 мин дохода": "+2 min of income",
"+2 мин дохода (продали его колбы)": "+2 min of income (sold his flasks)",
"+15 мин дохода и +1 💎": "+15 min of income and +1 💎",
"+15 мин дохода · весь доход ×0.8 на 20 мин": "+15 min of income · all income ×0.8 for 20 min",
"+10 мин дохода": "+10 min of income",
"+1 🔮 и тап ×1.5 на 20 мин": "+1 🔮 and tap ×1.5 for 20 min",
"+1 🔮 (конфисковали кристалл звездочётов)": "+1 🔮 (confiscated the stargazers' crystal)",
"+1 💎 и +5 мин дохода": "+1 💎 and +5 min of income",
"+1 мин дохода": "+1 min of income",
"+1 мин дохода · кот обиделся": "+1 min of income · the cat is offended",
"🧮 Умные счёты ×4": "🧮 Smart abacuses ×4",
"😤 Гордость: тап ×2": "😤 Pride: tap ×2",
"😇 Нрав правителя: мягкие и строгие решения меняют ваш титул и открывают достижения": "😇 Ruler's temper: mild and strict decisions change your title and unlock achievements",
"🗄️ Холодные серверы ×2": "🗄️ Cool servers ×2",
"🗄️ Горячие серверы ×0.7": "🗄️ Hot servers ×0.7",
"🕵️ Двойной агент ×1.25": "🕵️ Double agent ×1.25",
"📰 Вестник стал смешнее: новые новости для каждого предприятия и механики": "📰 The Herald got funnier: new news for every business and mechanic",
"📜 Указы императора": "📜 Emperor's Decrees",
"📜 Указы императора: советник приносит истории, а вы решаете, как поступить. У некоторых есть продолжение!": "📜 Emperor's decrees: the advisor brings stories and you decide what to do. Some have a continuation!",
"📜 Указ": "📜 Decree",
"📜 Советник унёс указ обратно": "📜 The advisor took the decree back",
"📜 Народ ловит кометы": "📜 People catch comets",
"📜 Кометы реже": "📜 Fewer comets",
"📜 Высокие налоги ×1.2": "📜 High taxes ×1.2",
"👵 Обиженные бабушки ×0.5": "👵 Offended grannies ×0.5",
"👵 Довольные бабушки ×2": "👵 Happy grannies ×2",
"🐹 Хомяки на море": "🐹 Hamsters at the sea",
"🐹 Отдохнувшие хомяки ×3": "🐹 Rested hamsters ×3",
"🐱 Сытый кот ×1.15": "🐱 Well-fed cat ×1.15",
"🐱 Кот демонстративно отвернулся.": "🐱 The cat pointedly turned away.",
"🐢 Механики открываются постепенно — интереснее открывать новое (у старых игроков всё остаётся)": "🐢 Mechanics now unlock gradually — more fun to discover (veterans keep everything)",
"🐉 Золотой Дракон": "🐉 Golden Dragon",
"🐉 Золотой Дракон: босс, которого нужно дотапать за 30 секунд": "🐉 Golden Dragon: a boss you must tap down in 30 seconds",
"🐉 Дракон": "🐉 Dragon",
"🐉 БОСС": "🐉 BOSS",
"🏪 Скидки −15%": "🏪 Discounts −15%",
"🏦 Недовольство ×0.8": "🏦 Discontent ×0.8",
"🏦 Доверие вкладчиков ×2": "🏦 Depositors' trust ×2",
"🎪 Праздник ×1.5": "🎪 Festival ×1.5",
"🎨 Новый интерфейс: 5 вкладок внизу, меню «Ещё», раскладка для компьютера": "🎨 New interface: 5 tabs at the bottom, a «More» menu, a desktop layout",
"🎟️ Билет пустой. Глашатай сочувственно кивает.": "🎟️ The ticket is empty. The herald nods sympathetically.",
"🎓 Учёные пальцы ×1.5": "🎓 Scholarly fingers ×1.5",
"🌗 Путь влияет на указы: Тёмный путь — больше риска и выигрыша, Светлый — меньше потерь": "🌗 The Pact affects decrees: the Dark Path — more risk and reward, the Light — smaller losses",
"⛏️ Фермы распроданы ×0.5": "⛏️ Farms sold ×0.5",
"⛏️ Крипто-бум": "⛏️ Crypto boom",
"☄️ Небо засветилось — комета летит!": "☄️ The sky lit up — a comet is coming!",
"Хомяки-майнеры написали коллективное заявление: «Хотим на море. С семечками».": "The miner hamsters wrote a joint request: «We want to go to the sea. With sunflower seeds».",
"Хомяки просят отпуск": "Hamsters Ask for Vacation",
"Хомяки прислали открытку: загорели, окрепли и нашли на пляже кристалл. Кристалл прилагается.": "The hamsters sent a postcard: tanned, stronger, and found a crystal on the beach. Crystal attached.",
"Хомяк-рекордсмен пробежал в колесе 400 км. Колесо подало в суд за переработку.": "A record-holding hamster ran 400 km in its wheel. The wheel sued for overtime.",
"Учёные просят открыть академию. Обещают изобрести что-нибудь полезное. Или хотя бы интересное.": "Scholars ask to open an academy. They promise to invent something useful. Or at least interesting.",
"Уступить": "Give in",
"Устроить": "Hold it",
"Успокоить народ": "Calm the people",
"Умные счёты": "Smart Abacuses",
"Увидеть продолжение 3 историй из указов": "See the continuation of 3 decree stories",
"Торговцы из-за моря просят пустить их на рынок. Обещают скидки на всё.": "Merchants from overseas ask to enter the market. They promise discounts on everything.",
"Тиран": "Tyrant",
"Тапайте по дракону! Он перелетает — успевайте за ним. Иногда удар критический (×3).": "Tap the dragon! It moves around — keep up with it. Sometimes a hit is critical (×3).",
"Счёты признаны самым надёжным компьютером империи: их ещё ни разу не взломали.": "Abacuses are recognized as the most reliable computers of the empire: nobody has ever hacked one.",
"Сфера Дайсона закрыла Солнце. Зато монету теперь видно и ночью.": "The Dyson Sphere covered the Sun. But now the coin is visible at night.",
"Стража поймала шпиона соседнего лорда. Он пытался скопировать вашу монету карандашом.": "The guards caught a spy of a neighboring lord. He tried to copy your coin with a pencil.",
"Спутник сфотографировал вашу монету из космоса. Её видно невооружённым глазом.": "The satellite photographed your coin from space. It's visible to the naked eye.",
"Спрятать казну": "Hide the treasury",
"Соседний лорд прислал сундук с кристаллами. Говорят, он хочет союза… или вашу монету.": "A neighboring lord sent a chest of crystals. They say he wants an alliance… or your coin.",
"Советник принёс бумагу на подпись. Решение за вами!": "The advisor brought a paper to sign. The decision is yours!",
"Снизить": "Lower",
"Слухи о драконе": "Dragon Rumors",
"Серверы перегрелись": "Servers Overheated",
"Серверная стойка впервые зависла. Перезагрузка помогла. Как всегда.": "The server rack froze for the first time. A reboot helped. As always.",
"Святой император": "Holy Emperor",
"Светлый путь действует: даже кометы стали вежливее и прилетают по расписанию.": "The Light Path works: even comets have become politer and arrive on schedule.",
"Рискнуть": "Take the risk",
"Расширить фермы": "Expand the farms",
"Разрешить церемонию": "Allow the ceremony",
"Разогнать": "Disperse",
"Разведчики видели в горах Золотого Дракона. Он летит к казне.": "Scouts saw the Golden Dragon in the mountains. It's flying toward the treasury.",
"Пусть терпят": "Let them suffer",
"Пустить": "Let them in",
"Прочитать": "Read",
"Продать всё": "Sell everything",
"Прогнать": "Send away",
"Принять": "Accept",
"При вашем приближении министры начинают работать в два раза быстрее.": "When you approach, ministers start working twice as fast.",
"Пойман шпион": "A Spy Caught",
"Подпольный дата-центр настолько подпольный, что его не может найти даже налоговая.": "The underground data center is so underground that even the tax office can't find it.",
"Подписать первый указ": "Sign your first decree",
"Подписать 30 указов": "Sign 30 decrees",
"Поднять": "Raise",
"Подданные просят устроить праздник в честь вашей монеты. С фейерверками и бесплатной кашей.": "Your subjects ask for a festival in honor of your coin. With fireworks and free porridge.",
"Подданные называют вас Добрым императором и вышивают ваш портрет на подушках.": "Your subjects call you the Kind Emperor and embroider your portrait on pillows.",
"Повесить на стену": "Hang it on the wall",
"Победить в мини-игре события": "Win an event mini-game",
"Победить в 5 мини-играх событий": "Win 5 event mini-games",
"Победить Золотого Дракона": "Defeat the Golden Dragon",
"Победить Золотого Дракона 5 раз": "Defeat the Golden Dragon 5 times",
"По городу пошёл слух, что в хранилище пусто. У банков выстроились очереди.": "A rumor spread that the vault is empty. Lines have formed at the banks.",
"Пирог от бабушек": "Pie from the Grannies",
"Перевербовать": "Turn him",
"Первая подпись": "First Signature",
"Паника вкладчиков": "Depositors' Panic",
"Отпустить": "Let them go",
"Отменить": "Cancel",
"Открыть": "Open",
"Открытка с моря": "Postcard from the Sea",
"Отказать": "Refuse",
"Отведать": "Taste it",
"Оставить как есть": "Leave as is",
"Огромный дракон кружит над казной. Тапайте по нему, пока он не улетел с золотом!": "A huge dragon circles over the treasury. Tap it before it flies away with the gold!",
"Обойдёмся": "We'll manage",
"Обновление 1.7": "Update 1.7",
"Обложить пошлиной": "Impose a duty",
"Не играть": "Don't play",
"Народный праздник": "People's Festival",
"Налоговая реформа": "Tax Reform",
"Набрать нрав «Железная рука» (строгие решения)": "Reach the «Iron Hand» temper (strict decisions)",
"Набрать нрав «Добрый император» (мягкие решения)": "Reach the «Kind Emperor» temper (mild decisions)",
"На нефтяной вышке нашли не нефть, а жидкое золото. Никто не удивился.": "The oil rig found not oil but liquid gold. Nobody was surprised.",
"На Луне открылся первый филиал казны. Курьерская доставка — 3 дня.": "The first treasury branch opened on the Moon. Courier delivery takes 3 days.",
"Мудрый правитель": "Wise Ruler",
"Модернизировать": "Modernize",
"Министр финансов предлагает изменить налоги. Подданные затаили дыхание.": "The finance minister proposes changing taxes. Subjects hold their breath.",
"Марсиане вежливо спросили, можно ли им тоже потапать. Им разрешили.": "The Martians politely asked if they could tap too. They were allowed.",
"Маг погоды": "Weather Mage",
"Маг погоды предлагает устроить золотой дождь. За скромную плату и обед.": "A weather mage offers to make golden rain. For a modest fee and lunch.",
"Летописец": "Chronicler",
"Курс крипты скачет как бешеный. Министр советует действовать быстро.": "The crypto rate is jumping like crazy. The minister advises acting fast.",
"Купить вентиляторы": "Buy fans",
"Купить билет": "Buy a ticket",
"Культ кометы": "Comet Cult",
"Крипто-ферма намайнила монету, которая майнит монету. Экономисты в недоумении.": "The crypto farm mined a coin that mines coins. Economists are baffled.",
"Крипто-лихорадка": "Crypto Fever",
"Кот-Банкир официально требует сметану. Двойную. В золотой миске.": "The Banker Cat officially demands sour cream. Double. In a golden bowl.",
"Кот хочет сметаны": "The Cat Wants Sour Cream",
"Канцелярия жалуется: указов стало так много, что их подписывает отдельный писарь.": "The chancellery complains: there are so many decrees that a separate scribe signs them now.",
"Имперская лотерея": "Imperial Lottery",
"Имперская академия": "Imperial Academy",
"Изобретатель предлагает подключить счёты к нейросети. Счёты против, но кто их спрашивает.": "An inventor offers to connect the abacuses to a neural network. The abacuses object, but who asks them.",
"Золотой Дракон!": "Golden Dragon!",
"Звездочёты хотят провести церемонию призыва кометы. Что-то может пойти не так.": "Stargazers want to hold a comet-summoning ceremony. Something might go wrong.",
"Звездочёты жалуются: вы поймали все кометы, и им больше нечего наблюдать.": "Stargazers complain: you've caught all the comets and they have nothing left to watch.",
"Запретить": "Forbid",
"Заморозить вклады": "Freeze deposits",
"Заказать дождь": "Order the rain",
"Заезжий алхимик": "A Visiting Alchemist",
"Жуки на монете организовали клуб по интересам. Интерес у всех один — монета.": "The bugs on the coin started a hobby club. Everyone's hobby is the coin.",
"Железная рука": "Iron Hand",
"Хранители в совете спорят, кто из них главнее. Хранитель Золота пока лидирует.": "The keepers in the council argue about who's in charge. The Keeper of Gold is leading so far.",
"Драконы обходят империю стороной. Один прислал письмо с извинениями.": "Dragons avoid the empire. One sent a letter of apology.",
"Драконоборец": "Dragonslayer",
"Дракон улетел невредимым…": "The dragon flew away unharmed…",
"Дракон ранен и улетел, обронив часть золота": "The dragon is wounded and flew away, dropping some gold",
"Дракон повержен! Его сокровища ваши!": "The dragon is defeated! Its treasure is yours!",
"Добрый император": "Kind Emperor",
"Дать сметаны": "Give sour cream",
"Дар соседнего лорда": "Gift from a Neighboring Lord",
"Гроза драконов": "Dragon's Bane",
"Гордо отказать": "Proudly refuse",
"Глашатай продаёт лотерейные билеты. Главный приз — час дохода всей империи!": "A herald sells lottery tickets. The grand prize is an hour of the whole empire's income!",
"Гильдия торговцев": "Merchants' Guild",
"Гильдия бабушек-майнеров бастует: требуют вязаные чехлы на кирки и прибавку к пенсии.": "The guild of miner grannies is on strike: they demand knitted pickaxe covers and a pension raise.",
"Выслать": "Deport",
"Встретить его!": "Face it!",
"Врачи рекомендуют делать перерыв каждые 10 000 тапов. Вы не послушали.": "Doctors recommend a break every 10,000 taps. You didn't listen.",
"Вкладчики скинулись и прислали вам благодарственное письмо. И немного денег — на всякий случай.": "The depositors chipped in and sent you a thank-you letter. And some money — just in case.",
"Ваше пятое перерождение отметили фейерверком. Космос уже привык.": "Your fifth rebirth was celebrated with fireworks. Space is used to it by now.",
"В соседней вселенной вы тоже император. Вы там чуть богаче. Обидно.": "In a neighboring universe you are also an emperor. You're slightly richer there. Annoying.",
"В серверной жарко, как в аду. Админ просит купить вентиляторы и мороженое.": "It's hot as hell in the server room. The admin asks for fans and ice cream.",
"В бой!": "Fight!",
"Бюрократ": "Bureaucrat",
"Бунт бабушек": "Granny Strike",
"Благодарность вкладчиков": "Depositors' Gratitude",
"Банковское хранилище переполнено. Монеты начали хранить в банковском хранилище хранилищ.": "The bank vault is overflowing. Coins are now kept in a bank vault of bank vaults.",
"Бабушки основали фан-клуб монеты. Членский взнос — один пирожок в месяц.": "The grannies founded a coin fan club. Membership fee — one pie a month.",
"Бабушки благодарны за чехлы и испекли вам пирог. Внутри что-то звенит!": "The grannies are grateful for the covers and baked you a pie. Something is jingling inside!",
"Арифмометр сломался, посчитав ваш доход. Механик говорит: «Слишком много нулей».": "The arithmometer broke while counting your income. The mechanic says: «Too many zeros».",
"Алхимик клянётся, что превратит десятую часть казны в тройное золото. Глаза у него честные. Почти.": "The alchemist swears he'll turn a tenth of the treasury into triple gold. His eyes look honest. Almost.",
"Авто-кликеры создали профсоюз и требуют смазку премиум-класса.": "Auto-Clickers formed a union and demand premium-grade oil.",
"Авто-кликер впервые нажал на монету сам. Он очень горд и просит медаль.": "The Auto-Clicker pressed the coin by itself for the first time. It's very proud and wants a medal.",
"Здесь появятся новые разделы, когда империя подрастёт.": "New sections will appear here as your empire grows.",
"Слава Империи": "Empire Glory",
"Престиж и испытания": "Prestige and challenges",
"Вечные бонусы за 💎": "Permanent bonuses for 💎",
"Облик монеты и бонусы": "Coin looks and bonuses",
"Рейтинг игроков": "Player rankings",
"Статистика и рейтинг": "Statistics and rankings",
"📊 Статистика": "📊 Statistics",
"🏆 Рейтинг игроков": "🏆 Player rankings",
"📰 Вестник": "📰 Herald",
"Магазин и улучшения": "Shop & upgrades",
"Ещё": "More",
"Открывайте по две карточки и находите пары. Ошибка отнимает время!": "Open two cards at a time and find pairs. A mistake costs time!",
"Приносит пассивный доход и открывает 📈 Биржу (Бизнес → Биржа): покупайте товары дёшево, продавайте дорого. Каждый уровень увеличивает склад товаров. Закалки на полке «Улучшения» удваивают добычу.": "Brings passive income and unlocks the 📈 Market (Business → Market): buy goods low, sell high. Each level enlarges the goods storage. Temperings on the «Upgrades» shelf double the income.",
"📈 Открывает Биржу (Бизнес → Биржа): торгуйте товарами": "📈 Unlocks the Market (Business → Market): trade goods",
"награда ×4": "reward ×4",
"награда ×2": "reward ×2",
"награда ×1": "reward ×1",
"🔴 Сложная": "🔴 Hard",
"🟡 Средняя": "🟡 Medium",
"🟢 Лёгкая": "🟢 Easy",
"Выберите сложность": "Choose difficulty",
"🧠 Память": "🧠 Memory",
"🏺 Напёрстки": "🏺 Cups",
"🎃 Сезонное событие": "🎃 Seasonal event",
"Летний звездопад: ракушки, арбузы и мороженое!": "Summer starfall: seashells, watermelons and ice cream!",
"Расписные яйца сыплются с неба — ловите!": "Painted eggs are pouring from the sky — catch them!",
"Ловите сердечки — в одном из них может быть находка!": "Catch the hearts — one of them may hold a find!",
"С неба падают подарки и мандарины — ловите!": "Gifts and tangerines are falling from the sky — catch them!",
"Ловите тыквы и конфеты — среди них прячутся сезонные находки!": "Catch pumpkins and candy — seasonal finds hide among them!",
"Пальцы Вселенной": "Fingers of the Universe",
"Миллион пальцев": "A Million Fingers",
"Тысяча пальцев": "A Thousand Fingers",
"Сотня пальцев": "A Hundred Fingers",
"Межзвёздные трассы": "Interstellar Highways",
"Квантовая логистика": "Quantum Logistics",
"Электросеть": "Power Grid",
"Железная дорога": "Railway",
"Имперская почта": "Imperial Post",
"Мощёные дороги": "Paved Roads",
"🔊 Звуки стали мягче и спокойнее": "🔊 Sounds are softer and calmer",
"✉️ Письмо «Пока вас не было» и 🎯 цель на сессию под монетой": "✉️ A «While you were away» letter and a 🎯 session goal under the coin",
"🛣️ Улучшения за общее число уровней предприятий: «Инфраструктура» и «Пальцы Империи»": "🛣️ Upgrades for total business levels: «Infrastructure» and «Fingers of the Empire»",
"🎃 Сезонные события: тематический дождь с шансом на сезонные находки": "🎃 Seasonal events: a themed rain with a chance of seasonal finds",
"🏺 Новые события: «Напёрстки Удачи» и «Сокровищница Памяти»": "🏺 New events: «Lucky Cups» and «Treasury of Memory»",
"⚔️ Испытания: забеги с ограничением ради вечных наград (после первого вознесения)": "⚔️ Challenges: restricted runs for permanent rewards (after the first Ascension)",
"🏛️ Совет: три слота для хранителей — у каждого сильная сторона и слабость": "🏛️ Council: three slots for keepers — each has a strength and a weakness",
"Обновление 1.6": "Update 1.6",
"🌌 Можно вознестись:": "🌌 You can ascend:",
"🎡 Колесо Фортуны готово к бесплатному вращению": "🎡 The Wheel of Fortune is ready for a free spin",
"🔮 Сгустилось Астральных Сфер:": "🔮 Astral Spheres condensed:",
"Ловите сезонные сокровища! (": "Catch the seasonal treasures! (",
"ЗВЕЗДОПАД НАД МОРЕМ:": "STARFALL OVER THE SEA:",
"ОХОТА ЗА ЯЙЦАМИ:": "EGG HUNT:",
"ДОЖДЬ ИЗ СЕРДЕЦ:": "RAIN OF HEARTS:",
"СНЕГОПАД ПОДАРКОВ:": "GIFT SNOWFALL:",
"ТЫКВЕННАЯ НОЧЬ:": "PUMPKIN NIGHT:",
"Звездопад над морем": "Starfall over the Sea",
"Охота за яйцами": "Egg Hunt",
"Дождь из сердец": "Rain of Hearts",
"Снегопад подарков": "Gift Snowfall",
"Тыквенная ночь": "Pumpkin Night",
"Ни одной пары": "Not a single pair",
"Время вышло — ни одной пары!": "Time's up — not a single pair!",
"Все пары найдены! Сокровищница ваша!": "All pairs found! The treasury is yours!",
"Время вышло! Фокусник ушёл вместе с золотом.": "Time's up! The magician left with the gold.",
"Мимо! Фокусник оставил утешительный приз": "Miss! The magician left a consolation prize",
"Угадали! Мешок золота ваш!": "Correct! The bag of gold is yours!",
"Где золото? Выберите кувшин!": "Where's the gold? Pick a jar!",
"Перемешиваем...": "Shuffling...",
"Смотрите, где золото...": "Watch where the gold is...",
"Открывайте по две карточки и находите одинаковые пары!": "Open two cards at a time and find matching pairs!",
"Следите за кувшином с золотом и выберите его после перемешивания!": "Watch the jar with the gold and pick it after the shuffle!",
"🧠 Сокровищница Памяти": "🧠 Treasury of Memory",
"🏺 Напёрстки Удачи": "🏺 Lucky Cups",
"🧠 ПАМЯТЬ": "🧠 MEMORY",
"🏺 НАПЁРСТКИ": "🏺 CUPS",
"Откройте пары одинаковых сокровищ, пока не закрылись двери!": "Open pairs of matching treasures before the doors close!",
"Уличный фокусник прячет мешок золота под одним из трёх кувшинов!": "A street magician hides a bag of gold under one of three jars!",
"Сокровищница Памяти!": "Treasury of Memory!",
"Напёрстки Удачи!": "Lucky Cups!",
"🧘 Испытание «Аскет»: улучшения недоступны": "🧘 «Ascetic» challenge: upgrades are unavailable",
"⚔️ Следующий забег — испытание": "⚔️ Next run is the challenge",
"Отказаться": "Give up",
"Нужно вознесение": "Ascension needed",
"Начать": "Start",
"✓ пройдено": "✓ completed",
"Кометы на 10% чаще навсегда и +40 💎": "Comets 10% more often forever and +40 💎",
"Весь доход +10% навсегда и +40 💎": "All income +10% forever and +40 💎",
"Доход предприятий +10% навсегда и +25 💎": "Business income +10% forever and +25 💎",
"Сила тапа +15% навсегда и +25 💎": "Tap power +15% forever and +25 💎",
"Успейте накопить на вознесение за 2 часа, иначе испытание провалено.": "Reach the Ascension goal within 2 hours, or the challenge fails.",
"Весь доход и тапы вдвое меньше.": "All income and taps are halved.",
"Улучшения на полке (закалки, мыши, котята) недоступны.": "Shelf upgrades (temperings, mice, kittens) are unavailable.",
"Тап всегда приносит ровно 1 монету — растите только предприятиями.": "A tap always gives exactly 1 coin — grow with businesses only.",
"Блиц": "Blitz",
"Тяжёлые времена": "Hard Times",
"Аскет": "Ascetic",
"Без пальцев": "No Fingers",
"Испытание начинается вместе с вознесением: следующий забег идёт с ограничением. Дойдите до цели следующего вознесения — и получите вечную награду.": "A challenge starts together with Ascension: the next run has a restriction. Reach the next Ascension goal to earn a permanent reward.",
"⚔️ Испытания": "⚔️ Challenges",
"⚜️ Нет Влияния: оно восстановится через час": "⚜️ No Influence left: it restores in an hour",
"Хранители дают сильный бонус, но у каждого есть слабость. Чем выше слот, тем сильнее и то и другое.": "Keepers give a strong bonus, but each has a weakness. The higher the slot, the stronger both are.",
"⚜️ Влияние:": "⚜️ Influence:",
"Уже здесь": "Already here",
"Поставить": "Place",
"Убрать": "Remove",
"Сменить": "Change",
"Выберите хранителя ниже ↓": "Pick a keeper below ↓",
"+ Поставить хранителя": "+ Place a keeper",
"🟢 Нефритовый слот · 25%": "🟢 Jade slot · 25%",
"🔴 Рубиновый слот · 50%": "🔴 Ruby slot · 50%",
"💎 Алмазный слот · 100%": "💎 Diamond slot · 100%",
"Хранитель Славы": "Keeper of Glory",
"Хранитель Ночи": "Keeper of Night",
"Хранитель Торговли": "Keeper of Trade",
"Хранитель Удачи": "Keeper of Luck",
"Хранитель Ремесла": "Keeper of Craft",
"Хранитель Золота": "Keeper of Gold",
"Хранители остаются на местах и после Вознесения.": "Keepers stay in place even after Ascension.",
"Поставить или сменить хранителя стоит 1 Влияние ⚜️. Оно восстанавливается само: +1 в час, до 3.": "Placing or changing a keeper costs 1 Influence ⚜️. It restores by itself: +1 per hour, up to 3.",
"Первый слот действует на 100%, второй — на 50%, третий — на 25%.": "The first slot works at 100%, the second at 50%, the third at 25%.",
"Поставьте хранителей в 3 слота: у каждого есть сильная сторона и слабость.": "Place keepers in 3 slots: each has a strength and a weakness.",
"🏛️ Совет (Бизнес → Совет)": "🏛️ Council (Business → Council)",
"🏛️ Совет": "🏛️ Council",
"Вибрация": "Vibration",
"Отклик на тапы, криты и награды": "Feedback on taps, crits and rewards",
"Что нового": "What's new",
"Список изменений в последнем обновлении": "Changes in the latest update",
"✨ ЧТО НОВОГО": "✨ WHAT'S NEW",
"Обновление 1.5": "Update 1.5",
"Отлично!": "Great!",
"📅 Недельный рейтинг: каждую неделю — новая гонка, у новичков есть шанс попасть в топ": "📅 Weekly leaderboard: a new race every week, so newcomers have a shot at the top",
"🌌 Итоги забега перед вознесением: время, лучший доход, награда и сравнение с прошлым": "🌌 Run summary before Ascension: time, best income, reward and a comparison with the last run",
"🔊 Новые звуки монет, комет и достижений, а на телефоне — вибрация (выключается в настройках)": "🔊 New coin, comet and achievement sounds, plus vibration on phones (can be turned off in settings)",
"🏛️ «Спонтанный Капитал» строит до 25 уровней сразу": "🏛️ «Spontaneous Capital» builds up to 25 levels at once",
"💎 Постоянные слоты дают улучшение сразу 10 уровня": "💎 Permanent slots give the upgrade at level 10 right away",
"📈 Товары на бирже можно продать и после вознесения": "📈 Market goods can be sold even after Ascension",
"📅 Неделя": "📅 Week",
"🪙 Всё время": "🪙 All time",
"💎 Престиж": "💎 Prestige",
"На этой неделе в рейтинге пока никого — станьте первым!": "No one is on this week's leaderboard yet — be the first!",
"Длительность": "Duration",
"Заработано": "Earned",
"Лучший доход": "Best income",
"Уровней предприятий": "Business levels",
"Тапов": "Taps",
"Поймано комет": "Comets caught",
"Ещё рано": "Not yet",
"🌌 Вознестись": "🌌 Ascend",
"Награда:": "Reward:",
"Небесных Звёзд": "Heavenly Stars",
"Сбросятся монеты, предприятия, улучшения и синергии. Останутся кристаллы, артефакты, питомцы, скины, сферы и достижения.": "Coins, businesses, upgrades and synergies will be reset. Crystals, artifacts, pets, skins, spheres and achievements stay.",
"📌 ЯРЛЫК": "📌 SHORTCUT",
"(+15% с «Наследием Предков»). За каждый новый уровень вы получаете": "(+15% with «Ancestral Legacy»). For each new level you receive",
"(сброса забега). Следующее вознесение: заработать": "(a run reset). Next ascension: earn",
"+0 / с": "+0 / s",
"+0 / тап": "+0 / tap",
"+0% (ур. 0)": "+0% (lvl 0)",
"+1 кристалл": "+1 crystal",
"+1 сфера": "+1 sphere",
"+1, критические удары": "+1, critical hits",
"+10% ко всей добыче навсегда": "+10% to all income forever",
"+15% к доходу всех предприятий": "+15% income from all businesses",
"+15% к силе клика": "+15% tap power",
"+2% к шансу крита и множитель +x2 за ур.": "+2% crit chance and +x2 multiplier per lvl",
"+20% к автодоходу": "+20% passive income",
"+20% к силе тапа за уровень": "+20% tap power per level",
"+25% доход и +3% шанс крита": "+25% income and +3% crit chance",
"+25% к пассивному автодоходу за уровень": "+25% passive income per level",
"+25% ко всей добыче": "+25% to all income",
"+3 💎 и +2 🔮": "+3 💎 and +2 🔮",
"+35% к силе клика": "+35% tap power",
"+40% к автодоходу": "+40% passive income",
"+45% ко всем доходам": "+45% to all income",
"+50 💎, +5 🔮 и x2 к доходу на 1 час. Можно купить один раз.": "+50 💎, +5 🔮 and x2 income for 1 hour. One-time purchase.",
"+50% автодоход и +30% бонус": "+50% passive income and +30% bonus",
"+60% ко всем доходам": "+60% to all income",
"+70% клик и +40% доход": "+70% tap and +40% income",
"+75% КО ВСЕМ ДОХОДАМ!": "+75% TO ALL INCOME!",
", а жуки на Хэллоуин — с шансом 20%": ", and bugs on Halloween with a 20% chance",
", давая": ", giving",
", даже после Вознесения. Уровень N стоит N сфер.": ", even after Ascension. Level N costs N spheres.",
"--д": "--d",
"/ сек": "/ sec",
"/ тап": "/ tap",
"0 мин": "0 min",
"1 час дохода": "1 hour of income",
"1-е перерождение": "1st rebirth",
"11-е перерождение": "11th rebirth",
"15 мин дохода": "15 min of income",
"15-е перерождение": "15th rebirth",
"180с": "180s",
"2-е перерождение": "2nd rebirth",
"22-е перерождение": "22nd rebirth",
"3-е перерождение": "3rd rebirth",
"30 мин дохода": "30 min of income",
"30% комет — тёмные: могут наложить инфляцию или забрать монеты": "30% of comets are dark: they may cause inflation or steal coins",
"30-е перерождение": "30th rebirth",
"4-е перерождение": "4th rebirth",
"50% комет ловятся сами": "50% of comets catch themselves",
"50% шанс, что пролетающая комета поймается сама": "50% chance a passing comet catches itself",
"6-е перерождение": "6th rebirth",
"60с": "60s",
"8-е перерождение": "8th rebirth",
": бесплатные здания со старта, усиление престижа, постоянные слоты. Сохраняются навсегда.": ": free buildings at start, prestige boosts, permanent slots. Kept forever.",
"Yandex SDK недоступен, режим офлайн:": "Yandex SDK unavailable, offline mode:",
"Yandex SDK успешно инициализирован": "Yandex SDK initialized",
"[Пусто: выберите улучшение]": "[Empty: choose an upgrade]",
"[Пусто: выбрать]": "[Empty: choose]",
"[Тест]": "[Test]",
"x2 БУСТ": "x2 BOOST",
"x2 КО ВСЕМ ДОХОДАМ (+100%)!": "x2 TO ALL INCOME (+100%)!",
"x2 на 15 мин": "x2 for 15 min",
"x5 (3м)": "x5 (3m)",
"x5 Мега-Буст на 3 мин": "x5 Mega Boost for 3 min",
"«Кликать или не кликать?» — философы наконец пришли к выводу, что кликать выгоднее.": "«To click or not to click?» Philosophers finally concluded that clicking pays better.",
"«Огонь x3» длится на 30% дольше за уровень": "«Fire x3» lasts 30% longer per level",
"«Огонь x3» длится на 35% дольше": "«Fire x3» lasts 35% longer",
"«Приветствую тебя, великий правитель! Я прибыл из дальних галактик и привёз редкие товары. Что выберешь?»": "«Greetings, great ruler! I have come from distant galaxies with rare goods. What will you choose?»",
"· Небесный уровень": "· Heavenly level",
"· бонус": "· bonus",
"· следующая через": "· next in",
"Ёлочный шар": "Christmas Bauble",
"АВТОДОБЫЧА": "AUTO INCOME",
"Абсолютный Ноль": "Absolute Zero",
"Авто-кликер": "Auto-Clicker",
"Автономный доход: каждый уровень даёт +4 часа оффлайн-добычи и +12% к её мощности (до 24ч и 100% на 5 ур.)!": "Idle income: each level adds +4 hours of offline income and +12% to its power (up to 24h and 100% at lvl 5)!",
"Адамантиевая мышь": "Adamantium Mouse",
"Адская Магма": "Hellish Magma",
"Активен на поле ✨": "Active on the field ✨",
"Активен один питомец — у каждого свой бонус.": "One pet is active at a time — each has its own bonus.",
"Активировать": "Activate",
"Активна ✓": "Active ✓",
"Алая роза": "Scarlet Rose",
"Алмазная закалка": "Diamond Tempering",
"Алмазный Барон 💎": "Diamond Baron 💎",
"Алмазный Владыка": "Diamond Lord",
"Алхимик": "Alchemist",
"Амулет Мидаса": "Amulet of Midas",
"Аналоговый Расчёт": "Analog Computing",
"Небесные Котята": "Heavenly Kittens",
"Антигравити-Тап": "Antigravity Tap",
"Артефакты изучаются за 💎 и действуют навсегда — даже после Вознесения.": "Artifacts are researched with 💎 and last forever — even after Ascension.",
"Архимаг Золота": "Archmage of Gold",
"Архимаг Эфира": "Archmage of Ether",
"Архимаг артефактов": "Artifact Archmage",
"Астра": "Astra",
"Астральные Сферы (кнопка 🔮 на карточке здания) навсегда дают зданию +5% за уровень, даже после Вознесения.": "Astral Spheres (the 🔮 button on a building card) permanently give the building +5% per level, even after Ascension.",
"Астральные Сферы: конденсируются из энергии космоса и навсегда усиливают предприятия!": "Astral Spheres: condensed from cosmic energy, they permanently boost businesses!",
"Астральные туристы возвращаются из Вознесения с чемоданами небесных звёзд.": "Astral tourists return from Ascension with suitcases of heavenly stars.",
"Астрономы обнаружили созвездие в форме гигантского дублона прямо в зените.": "Astronomers spotted a constellation shaped like a giant doubloon right at the zenith.",
"Афина": "Athena",
"Бабочка-купюра": "Banknote Butterfly",
"Бабулин Вклад": "Granny's Deposit",
"Бабушка-майнер": "Miner Granny",
"Бабушки доверяют сбережения Банкам: доход Банков удваивается (x2)!": "Grannies trust their savings to Banks: Bank income doubles (x2)!",
"Бабушки напекли пирожков с золотом. Акции кондитерских взлетели до небес!": "Grannies baked pies with gold. Bakery stocks soared sky-high!",
"Базовое усиление силы тапа": "Basic tap power boost",
"Базовые 8 ч (85%)": "Base 8 h (85%)",
"Базовый стиль": "Basic style",
"Банковское хранилище": "Bank Vault",
"Без рекламы": "No Ads",
"Безумие x7 и Клик-Безумие x777 от комет длятся в 2 раза дольше!": "Frenzy x7 and Click Frenzy x777 from comets last twice as long!",
"Бесплатно": "Free",
"Бесплатное Колесо Фортуны на 3 минуты чаще за уровень": "Free Wheel of Fortune 3 minutes sooner per level",
"Бип-буп! Цель захвачена лучом! 🛸": "Beep-boop! Target locked by the beam! 🛸",
"Биржа": "Market",
"Небесная Гармония": "Heavenly Harmony",
"Небесная Мудрость": "Heavenly Wisdom",
"Бой курантов": "Midnight Chimes",
"Бонус": "Bonus",
"Бонус к доходу:": "Income bonus:",
"Бронзовая закалка": "Bronze Tempering",
"Бронзовый медиатор": "Bronze Plectrum",
"Бронзовый паровой механизм вечного вращения и пара.": "A bronze steam mechanism of eternal rotation and steam.",
"Бусты длятся в 2 раза дольше": "Boosts last twice as long",
"В запасе": "In stock",
"В кондитерской напротив начали печь печенья с предсказаниями о ваших кликах.": "The bakery across the street started baking fortune cookies about your clicks.",
"В огне!": "On Fire!",
"ВЕСТНИК ⚡": "HERALD ⚡",
"ВЕХА": "MILESTONE",
"ВНИМАНИЕ ВСЕМ: Багровое Затмение принесло немыслимое богатство! Доход x555!": "ATTENTION ALL: the Crimson Eclipse brought unimaginable wealth! Income x555!",
"Валюта": "Currency",
"Варежки Деда Мороза": "Santa's Mittens",
"Ваш питомец! Кликните, чтобы погладить": "Your pet! Click to pet it",
"Ваша империя": "Your empire",
"Ваша империя продолжала усердно работать в ваше отсутствие:": "Your empire kept working hard while you were away:",
"Ваши Чипы:": "Your Stars:",
"Конфетный котелок": "Candy Cauldron",
"Верные спутники приносят пассивные множители, кликают за вас, ловят кометы и усиливают критический урон!": "Loyal companions give passive multipliers, tap for you, catch comets and boost critical hits!",
"Весенний ручей": "Spring Stream",
"Весна": "Spring",
"Ветвь Могущества": "Branch of Power",
"Ветвь Процветания": "Branch of Prosperity",
"Ветвь Фортуны": "Branch of Fortune",
"Ветеран вечности": "Veteran of Eternity",
"Вечный Двигатель": "Perpetual Engine",
"Вечный Странник": "Eternal Wanderer",
"Взамен — Небесные Звёзды и +10% ко всему доходу навсегда за каждый уровень.": "In return — Heavenly Stars and +10% to all income forever per level.",
"Взлом Сейфа!": "Safe Cracking!",
"Взломайте 3 замка древней сокровищницы!": "Crack 3 locks of the ancient treasury!",
"Взломать 3 сейфа в событиях": "Crack 3 safes in events",
"Взломать 5 сейфов в событиях": "Crack 5 safes in events",
"Взломать сейф в событии": "Crack a safe in an event",
"Взломщик-эксперт": "Expert Safecracker",
"Видео началось": "Video started",
"Вкл/Выкл": "On/Off",
"Вклад в доход:": "Income contribution:",
"Включать любой сезон в любое время можно после покупки «🗓️ Переключатель Сезонов» в Небесном Древе Вознесения.": "You can switch to any season at any time after buying «🗓️ Season Switcher» in the Heavenly Tree of Ascension.",
"Включить «Огонь x3» 2 раза": "Turn on «Fire x3» 2 times",
"Владелец Фабрик": "Factory Owner",
"Владыка Вселенной": "Lord of the Universe",
"Владыка стихий": "Lord of the Elements",
"Властелин богатств": "Master of Riches",
"Воздушный змей": "Kite",
"Вознесение сбрасывает монеты, здания и улучшения.": "Ascension resets coins, buildings and upgrades.",
"Врата Трансцендентности": "Gates of Transcendence",
"Время вышло! Охрана заблокировала сейф.": "Time's up! The guards locked the safe.",
"Все": "All",
"Все достижения и экономические показатели вашего правления": "All achievements and economic stats of your reign",
"Все закалки куплены": "All temperings bought",
"Всего находок:": "Total finds:",
"Всплывающие цифры тапа": "Tap damage numbers",
"Всё": "All",
"Всё золото пещеры принадлежит нам! 💎": "All the cave's gold is ours! 💎",
"Всё сброшено до нуля!": "Everything has been reset to zero!",
"Второй слот: ещё одно улучшение стартует с 10 уровня в каждом забеге!": "Second slot: one more upgrade starts every run at level 10!",
"Вуф! Ни секунды без клика! 🐾": "Woof! Not a second without a click! 🐾",
"Вы (Император)": "You (Emperor)",
"Вы действительно хотите стереть все накопленные монеты, кристаллы, уровни престижа и улучшения? Это действие необратимо!": "Do you really want to erase all coins, crystals, prestige levels and upgrades? This cannot be undone!",
"Выберите путь империи: Теневой путь или Светлый путь.": "Choose your empire's path: the Shadow Path or the Light Path.",
"Выберите улучшение для переноса": "Choose an upgrade to carry over",
"Выбор сезона": "Choose a season",
"Выбранное улучшение будет бесплатно выдаваться на старте каждого нового перерождения!": "The chosen upgrade will be granted for free at the start of every new rebirth!",
"Выбрать": "Choose",
"Выбрать путь": "Choose path",
"Выкован из чистейшего нефрита в пламени древнего дракона.": "Forged from the purest jade in the flame of an ancient dragon.",
"Выполняйте испытания, получайте золото, редкие кристаллы и приятные награды!": "Complete challenges, earn gold, rare crystals and nice rewards!",
"Гав! Тапаю со всей силы! ⚡": "Woof! Tapping with all my might! ⚡",
"Галактическая казна": "Galactic Treasury",
"Галактический приток": "Galactic Inflow",
"Гардероб Императора": "Emperor's Wardrobe",
"Гардероб Империи:": "Empire Wardrobe:",
"Гармония Космоса": "Cosmic Harmony",
"Гильдия бабушек-шахтёров требует прибавки к пенсии и вязаные чехлы для кирок.": "The guild of miner grannies demands a pension raise and knitted covers for their pickaxes.",
"Главный казначей признался, что купается в золоте по ночам. Медики подтверждают пользу для кожи.": "The chief treasurer admitted he bathes in gold at night. Doctors confirm it's good for the skin.",
"Глубинный Астрал": "Deep Astral",
"Гнездо с монетами": "Nest of Coins",
"Городская биржа": "City Exchange",
"Городскую биржу": "City Exchange",
"Готово": "Done",
"Гравитационная бездна горизонта событий, искривляющая пространство.": "A gravitational abyss of an event horizon that bends space.",
"Гравитационный луч: сам ловит пролетающие кометы и капли Золотого дождя!": "Gravity beam: catches passing comets and Golden Rain drops by itself!",
"Да, стереть всё": "Yes, erase everything",
"Двойное Везение": "Double Luck",
"Денежная река": "Money River",
"День влюблённых": "Valentine's Day",
"Деревянные счёты": "Wooden Abacus",
"Длань Судьбы": "Hand of Fate",
"Для покупки нужно войти в аккаунт Яндекса": "You need to sign in to Yandex to make a purchase",
"Для чего:": "What for:",
"До следующего чипа: 0 / 100K (0%)": "To next chip: 0 / 100K (0%)",
"Добыча": "Income",
"Доступна": "Available",
"Древняя реликвия династии с аурой лепестков цветущей вишни.": "An ancient dynasty relic with an aura of cherry blossom petals.",
"Древо Артефактов Древних": "Tree of Ancient Artifacts",
"Дрон-Добытчик": "Miner Drone",
"Дышит чистым огнем: значительно повышает шанс и множитель критического удара.": "Breathes pure fire: greatly increases critical hit chance and multiplier.",
"Ежедневный фарт": "Daily Luck",
"Желания исполняются! 🪄": "Wishes come true! 🪄",
"Железная мышь": "Iron Mouse",
"Железный коготь": "Iron Claw",
"Жуки на монете: лопайте их и получайте до +50% сверх съеденного": "Bugs on the coin: pop them and get up to +50% over what they ate",
"ЗАКРЕПЛЁННОЕ УЛУЧШЕНИЕ:": "PINNED UPGRADE:",
"ЗОЛОТОЙ ДОЖДЬ:": "GOLDEN RAIN:",
"Заблокирован": "Locked",
"Заблокирована": "Locked",
"Забрать": "Claim",
"Забрать (": "Claim (",
"Заговорённая подкова": "Charmed Horseshoe",
"Загрузка имперских хроник...": "Loading imperial chronicles...",
"Закалка x2 готова к покупке": "x2 tempering ready to buy",
"Закрыть": "Close",
"Заработать 1 000 монет за всё время": "Earn 1,000 coins in total",
"Заработать 100B монет за всё время": "Earn 100B coins in total",
"Заработать 100K монет за всё время": "Earn 100K coins in total",
"Заработать 1B монет за всё время": "Earn 1B coins in total",
"Заработать 1M монет за всё время": "Earn 1M coins in total",
"Заработать 1T монет за всё время": "Earn 1T coins in total",
"Заработать 50M монет за всё время": "Earn 50M coins in total",
"Застывшее ледяное сердце древнего ледника.": "The frozen icy heart of an ancient glacier.",
"Захват Тёмной Материи": "Dark Matter Grip",
"Заходите каждый день!": "Come back every day!",
"Заходите каждый день: если пропустить день, серия начнётся с первого дня.": "Come back every day: if you miss a day, the streak starts over from day 1.",
"Звездопад": "Starfall",
"Звук включен": "Sound on",
"Звук выключен": "Sound off",
"Звёздная закалка": "Stellar Tempering",
"Звёздная мышь": "Star Mouse",
"Звёздная пыль": "Stardust",
"Звёздная пыль обращается в кристаллы! ✨": "Stardust turns into crystals! ✨",
"Звёздный Единорог": "Star Unicorn",
"Звёздный ловец": "Star Catcher",
"Звёзды сулят удачу! 🔮": "The stars promise luck! 🔮",
"Зелье Квантового Тапа": "Quantum Tap Potion",
"Зерно": "Grain",
"Золотая Корона": "Golden Crown",
"Золотая закалка": "Golden Tempering",
"Золото": "Gold",
"Золотое Семя": "Golden Seed",
"Золотое яйцо": "Golden Egg",
"Золотой Бог-Дракон": "Golden Dragon God",
"Золотой Всплеск": "Golden Surge",
"Золотой Дождь!": "Golden Rain!",
"Золотой Кликер: Тап-Империя": "Golden Clicker: Tap Empire",
"Золотой водопад": "Golden Waterfall",
"Золотой клик": "Golden Click",
"Золотой миллиардер": "Golden Billionaire",
"Золотой перстень": "Golden Ring",
"Игни": "Igni",
"Изумрудный разряд": "Emerald Discharge",
"Изучайте реликвии за Кристаллы Престижа. Все бонусы сохраняются при перерождениях навсегда!": "Research relics with Prestige Crystals. All bonuses are kept forever through rebirths!",
"Изучено": "Researched",
"Изучить 3 разных артефакта": "Research 3 different artifacts",
"Изучить 8 разных артефактов": "Research 8 different artifacts",
"Изучить созвездие": "Study constellation",
"Императорская Сакура": "Imperial Sakura",
"Императорский красный дракон, благословляющий клики богатством.": "An imperial red dragon blessing taps with wealth.",
"Императорское золото древних правителей.": "Imperial gold of ancient rulers.",
"Империя выросла — пора выбрать путь. Выбор бесплатный, сменить его позже можно за 30 минут дохода.": "The empire has grown — time to choose a path. The choice is free; you can change it later for 30 minutes of income.",
"Имперская дезинсекция": "Imperial Pest Control",
"Имперские Задания": "Imperial Quests",
"Имперский капитал": "Imperial Capital",
"Имперский метеоролог обещает переменную облачность с кратковременными дождями из чистых монет.": "The imperial weatherman forecasts partly cloudy skies with short showers of pure coins.",
"Инвестиции в рост": "Investing in Growth",
"Индустриализация": "Industrialization",
"Искатель Сокровищ": "Treasure Hunter",
"Искры при тапах и победах": "Sparks on taps and wins",
"Каждые 5 уровней Хомяков дают +20% к добыче Видеокарт!": "Every 5 Hamster levels give +20% to GPU Warehouse income!",
"Каждый кристалл даёт +7.5%/+10%/+12.5% к доходу вместо +5%!": "Each crystal gives +7.5%/+10%/+12.5% income instead of +5%!",
"Каждый тап приносит ещё 3% от дохода в секунду": "Each tap brings an extra 3% of income per second",
"Как получить:": "How to get:",
"Квантовый Глитч": "Quantum Glitch",
"Квантовый Титан": "Quantum Titan",
"Квантовый Трейдинг": "Quantum Trading",
"Квантовый всплеск усиливает тапы в 5 раз!": "A quantum surge boosts taps 5 times!",
"Квантовый нейропроцессор будущего с неоновой подсветкой.": "A quantum neuroprocessor of the future with neon lights.",
"Квантовый стилус": "Quantum Stylus",
"Кибер-Пёс": "Cyber Dog",
"Кибер-Ядро 2077": "Cyber Core 2077",
"Кибер-рука 2.0": "Cyber Arm 2.0",
"Клевер Изобилия": "Clover of Plenty",
"Когда оба доросли до нужного уровня (указан на карточке), синергию можно купить.": "When both have reached the required level (shown on the card), the synergy can be bought.",
"Колдовать": "Cast",
"Колесо Фортуны": "Wheel of Fortune",
"Колесо вращается...": "The wheel is spinning...",
"Колесо на 30% чаще и 15% шанс x2 тапа": "Wheel 30% more often and 15% chance of x2 tap",
"Колесо удачи": "Wheel of Luck",
"Коллапс гигантской звезды, источающий космическую энергию.": "The collapse of a giant star, radiating cosmic energy.",
"Кометный дозор": "Comet Watch",
"Кометы прилетают ещё на 15% чаще": "Comets arrive another 15% more often",
"Кометы прилетают на 15% чаще": "Comets arrive 15% more often",
"Кометы прилетают на 40% чаще": "Comets arrive 40% more often",
"Конфета-скелет": "Skeleton Candy",
"Космическая Аномалия!": "Cosmic Anomaly!",
"Космическая Сверхновая": "Cosmic Supernova",
"Космическая закалка": "Cosmic Tempering",
"Космический баланс: +25% ко всему доходу навсегда, а «Счастливчик» с комет даёт на 25% больше.": "Cosmic balance: +25% to all income forever, and «Lucky» from comets gives 25% more.",
"Космического Вознесения": "Cosmic Ascension",
"Космическое Вознесение": "Cosmic Ascension",
"Космическое создание: ускоряет бесплатное Колесо Фортуны и иногда удваивает тап!": "A cosmic creature: speeds up the free Wheel of Fortune and sometimes doubles a tap!",
"Косточка из чистого золота! 🦴": "A bone of pure gold! 🦴",
"Кот-Банкир": "Banker Cat",
"Кот-Банкир (ур. 1)": "Banker Cat (lvl 1)",
"Кот-Банкир требует удвоить порцию сметаны в связи с небывалым ростом валового дохода империи.": "The Banker Cat demands a double serving of sour cream due to the empire's unprecedented growth.",
"Котёнок-аналитик": "Analyst Kitten",
"Котёнок-инженер": "Engineer Kitten",
"Котёнок-надзиратель": "Overseer Kitten",
"Котёнок-помощник": "Helper Kitten",
"Котёнок-работник": "Worker Kitten",
"Котёнок-управляющий": "Manager Kitten",
"Кошачья магия: каждый уровень усиливает Славу Империи (бонус за достижения) на +20% (до удвоения +100% на 5 ур.)!": "Cat magic: each level boosts Empire Glory (achievement bonus) by +20% (up to double, +100% at lvl 5)!",
"Крипто-Биткоин": "Crypto Bitcoin",
"Крипто-Царь 👑": "Crypto Tsar 👑",
"Крипто-ферма": "Crypto Farm",
"Криптофермы подключены к Спутникам: их доход вырастает в 2.5 раза (x2.5)!": "Crypto farms are linked to Satellites: their income grows 2.5 times (x2.5)!",
"Кристалл": "Crystal",
"Кристаллы": "Crystals",
"Кролик-банкир": "Banker Bunny",
"Крутануть Колесо Фортуны": "Spin the Wheel of Fortune",
"Крути колесо и выигрывай горы монет, кристаллы или режим x5!": "Spin the wheel and win piles of coins, crystals or x5 mode!",
"Крутить (Бесплатно)": "Spin (Free)",
"Кулак Сингулярности": "Singularity Fist",
"Купите для призыва": "Buy to summon",
"Купите закалку на полке «Улучшения» выше": "Buy the tempering on the «Upgrades» shelf above",
"Купить": "Buy",
"Купить 30 уровней или улучшений за неделю": "Buy 30 levels or upgrades this week",
"Купить 5 уровней или улучшений": "Buy 5 levels or upgrades",
"Купить за монеты": "Buy for coins",
"Купить ур. (🪙 0)": "Buy lvl (🪙 0)",
"Лазерный манипулятор": "Laser Manipulator",
"Легендарный тапер": "Legendary Tapper",
"Лето": "Summer",
"Летучая мышь-копилка": "Piggy Bank Bat",
"Ловец комет": "Comet Catcher",
"Ловит 60% комет и капель дождя": "Catches 60% of comets and rain drops",
"Ловите падающие сокровища! (": "Catch the falling treasures! (",
"Лопнуть 10 жуков за неделю": "Pop 10 bugs this week",
"Лопнуть 2 жука на монете": "Pop 2 bugs on the coin",
"Лунная Сингулярность": "Lunar Singularity",
"Лунная база направляет энергию в Сферу Дайсона: удвоение добычи (x2)!": "The Moon Base channels energy into the Dyson Sphere: income doubles (x2)!",
"Лунная станция": "Moon Base",
"Любовное письмо": "Love Letter",
"МАГАЗИН И УЛУЧШЕНИЯ": "SHOP & UPGRADES",
"МАКС": "MAX",
"МАКС УРОВЕНЬ": "MAX LEVEL",
"МАКС. УРОВЕНЬ": "MAX LEVEL",
"Магазин работает внутри Яндекс Игр.": "The shop works inside Yandex Games.",
"Магически строит бесплатные уровни случайного открытого предприятия: +10% от его уровня (не меньше 1, до 25)!": "Magically builds free levels of a random unlocked business: +10% of its level (at least 1, up to 25)!",
"Магический Сачок": "Magic Net",
"Магия радуги наполняет казну! 🌈": "Rainbow magic fills the treasury! 🌈",
"Магнат Мегаполиса": "Megapolis Tycoon",
"Макс": "Max",
"Малыш Дракон": "Baby Dragon",
"Мана 100%": "Mana 100%",
"Мана восстанавливается сама: +1 каждые 3 секунды.": "Mana restores by itself: +1 every 3 seconds.",
"Мана восстанавливается: +1 ед. каждые 3 секунды": "Mana restores: +1 every 3 seconds",
"Мана: 100 / 100": "Mana: 100 / 100",
"Мандарин удачи": "Lucky Tangerine",
"Марсианская колония": "Mars Colony",
"Мастер критов": "Crit Master",
"Мастер тапа": "Tap Master",
"Мгновенно даёт 30 минут дохода в секунду (но не меньше 15% от ваших монет)!": "Instantly gives 30 minutes of income per second (but no less than 15% of your coins)!",
"Мега-режим x5": "Mega Mode x5",
"Медвежатник": "Safecracker",
"Медвежатник недели": "Safecracker of the Week",
"Медный палец": "Copper Finger",
"Меткий удар": "Sharp Strike",
"Механический арифмометр": "Mechanical Calculator",
"Мешочек кристаллов": "Pouch of Crystals",
"Микрочипы": "Microchips",
"Милионер_777": "Millionaire_777",
"Миллионер": "Millionaire",
"Мини-игра отменена": "Mini-game canceled",
"Министерство магии заявило: перерождения в Астрал официально признаны безопасным способом туризма.": "The Ministry of Magic announced: rebirths into the Astral are officially recognized as safe tourism.",
"Мифриловая мышь": "Mithril Mouse",
"Множитель вех:": "Milestone multiplier:",
"Модник": "Fashionista",
"Моментально получить": "Get instantly",
"Монеты": "Coins",
"Мороженое": "Ice Cream",
"Мудрая Сова": "Wise Owl",
"Мудро инвестируй каждый дублон! ✨": "Invest every doubloon wisely! ✨",
"Музыка (BGM)": "Music (BGM)",
"Музыка включена": "Music on",
"Музыка выключена": "Music off",
"Мультивселенский банк": "Multiverse Bank",
"Мурлычет при звоне монет и приумножает весь пассивный доход империи.": "Purrs at the sound of coins and multiplies the empire's passive income.",
"Муррр... золото в безопасности! 💰": "Purrr... the gold is safe! 💰",
"Мышь Бесконечности": "Mouse of Infinity",
"Мышь Желаний": "Mouse of Wishes",
"Мяу! Деньги текут рекой! 🪙": "Meow! Money flows like a river! 🪙",
"Мяу-Магнат": "Meow Magnate",
"НАДЕТ": "EQUIPPED",
"На рабочий стол или главный экран": "To desktop or home screen",
"На тайном аукционе продали старый медный палец первого кликера за баснословные триллионы.": "At a secret auction, the first clicker's old copper finger sold for fabulous trillions.",
"Набрать полное комбо и включить «Огонь x3»": "Fill the combo bar and turn on «Fire x3»",
"Награда на сегодня получена. Заходите завтра — серия продолжится!": "Today's reward is claimed. Come back tomorrow to continue the streak!",
"Надеть": "Equip",
"Нажмите ВЗЛОМАТЬ в зеленый сектор! Ошибка = провал!": "Press CRACK in the green zone! A miss = failure!",
"Нажмите на скин, чтобы посмотреть подробности. Надеть можно любой открытый.": "Tap a skin to see details. You can equip any unlocked one.",
"Накопить 10M монет на балансе": "Save up 10M coins",
"Нанести 10 критических тапов": "Land 10 critical taps",
"Нанести 100 критических тапов": "Land 100 critical taps",
"Наследие Предков": "Ancestral Legacy",
"Настроить": "Set up",
"Настройки": "Settings",
"Настройки игры": "Game settings",
"Начальный капитал": "Starting Capital",
"Начинающий Магнат": "Beginner Tycoon",
"Не изучено": "Not researched",
"Не открыт": "Locked",
"Не удалось загрузить рекламу": "Failed to load the ad",
"Небесная Удача": "Heavenly Luck",
"Небесном Древе": "Heavenly Tree",
"Небесные Звёзды (🌌)": "Heavenly Stars (🌌)",
"Небесные Звёзды Вознесения (нажмите для справки)": "Heavenly Ascension Stars (tap for info)",
"Небесный Уровень": "Heavenly Level",
"Недостаточно кристаллов престижа!": "Not enough prestige crystals!",
"Недостаточно кристаллов!": "Not enough crystals!",
"Недостаточно монет для сделки!": "Not enough coins for the deal!",
"Недостаточно монет для синергии!": "Not enough coins for the synergy!",
"Недостаточно монет для улучшения!": "Not enough coins for the upgrade!",
"Недостаточно монет!": "Not enough coins!",
"Недостаточно 💎 Кристаллов Престижа!": "Not enough 💎 Prestige Crystals!",
"Нет жуков и их дохода, нет бонуса +15%": "No bugs and their income, no +15% bonus",
"Неутомимый кибернетический помощник: автоматически тапает по монете!": "A tireless cyber helper: taps the coin automatically!",
"Нефритовый Дракон": "Jade Dragon",
"Нефть": "Oil",
"Нефтяная вышка": "Oil Rig",
"Новая эра": "New Era",
"Новый год": "New Year",
"ОГОНЬ 🔥": "FIRE 🔥",
"Обменять 25% монет": "Trade 25% of coins",
"Обученный хомяк": "Trained Hamster",
"Огненное Сердце": "Fiery Heart",
"Огненный день": "Fiery Day",
"Огненный раж": "Fiery Frenzy",
"Огненный режим": "Fire Mode",
"Ожидание летающих комет сокращается ещё на 30%!": "Comet waiting time is reduced by another 30%!",
"Ой, щекотно! Держи за ласку кристаллы! 💎": "Hey, that tickles! Here are some crystals for the petting! 💎",
"Око Снайпера": "Sniper's Eye",
"Опрос показал: 99% подданных счастливы, а оставшийся 1% просто ещё не поймал летающий метеорит.": "A poll showed: 99% of subjects are happy, and the remaining 1% just haven't caught a flying meteor yet.",
"Оптимизация сбора 100%! ⚙️": "Collection optimized 100%! ⚙️",
"Опытный Купец": "Seasoned Merchant",
"Орбитальный Блокчейн": "Orbital Blockchain",
"Орбитальный спутник": "Orbital Satellite",
"Отказаться от сделки": "Decline the deal",
"Отключает рекламу между этапами игры. Видео за награды остаются — по желанию.": "Disables ads between game stages. Rewarded videos stay — if you want them.",
"Открыт": "Unlocked",
"Открыть 5 обликов монеты": "Unlock 5 coin skins",
"Открыть Алмазного Владыку, Сверхновую или Глитч": "Unlock the Diamond Lord, Supernova or Glitch",
"Открыть все механики": "Unlock all features",
"Отмена": "Cancel",
"Офлайн-режим (без SDK)": "Offline mode (no SDK)",
"Оффлайн-доход работает до 16 часов и начисляет 100%": "Offline income lasts up to 16 hours at 100%",
"Оффлайн-доход работает до 24 часов со 100% эффективностью!": "Offline income lasts up to 24 hours at 100% efficiency!",
"Охота за кометами": "Comet Hunt",
"Охота на жуков": "Bug Hunt",
"Ошибка взлома! Сработала сигнализация, сейф заблокирован!": "Cracking failed! The alarm went off, the safe is locked!",
"Ошибка применения сохранения:": "Error applying save:",
"Ошибка рекламы:": "Ad error:",
"Ошибка сохранения в облако:": "Cloud save error:",
"ПИТОМЕЦ-СПУТНИК": "PET COMPANION",
"Пальцы-молнии": "Lightning Fingers",
"Панель разработчика (видна только в тестовой версии)": "Developer panel (visible only in the test version)",
"Паучья брошь": "Spider Brooch",
"Первая добыча": "First Loot",
"Первая тысяча": "First Thousand",
"Первые шаги магната": "A Tycoon's First Steps",
"Первый Капитал": "First Capital",
"Первый звон": "First Chime",
"Первый поток": "First Stream",
"Первый тюльпан": "First Tulip",
"Переключатель Сезонов": "Season Switcher",
"Выбранное улучшение начинает каждый новый забег сразу с 10 уровня — бесплатно!": "The chosen upgrade starts every new run at level 10 — for free!",
"Перо Феникса": "Phoenix Feather",
"Перчатка Бога": "God's Glove",
"Питомцы-Компаньоны": "Pet Companions",
"Плазменный импульс": "Plasma Pulse",
"Пластиковая мышь": "Plastic Mouse",
"Платиновая закалка": "Platinum Tempering",
"Пляжный зонтик": "Beach Umbrella",
"По слухам, вокруг монеты ползают золотые жуки. Они подозрительно сытые и лопаются с прибылью +15%!": "Rumor has it golden bugs crawl around the coin. They look suspiciously well-fed and pop with +15% profit!",
"Повелитель Времени": "Time Lord",
"Повелитель Времени ⏳": "Time Lord ⏳",
"Повелитель Фортуны": "Lord of Fortune",
"Повелитель неба": "Lord of the Sky",
"Под золотым дождём": "Under the Golden Rain",
"Подарок под ёлкой": "Gift Under the Tree",
"Поддержать империю": "Support the empire",
"Подпольный дата-центр": "Underground Data Center",
"Подсказка": "Tip",
"Позволяет включить любой сезон в любое время, а не только по календарю. Собирайте сезонные находки круглый год!": "Lets you turn on any season at any time, not just by the calendar. Collect seasonal finds all year round!",
"Позолоченная перчатка": "Gilded Glove",
"Поймать 10 комет за неделю": "Catch 10 comets this week",
"Поймать 12 комет или капель Золотого дождя": "Catch 12 comets or Golden Rain drops",
"Поймать 15 комет": "Catch 15 comets",
"Поймать 2 кометы": "Catch 2 comets",
"Поймать 2 кометы или капли Золотого дождя": "Catch 2 comets or Golden Rain drops",
"Поймать 3 капли Золотого дождя": "Catch 3 Golden Rain drops",
"Поймать 50 комет": "Catch 50 comets",
"Поймать первую комету": "Catch your first comet",
"Показ рекламы": "Showing ad",
"Покупайте дёшево, продавайте дорого. Цены сами тянутся к средней, а иногда резко растут или падают.": "Buy low, sell high. Prices drift toward the average, and sometimes rise or crash sharply.",
"Покупайте товары дёшево, продавайте дорого.": "Buy goods low, sell them high.",
"Покупать:": "Buy:",
"Покупка отменена": "Purchase canceled",
"Покупки сейчас недоступны. Попробуйте позже.": "Purchases are unavailable right now. Try again later.",
"Получать 100 монет в секунду": "Earn 100 coins per second",
"Получать 100M монет в секунду": "Earn 100M coins per second",
"Получать 10K монет в секунду": "Earn 10K coins per second",
"Получать 1M монет в секунду": "Earn 1M coins per second",
"Понятно!": "Got it!",
"После покупки одно из зданий начинает приносить в разы больше.": "After buying it, one of the buildings starts earning many times more.",
"Постоянный Слот I": "Permanent Slot I",
"Постоянный Слот II": "Permanent Slot II",
"Престижные Кристаллы (нажмите для справки)": "Prestige Crystals (tap for info)",
"Привет, Босс! 🐾": "Hi, Boss! 🐾",
"Призрачный пряник": "Ghost Gingerbread",
"Призыв Жука": "Summon Bug",
"Призывает золотую комету прямо сейчас. Поймайте её ради Безумия x7, Клик-Безумия x777 или крупного куша!": "Summons a golden comet right now. Catch it for Frenzy x7, Click Frenzy x777 or a big jackpot!",
"Прокачка усиливает бонус. Кот-Банкир уже с вами бесплатно.": "Upgrading boosts the bonus. The Banker Cat is already with you for free.",
"Пиратский Дублон": "Pirate Doubloon",
"Пропустить": "Skip",
"Пряник-сердце": "Heart Gingerbread",
"Путь можно сменить в любой момент за 30 минут дохода.": "You can change your path at any time for 30 minutes of income.",
"Разминка пальцев": "Finger Warm-up",
"Разрыв матрицы кода игры: удваивает абсолютно всё!": "A tear in the game's code matrix: doubles absolutely everything!",
"Ракушка-копилка": "Seashell Piggy Bank",
"Раскаленный вулканический обсидиан и бурлящая лава.": "Red-hot volcanic obsidian and boiling lava.",
"Расписное яйцо": "Painted Egg",
"Растворите материальный мир и вознеситесь в Астрал! Каждый заработанный дублон увеличивает ваш": "Dissolve the material world and ascend to the Astral! Every doubloon you earn raises your",
"Резонатор Цен": "Price Resonator",
"Рейтинг Магнатов": "Tycoon Rankings",
"Рейтинг лидеров": "Leaderboard",
"Реклама закрыта, была показана:": "Ad closed, was shown:",
"Реклама сейчас недоступна, попробуйте позже": "Ads are unavailable right now, try again later",
"Рекламный буст x2 и мега-буст x5 длятся в 2 раза дольше!": "The x2 ad boost and x5 mega boost last twice as long!",
"Рекс-3000": "Rex-3000",
"Ррр! Опасная прибыль! 🌋": "Grrr! Dangerous profit! 🌋",
"Рубиновый стилус": "Ruby Stylus",
"С возвращением, Магнат!": "Welcome back, Tycoon!",
"С неба падают горы сверкающих монет и самоцветов!": "Mountains of shiny coins and gems are falling from the sky!",
"СВЯЗЬ АКТИВНА": "LINK ACTIVE",
"СЕЙФ ВЗЛОМАН! Сокровищница открыта!": "SAFE CRACKED! The treasury is open!",
"СИНЕРГИЯ": "SYNERGY",
"СИНЕРГИЯ ПРЕДПРИЯТИЙ": "BUSINESS SYNERGY",
"СРОЧНО: Золотая лихорадка на улицах! Горожане тапают по мостовым со скоростью света!": "BREAKING: Gold fever in the streets! Citizens tap the pavement at light speed!",
"СУПЕР-КУШ": "SUPER JACKPOT",
"Сапфировый молот": "Sapphire Hammer",
"Сбросить весь прогресс?": "Reset all progress?",
"Свернуть": "Collapse",
"Светлый — спокойная игра и кометы чаще. Сменить путь можно позже за 30 минут дохода.": "Light — a calm game and more comets. You can change your path later for 30 minutes of income.",
"Свеча-тыква": "Pumpkin Candle",
"Священный кристалл нерушимой прочности и сияния.": "A sacred crystal of unbreakable strength and radiance.",
"Священный свет направляет сокровища: каждый уровень сокращает ожидание летающих комет на 6% (до −30% на 5 ур.)!": "Sacred light guides the treasures: each level reduces comet waiting time by 6% (up to −30% at lvl 5)!",
"Сделать 1 000 тапов": "Make 1,000 taps",
"Сделать 100 000 тапов": "Make 100,000 taps",
"Сделать 100 тапов": "Make 100 taps",
"Сделать 150 тапов": "Make 150 taps",
"Сделать 2 500 тапов за неделю": "Make 2,500 taps this week",
"Сделать 25 000 тапов": "Make 25,000 taps",
"Сделать 250 тапов сегодня": "Make 250 taps today",
"Сделать 5 000 тапов": "Make 5,000 taps",
"Сезон": "Season",
"Сезоны": "Seasons",
"Сейчас нет сезона": "No season right now",
"Сервера мгновенно исполняют ордера: Биржа приносит +80% дохода!": "Servers execute orders instantly: the Exchange earns +80% income!",
"Серверная стойка": "Server Rack",
"Сердечко-монетка": "Heart Coin",
"Серебряная закалка": "Silver Tempering",
"Серебряный напёрсток": "Silver Thimble",
"Сила": "Power",
"Сингулярный реактор": "Singularity Reactor",
"Синергия связывает два предприятия.": "A synergy links two businesses.",
"Сканирую горизонт... комета поймана! ☄️": "Scanning the horizon... comet caught! ☄️",
"Скин": "Skin",
"Скины меняют вид монеты и дают бонус к доходу.": "Skins change the coin's look and give an income bonus.",
"Склад видеокарт": "GPU Warehouse",
"Слава Империи: каждое открытое достижение даёт +2% ко всему доходу вместо +1%!": "Empire Glory: each unlocked achievement gives +2% to all income instead of +1%!",
"След. удвоение:": "Next doubling:",
"Следующие торги через": "Next trading in",
"Сначала повысьте уровень необходимых предприятий!": "First raise the required businesses' levels!",
"Снежинка-купюра": "Snowflake Banknote",
"Собрано в этом сезоне:": "Collected this season:",
"Собрать все 15 обликов монеты": "Collect all 15 coin skins",
"Событие": "Event",
"События приходят на 25% чаще, а сейф даёт на 35% больше монет за уровень": "Events come 25% more often, and the safe gives 35% more coins per level",
"Совершить 3 Вознесения": "Ascend 3 times",
"Совершить первое Вознесение": "Ascend for the first time",
"Сокровищница": "Treasury",
"Солнечные очки": "Sunglasses",
"Солнечный Протуберанец": "Solar Prominence",
"Солнечный парус": "Solar Sail",
"Соседний феодал попытался скопировать нашу монету, но обанкротился на первом же тапе.": "A neighboring lord tried to copy our coin but went bankrupt on the very first tap.",
"Сочный арбуз": "Juicy Watermelon",
"Спонтанный Капитал": "Spontaneous Capital",
"Стартовый Набор": "Starter Kit",
"Стартовый набор": "Starter Pack",
"Стартуйте забег сразу с 10 Авто-кликерами и 5 Медными пальцами!": "Start each run with 10 Auto-Clickers and 5 Copper Fingers!",
"Стартуйте каждый новый забег с 5 бесплатными первыми Авто-кликерами!": "Start each new run with 5 free Auto-Clickers!",
"Статистика Империи": "Empire Statistics",
"Статус": "Status",
"Стоимость всех улучшений дешевле на 5% за ур.": "All upgrades are 5% cheaper per lvl",
"Стоимость:": "Cost:",
"Странник предлагает редкие товары за монеты!": "A wanderer offers rare goods for coins!",
"Стрела Купидона": "Cupid's Arrow",
"Сундук Кристаллов": "Chest of Crystals",
"Сундук кристаллов": "Chest of Crystals",
"Сфера Дайсона": "Dyson Sphere",
"Сфера-1": "Sphere-1",
"Счастливый Тапер": "Lucky Tapper",
"Счастливый день": "Lucky Day",
"Счёты синхронизируют Арифмометры: их доход удваивается (x2)!": "The Abacus syncs with Calculators: their income doubles (x2)!",
"ТАП-ИМПЕРИЯ ⚡": "TAP EMPIRE ⚡",
"ТРЕБОВАНИЯ ДЛЯ ОТКРЫТИЯ:": "REQUIREMENTS TO UNLOCK:",
"Таинственный Торговец": "Mysterious Merchant",
"Таинственный Торговец!": "Mysterious Merchant!",
"Тап +1% от дохода в секунду": "Tap +1% of income per second",
"Тап +3% от дохода в секунду": "Tap +3% of income per second",
"Тап-Империя ⚡ (Секрет: кликни 7 раз!)": "Tap Empire ⚡ (Secret: click 7 times!)",
"Тап-Машина ⚡": "Tap Machine ⚡",
"Тапайте как можно быстрее!": "Tap as fast as you can!",
"Тапнуть по монете впервые": "Tap the coin for the first time",
"Текущий уровень:": "Current level:",
"Тест": "Test",
"Титанический Тап": "Titanic Tap",
"Титановая мышь": "Titanium Mouse",
"Только золотые кометы — никаких напастей и потерь": "Golden comets only — no misfortunes and no losses",
"Только на Тёмном пути: призывает жука на монету (до 8). Чем больше жуков, тем выгоднее их лопать!": "Dark path only: summons a bug onto the coin (up to 8). The more bugs, the more profitable it is to pop them!",
"Топ богатейших правителей Тап-Империи": "The richest rulers of the Tap Empire",
"Торги идут раз в минуту. Склад растёт вместе с числом Городских бирж.": "Trading happens once a minute. Storage grows with the number of City Exchanges.",
"Торговать": "Trade",
"Торговец растворился в тумане...": "The merchant vanished into the fog...",
"Тратьте ману на заклинания: призвать комету, получить монеты, бесплатный уровень здания.": "Spend mana on spells: summon a comet, get coins, a free building level.",
"Триллионер Вселенной": "Trillionaire of the Universe",
"Трудовая неделя": "Working Week",
"Тыквенная монета": "Pumpkin Coin",
"Тёмная Сингулярность": "Dark Singularity",
"Тёмный — больше дохода и жуки, но тёмные кометы могут навредить.": "Dark — more income and bugs, but dark comets can hurt.",
"У вас:": "You have:",
"У каждого несколько уровней, каждый следующий дороже.": "Each has several levels, and each next one costs more.",
"УЛУЧШЕНИЕ КЛИКА": "TAP UPGRADE",
"Угу! Знания обращаются в богатство! 📜": "Hoot! Knowledge turns into wealth! 📜",
"Удвоить доход": "Double income",
"Уже получено сегодня": "Already claimed today",
"Уровень 0/10. Первый уровень даст +5% ко всему доходу навсегда!": "Level 0/10. The first level gives +5% to all income forever!",
"Уровень 0/5. Первый уровень откроет оффлайн-доход на 8 часов при 52% мощности.": "Level 0/5. The first level unlocks 8 hours of offline income at 52% power.",
"Уровень 0/5. Первый уровень сократит ожидание комет на 6%!": "Level 0/5. The first level reduces comet waiting time by 6%!",
"Уровень 0/5. Первый уровень усилит кошачью мантию на +20%!": "Level 0/5. The first level boosts the cat's mantle by +20%!",
"Усиливает Вознесение: каждый уровень престижа даёт +15% ко всей добыче навсегда вместо +10%!": "Boosts Ascension: each prestige level gives +15% to all income forever instead of +10%!",
"Усиливает доход в секунду, снижает цены и увеличивает офлайн-доход": "Boosts income per second, lowers prices and increases offline income",
"Усиливает тап, криты и режим «Огонь x3»": "Boosts taps, crits and «Fire x3» mode",
"Ускоряет Колесо Фортуны, усиливает события и кристаллы": "Speeds up the Wheel of Fortune, boosts events and crystals",
"Утренняя разминка": "Morning Warm-up",
"Участвовать": "Join",
"Учёные доказали: регулярный клик по экрану развивает микромоторику и привлекает богатство.": "Scientists proved: regular screen tapping develops fine motor skills and attracts wealth.",
"Феникс": "Phoenix",
"Философский Камень": "Philosopher's Stone",
"Финансовый магнат": "Financial Tycoon",
"Фондовая биржа бьёт исторические рекорды. Брокеры бросают в воздух золотые конфетти!": "The stock exchange breaks all-time records. Brokers throw golden confetti into the air!",
"Фыррр! Огненный критический удар! 🔥": "Fsss! A fiery critical hit! 🔥",
"Хлопушка": "Party Popper",
"Хомяк-коин": "Hamster Coin",
"Хомяки-майнеры в золотых жилетах замечены на переговорах в министерстве финансов.": "Miner hamsters in golden vests were spotted at talks in the Ministry of Finance.",
"Хомячий Майнинг": "Hamster Mining",
"Хороший день для прибыли! ✨": "A good day for profit! ✨",
"Хранитель Камня": "Stone Keeper",
"Хранитель реликвий": "Keeper of Relics",
"Хранительница тайных знаний: повышает награды за задания и Колесо Фортуны.": "Keeper of secret knowledge: increases quest and Wheel of Fortune rewards.",
"Хроники Империи (Кликните для свежих слухов!)": "Empire Chronicles (tap for fresh rumors!)",
"Хроно-Магнит": "Chrono Magnet",
"Хроно-Тап Вечности": "Chrono Tap of Eternity",
"Хроно-Шестерня": "Chrono Gear",
"Хэллоуин": "Halloween",
"Цена указана в $, где 1$ = 1 секунда вашего дохода.": "The price is in $, where $1 = 1 second of your income.",
"Цены на видеокарты пробили стратосферу: геймеры пересаживаются на счёты.": "GPU prices broke through the stratosphere: gamers are switching to abacuses.",
"Цифровое золото блокчейна и мощь децентрализации.": "Digital gold of the blockchain and the power of decentralization.",
"Частицы и конфетти": "Particles and confetti",
"Черненное пиратское золото из трюма «Летучего Голландца».": "Blackened pirate gold from the hold of the «Flying Dutchman».",
"Звёзды тратятся в Небесном Древе. Возноситесь, когда рост заметно замедлился.": "Stars are spent in the Heavenly Tree. Ascend when your growth slows down noticeably.",
"Чистое озарение космоса: каждый уровень даёт +5% ко всему доходу навсегда (до +50% на 10 ур.)!": "Pure cosmic insight: each level gives +5% to all income forever (up to +50% at lvl 10)!",
"Шанс на Багровое Безумие x555 и тёмный дар кристаллов": "A chance of Crimson Frenzy x555 and a dark gift of crystals",
"Шоколадная медаль": "Chocolate Medal",
"Энергия термоядерного синтеза пылающей звезды.": "The thermonuclear energy of a blazing star.",
"Эффекты звука (SFX)": "Sound effects (SFX)",
"Юный Старатель": "Young Prospector",
"Язык: Русский": "Language: Russian",
"Ярлык игры": "Game shortcut",
"а": "and",
"августа": "August",
"апреля": "April",
"во вкладке «Предприятия».": "in the «Businesses» tab.",
"во время": "during",
"глобальные улучшения в": "global upgrades in the",
"декабря": "December",
"для разблокировки постоянных слотов и космических талантов!": "to unlock permanent slots and cosmic talents!",
"достижения 🏆, ежедневные и еженедельные задания 📜, золотые кометы ✨, Золотой Дождь 🌧️ и Колесо Фортуны 🎡.": "achievements 🏆, daily and weekly quests 📜, golden comets ✨, Golden Rain 🌧️ and the Wheel of Fortune 🎡.",
"июля": "July",
"июня": "June",
"к добыче этого здания": "to this building's income",
"к тапу": "per tap",
"каждый полученный кристалл навсегда даёт": "each crystal you get permanently gives",
"ко всему доходу": "to all income",
"ко всему доходу. Тратить их можно спокойно: бонус считается от всех полученных (сейчас": "to all income. You can spend them freely: the bonus counts all crystals ever received (now",
"конденсируются сами — одна сфера каждые 10 минут, даже когда вы не в игре. Сейчас вложено уровней:": "they condense by themselves — one sphere every 10 minutes, even while you're away. Levels invested now:",
"кристалл": "crystal",
"кристалла": "crystals",
"марта": "March",
"мая": "May",
"меняйте 3D-монету и получайте уникальные бонусы к доходу!": "change the 3D coin and get unique income bonuses!",
"монет за забег, награда": "coins in one run, reward",
"на 10 ур.": "at lvl 10",
"навсегда": "forever",
"ноября": "November",
"октября": "October",
"питомцы (Дракон, Дрон, Единорог), эксклюзивные скины монеты и Древо Артефактов.": "pets (Dragon, Drone, Unicorn), exclusive coin skins and the Artifact Tree.",
"повышают астральный уровень предприятий (кнопка 🔮 на карточке здания во вкладке «Бизнес»). Каждый уровень даёт": "raise the astral level of businesses (the 🔮 button on a building card in the «Business» tab). Each level gives",
"с)": "s)",
"сентября": "September",
"ур.": "lvl",
"ур. 0": "lvl 0",
"ур. 0 (+0% CpS)": "lvl 0 (+0% CpS)",
"февраля": "February",
"января": "January",
"— нажмите, чтобы забрать": "— tap to claim",
"ℹ️ ГИД ПО ВАЛЮТАМ": "ℹ️ CURRENCY GUIDE",
"⌛ Событие закончилось": "⌛ The event is over",
"⏩ Пропустить 1 час": "⏩ Skip 1 hour",
"⏱️ Времени в игре:": "⏱️ Time played:",
"⏱️ Время отсутствия:": "⏱️ Time away:",
"⏳ «Огонь x3» закончился. Перезарядка 30 сек.": "⏳ «Fire x3» is over. Cooldown 30 sec.",
"☀️ Светлый путь": "☀️ Light Path",
"☀️ Светлый путь выбран: кометы чаще, никаких жуков и напастей.": "☀️ Light Path taken: more comets, no bugs and no misfortunes.",
"☄️ Комета сейчас": "☄️ Comet now",
"☄️ Поймано комет:": "☄️ Comets caught:",
"⚙️ ОПЦИИ И ПАРАМЕТРЫ": "⚙️ OPTIONS & SETTINGS",
"⚠️ ВНИМАНИЕ!": "⚠️ WARNING!",
"⚡ АНОМАЛИЯ": "⚡ ANOMALY",
"⚡ Бизнес": "⚡ Business",
"⚡ В сек:": "⚡ Per sec:",
"⚡ МЕГА-РЕЖИМ x5:": "⚡ MEGA MODE x5:",
"⚡ МИНИ-ИГРА": "⚡ MINI-GAME",
"⚡ Открой вкладку «Бизнес» внизу": "⚡ Open the «Business» tab below",
"⚡ Пассивный доход:": "⚡ Passive income:",
"⚡ Сделка совершена! x5 Мега-Буст на 3 минуты!": "⚡ Deal done! x5 Mega Boost for 3 minutes!",
"✋ Режим расстановки UI включен! Перетаскивайте кнопки и панели.": "✋ UI layout mode on! Drag buttons and panels.",
"✓ Активна": "✓ Active",
"✓ Ваш путь": "✓ Your path",
"✓ Выбран": "✓ Selected",
"✓ Выбрано": "✓ Selected",
"✓ Забрано": "✓ Claimed",
"✓ МАКС": "✓ MAX",
"✓ МАКСИМАЛЬНЫЙ УРОВЕНЬ": "✓ MAX LEVEL",
"✓ Максимальный уровень": "✓ Max level",
"✓ Надет": "✓ Equipped",
"✓ Получено": "✓ Received",
"✓ Реклама отключена. Спасибо!": "✓ Ads disabled. Thank you!",
"✓ Синергия уже активна": "✓ Synergy already active",
"✓ Созвездие прокачано на максимум": "✓ Constellation fully upgraded",
"✨ ВОПЛОТИТЬСЯ (ВЕРНУТЬСЯ В МИР)": "✨ REINCARNATE (RETURN TO THE WORLD)",
"✨ ДОСТУПНО": "✨ AVAILABLE",
"✨ ДОСТУПНО ДЛЯ ИЗУЧЕНИЯ": "✨ AVAILABLE TO STUDY",
"✨ Длань Судьбы призвала золотую комету!": "✨ The Hand of Fate summoned a golden comet!",
"✨ Доступно бесплатное вращение!": "✨ Free spin available!",
"✨ Золотой дождь подошел к концу!": "✨ The Golden Rain is over!",
"✨ Лови летящую комету — тапни по ней!": "✨ Catch the flying comet — tap it!",
"✨ НЕБЕСНЫЙ УРОВЕНЬ": "✨ HEAVENLY LEVEL",
"✨ Секрет уже разгадан, великий Император!": "✨ The secret is already solved, great Emperor!",
"✨ Текущий небесный бонус:": "✨ Current heavenly bonus:",
"❄️ ИНФЛЯЦИЯ -50%!": "❄️ INFLATION -50%!",
"❄️ ПРОКЛЯТИЕ ЗАТМЕНИЯ: Инфляция! Доход снижен на 50% на 25 секунд!": "❄️ ECLIPSE CURSE: Inflation! Income reduced by 50% for 25 seconds!",
"❌ Недостаточно маны! Подождите восстановления.": "❌ Not enough mana! Wait for it to restore.",
"⬆ Улучшения": "⬆ Upgrades",
"⬆ закалка x2 готова": "⬆ x2 tempering ready",
"⬆️ Уровней улучшений:": "⬆️ Upgrade levels:",
"🌌 Аномалия": "🌌 Anomaly",
"🌌 ВОЗНЕСТИСЬ В АСТРАЛ (+0 🌌)": "🌌 ASCEND TO THE ASTRAL (+0 🌌)",
"🌌 Вознесение": "🌌 Ascension",
"🌌 КОСМИЧЕСКАЯ АНОМАЛИЯ! +500% к силе тапа на 20 секунд!": "🌌 COSMIC ANOMALY! +500% tap power for 20 seconds!",
"🌌 НЕБЕСНЫЕ ЧИПЫ": "🌌 HEAVENLY STARS",
"🌌 Небесные Звёзды": "🌌 Heavenly Stars",
"🌌 Чипов при вознесении:": "🌌 Stars on ascension:",
"🌑 Теневой путь": "🌑 Shadow Path",
"🌑 Теневой путь выбран: +15% к доходу, жуки и тёмные кометы!": "🌑 Shadow Path sealed: +15% income, bugs and dark comets!",
"🌗 Выбор пути (Бизнес → Путь)": "🌗 Path choice (Business → Path)",
"🌗 Путь империи": "🌗 Empire path",
"🌗 Призыв жуков доступен только на Тёмном пути (Бизнес → Путь).": "🌗 Summoning bugs is only available on the Dark path (Business → Path).",
"🌗 Сбросить путь": "🌗 Reset path",
"🌧️ Дождь": "🌧️ Rain",
"🌧️ ЗОЛОТОЙ ДОЖДЬ": "🌧️ GOLDEN RAIN",
"🌧️ ЗОЛОТОЙ ДОЖДЬ НАЧАЛСЯ! Ловите падающие сокровища!": "🌧️ GOLDEN RAIN HAS STARTED! Catch the falling treasures!",
"🎃 Сезонная находка": "🎃 Seasonal find",
"🎉 Отлично! Дальше будут открываться новые механики": "🎉 Great! New features will unlock as you grow",
"🎉 СЕКРЕТ ИМПЕРАТОРА НАЙДЕН! Награда: +5 💎 и облик \"Нефритовый Дракон\"!": "🎉 EMPEROR'S SECRET FOUND! Reward: +5 💎 and the \"Jade Dragon\" skin!",
"🎡 Колесо Фортуны": "🎡 Wheel of Fortune",
"🎡 Колесо без ожидания": "🎡 Wheel without waiting",
"🎡 РУЛЕТКА УДАЧИ": "🎡 LUCKY ROULETTE",
"🎨 ОБЛИК МОНЕТЫ": "🎨 COIN SKIN",
"🎨 Открыто обликов:": "🎨 Skins unlocked:",
"🎨 Скины": "🎨 Skins",
"🎨 Скины монеты": "🎨 Coin skins",
"🎬 Забрать x3 (": "🎬 Claim x3 (",
"🎬 Крутить за рекламу": "🎬 Spin for an ad",
"🎯 ВЗЛОМАТЬ ЗАМОК!": "🎯 CRACK THE LOCK!",
"🏆 +1% Славы": "🏆 +1% Glory",
"🏆 Достижение получено! Слава Империи растёт.": "🏆 Achievement received! Empire Glory grows.",
"🏆 Достижения": "🏆 Achievements",
"🏆 Достижения и рейтинг": "🏆 Achievements and rankings",
"🏆 ЗАЛ СЛАВЫ": "🏆 HALL OF FAME",
"🏆 Основное": "🏆 Main",
"🏆 Основные": "🏆 Main",
"🏆 Получить": "🏆 Receive",
"🏆 Слава Империи:": "🏆 Empire Glory:",
"🏢 Предприятия": "🏢 Businesses",
"🐛 Жук": "🐛 Bug",
"🐛 Замечен Золотой Жук-Паразит! Он ползёт к вашей монете!": "🐛 A Golden Parasite Bug spotted! It's crawling to your coin!",
"🐛 Тень призвала жука!": "🐛 The shadows summoned a bug!",
"🐜 Жук ещё ползёт к монете! Подождите, пока он присосётся!": "🐜 The bug is still crawling to the coin! Wait until it latches on!",
"🐾 Выбрать спутником": "🐾 Choose as companion",
"🐾 Питомцы": "🐾 Pets",
"🐾 Преданность питомца: +2 💎!": "🐾 Pet devotion: +2 💎!",
"👁️ Тёмная комета": "👁️ Dark comet",
"👆 Клик": "👆 Tap",
"👆 Сделано кликов:": "👆 Taps made:",
"👆 Тап:": "👆 Tap:",
"👆 Тапай по монете!": "👆 Tap the coin!",
"👑 Сила тапа:": "👑 Tap power:",
"💎 Назначить улучшение в Слот": "💎 Assign an upgrade to the Slot",
"💎 ПОСТОЯННЫЙ СЛОТ": "💎 PERMANENT SLOT",
"💎 Перерождений:": "💎 Rebirths:",
"💎 По Престижу": "💎 By Prestige",
"💎 Престижные Кристаллы": "💎 Prestige Crystals",
"💎 Сделка совершена! Получен +1 Кристалл!": "💎 Deal done! You got +1 Crystal!",
"💛 Спасибо за оценку!": "💛 Thanks for the rating!",
"💡 КАК ЭТО РАБОТАЕТ": "💡 HOW IT WORKS",
"💤 ОФФЛАЙН-ДОХОД": "💤 OFFLINE INCOME",
"💾 Новая расстановка интерфейса сохранена!": "💾 New interface layout saved!",
"💾 Прогресс успешно сохранён!": "💾 Progress saved!",
"💾 Сохранить игру": "💾 Save game",
"💾 УПРАВЛЕНИЕ ДАННЫМИ": "💾 DATA MANAGEMENT",
"📅 Ежедневная награда": "📅 Daily reward",
"📅 Ежедневная награда готова!": "📅 Daily reward is ready!",
"📅 Ежедневно": "📅 Daily",
"📅 Ежедневные": "📅 Daily",
"📅 НАГРАДА ЗА ВХОД": "📅 LOGIN REWARD",
"📅 Сбросить награду за вход": "📅 Reset login reward",
"📈 Биржа": "📈 Market",
"📈 Биржа (Бизнес → Биржа)": "📈 Market (Business → Market)",
"📈 Биржа откроется, когда вы купите хотя бы одну": "📈 The market opens when you buy at least one",
"📊 ИМПЕРСКАЯ СТАТИСТИКА": "📊 IMPERIAL STATISTICS",
"📌 Добавить": "📌 Add",
"📌 Ярлык добавлен! Теперь игру легко найти.": "📌 Shortcut added! Now the game is easy to find.",
"📜 Задания": "📜 Quests",
"📦 Склад заполнен! Больше складов — больше Городских бирж.": "📦 Storage is full! More City Exchanges — more storage.",
"🔄 Раскладка кнопок сброшена к исходной!": "🔄 Button layout reset to default!",
"🔊 ЗВУК И МУЗЫКА": "🔊 SOUND & MUSIC",
"🔐 ВЗЛОМ СЕЙФА": "🔐 SAFE CRACKING",
"🔐 Сейф": "🔐 Safe",
"🔒 В процессе": "🔒 In progress",
"🔒 ЗАБЛОКИРОВАНО": "🔒 LOCKED",
"🔒 Заблокировано": "🔒 Locked",
"🔒 Замок 1": "🔒 Lock 1",
"🔒 Замок 2": "🔒 Lock 2",
"🔒 Замок 3": "🔒 Lock 3",
"🔒 Сначала изучите предшествующие созвездия": "🔒 Study the previous constellations first",
"🔒 Условия не выполнены": "🔒 Conditions not met",
"🔗 Синергии": "🔗 Synergies",
"🔗 Синергии (": "🔗 Synergies (",
"🔥 КОМБО x1": "🔥 COMBO x1",
"🔥 Критических ударов:": "🔥 Critical hits:",
"🔥 Огонь x3": "🔥 Fire x3",
"🔮 Артефакты": "🔮 Artifacts",
"🔮 Астральные Сферы": "🔮 Astral Spheres",
"🔮 АЛЬМАНАХ ВОЛШЕБНИКА": "🔮 WIZARD'S ALMANAC",
"🔮 Альманах": "🔮 Almanac",
"🔮 Альманах и Астральные Сферы": "🔮 Almanac and Astral Spheres",
"🔮 Открыть Карту Небесного Древа": "🔮 Open the Heavenly Tree map",
"🔮 СДЕЛКА ВЕКА": "🔮 DEAL OF THE CENTURY",
"🔮 СЛУЧАЙНОЕ СОБЫТИЕ": "🔮 RANDOM EVENT",
"🕸️ Магический Сачок поймал комету за вас!": "🕸️ The Magic Net caught a comet for you!",
"🕺 ДИСКО-РЕЖИМ АКТИВИРОВАН! +1,000,000 монет!": "🕺 DISCO MODE ON! +1,000,000 coins!",
"🖥️ ИНТЕРФЕЙС": "🖥️ INTERFACE",
"🗑️ Полный сброс": "🗑️ Full reset",
"🗑️ Сбросить прогресс": "🗑️ Reset progress",
"🗓️ Еженедельно": "🗓️ Weekly",
"🗓️ Еженедельные": "🗓️ Weekly",
"🗓️ СЕЗОНЫ": "🗓️ SEASONS",
"🚀 Общий множитель:": "🚀 Total multiplier:",
"🚫 Без сезона": "🚫 No season",
"🛒 МАГАЗИН": "🛒 SHOP",
"🛒 Магазин": "🛒 Shop",
"🛒 Открой вкладку «Клик» внизу": "🛒 Open the «Tap» tab below",
"🛒 Получить больше 💎": "🛒 Get more 💎",
"🛠 Тестовая панель": "🛠 Test panel",
"🛠 Тестовая покупка без оплаты": "🛠 Test purchase without payment",
"🤖 Дрон перехватил комету!": "🤖 The drone intercepted a comet!",
"🤖 Дрон перехватил сокровище!": "🤖 The drone intercepted a treasure!",
"🧙 Торговец": "🧙 Merchant",
"🧙‍♂️ Прибыл Таинственный Торговец!": "🧙‍♂️ A Mysterious Merchant has arrived!",
"🧙‍♂️ Торговец ушёл...": "🧙‍♂️ The merchant left...",
"🔴 БЕЗУМИЕ x555!": "🔴 FRENZY x555!",
"🔴 БАГРОВОЕ ЗАТМЕНИЕ: БЕЗУМИЕ x555 на 6 секунд!": "🔴 CRIMSON ECLIPSE: FRENZY x555 for 6 seconds!",
"🪙 Заработано всего:": "🪙 Total earned:",
"🪙 По Заработку": "🪙 By Earnings",
"КОМБО": "COMBO",
"ОГОНЬ": "FIRE",
"монет": "coins",
"монеты": "coins",
"монета": "coin",
"сек": "sec",
"мин": "min",
"ур": "lvl",
"Огонь": "Fire",
"Бизнес": "Business",
"Клик": "Tap",
"Путь": "Path",
"Задания": "Quests",
"Питомцы": "Pets",
"Скины": "Skins",
"Артефакты": "Artifacts",
"Вознесение": "Ascension",
"Достижения": "Achievements",
"Предприятия": "Businesses",
"Синергии": "Synergies",
"Альманах": "Almanac",
"кристаллов": "crystals",
"шт": "pcs",
"День": "Day",
"из": "of",
"Язык / Language": "Language / Язык", "с": "s", "ч": "h", "🏆 Рейтинг игроков работает внутри Яндекс Игр — там вы увидите настоящих игроков и своё место среди них.": "🏆 The player leaderboard works inside Yandex Games — there you'll see real players and your place among them.", "Загрузка рейтинга...": "Loading the leaderboard...", "Пока в рейтинге никого нет — станьте первым!": "No one is on the leaderboard yet — be the first!", "Не удалось загрузить рейтинг. Чтобы попасть в рейтинг, войдите в аккаунт Яндекса.": "Couldn't load the leaderboard. Sign in to your Yandex account to join it.", "Игрок": "Player", "Вы": "You", "(вы)": "(you)", "Лавка Императора": "Emperor's Shop", "Поддержите империю и ускорьте её рост": "Support the empire and speed up its growth", "Магазин": "Shop", "ХИТ": "HIT", "КУПЛЕНО": "OWNED", "x2 на 1 час": "x2 for 1 hour", "Можно купить один раз": "One-time purchase", "Реклама между этапами отключена. Видео за награды — по желанию.": "Ads between stages are off. Rewarded videos are optional.", "💎 Кристаллы": "💎 Crystals", "ПОПУЛЯРНОЕ": "POPULAR", "МАКСИМУМ": "MAXIMUM", "Покупки привязаны к аккаунту Яндекса и восстанавливаются сами на любом устройстве.": "Purchases are linked to your Yandex account and restore automatically on any device.", "✓ Куплено": "✓ Owned", "Купите 1, 50, 100, 150 и 200 уровней каждого здания. Здесь видны полученные и ближайшие цели.": "Buy 1, 50, 100, 150 and 200 levels of each building. Unlocked and next goals are shown here."
};
    const EN_PATTERNS = [
["+{0}% ко всему доходу и +{1}% к дарам комет",
"+{0}% to all income and +{1}% to comet gifts"
],
["Эффект тапа: {0}",
"Tap effect: {0}"
],
["☁️ Облако VK: сохранено в {0}",
"☁️ VK cloud: saved at {0}"
],
["⏩ Ускорение времени: +{0} 🪙",
"⏩ Time Warp: +{0} 🪙"
],
["Нужно {0} 💎 — у вас {1} 💎",
"Need {0} 💎 — you have {1} 💎"
],
["Каждые {0} с приносит клад: {1} с дохода",
"Every {0} s brings treasure: {1} s of income"
],
["шанс {0}% на кристалл",
"{0}% chance of a crystal"
],
[
"{0} тапов в секунду по монете ({1}% силы тапа)",
"{0} taps per second on the coin ({1}% of tap power)"
],
[
"⏱ Работает ещё {0} (за рекламу)",
"⏱ Running for {0} more (from an ad)"
],
[
"🔒 Навсегда — после {0}-го вознесения (сейчас {1}/{2}) или с премиум-пропуском",
"🔒 Forever — after ascension #{0} (now {1}/{2}) or with the premium pass"
],
[
"Продлить на {0} мин",
"Extend by {0} min"
],
[
"Включить на {0} мин за рекламу",
"Turn on for {0} min with an ad"
],
[
"🤖 Автокликер — включено на {0} мин!",
"🤖 Auto-clicker — on for {0} min!"
],
[
"🛒 Авто-покупка — включено на {0} мин!",
"🛒 Auto-buy — on for {0} min!"
],
[
"Посмотрите короткое видео — сундук откроется сразу. {0} сундука в день.",
"Watch a short video and the chest opens right away. {0} chests a day."
],
[
"Каждый {0}-й сундук — гарантированно эпический или лучше (осталось: {1}).",
"Every {0}th chest is guaranteed epic or better ({1} to go)."
],
[
"выпало: {0}",
"dropped: {0}"
],
[
"{0} мин дохода + {1}",
"{0} min of income + {1}"
],
[
"{0} ч дохода + {1}",
"{0} h of income + {1}"
],
[
"▶ Открыть за рекламу ({0}/{1})",
"▶ Open with an ad ({0}/{1})"
],
[
"Сундук за рекламу · {0}/{1}",
"Ad chest · {0}/{1}"
],
[
"Новая тема через {0}",
"New theme in {0}"
],
[
"у каждого сезона пропуска свой эксклюзив — сейчас «{0}»",
"every pass season has its own exclusive — now «{0}»"
],
[
"Вернётся в сезоне «{0}»",
"Returns in the «{0}» season"
],
[
"Находки сезона «{0}»: {1}/{2}",
"Season «{0}» finds: {1}/{2}"
],
[
"Купить за 💎 {0}",
"Buy for 💎 {0}"
],
[
"Соберите все находки сезона ({0})",
"Collect all the season's finds ({0})"
],
[
"🎨 Все находки сезона собраны — облик «{0}» ваш!",
"🎨 All season finds collected — the «{0}» look is yours!"
],
[
"облик монеты «{0}»!",
"coin look «{0}»!"
],
[
"Эксклюзивные Грифон и облик «{0}», короны при тапе, монумент в городе, шкатулка каждый день и +10% к доходу. Нажмите, чтобы посмотреть.",
"Exclusive Griffin and the «{0}» look, crowns on tap, a monument in the city, a daily box and +10% income. Tap to take a look."
],
[
"🥚 {0} готов к эволюции! Откройте вкладку «Питомцы»",
"🥚 {0} is ready to evolve! Open the «Pets» tab"
],
[
"🍖 {0} угощён! +{1} роста",
"🍖 {0} got a treat! +{1} growth"
],
[
"{0} — {1}!",
"{0} — {1}!"
],
[
"+{0}% ко всему доходу (было +{1}%)",
"+{0}% to all income (was +{1}%)"
],
[
"Следующая стадия — «Легендарный»: {0} роста и максимальный уровень",
"Next stage — «Legendary»: {0} growth and max level"
],
[
"+{0}% ко всему доходу · высшая стадия",
"+{0}% to all income · top stage"
],
[
"→ {0}: +{1}% ко всему доходу",
"→ {0}: +{1}% to all income"
],
[
"Рост {0} / {1} · нужен ур. {2}",
"Growth {0} / {1} · needs lvl {2}"
],
[
"Рост {0} / {1}",
"Growth {0} / {1}"
],
[
"🍖 Угостить ({0}/{1}): {2}",
"🍖 Treat ({0}/{1}): {2}"
],
[
"🍖 Угостить ({0}/{1}):",
"🍖 Treat ({0}/{1}):"
],
[
"Нужно {0} Эфира",
"Need {0} Aether"
],
[
"✴ {0} — ур. {1}!",
"✴ {0} — lvl {1}!"
],
[
"✴ {0}!",
"✴ {0}!"
],
[
"Пройдено: {0} · весь доход ×{1}",
"Completed: {0} · all income ×{1}"
],
[
"После {0} вознесений можно выйти за пределы Астрала: уровень вознесения и звёзды сбрасываются, Небесное Древо остаётся. За это вы получаете Эфир для Древа Трансцендентности и навсегда +50% ко всему доходу.",
"After {0} ascensions you can go beyond the Astral: your ascension level and stars reset, the Heavenly Tree stays. In return you get Aether for the Transcendence Tree and a permanent +50% to all income."
],
[
"Вознесений: {0} / {1}",
"Ascensions: {0} / {1}"
],
[
"✴ Трансцендировать (+{0} Эфира)",
"✴ Transcend (+{0} Aether)"
],
[
"Вы получите +{0} Эфира и навсегда +50% ко всему доходу.",
"You will get +{0} Aether and a permanent +50% to all income."
],
[
"Сбросится: уровень вознесения ({0} → {1}), неистраченные звёзды и текущий забег",
"Resets: ascension level ({0} → {1}), unspent stars and the current run"
],
[
"+{0} Эфира · весь доход ×{1}",
"+{0} Aether · all income ×{1}"
],
[
"{0} Эфира",
"{0} Aether"
],
[
"Трансцендентностей: {0} · доход ×{1}",
"Transcendences: {0} · income ×{1}"
],
[
"ур. {0}/{1}",
"lvl {0}/{1}"
],
[
"🔒 Сначала откройте: {0}",
"🔒 Unlock first: {0}"
],
[
"🔒 Сначала откройте любое из: {0}",
"🔒 Unlock any of: {0}"
],
[
"Открыть · {0}",
"Unlock · {0}"
],
[
"Открыть ·",
"Unlock ·"
],
[
"Финиш! Монет: {0} · щитов: {1}",
"Finish! Coins: {0} · shields: {1}"
],
[
"Дрон разбит, но монет собрано: {0}",
"Drone crashed, but coins collected: {0}"
],
[
"Сервер взломан! Осталось {0} с",
"Server hacked! {0} s left"
],
[
"Ток дошёл до {0}% пути",
"The current reached {0}% of the way"
],
[
"после {0}-го вознесения",
"after ascension #{0}"
],
[
"🔒 Откроется после {0}-го вознесения",
"🔒 Unlocks after ascension #{0}"
],
[
"Район {0}-го уровня · +{1}% к доходу его зданий",
"District level {0} · +{1}% income from its buildings"
],
[
"⚡ Район освобождён от спрута: доход его зданий ×2 ещё {0}",
"⚡ District freed from the octopus: its buildings earn ×2 for {0} more"
],
[
"{0} / {1} ур. зданий",
"{0} / {1} building levels"
],
[
"{0} ур. зданий",
"{0} building levels"
],
[
"Следующий уровень района: +{0} 💎 и ещё +5% к доходу его зданий",
"Next district level: +{0} 💎 and another +5% income from its buildings"
],
[
"🎩 Мэр района · ур. {0}/{1}",
"🎩 District mayor · lvl {0}/{1}"
],
[
"сейчас +{0}%",
"now +{0}%"
],
[
"· сейчас +{0}%",
"· now +{0}%"
],
[
"Назначить мэра · {0}",
"Appoint a mayor · {0}"
],
[
"Повысить · {0}",
"Upgrade · {0}"
],
[
"Купите {0} уровней зданий этого района",
"Buy {0} building levels in this district"
],
[
"Забрать: 20 мин дохода и 3 {0}",
"Claim: 20 min of income and 3 {0}"
],
[
"Забрать: 20 мин дохода и 3",
"Claim: 20 min of income and 3"
],
[
"Сегодня задание в районе «{0}»",
"Today's task is in «{0}»"
],
[
"Перейти в «{0}»",
"Go to «{0}»"
],
[
"🚀 Космопорт · откроется после {0}-го вознесения",
"🚀 Spaceport · unlocks after ascension #{0}"
],
[
"🔒 «{0}» откроется после {1}-го вознесения (район Космопорт)",
"🔒 «{0}» unlocks after ascension #{1} (Spaceport district)"
],
[
"🏙️ {0}: район {1}-го уровня! +{2} 💎 и +{3}% к доходу его зданий",
"🏙️ {0}: district level {1}! +{2} 💎 and +{3}% income from its buildings"
],
[
"🏙️ Задание района «{0}» выполнено! Заберите награду — нажмите на название района",
"🏙️ District task «{0}» complete! Tap the district name to claim the reward"
],
[
"Задание района: +{0} 🪙 и +3 💎",
"District task: +{0} 🪙 and +3 💎"
],
[
"Нужно {0} 💎",
"Need {0} 💎"
],
[
"🎩 Мэр района «{0}» — уровень {1}!",
"🎩 Mayor of «{0}» — level {1}!"
],
[
"⚡ Район «{0}» освобождён: доход его зданий ×2 на час!",
"⚡ «{0}» is freed: its buildings earn ×2 for an hour!"
],
[
"Правило дня · {0}",
"Rule of the day · {0}"
],
[
"Примите правило и выполните Испытание дня: {0}",
"Accept the rule and complete the Daily Challenge: {0}"
],
[
"Действует до полуночи. За Испытание дня: {0}",
"Active until midnight. For the Daily Challenge: {0}"
],
[
"Награда за победу ×2 и +1 {0}. Победите его {1} раза за неделю — получите трофей.",
"Victory reward ×2 and +1 {0}. Defeat it {1} times this week to get a trophy."
],
[
"Награда за победу ×2 и +1",
"Victory reward ×2 and +1"
],
[
". Победите его {0} раза за неделю — получите трофей.",
". Defeat it {0} times this week to get a trophy."
],
[
"Готово ✓ Новый — в понедельник",
"Done ✓ New one on Monday"
],
[
"Новый — в понедельник",
"New one on Monday"
],
[
"Босса можно вызвать через {0}",
"The boss can be summoned in {0}"
],
[
"Файрвол {0} / {1}",
"Firewall {0} / {1}"
],
[
"Ваш ход: повторите код ({0})",
"Your turn: repeat the code ({0})"
],
[
"КРИТ −{0}",
"CRIT −{0}"
],
[
"Освобождено! −{0}",
"Freed! −{0}"
],
[
"День {0} из {1}",
"Day {0} of {1}"
],
[
"До большого сундука: {0} дн.",
"Until the big chest: {0} d."
],
[
"{0} ч",
"{0} h"
],
[
"x2 {0} ч",
"x2 {0} h"
],
[
"x2 {0} мин",
"x2 {0} min"
],
[
"🪙 {0} ч",
"🪙 {0} h"
],
[
"🪙 {0} мин",
"🪙 {0} min"
],
[
"{0} ч дохода",
"{0} h of income"
],
[
"📜 Правило дня «{0}» принято до полуночи. Выполните Испытание дня — и получите {1}!",
"📜 Rule of the day «{0}» accepted until midnight. Complete the Daily Challenge to get {1}!"
],
[
"Испытание дня: +{0} 🪙 и +{1} 💎 · за правило дня {2}",
"Daily Challenge: +{0} 🪙 and +{1} 💎 · for the rule of the day {2}"
],
[
"🏦 Казна заполнилась до краёв (копится не больше {0} ч) — заглядывайте чаще или улучшите офлайн-доход в Небесном Древе",
"🏦 The treasury is full to the brim (it holds up to {0} h) — visit more often or upgrade offline income in the Heavenly Tree"
],
[
"Экспедиция вернулась с добычей ({0}) — заберите в «Экспедициях»",
"An expedition returned with loot ({0}) — claim it in «Expeditions»"
],
[
"Экспедиция вернулась с добычей — заберите в «Экспедициях»",
"An expedition returned with loot — claim it in «Expeditions»"
],
[
"В Имперском пропуске ждут награды: {0}",
"Rewards are waiting in the Imperial Pass: {0}"
],
[
"Над городом кружит босс — {0}! Он появится, как только заберёте доход",
"A boss is circling over the city — {0}! It will appear as soon as you collect your income"
],
[
"📜 Новое правило дня: «{0}» — загляните в «Задания»",
"📜 New rule of the day: «{0}» — check «Quests»"
],
[
"Награда за {0}-й день: {1}",
"Day {0} reward: {1}"
],
[
"+{0} 💎 +{1} 🔮 +{2} 🌟",
"+{0} 💎 +{1} 🔮 +{2} 🌟"
],
[
"+{0} 💎 и +{1} 🔮 и +{2} 🌟",
"+{0} 💎 and +{1} 🔮 and +{2} 🌟"
],
[
"+{0}% ко всему доходу и +{1}% к наградам мини-игр",
"+{0}% to all income and +{1}% to mini-game rewards"
],
[
"Разблокируется покупкой «{0}» в «Бизнесе» — здесь построят станцию",
"Unlocks by buying «{0}» in «Business» — a station will be built here"
],
[
"Разблокируется покупкой «{0}» в «Бизнесе» — вокруг Солнца соберут сферу",
"Unlocks by buying «{0}» in «Business» — a sphere will be built around the Sun"
],
[
"Бонусные сундуки ×{0}",
"Bonus chests ×{0}"
],
[
"{0} мин дохода",
"{0} min of income"
],
[
"Каждое Вознесение приносит больше звёзд: +1 небесная звезда за каждый уровень (до +3). Текущий уровень: {0}/3 (+{1} к звёздам за Вознесение).",
"Every Ascension brings more stars: +1 heavenly star per level (up to +3). Current level: {0}/3 (+{1} stars per Ascension)."
],
[
"Сила тапа растёт навсегда: +20% за каждый уровень (до +100%). Текущий уровень: {0}/5 (тап +{1}%).",
"Tap power grows permanently: +20% per level (up to +100%). Current level: {0}/5 (tap +{1}%)."
],
[
"Предприятия дешевле на 3% за каждый уровень (до −15%). Текущий уровень: {0}/5 (цены −{1}%).",
"Businesses are 3% cheaper per level (up to −15%). Current level: {0}/5 (prices −{1}%)."
],
[
"Доход предприятий +10% за каждый уровень навсегда (до +50%). Текущий уровень: {0}/5 (предприятия +{1}%).",
"Business income +10% per level permanently (up to +50%). Current level: {0}/5 (businesses +{1}%)."
],
[
"Текущий уровень: {0}/3 (+{1} к звёздам за Вознесение).",
"Current level: {0}/3 (+{1} stars per Ascension)."
],
[
"Текущий уровень: {0}/5 (тап +{1}%).",
"Current level: {0}/5 (tap +{1}%)."
],
[
"Текущий уровень: {0}/5 (цены −{1}%).",
"Current level: {0}/5 (prices −{1}%)."
],
[
"Текущий уровень: {0}/5 (предприятия +{1}%).",
"Current level: {0}/5 (businesses +{1}%)."
],
        ["Подношение через {0} ч {1} мин", "Offering in {0} h {1} min"],
        ["Подношение через {0} ч", "Offering in {0} h"],
        ["Подношение через {0} мин", "Offering in {0} min"],
        ["+{0}% к доходу", "+{0}% income"],
        ["Реактор {0} / {1}", "Reactor {0} / {1}"],
        ["Уровень {0}", "Level {0}"],
        ["Задание пропуска: +{0} очков пропуска", "Pass task: +{0} pass points"],
        ["+{0} очков пропуска", "+{0} pass points"],
        ["Награда — очки пропуска (сверх дневного лимита). Ступень {0} из {1}", "Reward: pass points (beyond the daily limit). Tier {0} of {1}"],
        ["{0} ч · {1}", "{0} h · {1}"],
        ["{0} ч дохода ·", "{0} h of income ·"],
        ["{0} · x{1} к добыче", "{0} · x{1} loot"],
        [", сферы и звёзды. +{0}% к доходу до конца сезона. Награды за пройденные ступени тоже откроются.", ", spheres and stars. +{0}% income until the end of the season. Rewards for tiers you've passed unlock too."],
        ["Броня {0} / {1}", "Armor {0} / {1}"],
        ["Ядро {0} / {1}", "Core {0} / {1}"],
        ["{0} сейчас в экспедиции — вернётся с добычей", "{0} is on an expedition — will return with loot"],
        ["Откроется на ступени {0} (сейчас {1})", "Unlocks at tier {0} (now {1})"],
        ["Эксклюзив премиума · {0}", "Premium exclusive · {0}"],
        ["Открыть премиум · {0}", "Unlock premium · {0}"],
        ["Грифон, облик «Императорский Дракон», короны при тапе, монумент в городе, шкатулка каждый день, ~180 {0}, сферы и звёзды. +{1}% к доходу до конца сезона. Награды за пройденные ступени тоже откроются.", "Griffin, the «Imperial Dragon» skin, tap crowns, a city monument, a daily box, ~180 {0}, spheres and stars. +{1}% income until the end of the season. Rewards for tiers you've passed unlock too."],
        ["{0} отправился: «{1}»", "{0} set off: «{1}»"],
        ["+{0} кристалл(ов)", "+{0} gems"],
        ["+{0} астральн. сфер(ы)", "+{0} astral spheres"],
        ["+{0} небесная звезда — редкая находка!", "+{0} heavenly star — a rare find!"],
        ["{0} вернулся с трофеями!", "{0} is back with trophies!"],
        ["{0} вернулся из экспедиции с добычей!", "{0} returned from an expedition with loot!"],
        ["Походов завершено: {0}", "Expeditions completed: {0}"],
        ["Ярмарка выходных: {0}", "Weekend Fair: {0}"],
        ["{0} д {1} ч", "{0}d {1}h"],
        ["{0} ч дохода", "{0} h of income"],
        ["Идёт сейчас · ещё {0}", "On now · {0} left"],
        ["Начнётся через {0}", "Starts in {0}"],
        ["Через {0}", "In {0}"],
        ["Ярмарка · {0}", "Fair · {0}"],
["Шкатулка дня: +3 💎 и +{0} 🪙", "Daily casket: +3 💎 and +{0} 🪙"],
["{0} и Золотой монумент на площади города", "{0} and a Golden Monument on the city square"],
["В слоте {0}", "In slot {0}"],
["«{0}» уже стоит в Слоте {1} — выберите другое улучшение", "“{0}” is already in Slot {1} — pick another upgrade"],
["+{0} / сек", "+{0} / sec"],
["Замок {0}/3", "Lock {0}/3"],
["Замок {0}", "Lock {0}"],
["Серия {0} · ×2", "Streak {0} · ×2"],
["Серия {0}", "Streak {0}"],
["Корзина полна! Лучшая серия: {0}", "Basket full! Best streak: {0}"],
["Точность {0}% · комбо {1}", "Accuracy {0}% · combo {1}"],
["Слиток треснул — {0}", "The ingot cracked — {0}"],
["Безупречная ковка! {0}", "Flawless forging! {0}"],
["Отличный слиток! {0}", "Excellent ingot! {0}"],
["Слиток выкован. {0}", "Ingot forged. {0}"],
["Сезон {0}: {1}", "Season {0}: {1}"],
["{0} ч {1} мин", "{0}h {1}m"],
["Ступень {0} из {1} · за действия сегодня ещё {2} очков", "Tier {0} of {1} · {2} more points from actions today"],
["Все ступени пройдены! Каждые {0} очков — бонусный сундук · за действия сегодня ещё {1} очков", "All tiers done! Every {0} points — a bonus chest · {1} more points from actions today"],
["Забрать всё ({0})", "Claim all ({0})"],
["Бонусный сундук готов ({0})", "Bonus chest ready ({0})"],
["x2 {0} мин", "x2 {0} min"],
["Имперский пропуск: ступень {0}! Заберите награду", "Imperial Pass: tier {0}! Claim your reward"],
["Имперский пропуск: получено наград — {0}", "Imperial Pass: {0} rewards claimed"],
["Имперский пропуск: {0}", "Imperial Pass: {0}"],
["Бонусный сундук пропуска: {0}", "Pass bonus chest: {0}"],
["Премиум-пропуск {0} активен! +10% ко всему доходу до конца сезона", "Premium Pass {0} is active! +10% to all income until the season ends"],
["Награды прошлого сезона пропуска выданы: {0} шт.", "Last season's pass rewards granted: {0}"],
["x2 к доходу на {0} мин", "x2 income for {0} min"],
["Имперский пропуск · сезон {0}", "Imperial Pass · season {0}"],
["Поймано {0} из {1} — монеты раскатились по площади", "Caught {0} of {1} — the coins rolled across the square"],
["Поймано {0} из {1}", "Caught {0} of {1}"],
["Созвездие собрано! Осталось {0} с", "Constellation complete! {0}s left"],
["Соединено звёзд: {0} из {1}", "Stars connected: {0} of {1}"],
["+{0} 💎 и +{1} 🔮", "+{0} 💎 and +{1} 🔮"],
["x2 к доходу на {0} минут", "x2 income for {0} minutes"],
["Недостаточно звёзд ({0} / {1} ", "Not enough stars ({0} / {1} "],
["Недостаточно звёзд ({0} / {1}", "Not enough stars ({0} / {1}"],
["Испытание дня: +{0} 🪙 и +{1} 💎", "Daily challenge: +{0} 🪙 and +{1} 💎"],
["+{0} 💎 за испытание дня", "+{0} 💎 per daily challenge"],
["Монетки города +{0}%, чаще на {1}%", "City coins +{0}%, {1}% more often"],
["+{0}% ко всему доходу, монетки города x2 чаще и +{1}%", "+{0}% to all income, city coins x2 as often and +{1}%"],
["Сезон «{0}»", "Season «{0}»"],
["Бонус альбома: +{0}% ко всему доходу · вклеено {1}/{2}", "Album bonus: +{0}% to all income · pasted {1}/{2}"],
["Вклеено ✓ +{0}%", "Pasted ✓ +{0}%"],
["Вклеить: +{0}% к доходу", "Paste in: +{0}% income"],
["Собрано {0}/{1} · награда +{2}%", "Collected {0}/{1} · reward +{2}%"],
["Набор «{0}» вклеен в альбом! +{1}% ко всему доходу навсегда", "Set «{0}» pasted into the album! +{1}% to all income forever"],
["Питомец «{0}» возвышен до {1}! +{2}% ко всему доходу", "Pet «{0}» ascended to {1}! +{2}% to all income"],
["Возвысить {0}:", "Ascend {0}:"],
["{0} · возвышение +{1}% ко всему доходу", "{0} · ascension +{1}% to all income"],
["Испытание дня: +{0}", "Daily challenge: +{0}"],
["Награда за {0}-й день: {1}", "Day {0} reward: {1}"],
["🛰️ Над городом появилось: {0}!", "🛰️ Now above the city: {0}!"],
["Расширение на {0} ур. (ещё {1})", "Expansion at lvl {0} ({1} to go)"],
["🏙️ {0} · {1}/{2}", "🏙️ {0} · {1}/{2}"],
["Стройка: {0}", "Under construction: {0}"],
["{0} · ур. {1}", "{0} · lvl {1}"],
["Новый этаж на {0} ур. (ещё {1})", "New floor at lvl {0} ({1} to go)"],
["🏗️ В городе построено: {0}!", "🏗️ New in the city: {0}!"],
["Кого поставить в слот {0}? (стоит 1", "Which keeper goes in slot {0}? (costs 1"],
["Питомец \"{0}\" улучшен до ур. {1}!", "Pet \"{0}\" upgraded to lvl {1}!"],
["Приобретён питомец \"{0}\"!", "Pet \"{0}\" acquired!"],
["Открыто достижение: {0}! +1% к доходу (Слава Империи)", "Achievement unlocked: {0}! +1% income (Empire Glory)"],
["Открыто достижение: {0}! Заберите +{1} 💎 во вкладке!", "Achievement unlocked: {0}! Claim +{1} 💎 in the tab!"],
["Питомец \"{0}\" выбран спутником!", "Pet \"{0}\" chosen as companion!"],
["Награда получена: +{0} 🪙 и +{1} 💎 и +{2} 🔮 Сфера!", "Reward received: +{0} 🪙, +{1} 💎 and +{2} 🔮 Sphere!"],
["Награда получена: +{0} 🪙 и +{1} 🔮 Сфера!", "Reward received: +{0} 🪙 and +{1} 🔮 Sphere!"],
["Награда получена: +{0} 🪙 и +{1} 💎!", "Reward received: +{0} 🪙 and +{1} 💎!"],
["Награда получена: +{0} 🪙!", "Reward received: +{0} 🪙!"],
["🎯 Можно вознестись: +{0}", "🎯 You can ascend: +{0}"],
["Можно вознестись: +{0}", "You can ascend: +{0}"],
["Улучшить до уровня {0}", "Upgrade to level {0}"],
["(ур. {0}/{1})", "(lvl {0}/{1})"],
["📜 Указ «{0}» подписан: «{1}»", "📜 Decree «{0}» signed: «{1}»"],
["({0}м)", "({0}m)"],
["({0}с)", "({0}s)"],
["Указ: {0}", "Decree: {0}"],
["✨ Получилось! +{0} 🪙", "✨ It worked! +{0} 🪙"],
["🎉 Джекпот! +{0} 🪙", "🎉 Jackpot! +{0} 🪙"],
["💨 Пшик. Алхимик сбежал с {0} 🪙", "💨 Fizzle. The alchemist ran off with {0} 🪙"],
["📜 Указ «{0}» подписан: {1}", "📜 Decree «{0}» signed: {1}"],
["{0} Советник докладывает:", "{0} The advisor reports:"],
["{0} Ваш нрав:", "{0} Your temper:"],
["· указов подписано: {0}", "· decrees signed: {0}"],
["❤️ {0}", "❤️ {0}"],
["{0}% × {1} (Небесная Гармония)", "{0}% × {1} (Heavenly Harmony)"],
["Кот-Банкир +{0}% за каждое", "Banker Cat +{0}% each"],
["Небесные Котята ×{0}", "Heavenly Kittens ×{0}"],
["Хранитель Славы ×{0}", "Keeper of Glory ×{0}"],
["🔥 Комбо {0}", "🔥 Combo {0}"],
["⏳ Перезарядка ({0}с)", "⏳ Cooldown ({0}s)"],
["🔥 Огонь x3 ({0}с)", "🔥 Fire x3 ({0}s)"],
["🔓 Открыто разделов: {0} — {1}", "🔓 Sections unlocked: {0} — {1}"],
["−{0}с", "−{0}s"],
["Светящиеся {0} — шанс на сезонную находку! (", "Glowing {0} — a chance of a seasonal find! ("],
["Доход предприятий +{0}%", "Business income +{0}%"],
["Доход предприятий −{0}%", "Business income −{0}%"],
["Тап −{0}%", "Tap −{0}%"],
["Сила тапа +{0}%", "Tap power +{0}%"],
["Кометы прилетают на {0}% чаще", "Comets arrive {0}% more often"],
["Предприятия дешевле на {0}%", "Businesses are {0}% cheaper"],
["С 18:00 до 06:00 доход +{0}%", "From 18:00 to 06:00 income +{0}%"],
["Днём доход −{0}%", "Daytime income −{0}%"],
["Слава Империи сильнее на {0}%", "Empire Glory is {0}% stronger"],
["· +1 через {0}", "· +1 in {0}"],
["Кого поставить в слот {0}? (стоит 1 ⚜️)", "Which keeper goes in slot {0}? (costs 1 ⚜️)"],
["🏛️ {0} занял слот {1}", "🏛️ {0} took slot {1}"],
["{0} Идёт испытание «{1}»", "{0} Challenge in progress: «{1}»"],
["Цель: заработать {0} монет за забег ({1}%) · осталось {2}", "Goal: earn {0} coins this run ({1}%) · {2} left"],
["Цель: заработать {0} монет за забег ({1}%)", "Goal: earn {0} coins this run ({1}%)"],
["🏅 {0}", "🏅 {0}"],
["⚔️ Испытание «{0}» пройдено! {1}", "⚔️ Challenge «{0}» completed! {1}"],
["⚔️ Испытание «{0}» пройдено снова!", "⚔️ Challenge «{0}» completed again!"],
["⚔️ Испытание «{0}» началось! {1}", "⚔️ Challenge «{0}» has begun! {1}"],
["⌛ Испытание «{0}» провалено: время вышло. Ограничения сняты.", "⌛ Challenge «{0}» failed: time ran out. Restrictions lifted."],
["🏳️ Вы отказались от испытания «{0}». Ограничения сняты.", "🏳️ You gave up the challenge «{0}». Restrictions lifted."],
["Найдено пар: {0} из {1}", "Pairs found: {0} of {1}"],
["🎉 {0} (+{1} монет, +{2} 💎)", "🎉 {0} (+{1} coins, +{2} 💎)"],
["🎉 {0} (+{1} монет)", "🎉 {0} (+{1} coins)"],
["❌ {0}", "❌ {0}"],
["🎃 ТЫКВЕННАЯ НОЧЬ! {0}", "🎃 PUMPKIN NIGHT! {0}"],
["🎁 СНЕГОПАД ПОДАРКОВ! {0}", "🎁 GIFT SNOWFALL! {0}"],
["💘 ДОЖДЬ ИЗ СЕРДЕЦ! {0}", "💘 RAIN OF HEARTS! {0}"],
["🥚 ОХОТА ЗА ЯЙЦАМИ! {0}", "🥚 EGG HUNT! {0}"],
["🐚 ЗВЕЗДОПАД НАД МОРЕМ! {0}", "🐚 STARFALL OVER THE SEA! {0}"],
["{0} {1} закончилась!", "{0} {1} is over!"],
["{0} {1} закончился!", "{0} {1} is over!"],
["✉️ Письмо от: {0}", "✉️ Letter from: {0}"],
["🏢 Теперь хватит на «{0}» (ур. {1})", "🏢 Now you can afford «{0}» (lvl {1})"],
["🏢 Теперь хватит на «{0}» — новое предприятие!", "🏢 Now you can afford «{0}» — a new business!"],
["☄️ Мимо пролетело комет: ~{0}. Ловите их, пока вы в игре!", "☄️ Comets that flew by: ~{0}. Catch them while you're in the game!"],
["📅 Ждёт награда за вход — день {0}", "📅 Login reward is waiting — day {0}"],
["🎯 {0} · {1}", "🎯 {0} · {1}"],
["🎯 {0}", "🎯 {0}"],
["Дальше: {0}", "Next: {0}"],
["Вознесение ур. {0}", "Ascension lvl {0}"],
["Можно вознестись: +{0} 🌌", "You can ascend: +{0} 🌌"],
["Испытание «{0}»", "Challenge «{0}»"],
["~{0} сек", "~{0} sec"],
["~{0} ч {1} мин", "~{0} h {1} min"],
["~{0} д", "~{0} d"],
["ещё {0} 🪙", "{0} 🪙 to go"],
["Предприятия +{0}% за каждый уровень любого предприятия (сейчас {1} → +{2}%)", "Businesses +{0}% for every level of any business (now {1} → +{2}%)"],
["Тап +{0}% за каждый уровень любого предприятия (сейчас {1} → +{2}%)", "Tap +{0}% for every level of any business (now {1} → +{2}%)"],
["🔥 КРИТ x{0}! +{1} 🪙", "🔥 CRIT x{0}! +{1} 🪙"],
["📅 Монеты, заработанные с понедельника. Новая неделя через {0} д {1} ч", "📅 Coins earned since Monday. New week in {0}d {1}h"],
["📅 Монеты, заработанные с понедельника. Новая неделя через {0} ч", "📅 Coins earned since Monday. New week in {0}h"],
["🌌 ИТОГИ ЗАБЕГА №{0}", "🌌 RUN #{0} SUMMARY"],
["≈ {0} звёзд в час · прошлый забег: {1}, +{2} 🌌", "≈ {0} stars per hour · last run: {1}, +{2} 🌌"],
["≈ {0} звёзд в час", "≈ {0} stars per hour"],
["прошлый забег: {0}, +{1} 🌌", "last run: {0}, +{1} 🌌"],
["Престиж: ур. {0} →", "Prestige: lvl {0} →"],
["(+{0}% ко всему доходу навсегда)", "(+{0}% to all income forever)"],
["{0} д {1} ч", "{0}d {1}h"],
["{0} / сек", "{0} / sec"],
["🎉 Награда получена: +{0} 🪙 и +{1} 💎 и +{2} 🔮 Сфера!", "🎉 Reward received: +{0} 🪙, +{1} 💎 and +{2} 🔮 Sphere!"],
["🎉 Награда получена: +{0} 🪙 и +{1} 🔮 Сфера!", "🎉 Reward received: +{0} 🪙 and +{1} 🔮 Sphere!"],
["🎉 Награда получена: +{0} 🪙 и +{1} 💎!", "🎉 Reward received: +{0} 🪙 and +{1} 💎!"],
["🎉 Награда получена: +{0} 🪙!", "🎉 Reward received: +{0} 🪙!"],
["⬆ {0}: {1}!", "⬆ {0}: {1}!"],
["{0} (вы)", "{0} (you)"],
["🎬 {0}БУСТ x2: +{1} МИН!", "🎬 {0}x2 BOOST: +{1} MIN!"],
["🏆 Общие · {0} из {1}", "🏆 General · {0} of {1}"],
["🏢 За предприятия · {0} из {1}", "🏢 Businesses · {0} of {1}"],
[
"+{0} / с",
"+{0} / s"
],
[
"+{0} / сек",
"+{0} / sec"
],
[
"+{0} к тапу",
"+{0} per tap"
],
[
"+{0}% за кристалл",
"+{0}% per crystal"
],
[
"+{0}% к автодоходу",
"+{0}% passive income"
],
[
"+{0}% к длительности «Огня»",
"+{0}% «Fire» duration"
],
[
"+{0}% к доходу (ур. {1})",
"+{0}% income (lvl {1})"
],
[
"+{0}% к наградам заданий и колеса",
"+{0}% to quest and wheel rewards"
],
[
"+{0}% к пассивному доходу и +{1}% Славы за каждое достижение",
"+{0}% passive income and +{1}% Glory per achievement"
],
[
"+{0}% к силе клика",
"+{0}% tap power"
],
[
"+{0}% крит (x{1})",
"+{0}% crit (x{1})"
],
[
"+{0}% шанс крита и +x{1} множитель",
"+{0}% crit chance and +x{1} multiplier"
],
[
"-{0}% к ценам улучшений",
"-{0}% upgrade prices"
],
[
"x2 ({0}с)",
"x2 ({0}s)"
],
[
"x2 к доходу на {0} минут",
"x2 income for {0} minutes"
],
[
"x2 на {0} ур. ({1} ост.)",
"x2 at lvl {0} ({1} left)"
],
[
"x{0} (закалки)",
"x{0} (temperings)"
],
[
"{0} (ур. {1})",
"{0} (lvl {1})"
],
[
"{0} Сезонная находка: {1} {2}! +1% ко всему доходу навсегда",
"{0} Seasonal find: {1} {2}! +1% to all income forever"
],
[
"{0} из {1}",
"{0} of {1}"
],
[
"{0} мин",
"{0} min"
],
[
"{0} мин {1} сек",
"{0} min {1} sec"
],
[
"{0} сек",
"{0} sec"
],
[
"{0} ч {1} мин",
"{0} h {1} min"
],
[
"{0} — Бонус: {1}",
"{0} — Bonus: {1}"
],
[
"{0} 🌌 (ур. {1}/{2})",
"{0} 🌌 (lvl {1}/{2})"
],
[
"{0}/{1} ур.",
"{0}/{1} lvl"
],
[
"{0}д {1}ч",
"{0}d {1}h"
],
[
"{0}с",
"{0}s"
],
[
"{0}ч {1}м",
"{0}h {1}m"
],
[
"~{0} мин",
"~{0} min"
],
[
"«{0}» закреплено в Слот {1}! Будет бесплатно выдаваться при старте.",
"«{0}» pinned to Slot {1}! It will be granted for free at the start."
],
[
"· 1$ = {0} 🪙 (1 сек дохода)",
"· $1 = {0} 🪙 (1 sec of income)"
],
[
"· склад до {0} ед. каждого товара · в портфеле ${1} ≈ {2} 🪙",
"· storage up to {0} units of each good · portfolio ${1} ≈ {2} 🪙"
],
[
"Авто-тап {0} раза в сек (100% клика)",
"Auto-tap {0} times per sec (100% of tap)"
],
[
"Активировать (🪙 {0})",
"Activate (🪙 {0})"
],
[
"Астральный уровень: +5% к добыче здания за уровень навсегда (сохраняется при Вознесении). Следующий уровень стоит {0} 🔮",
"Astral level: +5% to this building's income per level forever (kept after Ascension). Next level costs {0} 🔮"
],
[
"Бесплатно раз в {0} мин",
"Free every {0} min"
],
[
"Бесплатно через: {0}:{1}",
"Free in: {0}:{1}"
],
[
"ВСЕ ЗАКАЛКИ (x{0})",
"ALL TEMPERINGS (x{0})"
],
[
"Вы выиграли +{0} монет! ({1})",
"You won +{0} coins! ({1})"
],
[
"Вы получили +{0} 💎 Кристалла Престижа!",
"You received +{0} 💎 Prestige Crystals!"
],
[
"День {0}",
"Day {0}"
],
[
"Для вознесения ур. {0}: {1} / {2} монет ({3}%)",
"For ascension lvl {0}: {1} / {2} coins ({3}%)"
],
[
"Для первого Вознесения необходимо заработать минимум {0} монет!",
"You need to earn at least {0} coins for the first Ascension!"
],
[
"Для следующего Вознесения нужно {0} монет (ещё {1})!",
"The next Ascension requires {0} coins ({1} more)!"
],
[
"Для смены пути нужно {0} монет (30 минут дохода).",
"Changing your path costs {0} coins (30 minutes of income)."
],
[
"До {0} ч (100% дохода)",
"Up to {0} h (100% income)"
],
[
"Довести «{0}» до {1} уровня",
"Bring «{0}» to level {1}"
],
[
"Доход +{0}% (растёт со Славой Империи)",
"Income +{0}% (grows with Empire Glory)"
],
[
"Жук #{0}: накоплено {1} 🪙 (+{2}% прибыли — чем больше жуков, тем выгоднее!). Нажмите, чтобы лопнуть!",
"Bug #{0}: stored {1} 🪙 (+{2}% profit — the more bugs, the better!). Tap to pop it!"
],
[
"Жук #{0}: ползёт к монете... Подождите, пока присосётся!",
"Bug #{0}: crawling to the coin... Wait until it latches on!"
],
[
"Забрать награду за {0}-й день",
"Claim day {0} reward"
],
[
"Закалка x2 на {0} ур. ({1} ост.)",
"x2 tempering at lvl {0} ({1} left)"
],
[
"КОМБО {0}",
"COMBO {0}"
],
[
"Каждое открытое достижение навсегда увеличивает доход. Открыто: {0} из {1}.",
"Every unlocked achievement permanently increases income. Unlocked: {0} of {1}."
],
[
"Купить {0}",
"Buy {0}"
],
[
"Купить {0} (🪙 {1})",
"Buy {0} (🪙 {1})"
],
[
"Купить «{0}»",
"Buy «{0}»"
],
[
"Купить за {0}",
"Buy for {0}"
],
[
"Куплено ×{0}: {1} (ур. {2})",
"Bought ×{0}: {1} (lvl {2})"
],
[
"Ловите золотые кометы: с шансом 30% они приносят сезонную находку{0}. Каждая находка навсегда даёт +1% ко всему доходу.",
"Catch golden comets: with a 30% chance they bring a seasonal find{0}. Each find permanently gives +1% to all income."
],
[
"МАКС ({0}/{1})",
"MAX ({0}/{1})"
],
[
"Макс. ур: {0}",
"Max lvl: {0}"
],
[
"Мана: {0} / {1}",
"Mana: {0} / {1}"
],
[
"На {0} ур. откроется закалка x2",
"x2 tempering unlocks at lvl {0}"
],
[
"Недостаточно звёзд ({0} / {1} 🌌)",
"Not enough stars ({0} / {1} 🌌)"
],
[
"Нужно накопить {0} монет (осталось {1})",
"Save up {0} coins ({1} left)"
],
[
"Первый: {0}",
"First: {0}"
],
[
"Показать все ({0})",
"Show all ({0})"
],
[
"Призвать ({0})",
"Summon ({0})"
],
[
"Приносит автоматический пассивный доход в секунду. Базовая сила: +{0} / с за уровень. Закалки на полке «Улучшения» удваивают добычу.",
"Gives automatic passive income per second. Base power: +{0} / s per level. Temperings on the «Upgrades» shelf double the income."
],
[
"Сезоны идут по календарю: {0}.",
"Seasons follow the calendar: {0}."
],
[
"След: {0}",
"Next: {0}"
],
[
"Сменить за 🪙 {0}",
"Change for 🪙 {0}"
],
[
"События +{0}% чаще, сейф +{1}%",
"Events +{0}% more often, safe +{1}%"
],
[
"Текущий уровень: {0}/10 (+{1}% ко всему доходу).",
"Current level: {0}/10 (+{1}% to all income)."
],
[
"Текущий уровень: {0}/5 (+{1}% к Славе Империи).",
"Current level: {0}/5 (+{1}% to Empire Glory)."
],
[
"Текущий уровень: {0}/5 ({1}ч оффлайна при {2}% мощности).",
"Current level: {0}/5 ({1}h offline at {2}% power)."
],
[
"Текущий уровень: {0}/5 (ожидание −{1}%). След. ур: −{2}%.",
"Current level: {0}/5 (waiting −{1}%). Next lvl: −{2}%."
],
[
"Требуется: {0} ур. {1}, {2} ур. {3}",
"Requires: {0} lvl {1}, {2} lvl {3}"
],
[
"Увеличивает силу каждого нажатия по монете. Базовая сила: +{0} к тапу за уровень. Закалки на полке «Улучшения» удваивают силу.",
"Increases the power of every tap on the coin. Base power: +{0} per tap per level. Temperings on the «Upgrades» shelf double the power."
],
[
"Улучшить ({0})",
"Upgrade ({0})"
],
[
"Улучшить: {0}",
"Upgrade: {0}"
],
[
"Условие: {0} ({1}/{2}), {3} ({4}/{5})",
"Condition: {0} ({1}/{2}), {3} ({4}/{5})"
],
[
"Я готов к службе! {0}",
"Ready to serve! {0}"
],
[
"и +{0} 💎",
"and +{0} 💎"
],
[
"и +{0} 🔮 Сфера",
"and +{0} 🔮 Sphere"
],
[
"ур. {0}",
"lvl {0}"
],
[
"ур. {0} (+{1}% к доходу)",
"lvl {0} (+{1}% income)"
],
[
"ур. {0} {1}",
"lvl {0} {1}"
],
[
"ур. {0}/{1}",
"lvl {0}/{1}"
],
[
"→ След: {0}",
"→ Next: {0}"
],
[
"⏳ ПЕРЕЗАРЯДКА ({0}с)",
"⏳ COOLDOWN ({0}s)"
],
[
"⚠️ На монете уже {0} жуков! Лопните их, чтобы освободить место.",
"⚠️ There are already {0} bugs on the coin! Pop them to free up space."
],
[
"⚡ ЗОЛОТОЙ ДАР: КЛИК-БЕЗУМИЕ! x777 к силе тапа на {0} секунд!",
"⚡ GOLDEN GIFT: CLICK FRENZY! x777 tap power for {0} seconds!"
],
[
"⚡ КЛИК x777 ({0}с)!",
"⚡ CLICK x777 ({0}s)!"
],
[
"⚡ КЛИК-БЕЗУМИЕ x777 ({0}с)",
"⚡ CLICK FRENZY x777 ({0}s)"
],
[
"⚡ Купи «{0}» — он копит монеты сам",
"⚡ Buy «{0}» — it earns coins by itself"
],
[
"⚡ МЕГА-РЕЖИМ x5 АКТИВИРОВАН НА {0} МИНУТ!",
"⚡ MEGA MODE x5 ON FOR {0} MINUTES!"
],
[
"⚡ СОБЫТИЕ: {0}",
"⚡ EVENT: {0}"
],
[
"✨ «{0}» улучшено до ур. {1}/{2}!",
"✨ «{0}» upgraded to lvl {1}/{2}!"
],
[
"✨ Бонус: {0}",
"✨ Bonus: {0}"
],
[
"✨ Воплощение завершено! Бонус +{0}% ко всей добыче!",
"✨ Reincarnation complete! Bonus +{0}% to all income!"
],
[
"✨ Изучено новых созвездий: {0}!",
"✨ New constellations studied: {0}!"
],
[
"✨ УРОВЕНЬ {0} / {1}",
"✨ LEVEL {0} / {1}"
],
[
"❄️ ИНФЛЯЦИЯ -50% ({0}с)",
"❄️ INFLATION -50% ({0}s)"
],
[
"❌ Нужно {0} 🔮 для следующего уровня! Сферы появляются каждые 10 минут.",
"❌ You need {0} 🔮 for the next level! Spheres appear every 10 minutes."
],
[
"⬆ Доступна «{0}» для «{1}» — x2 на полке улучшений!",
"⬆ «{0}» is available for «{1}» — x2 on the upgrades shelf!"
],
[
"⭐ Питомец \"{0}\" улучшен до ур. {1}!",
"⭐ Pet \"{0}\" upgraded to lvl {1}!"
],
[
"🌌 ВОЗНЕСЕНИЕ! Вы получили +{0} Небесных Звёзд! Забег полностью сброшен.",
"🌌 ASCENSION! You received +{0} Heavenly Stars! The run has been fully reset."
],
[
"🌌 Изучить созвездие ({0} 🌌)",
"🌌 Study constellation ({0} 🌌)"
],
[
"🌌 СОВЕРШИТЬ ВОЗНЕСЕНИЕ (+{0} 🌌 Чипов)",
"🌌 ASCEND (+{0} 🌌 Stars)"
],
[
"🌌 Улучшить уровень {0} ({1} 🌌)",
"🌌 Upgrade to level {0} ({1} 🌌)"
],
[
"🌟 Созвездие изучено: «{0}»!",
"🌟 Constellation studied: «{0}»!"
],
[
"🍀 ЗОЛОТОЙ ДАР: СЧАСТЛИВЧИК! +{0} монет!",
"🍀 GOLDEN GIFT: LUCKY! +{0} coins!"
],
[
"🎁 Начислено +{0} монет и +{1} 💎!",
"🎁 Granted +{0} coins and +{1} 💎!"
],
[
"🎉 {0} (+{1} монет",
"🎉 {0} (+{1} coins"
],
[
"🎉 Награда получена: +{0} 🪙",
"🎉 Reward received: +{0} 🪙"
],
[
"🎉 Приобретён питомец \"{0}\"!",
"🎉 Pet \"{0}\" acquired!"
],
[
"🎉 Разблокирован облик \"{0}\"!",
"🎉 Skin \"{0}\" unlocked!"
],
[
"🎡 Рулетка: {0}",
"🎡 Wheel: {0}"
],
[
"🎨 Облик \"{0}\" экипирован!",
"🎨 Skin \"{0}\" equipped!"
],
[
"🎬 {0}x3 ОФФЛАЙН КУШ! +{1} монет!",
"🎬 {0}x3 OFFLINE JACKPOT! +{1} coins!"
],
[
"🎬 {0}БУСТ x2 АКТИВИРОВАН НА {1} МИН!",
"🎬 {0}x2 BOOST ON FOR {1} MIN!"
],
[
"🏆 Открыто достижение: {0}! +1% к доходу (Слава Империи)",
"🏆 Achievement unlocked: {0}! +1% income (Empire Glory)"
],
[
"🏆 Открыто достижение: {0}! Заберите +{1} 💎 во вкладке!",
"🏆 Achievement unlocked: {0}! Claim +{1} 💎 in the tab!"
],
[
"🏆 Открыто достижений: {0}! Заберите +{1} 💎 во вкладке «Достижения»!",
"🏆 Achievements unlocked: {0}! Claim +{1} 💎 in the «Achievements» tab!"
],
[
"🏆 Открыто достижений: {0}! Слава Империи растёт.",
"🏆 Achievements unlocked: {0}! Empire Glory grows."
],
[
"🏛️ Спонтанный Капитал: {0} +{1} ур.!",
"🏛️ Spontaneous Capital: {0} +{1} lvl!"
],
[
"🐾 Питомец \"{0}\" выбран спутником!",
"🐾 Pet \"{0}\" chosen as companion!"
],
[
"👆 Накопи {0} монет на первого работника",
"👆 Save up {0} coins for your first worker"
],
[
"👆 Накопи {0} монет на первое улучшение",
"👆 Save up {0} coins for your first upgrade"
],
[
"💀 СДЕЛКА С БЕЗДНОЙ: Ограблен древний склеп! +{0} 🪙!",
"💀 DEAL WITH THE ABYSS: An ancient crypt robbed! +{0} 🪙!"
],
[
"💎 ЗОЛОТОЙ ДАР: Алмазный метеорит! +{0} кристалл{1}!",
"💎 GOLDEN GIFT: Diamond meteor! +{0} crystal{1}!"
],
[
"💎 Забрать +{0}",
"💎 Claim +{0}"
],
[
"💎 МЕГА-БУСТ x5 ({0}с)",
"💎 MEGA BOOST x5 ({0}s)"
],
[
"💎 Награда получена: +{0} {1}! Слава Империи растёт.",
"💎 Reward received: +{0} {1}! Empire Glory grows."
],
[
"💤 Вы забрали +{0} монет!",
"💤 You claimed +{0} coins!"
],
[
"💥 +{0}% ВЕРНУЛОСЬ! +{1} 🪙",
"💥 +{0}% RETURNED! +{1} 🪙"
],
[
"💥 ВСЕ {0} ЖУКОВ! +{1} 🪙",
"💥 ALL {0} BUGS! +{1} 🪙"
],
[
"💥 Вскрыто {0} жуков! Возвращено +{1} 🪙 с бонусом +{2}%!",
"💥 Popped {0} bugs! Returned +{1} 🪙 with a +{2}% bonus!"
],
[
"💥 Жук лопнул! Возвращено +{0} 🪙 (+{1}% прибыли!)",
"💥 Bug popped! Returned +{0} 🪙 (+{1}% profit!)"
],
[
"💧 {0} маны",
"💧 {0} mana"
],
[
"💰 Золотой Всплеск принёс +{0} монет!",
"💰 Golden Surge brought +{0} coins!"
],
[
"💰 Продано {0} × {1} {2} за {3} 🪙",
"💰 Sold {0} × {1} {2} for {3} 🪙"
],
[
"📅 Награда за {0}-й день: {1}",
"📅 Day {0} reward: {1}"
],
[
"📅 Награда за вход получена · день {0} из 7",
"📅 Login reward claimed · day {0} of 7"
],
[
"📈 Куплено {0} × {1} {2} за {3} 🪙",
"📈 Bought {0} × {1} {2} for {3} 🪙"
],
[
"🔓 Замок {0}",
"🔓 Lock {0}"
],
[
"🔓 Замок {0}/3 взломан! Быстрее следующий!",
"🔓 Lock {0}/3 cracked! Quick, the next one!"
],
[
"🔓 Открыто: {0}!",
"🔓 Unlocked: {0}!"
],
[
"🔗 СИНЕРГИЯ АКТИВИРОВАНА: «{0}»! Производство предприятий взлетело!",
"🔗 SYNERGY ACTIVATED: «{0}»! Business output skyrocketed!"
],
[
"🔥 БЕЗУМИЕ x7 ({0}с)",
"🔥 FRENZY x7 ({0}s)"
],
[
"🔥 БЕЗУМИЕ x7 ({0}с)!",
"🔥 FRENZY x7 ({0}s)!"
],
[
"🔥 ЗОЛОТОЙ ДАР: ДЕНЕЖНОЕ БЕЗУМИЕ! x7 ко всей добыче на {0} секунд!",
"🔥 GOLDEN GIFT: MONEY FRENZY! x7 to all income for {0} seconds!"
],
[
"🔥 КРИТ x{0}! +",
"🔥 CRIT x{0}! +"
],
[
"🔥 ОГОНЬ x3 ({0}с)",
"🔥 FIRE x3 ({0}s)"
],
[
"🔥 ОГОНЬ x3 НА {0} СЕКУНД!",
"🔥 FIRE x3 FOR {0} SECONDS!"
],
[
"🔥 ОГОНЬ x3 на {0} секунд!",
"🔥 FIRE x3 for {0} seconds!"
],
[
"🔮 {0} усилен до {1} ур. Астральными Сферами! (+{2}% к добыче навсегда)",
"🔮 {0} boosted to lvl {1} with Astral Spheres! (+{2}% income forever)"
],
[
"🔮 Астральная Сфера сконденсирована! (+{0} шт.)",
"🔮 An Astral Sphere has condensed! (+{0})"
],
[
"🔮 Изучено: {0} (ур. {1})!",
"🔮 Researched: {0} (lvl {1})!"
],
[
"🔮 ТЁМНЫЙ ДАР: Кристаллы Престижа +{0} 💎!",
"🔮 DARK GIFT: Prestige Crystals +{0} 💎!"
],
[
"🔮 ур. {0} · {1}🔮",
"🔮 lvl {0} · {1}🔮"
],
[
"🕸️ ДАНЬ ТЬМЕ: Бездне принесено в жертву -{0} 🪙!",
"🕸️ TRIBUTE TO DARKNESS: -{0} 🪙 sacrificed to the Abyss!"
],
[
"🗓️ По календарю{0}",
"🗓️ By calendar{0}"
],
[
"🗞️ Вы нашли тайную записку в газете! Награда: +{0} 🪙",
"🗞️ You found a secret note in the newspaper! Reward: +{0} 🪙"
],
[
"🛒 Купи «{0}» — тап станет сильнее",
"🛒 Buy «{0}» — your tap gets stronger"
],
[
"🛒 Покупка: {0}! Спасибо за поддержку!",
"🛒 Purchase: {0}! Thanks for your support!"
],
[
"🔴 БАГРЕЦ x555 ({0}с)",
"🔴 CRIMSON x555 ({0}s)"
],
[
"✨ {0} → След: {1}",
"✨ {0} → Next: {1}"
],
[
"✨ {0}",
"✨ {0}"
],
[
"«{0}»",
"«{0}»"
]
];
    const RU_LANGS = ['ru', 'be', 'kk', 'uk', 'uz', 'hy', 'ka', 'az', 'ky', 'tg', 'tk'];
    const LS_KEY = 'tap_empire_lang';
    const CYR = /[А-Яа-яЁё]/;

    const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Игра показывает многие эмодзи картинками — текст рядом остаётся без эмодзи.
    // Автоматически добавляем переводы «без эмодзи в начале/конце» для всех строк и шаблонов.
    (function addStrippedVariants() {
        const EMO = '(?:[\\u2190-\\u2BFF\\u3297\\u3299]|\\uD83C[\\uDC00-\\uDFFF]|\\uD83D[\\uDC00-\\uDFFF]|\\uD83E[\\uDC00-\\uDFFF])(?:\\uFE0F|\\u200D(?:[\\u2190-\\u2BFF]|[\\uD83C-\\uD83E][\\uDC00-\\uDFFF])\\uFE0F?)*';
        const lead = new RegExp('^(?:' + EMO + ')\\s+'), trail = new RegExp('\\s+(?:' + EMO + ')$');
        const strip = (t) => t.replace(lead, '').replace(trail, '');
        for (const k of Object.keys(EN_EXACT)) {
            const k2 = strip(k);
            if (k2 !== k && k2 && !Object.prototype.hasOwnProperty.call(EN_EXACT, k2)) EN_EXACT[k2] = strip(String(EN_EXACT[k]));
        }
        const extra = [];
        const have = new Set(EN_PATTERNS.map(x => x[0]));
        for (const [ru, en] of EN_PATTERNS) {
            const r2 = strip(ru);
            if (r2 !== ru && r2.length > 3 && !have.has(r2) && /[А-Яа-яЁё]/.test(r2)) { extra.push([r2, strip(en)]); have.add(r2); }
        }
        EN_PATTERNS.push(...extra);
    })();
    const compiled = EN_PATTERNS.map(([ru, en]) => {
        const parts = ru.split(/\{(\d+)\}/);
        let re = '^';
        const order = [];
        for (let i = 0; i < parts.length; i++) {
            if (i % 2 === 0) re += escapeRe(parts[i]);
            else { re += '([\\s\\S]+?)'; order.push(parseInt(parts[i], 10)); }
        }
        re += '$';
        const staticCyr = (ru.replace(/\{\d+\}/g, '').match(/[А-Яа-яЁё]/g) || []).length;
        // Короткие шаблоны («{0}с», «{0} мин») срабатывают только на числа, а не на любые слова
        return { re: new RegExp(re), order, en, lit: ru.replace(/\{\d+\}/g, '').length, short: staticCyr > 0 && staticCyr <= 3 };
    }).sort((a, b) => b.lit - a.lit);

    const cache = new Map();
    function wordFallback(s) {
        return s.replace(/[А-Яа-яЁё][А-Яа-яЁё-]*(?:\s+[А-Яа-яЁё][А-Яа-яЁё-]*)*/g, (w) => {
            if (w.length > 2 && EN_EXACT[w]) return EN_EXACT[w];
            // по одному слову (однобуквенные «с», «ч» — только целиком, иначе ломают слова)
            return w.split(/(\s+)/).map(x => (x.length > 2 && EN_EXACT[x]) || x).join('');
        });
    }
    function trCore(s, depth, noFallback) {
        if (!CYR.test(s)) return s;
        if (Object.prototype.hasOwnProperty.call(EN_EXACT, s)) return EN_EXACT[s];
        const key = noFallback ? '\u0001' + s : s;
        if (cache.has(key)) return cache.get(key);
        let out = null;
        // Защита от зависания: на длинных строках шаблоны с несколькими подстановками
        // перебираются слишком долго (регулярные выражения с ленивыми группами)
        const longStr = s.length > 140;
        for (const p of compiled) {
            if (longStr && p.order.length > 1) continue;
            const m = p.re.exec(s);
            if (!m) continue;
            if (p.short && m.slice(1).some(v => CYR.test(v))) continue;
            const vals = {};
            p.order.forEach((idx, k) => {
                const v = m[k + 1];
                vals[idx] = depth < 4 ? trCore(v.trim() === v ? v : v.trim(), depth + 1) : v;
            });
            out = p.en.replace(/\{(\d+)\}/g, (_, i) => (vals[i] !== undefined ? vals[i] : ''));
            break;
        }
        // Игра заменяет эмодзи валют (💎 🪙 🔮 ⚜️) картинками, и текст режется на куски без эмодзи.
        // Пробуем найти перевод, вернув эмодзи в начало или конец куска.
        if (out === null && noFallback) { cache.set(key, null); return null; }
        if (out === null && depth === 0) {
            for (const e of ['💎', '🪙', '🔮', '⚜️']) {
                for (const cand of [e + ' ' + s, s + ' ' + e, e + s, s + e]) {
                    const r = trCore(cand, 0, true);
                    if (r) { out = r.split(e).join('').replace(/\s+/g, ' ').trim(); break; }
                }
                if (out !== null) break;
            }
        }
        if (out === null) {
            // части через « · » или « | »
            if (/ · | \| /.test(s)) out = s.split(/( · | \| )/).map(x => (/ · | \| /.test(x) ? x : trCore(x, depth + 1))).join('');
            else out = wordFallback(s);
        }
        if (cache.size > 5000) cache.clear();
        cache.set(key, out);
        return out;
    }
    function trText(t) {
        if (!t || !CYR.test(t)) return t;
        const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(t);
        const core = m[2].replace(/\s+/g, ' ');
        return m[1] + trCore(core, 0) + m[3];
    }

    let lang = 'ru';
    let observer = null;
    const original = new WeakMap();
    const ATTRS = ['title', 'placeholder', 'aria-label'];

    function processText(node) {
        const v = node.nodeValue;
        if (!v || !CYR.test(v)) return;
        const t = trText(v);
        if (t !== v) {
            if (!original.has(node)) original.set(node, v);
            node.nodeValue = t;
        }
    }
    function processAttrs(el) {
        for (const a of ATTRS) {
            const v = el.getAttribute && el.getAttribute(a);
            if (v && CYR.test(v)) {
                // Записываем, только если перевод отличается: иначе наблюдатель зациклится на собственной записи
                const t = trText(v);
                if (t !== v) el.setAttribute(a, t);
            }
        }
    }
    function processTree(root) {
        if (!root) return;
        if (root.nodeType === 3) { processText(root); return; }
        if (root.nodeType !== 1) return;
        if (root.tagName === 'SCRIPT' || root.tagName === 'STYLE') return;
        processAttrs(root);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        let n;
        while ((n = walker.nextNode())) {
            if (n.nodeType === 3) processText(n);
            else if (n.tagName !== 'SCRIPT' && n.tagName !== 'STYLE') processAttrs(n);
        }
    }
    function start() {
        processTree(document.body);
        document.title = trText(document.title);
        if (observer) return;
        observer = new MutationObserver((muts) => {
            if (lang !== 'en') return;
            for (const m of muts) {
                if (m.type === 'childList') m.addedNodes.forEach(processTree);
                else if (m.type === 'characterData') processText(m.target);
                else if (m.type === 'attributes') processAttrs(m.target);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    }
    function stop() {
        if (observer) { observer.disconnect(); observer = null; }
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let n;
        while ((n = walker.nextNode())) if (original.has(n)) n.nodeValue = original.get(n);
    }
    let detectedByPlatform = false;
    function setLang(l) {
        l = l === 'en' ? 'en' : 'ru';
        if (l === lang) return;
        lang = l;
        document.documentElement.lang = l;
        if (l === 'en') start(); else stop();
    }
    function getManual() {
        try { return localStorage.getItem(LS_KEY); } catch (e) { return null; }
    }
    function langFromCode(code) {
        const c = String(code || '').toLowerCase().slice(0, 2);
        return RU_LANGS.includes(c) ? 'ru' : 'en';
    }

    window.I18N = {
        get lang() { return lang; },
        t: (s) => (lang === 'en' ? trText(String(s)) : s),
        // ручной выбор игрока (сохраняется)
        setManual(l) {
            try { localStorage.setItem(LS_KEY, l); } catch (e) {}
            setLang(l);
        },
        // язык, который сообщил Яндекс — применяется, если игрок не выбирал вручную
        applyDetected(code) {
            detectedByPlatform = true;
            if (getManual()) return;
            setLang(langFromCode(code));
        }
    };

    // Стартовый язык: ручной выбор > язык браузера (уточнится, когда ответит Яндекс)
    const initial = getManual() || langFromCode((navigator.languages && navigator.languages[0]) || navigator.language);
    if (initial === 'en') {
        // язык платформы мог прийти раньше DOMContentLoaded — тогда он главнее языка браузера
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => { if (!detectedByPlatform || getManual()) setLang('en'); });
        else setLang('en');
    }
})();
