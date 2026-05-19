const STORAGE = {
  profile: "pyArenaProfileV3",
  history: "pyArenaHistoryV3",
  achievements: "pyArenaAchievementsV3",
  leaderboard: "pyArenaLeaderboardV3",
  settings: "pyArenaSettingsV3"
};

const FIREBASE_CONFIG = window.PY_ARENA_FIREBASE_CONFIG || {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  appId: ""
};

const ONLINE_ROOT = "pyArenaOnlineV1";
const PATHS = {
  assets: {
    defaultAvatar: "assets/avatars/default.svg",
    localAvatarPrefix: "assets/avatars/",
    remoteAvatarFallback: "https://api.dicebear.com/9.x/bottts/svg?seed=",
    medals: {
      Bronze: "assets/ui/medal-bronze.svg",
      Silver: "assets/ui/medal-silver.svg",
      Gold: "assets/ui/medal-gold.svg",
      Diamond: "assets/ui/medal-diamond.svg",
      Legendary: "assets/ui/medal-legendary.svg"
    }
  },
  sounds: {
    bgMusic: "sounds/bg-music.mp3",
    correct: "sounds/correct.mp3",
    wrong: "sounds/wrong.mp3",
    tick: "sounds/tick.mp3",
    hover: "sounds/hover.mp3",
    intro: "sounds/intro.mp3",
    matchFound: "sounds/match-found.mp3",
    battleAttack: "sounds/battle-attack.mp3",
    victory: "sounds/victory.mp3"
  },
  certificates: {
    background: "certificates/certificate-bg.jpg",
    frame: "certificates/frame.png",
    seal: "certificates/seal.png",
    signature: "certificates/signature.png"
  }
};
const PRELOADED_IMAGES = {};
const AVATAR_EXTENSIONS = ["png", "jpg", "jpeg", "webp", "svg"];

const ONLINE_LIMITS = {
  maxScoreStep: 1600,
  maxXpStep: 550,
  maxCombo: 5,
  minHumanAnswerMs: 220,
  statePublishMs: 250,
  eventPublishMs: 650,
  afkMs: 40000,
  heartbeatMs: 6000
};

const LEVEL_LABELS = {
  ru: { Junior: "Junior", Middle: "Middle", Senior: "Senior" },
  en: { Junior: "Junior", Middle: "Middle", Senior: "Senior" },
  uz: { Junior: "Boshlang'ich", Middle: "O'rta", Senior: "Yuqori" }
};

const I18N = {
  ru: {
    profileTitle: "Профиль игрока",
    avatarRandom: "Случайный",
    winsLabel: "Победы",
    mistakesLabel: "Ошибки",
    favoriteModeLabel: "Любимый режим",
    onlineTitle: "Online Multiplayer",
    createRoom: "Создать",
    joinRoom: "Войти",
    leaveRoom: "Выйти",
    readyBtn: "Готов",
    roomCode: "Код комнаты",
    matchStatus: "Статус матча",
    roomStatus: "Статус комнаты",
    onlinePlayers: "Игроков в комнате",
    onlineConnecting: "Подключение к комнате...",
    onlineJoining: "Вход в комнату...",
    onlineCreating: "Создание комнаты...",
    reconnectingLabel: "Переподключение...",
    matchFound: "Матч найден",
    playerJoined: "Игрок подключился",
    playerLeft: "Игрок вышел",
    mvpTitle: "MVP матча",
    sessionReplaced: "Предыдущая сессия заменена",
    duplicateSession: "Обнаружена дублирующая сессия",
    antiCheatFast: "Anti-cheat: слишком быстрый ответ",
    shieldBlocked: "Щит заблокировал атаку",
    heroText: "20 вопросов, динамическая сложность, combo-система и live battle логика.",
    firstName: "Имя",
    lastName: "Фамилия",
    player2FirstName: "Имя игрока 2",
    player2LastName: "Фамилия игрока 2",
    startMission: "Start Mission",
    hintsTitle: "Подсказки",
    streakTitle: "Серия",
    eventTitle: "Battle Event",
    spinWheel: "Spin Wheel",
    resultsTitle: "Результаты",
    playAgain: "Играть снова",
    globalLeaderboard: "Глобальный рейтинг",
    sortScore: "По очкам",
    sortWins: "По победам",
    achievementsTitle: "Достижения",
    certificateTitle: "Premium Certificate",
    medalsTitle: "Медали",
    levelLabel: "Уровень",
    comboReady: "Комбо готово: мини-игра доступна",
    roomOffline: "offline",
    roomOnline: "online",
    waitingPlayers: "Нужно минимум 2 игрока в комнате",
    waitingHost: "Ожидание хоста",
    waitingReady: "Ожидание готовности игроков",
    roomConnected: "Комната подключена",
    roomLeft: "Вы покинули комнату",
    roomNeedCode: "Введите код комнаты",
    roomCreateFail: "Не удалось создать комнату",
    roomJoinFail: "Не удалось войти в комнату",
    roomNotFound: "Комната не найдена",
    roomReadyOn: "Вы готовы",
    roomReadyOff: "Готовность снята",
    startDenied: "Матч стартует только при 2+ готовых игроках",
    firebaseMissing: "Заполните FIREBASE_CONFIG в script.js",
    connLost: "Переподключение...",
    connRestored: "Связь восстановлена",
    statusLobby: "lobby",
    statusStarting: "starting",
    statusRunning: "running",
    statusFinished: "finished",
    playerReady: "готов",
    playerWaiting: "ожидание",
    playerAnswering: "отвечает",
    playerFinished: "финиш",
    netOnline: "ONLINE",
    netOffline: "OFFLINE",
    eventWin: "Событие успешно",
    eventFail: "Мини-игра не пройдена"
  },
  en: {
    profileTitle: "Player Profile",
    avatarRandom: "Random",
    winsLabel: "Wins",
    mistakesLabel: "Mistakes",
    favoriteModeLabel: "Favorite Mode",
    onlineTitle: "Online Multiplayer",
    createRoom: "Create",
    joinRoom: "Join",
    leaveRoom: "Leave",
    readyBtn: "Ready",
    roomCode: "Room code",
    matchStatus: "Match status",
    roomStatus: "Room Status",
    onlinePlayers: "Players in room",
    onlineConnecting: "Connecting to room...",
    onlineJoining: "Joining room...",
    onlineCreating: "Creating room...",
    reconnectingLabel: "Reconnecting...",
    matchFound: "Match found",
    playerJoined: "Player joined",
    playerLeft: "Player left",
    mvpTitle: "Match MVP",
    sessionReplaced: "Previous session replaced",
    duplicateSession: "Duplicate session detected",
    antiCheatFast: "Anti-cheat: too fast",
    shieldBlocked: "Shield blocked attack",
    heroText: "20 questions, dynamic difficulty, combo system and live battle logic.",
    firstName: "First Name",
    lastName: "Last Name",
    player2FirstName: "Player 2 First Name",
    player2LastName: "Player 2 Last Name",
    startMission: "Start Mission",
    hintsTitle: "Hints",
    streakTitle: "Streak",
    eventTitle: "Battle Event",
    spinWheel: "Spin Wheel",
    resultsTitle: "Results",
    playAgain: "Play Again",
    globalLeaderboard: "Global Leaderboard",
    sortScore: "By Score",
    sortWins: "By Wins",
    achievementsTitle: "Achievements",
    certificateTitle: "Premium Certificate",
    medalsTitle: "Medals",
    levelLabel: "Level",
    comboReady: "Combo ready: mini-game unlocked",
    roomOffline: "offline",
    roomOnline: "online",
    waitingPlayers: "At least 2 players are required in the room",
    waitingHost: "Waiting for host",
    waitingReady: "Waiting for players to be ready",
    roomConnected: "Room connected",
    roomLeft: "You left the room",
    roomNeedCode: "Enter room code",
    roomCreateFail: "Room create failed",
    roomJoinFail: "Room join failed",
    roomNotFound: "Room not found",
    roomReadyOn: "You are ready",
    roomReadyOff: "You are not ready",
    startDenied: "Match starts only with 2+ ready players",
    firebaseMissing: "Fill FIREBASE_CONFIG in script.js",
    connLost: "Reconnecting...",
    connRestored: "Connection restored",
    statusLobby: "lobby",
    statusStarting: "starting",
    statusRunning: "running",
    statusFinished: "finished",
    playerReady: "ready",
    playerWaiting: "waiting",
    playerAnswering: "answering",
    playerFinished: "finished",
    netOnline: "ONLINE",
    netOffline: "OFFLINE",
    eventWin: "Event completed",
    eventFail: "Mini-game failed"
  },
  uz: {
    profileTitle: "O'yinchi profili",
    avatarRandom: "Tasodifiy",
    winsLabel: "G'alabalar",
    mistakesLabel: "Xatolar",
    favoriteModeLabel: "Sevimli rejim",
    onlineTitle: "Online Multiplayer",
    createRoom: "Yaratish",
    joinRoom: "Kirish",
    leaveRoom: "Chiqish",
    readyBtn: "Tayyor",
    roomCode: "Xona kodi",
    matchStatus: "Match holati",
    roomStatus: "Xona holati",
    onlinePlayers: "Xonadagi o'yinchilar",
    onlineConnecting: "Xonaga ulanmoqda...",
    onlineJoining: "Xonaga kirilmoqda...",
    onlineCreating: "Xona yaratilmoqda...",
    reconnectingLabel: "Qayta ulanmoqda...",
    matchFound: "Match topildi",
    playerJoined: "O'yinchi qo'shildi",
    playerLeft: "O'yinchi chiqdi",
    mvpTitle: "Match MVP",
    sessionReplaced: "Oldingi sessiya almashtirildi",
    duplicateSession: "Dublikat sessiya aniqlandi",
    antiCheatFast: "Anti-cheat: juda tez javob",
    shieldBlocked: "Qalqon hujumni to'sdi",
    heroText: "20 savol, dinamik qiyinchilik, combo tizimi va jonli battle logikasi.",
    firstName: "Ism",
    lastName: "Familiya",
    player2FirstName: "2-o'yinchi ismi",
    player2LastName: "2-o'yinchi familiyasi",
    startMission: "Start Mission",
    hintsTitle: "Yordamlar",
    streakTitle: "Seriya",
    eventTitle: "Battle Event",
    spinWheel: "Spin Wheel",
    resultsTitle: "Natijalar",
    playAgain: "Qayta o'ynash",
    globalLeaderboard: "Global reyting",
    sortScore: "Ball bo'yicha",
    sortWins: "G'alaba bo'yicha",
    achievementsTitle: "Yutuqlar",
    certificateTitle: "Premium Certificate",
    medalsTitle: "Medallar",
    levelLabel: "Daraja",
    comboReady: "Combo tayyor: mini-o'yin ochildi",
    roomOffline: "offline",
    roomOnline: "online",
    waitingPlayers: "Xonada kamida 2 o'yinchi kerak",
    waitingHost: "Host kutilmoqda",
    waitingReady: "O'yinchilar tayyorligi kutilmoqda",
    roomConnected: "Xona ulandi",
    roomLeft: "Siz xonani tark etdingiz",
    roomNeedCode: "Xona kodini kiriting",
    roomCreateFail: "Xona yaratilmadi",
    roomJoinFail: "Xonaga kirib bo'lmadi",
    roomNotFound: "Xona topilmadi",
    roomReadyOn: "Siz tayyorsiz",
    roomReadyOff: "Tayyorsiz holat o'chirildi",
    startDenied: "Match 2+ tayyor o'yinchi bilan boshlanadi",
    firebaseMissing: "script.js dagi FIREBASE_CONFIG ni to'ldiring",
    connLost: "Qayta ulanish...",
    connRestored: "Aloqa tiklandi",
    statusLobby: "lobby",
    statusStarting: "starting",
    statusRunning: "running",
    statusFinished: "finished",
    playerReady: "tayyor",
    playerWaiting: "kutmoqda",
    playerAnswering: "javob bermoqda",
    playerFinished: "yakunladi",
    netOnline: "ONLINE",
    netOffline: "OFFLINE",
    eventWin: "Event muvaffaqiyatli",
    eventFail: "Mini-o'yin o'tilmadi"
  }
};

