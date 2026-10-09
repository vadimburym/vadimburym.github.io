// Перенесено из skills-draft; level: 0 — пока не оценено; details: null — без подробного разбора.
export const coreLevels = [
  "Знаком с теорией",
  "Применяю с поддержкой",
  "Применяю самостоятельно",
  "Решаю нетиповые задачи",
  "Обучаю других"
];

export const coreCategories = [
  {
    "id": "architecture",
    "name": "Архитектура и проектирование"
  },
  {
    "id": "ai",
    "name": "Игровой ИИ и алгоритмы"
  },
  {
    "id": "csharp",
    "name": "C# и асинхронный код"
  },
  {
    "id": "unity",
    "name": "Unity и игровые механики",
    "icon": "/assets/images/unity-mark.png"
  },
  {
    "id": "performance",
    "name": "Производительность"
  },
  {
    "id": "ui",
    "name": "Интерфейсы"
  },
  {
    "id": "content",
    "name": "Ресурсы, данные и инструменты"
  },
  {
    "id": "visual",
    "name": "Графика, анимация и звук"
  },
  {
    "id": "quality",
    "name": "Практики разработки"
  },
  {
    "id": "optional",
    "name": "Дополнительно"
  }
];

export const coreSkills = [
  {
    "id": "oop",
    "name": "ООП",
    "categoryId": "architecture",
    "order": 1,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "OOP",
      "объектно ориентированный",
      "композиция",
      "ООП и композиция"
    ],
    "bestResult": "Заменил наследование апгрейдов композицией проверок и эффектов — новое поведение добавляется отдельным блоком.",
    "details": null
  },
  {
    "id": "solid",
    "name": "SOLID",
    "categoryId": "architecture",
    "order": 3,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "SOLID",
      "GRASP",
      "принципы",
      "SOLID и распределение ответственности"
    ],
    "bestResult": "Адаптировал дерево поведения под Burst: ограничил расширение ядра, сохранив добавление действий без изменения обхода.",
    "details": null
  },
  {
    "id": "patterns",
    "name": "Паттерны проектирования",
    "categoryId": "architecture",
    "order": 4,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "design patterns",
      "паттерны",
      "State Machine"
    ],
    "bestResult": "Организовал запуск и смену режимов через State Machine без пересоздания общих сервисов и загрузки лишних ресурсов.",
    "details": null
  },
  {
    "id": "modules",
    "name": "Модульная архитектура",
    "categoryId": "architecture",
    "order": 6,
    "level": 4,
    "featured": true,
    "featuredOrder": 3,
    "icon": null,
    "aliases": [
      "архитектура",
      "game systems",
      "DDD",
      "модули",
      "asmdef",
      "ASMDev",
      "Assembly Definition",
      "assembly definitions",
      "сборки",
      "Модульная архитектура игровых систем"
    ],
    "bestResult": "Выделил настройки игры в модуль с отдельным UI и перенес в другой проект, избавив команду от повторной разработки.",
    "details": null
  },
  {
    "id": "data-driven",
    "name": "Data-driven архитектура",
    "categoryId": "architecture",
    "order": 7,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "data driven",
      "data-driven",
      "ScriptableObject",
      "конфиги"
    ],
    "bestResult": "Построил слой ScriptableObject-конфигов и связал его с игровыми системами — геймдизайнер настраивает баланс и контент без правок кода.",
    "details": null
  },
  {
    "id": "di",
    "name": "Dependency Injection (DI)",
    "categoryId": "architecture",
    "order": 5,
    "level": 4,
    "featured": true,
    "featuredOrder": 4,
    "icon": null,
    "aliases": [
      "DI",
      "Dependency Injection",
      "VContainer",
      "Zenject",
      "Внедрение зависимостей и жизненные циклы"
    ],
    "bestResult": "Построил на VContainer единый жизненный цикл систем — их запуск, пауза и очистка управляются из одного места. Также работал с Zenject.",
    "details": null
  },
  {
    "id": "events",
    "name": "Событийное взаимодействие",
    "categoryId": "architecture",
    "order": 8,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "events",
      "Event Bus",
      "события"
    ],
    "bestResult": "Реализовал шину запросов UI в отдельном ECS-мире — обработку механик можно менять без правок в кнопках интерфейса.",
    "details": null
  },
  {
    "id": "reactive",
    "name": "Реактивное программирование",
    "categoryId": "architecture",
    "order": 9,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "UniRx",
      "R3",
      "реактивность",
      "Presenter"
    ],
    "bestResult": "Скомбинировал условия покупки и реализовал смену модели в реактивном Presenter — UI отражает актуальное состояние апгрейда. Работал с UniRx и R3.",
    "details": null
  },
  {
    "id": "ecs",
    "name": "ECS / Data-Oriented Design",
    "categoryId": "architecture",
    "order": 2,
    "level": 4,
    "featured": true,
    "featuredOrder": 2,
    "icon": null,
    "aliases": [
      "DOTS",
      "Entities",
      "ECS",
      "data oriented",
      "DOD",
      "LeoECS",
      "Leo ECS",
      "лео",
      "ECS и Data-Oriented Design"
    ],
    "bestResult": "Оптимизировал Behaviour Tree для DOTS с Burst и Jobs — сократил время обработки 10 000 агентов с 126,25 до 1,00 мс в Unity Editor.",
    "details": null
  },
  {
    "id": "fsm",
    "name": "FSM / HFSM",
    "categoryId": "ai",
    "order": 10,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Машины состояний: FSM и HFSM"
    ],
    "bestResult": "Реализовывал FSM для игровых режимов и HFSM в учебных прототипах Unity.",
    "details": null
  },
  {
    "id": "behavior-tree",
    "name": "Behaviour Tree",
    "categoryId": "ai",
    "order": 11,
    "level": 5,
    "featured": true,
    "featuredOrder": 6,
    "icon": null,
    "aliases": [
      "Деревья поведения"
    ],
    "bestResult": "Разработал data-oriented Behaviour Tree с Parallel и прерываниями для DOTS/Burst; объяснял его устройство и выигрыш в докладах на конференциях.",
    "details": null
  },
  {
    "id": "utility-ai",
    "name": "Utility AI",
    "categoryId": "ai",
    "order": 12,
    "level": 5,
    "featured": true,
    "featuredOrder": 5,
    "icon": null,
    "aliases": [
      "Utility AI и принятие решений"
    ],
    "bestResult": "Разработал кастомный ИИ на основе Utility AI для пошаговой тактики на изометрическом поле, объяснил систему команде и разработал AI-агента для ее поддержки",
    "details": null
  },
  {
    "id": "goap",
    "name": "GOAP",
    "categoryId": "ai",
    "order": 13,
    "level": 1,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Goal-Oriented Action Planning",
      "планирование действий",
      "целевое планирование"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "pathfinding",
    "name": "Навигация / Pathfinding",
    "categoryId": "ai",
    "order": 14,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Навигация и поиск пути"
    ],
    "bestResult": "Реализовал A* в Bombertale; интегрировал Unity NavMesh с ECS для движения, преследования и патрулирования NPC.",
    "details": null
  },
  {
    "id": "ai-perception",
    "name": "Восприятие и координация ИИ",
    "categoryId": "ai",
    "order": 15,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Восприятие и координация агентов"
    ],
    "bestResult": "Разработал ECS-сенсоры с интервальным обновлением и пространственной сеткой — ограничил поиск целей соседними ячейками.",
    "details": null
  },
  {
    "id": "algorithms",
    "name": "Алгоритмы и структуры данных",
    "categoryId": "ai",
    "order": 16,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Переработал рекурсивное исполнение Behaviour Tree в итеративный обход с явным состоянием — адаптировал алгоритм под DOTS/Burst.",
    "details": null
  },
  {
    "id": "csharp-types",
    "name": "Типы и Generics в C#",
    "categoryId": "csharp",
    "order": 17,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Типы, generics и контракты C#"
    ],
    "bestResult": "Разделил контекст и состояние узлов через generics и ref — одно API Behaviour Tree работает с разными действиями.",
    "details": null
  },
  {
    "id": "linq",
    "name": "LINQ",
    "categoryId": "csharp",
    "order": 18,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "LINQ и обработка коллекций"
    ],
    "bestResult": "Использовал LINQ в редакторе Behaviour Tree для фильтрации связей и обработки выбранных узлов графа.",
    "details": null
  },
  {
    "id": "errors",
    "name": "Исключения / IDisposable",
    "categoryId": "csharp",
    "order": 19,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Обработка ошибок и освобождение ресурсов"
    ],
    "bestResult": "Организовал освобождение подписок, файлов и ресурсов при завершении работы игровых сервисов.",
    "details": null
  },
  {
    "id": "reflection",
    "name": "Рефлексия / Кодогенерация",
    "categoryId": "csharp",
    "order": 20,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Атрибуты, рефлексия и генерация кода"
    ],
    "bestResult": "Создал редакторский генератор C#-таблиц для вызовов leaf-узлов Behaviour Tree через Burst function pointers.",
    "details": null
  },
  {
    "id": "async",
    "name": "Async / Await",
    "categoryId": "csharp",
    "order": 21,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "async",
      "await",
      "UniTask",
      "асинхронный",
      "Асинхронные операции и отмена"
    ],
    "bestResult": "Добавил отмену подготовки музыкального этапа — повторный запуск и выход из игры прекращают прежний отсчет.",
    "details": null
  },
  {
    "id": "threading",
    "name": "Многопоточность",
    "categoryId": "csharp",
    "order": 22,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Многопоточность и синхронизация"
    ],
    "bestResult": "Передавал события FMOD через ConcurrentQueue в главный поток — игровая логика обрабатывает их в своем цикле.",
    "details": null
  },
  {
    "id": "unity-lifecycle",
    "name": "Жизненный цикл Unity",
    "categoryId": "unity",
    "order": 23,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "юнити",
      "C#",
      "csharp",
      "си шарп",
      "Unity / C#",
      "Компоненты и жизненный цикл Unity"
    ],
    "bestResult": "Организовал запуск и очистку игровых контекстов, ECS-систем и сервисов при переходах между состояниями игры.",
    "details": null
  },
  {
    "id": "scenes",
    "name": "Сцены и префабы",
    "categoryId": "unity",
    "order": 24,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Префабы и управление сценами"
    ],
    "bestResult": "Организовал аддитивную загрузку игровых сцен с выгрузкой предыдущей, сохранив bootstrap-сцену с общими сервисами на все время работы приложения.",
    "details": null
  },
  {
    "id": "game-time",
    "name": "Игровое время",
    "categoryId": "unity",
    "order": 25,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Игровое время и обновление систем"
    ],
    "bestResult": "Привязал ритм и окна выстрела Half Empty к позиции музыки FMOD — игровые события следуют таймлайну трека.",
    "details": null
  },
  {
    "id": "unity-data",
    "name": "Сериализация / ScriptableObject",
    "categoryId": "unity",
    "order": 26,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Сериализация Unity и ScriptableObject"
    ],
    "bestResult": "Вынес условия и эффекты апгрейдов в ScriptableObject с SerializeReference — конфигурации собираются из отдельных блоков.",
    "details": null
  },
  {
    "id": "input",
    "name": "Системы ввода",
    "categoryId": "unity",
    "order": 27,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Системы ввода и управление"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "physics",
    "name": "Физика Unity",
    "categoryId": "unity",
    "order": 28,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "physics",
      "коллизии",
      "rigidbody",
      "Физика и взаимодействия Unity"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "math",
    "name": "Игровая математика",
    "categoryId": "unity",
    "order": 29,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Игровая математика и геометрия"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "numerics",
    "name": "Вероятность",
    "categoryId": "unity",
    "order": 30,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "",
    "details": null
  },
  {
    "id": "cpu",
    "name": "Профилирование CPU",
    "categoryId": "performance",
    "order": 31,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "оптимизация",
      "performance",
      "Оптимизация",
      "Профилирование CPU и бюджета кадра"
    ],
    "bestResult": "Снял в Unity Profiler замеры Behaviour Tree на 10 000 агентах и сравнил варианты с Burst и Jobs.",
    "details": null
  },
  {
    "id": "memory",
    "name": "Память / GC / Object Pooling",
    "categoryId": "performance",
    "order": 32,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "GC",
      "allocations",
      "сборщик мусора",
      "память",
      "Память, GC и пулы объектов"
    ],
    "bestResult": "Создал пулы объектов и прогрев игровых экземпляров — повторное использование вынесено в общий сервис.",
    "details": null
  },
  {
    "id": "gpu",
    "name": "Оптимизация рендеринга",
    "categoryId": "performance",
    "order": 33,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Вынес анимацию массовых юнитов в VAT-текстуры и передачу состояний через GPU-буфер в DOTS-симуляторе.",
    "details": null
  },
  {
    "id": "jobs",
    "name": "Jobs / Burst",
    "categoryId": "performance",
    "order": 34,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Jobs, Burst и параллельные вычисления"
    ],
    "bestResult": "Перенес исполнение Behaviour Tree в Burst IJobChunk — независимые агенты обрабатываются через ScheduleParallel.",
    "details": null
  },
  {
    "id": "ugui",
    "name": "UGUI",
    "categoryId": "ui",
    "order": 35,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "интерфейс",
      "UI",
      "uGUI",
      "UI Toolkit",
      "UI в Unity",
      "UGUI и интерфейсы игры"
    ],
    "bestResult": "Верстал интерфейсы на uGUI: инвентари, магазины апгрейдов и всплывающие окна.",
    "details": null
  },
  {
    "id": "ui-toolkit",
    "name": "UI Toolkit",
    "categoryId": "ui",
    "order": 36,
    "level": 1,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "",
    "details": null
  },
  {
    "id": "imgui",
    "name": "IMGUI",
    "categoryId": "ui",
    "order": 37,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Создал окна настройки уровней Half Empty: таймлайн по битам и выбор позиций появления целей.",
    "details": null
  },
  {
    "id": "graphview",
    "name": "GraphView",
    "categoryId": "ui",
    "order": 38,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Создал редактор Behaviour Tree на GraphView: узлы, связи и отображение состояния исполнения.",
    "details": null
  },
  {
    "id": "odin-inspector",
    "name": "Odin Inspector",
    "categoryId": "ui",
    "order": 39,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Создал GameManager на Odin Inspector для создания и настройки апгрейдов Harvest Garden в едином редакторском окне.",
    "details": null
  },
  {
    "id": "ui-performance",
    "name": "Оптимизация UI",
    "categoryId": "ui",
    "order": 40,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Производительность интерфейсов"
    ],
    "bestResult": "Обновлял UI через подписки на изменения данных и использовал спрайт-атласы для объединения UI-спрайтов в общие текстуры.",
    "details": null
  },
  {
    "id": "addressables",
    "name": "Addressables",
    "categoryId": "content",
    "order": 42,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "загрузка",
      "ресурсы",
      "assets",
      "Addressables и управление ресурсами"
    ],
    "bestResult": "Сделал сервис загрузки Addressables по меткам с кэшированием handle и освобождением ресурсов игрового контекста.",
    "details": null
  },
  {
    "id": "assets",
    "name": "Ассеты и пакеты Unity",
    "categoryId": "content",
    "order": 43,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Импорт ассетов и пакеты Unity"
    ],
    "bestResult": "Оформил DODBT как устанавливаемый Unity-пакет, разделив runtime, editor-инструменты и тесты.",
    "details": null
  },
  {
    "id": "saves",
    "name": "Сохранения / Сериализация",
    "categoryId": "content",
    "order": 44,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Сохранения и сериализация данных"
    ],
    "bestResult": "Создал репозиторий сохранений с заменяемыми стратегиями хранения — игровые данные отделены от файлов и PlayerPrefs.",
    "details": null
  },
  {
    "id": "localization",
    "name": "Локализация",
    "categoryId": "content",
    "order": 46,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Работал с модулем Unity Localization.",
    "details": null
  },
  {
    "id": "urp",
    "name": "URP",
    "categoryId": "visual",
    "order": 48,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "URP и настройка рендеринга"
    ],
    "bestResult": "Использовал URP и собственные материалы тумана для стилизации окружения Exodus Core.",
    "details": null
  },
  {
    "id": "shaders",
    "name": "Фрагментные шейдеры",
    "categoryId": "visual",
    "order": 49,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Fragment shaders",
      "Pixel shaders"
    ],
    "bestResult": "Создал настраиваемый шейдер тумана для Exodus Core — высота, направление и цвет поддерживают стилизацию локаций.",
    "details": null
  },
  {
    "id": "vertex-shaders",
    "name": "Вершинные шейдеры",
    "categoryId": "visual",
    "order": 50,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Реализовал VAT для массовых юнитов в DOTS: запекание клипов в текстуры и воспроизведение анимации в вершинном шейдере.",
    "details": null
  },
  {
    "id": "compute-shaders",
    "name": "Compute shaders",
    "categoryId": "visual",
    "order": 51,
    "level": 1,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "",
    "details": null
  },
  {
    "id": "lighting",
    "name": "Освещение / Lightmapping",
    "categoryId": "visual",
    "order": 52,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Освещение и запекание"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "vfx",
    "name": "VFX / Particle System",
    "categoryId": "visual",
    "order": 53,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Частицы и визуальные эффекты"
    ],
    "bestResult": "Создавал визуальные эффекты и стилизацию окружения Exodus Core.",
    "details": null
  },
  {
    "id": "animation",
    "name": "Animator",
    "categoryId": "visual",
    "order": 54,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Аниматор",
      "Animator Controller"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "cameras",
    "name": "Cinemachine",
    "categoryId": "visual",
    "order": 55,
    "level": 1,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Синемашин"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "dotween",
    "name": "DOTween",
    "categoryId": "visual",
    "order": 56,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "",
    "details": null
  },
  {
    "id": "audio",
    "name": "Аудио",
    "categoryId": "visual",
    "order": 57,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Игровое аудио"
    ],
    "bestResult": "Интегрировал FMOD в Half Empty: музыку, звуковые события и передачу ритма игровым системам.",
    "details": null
  },
  {
    "id": "testing",
    "name": "Тесты, NUnit",
    "categoryId": "quality",
    "order": 58,
    "level": 3,
    "featured": true,
    "featuredOrder": 7,
    "icon": null,
    "aliases": [
      "Автоматизированное тестирование"
    ],
    "bestResult": "Покрыл Behaviour Tree тестами статусов, прерываний и жизненного цикла leaf-узлов, включая Parallel.",
    "details": null
  },
  {
    "id": "builds",
    "name": "Сборки / IL2CPP",
    "categoryId": "quality",
    "order": 60,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Сборки, IL2CPP и автоматизация"
    ],
    "bestResult": "Подготовил и выпустил WebGL-версию «100 Кириешек!» на Яндекс Играх, затем выпускал обновления.",
    "details": null
  },
  {
    "id": "ci-cd",
    "name": "CI/CD",
    "categoryId": "quality",
    "order": 61,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Настраивал CI/CD для сайта-портфолио.",
    "details": null
  },
  {
    "id": "ai-assisted-development",
    "name": "ИИ в разработке",
    "categoryId": "optional",
    "order": 47,
    "level": 4,
    "featured": true,
    "featuredOrder": 8,
    "icon": null,
    "aliases": [
      "ИИ-инструменты",
      "AI-инструменты"
    ],
    "bestResult": "Активно использую Claude Fable и GPT Astra, разрабатываю AI-агентов для ускорения работы и вручную контролирую результат.",
    "details": null
  },
  {
    "id": "network-basics",
    "name": "Сети / Клиент-сервер",
    "categoryId": "optional",
    "order": 62,
    "level": 1,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Сеть и клиент-серверная модель"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "netcode",
    "name": "Сетевой геймплей",
    "categoryId": "optional",
    "order": 63,
    "level": 1,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Сетевой геймплей и репликация"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "prediction",
    "name": "Prediction / Lag Compensation",
    "categoryId": "optional",
    "order": 64,
    "level": 1,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Предсказание и компенсация задержки"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "native",
    "name": "C++ / Native Integration",
    "categoryId": "optional",
    "order": 66,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "C++ и нативная интеграция"
    ],
    "bestResult": "Использовал native callbacks FMOD и marshaling данных ритма в C# при интеграции аудиосистемы.",
    "details": null
  },
  {
    "id": "xr",
    "name": "XR",
    "categoryId": "optional",
    "order": 67,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "XR-разработка"
    ],
    "bestResult": "Сделал VR-тир в рамках учебного проекта.",
    "details": null
  },
  {
    "id": "git",
    "name": "Git",
    "categoryId": "quality",
    "order": 68,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": "/assets/images/git-mark.svg",
    "aliases": [
      "гит",
      "github",
      "контроль версий",
      "Git и совместная работа с репозиторием"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "code-review",
    "name": "Code Review",
    "categoryId": "quality",
    "order": 69,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "code review",
      "код ревью",
      "Ревью и качество кода"
    ],
    "bestResult": "Проводил code review в Half Empty — выявлял ошибки в коде команды.",
    "details": null
  },
  {
    "id": "documentation",
    "name": "Документация",
    "categoryId": "quality",
    "order": 70,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "documentation",
      "документы",
      "Техническая документация"
    ],
    "bestResult": "Подготовил README DODBT с установкой, API, примерами и ограничениями — плагин можно изучать по документации.",
    "details": null
  },
  {
    "id": "tdd",
    "name": "Test-driven development (TDD)",
    "categoryId": "architecture",
    "order": 10,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "TDD",
      "test driven development",
      "разработка через тестирование"
    ],
    "bestResult": "",
    "details": null
  }
];
