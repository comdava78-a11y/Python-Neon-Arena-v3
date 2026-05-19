const STORAGE = {
  profile: "pyArenaProfileV3",
  history: "pyArenaHistoryV3",
  achievements: "pyArenaAchievementsV3",
  leaderboard: "pyArenaLeaderboardV3",
  settings: "pyArenaSettingsV3"
};

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDipHSGi4i9yUJdnBNR_aoiPOH7s3DSexs",
  authDomain: "ddzz-502a7.firebaseapp.com",
  databaseURL: "https://ddzz-502a7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ddzz-502a7",
  storageBucket: "ddzz-502a7.firebasestorage.app",
  messagingSenderId: "475020150812",
  appId: "1:475020150812:web:b4e7eed39ac111e5bd37d9",
  measurementId: "G-3R1FZMXHJR"
};

const FIREBASE_CONFIG = window.PY_ARENA_FIREBASE_CONFIG || DEFAULT_FIREBASE_CONFIG;

const ONLINE_ROOT = "pyArenaOnlineV1";
const PATHS = {
  assets: {
    defaultAvatar: "assets/avatars/default.svg",
    localAvatarPrefix: "assets/avatars/",
    localAvatarFiles: [
      "avatar-1.png",
      "avatar-2.png",
      "avatar-3.png",
      "avatar-4.png",
      "avatar-5.png",
      "avatar-6.png"
    ],
    medals: {
      Bronze: ["assets/ui/medal-bronze.svg", "assets/medal-bronze.svg"],
      Silver: ["assets/ui/medal-silver.svg", "assets/medal-silver.svg"],
      Gold: ["assets/ui/medal-gold.svg", "assets/medal-gold.svg"],
      Diamond: ["assets/ui/medal-diamond.svg", "assets/medal-diamond.svg"],
      Legendary: ["assets/ui/medal-legendary.svg", "assets/medal-legendary.svg"]
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
    frame: "",
    seal: "",
    signature: ""
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

const BASE_QUESTIONS = [
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

function localizedText(text) {
  return { ru: text, en: text, uz: text };
}

function localizedOptions(options) {
  return { ru: options.slice(), en: options.slice(), uz: options.slice() };
}

function makeLocalizedText(ru, en, uz) {
  return { ru, en, uz };
}

function makeLocalizedOptions(ru, en, uz) {
  return { ru: ru.slice(), en: en.slice(), uz: uz.slice() };
}

function createQuestion(id, level, question, options, correct) {
  return {
    id,
    level,
    q: localizedText(question),
    options: localizedOptions(options),
    correct
  };
}

const EXTRA_QUESTION_DEFS = [
  { level: "Junior", q: makeLocalizedText("Каким ключевым словом объявляют функцию?", "Which keyword defines a function?", "Funksiya qaysi kalit so'z bilan e'lon qilinadi?"), options: makeLocalizedOptions(["def", "func", "function", "define"], ["def", "func", "function", "define"], ["def", "func", "function", "define"]), correct: 0 },
  { level: "Junior", q: makeLocalizedText("Какой тип хранит пары ключ-значение?", "Which type stores key-value pairs?", "Qaysi tur kalit-qiymat juftliklarini saqlaydi?"), options: makeLocalizedOptions(["list", "set", "dict", "tuple"], ["list", "set", "dict", "tuple"], ["list", "set", "dict", "tuple"]), correct: 2 },
  { level: "Junior", q: makeLocalizedText("Как преобразовать строку '42' в число?", "How to convert string '42' to int?", "'42' satrini butun songa qanday o'tkazish mumkin?"), options: makeLocalizedOptions(["int('42')", "str(42)", "float('42')", "parseInt('42')"], ["int('42')", "str(42)", "float('42')", "parseInt('42')"], ["int('42')", "str(42)", "float('42')", "parseInt('42')"]), correct: 0 },
  { level: "Junior", q: makeLocalizedText("Какая функция выводит текст в консоль?", "Which function prints output to console?", "Qaysi funksiya konsolga chiqaradi?"), options: makeLocalizedOptions(["echo()", "println()", "print()", "write()"], ["echo()", "println()", "print()", "write()"], ["echo()", "println()", "print()", "write()"]), correct: 2 },
  { level: "Junior", q: makeLocalizedText("Что вернет type(3.14)?", "What does type(3.14) return?", "type(3.14) nima qaytaradi?"), options: makeLocalizedOptions(["int", "float", "str", "bool"], ["int", "float", "str", "bool"], ["int", "float", "str", "bool"]), correct: 1 },
  { level: "Junior", q: makeLocalizedText("Какое значение является логической ложью?", "Which value is boolean false?", "Qaysi qiymat mantiqiy yolg'on?"), options: makeLocalizedOptions(["'False'", "False", "0.0 only", "None only"], ["'False'", "False", "0.0 only", "None only"], ["'False'", "False", "0.0 only", "None only"]), correct: 1 },
  { level: "Junior", q: makeLocalizedText("Как начинается цикл for в Python?", "How do you start a for loop?", "Pythonda for sikli qanday boshlanadi?"), options: makeLocalizedOptions(["for i in range(5):", "foreach i in range(5)", "for(i=0;i<5;i++)", "loop i in range(5):"], ["for i in range(5):", "foreach i in range(5)", "for(i=0;i<5;i++)", "loop i in range(5):"], ["for i in range(5):", "foreach i in range(5)", "for(i=0;i<5;i++)", "loop i in range(5):"]), correct: 0 },
  { level: "Junior", q: makeLocalizedText("Какой оператор означает 'не равно'?", "Which operator means 'not equal'?", "Qaysi operator 'teng emas' degani?"), options: makeLocalizedOptions(["<>", "!==", "!=", "~="], ["<>", "!==", "!=", "~="], ["<>", "!==", "!=", "~="]), correct: 2 },
  { level: "Junior", q: makeLocalizedText("Что вернет len([])?", "What does len([]) return?", "len([]) nima qaytaradi?"), options: makeLocalizedOptions(["0", "1", "None", "Error"], ["0", "1", "None", "Error"], ["0", "1", "None", "Error"]), correct: 0 },
  { level: "Junior", q: makeLocalizedText("Что создаёт пустой словарь?", "Which one creates an empty dict?", "Bo'sh dict nimadan yaratiladi?"), options: makeLocalizedOptions(["[]", "()", "{}", "set()"], ["[]", "()", "{}", "set()"], ["[]", "()", "{}", "set()"]), correct: 2 },
  { level: "Junior", q: makeLocalizedText("Что выдаст list(range(3))?", "What does list(range(3)) produce?", "list(range(3)) natijasi nima?"), options: makeLocalizedOptions(["[1,2,3]", "[0,1,2]", "(0,1,2)", "[0,1,2,3]"], ["[1,2,3]", "[0,1,2]", "(0,1,2)", "[0,1,2,3]"], ["[1,2,3]", "[0,1,2]", "(0,1,2)", "[0,1,2,3]"]), correct: 1 },
  { level: "Junior", q: makeLocalizedText("Как получить ввод пользователя?", "How to read input from user?", "Foydalanuvchi kiritishini qanday olish mumkin?"), options: makeLocalizedOptions(["scan()", "input()", "read()", "prompt()"], ["scan()", "input()", "read()", "prompt()"], ["scan()", "input()", "read()", "prompt()"]), correct: 1 },
  { level: "Junior", q: makeLocalizedText("Какой результат у 10 // 3?", "Which value is returned by 10 // 3?", "10 // 3 natijasi qancha?"), options: makeLocalizedOptions(["3.33", "3", "4", "1"], ["3.33", "3", "4", "1"], ["3.33", "3", "4", "1"]), correct: 1 },
  { level: "Junior", q: makeLocalizedText("Какой блок обрабатывает исключения?", "Which statement handles exceptions?", "Qaysi operator xatolarni ushlaydi?"), options: makeLocalizedOptions(["catch", "except", "rescue", "trap"], ["catch", "except", "rescue", "trap"], ["catch", "except", "rescue", "trap"]), correct: 1 },
  { level: "Junior", q: makeLocalizedText("Как создать пустой список?", "How to create an empty list?", "Bo'sh listni qanday yaratish mumkin?"), options: makeLocalizedOptions(["{}", "[]", "()", "list{}"], ["{}", "[]", "()", "list{}"], ["{}", "[]", "()", "list{}"]), correct: 1 },
  { level: "Middle", q: makeLocalizedText("Что возвращает zip([1,2], ['a','b'])?", "What does zip([1,2], ['a','b']) return iterator of?", "zip([1,2], ['a','b']) nimaga iterator qaytaradi?"), options: makeLocalizedOptions(["pairs", "sum", "dict only", "set"], ["pairs", "sum", "dict only", "set"], ["pairs", "sum", "dict only", "set"]), correct: 0 },
  { level: "Middle", q: makeLocalizedText("Какой метод удаляет и возвращает последний элемент списка?", "Which method removes and returns last list item?", "Ro'yxatning oxirgi elementini qaysi metod olib qaytaradi?"), options: makeLocalizedOptions(["pop()", "remove()", "delete()", "shift()"], ["pop()", "remove()", "delete()", "shift()"], ["pop()", "remove()", "delete()", "shift()"]), correct: 0 },
  { level: "Middle", q: makeLocalizedText("Чему равно 'py' * 3?", "What is result of 'py' * 3?", "'py' * 3 natijasi nima?"), options: makeLocalizedOptions(["'pypypy'", "'py3'", "'py py py'", "Error"], ["'pypypy'", "'py3'", "'py py py'", "Error"], ["'pypypy'", "'py3'", "'py py py'", "Error"]), correct: 0 },
  { level: "Middle", q: makeLocalizedText("Какой встроенный вызов создаёт итератор из последовательности?", "Which built-in creates an iterator from a sequence?", "Ketma-ketlikdan iteratorni qaysi built-in yaratadi?"), options: makeLocalizedOptions(["iter()", "next()", "yield()", "gen()"], ["iter()", "next()", "yield()", "gen()"], ["iter()", "next()", "yield()", "gen()"]), correct: 0 },
  { level: "Middle", q: makeLocalizedText("Что вернёт dict.get('x'), если ключа нет и default не задан?", "What does dict.get('x') return if missing and no default?", "Kalit yo'q bo'lsa dict.get('x') nima qaytaradi?"), options: makeLocalizedOptions(["KeyError", "0", "None", "False"], ["KeyError", "0", "None", "False"], ["KeyError", "0", "None", "False"]), correct: 2 },
  { level: "Middle", q: makeLocalizedText("Зачем нужен блок __name__ == '__main__'?", "What is the purpose of __name__ == '__main__'?", "__name__ == '__main__' blokining maqsadi nima?"), options: makeLocalizedOptions(["import speed", "entry point check", "typing", "async control"], ["import speed", "entry point check", "typing", "async control"], ["import speed", "entry point check", "typing", "async control"]), correct: 1 },
  { level: "Middle", q: makeLocalizedText("Что вернёт sorted([3,1,2])?", "What does sorted([3,1,2]) return?", "sorted([3,1,2]) nima qaytaradi?"), options: makeLocalizedOptions(["[3,1,2]", "[1,2,3]", "(1,2,3)", "{1,2,3}"], ["[3,1,2]", "[1,2,3]", "(1,2,3)", "{1,2,3}"], ["[3,1,2]", "[1,2,3]", "(1,2,3)", "{1,2,3}"]), correct: 1 },
  { level: "Middle", q: makeLocalizedText("Какая коллекция хранит только уникальные элементы?", "Which collection keeps unique elements?", "Qaysi to'plam faqat noyob elementlarni saqlaydi?"), options: makeLocalizedOptions(["list", "tuple", "set", "dict"], ["list", "tuple", "set", "dict"], ["list", "tuple", "set", "dict"]), correct: 2 },
  { level: "Middle", q: makeLocalizedText("Что возвращает map(function, iterable) в Python 3?", "What does map(function, iterable) return in Python 3?", "Python 3 da map(...) nima qaytaradi?"), options: makeLocalizedOptions(["list", "iterator", "tuple", "dict"], ["list", "iterator", "tuple", "dict"], ["list", "iterator", "tuple", "dict"]), correct: 1 },
  { level: "Middle", q: makeLocalizedText("Какой модуль используют для регулярных выражений?", "Which module is used for regular expressions?", "Muntazam ifodalar uchun qaysi modul ishlatiladi?"), options: makeLocalizedOptions(["regex", "re", "regexp", "rx"], ["regex", "re", "regexp", "rx"], ["regex", "re", "regexp", "rx"]), correct: 1 },
  { level: "Middle", q: makeLocalizedText("Что делает pass?", "What does pass do?", "pass nima qiladi?"), options: makeLocalizedOptions(["stops loop", "skips current iteration", "no-op placeholder", "returns None"], ["stops loop", "skips current iteration", "no-op placeholder", "returns None"], ["stops loop", "skips current iteration", "no-op placeholder", "returns None"]), correct: 2 },
  { level: "Middle", q: makeLocalizedText("Какой оператор переходит к следующей итерации цикла?", "Which statement skips to next loop iteration?", "Siklning keyingi iteratsiyasiga qaysi operator o'tadi?"), options: makeLocalizedOptions(["continue", "pass", "break", "next"], ["continue", "pass", "break", "next"], ["continue", "pass", "break", "next"]), correct: 0 },
  { level: "Middle", q: makeLocalizedText("Как объединить два словаря в современном Python?", "How to merge two dicts in modern Python?", "Zamonaviy Python da ikki dictni qanday birlashtirish mumkin?"), options: makeLocalizedOptions(["d1 + d2", "d1.merge(d2)", "{**d1, **d2}", "dict.join(d1,d2)"], ["d1 + d2", "d1.merge(d2)", "{**d1, **d2}", "dict.join(d1,d2)"], ["d1 + d2", "d1.merge(d2)", "{**d1, **d2}", "dict.join(d1,d2)"]), correct: 2 },
  { level: "Middle", q: makeLocalizedText("Что проверяет isinstance(x, int)?", "What does isinstance(x, int) check?", "isinstance(x, int) nimani tekshiradi?"), options: makeLocalizedOptions(["exact type only", "subclass-compatible type check", "value range", "memory size"], ["exact type only", "subclass-compatible type check", "value range", "memory size"], ["exact type only", "subclass-compatible type check", "value range", "memory size"]), correct: 1 },
  { level: "Middle", q: makeLocalizedText("Какое утверждение верно для tuple?", "Which one is true about tuples?", "Tuple haqida qaysi fikr to'g'ri?"), options: makeLocalizedOptions(["mutable", "ordered immutable", "unordered", "key-value only"], ["mutable", "ordered immutable", "unordered", "key-value only"], ["mutable", "ordered immutable", "unordered", "key-value only"]), correct: 1 },
  { level: "Senior", q: makeLocalizedText("Что означает @staticmethod?", "What does @staticmethod mean?", "@staticmethod nimani anglatadi?"), options: makeLocalizedOptions(["method gets cls", "method gets self", "no implicit self/cls", "async method"], ["method gets cls", "method gets self", "no implicit self/cls", "async method"], ["method gets cls", "method gets self", "no implicit self/cls", "async method"]), correct: 2 },
  { level: "Senior", q: makeLocalizedText("Что вернёт next(iter([10,20]))?", "What is result of next(iter([10,20]))?", "next(iter([10,20])) natijasi nima?"), options: makeLocalizedOptions(["20", "10", "0", "Error"], ["20", "10", "0", "Error"], ["20", "10", "0", "Error"]), correct: 1 },
  { level: "Senior", q: makeLocalizedText("Какой метод формирует строковое представление объекта для пользователя?", "Which method customizes object string for users?", "Obyektning foydalanuvchi uchun matn ko'rinishini qaysi metod belgilaydi?"), options: makeLocalizedOptions(["__repr__", "__str__", "__format__", "__bytes__"], ["__repr__", "__str__", "__format__", "__bytes__"], ["__repr__", "__str__", "__format__", "__bytes__"]), correct: 1 },
  { level: "Senior", q: makeLocalizedText("Что обычно должен возвращать __repr__?", "What does __repr__ ideally provide?", "__repr__ odatda nimani qaytarishi kerak?"), options: makeLocalizedOptions(["user-friendly text", "unambiguous debug representation", "JSON only", "bytes"], ["user-friendly text", "unambiguous debug representation", "JSON only", "bytes"], ["user-friendly text", "unambiguous debug representation", "JSON only", "bytes"]), correct: 1 },
  { level: "Senior", q: makeLocalizedText("Какой протокол нужен для 'with'?", "Which protocol enables 'with' statement?", "'with' uchun qaysi protokol kerak?"), options: makeLocalizedOptions(["iterator protocol", "descriptor protocol", "context manager protocol", "awaitable protocol"], ["iterator protocol", "descriptor protocol", "context manager protocol", "awaitable protocol"], ["iterator protocol", "descriptor protocol", "context manager protocol", "awaitable protocol"]), correct: 2 },
  { level: "Senior", q: makeLocalizedText("Что такое closure?", "What is a closure?", "Closure nima?"), options: makeLocalizedOptions(["class inside class", "function with preserved outer scope", "global variable", "decorator only"], ["class inside class", "function with preserved outer scope", "global variable", "decorator only"], ["class inside class", "function with preserved outer scope", "global variable", "decorator only"]), correct: 1 },
  { level: "Senior", q: makeLocalizedText("Что делает functools.lru_cache?", "What does functools.lru_cache do?", "functools.lru_cache nima qiladi?"), options: makeLocalizedOptions(["encrypts data", "memoizes function results", "sorts arguments", "parallelizes calls"], ["encrypts data", "memoizes function results", "sorts arguments", "parallelizes calls"], ["encrypts data", "memoizes function results", "sorts arguments", "parallelizes calls"]), correct: 1 },
  { level: "Senior", q: makeLocalizedText("В чем отличие list comprehension от generator expression?", "What is the difference between list and generator expression?", "List comprehension va generator expression o'rtasidagi farq nima?"), options: makeLocalizedOptions(["none", "generator is lazy", "list is lazy", "generator is mutable"], ["none", "generator is lazy", "list is lazy", "generator is mutable"], ["none", "generator is lazy", "list is lazy", "generator is mutable"]), correct: 1 },
  { level: "Senior", q: makeLocalizedText("Как корректно запланировать выполнение корутины?", "Which call schedules coroutine execution?", "Korutinani ishga tushirish uchun qaysi chaqiriq to'g'ri?"), options: makeLocalizedOptions(["await asyncio.create_task(coro())", "threading.Thread(coro)", "run(coro) always", "yield from task"], ["await asyncio.create_task(coro())", "threading.Thread(coro)", "run(coro) always", "yield from task"], ["await asyncio.create_task(coro())", "threading.Thread(coro)", "run(coro) always", "yield from task"]), correct: 0 },
  { level: "Senior", q: makeLocalizedText("Что делает raise from?", "What does raise from do?", "raise from nima qiladi?"), options: makeLocalizedOptions(["silences exception", "chains exceptions explicitly", "retries function", "marks warning"], ["silences exception", "chains exceptions explicitly", "retries function", "marks warning"], ["silences exception", "chains exceptions explicitly", "retries function", "marks warning"]), correct: 1 },
  { level: "Senior", q: makeLocalizedText("Какой dunder отвечает за fallback-доступ к атрибутам?", "Which dunder controls attribute access fallback?", "Atributga fallback murojaat uchun qaysi dunder javob beradi?"), options: makeLocalizedOptions(["__getattr__", "__setattr__", "__dir__", "__slots__"], ["__getattr__", "__setattr__", "__dir__", "__slots__"], ["__getattr__", "__setattr__", "__dir__", "__slots__"]), correct: 0 },
  { level: "Senior", q: makeLocalizedText("Для чего в основном нужен __slots__?", "What does __slots__ primarily help with?", "__slots__ asosan nimaga yordam beradi?"), options: makeLocalizedOptions(["network speed", "reduce instance memory / attribute control", "thread safety", "serialization only"], ["network speed", "reduce instance memory / attribute control", "thread safety", "serialization only"], ["network speed", "reduce instance memory / attribute control", "thread safety", "serialization only"]), correct: 1 },
  { level: "Senior", q: makeLocalizedText("Что такое monkey patching?", "What is monkey patching?", "Monkey patching nima?"), options: makeLocalizedOptions(["runtime modification of objects/modules", "compiling to C", "type inference", "bytecode encryption"], ["runtime modification of objects/modules", "compiling to C", "type inference", "bytecode encryption"], ["runtime modification of objects/modules", "compiling to C", "type inference", "bytecode encryption"]), correct: 0 },
  { level: "Senior", q: makeLocalizedText("Что возвращает asyncio.gather?", "What does asyncio.gather return?", "asyncio.gather nima qaytaradi?"), options: makeLocalizedOptions(["dict", "set", "results of awaitables", "generator of threads"], ["dict", "set", "results of awaitables", "generator of threads"], ["dict", "set", "results of awaitables", "generator of threads"]), correct: 2 },
  { level: "Senior", q: makeLocalizedText("Какую проблему в общем состоянии решают блокировки?", "Which isolation level issue is solved by locks in shared state?", "Umumiy holatda blokirovkalar qaysi muammoni hal qiladi?"), options: makeLocalizedOptions(["syntax errors", "race conditions", "import cycles", "type mismatch"], ["syntax errors", "race conditions", "import cycles", "type mismatch"], ["syntax errors", "race conditions", "import cycles", "type mismatch"]), correct: 1 }
];

const EXTRA_QUESTIONS = EXTRA_QUESTION_DEFS.map((def, idx) => ({
  id: 100 + idx,
  level: def.level,
  q: def.q,
  options: def.options,
  correct: def.correct
}));

const QUESTIONS = [...BASE_QUESTIONS, ...EXTRA_QUESTIONS];

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
  currentQuestion: null,
  survivalPools: { Junior: [], Middle: [], Senior: [] },
  survivalLastId: null,
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
    myEventRef: null,
    gameMode: "simple",
    modeState: {},
    marketInterval: null,
    marketCooldownUntil: 0
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
  boardSortButtons: Array.from(document.querySelectorAll(".board-sort-btn")),
  openLeaderboardBtn: document.getElementById("openLeaderboardBtn"),
  closeLeaderboardBtn: document.getElementById("closeLeaderboardBtn"),
  leaderboardModal: document.getElementById("leaderboardModal"),
  leaderboardModalList: document.getElementById("leaderboardModalList"),
  roomInput: document.getElementById("roomInput"),
  onlineGameMode: document.getElementById("onlineGameMode"),
  createRoomBtn: document.getElementById("createRoomBtn"),
  joinRoomBtn: document.getElementById("joinRoomBtn"),
  readyBtn: document.getElementById("readyBtn"),
  leaveRoomBtn: document.getElementById("leaveRoomBtn"),
  copyInviteBtn: document.getElementById("copyInviteBtn"),
  openInviteBtn: document.getElementById("openInviteBtn"),
  roomQrWrap: document.getElementById("roomQrWrap"),
  roomQrImage: document.getElementById("roomQrImage"),
  startBtn: document.getElementById("startBtn"),
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
  onlineModeBadge: document.getElementById("onlineModeBadge"),
  modeStatusBar: document.getElementById("modeStatusBar"),
  cryptoActions: document.getElementById("cryptoActions"),
  cryptoHackBtn: document.getElementById("cryptoHackBtn"),
  cryptoShieldBtn: document.getElementById("cryptoShieldBtn"),
  cryptoMineBtn: document.getElementById("cryptoMineBtn"),
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
    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
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
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
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

let inviteQrInstance = null;

const EXTRA_I18N = {
  ru: {
    leaderboardOpen: "Таблица лидеров",
    onlineSimpleOnly: "Режим: Простой",
    sortTime: "По времени",
    sortDate: "По дате"
  },
  en: {
    leaderboardOpen: "Leaderboard",
    onlineSimpleOnly: "Mode: Simple",
    sortTime: "By Time",
    sortDate: "By Date"
  },
  uz: {
    leaderboardOpen: "Liderlar jadvali",
    onlineSimpleOnly: "Rejim: Oddiy",
    sortTime: "Vaqt bo'yicha",
    sortDate: "Sana bo'yicha"
  }
};

Object.assign(EXTRA_I18N.ru, {
  copyInvite: "Копировать приглашение",
  openInvite: "Открыть приглашение",
  sortXp: "По XP",
  sortSurvival: "Выживание"
});
Object.assign(EXTRA_I18N.en, {
  copyInvite: "Copy Invite",
  openInvite: "Open Invite",
  sortXp: "By XP",
  sortSurvival: "Survival"
});
Object.assign(EXTRA_I18N.uz, {
  copyInvite: "Taklifni nusxalash",
  openInvite: "Taklifni ochish",
  sortXp: "XP bo'yicha",
  sortSurvival: "Survival"
});

function t(key) {
  return EXTRA_I18N[state.lang]?.[key] || I18N[state.lang][key] || key;
}

function getDefaultProfile() {
  return {
    firstName: "",
    lastName: "",
    avatarSeed: "avatar-1.png",
    level: 1,
    totalXP: 0,
    wins: 0,
    mistakes: 0,
    totalAnswers: 0,
    totalCorrect: 0,
    favoriteMode: "classic",
    modeCount: { classic: 0, online: 0 },
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
  if (typeof settings.muted === "string") {
    state.muted = settings.muted === "true";
  } else {
    state.muted = Boolean(settings.muted);
  }
  const allowed = new Set(["default.svg", ...PATHS.assets.localAvatarFiles]);
  if (!allowed.has(state.profile.avatarSeed)) {
    state.profile.avatarSeed = "avatar-1.png";
    saveProfile();
  }
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
  dom.profileName.textContent = fullName;
  dom.profileLevel.textContent = String(p.level);
  dom.profileXp.textContent = String(p.totalXP);
  dom.profileWins.textContent = String(p.wins);
  dom.profileMistakes.textContent = String(p.mistakes);
  dom.profileAccuracy.textContent = `${accuracy}%`;
  dom.profileFavoriteMode.textContent = p.favoriteMode;
  dom.avatarImage.src = getAvatarSrc(p.avatarSeed);
  dom.avatarImage.onerror = () => {
    dom.avatarImage.onerror = null;
    dom.avatarImage.src = PATHS.assets.defaultAvatar;
  };
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

function renderPlayerAvatar(seed, name, size = 40) {
  const safeName = escapeHtml(name || "Player");
  return `
    <span class="player-avatar-wrap" style="width:${size}px;height:${size}px">
      <img class="player-avatar" src="${getAvatarSrc(seed)}" alt="${safeName}" width="${size}" height="${size}" loading="lazy">
    </span>
  `;
}

function normalizeOnlinePlayer(id, data = {}) {
  return {
    id,
    uid: data.uid || "",
    name: data.name || data.fullName || id || "Player",
    avatarSeed: data.avatarSeed || "avatar-1.png",
    status: data.status || "waiting",
    ready: Boolean(data.ready),
    score: safeNumber(data.score, 0),
    xp: safeNumber(data.xp, 0),
    combo: Math.max(1, safeNumber(data.combo, 1)),
    mistakes: safeNumber(data.mistakes, 0),
    answers: safeNumber(data.answers, 0),
    correct: safeNumber(data.correct, 0),
    hp: safeNumber(data.hp, 100),
    shield: safeNumber(data.shield, 0),
    gold: safeNumber(data.gold, 0),
    steps: safeNumber(data.steps, 0),
    coins: safeNumber(data.coins, 100),
    heartbeatAt: safeNumber(data.heartbeatAt, 0),
    joinedAt: safeNumber(data.joinedAt, 0),
    sessionToken: data.sessionToken || ""
  };
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

function roomPlayerAvatar(seed, name, size = 40) {
  const safeName = escapeHtml(name || "Player");
  return `
    <span class="player-avatar-wrap" style="width:${size}px;height:${size}px">
      <img class="player-avatar" src="${getAvatarSrc(seed)}" alt="${safeName}" width="${size}" height="${size}" loading="lazy">
    </span>
  `;
}

function getAvatarSrc(seed) {
  const avatarFile = (seed || "avatar-1.png").trim();
  const allowed = new Set(["default.svg", ...PATHS.assets.localAvatarFiles]);
  const safeAvatar = allowed.has(avatarFile) ? avatarFile : "default.svg";
  return safeAvatar === "default.svg"
    ? PATHS.assets.defaultAvatar
    : `${PATHS.assets.localAvatarPrefix}${safeAvatar}`;
}

function createAvatarElement(seed, alt, size = 36) {
  const img = document.createElement("img");
  img.src = getAvatarSrc(seed);
  img.alt = alt || "avatar";
  img.width = size;
  img.height = size;
  img.loading = "lazy";
  img.className = "player-avatar";
  img.onerror = () => {
    img.onerror = null;
    img.src = PATHS.assets.defaultAvatar;
  };
  return img;
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
    const medalEntry = PATHS.assets.medals[m.key];
    const fallbackEmoji = m.icon;
    const medalCandidates = Array.isArray(medalEntry) ? medalEntry : [medalEntry || ""];
    item.className = `medal ${unlocked ? "unlocked" : ""}`;
    item.innerHTML = `
      <div class="medal-icon"><span>${fallbackEmoji}</span></div>
      <strong>${m.key}</strong>
      <svg viewBox="0 0 100 16" width="100%" height="16" aria-hidden="true">
        <path d="M0 8 H100" stroke="${unlocked ? "#22d3ee" : "#516288"}" stroke-width="2" stroke-dasharray="6 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.2s" repeatCount="indefinite"></animate>
        </path>
      </svg>
    `;
    const iconWrap = item.querySelector(".medal-icon");
    pickFirstAvailableImage(medalCandidates, found => {
      if (!iconWrap || !found) return;
      iconWrap.innerHTML = `<img src="${found}" alt="${m.key}" loading="lazy">`;
    });
    dom.medalsGrid.appendChild(item);
  });
}

function renderAchievements() {
  dom.achievementsList.innerHTML = "";
  const achieved = state.profile.achievements.slice().reverse();
  if (!achieved.length) {
    const li = document.createElement("li");
    const rankBadge = leaderboardMedal(rank);
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
    if (state.currentSort === "time") return (a.avgTimeSec || 999) - (b.avgTimeSec || 999);
    if (state.currentSort === "date") return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
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
    const avg = Number.isFinite(Number(row.avgTimeSec)) ? `${Number(row.avgTimeSec).toFixed(1)}s` : "-";
    const playedAt = row.date ? new Date(row.date).toLocaleString() : "-";
    li.textContent = `${rankBadge} ${row.player} | score ${row.score} | xp ${row.xp} | wins ${row.wins} | avg ${avg} | ${playedAt}`;
    dom.globalLeaderboardList.appendChild(li);
  });
}

function renderLeaderboardModal() {
  if (!dom.leaderboardModalList) return;
  const list = getGlobalLeaderboard();
  const sorted = list.slice().sort((a, b) => {
    if (state.currentSort === "time") return (a.avgTimeSec || 999) - (b.avgTimeSec || 999);
    if (state.currentSort === "date") return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
    if (state.currentSort === "xp") return b.xp - a.xp;
    if (state.currentSort === "wins") return b.wins - a.wins;
    return b.score - a.score;
  });
  dom.leaderboardModalList.innerHTML = "";
  if (!sorted.length) {
    const li = document.createElement("li");
    li.textContent = "-";
    dom.leaderboardModalList.appendChild(li);
    return;
  }
  sorted.slice(0, 50).forEach((row, idx) => {
    const rank = idx + 1;
    const medal = rank === 1 ? "рџҐ‡" : rank === 2 ? "рџҐ€" : rank === 3 ? "рџҐ‰" : `${rank}.`;
    const avg = Number.isFinite(Number(row.avgTimeSec)) ? `${Number(row.avgTimeSec).toFixed(1)}s` : "-";
    const playedAt = row.date ? new Date(row.date).toLocaleString() : "-";
    const li = document.createElement("li");
    li.textContent = `${medal} ${row.player} | score ${row.score} | xp ${row.xp} | wins ${row.wins} | avg ${avg} | ${playedAt}`;
    dom.leaderboardModalList.appendChild(li);
  });
}

function leaderboardMedal(rank) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `${rank}.`;
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
  if (!src) {
    PRELOADED_IMAGES[key] = null;
    return;
  }
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

function pickFirstAvailableImage(candidates, onDone) {
  if (!Array.isArray(candidates) || !candidates.length) {
    onDone("");
    return;
  }
  const [head, ...rest] = candidates;
  const img = new Image();
  img.onload = () => onDone(head);
  img.onerror = () => pickFirstAvailableImage(rest, onDone);
  img.src = head;
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

function getQuestionPool() {
  // RU mode uses only base curated Russian set to avoid mixed-language appearance.
  if (state.lang === "ru") return BASE_QUESTIONS.slice();
  return QUESTIONS;
}

function localizeQuestion(baseQuestion) {
  const questionText = baseQuestion.q?.[state.lang] || baseQuestion.q?.ru || baseQuestion.q?.en || "";
  const options = baseQuestion.options?.[state.lang] || baseQuestion.options?.ru || baseQuestion.options?.en || [];
  return {
    id: baseQuestion.id,
    level: LEVEL_LABELS[state.lang][baseQuestion.level],
    levelRaw: baseQuestion.level,
    q: questionText,
    options: options.slice(0, 4),
    correct: baseQuestion.correct
  };
}

function localizeQuestionWithOrder(questionId, optionOrder) {
  const base = getQuestionById(questionId);
  if (!base) return null;
  const q = localizeQuestion(base);
  if (!Array.isArray(optionOrder) || optionOrder.length !== q.options.length) return q;
  const options = optionOrder.map(i => q.options[i]);
  const correct = optionOrder.indexOf(q.correct);
  return { ...q, options, correct, optionOrder: optionOrder.slice() };
}

function randomDifficultyForScore(score) {
  const rand = Math.random();
  if (score < 5) return rand < 0.62 ? "Junior" : rand < 0.9 ? "Middle" : "Senior";
  if (score < 12) return rand < 0.35 ? "Junior" : rand < 0.8 ? "Middle" : "Senior";
  return rand < 0.18 ? "Junior" : rand < 0.55 ? "Middle" : "Senior";
}

function buildQuestionSetByDistribution(distribution) {
  const poolSource = getQuestionPool();
  const usedIds = new Set();
  const result = [];
  Object.entries(distribution).forEach(([level, count]) => {
    const pool = shuffle(poolSource.filter(q => q.level === level));
    for (let i = 0; i < count; i += 1) {
      const candidate = pool[i % pool.length];
      if (!candidate) continue;
      if (usedIds.has(candidate.id)) {
        const alt = pool.find(q => !usedIds.has(q.id));
        if (alt) {
          result.push(alt);
          usedIds.add(alt.id);
        }
      } else {
        result.push(candidate);
        usedIds.add(candidate.id);
      }
    }
  });
  if (result.length < 20) {
    const backup = shuffle(poolSource.filter(q => !usedIds.has(q.id)));
    while (result.length < 20 && backup.length) {
      const q = backup.pop();
      result.push(q);
      usedIds.add(q.id);
    }
  }
  return shuffle(result).slice(0, 20);
}

function buildClassicQuestions() {
  const base = buildQuestionSetByDistribution({ Junior: 7, Middle: 7, Senior: 6 });
  return base.map(q => withShuffledAnswers(localizeQuestion(q)));
}

function buildFromPlan(plan) {
  return plan.map(item => {
    const q = localizeQuestion(getQuestionById(item.id));
    const options = item.order.map(i => q.options[i]);
    const correct = item.order.indexOf(q.correct);
    return { ...q, options, correct, optionOrder: item.order.slice() };
  });
}

function buildOnlineQuestionPlan() {
  const ids = buildQuestionSetByDistribution({ Junior: 7, Middle: 7, Senior: 6 }).map(q => q.id);
  return ids.map(id => ({ id, order: shuffle([0, 1, 2, 3]) }));
}

function withShuffledAnswers(question) {
  const pairs = question.options.map((opt, idx) => ({ opt, idx }));
  const shuffled = shuffle(pairs);
  return {
    ...question,
    options: shuffled.map(p => p.opt),
    correct: shuffled.findIndex(p => p.idx === question.correct),
    optionOrder: shuffled.map(p => p.idx)
  };
}

const ONLINE_MODE_LABELS = {
  simple: "Simple"
};

function onlineModeLabel(mode) {
  return ONLINE_MODE_LABELS[mode] || ONLINE_MODE_LABELS.simple;
}

function getInviteUrl(roomCode) {
  const base = `${window.location.origin}${window.location.pathname}`;
  const qp = new URLSearchParams();
  qp.set("room", roomCode);
  return `${base}?${qp.toString()}`;
}

function updateInviteUI() {
  if (!dom.roomQrWrap || !dom.roomQrImage) return;
  if (!state.online.connected || !state.online.roomCode) {
    dom.roomQrWrap.classList.remove("show");
    dom.roomQrImage.innerHTML = "";
    inviteQrInstance = null;
    return;
  }
  const invite = getInviteUrl(state.online.roomCode);
  dom.roomQrImage.innerHTML = "";
  if (window.QRCode) {
    inviteQrInstance = new QRCode(dom.roomQrImage, {
      text: invite,
      width: 128,
      height: 128,
      colorDark: "#101320",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  } else {
    const fallback = document.createElement("small");
    fallback.textContent = state.online.roomCode;
    fallback.style.color = "#0f172a";
    dom.roomQrImage.appendChild(fallback);
  }
  dom.roomQrWrap.classList.add("show");
}

function getOnlineSelfEntry() {
  return state.online.liveScores[state.online.id] || state.online.peers[state.online.id] || {};
}

function getOnlinePlayerById(id) {
  if (id === state.online.id) return getOnlineSelfEntry();
  return state.online.peers[id] || state.online.liveScores[id] || {};
}

function getRoomPlayerIds() {
  const ids = [state.online.id, ...Object.keys(state.online.peers)];
  return ids.filter(Boolean);
}

function updateModeStatusBar() {
  if (!dom.modeStatusBar) return;
  dom.onlineModeBadge.textContent = `Mode: ${onlineModeLabel("simple")}`;
  if (dom.cryptoActions) dom.cryptoActions.classList.remove("show");
  dom.modeStatusBar.textContent = "Standard online scoring";
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
  const hasMinPlayers = peersCount >= 2;
  const inLobby = state.online.matchStatus === "lobby";
  dom.readyBtn.disabled = !state.online.connected || !inLobby;
  dom.readyBtn.classList.toggle("active", state.online.ready);
  dom.readyBtn.textContent = state.online.ready ? `${t("readyBtn")} ✓` : t("readyBtn");
  if (dom.onlineGameMode) {
    dom.onlineGameMode.value = "simple";
    dom.onlineGameMode.disabled = true;
  }
  if (dom.startBtn) {
    dom.startBtn.disabled = state.mode === "online" && (!state.online.connected || !state.online.isHost || !hasMinPlayers || !inLobby);
  }
  updateInviteUI();
  updateModeStatusBar();
  renderWaitingPlayers();
  updateOnlineBoards();
  renderOnlineCards();
}

function setMode(mode) {
  if (mode !== "classic" && mode !== "online") mode = "classic";
  state.mode = mode;
  dom.modeButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  dom.player2Fields.classList.toggle("show", mode === "multiplayer");
  dom.localMultiPanel.style.display = mode === "multiplayer" ? "block" : "none";
  dom.onlinePanel.style.display = mode === "online" ? "block" : "none";
  updateRoomUI();
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
  state.currentQuestion = null;
  state.survivalPools = { Junior: [], Middle: [], Senior: [] };
  state.survivalLastId = null;
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
    if (all.length < 2) {
      showPopup(t("waitingPlayers"));
      return;
    }
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
  return state.currentQuestion;
}

function pickSurvivalQuestion() {
  const poolSource = getQuestionPool();
  const desiredLevel = randomDifficultyForScore(state.score);
  const levels = [desiredLevel, "Middle", "Junior", "Senior"];

  for (let i = 0; i < levels.length; i += 1) {
    const level = levels[i];
    if (!state.survivalPools[level] || state.survivalPools[level].length === 0) {
      state.survivalPools[level] = shuffle(poolSource.filter(q => q.level === level));
    }
    const pool = state.survivalPools[level];
    if (!pool.length) continue;

    let base = pool.pop();
    if (!base) continue;
    if (base.id === state.survivalLastId && pool.length) {
      const alt = pool.pop();
      pool.unshift(base);
      base = alt;
    }
    state.survivalLastId = base.id;
    return withShuffledAnswers(localizeQuestion(base));
  }

  const fallback = poolSource[Math.floor(Math.random() * poolSource.length)];
  state.survivalLastId = fallback.id;
  return withShuffledAnswers(localizeQuestion(fallback));
}

function renderQuestion(forceOnlyTranslate = false) {
  if (!dom.quizScreen.classList.contains("active") && !forceOnlyTranslate) return;
  if (forceOnlyTranslate && state.currentQuestion) {
    const relocalized = localizeQuestionWithOrder(state.currentQuestion.id, state.currentQuestion.optionOrder);
    if (relocalized) state.currentQuestion = relocalized;
  }
  if (!forceOnlyTranslate || !state.currentQuestion) {
    if (state.mode === "survival") {
      state.currentQuestion = pickSurvivalQuestion();
    } else {
      state.currentQuestion = state.questions[state.questionIndex] || null;
    }
  }
  const q = getCurrentQuestion();
  if (!q) {
    if (forceOnlyTranslate) return;
    finishGame();
    return;
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
  return getCurrentQuestion();
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
  state.currentQuestion = null;
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
      correct: Number(payload.correct || 0),
      avatarSeed: payload.avatarSeed || "avatar-1.png"
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
    accuracy,
    mistakes: state.players[0].mistakes || state.mistakes || 0,
    avgTimeSec: Number(avg.toFixed(2)),
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
  const nameY = 514;
  ctx.clearRect(0, 0, w, h);
  const hasBg = drawImageIfReady(ctx, "certBackground", 0, 0, w, h);
  if (!hasBg) {
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#081225");
    grad.addColorStop(1, "#122a53");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }
  ctx.textAlign = "center";
  ctx.font = "700 58px Inter, Arial";
  ctx.fillStyle = "#22d3ee";
  ctx.shadowColor = "rgba(34, 211, 238, 0.45)";
  ctx.shadowBlur = 18;
  ctx.fillText(name, nameAreaCenterX, nameY, nameAreaMaxWidth);
  ctx.shadowBlur = 0;
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
  const code = normalizeRoomCode(dom.roomInput.value) || generateRoomCode();
  dom.roomInput.value = code;
  await joinRoom(code, true);
}

async function legacyJoinRoom(codeInput = "", createIfMissing = false) {
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
  state.online.modeState = {};
  stopModeTimers();

  const playerName = state.players[0].fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player";
  await state.online.myPlayerRef.set({
    id: state.online.id,
    uid: state.online.uid,
    name: playerName,
    avatarSeed: state.profile.avatarSeed || "avatar-1.png",
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
    avatarSeed: state.profile.avatarSeed || "avatar-1.png",
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

async function legacyJoinRoom(codeInput = "", createIfMissing = false) {
  if (state.online.inFlightJoin) return;
  state.online.inFlightJoin = true;
  setOnlineLoading(true, createIfMissing ? t("onlineCreating") : t("onlineJoining"));
  try {
    const ok = await initOnlineBackend();
    if (!ok) return;
    const roomCode = normalizeRoomCode(codeInput || dom.roomInput.value);
    if (!roomCode) {
      showPopup(t("roomNeedCode"));
      return;
    }
    if (state.online.connected) await leaveRoom(true);

    const sessionToken = `${state.online.uid}:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
    state.online.sessionToken = sessionToken;
    state.online.globalSessionRef = state.online.db.ref(`${ONLINE_ROOT}/sessions/${state.online.uid}`);
    const prevSessionSnap = await state.online.globalSessionRef.once("value");
    if (prevSessionSnap.exists()) {
      const prev = prevSessionSnap.val() || {};
      if (prev.roomCode && prev.roomCode !== roomCode) showPopup(t("sessionReplaced"));
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
        return;
      }
    } else {
      await roomRef.child("meta").update({
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        createdBy: state.online.id,
        createdByUid: state.online.uid,
        version: 1
      });
      await roomRef.child("state").update({
        status: "lobby",
        hostId: state.online.id,
        mode: state.online.gameMode || "simple",
        updatedAt: firebase.database.ServerValue.TIMESTAMP
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
    state.online.modeState = {};
    stopModeTimers();

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
    showBattlePopup(`вљЎ ${t("matchFound")}`);
    startOnlineHeartbeats();
    startAfkWatcher();
    updateRoomUI();
  } catch (_err) {
    showPopup(createIfMissing ? t("roomCreateFail") : t("roomJoinFail"));
  } finally {
    state.online.inFlightJoin = false;
    setOnlineLoading(false);
  }
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
  if (data.mode) state.online.gameMode = data.mode;
  if (data.hostId) state.online.hostId = data.hostId;
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

function stopModeTimers() {
  if (state.online.marketInterval) {
    clearInterval(state.online.marketInterval);
    state.online.marketInterval = null;
  }
  state.online.marketCooldownUntil = 0;
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
  if (Object.keys(state.online.peers).length + 1 < 2) {
    showPopup(t("waitingPlayers"));
    return;
  }
  state.online.ready = !state.online.ready;
  const nextStatus = state.online.ready ? "ready" : "waiting";
    await state.online.myPlayerRef.update({
      ready: state.online.ready,
      status: nextStatus,
      avatarSeed: state.profile.avatarSeed || "avatar-1.png",
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
  const unlockAudio = () => {
    AudioFX.init();
    if (!state.muted && !dom.introScreen.classList.contains("active")) {
      AudioFX.startMusic();
    }
    window.removeEventListener("pointerdown", unlockAudio);
    window.removeEventListener("touchstart", unlockAudio);
    window.removeEventListener("keydown", unlockAudio);
  };
  window.addEventListener("pointerdown", unlockAudio, { once: true });
  window.addEventListener("touchstart", unlockAudio, { once: true });
  window.addEventListener("keydown", unlockAudio, { once: true });

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
  if (dom.openLeaderboardBtn && dom.leaderboardModal) {
    dom.openLeaderboardBtn.addEventListener("click", () => {
      dom.leaderboardModal.classList.add("show");
      dom.leaderboardModal.setAttribute("aria-hidden", "false");
      renderLeaderboardModal();
    });
  }
  if (dom.closeLeaderboardBtn && dom.leaderboardModal) {
    dom.closeLeaderboardBtn.addEventListener("click", () => {
      dom.leaderboardModal.classList.remove("show");
      dom.leaderboardModal.setAttribute("aria-hidden", "true");
    });
  }
  if (dom.leaderboardModal) {
    dom.leaderboardModal.addEventListener("click", e => {
      if (e.target === dom.leaderboardModal) {
        dom.leaderboardModal.classList.remove("show");
        dom.leaderboardModal.setAttribute("aria-hidden", "true");
      }
    });
  }
  dom.boardSortButtons.forEach(btn => btn.addEventListener("click", () => {
    const next = btn.dataset.boardSort || "score";
    state.currentSort = next;
    dom.boardSortButtons.forEach(b => b.classList.toggle("active", b.dataset.boardSort === next));
    dom.sortButtons.forEach(b => b.classList.toggle("active", b.dataset.sort === next));
    renderLeaderboard();
    renderLeaderboardModal();
  }));
  if (dom.copyInviteBtn) {
    dom.copyInviteBtn.addEventListener("click", async () => {
      if (!state.online.roomCode) return;
      const link = getInviteUrl(state.online.roomCode);
      try {
        await navigator.clipboard.writeText(link);
        showPopup(t("copyInvite"));
      } catch (_err) {
        showPopup(link);
      }
    });
  }
  if (dom.openInviteBtn) {
    dom.openInviteBtn.addEventListener("click", () => {
      if (!state.online.roomCode) return;
      window.open(getInviteUrl(state.online.roomCode), "_blank", "noopener");
    });
  }
  dom.avatarRandomBtn.addEventListener("click", () => {
    const idx = Math.floor(Math.random() * PATHS.assets.localAvatarFiles.length);
    state.profile.avatarSeed = PATHS.assets.localAvatarFiles[idx] || "avatar-1.png";
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

  const roomFromQuery = normalizeRoomCode(new URLSearchParams(window.location.search).get("room") || "");
  if (roomFromQuery) {
    dom.roomInput.value = roomFromQuery;
    setMode("online");
  }
}

init();

async function joinRoom(codeInput = "", createIfMissing = false) {
  if (state.online.inFlightJoin) return;
  state.online.inFlightJoin = true;
  setOnlineLoading(true, createIfMissing ? t("onlineCreating") : t("onlineJoining"));
  try {
    const ok = await initOnlineBackend();
    if (!ok) return;

    const roomCode = normalizeRoomCode(codeInput || dom.roomInput.value);
    if (!roomCode) {
      showPopup(t("roomNeedCode"));
      return;
    }

    if (state.online.connected) await leaveRoom(true);

    const sessionToken = `${state.online.uid}:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
    state.online.sessionToken = sessionToken;
    state.online.globalSessionRef = state.online.db.ref(`${ONLINE_ROOT}/sessions/${state.online.uid}`);
    const prevSessionSnap = await state.online.globalSessionRef.once("value");
    if (prevSessionSnap.exists()) {
      const prev = prevSessionSnap.val() || {};
      if (prev.roomCode && prev.roomCode !== roomCode) showPopup(t("sessionReplaced"));
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
        return;
      }
    } else {
      await roomRef.child("meta").update({
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        createdBy: state.online.id,
        createdByUid: state.online.uid,
        version: 1
      });
      await roomRef.child("state").update({
        status: "lobby",
        hostId: state.online.id,
        ownerUid: state.online.uid,
        mode: state.online.gameMode || "simple",
        updatedAt: firebase.database.ServerValue.TIMESTAMP
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
    state.online.modeState = {};
    stopModeTimers();

    const playerName = state.players[0].fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player";
    const avatarSeed = state.profile.avatarSeed || "avatar-1.png";
    await state.online.myPlayerRef.set({
      id: state.online.id,
      uid: state.online.uid,
      name: playerName,
      avatarSeed,
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
    state.online.liveScores[state.online.id] = normalizeOnlinePlayer(state.online.id, {
      uid: state.online.uid,
      name: playerName,
      avatarSeed,
      score: 0,
      xp: 0,
      combo: 1,
      mistakes: 0,
      answers: 0,
      correct: 0,
      status: "waiting"
    });
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
  } catch (_err) {
    showPopup(createIfMissing ? t("roomCreateFail") : t("roomJoinFail"));
  } finally {
    state.online.inFlightJoin = false;
    setOnlineLoading(false);
  }
}

function recalcHost() {
  state.online.hostId = state.online.ownerUid || state.online.hostId || state.online.id;
  state.online.isHost = state.online.hostId === state.online.id || state.online.ownerUid === state.online.uid;
}

function renderWaitingPlayers() {
  const list = [normalizeOnlinePlayer(state.online.id, {
    ...(state.online.liveScores[state.online.id] || {}),
    name: state.players[0].fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player",
    avatarSeed: state.profile.avatarSeed || "avatar-1.png",
    status: state.online.matchStatus === "running" ? "answering" : (state.online.ready ? "ready" : "waiting"),
    uid: state.online.uid
  })].concat(Object.entries(state.online.peers).map(([id, data]) => normalizeOnlinePlayer(id, { ...data, ...(state.online.liveScores[id] || {}) })));

  dom.waitingPlayersList.innerHTML = "";
  if (!list.length || !state.online.connected) return;
  list.sort((a, b) => (a.joinedAt || 0) - (b.joinedAt || 0));
  list.forEach(player => {
    const li = document.createElement("li");
    const status = player.status === "ready" ? t("playerReady")
      : player.status === "answering" ? t("playerAnswering")
      : player.status === "finished" ? t("playerFinished")
      : t("playerWaiting");
    li.className = "player-row";
    li.innerHTML = `
      <div class="player-row-left">
        ${renderPlayerAvatar(player.avatarSeed, player.name, 34)}
        <div>
          <strong>${escapeHtml(player.name)}</strong>
          <p>${escapeHtml(status)}</p>
        </div>
      </div>
      <div class="player-row-right">
        <span>${player.ready ? "✓" : "•"}</span>
        <small>${escapeHtml(player.uid || player.id)}</small>
      </div>
    `;
    dom.waitingPlayersList.appendChild(li);
  });
}

function updateRoomStateFromSnapshot(data) {
  if (!data) return;
  const nextStatus = data.status || "lobby";
  if (data.mode) state.online.gameMode = data.mode;
  if (data.hostId) state.online.hostId = data.hostId;
  if (data.ownerUid) state.online.ownerUid = data.ownerUid;
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

function sanitizeIncomingOnlineState(id, payload) {
  if (!validateRemoteOnlineState(id, payload)) return;
  state.online.liveScores[id] = normalizeOnlinePlayer(id, payload);
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
  const fullName = self.fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player";
  const avatarSeed = state.profile.avatarSeed || "avatar-1.png";
  const payload = {
    type: "state",
    from: state.online.id,
    uid: state.online.uid,
    name: fullName,
    avatarSeed,
    score: self.score,
    xp: self.xp,
    combo: state.comboMult,
    mistakes: self.mistakes,
    answers: self.answers,
    correct: self.correct,
    status: state.online.matchStatus === "running" ? "answering" : (state.online.ready ? "ready" : "waiting"),
    elapsedMs
  };
  state.online.liveScores[state.online.id] = normalizeOnlinePlayer(state.online.id, payload);
  if (state.online.myPlayerRef) {
    state.online.myPlayerRef.update({
      uid: state.online.uid,
      name: fullName,
      avatarSeed,
      score: self.score,
      xp: self.xp,
      combo: state.comboMult,
      mistakes: self.mistakes,
      answers: self.answers,
      correct: self.correct,
      answerMsTotal: (state.answerTimes.reduce((a, b) => a + b, 0) * 1000) | 0,
      status: payload.status,
      updatedAt: firebase.database.ServerValue.TIMESTAMP
    });
  }
  sendOnline(payload);
  updateOnlineBoards();
}

async function setReadyOnline() {
  if (!state.online.connected || !state.online.myPlayerRef) return;
  if (state.online.matchStatus !== "lobby") return;
  if (Object.keys(state.online.peers).length + 1 < 2) {
    showPopup(t("waitingPlayers"));
    return;
  }
  state.online.ready = !state.online.ready;
  const nextStatus = state.online.ready ? "ready" : "waiting";
  await state.online.myPlayerRef.update({
    ready: state.online.ready,
    status: nextStatus,
    avatarSeed: state.profile.avatarSeed || "avatar-1.png",
    updatedAt: firebase.database.ServerValue.TIMESTAMP
  });
  showPopup(state.online.ready ? t("roomReadyOn") : t("roomReadyOff"));
  updateRoomUI();
}

function joinRoomLegacyBridge(...args) {
  return joinRoom(...args);
}

const legacyJoinRoomBridge = joinRoomLegacyBridge;

function renderLiveOnlineLeaderboard() {
  if (!dom.onlineLiveLeaderboard) return;
  dom.onlineLiveLeaderboard.innerHTML = "";
  const selfName = state.players[0].fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player";
  const selfLive = state.online.liveScores[state.online.id] || {};
  const rows = [
    normalizeOnlinePlayer(state.online.id, {
      ...selfLive,
      name: selfName,
      avatarSeed: state.profile.avatarSeed || "avatar-1.png",
      score: safeNumber(selfLive.score, state.players[0].score),
      xp: safeNumber(selfLive.xp, state.players[0].xp),
      combo: safeNumber(selfLive.combo, state.comboMult),
      answers: safeNumber(selfLive.answers, state.players[0].answers),
      correct: safeNumber(selfLive.correct, state.players[0].correct),
      mistakes: safeNumber(selfLive.mistakes, state.players[0].mistakes),
      uid: state.online.uid
    }),
    ...Object.entries(state.online.peers).map(([id, peer]) => normalizeOnlinePlayer(id, { ...peer, ...(state.online.liveScores[id] || {}) }))
  ].sort((a, b) => (b.score || 0) - (a.score || 0));

  rows.forEach((row, idx) => {
    const li = document.createElement("li");
    const acc = row.answers ? Math.round((row.correct / row.answers) * 100) : 0;
    const badge = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "•";
    li.className = "player-row";
    li.innerHTML = `
      <div class="player-row-left">
        ${renderPlayerAvatar(row.avatarSeed, row.name, 38)}
        <div>
          <strong>${badge} ${escapeHtml(row.name)}</strong>
          <p>${escapeHtml(row.status || "online")}</p>
        </div>
      </div>
      <div class="player-row-right">
        <span>${row.score}</span>
        <small>XP ${row.xp} · Acc ${acc}% · x${row.combo} · Err ${row.mistakes}</small>
      </div>
    `;
    dom.onlineLiveLeaderboard.appendChild(li);
  });
}

function renderOnlineCards() {
  if (!dom.onlineCards) return;
  const selfName = state.players[0].fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player";
  const selfLive = state.online.liveScores[state.online.id] || {};
  const rows = [
    normalizeOnlinePlayer(state.online.id, {
      ...selfLive,
      name: selfName,
      avatarSeed: state.profile.avatarSeed || "avatar-1.png",
      score: safeNumber(selfLive.score, state.players[0].score),
      combo: safeNumber(selfLive.combo, state.comboMult),
      status: state.online.matchStatus === "running" ? "answering" : (state.online.ready ? "ready" : "waiting"),
      uid: state.online.uid
    }),
    ...Object.entries(state.online.peers).map(([id, peer]) => normalizeOnlinePlayer(id, { ...peer, ...(state.online.liveScores[id] || {}) }))
  ].sort((a, b) => (b.score || 0) - (a.score || 0));

  dom.onlineCards.innerHTML = rows.map((row, idx) => `
    <article class="player-card ${row.id === state.online.id ? "me" : ""}">
      <div class="player-row-left">
        ${renderPlayerAvatar(row.avatarSeed, row.name, 44)}
        <div>
          <strong>${idx === 0 ? "★ " : ""}${escapeHtml(row.name)}</strong>
          <p>${escapeHtml(row.status)}</p>
        </div>
      </div>
      <div class="player-card-meta">
        <span>${row.score}</span>
        <small>x${row.combo}</small>
      </div>
    </article>
  `).join("");
}

function recalcHost() {
  const ownerUid = state.online.ownerUid || "";
  const all = {
    [state.online.id]: { uid: state.online.uid, ...(state.online.liveScores[state.online.id] || {}) },
    ...Object.fromEntries(Object.entries(state.online.peers).map(([id, peer]) => [id, { uid: peer.uid || (state.online.liveScores[id] || {}).uid || "", ...peer }]))
  };
  const ownerEntry = Object.entries(all).find(([, player]) => player && player.uid && player.uid === ownerUid);
  state.online.hostId = ownerEntry ? ownerEntry[0] : (state.online.hostId || state.online.id);
  state.online.isHost = Boolean(ownerUid) ? state.online.uid === ownerUid : state.online.hostId === state.online.id;
}

function renderWaitingPlayers() {
  if (!dom.waitingPlayersList) return;
  const list = [
    normalizeOnlinePlayer(state.online.id, {
      ...(state.online.liveScores[state.online.id] || {}),
      name: state.players[0].fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player",
      avatarSeed: state.profile.avatarSeed || "avatar-1.png",
      status: state.online.matchStatus === "running" ? "answering" : (state.online.ready ? "ready" : "waiting"),
      uid: state.online.uid
    }),
    ...Object.entries(state.online.peers).map(([id, data]) => normalizeOnlinePlayer(id, { ...data, ...(state.online.liveScores[id] || {}) }))
  ];
  dom.waitingPlayersList.innerHTML = "";
  if (!list.length || !state.online.connected) return;
  list.sort((a, b) => (a.joinedAt || 0) - (b.joinedAt || 0));
  list.forEach(player => {
    const li = document.createElement("li");
    const status = player.status === "ready" ? t("playerReady")
      : player.status === "answering" ? t("playerAnswering")
      : player.status === "finished" ? t("playerFinished")
      : t("playerWaiting");
    li.className = "player-row";
    li.innerHTML = `
      <div class="player-row-left">
        ${renderPlayerAvatar(player.avatarSeed, player.name, 34)}
        <div>
          <strong>${escapeHtml(player.name)}</strong>
          <p>${escapeHtml(status)}</p>
        </div>
      </div>
      <div class="player-row-right">
        <span>${player.ready ? "✓" : "•"}</span>
        <small>${escapeHtml(player.uid || player.id)}</small>
      </div>
    `;
    dom.waitingPlayersList.appendChild(li);
  });
}

function updateRoomStateFromSnapshot(data) {
  if (!data) return;
  const nextStatus = data.status || "lobby";
  if (data.mode) state.online.gameMode = data.mode;
  if (data.hostId) state.online.hostId = data.hostId;
  if (data.ownerUid) state.online.ownerUid = data.ownerUid;
  state.online.matchStatus = nextStatus;
  recalcHost();
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

function sanitizeIncomingOnlineState(id, payload) {
  if (!validateRemoteOnlineState(id, payload)) return;
  state.online.liveScores[id] = normalizeOnlinePlayer(id, payload);
}

function publishOnlineState() {
  if (!state.online.connected) return;
  const now = Date.now();
  if (now - state.online.lastPublishAt < ONLINE_LIMITS.statePublishMs) return;
  state.online.lastPublishAt = now;
  const self = state.players[0];
  const elapsedMs = Math.max(0, Date.now() - (state.online.antiCheat.questionStartAt || Date.now()));
  if (elapsedMs < ONLINE_LIMITS.minHumanAnswerMs) {
    showPopup(t("antiCheatFast"));
    return;
  }
  const fullName = self.fullName || `${state.profile.firstName || "Player"} ${state.profile.lastName || ""}`.trim() || "Player";
  const avatarSeed = state.profile.avatarSeed || "avatar-1.png";
  const payload = {
    type: "state",
    from: state.online.id,
    uid: state.online.uid,
    name: fullName,
    avatarSeed,
    score: self.score,
    xp: self.xp,
    combo: state.comboMult,
    mistakes: self.mistakes,
    answers: self.answers,
    correct: self.correct,
    status: state.online.matchStatus === "running" ? "answering" : (state.online.ready ? "ready" : "waiting"),
    elapsedMs
  };
  state.online.liveScores[state.online.id] = normalizeOnlinePlayer(state.online.id, payload);
  if (state.online.myPlayerRef) {
    state.online.myPlayerRef.update({
      uid: state.online.uid,
      name: fullName,
      avatarSeed,
      score: self.score,
      xp: self.xp,
      combo: state.comboMult,
      mistakes: self.mistakes,
      answers: self.answers,
      correct: self.correct,
      answerMsTotal: (state.answerTimes.reduce((a, b) => a + b, 0) * 1000) | 0,
      status: payload.status,
      updatedAt: firebase.database.ServerValue.TIMESTAMP
    });
  }
  sendOnline(payload);
  updateOnlineBoards();
}

async function setReadyOnline() {
  if (!state.online.connected || !state.online.myPlayerRef) return;
  if (state.online.matchStatus !== "lobby") return;
  if (Object.keys(state.online.peers).length + 1 < 2) {
    showPopup(t("waitingPlayers"));
    return;
  }
  state.online.ready = !state.online.ready;
  const nextStatus = state.online.ready ? "ready" : "waiting";
  await state.online.myPlayerRef.update({
    ready: state.online.ready,
    status: nextStatus,
    avatarSeed: state.profile.avatarSeed || "avatar-1.png",
    updatedAt: firebase.database.ServerValue.TIMESTAMP
  });
  showPopup(state.online.ready ? t("roomReadyOn") : t("roomReadyOff"));
  updateRoomUI();
}