const QUESTIONS = [
  {
    id: 1,
    level: "Junior",
    q: {
      ru: "Что выведет len('Python')?",
      en: "What does len('Python') return?",
      uz: "len('Python') nimani qaytaradi?"
    },
    options: {
      ru: ["5", "6", "7", "Ошибка"],
      en: ["5", "6", "7", "Error"],
      uz: ["5", "6", "7", "Xato"]
    },
    correct: 1
  },
  {
    id: 2,
    level: "Junior",
    q: {
      ru: "Как добавить элемент в список?",
      en: "How do you add an item to a list?",
      uz: "Listga element qanday qo'shiladi?"
    },
    options: {
      ru: ["push()", "append()", "insertLast()", "join()"],
      en: ["push()", "append()", "insertLast()", "join()"],
      uz: ["push()", "append()", "insertLast()", "join()"]
    },
    correct: 1
  },
  {
    id: 3,
    level: "Junior",
    q: {
      ru: "Какой оператор проверяет равенство?",
      en: "Which operator checks equality?",
      uz: "Qaysi operator tenglikni tekshiradi?"
    },
    options: {
      ru: ["=", "==", "===", "!="],
      en: ["=", "==", "===", "!="],
      uz: ["=", "==", "===", "!="]
    },
    correct: 1
  },
  {
    id: 4,
    level: "Junior",
    q: {
      ru: "Какой тип данных неизменяемый?",
      en: "Which data type is immutable?",
      uz: "Qaysi ma'lumot turi o'zgarmas?"
    },
    options: {
      ru: ["list", "dict", "tuple", "set"],
      en: ["list", "dict", "tuple", "set"],
      uz: ["list", "dict", "tuple", "set"]
    },
    correct: 2
  },
  {
    id: 5,
    level: "Junior",
    q: {
      ru: "Комментарий в Python начинается с:",
      en: "A Python comment starts with:",
      uz: "Python izohi quyidagidan boshlanadi:"
    },
    options: {
      ru: ["//", "#", "/*", "<!--"],
      en: ["//", "#", "/*", "<!--"],
      uz: ["//", "#", "/*", "<!--"]
    },
    correct: 1
  },
  {
    id: 6,
    level: "Middle",
    q: {
      ru: "Что делает list comprehension?",
      en: "What does list comprehension do?",
      uz: "List comprehension nima qiladi?"
    },
    options: {
      ru: ["Кратко создает списки", "Удаляет дубликаты", "Создает tuple", "Открывает файл"],
      en: ["Creates lists concisely", "Removes duplicates", "Creates tuple", "Opens file"],
      uz: ["Listni qisqa yaratadi", "Dublikatni o'chiradi", "tuple yaratadi", "Fayl ochadi"]
    },
    correct: 0
  },
  {
    id: 7,
    level: "Middle",
    q: {
      ru: "Что произойдет при d['x'], если ключа нет?",
      en: "What happens on d['x'] if key is missing?",
      uz: "Agar kalit bo'lmasa d['x'] nima qiladi?"
    },
    options: {
      ru: ["None", "KeyError", "IndexError", "0"],
      en: ["None", "KeyError", "IndexError", "0"],
      uz: ["None", "KeyError", "IndexError", "0"]
    },
    correct: 1
  },
  {
    id: 8,
    level: "Middle",
    q: {
      ru: "Для чего используется *args?",
      en: "What is *args used for?",
      uz: "*args nima uchun ishlatiladi?"
    },
    options: {
      ru: ["Именованные аргументы", "Произвольные позиционные аргументы", "Только dict", "Только list"],
      en: ["Named args", "Variable positional args", "Only dict", "Only list"],
      uz: ["Nomli argumentlar", "Istalgan pozitsion argumentlar", "Faqat dict", "Faqat list"]
    },
    correct: 1
  },
  {
    id: 9,
    level: "Middle",
    q: {
      ru: "Какой декоратор делает метод методом класса?",
      en: "Which decorator creates a class method?",
      uz: "Qaysi dekorator class method qiladi?"
    },
    options: {
      ru: ["@property", "@staticmethod", "@classmethod", "@async"],
      en: ["@property", "@staticmethod", "@classmethod", "@async"],
      uz: ["@property", "@staticmethod", "@classmethod", "@async"]
    },
    correct: 2
  },
  {
    id: 10,
    level: "Middle",
    q: {
      ru: "Что делает with open(...) as f?",
      en: "What does with open(...) as f do?",
      uz: "with open(...) as f nima qiladi?"
    },
    options: {
      ru: ["Закрывает файл автоматически", "Кэширует файл", "Открывает только на запись", "Удаляет файл"],
      en: ["Closes file automatically", "Caches file", "Write only", "Deletes file"],
      uz: ["Faylni avtomatik yopadi", "Kesh qiladi", "Faqat yozadi", "Faylni o'chiradi"]
    },
    correct: 0
  },
  {
    id: 11,
    level: "Middle",
    q: {
      ru: "Какой объект является генератором?",
      en: "Which one is a generator?",
      uz: "Qaysi biri generator?"
    },
    options: {
      ru: ["[x for x in range(5)]", "{x for x in range(5)}", "(x for x in range(5))", "{x:x for x in range(5)}"],
      en: ["[x for x in range(5)]", "{x for x in range(5)}", "(x for x in range(5))", "{x:x for x in range(5)}"],
      uz: ["[x for x in range(5)]", "{x for x in range(5)}", "(x for x in range(5))", "{x:x for x in range(5)}"]
    },
    correct: 2
  },
  {
    id: 12,
    level: "Senior",
    q: {
      ru: "Что делает GIL в CPython?",
      en: "What does GIL do in CPython?",
      uz: "CPythonda GIL nima qiladi?"
    },
    options: {
      ru: ["Один поток исполняет байткод одновременно", "Ускоряет multiprocessing", "Отключает async", "Запрещает threads"],
      en: ["One thread executes bytecode at a time", "Speeds multiprocessing", "Disables async", "Blocks threads"],
      uz: ["Bir vaqtning o'zida bitta thread bytecode bajaradi", "multiprocessingni tezlatadi", "asyncni o'chiradi", "threadlarni bloklaydi"]
    },
    correct: 0
  },
  {
    id: 13,
    level: "Senior",
    q: {
      ru: "Какие методы у итератора?",
      en: "Which methods are required for an iterator?",
      uz: "Iterator uchun qaysi metodlar kerak?"
    },
    options: {
      ru: ["__len__ и __getitem__", "__iter__ и __next__", "__enter__ и __exit__", "__call__ и __repr__"],
      en: ["__len__ and __getitem__", "__iter__ and __next__", "__enter__ and __exit__", "__call__ and __repr__"],
      uz: ["__len__ va __getitem__", "__iter__ va __next__", "__enter__ va __exit__", "__call__ va __repr__"]
    },
    correct: 1
  },
  {
    id: 14,
    level: "Senior",
    q: {
      ru: "Что делает deepcopy?",
      en: "What does deepcopy do?",
      uz: "deepcopy nima qiladi?"
    },
    options: {
      ru: ["Поверхностная копия", "Независимая глубокая копия", "Только для dict", "Только для list"],
      en: ["Shallow copy", "Independent deep copy", "Only for dict", "Only for list"],
      uz: ["Yuzaki nusxa", "To'liq mustaqil chuqur nusxa", "Faqat dict", "Faqat list"]
    },
    correct: 1
  },
  {
    id: 15,
    level: "Senior",
    q: {
      ru: "Что лучше для конкурентного I/O?",
      en: "What is better for concurrent I/O?",
      uz: "Konkurrent I/O uchun nima yaxshi?"
    },
    options: {
      ru: ["math", "asyncio", "pickle", "dataclasses"],
      en: ["math", "asyncio", "pickle", "dataclasses"],
      uz: ["math", "asyncio", "pickle", "dataclasses"]
    },
    correct: 1
  },
  {
    id: 16,
    level: "Senior",
    q: {
      ru: "Что вернет any([0, '', None, 5])?",
      en: "What does any([0, '', None, 5]) return?",
      uz: "any([0, '', None, 5]) nima qaytaradi?"
    },
    options: {
      ru: ["False", "True", "None", "Error"],
      en: ["False", "True", "None", "Error"],
      uz: ["False", "True", "None", "Error"]
    },
    correct: 1
  },
  {
    id: 17,
    level: "Middle",
    q: {
      ru: "Что означает EAFP в Python-подходе?",
      en: "What does EAFP mean in Python style?",
      uz: "Python uslubida EAFP nimani anglatadi?"
    },
    options: {
      ru: ["Проверяй сначала", "Пытайся и обрабатывай исключение", "Не используй try", "Только статическая типизация"],
      en: ["Check first", "Try and handle exception", "Avoid try", "Only static typing"],
      uz: ["Avval tekshir", "Harakat qil va xatoni ushla", "try ishlatma", "Faqat static typing"]
    },
    correct: 1
  },
  {
    id: 18,
    level: "Middle",
    q: {
      ru: "Для чего используется enumerate()?",
      en: "What is enumerate() used for?",
      uz: "enumerate() nima uchun kerak?"
    },
    options: {
      ru: ["Сортировка", "Индекс + значение в цикле", "Удаление дубликатов", "Асинхронность"],
      en: ["Sorting", "Index + value in loop", "Remove duplicates", "Async"],
      uz: ["Saralash", "Siklda indeks + qiymat", "Dublikat o'chirish", "Async"]
    },
    correct: 1
  },
  {
    id: 19,
    level: "Senior",
    q: {
      ru: "Что такое context manager?",
      en: "What is a context manager?",
      uz: "Context manager nima?"
    },
    options: {
      ru: ["Объект с __enter__/__exit__", "Список настроек", "Только async класс", "Любой генератор"],
      en: ["Object with __enter__/__exit__", "Settings list", "Async-only class", "Any generator"],
      uz: ["__enter__/__exit__ metodli obyekt", "Sozlamalar ro'yxati", "Faqat async klass", "Istalgan generator"]
    },
    correct: 0
  },
  {
    id: 20,
    level: "Junior",
    q: {
      ru: "Результат выражения 3 ** 2?",
      en: "Result of expression 3 ** 2?",
      uz: "3 ** 2 ifodasining natijasi?"
    },
    options: {
      ru: ["6", "9", "8", "5"],
      en: ["6", "9", "8", "5"],
      uz: ["6", "9", "8", "5"]
    },
    correct: 1
  }
];

const MEDALS = [
  { key: "Bronze", icon: "🥉", rule: profile => profile.totalXP >= 200 },
  { key: "Silver", icon: "🥈", rule: profile => profile.totalXP >= 600 },
  { key: "Gold", icon: "🥇", rule: profile => profile.totalXP >= 1200 },
  { key: "Diamond", icon: "💎", rule: profile => profile.totalXP >= 2200 },
  { key: "Legendary", icon: "👑", rule: profile => profile.wins >= 15 || profile.level >= 25 }
];

const state = {
  lang: "ru",
  mode: "classic",
  gameActive: false,
  questionIndex: 0,
  questions: [],
  questionPlan: [],
  score: 0,
  xp: 0,
  level: 1,
  streak: 0,
  comboMult: 1,
  bestStreak: 0,
  mistakes: 0,
  answerTimes: [],
  hints: { fifty: 1, skip: 3, audience: 2 },
  timer: 30,
  timerInterval: null,
  currentQuestionStart: 0,
  muted: false,
  players: [
    { fullName: "", score: 0, xp: 0, mistakes: 0, answers: 0, correct: 0, comboFrozen: 0, shield: false, boost: 0 },
    { fullName: "", score: 0, xp: 0, mistakes: 0, answers: 0, correct: 0, comboFrozen: 0, shield: false, boost: 0 }
  ],
  currentTurn: 0,
  introDone: false,
  currentSort: "score",
  chartHistory: null,
  chartAccuracy: null,
  profile: null,
  eventReady: false,
  online: {
    id: `P${Math.random().toString(16).slice(2, 8)}`,
    uid: "",
    db: null,
    auth: null,
    app: null,
    roomRef: null,
    playersRef: null,
    eventsRef: null,
    stateRef: null,
    connectedRef: null,
    authUnsub: null,
    myPlayerRef: null,
    mySessionRef: null,
    globalSessionRef: null,
    sessionToken: "",
    heartbeatInterval: null,
    afkInterval: null,
    visibilityListenerBound: false,
    beforeUnloadBound: false,
    onlineStatusBound: false,
    unsubscribers: [],
    listenersReady: false,
    room: "",
    roomCode: "",
    peers: {},
    connected: false,
    isHost: false,
    hostId: "",
    ownerUid: "",
    ready: false,
    matchStatus: "lobby",
    lastEventAt: 0,
    lastPublishAt: 0,
    lastRoomHash: "",
    connectedSince: 0,
    inFlightJoin: false,
    inFlightLeave: false,
    onlineLoading: false,
    battleLockUntil: 0,
    antiCheat: {
      questionStartAt: 0
    },
    remoteAudit: {},
    liveScores: {},
    activeMatch: false,
    startPlan: null,
    finishes: {},
    myEventRef: null
  }
};

