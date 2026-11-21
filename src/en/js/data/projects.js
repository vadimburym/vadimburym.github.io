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
    "date": "May 2026 – present",
    "role": "Unity Developer",
    "technologies": [
      "Unity",
      "C#",
      "LeoEcsProto",
      "Zenject",
      "URP / HLSL",
      "Claude Code"
    ],
    "summary": "Joined at the prototype stage, built custom game AI based on Utility AI and integrated it into ECS without changing existing mechanics. Created a visual editor and debugger and maintained the AI during development. Built an AI agent so the team could create and tune enemy behavior without my help. Also took on tasks outside my main role on my own initiative",
    "cover": "/assets/images/projects/exodus-core/screen01-cover-review.webp",
    "coverVideo": {
      "src": "/assets/videos/exodus-core/gameplay-1008-web.mp4",
      "duration": 45,
      "mobileSrc": "/assets/videos/exodus-core/gameplay-1008-mobile.mp4"
    },
    "tone": "sage",
    "details": {
      "description": "A turn-based tactics game with roguelike elements, inspired by Into the Breach and Darkest Dungeon. I joined an existing prototype and worked in a core team of two alongside a Senior Unity Developer, with occasional outsourcing.\n\nMy main responsibility was game AI, from design and integration with existing code to tools for tuning, debugging and maintenance during development. I built an AI agent to create and tune enemy behavior so the team could continue this work without me.\n\nI also took on tasks outside my main role on my own initiative, including environment styling, shaders and effects, UI/UX and design in Figma.",
      "responsibility": "Game AI · AI agents · Technical art · UI/UX",
      "gallery": [
        {
          "src": "/assets/videos/exodus-core/gameplay-1008-web.mp4",
          "duration": 45,
          "poster": "/assets/images/projects/exodus-core/screen01-cover-review.webp",
          "alt": "Exodus Core gameplay",
          "mobileSrc": "/assets/videos/exodus-core/gameplay-1008-mobile.mp4"
        },
        {
          "src": "/assets/videos/exodus-core/ai-debug-1009-web.mp4",
          "duration": 40,
          "poster": "/assets/images/projects/exodus-core/ai-debug-video-poster.webp",
          "alt": "Debugging game AI decisions in Exodus Core",
          "mobileSrc": "/assets/videos/exodus-core/ai-debug-1009-mobile.mp4"
        },
        {
          "src": "/assets/images/projects/exodus-core/screen01-gallery-review.webp",
          "alt": "Exodus Core screenshot"
        },
        {
          "src": "/assets/images/projects/exodus-core/kickstarter-gallery-review.webp",
          "alt": "Kickstarter page design for Exodus Core"
        },
        {
          "src": "/assets/images/projects/exodus-core/gaea-gallery-review.webp",
          "alt": "Creating terrain for Exodus Core in Gaea"
        },
        {
          "src": "/assets/images/projects/exodus-core/ai-debug-gallery-review.webp",
          "alt": "Visual AI debugging in Exodus Core: candidate actions, position scores and the contribution of each criterion"
        }
      ],
      "achievements": [
        "Joined at the prototype stage and built custom game AI with Utility AI and Consideration Trees so enemies can compare actions, targets and positions on the board",
        "Integrated an independent AI module into the existing code with a Bridge and DI, connecting decisions to ECS execution without reworking the game mechanics",
        "Created a visual behavior editor so the game designer could build and tune AI in the Unity Editor",
        "Built a visual decision debugger so the team could see how each factor affected an enemy’s choice and adjust individual weights during polish",
        "Wrote AI tests so calculations, action selection and execution in ECS can be checked automatically after changes",
        "Maintained the AI during development, improved behavior and tools, and helped tune weights during polish",
        "Built an AI agent for creating and tuning enemy behavior so the team could maintain and extend AI configurations without my help",
        "Created a custom fog shader that added to the atmosphere of the locations and matched the game’s visual style",
        "Built all game biomes and locations, from preparing terrain and texture maps in Gaea to arranging and styling the environments in Unity",
        "Built an AI agent to make location prototypes for manual refinement, speeding up environment preparation",
        "Developed the concept and design for the project’s Kickstarter page. The campaign did not launch for legal reasons"
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
    "date": "2026",
    "role": "Plugin author",
    "technologies": [
      "Unity",
      "C#",
      "GraphView",
      "Odin Inspector",
      "NUnit"
    ],
    "summary": "Built a Behaviour Tree plugin with a C# runtime, a visual editor, graph compilation and runtime debugging. Separated tree structure from agent state and made the plugin compatible with ECS. Created an API for custom actions and tests for node lifecycles",
    "cover": "/assets/images/projects/dodbt/cover.png",
    "coverVideo": {
      "src": "/assets/videos/dodbt/reddit-demo-web.mp4",
      "duration": 50,
      "label": "Watch trailer",
      "mobileSrc": "/assets/videos/dodbt/reddit-demo-mobile.mp4"
    },
    "tone": "peach",
    "details": {
      "description": "A Unity Behaviour Tree plugin based on Data-Oriented Design. The C# runtime is separate from the visual editor and the MonoBehaviour lifecycle. I built the tool to configure, run and debug behavior with ECS integration",
      "responsibility": "Architecture and API design, implementation of the runtime, visual editor, graph compiler, debugger and tests. Unity package and documentation",
      "gallery": [
        {
          "src": "/assets/videos/dodbt/reddit-demo-web.mp4",
          "mobileSrc": "/assets/videos/dodbt/reddit-demo-mobile.mp4",
          "poster": "/assets/images/projects/dodbt/cover.png",
          "duration": 50,
          "alt": "DODBT overview: building behavior trees and using the plugin"
        },
        {
          "src": "/assets/videos/dodbt/demo-1010-web.mp4",
          "poster": "/assets/images/projects/dodbt/cover.png",
          "duration": 40,
          "alt": "DODBT visual editor and debugging demo",
          "mobileSrc": "/assets/videos/dodbt/demo-1010-mobile.mp4"
        },
        {
          "src": "/assets/images/projects/dodbt/graph-editor.png",
          "alt": "DODBT visual editor: behavior tree, node settings and compilation log"
        },
        {
          "src": "/assets/images/projects/dodbt/debug-gallery-review.webp",
          "alt": "Debugging DODBT during play: active branches and node statuses next to the test scene"
        }
      ],
      "achievements": [
        "Separated the C# runtime from MonoBehaviour so the developer controls how often behavior is selected and changed",
        "Separated tree structure from agent state so many characters can use one compiled tree without copying it",
        "Compiled graphs into compact arrays so editor data and tools stay out of the build",
        "Reused runtime buffers so the core does not need to recreate them on each tree update",
        "Created a visual editor with hints and checks so the game designer can build and tune behavior without changing code",
        "Added runtime graph debugging so the developer can see active branches and execution statuses in the Unity Editor",
        "Created a typed API for actions and context in place of a Blackboard. Dependencies are passed explicitly or through DI, and behavior integrates with ECS",
        "Wrote tests for node execution and interrupts so changes to the logic can be checked automatically"
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
    "date": "May 2026",
    "role": "Team Lead / Unity Developer",
    "technologies": [
      "Unity",
      "C#",
      "FMOD",
      "Jira",
      "Bitbucket"
    ],
    "summary": "Led a team of four and developed the architecture and all mechanics of a rhythm shooter. Integrated FMOD and built tools to set up levels to music. Organized work in Jira and Bitbucket. Together we released a three-level demo",
    "cover": "/assets/images/projects/half-empty/gameplay-poster-1011-2.webp",
    "coverVideo": {
      "src": "/assets/videos/half-empty/gameplay-1011-2-web.mp4",
      "duration": 50,
      "label": "Watch gameplay",
      "muted": false,
      "mobileSrc": "/assets/videos/half-empty/gameplay-1011-2-mobile.mp4"
    },
    "tone": "lavender",
    "details": {
      "description": "Half Empty is a first-person rhythm shooter inspired by osu! and Geometry Dash. Players shoot approaching masks to the music. The color of the current bullet determines which part of a black-and-white mask to hit. The mechanic combines rhythm, accurate aim and quick shifts in attention.\n\nI led a team of four: a Unity developer, two technical artists and a sound designer. I organized the team’s work, designed the architecture and implemented all game mechanics. I integrated FMOD and built editor tools to set enemy spawns to musical beats. Together we published a demo with settings and three levels set to different electronic tracks",
      "responsibility": "Architecture · Game mechanics · FMOD integration · Editor tools · Team workflow",
      "gallery": [
        {
          "src": "/assets/videos/half-empty/gameplay-1011-2-web.mp4",
          "poster": "/assets/images/projects/half-empty/gameplay-poster-1011-2.webp",
          "duration": 50,
          "alt": "Half Empty gameplay",
          "mobileSrc": "/assets/videos/half-empty/gameplay-1011-2-mobile.mp4"
        },
        {
          "src": "/assets/images/projects/half-empty/level-editor-gallery-review.webp",
          "alt": "Half Empty level editor: setting mask spawns by beat and position"
        },
        {
          "src": "/assets/images/projects/half-empty/tutorial-gallery-review.webp",
          "alt": "Half Empty tutorial screen: shooting rhythm, bullet colors and scoring"
        },
        {
          "src": "/assets/images/projects/half-empty/gameplay-gallery-review.webp",
          "alt": "Half Empty gameplay: masks, rhythm bar and hit streak"
        }
      ],
      "achievements": [
        "Organized the team’s work in Jira and Bitbucket, assigned tasks and coordinated development, technical art and sound",
        "Designed the architecture and implemented all game mechanics, combining shooting, rhythm and target selection by bullet color in one game loop",
        "Integrated FMOD with Unity and built audio services to connect sounds and music prepared by the sound designer",
        "Built a level editor and Inspector settings so mask spawn times, counts and directions can be set by musical beat without changing code",
        "Implemented game settings and refined the UX to get interactions with the game systems ready for the demo",
        "Released a demo with the team featuring three levels set to different tracks, available on the game jam platform"
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
    "role": "Unity Developer / Prototype author",
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
    "summary": "Built a battle simulator with Unity DOTS, adapted my Behaviour Tree for Burst and Jobs, and created a VAT pipeline for GPU unit animation. Built a modular architecture with explicit control over ECS system lifecycles and tools for configuration and debugging",
    "cover": "/assets/images/projects/dots-battle-simulator/video-poster-1012-2-cover-review.webp",
    "coverVideo": {
      "src": "/assets/videos/dots-battle-simulator/demo-1012-2-web.mp4",
      "duration": 45,
      "label": "Watch demo",
      "mobileSrc": "/assets/videos/dots-battle-simulator/demo-1012-2-mobile.mp4"
    },
    "tone": "sage",
    "details": {
      "description": "A Unity 6 DOTS battle simulator prototype for controlling large numbers of units. The main task was to combine decision-making, target searches and animation in an architecture designed to scale the simulation.\n\nDeveloped my DODBT plugin into a separate DOTS module with Burst, Jobs and BlobAsset. Built a VAT pipeline with animation baking to textures, an ECS runtime and shaders for Entities Graphics. Built the application around a persistent Bootstrap scene, separate Meta and Gameplay modes, and explicit control of resource loading, DI contexts and ECS systems",
      "responsibility": "DOTS / ECS · Game AI · GPU animation · Architecture · Editor tools",
      "gallery": [
        {
          "src": "/assets/videos/dots-battle-simulator/demo-1012-2-web.mp4",
          "poster": "/assets/images/projects/dots-battle-simulator/video-poster-1012-2-cover-review.webp",
          "duration": 45,
          "alt": "DOTS Battle Simulator Prototype demo",
          "mobileSrc": "/assets/videos/dots-battle-simulator/demo-1012-2-mobile.mp4"
        },
        {
          "src": "/assets/images/projects/dots-battle-simulator/bt-benchmark.webp",
          "alt": "BT setup and timings: 10,000 agents, 34 nodes, Ryzen 5 7500F, 0.2 s update interval"
        }
      ],
      "achievements": [
        "Designed BT execution for DOTS with a shared structure in a BlobAsset and separate agent states, enabling Burst and parallel processing with Jobs",
        "In a test with 10,000 agents and a 34-node tree, cut BT processing time from 126.25 to 1.00 ms using Burst and Jobs, about 126 times faster",
        "Separated the shared BT structure in a BlobAsset from agent states so many units can use one tree without copying its structure",
        "Built code generation for leaf nodes and runtime debugging so new logic can be connected without writing glue code by hand and its execution can be tracked in the editor",
        "Built a VAT pipeline with baking, an ECS runtime and HLSL shaders. Animations run on the GPU with clip blending, correct shadows and depth passes",
        "Implemented a battlefield grid and a spatial index for target searches so units can find enemies in nearby cells without scanning the whole army",
        "Set up mode startup with a state machine, VContainer and resource loaders so scenes, dependencies and ECS systems load and unload in a defined order",
        "Created a single window for editing ScriptableObject configurations so the game designer can set up units, behavior and game systems in one place",
        "Separated the UI and binary saves into modules so interfaces can be reused across modes and game code is independent of how data is stored"
      ],
      "benchmark": {
        "caption": "BT timings · 10,000 agents · 34 nodes · AMD Ryzen 5 7500F (6 cores / 12 threads)",
        "headers": [
          "BT processing mode",
          "Time"
        ],
        "rows": [
          [
            "Without Burst or parallel processing",
            "126.25 ms"
          ],
          [
            "Burst",
            "7.90 ms"
          ],
          [
            "Burst + Jobs, 11 worker threads",
            "1.00 ms"
          ]
        ],
        "note": "With BT updates at intervals of 0.2 s and a random offset per agent, the average load per frame was 0.1014 ms, P95 was 0.1290 ms, total CPU time was 1.008 ms, and GC allocations per tick were 0 B. This mode updates decisions less often. See the second gallery image for detailed measurements."
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
      "label": "Yandex Games",
      "url": "https://yandex.ru/games/app/100-kirieshek-evoliutsiia-merge-kliker-489322?utm_source=app_page"
    },
    "name": "100 Kirieshek!",
    "order": 5,
    "featured": false,
    "featuredOrder": null,
    "genre": "Hybrid Casual",
    "platform": "Yandex Games / Web",
    "date": "January 2026",
    "role": "Unity Developer",
    "technologies": [
      "Unity",
      "C#"
    ],
    "summary": "Built and released a 2D merge clicker in Unity for Yandex Games with an artist. Handled all technical development and post-release support, tracked where players left and released updates. The game kept a rating above 75 for its first three months",
    "cover": "/assets/images/projects/100-kirieshek/cover.webp",
    "coverVideo": {
      "src": "/assets/videos/100-kirieshek/gameplay-1013-web.mp4",
      "duration": 35,
      "label": "Watch gameplay",
      "mobileSrc": "/assets/videos/100-kirieshek/gameplay-1013-mobile.mp4"
    },
    "tone": "peach",
    "details": {
      "description": "A 2D hybrid casual merge clicker inspired by Scrap 2. Players merge Kirieshki and progress through the game, with my own additions to the original concept.\n\nBuilt the Unity project with an artist. I handled all technical work, prepared the web version and published it on Yandex Games. In the first weeks after release, I tracked metrics and where players left, then used those findings for updates. The game’s rating on the platform stayed above 75 for its first three months",
      "responsibility": "Full-cycle Unity development · Game mechanics · Web release · Metrics analysis · Updates",
      "gallery": [
        {
          "src": "/assets/videos/100-kirieshek/gameplay-1013-web.mp4",
          "poster": "/assets/images/projects/100-kirieshek/cover.webp",
          "duration": 35,
          "alt": "100 Kirieshek! gameplay",
          "mobileSrc": "/assets/videos/100-kirieshek/gameplay-1013-mobile.mp4"
        }
      ],
      "achievements": [
        "Built the entire technical side of the game in Unity and worked with an artist to take it from concept to release on Yandex Games",
        "Implemented merging and game progression, adapting the Scrap 2 concept with my own theme and gameplay ideas",
        "Analyzed metrics and player drop-off points in the first weeks after release to choose improvements and release updates",
        "Supported the game after release. Its Yandex Games rating stayed above 75 for the first three months"
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
    "summary": "Created a solo prototype of a pixel art incremental game for PC about growing plants, getting seeds with new genomes and developing a garden. Designed modular upgrade, stat and currency systems with Unity Editor settings and a reactive UI",
    "cover": "/assets/images/projects/harvest-garden/cover-cover-review.webp",
    "coverVideo": {
      "src": "/assets/videos/harvest-garden/gameplay-1015-web.mp4",
      "duration": 45,
      "label": "Watch gameplay",
      "mobileSrc": "/assets/videos/harvest-garden/gameplay-1015-mobile.mp4"
    },
    "tone": "lavender",
    "details": {
      "description": "A solo pixel art incremental game project for PC, set in an isometric garden. Players buy seeds, plant and water them, harvest crops and spend gold to grow their garden. Seeds with new genomes and rare plants add a search for new varieties to the economic loop. The prototype also includes rain.\n\nI developed the game mechanics and architecture myself. The main technical focus was extensible meta-progression. Upgrades are assembled from conditions and effects in Unity configurations, while stats, currencies and the UI have their own systems. The project is an unpublished prototype",
      "responsibility": "Game mechanics · Architecture · Meta-progression · Reactive UI",
      "gallery": [
        {
          "src": "/assets/videos/harvest-garden/gameplay-1015-web.mp4",
          "poster": "/assets/images/projects/harvest-garden/cover-cover-review.webp",
          "duration": 45,
          "alt": "Harvest Garden gameplay",
          "mobileSrc": "/assets/videos/harvest-garden/gameplay-1015-mobile.mp4"
        },
        {
          "src": "/assets/images/projects/harvest-garden/screen-1.webp",
          "alt": "Harvest Garden upgrade editor in Unity"
        },
        {
          "src": "/assets/images/projects/harvest-garden/screen-2-gallery-review.webp",
          "alt": "Harvest Garden settings"
        },
        {
          "src": "/assets/images/projects/harvest-garden/screen-3.webp",
          "alt": "Rain and plant growth in Harvest Garden"
        }
      ],
      "achievements": [
        "Implemented planting, watering, harvesting and seed purchases as the basis for the prototype and its economy",
        "Added seeds with new genomes and rare plants so growing the garden also involves finding new varieties",
        "Designed upgrades from reusable conditions and effects so new combinations can be configured in the Unity Editor without a separate class for every upgrade",
        "Separated stats and currencies into independent systems so game mechanics and upgrades share a common basis for calculations and the economy",
        "Separated game logic from presentation with read models and UniRx so the interface responds to changes in upgrade level, price and availability"
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
    "summary": "Helped develop an atmospheric 3D horror game in a student team of five mentored by 1C Game Studios. Built the project’s architecture with a custom GameCycle and implemented QTEs and individual game mechanics",
    "cover": "/assets/images/projects/golbeshnik/cover.webp",
    "coverVideo": {
      "src": "/assets/videos/golbeshnik/gameplay-1016-2-web.mp4",
      "duration": 60,
      "label": "Watch gameplay",
      "mobileSrc": "/assets/videos/golbeshnik/gameplay-1016-2-mobile.mp4"
    },
    "tone": "lavender",
    "details": {
      "description": "An atmospheric 3D sound-based horror game about a young peasant woman left alone in a house with a supernatural threat. Sound and surroundings build tension without jump scares.\n\nA student team project mentored by 1C Game Studios. In a team of five, I built the architecture and a custom game lifecycle called GameCycle on which the team developed the game systems. I implemented QTEs and individual mechanics and shared development of the other systems with other team members.",
      "responsibility": "Project architecture · QTE · Game mechanics",
      "gallery": [
        {
          "src": "/assets/videos/golbeshnik/gameplay-1016-2-web.mp4",
          "poster": "/assets/images/projects/golbeshnik/cover.webp",
          "duration": 60,
          "alt": "Golbeshnik gameplay",
          "mobileSrc": "/assets/videos/golbeshnik/gameplay-1016-2-mobile.mp4"
        }
      ],
      "achievements": [
        "Built the architecture and a custom GameCycle that the team used to develop and integrate game mechanics",
        "Implemented Quick Time Events (QTEs) and individual game mechanics, adding interactive sequences to gameplay"
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
    "role": "Game author",
    "technologies": [
      "Python",
      "Kivy"
    ],
    "summary": "My first game, a 2D roguelike inspired by Bomberman. I developed it myself in Python/Kivy with custom physics, collision handling and a game loop. In 2023–2024 I ported and adapted it to a modern game engine",
    "cover": "/assets/images/projects/bombertale/cover-cover-review.webp",
    "coverVideo": {
      "src": "/assets/videos/bombertale/gameplay-1017-web.mp4",
      "duration": 40,
      "label": "Watch gameplay",
      "mobileSrc": "/assets/videos/bombertale/gameplay-1017-mobile.mp4"
    },
    "tone": "peach",
    "details": {
      "description": "A solo 2D roguelike inspired by Bomberman with bomb placement, destructible walls and enemies. Development started in 2019. The original version was written entirely in Python with Kivy.\n\nIn 2023–2024 I ported and adapted the game to a modern game engine. The original version is available on itch.io. The adapted version has not been published.",
      "responsibility": "Game mechanics · Custom physics and collisions · Game loop · Game port",
      "gallery": [
        {
          "src": "/assets/videos/bombertale/gameplay-1017-web.mp4",
          "poster": "/assets/images/projects/bombertale/cover-cover-review.webp",
          "duration": 40,
          "alt": "Bombertale gameplay",
          "mobileSrc": "/assets/videos/bombertale/gameplay-1017-mobile.mp4"
        }
      ],
      "achievements": [
        "Implemented physics, collision handling and a game loop myself in Python/Kivy, building the foundation for the game mechanics",
        "Ported and adapted the game to a modern game engine in 2023–2024"
      ]
    },
    "coverMobile": "/assets/images/projects/bombertale/cover-mobile-review.webp"
  }
];
