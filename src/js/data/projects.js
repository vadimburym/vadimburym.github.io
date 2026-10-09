// Public project data; media delivery variants prepared for mobile.
export const projects = [
  {
    "id": "exodus-core",
    "legacyIds": [
      "project-01"
    ],
    "action": {
      "label": "Steam",
      "url": "https://store.steampowered.com/app/3692020/Exodus_Core/"
    },
    "name": "Osis Studio / Exodus Core",
    "showTitleMeta": true,
    "order": 1,
    "featured": true,
    "featuredOrder": 1,
    "genre": "Turn-based Tactics",
    "platform": "Steam Demo",
    "date": "Май 2026 — настоящее время",
    "role": "Unity Developer",
    "technologies": [
      "Unity",
      "C#",
      "LeoEcsProto",
      "Zenject",
      "URP / HLSL",
      "Claude Code"
    ],
    "summary": "Пришел в проект на стадии прототипа: разработал кастомный игровой ИИ на основе Utility AI и интегрировал его в ECS без изменения существующих механик. Создал визуальный редактор и отладчик, сопровождал ИИ в ходе разработки. Разработал AI-агента, чтобы команда могла собирать и настраивать поведение врагов без моего участия. По собственной инициативе брал на себя задачи за рамками основной роли",
    "cover": "/assets/images/projects/exodus-core/screen01-cover-review.webp",
    "coverVideo": {
      "src": "/assets/videos/exodus-core/gameplay-1008-web.mp4",
      "duration": 45,
      "mobileSrc": "/assets/videos/exodus-core/gameplay-1008-mobile.mp4"
    },
    "tone": "sage",
    "details": {
      "description": "Пошаговая тактика с элементами рогалика, вдохновленная Into the Breach и Darkest Dungeon. Присоединился к существующему прототипу; работал в основной команде из двух человек вместе с Senior Unity Developer, с точечным привлечением аутсорса.\n\nМоя основная зона ответственности — игровой ИИ: от проектирования и интеграции в существующий код до инструментов настройки, отладки и сопровождения в ходе разработки. Разработал AI-агента для сборки и настройки поведения врагов, чтобы команда могла продолжать эту работу без моего участия.\n\nПо собственной инициативе также брал на себя задачи за пределами основной роли: стилизацию окружения, шейдеры и эффекты, UI/UX и дизайн в Figma.",
      "responsibility": "Игровой ИИ · AI-агенты · Технический арт · UI/UX",
      "gallery": [
        {
          "src": "/assets/videos/exodus-core/gameplay-1008-web.mp4",
          "duration": 45,
          "poster": "/assets/images/projects/exodus-core/screen01-cover-review.webp",
          "alt": "Геймплей Exodus Core",
          "mobileSrc": "/assets/videos/exodus-core/gameplay-1008-mobile.mp4"
        },
        {
          "src": "/assets/videos/exodus-core/ai-debug-1009-web.mp4",
          "duration": 40,
          "poster": "/assets/images/projects/exodus-core/ai-debug-video-poster.webp",
          "alt": "Отладка решений игрового ИИ Exodus Core",
          "mobileSrc": "/assets/videos/exodus-core/ai-debug-1009-mobile.mp4"
        },
        {
          "src": "/assets/images/projects/exodus-core/screen01-gallery-review.webp",
          "alt": "Скриншот Exodus Core"
        },
        {
          "src": "/assets/images/projects/exodus-core/kickstarter-gallery-review.webp",
          "alt": "Дизайн страницы Exodus Core для Kickstarter"
        },
        {
          "src": "/assets/images/projects/exodus-core/gaea-gallery-review.webp",
          "alt": "Создание ландшафта Exodus Core в Gaea"
        },
        {
          "src": "/assets/images/projects/exodus-core/ai-debug-gallery-review.webp",
          "alt": "Визуальная отладка игрового ИИ Exodus Core: кандидаты действий, оценки позиций и вклад отдельных критериев"
        }
      ],
      "achievements": [
        "Присоединился на стадии прототипа и разработал кастомный игровой ИИ на основе Utility AI и Consideration Trees — противники сравнивают действия, цели и позиции на поле",
        "Интегрировал независимый AI-модуль в существующий код через Bridge и DI — связал принятие решений с исполнением в ECS без переработки игровых механик",
        "Создал визуальный редактор поведения — геймдизайнер получил возможность собирать и настраивать ИИ в Unity Editor",
        "Разработал визуальный отладчик решений — команда видела вклад факторов в выбор противника и точечно корректировала веса при полишинге",
        "Покрыл ИИ тестами — расчеты, выбор действий и их исполнение в ECS можно проверять автоматически при изменениях",
        "Сопровождал ИИ в ходе разработки — дорабатывал поведение и инструменты, участвовал в настройке весов при полишинге",
        "Разработал AI-агента для сборки и настройки поведения врагов — чтобы команда могла поддерживать и расширять конфигурации ИИ без моего участия",
        "Создал кастомный шейдер тумана, который усилил атмосферу локаций и поддержал выбранную стилизацию игры",
        "Собрал все биомы и локации игры — от подготовки рельефа и текстурных карт в Gaea до компоновки окружения и финальной стилизации в Unity",
        "Разработал AI-агента для сборки прототипов локаций с последующей ручной доработкой — это ускорило подготовку окружения",
        "Разработал концепцию и дизайн страницы проекта для Kickstarter; кампания не была запущена по юридическим причинам"
      ]
    },
    "coverMobile": "/assets/images/projects/exodus-core/screen01-mobile-review.webp"
  },
  {
    "id": "dodbt",
    "legacyIds": [
      "project-02"
    ],
    "action": {
      "label": "GitHub",
      "url": "https://github.com/vadimburym/DODBT"
    },
    "name": "DODBT",
    "order": 4,
    "featured": true,
    "featuredOrder": 2,
    "genre": "Behaviour Tree",
    "platform": "Unity Plugin",
    "date": "Q1 2026",
    "role": "Автор плагина",
    "technologies": [
      "Unity",
      "C#",
      "GraphView",
      "Odin Inspector",
      "NUnit"
    ],
    "summary": "Разработал Behaviour Tree-плагин с ядром исполнения на C#, визуальным редактором, компиляцией графов и отладкой выполнения. Отделил структуру дерева от состояния агентов и обеспечил совместимость с ECS-архитектурой. Создал API пользовательских действий и тесты жизненного цикла узлов",
    "cover": "/assets/images/projects/dodbt/cover.png",
    "coverVideo": {
      "src": "/assets/videos/dodbt/demo-1010-web.mp4",
      "duration": 40,
      "label": "Смотреть демонстрацию",
      "mobileSrc": "/assets/videos/dodbt/demo-1010-mobile.mp4"
    },
    "tone": "peach",
    "details": {
      "description": "Behaviour Tree-плагин для Unity, построенный на принципах Data-Oriented Design. Ядро исполнения на C# отделено от визуального редактора и жизненного цикла MonoBehaviour. Создавал инструмент для настройки, исполнения и отладки поведения с интеграцией в ECS-архитектуру",
      "responsibility": "Проектирование архитектуры и API, реализация runtime, визуального редактора, компилятора графов, отладчика и тестов. Подготовка Unity-пакета и документации",
      "gallery": [
        {
          "src": "/assets/videos/dodbt/demo-1010-web.mp4",
          "poster": "/assets/images/projects/dodbt/cover.png",
          "duration": 40,
          "alt": "Демонстрация визуального редактора и отладки DODBT",
          "mobileSrc": "/assets/videos/dodbt/demo-1010-mobile.mp4"
        },
        {
          "src": "/assets/images/projects/dodbt/graph-editor.png",
          "alt": "Визуальный редактор DODBT: дерево поведения, настройки узлов и журнал компиляции"
        },
        {
          "src": "/assets/images/projects/dodbt/debug-gallery-review.webp",
          "alt": "Отладка DODBT во время игры: активные ветви и статусы узлов рядом с тестовой сценой"
        }
      ],
      "achievements": [
        "Отделил ядро исполнения на C# от MonoBehaviour — разработчик сам управляет частотой выбора и смены поведения",
        "Разделил структуру дерева и состояния агентов — одно скомпилированное BT используется множеством персонажей без копирования дерева",
        "Реализовал компиляцию графа в компактные массивы — редакторские данные и инструменты не попадают в билд",
        "Организовал переиспользование runtime-буферов — ядру не требуется создавать их заново при каждом обновлении дерева",
        "Создал визуальный редактор с подсказками и проверками — геймдизайнер собирает и настраивает поведение без правки кода",
        "Добавил runtime-отладку графа — разработчик видит активные ветви и статусы выполнения прямо в Unity Editor",
        "Создал типизированный API действий и контекста вместо Blackboard — зависимости передаются явно или через DI, а поведение интегрируется с ECS",
        "Покрыл выполнение и прерывание узлов тестами — изменения логики можно проверять автоматически"
      ]
    },
    "coverMobile": "/assets/images/projects/dodbt/cover-mobile-review.webp"
  },
  {
    "id": "half-empty",
    "legacyIds": [
      "project-03"
    ],
    "action": {
      "label": "Jammer",
      "url": "https://jammer.website/en/games/5"
    },
    "name": "Half Empty",
    "order": 2,
    "featured": true,
    "featuredOrder": 3,
    "genre": "First-person Rhythm Shooter",
    "platform": "Demo",
    "date": "Май 2026",
    "role": "Team Lead / Unity Developer",
    "technologies": [
      "Unity",
      "C#",
      "FMOD",
      "Jira",
      "Bitbucket"
    ],
    "summary": "Возглавил команду из четырех человек и разработал архитектуру и все игровые механики ритм-шутера. Интегрировал FMOD и создал инструменты настройки уровней под музыку. Организовал работу в Jira и Bitbucket — вместе выпустили демоверсию с тремя уровнями",
    "cover": "/assets/images/projects/half-empty/gameplay-poster-1011-2.webp",
    "coverVideo": {
      "src": "/assets/videos/half-empty/gameplay-1011-2-web.mp4",
      "duration": 50,
      "label": "Смотреть геймплей",
      "muted": false,
      "mobileSrc": "/assets/videos/half-empty/gameplay-1011-2-mobile.mp4"
    },
    "tone": "lavender",
    "details": {
      "description": "Half Empty — ритм-шутер от первого лица, вдохновленный osu! и Geometry Dash. Игрок отстреливает приближающиеся маски в такт музыке: цвет текущего патрона определяет, в какую часть черно-белой маски нужно попасть. Механика объединяет чувство ритма, точность прицеливания и быстрое переключение внимания.\n\nВозглавил команду из четырех человек: Unity-разработчик, два технических художника и саунд-дизайнер. Организовал командные процессы, спроектировал архитектуру и реализовал все игровые механики. Интегрировал FMOD и разработал Editor-инструменты для настройки появления противников по музыкальным битам. Совместно довели проект до опубликованной демоверсии с настройками и тремя уровнями под разные электронные композиции",
      "responsibility": "Архитектура · Игровые механики · Интеграция FMOD · Editor-инструменты · Командные процессы",
      "gallery": [
        {
          "src": "/assets/videos/half-empty/gameplay-1011-2-web.mp4",
          "poster": "/assets/images/projects/half-empty/gameplay-poster-1011-2.webp",
          "duration": 50,
          "alt": "Геймплей Half Empty",
          "mobileSrc": "/assets/videos/half-empty/gameplay-1011-2-mobile.mp4"
        },
        {
          "src": "/assets/images/projects/half-empty/level-editor-gallery-review.webp",
          "alt": "Редактор уровней Half Empty: настройка появления масок по музыкальным битам и позициям"
        },
        {
          "src": "/assets/images/projects/half-empty/tutorial-gallery-review.webp",
          "alt": "Обучающий экран Half Empty: ритм стрельбы, цвет патронов и система очков"
        },
        {
          "src": "/assets/images/projects/half-empty/gameplay-gallery-review.webp",
          "alt": "Игровой процесс Half Empty: маски, ритм-бар и серия попаданий"
        }
      ],
      "achievements": [
        "Организовал работу команды в Jira и Bitbucket — распределял задачи и координировал разработку, технический арт и звук",
        "Спроектировал архитектуру и реализовал все игровые механики — объединил стрельбу, ритм и выбор цели по цвету патрона в единый игровой цикл",
        "Интегрировал FMOD в Unity и разработал аудиосервисы — обеспечил подключение звуков и музыкального контента, подготовленного саунд-дизайнером",
        "Создал редактор уровней и настройки в инспекторе — появление масок, их количество и направления можно задавать по музыкальным битам без изменения кода",
        "Реализовал настройки игры и дорабатывал UX — довел взаимодействие с игровыми системами до готового демоформата",
        "Вместе с командой выпустил демоверсию с тремя уровнями под разные саундтреки — проект доступен на площадке гейм-джема"
      ]
    },
    "coverMobile": "/assets/images/projects/half-empty/gameplay-poster-1011-2-mobile-review.webp"
  },
  {
    "id": "dots-battle-simulator",
    "action": {
      "label": "GitHub",
      "url": "https://github.com/vadimburym/DOTS-Battle-Simulator-Prototype"
    },
    "name": "DOTS Battle Simulator Prototype",
    "order": 3,
    "showGenre": false,
    "featured": false,
    "featuredOrder": null,
    "genre": "Battle Simulator",
    "platform": "Unity DOTS Prototype",
    "date": "Q1–Q2 2026",
    "role": "Unity Developer / Автор прототипа",
    "technologies": [
      "Unity 6",
      "C#",
      "DOTS / Entities",
      "Burst / Jobs",
      "Entities Graphics",
      "URP / HLSL",
      "VContainer",
      "Addressables",
      "UniTask",
      "R3",
      "Odin Inspector"
    ],
    "summary": "Разработал боевой симулятор на Unity DOTS: адаптировал собственный Behaviour Tree под Burst и Jobs и создал VAT-пайплайн для анимации юнитов на GPU. Построил модульную архитектуру с управляемым жизненным циклом ECS-систем и инструментами настройки и отладки",
    "cover": "/assets/images/projects/dots-battle-simulator/video-poster-1012-2-cover-review.webp",
    "coverVideo": {
      "src": "/assets/videos/dots-battle-simulator/demo-1012-2-web.mp4",
      "duration": 45,
      "label": "Смотреть демонстрацию",
      "mobileSrc": "/assets/videos/dots-battle-simulator/demo-1012-2-mobile.mp4"
    },
    "tone": "sage",
    "details": {
      "description": "Прототип боевого симулятора на Unity 6 DOTS для массового управления юнитами. Основная задача — совместить принятие решений, поиск целей и анимацию в архитектуре, рассчитанной на масштабирование симуляции.\n\nРазвил собственный плагин DODBT в отдельный DOTS-модуль с Burst, Jobs и BlobAsset. Разработал VAT-пайплайн: запекание анимаций в текстуры, ECS-runtime и шейдеры для Entities Graphics. Архитектуру приложения построил вокруг постоянной Bootstrap-сцены, отдельных режимов Meta и Gameplay и явного управления загрузкой ресурсов, DI-контекстами и ECS-системами",
      "responsibility": "DOTS / ECS · Игровой ИИ · GPU-анимация · Архитектура · Editor-инструменты",
      "gallery": [
        {
          "src": "/assets/videos/dots-battle-simulator/demo-1012-2-web.mp4",
          "poster": "/assets/images/projects/dots-battle-simulator/video-poster-1012-2-cover-review.webp",
          "duration": 45,
          "alt": "Демонстрация DOTS Battle Simulator Prototype",
          "mobileSrc": "/assets/videos/dots-battle-simulator/demo-1012-2-mobile.mp4"
        },
        {
          "src": "/assets/images/projects/dots-battle-simulator/bt-benchmark.webp",
          "alt": "Конфигурация и замеры BT: 10 000 агентов, 34 узла, Ryzen 5 7500F, интервал обновления 0,2 с"
        }
      ],
      "achievements": [
        "Спроектировал DOTS-исполнение BT с общей структурой в BlobAsset и раздельным состоянием агентов — обеспечил совместимость с Burst и параллельную обработку через Jobs",
        "В тесте на 10 000 агентов с деревом из 34 узлов сократил время обработки BT с 126,25 до 1,00 мс с помощью Burst и Jobs — примерно в 126 раз",
        "Разделил общую структуру BT в BlobAsset и состояния агентов — множество юнитов использует одно дерево без копирования его структуры",
        "Создал кодогенерацию для leaf-узлов и runtime-отладку — новую логику можно подключать без ручного написания связующего кода и отслеживать ее выполнение в редакторе",
        "Разработал VAT-пайплайн с запеканием, ECS-runtime и HLSL-шейдерами — анимации исполняются на GPU, поддерживают смешивание клипов и корректные тени и depth-проходы",
        "Реализовал сетку поля боя и пространственный индекс поиска целей — юниты находят противников в соседних ячейках без полного перебора всей армии",
        "Организовал запуск режимов через State Machine, VContainer и загрузчики ресурсов — сцены, зависимости и ECS-системы поднимаются и освобождаются в заданном порядке",
        "Создал единое окно настройки ScriptableObject-конфигов — параметры юнитов, поведения и игровых систем доступны геймдизайнеру из одного интерфейса",
        "Выделил UI и бинарные сохранения в отдельные модули — интерфейсы переиспользуются между режимами, а игровой код не зависит от способа хранения данных"
      ],
      "benchmark": {
        "caption": "Замеры BT · 10 000 агентов · 34 узла · AMD Ryzen 5 7500F (6 ядер / 12 потоков)",
        "headers": [
          "Режим обработки BT",
          "Время"
        ],
        "rows": [
          [
            "Без Burst и распараллеливания",
            "126,25 мс"
          ],
          [
            "Burst",
            "7,90 мс"
          ],
          [
            "Burst + Jobs, 11 рабочих потоков",
            "1,00 мс"
          ]
        ],
        "note": "При интервальном обновлении BT (0,2 с, случайное смещение на агента): средняя нагрузка на кадр — 0,1014 мс, P95 — 0,1290 мс; суммарное CPU-время — 1,008 мс; GC-аллокации за тик — 0 B. Это отдельный режим с более редким обновлением решений. Подробные замеры — на втором изображении галереи."
      }
    },
    "legacyIds": [
      "project-04"
    ],
    "coverMobile": "/assets/images/projects/dots-battle-simulator/video-poster-1012-2-mobile-review.webp"
  },
  {
    "id": "100-kirieshek",
    "legacyIds": [
      "project-05",
      "stoker-ieshek"
    ],
    "action": {
      "label": "Яндекс игры",
      "url": "https://yandex.ru/games/app/100-kirieshek-evoliutsiia-merge-kliker-489322?utm_source=app_page"
    },
    "name": "100 Кириешек!",
    "order": 5,
    "featured": false,
    "featuredOrder": null,
    "genre": "Hybrid Casual",
    "platform": "Яндекс Игры / Web",
    "date": "Январь 2026",
    "role": "Unity Developer",
    "technologies": [
      "Unity",
      "C#"
    ],
    "summary": "Разработал и выпустил 2D merge-кликер на Unity для Яндекс Игр в команде с художником. Взял на себя полный цикл технической разработки и поддержку после релиза: анализировал отток игроков и выпускал обновления. Первые три месяца игра удерживала рейтинг выше 75",
    "cover": "/assets/images/projects/100-kirieshek/cover.webp",
    "coverVideo": {
      "src": "/assets/videos/100-kirieshek/gameplay-1013-web.mp4",
      "duration": 35,
      "label": "Смотреть геймплей",
      "mobileSrc": "/assets/videos/100-kirieshek/gameplay-1013-mobile.mp4"
    },
    "tone": "peach",
    "details": {
      "description": "Двухмерный merge-кликер в жанре Hybrid Casual, вдохновленный Scrap 2. Игровой цикл построен на объединении кириешек и развитии прогрессии, с собственными дополнениями к исходной концепции.\n\nРазработал проект на Unity в команде с художником: отвечал за всю техническую реализацию, подготовку веб-версии и выпуск на Яндекс Играх. После релиза в первые недели отслеживал метрики и точки оттока игроков, использовал наблюдения для последующих обновлений. Первые три месяца рейтинг игры на площадке оставался выше 75",
      "responsibility": "Полный цикл Unity-разработки · Игровые механики · Web-релиз · Анализ метрик · Обновления",
      "gallery": [
        {
          "src": "/assets/videos/100-kirieshek/gameplay-1013-web.mp4",
          "poster": "/assets/images/projects/100-kirieshek/cover.webp",
          "duration": 35,
          "alt": "Геймплей 100 Кириешек!",
          "mobileSrc": "/assets/videos/100-kirieshek/gameplay-1013-mobile.mp4"
        }
      ],
      "achievements": [
        "Разработал всю техническую часть игры на Unity — вместе с художником довел проект от концепции до публикации на Яндекс Играх",
        "Реализовал механику объединения и игровой прогресс — адаптировал концепцию Scrap 2 под собственную тему и дополнительные игровые решения",
        "Анализировал метрики и точки оттока игроков в первые недели после релиза — использовал данные для выбора дальнейших доработок и выпуска обновлений",
        "Поддерживал игру после публикации — первые три месяца ее рейтинг на Яндекс Играх оставался выше 75"
      ]
    },
    "coverMobile": "/assets/images/projects/100-kirieshek/cover-mobile-review.webp"
  },
  {
    "id": "harvest-garden",
    "legacyIds": [
      "project-06"
    ],
    "action": null,
    "name": "Harvest Garden",
    "order": 6,
    "featured": false,
    "featuredOrder": null,
    "genre": "Incremental",
    "platform": "PC Prototype",
    "date": "Q3–Q4 2025",
    "role": "Solo Unity Developer",
    "technologies": [
      "Unity",
      "C#",
      "LeoEcsLite",
      "Zenject",
      "UniRx",
      "Odin Inspector"
    ],
    "summary": "Создал сольный прототип пиксельной инкрементальной игры для ПК: выращивание растений, получение семян с новыми геномами и развитие сада. Спроектировал модульные системы улучшений, характеристик и валют с настройкой в Unity Editor и реактивным UI",
    "cover": "/assets/images/projects/harvest-garden/cover-cover-review.webp",
    "coverVideo": {
      "src": "/assets/videos/harvest-garden/gameplay-1015-web.mp4",
      "duration": 45,
      "label": "Смотреть геймплей",
      "mobileSrc": "/assets/videos/harvest-garden/gameplay-1015-mobile.mp4"
    },
    "tone": "lavender",
    "details": {
      "description": "Сольный pet-проект — пиксельная инкрементальная игра для ПК с изометрическим садом. Игрок покупает семена, высаживает и поливает растения, собирает урожай и вкладывает золото в дальнейшее развитие. Получение семян с новыми геномами и редких растений добавляет к экономическому циклу поиск новых разновидностей. Прототип также включает механику дождя.\n\nСамостоятельно разработал игровые механики и архитектуру проекта. Основной технический акцент — расширяемая мета-прогрессия: улучшения собираются из условий и эффектов в конфигурациях Unity, а характеристики, валюты и интерфейс вынесены в отдельные системы. Проект находится на стадии прототипа и не опубликован",
      "responsibility": "Игровые механики · Архитектура · Мета-прогрессия · Реактивный UI",
      "gallery": [
        {
          "src": "/assets/videos/harvest-garden/gameplay-1015-web.mp4",
          "poster": "/assets/images/projects/harvest-garden/cover-cover-review.webp",
          "duration": 45,
          "alt": "Геймплей Harvest Garden",
          "mobileSrc": "/assets/videos/harvest-garden/gameplay-1015-mobile.mp4"
        },
        {
          "src": "/assets/images/projects/harvest-garden/screen-1.webp",
          "alt": "Редактор улучшений Harvest Garden в Unity"
        },
        {
          "src": "/assets/images/projects/harvest-garden/screen-2-gallery-review.webp",
          "alt": "Настройки Harvest Garden"
        },
        {
          "src": "/assets/images/projects/harvest-garden/screen-3.webp",
          "alt": "Дождь и выращивание растений в Harvest Garden"
        }
      ],
      "achievements": [
        "Реализовал цикл посадки, полива и сбора урожая с покупкой семян — собрал основу игрового прототипа и экономической прогрессии",
        "Добавил получение семян с новыми геномами и редких растений — развитие сада дополнил поиском новых разновидностей",
        "Спроектировал улучшения из переиспользуемых условий и эффектов — новые комбинации можно настраивать в Unity Editor без отдельного класса под каждое улучшение",
        "Выделил характеристики и валюты в самостоятельные системы — игровые механики и улучшения используют общую основу для расчетов и экономики",
        "Разделил игровую логику и представление через модели чтения и UniRx — интерфейс реагирует на изменение уровня, цены и доступности улучшений"
      ]
    },
    "coverMobile": "/assets/images/projects/harvest-garden/cover-mobile-review.webp"
  },
  {
    "id": "golbeshnik",
    "action": {
      "label": "itch.io",
      "url": "https://alexa-sp.itch.io/golbeshnik"
    },
    "name": "Golbeshnik",
    "order": 7,
    "featured": false,
    "featuredOrder": null,
    "genre": "Sound Horror",
    "platform": "Windows",
    "date": "2024–2025",
    "role": "Unity Developer",
    "technologies": [
      "Unity",
      "C#",
      "GameCycle"
    ],
    "summary": "Участвовал в разработке атмосферного 3D-хоррора в студенческой команде из пяти человек под менторством 1C Game Studios. Создал архитектурную основу проекта с собственным GameCycle, реализовал QTE и отдельные игровые механики",
    "cover": "/assets/images/projects/golbeshnik/cover.webp",
    "coverVideo": {
      "src": "/assets/videos/golbeshnik/gameplay-1016-2-web.mp4",
      "duration": 60,
      "label": "Смотреть геймплей",
      "mobileSrc": "/assets/videos/golbeshnik/gameplay-1016-2-mobile.mp4"
    },
    "tone": "lavender",
    "details": {
      "description": "Атмосферный 3D саунд-хоррор о молодой крестьянке, оставшейся в доме один на один с потусторонней угрозой. Напряжение строится на звуках и окружении, без скримеров.\n\nСтуденческий командный проект под менторством 1C Game Studios. В команде из пяти человек создал архитектурную основу и собственный жизненный цикл GameCycle, поверх которых команда разрабатывала игровые системы. Реализовал QTE и отдельные механики; разработку остальных систем разделял с другими участниками.",
      "responsibility": "Архитектура проекта · QTE · Игровые механики",
      "gallery": [
        {
          "src": "/assets/videos/golbeshnik/gameplay-1016-2-web.mp4",
          "poster": "/assets/images/projects/golbeshnik/cover.webp",
          "duration": 60,
          "alt": "Геймплей Golbeshnik",
          "mobileSrc": "/assets/videos/golbeshnik/gameplay-1016-2-mobile.mp4"
        }
      ],
      "achievements": [
        "Создал архитектурную основу и собственный жизненный цикл GameCycle — команда использовала их для разработки и интеграции игровых механик",
        "Реализовал Quick Time Events (QTE) и отдельные игровые механики — добавил интерактивные эпизоды в игровой процесс"
      ]
    },
    "coverMobile": "/assets/images/projects/golbeshnik/cover-mobile-review.webp"
  },
  {
    "id": "bombertale",
    "action": {
      "label": "itch.io",
      "url": "https://vadimburym.itch.io/bombertale"
    },
    "name": "Bombertale",
    "order": 8,
    "featured": false,
    "featuredOrder": null,
    "genre": "2D Roguelike",
    "platform": "Windows",
    "date": "2023–2024",
    "role": "Автор игры",
    "technologies": [
      "Python",
      "Kivy"
    ],
    "summary": "Моя первая игра — 2D-рогалик по мотивам Bomberman. Самостоятельно разработал ее на Python/Kivy с собственной физикой, обработкой столкновений и игровым циклом. В 2023–2024 годах перенес и адаптировал проект под современный игровой движок",
    "cover": "/assets/images/projects/bombertale/cover-cover-review.webp",
    "coverVideo": {
      "src": "/assets/videos/bombertale/gameplay-1017-web.mp4",
      "duration": 40,
      "label": "Смотреть геймплей",
      "mobileSrc": "/assets/videos/bombertale/gameplay-1017-mobile.mp4"
    },
    "tone": "peach",
    "details": {
      "description": "Сольный 2D-рогалик по мотивам Bomberman: установка бомб, разрушение стен и борьба с противниками. Начал разработку в 2019 году; исходная версия полностью написана на Python с библиотекой Kivy.\n\nВ 2023–2024 годах перенес и адаптировал игру под современный игровой движок. На itch.io доступна исходная версия; адаптированная версия не опубликована.",
      "responsibility": "Игровые механики · Собственная физика и столкновения · Игровой цикл · Перенос проекта",
      "gallery": [
        {
          "src": "/assets/videos/bombertale/gameplay-1017-web.mp4",
          "poster": "/assets/images/projects/bombertale/cover-cover-review.webp",
          "duration": 40,
          "alt": "Геймплей Bombertale",
          "mobileSrc": "/assets/videos/bombertale/gameplay-1017-mobile.mp4"
        }
      ],
      "achievements": [
        "Самостоятельно реализовал физику, обработку столкновений и игровой цикл на Python/Kivy — собрал собственную основу для работы игровых механик",
        "Перенес и адаптировал игру под современный игровой движок в 2023–2024 годах"
      ]
    },
    "coverMobile": "/assets/images/projects/bombertale/cover-mobile-review.webp"
  }
];