const dom = {
  introScreen: document.getElementById("introScreen"),
  introCanvas: document.getElementById("introCanvas"),
  introTyping: document.getElementById("introTyping"),
  introLoaderBar: document.getElementById("introLoaderBar"),
  matrixCanvas: document.getElementById("matrixCanvas"),
  particlesCanvas: document.getElementById("particlesCanvas"),
  fxCanvas: document.getElementById("fxCanvas"),
  heroScreen: document.getElementById("heroScreen"),
  quizScreen: document.getElementById("quizScreen"),
  resultScreen: document.getElementById("resultScreen"),
  playerForm: document.getElementById("playerForm"),
  firstName: document.getElementById("firstName"),
  lastName: document.getElementById("lastName"),
  firstName2: document.getElementById("firstName2"),
  lastName2: document.getElementById("lastName2"),
  player2Fields: document.getElementById("player2Fields"),
  modeButtons: Array.from(document.querySelectorAll(".mode-btn")),
  langButtons: Array.from(document.querySelectorAll(".lang-btn")),
  sortButtons: Array.from(document.querySelectorAll(".sort-btn")),
  roomInput: document.getElementById("roomInput"),
  createRoomBtn: document.getElementById("createRoomBtn"),
  joinRoomBtn: document.getElementById("joinRoomBtn"),
  readyBtn: document.getElementById("readyBtn"),
  leaveRoomBtn: document.getElementById("leaveRoomBtn"),
  roomCodeText: document.getElementById("roomCodeText"),
  roomStatusText: document.getElementById("roomStatusText"),
  matchStatusText: document.getElementById("matchStatusText"),
  onlinePlayersCount: document.getElementById("onlinePlayersCount"),
  waitingPlayersList: document.getElementById("waitingPlayersList"),
  playerNameDisplay: document.getElementById("playerNameDisplay"),
  modeDisplay: document.getElementById("modeDisplay"),
  timerWrap: document.getElementById("timerWrap"),
  timerCircle: document.getElementById("timerCircle"),
  timerText: document.getElementById("timerText"),
  questionProgress: document.getElementById("questionProgress"),
  scoreDisplay: document.getElementById("scoreDisplay"),
  xpDisplay: document.getElementById("xpDisplay"),
  levelDisplay: document.getElementById("levelDisplay"),
  comboDisplay: document.getElementById("comboDisplay"),
  streakDisplay: document.getElementById("streakDisplay"),
  comboFx: document.getElementById("comboFx"),
  questionText: document.getElementById("questionText"),
  optionsGrid: document.getElementById("optionsGrid"),
  difficultyTag: document.getElementById("difficultyTag"),
  hint5050: document.getElementById("hint5050"),
  hintSkip: document.getElementById("hintSkip"),
  hintAudience: document.getElementById("hintAudience"),
  hint5050Count: document.getElementById("hint5050Count"),
  hintSkipCount: document.getElementById("hintSkipCount"),
  hintAudienceCount: document.getElementById("hintAudienceCount"),
  audienceBox: document.getElementById("audienceBox"),
  muteBtn: document.getElementById("muteBtn"),
  localMultiPanel: document.getElementById("localMultiPanel"),
  onlinePanel: document.getElementById("onlinePanel"),
  turnDisplay: document.getElementById("turnDisplay"),
  p1Score: document.getElementById("p1Score"),
  p2Score: document.getElementById("p2Score"),
  onlineScoreBoard: document.getElementById("onlineScoreBoard"),
  onlineAccuracyBoard: document.getElementById("onlineAccuracyBoard"),
  onlineMatchStatus: document.getElementById("onlineMatchStatus"),
  onlineLiveLeaderboard: document.getElementById("onlineLiveLeaderboard"),
  quizCard: document.getElementById("quizCard"),
  spinEventBtn: document.getElementById("spinEventBtn"),
  eventText: document.getElementById("eventText"),
  finalScore: document.getElementById("finalScore"),
  finalAccuracy: document.getElementById("finalAccuracy"),
  finalAvgTime: document.getElementById("finalAvgTime"),
  finalXp: document.getElementById("finalXp"),
  finalLevel: document.getElementById("finalLevel"),
  finalStreak: document.getElementById("finalStreak"),
  winnerDisplay: document.getElementById("winnerDisplay"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  historyChart: document.getElementById("historyChart"),
  accuracyChart: document.getElementById("accuracyChart"),
  globalLeaderboardList: document.getElementById("globalLeaderboardList"),
  achievementsList: document.getElementById("achievementsList"),
  certificateCanvas: document.getElementById("certificateCanvas"),
  downloadPngBtn: document.getElementById("downloadPngBtn"),
  downloadPdfBtn: document.getElementById("downloadPdfBtn"),
  achievementPopup: document.getElementById("achievementPopup"),
  battlePopup: document.getElementById("battlePopup"),
  netStatusBadge: document.getElementById("netStatusBadge"),
  reconnectPopup: document.getElementById("reconnectPopup"),
  onlineLoading: document.getElementById("onlineLoading"),
  onlineLoadingText: document.getElementById("onlineLoadingText"),
  onlineLoadingBar: document.getElementById("onlineLoadingBar"),
  onlineCards: document.getElementById("onlineCards"),
  profileName: document.getElementById("profileName"),
  profileLevel: document.getElementById("profileLevel"),
  profileXp: document.getElementById("profileXp"),
  profileWins: document.getElementById("profileWins"),
  profileMistakes: document.getElementById("profileMistakes"),
  profileAccuracy: document.getElementById("profileAccuracy"),
  profileFavoriteMode: document.getElementById("profileFavoriteMode"),
  avatarImage: document.getElementById("avatarImage"),
  avatarRandomBtn: document.getElementById("avatarRandomBtn"),
  medalsGrid: document.getElementById("medalsGrid")
};

const AudioFX = {
  ctx: null,
  gain: null,
  musicOsc: null,
  sounds: {},
  preload() {
    const entries = Object.entries(PATHS.sounds);
    entries.forEach(([key, src]) => {
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.addEventListener("error", () => {
        this.sounds[key] = null;
      });
      this.sounds[key] = audio;
    });
  },
  playSample(name, volume = 0.3) {
    if (state.muted) return;
    const base = this.sounds[name];
    if (!base) return;
    try {
      const audio = base.cloneNode();
      audio.volume = Math.max(0, Math.min(1, volume));
      audio.play().catch(() => {});
    } catch (_err) {
      // ignore sample playback errors
    }
  },
  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.gain = this.ctx.createGain();
    this.gain.gain.value = 0.14;
    this.gain.connect(this.ctx.destination);
  },
  tone(freq, duration = 0.1, type = "sine", amp = 0.1) {
    if (state.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.setValueAtTime(amp, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(g);
    g.connect(this.gain);
    osc.start(now);
    osc.stop(now + duration);
  },
  introSound() {
    this.playSample("intro", 0.35);
    [420, 580, 760].forEach((f, i) => setTimeout(() => this.tone(f, 0.17, "triangle", 0.08), 170 * i));
  },
  startMusic() {
    if (state.muted || this.musicOsc) return;
    if (this.sounds.bgMusic) {
      const music = this.sounds.bgMusic;
      music.loop = true;
      music.volume = 0.24;
      music.play().catch(() => {});
      this.musicOsc = "external";
      return;
    }
    this.init();
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const g = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = 68;
    filter.type = "lowpass";
    filter.frequency.value = 320;
    g.gain.value = 0.02;
    osc.connect(filter);
    filter.connect(g);
    g.connect(this.gain);
    osc.start();
    this.musicOsc = osc;
  },
  stopMusic() {
    if (!this.musicOsc) return;
    if (this.musicOsc === "external") {
      const music = this.sounds.bgMusic;
      if (music) {
        music.pause();
        music.currentTime = 0;
      }
      this.musicOsc = null;
      return;
    }
    this.musicOsc.stop();
    this.musicOsc = null;
  }
};

function t(key) {
  return I18N[state.lang][key] || key;
}

function getDefaultProfile() {
  return {
    firstName: "",
    lastName: "",
    avatarSeed: "PythonArena",
    level: 1,
    totalXP: 0,
    wins: 0,
    mistakes: 0,
    totalAnswers: 0,
    totalCorrect: 0,
    favoriteMode: "classic",
    modeCount: { classic: 0, survival: 0, multiplayer: 0, online: 0 },
    achievements: [],
    medals: [],
    history: []
  };
}

function loadProfile() {
  const raw = localStorage.getItem(STORAGE.profile);
  state.profile = raw ? JSON.parse(raw) : getDefaultProfile();
  const settings = JSON.parse(localStorage.getItem(STORAGE.settings) || "{}");
  state.lang = settings.lang || "ru";
  state.muted = Boolean(settings.muted);
}

function saveProfile() {
  localStorage.setItem(STORAGE.profile, JSON.stringify(state.profile));
  localStorage.setItem(STORAGE.settings, JSON.stringify({ lang: state.lang, muted: state.muted }));
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  dom.langButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === state.lang));
  document.querySelectorAll("[data-i18n]").forEach(node => {
    node.textContent = t(node.dataset.i18n);
  });
  dom.roomInput.placeholder = state.lang === "ru" ? "комната" : state.lang === "en" ? "room" : "xona";
  if (dom.onlineLoadingText && state.online.onlineLoading) {
    dom.onlineLoadingText.textContent = t("onlineConnecting");
  }
  if (dom.reconnectPopup && dom.reconnectPopup.classList.contains("show")) {
    dom.reconnectPopup.textContent = t("reconnectingLabel");
  }
  renderQuestion(true);
  renderLeaderboard();
  renderAchievements();
  updateProfilePanel();
  updateRoomUI();
}

function normalizeRoomCode(raw) {
  return (raw || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 6);
}

function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i += 1) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function updateProfilePanel() {
  const p = state.profile;
  const fullName = `${p.firstName || "Player"} ${p.lastName || ""}`.trim();
  const accuracy = p.totalAnswers ? Math.round((p.totalCorrect / p.totalAnswers) * 100) : 0;
  const avatarFile = (p.avatarSeed || "").trim();
  const hasLocalAvatar = avatarFile && !avatarFile.startsWith("http");
  dom.profileName.textContent = fullName;
  dom.profileLevel.textContent = String(p.level);
  dom.profileXp.textContent = String(p.totalXP);
  dom.profileWins.textContent = String(p.wins);
  dom.profileMistakes.textContent = String(p.mistakes);
  dom.profileAccuracy.textContent = `${accuracy}%`;
  dom.profileFavoriteMode.textContent = p.favoriteMode;
  dom.avatarImage.src = hasLocalAvatar
    ? `${PATHS.assets.localAvatarPrefix}${avatarFile}`
    : `${PATHS.assets.remoteAvatarFallback}${encodeURIComponent(p.avatarSeed)}`;
  dom.avatarImage.onerror = () => {
    dom.avatarImage.onerror = null;
    dom.avatarImage.src = PATHS.assets.defaultAvatar;
  };
}

function unlockAchievement(title, description) {
  if (state.profile.achievements.some(a => a.title === title)) return;
  const payload = { title, description, date: new Date().toLocaleDateString() };
  state.profile.achievements.push(payload);
  showPopup(`🏆 ${title}`);
  saveProfile();
  renderAchievements();
}

function evaluateMedals() {
  MEDALS.forEach(medal => {
    if (medal.rule(state.profile) && !state.profile.medals.includes(medal.key)) {
      state.profile.medals.push(medal.key);
      showPopup(`${medal.icon} ${medal.key}`);
    }
  });
  saveProfile();
  renderMedals();
}

function renderMedals() {
  dom.medalsGrid.innerHTML = "";
  MEDALS.forEach(m => {
    const item = document.createElement("div");
    const unlocked = state.profile.medals.includes(m.key);
    const medalSrc = PATHS.assets.medals[m.key] || "";
    item.className = `medal ${unlocked ? "unlocked" : ""}`;
    item.innerHTML = `
      <div class="medal-icon">
        <img src="${medalSrc}" alt="${m.key}" loading="lazy" onerror="this.style.display='none'; this.parentElement.textContent='${m.icon}';">
      </div>
      <strong>${m.key}</strong>
      <svg viewBox="0 0 100 16" width="100%" height="16" aria-hidden="true">
        <path d="M0 8 H100" stroke="${unlocked ? "#22d3ee" : "#516288"}" stroke-width="2" stroke-dasharray="6 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.2s" repeatCount="indefinite"></animate>
        </path>
      </svg>
    `;
    dom.medalsGrid.appendChild(item);
  });
}

function renderAchievements() {
  dom.achievementsList.innerHTML = "";
  const achieved = state.profile.achievements.slice().reverse();
  if (!achieved.length) {
    const li = document.createElement("li");
    li.textContent = "-";
    dom.achievementsList.appendChild(li);
    return;
  }
  achieved.slice(0, 12).forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.title} • ${item.date}`;
    dom.achievementsList.appendChild(li);
  });
}

function getGlobalLeaderboard() {
  return JSON.parse(localStorage.getItem(STORAGE.leaderboard) || "[]");
}

function pushLeaderboardEntry(entry) {
  const list = getGlobalLeaderboard();
  list.push(entry);
  localStorage.setItem(STORAGE.leaderboard, JSON.stringify(list.slice(-300)));
}

function renderLeaderboard() {
  const list = getGlobalLeaderboard();
  const sorted = list.slice().sort((a, b) => {
    if (state.currentSort === "xp") return b.xp - a.xp;
    if (state.currentSort === "wins") return b.wins - a.wins;
    if (state.currentSort === "survival") return b.survivalScore - a.survivalScore;
    return b.score - a.score;
  });
  dom.globalLeaderboardList.innerHTML = "";
  if (!sorted.length) {
    const li = document.createElement("li");
    li.textContent = "-";
    dom.globalLeaderboardList.appendChild(li);
    return;
  }
  sorted.slice(0, 15).forEach((row, idx) => {
    const medal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "•";
    const li = document.createElement("li");
    li.textContent = `${medal} ${row.player} | score ${row.score} | xp ${row.xp} | wins ${row.wins}`;
    dom.globalLeaderboardList.appendChild(li);
  });
}

function showPopup(text) {
  dom.achievementPopup.textContent = text;
  dom.achievementPopup.classList.add("show");
  setTimeout(() => dom.achievementPopup.classList.remove("show"), 2000);
}

function showBattlePopup(text) {
  if (!dom.battlePopup) return;
  dom.battlePopup.textContent = text;
  dom.battlePopup.classList.add("show");
  setTimeout(() => dom.battlePopup.classList.remove("show"), 1800);
}

function setOnlineLoading(show, text = "") {
  state.online.onlineLoading = show;
  if (!dom.onlineLoading) return;
  dom.onlineLoading.classList.toggle("show", show);
  if (text && dom.onlineLoadingText) dom.onlineLoadingText.textContent = text;
  if (show && dom.onlineLoadingBar) {
    dom.onlineLoadingBar.style.width = "20%";
    let p = 20;
    const id = setInterval(() => {
      if (!state.online.onlineLoading) {
        clearInterval(id);
        dom.onlineLoadingBar.style.width = "0";
        return;
      }
      p = Math.min(92, p + 4);
      dom.onlineLoadingBar.style.width = `${p}%`;
    }, 110);
  }
}

function setNetworkBadge(isOnline) {
  if (!dom.netStatusBadge) return;
  dom.netStatusBadge.textContent = isOnline ? t("netOnline") : t("netOffline");
  dom.netStatusBadge.classList.toggle("online", isOnline);
  dom.netStatusBadge.classList.toggle("offline", !isOnline);
}

function setReconnectPopup(show) {
  if (!dom.reconnectPopup) return;
  dom.reconnectPopup.textContent = t("reconnectingLabel");
  dom.reconnectPopup.classList.toggle("show", show);
}

function safeNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function preloadImage(key, src) {
  const img = new Image();
  img.decoding = "async";
  img.onload = () => {
    PRELOADED_IMAGES[key] = img;
  };
  img.onerror = () => {
    PRELOADED_IMAGES[key] = null;
  };
  img.src = src;
}

function drawImageIfReady(ctx, key, x, y, w, h) {
  const img = PRELOADED_IMAGES[key];
  if (!img) return false;
  try {
    ctx.drawImage(img, x, y, w, h);
    return true;
  } catch (_err) {
    return false;
  }
}

function shuffle(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getQuestionById(id) {
  return QUESTIONS.find(q => q.id === id);
}

function localizeQuestion(baseQuestion) {
  return {
    id: baseQuestion.id,
    level: LEVEL_LABELS[state.lang][baseQuestion.level],
    levelRaw: baseQuestion.level,
    q: baseQuestion.q[state.lang],
    options: baseQuestion.options[state.lang],
    correct: baseQuestion.correct
  };
}

function randomDifficultyForScore(score) {
  const rand = Math.random();
  if (score < 5) return rand < 0.62 ? "Junior" : rand < 0.9 ? "Middle" : "Senior";
  if (score < 12) return rand < 0.35 ? "Junior" : rand < 0.8 ? "Middle" : "Senior";
  return rand < 0.18 ? "Junior" : rand < 0.55 ? "Middle" : "Senior";
}

function buildClassicQuestions() {
  const base = shuffle(QUESTIONS);
  return base.slice(0, 20).map(q => withShuffledAnswers(localizeQuestion(q)));
}

function buildFromPlan(plan) {
  return plan.map(item => {
    const q = localizeQuestion(getQuestionById(item.id));
    const options = item.order.map(i => q.options[i]);
    const correct = item.order.indexOf(q.correct);
    return { ...q, options, correct };
  });
}

function buildOnlineQuestionPlan() {
  const ids = shuffle(QUESTIONS.map(q => q.id)).slice(0, 20);
  return ids.map(id => ({ id, order: shuffle([0, 1, 2, 3]) }));
}

function withShuffledAnswers(question) {
  const pairs = question.options.map((opt, idx) => ({ opt, idx }));
  const shuffled = shuffle(pairs);
  return {
    ...question,
    options: shuffled.map(p => p.opt),
    correct: shuffled.findIndex(p => p.idx === question.correct)
  };
}

function switchScreen(name) {
  dom.heroScreen.classList.remove("active");
  dom.quizScreen.classList.remove("active");
  dom.resultScreen.classList.remove("active");
  if (name === "hero") dom.heroScreen.classList.add("active");
  if (name === "quiz") dom.quizScreen.classList.add("active");
  if (name === "result") dom.resultScreen.classList.add("active");
}

function updateRoomUI() {
  dom.roomStatusText.textContent = state.online.connected ? t("roomOnline") : t("roomOffline");
  dom.roomCodeText.textContent = state.online.roomCode || "-";
  const statusKey = `status${state.online.matchStatus[0].toUpperCase()}${state.online.matchStatus.slice(1)}`;
  dom.matchStatusText.textContent = t(statusKey) || state.online.matchStatus;
  dom.onlineMatchStatus.textContent = `Status: ${dom.matchStatusText.textContent}`;
  const peersCount = Object.keys(state.online.peers).length + (state.online.connected ? 1 : 0);
  dom.onlinePlayersCount.textContent = String(peersCount);
  dom.readyBtn.classList.toggle("active", state.online.ready);
  dom.readyBtn.textContent = state.online.ready ? `${t("readyBtn")} ✓` : t("readyBtn");
  renderWaitingPlayers();
  updateOnlineBoards();
  renderOnlineCards();
}

function setMode(mode) {
  state.mode = mode;
  dom.modeButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  dom.player2Fields.classList.toggle("show", mode === "multiplayer");
  dom.localMultiPanel.style.display = mode === "multiplayer" ? "block" : "none";
  dom.onlinePanel.style.display = mode === "online" ? "block" : "none";
}

function resetGameState() {
  state.gameActive = true;
  state.questionIndex = 0;
  state.score = 0;
  state.xp = 0;
  state.level = 1;
  state.streak = 0;
  state.comboMult = 1;
  state.bestStreak = 0;
  state.mistakes = 0;
  state.answerTimes = [];
  state.hints = { fifty: 1, skip: 3, audience: 2 };
  state.currentTurn = 0;
  state.eventReady = false;
  state.players = [
    { fullName: state.players[0].fullName, score: 0, xp: 0, mistakes: 0, answers: 0, correct: 0, comboFrozen: 0, shield: false, boost: 0 },
    { fullName: state.players[1].fullName, score: 0, xp: 0, mistakes: 0, answers: 0, correct: 0, comboFrozen: 0, shield: false, boost: 0 }
  ];
  updateHints();
}

function startGameFromForm(event) {
  event.preventDefault();
  AudioFX.init();
  AudioFX.startMusic();

  const firstName = dom.firstName.value.trim();
  const lastName = dom.lastName.value.trim();
  if (!firstName || !lastName) return;

  state.players[0].fullName = `${firstName} ${lastName}`.trim();
  state.profile.firstName = firstName;
  state.profile.lastName = lastName;

  if (state.mode === "multiplayer") {
    const f2 = dom.firstName2.value.trim();
    const l2 = dom.lastName2.value.trim();
    if (!f2 || !l2) return;
    state.players[1].fullName = `${f2} ${l2}`.trim();
  }

  saveProfile();
  resetGameState();

  if (state.mode === "online") {
    if (!state.online.connected || Object.keys(state.online.peers).length < 1) {
      showPopup(t("waitingPlayers"));
      return;
    }
    if (!state.online.ready) {
      showPopup(t("waitingReady"));
      return;
    }
    requestOnlineStart();
    return;
  }

  if (state.mode === "survival") {
    state.questions = [];
  } else {
    state.questions = buildClassicQuestions();
  }
  switchScreen("quiz");
  renderQuestion();
}

function requestOnlineStart() {
  if (!state.online.connected || !state.online.stateRef || !state.online.playersRef) return;
  if (!state.online.isHost) {
    showPopup(t("waitingHost"));
    return;
  }
  state.online.playersRef.once("value").then(snap => {
    const players = snap.val() || {};
    const all = Object.values(players);
    const readyCount = all.filter(p => p && p.ready).length;
    if (readyCount < 2) {
      showPopup(t("startDenied"));
      return;
    }
    const plan = buildOnlineQuestionPlan();
    const seed = Math.random().toString(36).slice(2, 10);
    const startAt = Date.now() + 1800;
    state.online.stateRef.update({
      status: "starting",
      hostId: state.online.id,
      seed,
      startAt,
      plan,
      startedAt: firebase.database.ServerValue.TIMESTAMP
    });
    showBattlePopup(`⚡ ${t("matchFound")}`);
  });
}

function startOnlineMatch(plan, startAt) {
  resetGameState();
  state.online.activeMatch = true;
  state.online.matchStatus = "starting";
  state.online.startPlan = state.online.startPlan && state.online.startPlan.plan ? state.online.startPlan : { signature: `${startAt}`, plan };
  state.questions = buildFromPlan(plan);
  switchScreen("quiz");
  AudioFX.playSample("matchFound", 0.4);
  const wait = Math.max(0, startAt - Date.now());
  setTimeout(() => {
    state.gameActive = true;
    state.online.matchStatus = "running";
    if (state.online.myPlayerRef) {
      state.online.myPlayerRef.update({
        status: "answering",
        ready: false,
        updatedAt: firebase.database.ServerValue.TIMESTAMP
      });
    }
    if (state.online.stateRef && state.online.isHost) {
      state.online.stateRef.child("status").set("running");
    }
    renderQuestion();
  }, wait);
}

function getCurrentQuestion() {
  if (state.mode === "survival") {
    const difficulty = randomDifficultyForScore(state.score);
    const pool = QUESTIONS.filter(q => q.level === difficulty);
    const picked = pool[Math.floor(Math.random() * pool.length)] || QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    return withShuffledAnswers(localizeQuestion(picked));
  }
  return state.questions[state.questionIndex] || null;
}

function renderQuestion(forceOnlyTranslate = false) {
  if (!dom.quizScreen.classList.contains("active") && !forceOnlyTranslate) return;
  const q = getCurrentQuestion();
  if (!q) {
    if (forceOnlyTranslate) return;
    finishGame();
    return;
  }
  if (state.mode !== "survival") {
    state.questions[state.questionIndex] = q;
  }
  dom.questionText.textContent = q.q;
  dom.difficultyTag.textContent = q.level;
  dom.audienceBox.textContent = "";
  dom.optionsGrid.innerHTML = "";
  q.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.dataset.index = String(idx);
    btn.textContent = `${String.fromCharCode(65 + idx)}. ${option}`;
    btn.addEventListener("click", () => answerQuestion(idx, btn));
    btn.addEventListener("mouseenter", () => {
      AudioFX.playSample("hover", 0.12);
      AudioFX.tone(640, 0.05, "square", 0.04);
    });
    dom.optionsGrid.appendChild(btn);
  });
  updateHUD();
  if (!forceOnlyTranslate) startTimer();
}

function updateHUD() {
  const activePlayer = state.mode === "multiplayer" ? state.players[state.currentTurn].fullName : state.players[0].fullName;
  dom.playerNameDisplay.textContent = activePlayer;
  dom.modeDisplay.textContent = state.mode;
  dom.scoreDisplay.textContent = String(state.score);
  dom.xpDisplay.textContent = String(state.xp);
  dom.levelDisplay.textContent = String(state.level);
  dom.streakDisplay.textContent = String(state.streak);
  dom.comboDisplay.textContent = `x${state.comboMult}`;
  dom.turnDisplay.textContent = `Ход: ${state.players[state.currentTurn].fullName || "P1"}`;
  dom.p1Score.textContent = `P1: ${state.players[0].score}`;
  dom.p2Score.textContent = `P2: ${state.players[1].score}`;

  const total = state.mode === "survival" ? 20 : 20;
  const progress = ((state.questionIndex + 1) / total) * 100;
  dom.questionProgress.style.width = `${Math.min(progress, 100)}%`;
}

function updateHints() {
  dom.hint5050Count.textContent = String(state.hints.fifty);
  dom.hintSkipCount.textContent = String(state.hints.skip);
  dom.hintAudienceCount.textContent = String(state.hints.audience);
  dom.hint5050.disabled = state.hints.fifty <= 0;
  dom.hintSkip.disabled = state.hints.skip <= 0;
  dom.hintAudience.disabled = state.hints.audience <= 0;
}

function startTimer() {
  clearInterval(state.timerInterval);
  state.timer = 30;
  state.currentQuestionStart = performance.now();
  if (state.mode === "online") state.online.antiCheat.questionStartAt = Date.now();
  drawTimer();
  state.timerInterval = setInterval(() => {
    state.timer -= 1;
    drawTimer();
    if (state.timer <= 8) {
      dom.timerWrap.classList.add("warning");
      AudioFX.playSample("tick", 0.16);
      AudioFX.tone(320, 0.04, "sawtooth", 0.05);
    } else {
      dom.timerWrap.classList.remove("warning");
    }
    if (state.timer <= 0) {
      clearInterval(state.timerInterval);
      failByTimeout();
    }
  }, 1000);
}

function drawTimer() {
  const circumference = 2 * Math.PI * 52;
  const offset = circumference * (1 - state.timer / 30);
  dom.timerCircle.style.strokeDasharray = String(circumference);
  dom.timerCircle.style.strokeDashoffset = String(offset);
  dom.timerText.textContent = String(Math.max(0, state.timer));
}

function getComboMultiplier(streak) {
  if (streak >= 9) return 5;
  if (streak >= 6) return 3;
  if (streak >= 3) return 2;
  return 1;
}

function setComboVisual() {
  dom.comboFx.textContent = state.comboMult > 1 ? `COMBO x${state.comboMult}` : "";
  document.body.classList.toggle("combo-glow", state.comboMult > 1);
}

function currentQuestionForAnswer() {
  if (state.mode === "survival") return getCurrentQuestion();
  return state.questions[state.questionIndex];
}

function answerQuestion(index, buttonEl) {
  if (!state.gameActive) return;
  clearInterval(state.timerInterval);
  state.gameActive = false;
  const q = currentQuestionForAnswer();
  const isCorrect = index === q.correct;
  const answerTime = (performance.now() - state.currentQuestionStart) / 1000;
  state.answerTimes.push(answerTime);

  const active = state.mode === "multiplayer" ? state.players[state.currentTurn] : state.players[0];
  active.answers += 1;

  if (isCorrect) {
    active.correct += 1;
    processCorrect(buttonEl, q, answerTime, active);
  } else {
    processWrong(buttonEl, q, active);
  }

  if (state.mode === "online") {
    publishOnlineState();
  }

  setTimeout(() => moveNextQuestion(isCorrect), 900);
}

function processCorrect(buttonEl, q, answerTime, activePlayer) {
  buttonEl.classList.add("correct");
  AudioFX.playSample("correct", 0.42);
  AudioFX.tone(980, 0.14, "triangle", 0.12);
  drawConfetti();
  state.streak += 1;
  state.bestStreak = Math.max(state.bestStreak, state.streak);
  state.comboMult = getComboMultiplier(state.streak);
  setComboVisual();

  const speedXp = answerTime < 8 ? 16 : answerTime < 14 ? 8 : 3;
  const difficultyXp = q.levelRaw === "Senior" ? 18 : q.levelRaw === "Middle" ? 10 : 6;
  const comboXp = Math.round((12 + speedXp + difficultyXp) * state.comboMult);
  const scoreBase = 100 + (q.levelRaw === "Senior" ? 30 : q.levelRaw === "Middle" ? 15 : 8);
  const boost = activePlayer.boost > 0 ? 2 : 1;
  const gainedScore = Math.round(scoreBase * state.comboMult * boost);

  if (activePlayer.boost > 0) activePlayer.boost -= 1;
  state.score += gainedScore;
  state.xp += comboXp;
  state.level = Math.min(50, Math.floor(state.xp / 120) + 1);
  activePlayer.score += gainedScore;
  activePlayer.xp += comboXp;
  if (state.mode === "survival" && state.streak >= 8) {
    unlockAchievement("Survivor", "Long survival streak");
  }
  if (state.comboMult >= 3) unlockAchievement("Combo Engine", "Combo x3 reached");

  if (state.streak >= 3 && !state.eventReady) {
    state.eventReady = true;
    dom.eventText.textContent = t("comboReady");
  }
  updateHUD();
}

function processWrong(buttonEl, q, activePlayer) {
  buttonEl.classList.add("wrong");
  AudioFX.playSample("wrong", 0.45);
  AudioFX.tone(180, 0.2, "sawtooth", 0.13);
  dom.quizCard.classList.add("shake");
  setTimeout(() => dom.quizCard.classList.remove("shake"), 340);
  activePlayer.mistakes += 1;
  state.mistakes += 1;
  state.streak = 0;
  state.comboMult = 1;
  setComboVisual();
  revealCorrect(q.correct);
  updateHUD();
}

function revealCorrect(correctIndex) {
  const options = Array.from(dom.optionsGrid.querySelectorAll(".option-btn"));
  if (options[correctIndex]) options[correctIndex].classList.add("correct");
}

function failByTimeout() {
  const q = currentQuestionForAnswer();
  state.answerTimes.push(30);
  processWrong({ classList: { add: () => {} } }, q, state.mode === "multiplayer" ? state.players[state.currentTurn] : state.players[0]);
  if (state.mode === "online") publishOnlineState();
  setTimeout(() => moveNextQuestion(false), 700);
}

function moveNextQuestion(correct) {
  if (state.mode === "survival" && !correct) {
    finishGame();
    return;
  }

  if (state.mode === "multiplayer") {
    state.currentTurn = state.currentTurn === 0 ? 1 : 0;
  }

  state.questionIndex += 1;
  if (state.mode === "survival" && state.questionIndex >= 999) {
    finishGame();
    return;
  }
  if (state.mode !== "survival" && state.questionIndex >= 20) {
    finishGame();
    return;
  }
  state.gameActive = true;
  renderQuestion();
}

function use50() {
  if (!state.gameActive || state.hints.fifty <= 0) return;
  state.hints.fifty -= 1;
  updateHints();
  const q = currentQuestionForAnswer();
  const wrong = shuffle([0, 1, 2, 3].filter(i => i !== q.correct)).slice(0, 2);
  Array.from(dom.optionsGrid.querySelectorAll(".option-btn")).forEach(btn => {
    if (wrong.includes(Number(btn.dataset.index))) btn.classList.add("hidden-option");
  });
}

function useSkip() {
  if (!state.gameActive || state.hints.skip <= 0) return;
  state.hints.skip -= 1;
  updateHints();
  clearInterval(state.timerInterval);
  state.answerTimes.push(0);
  moveNextQuestion(true);
}

function useAudience() {
  if (!state.gameActive || state.hints.audience <= 0) return;
  state.hints.audience -= 1;
  updateHints();
  const q = currentQuestionForAnswer();
  const weights = q.options.map((_, i) => (i === q.correct ? 52 + Math.random() * 28 : 8 + Math.random() * 20));
  const sum = weights.reduce((a, b) => a + b, 0);
  const lines = weights.map((v, i) => `${String.fromCharCode(65 + i)}: ${Math.round((v / sum) * 100)}%`);
  dom.audienceBox.textContent = lines.join(" | ");
}

function spinBattleEvent() {
  if (!state.eventReady) return;
  const a = 2 + Math.floor(Math.random() * 8);
  const b = 2 + Math.floor(Math.random() * 8);
  const answer = window.prompt(`${a} + ${b} = ?`);
  if (answer === null) return;
  if (Number(answer) !== a + b) {
    dom.eventText.textContent = t("eventFail");
    state.eventReady = false;
    return;
  }

  const events = ["steal50", "freezeCombo", "shield", "boost2x"];
  const picked = events[Math.floor(Math.random() * events.length)];
  applyEventEffect(picked);
  dom.eventText.textContent = `${t("eventWin")}: ${picked}`;
  state.eventReady = false;
}

function applyEventEffect(eventKey) {
  const self = state.mode === "multiplayer" ? state.players[state.currentTurn] : state.players[0];
  if (eventKey === "shield") {
    self.shield = true;
    return;
  }
  if (eventKey === "boost2x") {
    self.boost = 3;
    return;
  }
  if (state.mode === "multiplayer") {
    const rivalIndex = state.currentTurn === 0 ? 1 : 0;
    applyAttackToLocalRival(eventKey, rivalIndex, state.currentTurn);
    return;
  }
  if (state.mode === "online") {
    const now = Date.now();
    if (now < state.online.battleLockUntil) return;
    state.online.battleLockUntil = now + 2500;
    const targetId = getTopRivalId();
    if (!targetId) return;
    sendOnline({ type: "event-attack", from: state.online.id, targetId, eventKey });
    AudioFX.playSample("battleAttack", 0.34);
    showBattlePopup(`⚡ ${eventKey}`);
  }
}

function applyAttackToLocalRival(eventKey, rivalIndex, sourceIndex) {
  const attacker = state.players[sourceIndex];
  const rival = state.players[rivalIndex];
  if (eventKey === "steal50") {
    const stolen = Math.floor(rival.score * 0.5);
    rival.score -= stolen;
    attacker.score += stolen;
    state.score = attacker.score + state.players[(sourceIndex + 1) % 2].score;
  }
  if (eventKey === "freezeCombo") {
    rival.comboFrozen = 2;
  }
  updateHUD();
}

function renderLiveOnlineLeaderboard() {
  dom.onlineLiveLeaderboard.innerHTML = "";
  const me = state.online.liveScores[state.online.id] || {
    score: state.players[0].score,
    xp: state.players[0].xp,
    combo: state.comboMult,
    answers: state.players[0].answers,
    correct: state.players[0].correct,
    mistakes: state.players[0].mistakes
  };
  const rows = [
    {
      id: state.online.id,
      name: state.players[0].fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player",
      ...me
    }
  ];
  Object.entries(state.online.peers).forEach(([id, peer]) => {
    const live = state.online.liveScores[id] || {};
    rows.push({
      id,
      name: peer.name || id,
      score: live.score || peer.score || 0,
      xp: live.xp || peer.xp || 0,
      combo: live.combo || peer.combo || 1,
      answers: live.answers || peer.answers || 0,
      correct: live.correct || peer.correct || 0,
      mistakes: live.mistakes || peer.mistakes || 0
    });
  });
  rows.sort((a, b) => (b.score || 0) - (a.score || 0));
  rows.forEach((row, idx) => {
    const li = document.createElement("li");
    const acc = row.answers ? Math.round((row.correct / row.answers) * 100) : 0;
    const mark = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "•";
    li.textContent = `${mark} ${row.name}: ${row.score} | XP ${row.xp} | Acc ${acc}% | Combo x${row.combo} | Err ${row.mistakes}`;
    dom.onlineLiveLeaderboard.appendChild(li);
  });
}

function renderOnlineCards() {
  if (!dom.onlineCards) return;
  const rows = [];
  const selfName = state.players[0].fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player";
  const selfLive = state.online.liveScores[state.online.id] || {};
  rows.push({
    id: state.online.id,
    name: selfName,
    score: safeNumber(selfLive.score, state.players[0].score),
    combo: safeNumber(selfLive.combo, state.comboMult),
    status: state.online.matchStatus === "running" ? "answering" : (state.online.ready ? "ready" : "waiting"),
    me: true
  });
  Object.entries(state.online.peers).forEach(([id, peer]) => {
    rows.push({
      id,
      name: peer.name || id,
      score: safeNumber(peer.score, 0),
      combo: safeNumber(peer.combo, 1),
      status: peer.status || "waiting",
      me: false
    });
  });
  rows.sort((a, b) => b.score - a.score);
  dom.onlineCards.innerHTML = rows.map((row, idx) => `
    <article class="player-card ${row.me ? "me" : ""}">
      <div>
        <strong>${idx === 0 ? "★ " : ""}${row.name}</strong>
        <p>${row.status}</p>
      </div>
      <div class="player-card-meta">
        <span>${row.score}</span>
        <small>x${row.combo}</small>
      </div>
    </article>
  `).join("");
}

function getTopRivalId() {
  const rivals = Object.keys(state.online.liveScores).filter(id => id !== state.online.id);
  if (!rivals.length) return null;
  rivals.sort((a, b) => (state.online.liveScores[b]?.score || 0) - (state.online.liveScores[a]?.score || 0));
  return rivals[0];
}

function applyIncomingOnlineAttack(eventKey) {
  const self = state.players[0];
  if (self.shield) {
    self.shield = false;
    showPopup(t("shieldBlocked"));
    return;
  }
  if (eventKey === "steal50") {
    const lose = Math.floor(self.score * 0.5);
    self.score -= lose;
    state.score -= lose;
    showBattlePopup(`⚔ steal -${lose}`);
  } else if (eventKey === "freezeCombo") {
    self.comboFrozen = 2;
    showBattlePopup("❄ combo frozen");
  }
  publishOnlineState();
  updateHUD();
}

function updateOnlineBoards() {
  const self = state.online.liveScores[state.online.id] || {
    score: state.score,
    xp: state.xp,
    combo: state.comboMult,
    mistakes: state.players[0].mistakes,
    answers: state.players[0].answers,
    correct: state.players[0].correct
  };
  const rivals = Object.entries(state.online.liveScores)
    .filter(([id]) => id !== state.online.id)
    .map(([, data]) => data);
  const topRival = rivals.sort((a, b) => b.score - a.score)[0];
  dom.onlineScoreBoard.textContent = `You: ${self.score} | Rival: ${topRival ? topRival.score : 0}`;
  const acc = self.answers ? Math.round((self.correct / self.answers) * 100) : 0;
  dom.onlineAccuracyBoard.textContent = `Acc: ${acc}% | XP: ${self.xp || 0} | Combo: x${self.combo || 1} | Err: ${self.mistakes || 0}`;
  renderLiveOnlineLeaderboard();
}

function sanitizeIncomingOnlineState(id, payload) {
  if (!validateRemoteOnlineState(id, payload)) return;
  state.online.liveScores[id] = {
    from: id,
    score: Number(payload.score || 0),
    xp: Number(payload.xp || 0),
    combo: Number(payload.combo || 1),
    mistakes: Number(payload.mistakes || 0),
    answers: Number(payload.answers || 0),
    correct: Number(payload.correct || 0)
  };
}

function publishOnlineState() {
  if (!state.online.connected) return;
  const now = Date.now();
  if (now - state.online.lastPublishAt < ONLINE_LIMITS.statePublishMs) return;
  state.online.lastPublishAt = now;
  const self = state.players[0];
  const elapsedMs = Math.max(0, Date.now() - (state.online.antiCheat.questionStartAt || Date.now()));
  const minHumanMs = ONLINE_LIMITS.minHumanAnswerMs;
  if (elapsedMs < minHumanMs) {
    showPopup(t("antiCheatFast"));
    return;
  }
  const payload = {
    type: "state",
    from: state.online.id,
    score: self.score,
    xp: self.xp,
    combo: state.comboMult,
    mistakes: self.mistakes,
    answers: self.answers,
    correct: self.correct,
    elapsedMs
  };
  state.online.liveScores[state.online.id] = payload;
  if (state.online.myPlayerRef) {
    state.online.myPlayerRef.update({
      score: self.score,
      xp: self.xp,
      combo: state.comboMult,
      mistakes: self.mistakes,
      answers: self.answers,
      correct: self.correct,
      answerMsTotal: (state.answerTimes.reduce((a, b) => a + b, 0) * 1000) | 0,
      status: "answering",
      updatedAt: firebase.database.ServerValue.TIMESTAMP
    });
  }
  sendOnline(payload);
  updateOnlineBoards();
}

function finishGame() {
  clearInterval(state.timerInterval);
  state.gameActive = false;
  AudioFX.stopMusic();
  switchScreen("result");

  const answers = Math.max(1, state.answerTimes.length);
  const accuracy = Math.round(((state.players[0].correct || 0) / answers) * 100);
  const avg = state.answerTimes.reduce((a, b) => a + b, 0) / answers;

  dom.finalScore.textContent = String(state.score);
  dom.finalAccuracy.textContent = `${accuracy}%`;
  dom.finalAvgTime.textContent = `${avg.toFixed(1)}s`;
  dom.finalXp.textContent = String(state.xp);
  dom.finalLevel.textContent = String(state.level);
  dom.finalStreak.textContent = String(state.bestStreak);
  dom.winnerDisplay.textContent = "";
  AudioFX.playSample("victory", 0.42);

  if (state.mode === "multiplayer") {
    const p1 = state.players[0];
    const p2 = state.players[1];
    const winner = p1.score === p2.score ? null : p1.score > p2.score ? p1 : p2;
    dom.winnerDisplay.textContent = winner ? `Winner: ${winner.fullName} (${winner.score})` : "Draw";
  }

  if (state.mode === "online") {
    const answersOnline = Math.max(1, state.players[0].answers || 1);
    const finalPayload = {
      type: "finish",
      from: state.online.id,
      player: state.players[0].fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim(),
      score: state.players[0].score,
      xp: state.players[0].xp,
      accuracy: Math.round(((state.players[0].correct || 0) / answersOnline) * 100),
      mistakes: state.players[0].mistakes || 0
    };
    sendOnline(finalPayload);
    if (state.online.myPlayerRef) {
      state.online.myPlayerRef.update({
        status: "finished",
        ready: false,
        score: finalPayload.score,
        xp: finalPayload.xp,
        answers: state.players[0].answers || 0,
        correct: state.players[0].correct || 0,
        mistakes: finalPayload.mistakes,
        updatedAt: firebase.database.ServerValue.TIMESTAMP
      });
    }
    state.online.finishes[state.online.id] = {
      player: finalPayload.player,
      score: finalPayload.score,
      accuracy: finalPayload.accuracy,
      mistakes: finalPayload.mistakes,
      xp: finalPayload.xp
    };
    if (state.online.stateRef && state.online.isHost) {
      state.online.stateRef.child("status").set("finished");
    }
    renderOnlineRanking();
  }

  const p = state.profile;
  p.totalXP += state.xp;
  p.level = Math.min(50, Math.floor(p.totalXP / 120) + 1);
  p.mistakes += state.mistakes;
  p.totalAnswers += answers;
  p.totalCorrect += state.players[0].correct || 0;
  p.modeCount[state.mode] = (p.modeCount[state.mode] || 0) + 1;
  p.favoriteMode = Object.entries(p.modeCount).sort((a, b) => b[1] - a[1])[0][0];
  if (accuracy >= 70) p.wins += 1;

  p.history.push({
    date: new Date().toLocaleString(),
    mode: state.mode,
    score: state.score,
    xp: state.xp,
    accuracy,
    avg
  });
  p.history = p.history.slice(-25);

  pushLeaderboardEntry({
    player: `${p.firstName} ${p.lastName}`.trim(),
    score: state.score,
    xp: p.totalXP,
    wins: p.wins,
    survivalScore: state.mode === "survival" ? state.score : 0,
    date: new Date().toISOString()
  });

  if (accuracy === 100 && answers >= 20) unlockAchievement("Perfect Game", "100% accuracy");
  if (state.comboMult >= 5) unlockAchievement("Combo x5", "Maximum combo reached");
  if (avg <= 8) unlockAchievement("Speed Runner", "Fast answer speed");
  if (p.level >= 20) unlockAchievement("Python Master", "High profile level");

  evaluateMedals();
  saveProfile();
  updateProfilePanel();
  renderLeaderboard();
  renderAchievements();
  drawCharts();
  drawCertificate(accuracy);
}

function renderOnlineRanking() {
  const all = Object.values(state.online.finishes);
  if (!all.length) return;
  const ranks = all.slice().sort((a, b) => b.score - a.score);
  const mvp = ranks[0];
  if (mvp) showBattlePopup(`🏆 ${t("mvpTitle")}: ${mvp.player}`);
  dom.winnerDisplay.textContent = ranks.map((r, i) => {
    const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}.`;
    return `${medal} ${r.player} | score ${r.score} | acc ${r.accuracy || 0}% | err ${r.mistakes || 0} | xp ${r.xp || 0}`;
  }).join("  ");
}

function drawCharts() {
  const history = state.profile.history;
  const labels = history.map((h, i) => `#${i + 1}`);
  const scores = history.map(h => h.score);
  const xp = history.map(h => h.xp);
  const accuracy = history.map(h => h.accuracy);
  const speed = history.map(h => Number(h.avg.toFixed(1)));

  if (state.chartHistory) state.chartHistory.destroy();
  if (state.chartAccuracy) state.chartAccuracy.destroy();

  state.chartHistory = new Chart(dom.historyChart, {
    type: "line",
    data: {
      labels,
      datasets: [
        { label: "Score", data: scores, borderColor: "#22d3ee", backgroundColor: "rgba(34,211,238,0.15)", tension: 0.35, fill: true },
        { label: "XP", data: xp, borderColor: "#ff4ecd", backgroundColor: "rgba(255,78,205,0.1)", tension: 0.35 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: "#dce8ff" } } },
      scales: {
        x: { ticks: { color: "#c9d9ff" }, grid: { color: "rgba(255,255,255,0.08)" } },
        y: { ticks: { color: "#c9d9ff" }, grid: { color: "rgba(255,255,255,0.08)" } }
      }
    }
  });

  state.chartAccuracy = new Chart(dom.accuracyChart, {
    type: "bar",
    data: {
      labels,
      datasets: [
        { label: "Accuracy %", data: accuracy, backgroundColor: "rgba(0,255,149,0.42)", borderColor: "#00ff95", borderWidth: 1 },
        { label: "Answer Speed (s)", data: speed, backgroundColor: "rgba(79,125,255,0.38)", borderColor: "#4f7dff", borderWidth: 1 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: "#dce8ff" } } },
      scales: {
        x: { ticks: { color: "#c9d9ff" }, grid: { color: "rgba(255,255,255,0.08)" } },
        y: { ticks: { color: "#c9d9ff" }, grid: { color: "rgba(255,255,255,0.08)" } }
      }
    }
  });
}

function drawCertificate(accuracy) {
  const ctx = dom.certificateCanvas.getContext("2d");
  const w = dom.certificateCanvas.width;
  const h = dom.certificateCanvas.height;
  const name = `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim();
  const nameAreaStartX = 315;
  const nameAreaEndX = 956;
  const nameAreaCenterX = (nameAreaStartX + nameAreaEndX) / 2;
  const nameAreaMaxWidth = nameAreaEndX - nameAreaStartX;
  const nameY = 515;
  ctx.clearRect(0, 0, w, h);
  const hasBg = drawImageIfReady(ctx, "certBackground", 0, 0, w, h);
  if (!hasBg) {
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#081225");
    grad.addColorStop(1, "#122a53");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }
  if (!drawImageIfReady(ctx, "certFrame", 0, 0, w, h)) {
    ctx.strokeStyle = "rgba(34,211,238,0.8)";
    ctx.lineWidth = 8;
    ctx.strokeRect(24, 24, w - 48, h - 48);
    ctx.strokeStyle = "rgba(255,78,205,0.45)";
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, w - 100, h - 100);
  }
  ctx.textAlign = "center";
  ctx.fillStyle = "#c8dcff";
  ctx.font = "700 34px Orbitron, Arial";
  ctx.fillText("PYTHON NEON ARENA", w / 2, 140);
  ctx.fillStyle = "#f2f8ff";
  ctx.font = "700 72px Orbitron, Arial";
  ctx.fillText("CERTIFICATE", w / 2, 230);
  ctx.font = "500 34px Inter, Arial";
  ctx.fillStyle = "#d4e4ff";
  ctx.fillText("Awarded to", w / 2, 315);
  ctx.font = "700 58px Inter, Arial";
  ctx.fillStyle = "#22d3ee";
  ctx.fillText(name, nameAreaCenterX, nameY, nameAreaMaxWidth);
  ctx.fillStyle = "#dbe9ff";
  ctx.font = "500 30px Inter, Arial";
  ctx.fillText(`Score: ${state.score} | Accuracy: ${accuracy}% | Level: ${state.level}`, w / 2, 610);
  ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, w / 2, 655);
  drawImageIfReady(ctx, "certSeal", w - 260, h - 260, 180, 180);
  if (drawImageIfReady(ctx, "certSignature", w / 2 - 240, 700, 480, 150)) {
    ctx.fillStyle = "#d4e4ff";
    ctx.font = "500 22px Inter, Arial";
    ctx.fillText("Python Arena Board", w / 2, 845);
    return;
  }
  ctx.fillStyle = "#ff9de8";
  ctx.font = "500 26px Inter, Arial";
  ctx.fillText("Signature: Python Arena Board", w / 2, 700);
}

function downloadPng() {
  const a = document.createElement("a");
  a.href = dom.certificateCanvas.toDataURL("image/png");
  a.download = "python-neon-certificate.png";
  a.click();
}

function downloadPdf() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("landscape", "pt", "a4");
  const image = dom.certificateCanvas.toDataURL("image/png");
  const w = pdf.internal.pageSize.getWidth();
  const h = pdf.internal.pageSize.getHeight();
  pdf.addImage(image, "PNG", 20, 20, w - 40, h - 40);
  pdf.save("python-neon-certificate.pdf");
}

function toggleMute() {
  state.muted = !state.muted;
  dom.muteBtn.textContent = state.muted ? "🔈" : "🔊";
  if (state.muted) AudioFX.stopMusic();
  else if (dom.quizScreen.classList.contains("active")) AudioFX.startMusic();
  saveProfile();
}

async function initOnlineBackend() {
  if (!window.firebase) return false;
  if (!FIREBASE_CONFIG.apiKey || !FIREBASE_CONFIG.databaseURL || !FIREBASE_CONFIG.projectId) {
    showPopup(t("firebaseMissing"));
    return false;
  }
  if (!state.online.app) {
    state.online.app = firebase.apps.length ? firebase.app() : firebase.initializeApp(FIREBASE_CONFIG);
    state.online.auth = firebase.auth(state.online.app);
    state.online.db = firebase.database(state.online.app);
  }
  if (!state.online.auth.currentUser) {
    try {
      await state.online.auth.signInAnonymously();
    } catch (_err) {
      showPopup(t("roomJoinFail"));
      return false;
    }
  }
  state.online.uid = state.online.auth.currentUser.uid;
  if (!state.online.connectedRef) {
    state.online.connectedRef = state.online.db.ref(".info/connected");
    state.online.connectedRef.on("value", snap => {
      const online = Boolean(snap.val());
      setNetworkBadge(online && navigator.onLine);
      if (!online && state.online.connected) {
        showPopup(t("connLost"));
        setReconnectPopup(true);
      }
      if (online && state.online.connected) {
        showPopup(t("connRestored"));
        setReconnectPopup(false);
        if (state.online.myPlayerRef) {
          state.online.myPlayerRef.child("updatedAt").set(firebase.database.ServerValue.TIMESTAMP);
        }
      }
    });
  }
  bindConnectivityWatchers();
  return true;
}

async function createRoom() {
  if (state.online.inFlightJoin) return;
  setOnlineLoading(true, t("onlineCreating"));
  const ok = await initOnlineBackend();
  if (!ok) {
    state.online.inFlightJoin = false;
    setOnlineLoading(false);
    return;
  }
  const code = normalizeRoomCode(dom.roomInput.value) || generateRoomCode();
  dom.roomInput.value = code;
  await joinRoom(code, true);
  state.online.inFlightJoin = false;
  setOnlineLoading(false);
}

async function joinRoom(codeInput = "", createIfMissing = false) {
  if (state.online.inFlightJoin) return;
  state.online.inFlightJoin = true;
  setOnlineLoading(true, createIfMissing ? t("onlineCreating") : t("onlineJoining"));
  const ok = await initOnlineBackend();
  if (!ok) {
    state.online.inFlightJoin = false;
    setOnlineLoading(false);
    return;
  }
  const roomCode = normalizeRoomCode(codeInput || dom.roomInput.value);
  if (!roomCode) {
    showPopup(t("roomNeedCode"));
    state.online.inFlightJoin = false;
    setOnlineLoading(false);
    return;
  }
  if (state.online.connected) await leaveRoom(true);
  const sessionToken = `${state.online.uid}:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
  state.online.sessionToken = sessionToken;
  state.online.globalSessionRef = state.online.db.ref(`${ONLINE_ROOT}/sessions/${state.online.uid}`);
  const prevSessionSnap = await state.online.globalSessionRef.once("value");
  if (prevSessionSnap.exists()) {
    const prev = prevSessionSnap.val() || {};
    if (prev.roomCode && prev.roomCode !== roomCode) {
      showPopup(t("sessionReplaced"));
    }
  }
  await state.online.globalSessionRef.set({
    roomCode,
    playerId: state.online.id,
    sessionToken,
    updatedAt: firebase.database.ServerValue.TIMESTAMP
  });
  state.online.globalSessionRef.onDisconnect().remove();

  const roomRef = state.online.db.ref(`${ONLINE_ROOT}/rooms/${roomCode}`);
  if (!createIfMissing) {
    const existsSnap = await roomRef.child("meta/createdAt").once("value");
    if (!existsSnap.exists()) {
      showPopup(t("roomNotFound"));
      state.online.inFlightJoin = false;
      setOnlineLoading(false);
      return;
    }
  } else {
    await roomRef.child("meta").update({
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      createdBy: state.online.id,
      createdByUid: state.online.uid,
      version: 1
    });
  }
  const metaSnap = await roomRef.child("meta").once("value");
  const meta = metaSnap.val() || {};
  state.online.ownerUid = meta.createdByUid || state.online.uid;

  state.online.roomCode = roomCode;
  state.online.room = roomCode;
  state.online.roomRef = roomRef;
  state.online.playersRef = roomRef.child("players");
  state.online.stateRef = roomRef.child("state");
  state.online.eventsRef = roomRef.child("events");
  state.online.myPlayerRef = state.online.playersRef.child(state.online.id);
  state.online.connected = true;
  state.online.connectedSince = Date.now();
  state.online.ready = false;
  state.online.matchStatus = "lobby";
  state.online.peers = {};
  state.online.liveScores = {};
  state.online.finishes = {};
  state.online.startPlan = null;
  state.online.remoteAudit = {};

  const playerName = state.players[0].fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player";
  await state.online.myPlayerRef.set({
    id: state.online.id,
    uid: state.online.uid,
    name: playerName,
    status: "waiting",
    ready: false,
    score: 0,
    xp: 0,
    combo: 1,
    mistakes: 0,
    answers: 0,
    correct: 0,
    answerMsTotal: 0,
    updatedAt: firebase.database.ServerValue.TIMESTAMP,
    joinedAt: firebase.database.ServerValue.TIMESTAMP,
    sessionToken,
    heartbeatAt: firebase.database.ServerValue.TIMESTAMP
  });
  state.online.liveScores[state.online.id] = {
    from: state.online.id,
    name: playerName,
    score: 0,
    xp: 0,
    combo: 1,
    mistakes: 0,
    answers: 0,
    correct: 0
  };
  state.online.myPlayerRef.onDisconnect().remove();
  state.online.mySessionRef = roomRef.child(`sessions/${state.online.uid}`);
  await state.online.mySessionRef.set({
    playerId: state.online.id,
    roomCode,
    sessionToken,
    updatedAt: firebase.database.ServerValue.TIMESTAMP
  });
  state.online.mySessionRef.onDisconnect().remove();

  subscribeOnlineRoom();
  showPopup(t("roomConnected"));
  AudioFX.playSample("matchFound", 0.4);
  showBattlePopup(`⚡ ${t("matchFound")}`);
  startOnlineHeartbeats();
  startAfkWatcher();
  updateRoomUI();
  state.online.inFlightJoin = false;
  setOnlineLoading(false);
}

async function leaveRoom(silent = false) {
  if (state.online.inFlightLeave) return;
  state.online.inFlightLeave = true;
  if (!state.online.connected) {
    state.online.inFlightLeave = false;
    return;
  }
  const roomRefSnapshot = state.online.roomRef;
  if (state.online.myPlayerRef) {
    try {
      await state.online.myPlayerRef.remove();
    } catch (_err) {
      // ignore
    }
  }
  if (state.online.mySessionRef) {
    try {
      await state.online.mySessionRef.remove();
    } catch (_err) {
      // ignore
    }
  }
  if (state.online.globalSessionRef) {
    try {
      await state.online.globalSessionRef.remove();
    } catch (_err) {
      // ignore
    }
  }
  if (state.online.unsubscribers.length) {
    state.online.unsubscribers.forEach(fn => {
      try {
        fn();
      } catch (_err) {
        // ignore
      }
    });
  }
  state.online.unsubscribers = [];
  state.online.listenersReady = false;
  state.online.roomRef = null;
  state.online.playersRef = null;
  state.online.stateRef = null;
  state.online.eventsRef = null;
  state.online.myPlayerRef = null;
  state.online.mySessionRef = null;
  state.online.globalSessionRef = null;
  state.online.sessionToken = "";
  state.online.connected = false;
  state.online.ready = false;
  state.online.matchStatus = "lobby";
  state.online.peers = {};
  state.online.liveScores = {};
  state.online.finishes = {};
  state.online.startPlan = null;
  state.online.remoteAudit = {};
  state.online.roomCode = "";
  stopOnlineHeartbeats();
  stopAfkWatcher();
  dom.waitingPlayersList.innerHTML = "";
  dom.onlineLiveLeaderboard.innerHTML = "";
  cleanupRoomIfEmpty(roomRefSnapshot);
  if (!silent) showPopup(t("roomLeft"));
  updateRoomUI();
  state.online.inFlightLeave = false;
}

function cleanupRoomIfEmpty(roomRef) {
  if (!roomRef) return;
  roomRef.child("players").once("value").then(snap => {
    if (snap.exists()) return;
    roomRef.child("sessions").once("value").then(s2 => {
      if (!s2.exists()) roomRef.remove();
    });
  });
}

function recalcHost() {
  const ids = [state.online.id, ...Object.keys(state.online.peers)].sort();
  state.online.hostId = ids[0] || state.online.id;
  state.online.isHost = state.online.hostId === state.online.id;
}

function renderWaitingPlayers() {
  const list = [{ id: state.online.id, ...(state.online.liveScores[state.online.id] || {}) }]
    .concat(Object.entries(state.online.peers).map(([id, data]) => ({ id, ...data })));
  dom.waitingPlayersList.innerHTML = "";
  if (!list.length || !state.online.connected) return;
  list.sort((a, b) => (a.joinedAt || 0) - (b.joinedAt || 0));
  list.forEach(player => {
    const li = document.createElement("li");
    const status = player.status === "ready" ? t("playerReady")
      : player.status === "answering" ? t("playerAnswering")
      : player.status === "finished" ? t("playerFinished")
      : t("playerWaiting");
    const readyMark = player.ready ? "✓" : "•";
    li.textContent = `${readyMark} ${player.name || player.id} — ${status}`;
    dom.waitingPlayersList.appendChild(li);
  });
}

function updateRoomStateFromSnapshot(data) {
  if (!data) return;
  const nextStatus = data.status || "lobby";
  state.online.matchStatus = nextStatus;
  if (nextStatus === "starting" || nextStatus === "running") {
    const signature = `${data.startAt || 0}:${data.seed || ""}`;
    const already = state.online.startPlan && state.online.startPlan.signature === signature;
    if (!already && Array.isArray(data.plan) && data.plan.length >= 20) {
      state.online.startPlan = { signature, plan: data.plan };
      startOnlineMatch(data.plan, data.startAt || Date.now());
      if (state.online.myPlayerRef) {
        state.online.myPlayerRef.child("status").set("answering");
      }
    }
  }
  updateRoomUI();
}

function validateRemoteOnlineState(playerId, payload) {
  const prev = state.online.remoteAudit[playerId] || { score: 0, xp: 0, answers: 0, correct: 0, mistakes: 0 };
  const now = {
    score: Number(payload.score || 0),
    xp: Number(payload.xp || 0),
    answers: Number(payload.answers || 0),
    correct: Number(payload.correct || 0),
    mistakes: Number(payload.mistakes || 0),
    combo: Number(payload.combo || 1)
  };
  const scoreDelta = now.score - prev.score;
  const xpDelta = now.xp - prev.xp;
  const answersDelta = now.answers - prev.answers;
  const correctDelta = now.correct - prev.correct;
  const mistakesDelta = now.mistakes - prev.mistakes;
  const logical = answersDelta >= 0
    && correctDelta >= 0
    && mistakesDelta >= 0
    && now.correct <= now.answers
    && scoreDelta >= -500
    && scoreDelta <= ONLINE_LIMITS.maxScoreStep
    && xpDelta >= -80
    && xpDelta <= ONLINE_LIMITS.maxXpStep
    && now.combo >= 1
    && now.combo <= ONLINE_LIMITS.maxCombo;
  if (logical) state.online.remoteAudit[playerId] = now;
  return logical;
}

function startOnlineHeartbeats() {
  stopOnlineHeartbeats();
  if (!state.online.myPlayerRef) return;
  state.online.heartbeatInterval = setInterval(() => {
    if (!state.online.connected || !state.online.myPlayerRef) return;
    state.online.myPlayerRef.update({
      heartbeatAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP
    });
  }, ONLINE_LIMITS.heartbeatMs);
}

function stopOnlineHeartbeats() {
  if (state.online.heartbeatInterval) {
    clearInterval(state.online.heartbeatInterval);
    state.online.heartbeatInterval = null;
  }
}

function startAfkWatcher() {
  stopAfkWatcher();
  state.online.afkInterval = setInterval(() => {
    if (!state.online.connected || !state.online.myPlayerRef) return;
    if (!dom.quizScreen.classList.contains("active") && state.online.matchStatus === "running") {
      state.online.myPlayerRef.update({
        status: "afk",
        updatedAt: firebase.database.ServerValue.TIMESTAMP
      });
    }
  }, 5000);
}

function stopAfkWatcher() {
  if (state.online.afkInterval) {
    clearInterval(state.online.afkInterval);
    state.online.afkInterval = null;
  }
}

function bindConnectivityWatchers() {
  if (!state.online.onlineStatusBound) {
    const syncNet = () => setNetworkBadge(navigator.onLine);
    window.addEventListener("online", syncNet);
    window.addEventListener("offline", syncNet);
    syncNet();
    state.online.onlineStatusBound = true;
  }
  if (!state.online.beforeUnloadBound) {
    window.addEventListener("beforeunload", () => {
      if (state.online.connected) leaveRoom(true);
    });
    state.online.beforeUnloadBound = true;
  }
  if (!state.online.visibilityListenerBound) {
    document.addEventListener("visibilitychange", () => {
      if (!state.online.connected || !state.online.myPlayerRef) return;
      state.online.myPlayerRef.update({
        status: document.hidden ? "afk" : (state.online.matchStatus === "running" ? "answering" : (state.online.ready ? "ready" : "waiting")),
        updatedAt: firebase.database.ServerValue.TIMESTAMP
      });
    });
    state.online.visibilityListenerBound = true;
  }
}

function subscribeOnlineRoom() {
  if (!state.online.connected || !state.online.roomRef || state.online.listenersReady) return;
  state.online.listenersReady = true;

  const playersCb = snap => {
    const val = snap.val() || {};
    const prevIds = new Set(Object.keys(state.online.peers));
    const peers = {};
    Object.entries(val).forEach(([id, item]) => {
      if (id === state.online.id) return;
      peers[id] = item;
      if (!prevIds.has(id)) showPopup(`+ ${item.name || t("playerJoined")}`);
      sanitizeIncomingOnlineState(id, item);
      if (item.status === "finished") {
        const answers = Math.max(1, item.answers || 0);
        state.online.finishes[id] = {
          player: item.name || id,
          score: item.score || 0,
          accuracy: Math.round(((item.correct || 0) / answers) * 100),
          mistakes: item.mistakes || 0,
          xp: item.xp || 0
        };
      }
    });
    const me = val[state.online.id];
    if (me && me.sessionToken && state.online.sessionToken && me.sessionToken !== state.online.sessionToken) {
      showPopup(t("duplicateSession"));
      leaveRoom(true);
      return;
    }
    prevIds.forEach(id => {
      if (!peers[id]) showPopup(`- ${t("playerLeft")}`);
    });
    state.online.peers = peers;
    recalcHost();
    enforceRoomLivenessFromHost();
    updateRoomUI();
  };
  state.online.playersRef.on("value", playersCb);
  state.online.unsubscribers.push(() => state.online.playersRef && state.online.playersRef.off("value", playersCb));

  const stateCb = snap => updateRoomStateFromSnapshot(snap.val() || {});
  state.online.stateRef.on("value", stateCb);
  state.online.unsubscribers.push(() => state.online.stateRef && state.online.stateRef.off("value", stateCb));

  const eventsRef = state.online.eventsRef.limitToLast(20);
  const eventCb = snap => {
    const msg = snap.val();
    if (!msg || msg.from === state.online.id) return;
    if (msg.type === "event-attack" && msg.targetId === state.online.id) {
      applyIncomingOnlineAttack(msg.eventKey);
      return;
    }
    if (msg.type === "finish") {
      state.online.finishes[msg.from] = {
        player: msg.player || state.online.peers[msg.from]?.name || msg.from,
        score: msg.score || 0,
        accuracy: msg.accuracy || 0,
        mistakes: msg.mistakes || 0,
        xp: msg.xp || 0
      };
      renderOnlineRanking();
    }
  };
  eventsRef.on("child_added", eventCb);
  state.online.unsubscribers.push(() => eventsRef && eventsRef.off("child_added", eventCb));
}

function enforceRoomLivenessFromHost() {
  if (!state.online.isHost || !state.online.playersRef) return;
  const now = Date.now();
  Object.entries(state.online.peers).forEach(([id, peer]) => {
    const hb = safeNumber(peer.heartbeatAt, 0);
    const inactive = now - hb > ONLINE_LIMITS.afkMs;
    if (inactive) {
      state.online.playersRef.child(id).remove();
    }
  });
}

async function setReadyOnline() {
  if (!state.online.connected || !state.online.myPlayerRef) return;
  if (state.online.matchStatus !== "lobby") return;
  state.online.ready = !state.online.ready;
  const nextStatus = state.online.ready ? "ready" : "waiting";
  await state.online.myPlayerRef.update({
    ready: state.online.ready,
    status: nextStatus,
    updatedAt: firebase.database.ServerValue.TIMESTAMP
  });
  showPopup(state.online.ready ? t("roomReadyOn") : t("roomReadyOff"));
  updateRoomUI();
}

function sendOnline(payload) {
  if (!state.online.connected || !state.online.eventsRef) return;
  const now = Date.now();
  const minDelay = payload.type === "event-attack" ? ONLINE_LIMITS.eventPublishMs : ONLINE_LIMITS.statePublishMs;
  if (now - state.online.lastEventAt < minDelay) return;
  state.online.lastEventAt = now;
  const fullPayload = {
    ...payload,
    room: state.online.roomCode,
    at: firebase.database.ServerValue.TIMESTAMP
  };
  state.online.eventsRef.push(fullPayload);
}

function handleOnlineMessage(msg) {
  if (!msg || msg.from === state.online.id) return;
  if (msg.type === "start-match") {
    startOnlineMatch(msg.plan, msg.startAt);
    return;
  }
  if (msg.type === "state") {
    sanitizeIncomingOnlineState(msg.from, msg);
    updateOnlineBoards();
    return;
  }
  if (msg.type === "event-attack" && msg.targetId === state.online.id) {
    applyIncomingOnlineAttack(msg.eventKey);
    return;
  }
  if (msg.type === "finish") {
    state.online.finishes[msg.from] = {
      player: state.online.peers[msg.from]?.name || msg.from,
      score: msg.score || 0,
      accuracy: msg.accuracy || 0,
      mistakes: msg.mistakes || 0,
      xp: msg.xp || 0
    };
    renderOnlineRanking();
  }
}

function initIntro() {
  const ctx = dom.introCanvas.getContext("2d");
  const w = (dom.introCanvas.width = window.innerWidth);
  const h = (dom.introCanvas.height = window.innerHeight);
  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2 + 0.6,
    v: 0.2 + Math.random() * 0.8
  }));
  const typeText = "Booting neural quiz core...";
  let typed = 0;
  const typing = setInterval(() => {
    typed += 1;
    dom.introTyping.textContent = typeText.slice(0, typed);
    if (typed >= typeText.length) clearInterval(typing);
  }, 55);
  AudioFX.introSound();

  let progress = 0;
  const loader = setInterval(() => {
    progress += 2 + Math.random() * 5;
    dom.introLoaderBar.style.width = `${Math.min(100, progress)}%`;
    if (progress >= 100) {
      clearInterval(loader);
      setTimeout(() => {
        dom.introScreen.classList.remove("active");
        state.introDone = true;
      }, 650);
    }
  }, 90);

  function animate() {
    ctx.clearRect(0, 0, w, h);
    stars.forEach(s => {
      s.y += s.v;
      if (s.y > h) s.y = 0;
      ctx.fillStyle = "rgba(120, 210, 255, 0.7)";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    if (!state.introDone) requestAnimationFrame(animate);
  }
  animate();
}

function initMatrixRain() {
  const canvas = dom.matrixCanvas;
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let columns = [];
  const chars = "アイウエオカキクケコサシスセソ0123456789PYTHON{}[]<>=".split("");

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Array(Math.floor(width / 18)).fill(0);
  }
  resize();
  window.addEventListener("resize", resize);

  setInterval(() => {
    ctx.fillStyle = "rgba(4, 6, 10, 0.08)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "rgba(0,255,149,0.55)";
    ctx.font = "14px monospace";
    columns.forEach((y, i) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * 18;
      ctx.fillText(text, x, y);
      columns[i] = y > height + Math.random() * 500 ? 0 : y + 18;
    });
  }, 42);
}

function initParticles() {
  const canvas = dom.particlesCanvas;
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  const particles = [];
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);
  for (let i = 0; i < 90; i += 1) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 0.8,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4
    });
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.fillStyle = "rgba(120, 205, 255, 0.65)";
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

function drawConfetti() {
  const canvas = dom.fxCanvas;
  const ctx = canvas.getContext("2d");
  const w = (canvas.width = window.innerWidth);
  const h = (canvas.height = window.innerHeight);
  const confetti = Array.from({ length: 44 }, () => ({
    x: w / 2 + (Math.random() - 0.5) * 180,
    y: h / 2,
    vx: (Math.random() - 0.5) * 8,
    vy: -2 - Math.random() * 6,
    life: 50 + Math.random() * 20,
    color: ["#22d3ee", "#ff4ecd", "#4f7dff", "#00ff95"][Math.floor(Math.random() * 4)]
  }));
  let frame = 0;
  function burst() {
    ctx.clearRect(0, 0, w, h);
    confetti.forEach(c => {
      c.x += c.vx;
      c.y += c.vy;
      c.vy += 0.13;
      c.life -= 1;
      ctx.fillStyle = c.color;
      ctx.fillRect(c.x, c.y, 4, 9);
    });
    frame += 1;
    if (frame < 56) requestAnimationFrame(burst);
    else ctx.clearRect(0, 0, w, h);
  }
  burst();
}

function initParallax() {
  document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    document.querySelectorAll(".bg-light").forEach((el, i) => {
      const factor = (i + 1) * 0.8;
      el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });
}

function initTilt() {
  dom.quizCard.addEventListener("mousemove", e => {
    const rect = dom.quizCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * 6;
    const rotX = (0.5 - y) * 6;
    dom.quizCard.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });
  dom.quizCard.addEventListener("mouseleave", () => {
    dom.quizCard.style.transform = "rotateX(0) rotateY(0)";
  });
}

function bindEvents() {
  dom.modeButtons.forEach(btn => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
    btn.addEventListener("mouseenter", () => {
      AudioFX.playSample("hover", 0.12);
      AudioFX.tone(760, 0.05, "triangle", 0.04);
    });
  });
  dom.langButtons.forEach(btn => btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang;
    applyTranslations();
    saveProfile();
  }));
  dom.sortButtons.forEach(btn => btn.addEventListener("click", () => {
    state.currentSort = btn.dataset.sort;
    dom.sortButtons.forEach(b => b.classList.toggle("active", b.dataset.sort === state.currentSort));
    renderLeaderboard();
  }));
  dom.playerForm.addEventListener("submit", startGameFromForm);
  dom.hint5050.addEventListener("click", use50);
  dom.hintSkip.addEventListener("click", useSkip);
  dom.hintAudience.addEventListener("click", useAudience);
  dom.muteBtn.addEventListener("click", toggleMute);
  dom.playAgainBtn.addEventListener("click", () => switchScreen("hero"));
  dom.spinEventBtn.addEventListener("click", spinBattleEvent);
  dom.downloadPngBtn.addEventListener("click", downloadPng);
  dom.downloadPdfBtn.addEventListener("click", downloadPdf);
  dom.createRoomBtn.addEventListener("click", () => createRoom().catch(() => showPopup(t("roomCreateFail"))));
  dom.joinRoomBtn.addEventListener("click", () => joinRoom().catch(() => showPopup(t("roomJoinFail"))));
  dom.readyBtn.addEventListener("click", () => setReadyOnline().catch(() => showPopup(t("roomJoinFail"))));
  dom.leaveRoomBtn.addEventListener("click", () => leaveRoom().catch(() => showPopup(t("roomJoinFail"))));
  dom.avatarRandomBtn.addEventListener("click", () => {
    const pickLocal = Math.random() > 0.45;
    if (pickLocal) {
      const localIndex = 1 + Math.floor(Math.random() * 6);
      state.profile.avatarSeed = `avatar-${localIndex}.png`;
    } else {
      state.profile.avatarSeed = Math.random().toString(36).slice(2, 10);
    }
    updateProfilePanel();
    saveProfile();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearInterval(state.timerInterval);
    else if (state.gameActive && dom.quizScreen.classList.contains("active")) startTimer();
  });
}

function init() {
  AudioFX.preload();
  preloadImage("certBackground", PATHS.certificates.background);
  preloadImage("certFrame", PATHS.certificates.frame);
  preloadImage("certSeal", PATHS.certificates.seal);
  preloadImage("certSignature", PATHS.certificates.signature);
  loadProfile();
  bindEvents();
  initIntro();
  initMatrixRain();
  initParticles();
  initParallax();
  initTilt();
  setMode("classic");
  dom.firstName.value = state.profile.firstName || "";
  dom.lastName.value = state.profile.lastName || "";
  dom.muteBtn.textContent = state.muted ? "🔈" : "🔊";
  updateProfilePanel();
  renderMedals();
  renderAchievements();
  renderLeaderboard();
  applyTranslations();
  updateRoomUI();
  setNetworkBadge(navigator.onLine);
  setReconnectPopup(false);
  setOnlineLoading(false);
  if (!FIREBASE_CONFIG.apiKey) {
    console.warn("Set FIREBASE_CONFIG in script.js or window.PY_ARENA_FIREBASE_CONFIG before script load.");
  }
}

init();
