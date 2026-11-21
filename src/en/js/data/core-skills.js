// Imported from skills-draft. A level of 0 means unrated. A null details field means no detailed description.
export const coreLevels = [
  "Know the theory",
  "Apply with support",
  "Apply independently",
  "Solve unusual problems",
  "Teach others"
];

export const coreCategories = [
  {
    "id": "architecture",
    "name": "Architecture and design"
  },
  {
    "id": "ai",
    "name": "Game AI and algorithms"
  },
  {
    "id": "csharp",
    "name": "C# and asynchronous code"
  },
  {
    "id": "unity",
    "name": "Unity and game mechanics",
    "icon": "/assets/images/unity-mark.png"
  },
  {
    "id": "performance",
    "name": "Performance"
  },
  {
    "id": "ui",
    "name": "User interfaces"
  },
  {
    "id": "content",
    "name": "Assets, data and tools"
  },
  {
    "id": "visual",
    "name": "Graphics, animation and sound"
  },
  {
    "id": "quality",
    "name": "Development practices"
  },
  {
    "id": "optional",
    "name": "Additional skills"
  }
];

export const coreSkills = [
  {
    "id": "oop",
    "name": "OOP",
    "categoryId": "architecture",
    "order": 1,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "OOP",
      "object oriented",
      "composition",
      "OOP and composition"
    ],
    "bestResult": "Replaced upgrade inheritance with a combination of checks and effects. Each new behavior can be added as a separate block.",
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
      "principles",
      "SOLID and responsibilities"
    ],
    "bestResult": "Adapted a behavior tree for Burst. Limited how the core can be extended while keeping it possible to add actions without changing tree traversal.",
    "details": null
  },
  {
    "id": "patterns",
    "name": "Design patterns",
    "categoryId": "architecture",
    "order": 4,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "design patterns",
      "patterns",
      "State Machine"
    ],
    "bestResult": "Used a state machine to start and switch game modes without recreating shared services or loading unnecessary assets.",
    "details": null
  },
  {
    "id": "modules",
    "name": "Modular architecture",
    "categoryId": "architecture",
    "order": 6,
    "level": 4,
    "featured": true,
    "featuredOrder": 3,
    "icon": null,
    "aliases": [
      "architecture",
      "game systems",
      "DDD",
      "modules",
      "asmdef",
      "ASMDev",
      "Assembly Definition",
      "assembly definitions",
      "assemblies",
      "Modular game architecture"
    ],
    "bestResult": "Moved game settings into a module with its own UI and reused it in another project, saving the team from building it again.",
    "details": null
  },
  {
    "id": "data-driven",
    "name": "Data-driven architecture",
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
      "configs"
    ],
    "bestResult": "Built a ScriptableObject configuration layer and connected it to the game systems so the designer can adjust balance and content without changing code.",
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
      "Dependency injection and lifecycles"
    ],
    "bestResult": "Built a shared system lifecycle with VContainer to manage startup, pause and cleanup in one place. Also worked with Zenject.",
    "details": null
  },
  {
    "id": "events",
    "name": "Event-driven communication",
    "categoryId": "architecture",
    "order": 8,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "events",
      "Event Bus",
      "events"
    ],
    "bestResult": "Built a UI request bus in a separate ECS world so game mechanics can change without editing UI buttons.",
    "details": null
  },
  {
    "id": "reactive",
    "name": "Reactive programming",
    "categoryId": "architecture",
    "order": 9,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "UniRx",
      "R3",
      "reactive",
      "Presenter"
    ],
    "bestResult": "Combined purchase conditions and handled model switching in a reactive Presenter so the UI shows the current upgrade state. Worked with UniRx and R3.",
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
      "Leo",
      "ECS and Data-Oriented Design"
    ],
    "bestResult": "Optimized a Behaviour Tree for DOTS with Burst and Jobs, cutting processing time for 10,000 agents from 126.25 to 1.00 ms in the Unity Editor.",
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
      "State machines: FSM and HFSM"
    ],
    "bestResult": "Implemented FSMs for game modes and HFSMs in Unity learning prototypes.",
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
      "Behavior trees"
    ],
    "bestResult": "Built a data-oriented Behaviour Tree with Parallel nodes and interrupts for DOTS/Burst. Explained its design and performance gains in conference talks.",
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
      "Utility AI and decision-making"
    ],
    "bestResult": "Built custom AI using Utility AI for a turn-based tactics game on an isometric grid, explained the system to the team and built an AI agent to help maintain it",
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
      "action planning",
      "goal-oriented planning"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "pathfinding",
    "name": "Navigation / Pathfinding",
    "categoryId": "ai",
    "order": 14,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Navigation and pathfinding"
    ],
    "bestResult": "Implemented A* in Bombertale and integrated Unity NavMesh with ECS for NPC movement, pursuit and patrol.",
    "details": null
  },
  {
    "id": "ai-perception",
    "name": "AI perception and coordination",
    "categoryId": "ai",
    "order": 15,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Agent perception and coordination"
    ],
    "bestResult": "Built ECS sensors with timed updates and a spatial grid to limit target searches to nearby cells.",
    "details": null
  },
  {
    "id": "algorithms",
    "name": "Algorithms and data structures",
    "categoryId": "ai",
    "order": 16,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Changed Behaviour Tree execution from recursion to iterative traversal with explicit state to adapt the algorithm for DOTS/Burst.",
    "details": null
  },
  {
    "id": "csharp-types",
    "name": "C# types and generics",
    "categoryId": "csharp",
    "order": 17,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "C# types, generics and contracts"
    ],
    "bestResult": "Separated node context and state using generics and ref so one Behaviour Tree API can work with different actions.",
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
      "LINQ and collection processing"
    ],
    "bestResult": "Used LINQ in the Behaviour Tree editor to filter connections and process selected graph nodes.",
    "details": null
  },
  {
    "id": "errors",
    "name": "Exceptions / IDisposable",
    "categoryId": "csharp",
    "order": 19,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Error handling and resource cleanup"
    ],
    "bestResult": "Set up cleanup for subscriptions, files and resources when game services shut down.",
    "details": null
  },
  {
    "id": "reflection",
    "name": "Reflection / Code generation",
    "categoryId": "csharp",
    "order": 20,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Attributes, reflection and code generation"
    ],
    "bestResult": "Built an editor tool that generates C# tables for calling Behaviour Tree leaf nodes through Burst function pointers.",
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
      "asynchronous",
      "Asynchronous operations and cancellation"
    ],
    "bestResult": "Added cancellation to music stage preparation so restarting or leaving the game stops the previous countdown.",
    "details": null
  },
  {
    "id": "threading",
    "name": "Multithreading",
    "categoryId": "csharp",
    "order": 22,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Multithreading and synchronization"
    ],
    "bestResult": "Sent FMOD events to the main thread through ConcurrentQueue so game logic can process them in its own loop.",
    "details": null
  },
  {
    "id": "unity-lifecycle",
    "name": "Unity lifecycle",
    "categoryId": "unity",
    "order": 23,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Unity",
      "C#",
      "csharp",
      "C sharp",
      "Unity / C#",
      "Unity components and lifecycle"
    ],
    "bestResult": "Set up startup and cleanup for game contexts, ECS systems and services during game state transitions.",
    "details": null
  },
  {
    "id": "scenes",
    "name": "Scenes and prefabs",
    "categoryId": "unity",
    "order": 24,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Prefabs and scene management"
    ],
    "bestResult": "Set up additive scene loading. The previous game scene unloads while the bootstrap scene keeps shared services available throughout the application.",
    "details": null
  },
  {
    "id": "game-time",
    "name": "Game time",
    "categoryId": "unity",
    "order": 25,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Game time and system updates"
    ],
    "bestResult": "Linked the rhythm and shooting windows in Half Empty to the FMOD music position so game events follow the track timeline.",
    "details": null
  },
  {
    "id": "unity-data",
    "name": "Serialization / ScriptableObject",
    "categoryId": "unity",
    "order": 26,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Unity serialization and ScriptableObject"
    ],
    "bestResult": "Moved upgrade conditions and effects into ScriptableObjects with SerializeReference so configurations can be built from separate blocks.",
    "details": null
  },
  {
    "id": "input",
    "name": "Input systems",
    "categoryId": "unity",
    "order": 27,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Input systems and controls"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "physics",
    "name": "Unity physics",
    "categoryId": "unity",
    "order": 28,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "physics",
      "collisions",
      "rigidbody",
      "Unity physics and interactions"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "math",
    "name": "Game math",
    "categoryId": "unity",
    "order": 29,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Game math and geometry"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "numerics",
    "name": "Probability",
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
    "name": "CPU profiling",
    "categoryId": "performance",
    "order": 31,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "optimization",
      "performance",
      "Optimization",
      "CPU profiling and frame budgets"
    ],
    "bestResult": "Measured Behaviour Tree performance on 10,000 agents in the Unity Profiler and compared versions with Burst and Jobs.",
    "details": null
  },
  {
    "id": "memory",
    "name": "Memory / GC / Object Pooling",
    "categoryId": "performance",
    "order": 32,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "GC",
      "allocations",
      "garbage collector",
      "memory",
      "Memory, GC and object pools"
    ],
    "bestResult": "Built object pools and prewarmed game instances, with one shared service for reuse.",
    "details": null
  },
  {
    "id": "gpu",
    "name": "Rendering optimization",
    "categoryId": "performance",
    "order": 33,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Used VAT textures for large groups of units and sent animation states through a GPU buffer in the DOTS simulator.",
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
      "Jobs, Burst and parallel computing"
    ],
    "bestResult": "Moved Behaviour Tree execution to a Burst IJobChunk so independent agents run through ScheduleParallel.",
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
      "interface",
      "UI",
      "uGUI",
      "UI Toolkit",
      "UI in Unity",
      "UGUI and game interfaces"
    ],
    "bestResult": "Built inventories, upgrade shops and pop-up windows with uGUI.",
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
    "bestResult": "Built level setup windows for Half Empty with a beat timeline and target spawn positions.",
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
    "bestResult": "Built a Behaviour Tree editor with GraphView to show nodes, connections and execution state.",
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
    "bestResult": "Built a GameManager with Odin Inspector to create and configure Harvest Garden upgrades in one editor window.",
    "details": null
  },
  {
    "id": "ui-performance",
    "name": "UI optimization",
    "categoryId": "ui",
    "order": 40,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "UI performance"
    ],
    "bestResult": "Updated the UI through subscriptions to data changes and used sprite atlases to pack UI sprites into shared textures.",
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
      "loading",
      "resources",
      "assets",
      "Addressables and asset management"
    ],
    "bestResult": "Built a service that loads Addressables by label, caches handles and releases the resources of each game context.",
    "details": null
  },
  {
    "id": "assets",
    "name": "Unity assets and packages",
    "categoryId": "content",
    "order": 43,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Asset importing and Unity packages"
    ],
    "bestResult": "Packaged DODBT as an installable Unity package with separate runtime code, editor tools and tests.",
    "details": null
  },
  {
    "id": "saves",
    "name": "Saving / Serialization",
    "categoryId": "content",
    "order": 44,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Saving and data serialization"
    ],
    "bestResult": "Built a save repository with interchangeable storage strategies to keep game data separate from files and PlayerPrefs.",
    "details": null
  },
  {
    "id": "localization",
    "name": "Localization",
    "categoryId": "content",
    "order": 46,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Worked with the Unity Localization module.",
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
      "URP and rendering setup"
    ],
    "bestResult": "Used URP and custom fog materials to style the environments in Exodus Core.",
    "details": null
  },
  {
    "id": "shaders",
    "name": "Fragment shaders",
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
    "bestResult": "Created a configurable fog shader for Exodus Core with adjustable height, direction and color to match the look of each location.",
    "details": null
  },
  {
    "id": "vertex-shaders",
    "name": "Vertex shaders",
    "categoryId": "visual",
    "order": 50,
    "level": 4,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [],
    "bestResult": "Implemented VAT for large groups of DOTS units by baking clips into textures and playing animations in the vertex shader.",
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
    "name": "Lighting / Lightmapping",
    "categoryId": "visual",
    "order": 52,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Lighting and baking"
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
      "Particles and visual effects"
    ],
    "bestResult": "Created visual effects and styled the environments in Exodus Core.",
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
      "Animator",
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
      "Cinemachine"
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
    "name": "Audio",
    "categoryId": "visual",
    "order": 57,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Game audio"
    ],
    "bestResult": "Integrated FMOD into Half Empty for music, sound events and sending rhythm data to game systems.",
    "details": null
  },
  {
    "id": "testing",
    "name": "Tests, NUnit",
    "categoryId": "quality",
    "order": 58,
    "level": 3,
    "featured": true,
    "featuredOrder": 7,
    "icon": null,
    "aliases": [
      "Automated testing"
    ],
    "bestResult": "Wrote Behaviour Tree tests for node statuses, interrupts and leaf node lifecycles, including Parallel.",
    "details": null
  },
  {
    "id": "builds",
    "name": "Builds / IL2CPP",
    "categoryId": "quality",
    "order": 60,
    "level": 2,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Builds, IL2CPP and automation"
    ],
    "bestResult": "Prepared and released the WebGL version of 100 Kirieshek! on Yandex Games, then released updates.",
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
    "bestResult": "Set up CI/CD for the portfolio website.",
    "details": null
  },
  {
    "id": "ai-assisted-development",
    "name": "AI in development",
    "categoryId": "optional",
    "order": 47,
    "level": 4,
    "featured": true,
    "featuredOrder": 8,
    "icon": null,
    "aliases": [
      "AI tools",
      "AI development tools"
    ],
    "bestResult": "I regularly use Claude Fable and GPT Astra, build AI agents to speed up work and check the results myself.",
    "details": null
  },
  {
    "id": "network-basics",
    "name": "Networking / Client-server",
    "categoryId": "optional",
    "order": 62,
    "level": 1,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Networking and the client-server model"
    ],
    "bestResult": "",
    "details": null
  },
  {
    "id": "netcode",
    "name": "Network gameplay",
    "categoryId": "optional",
    "order": 63,
    "level": 1,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "Network gameplay and replication"
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
      "Prediction and lag compensation"
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
      "C++ and native integration"
    ],
    "bestResult": "Used native FMOD callbacks and marshaled rhythm data into C# when integrating the audio system.",
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
      "XR development"
    ],
    "bestResult": "Built a VR shooting range for a study project.",
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
      "Git",
      "github",
      "version control",
      "Git and shared repositories"
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
      "code review",
      "Code review and quality"
    ],
    "bestResult": "Reviewed code in Half Empty and found errors in the team’s code.",
    "details": null
  },
  {
    "id": "documentation",
    "name": "Documentation",
    "categoryId": "quality",
    "order": 70,
    "level": 3,
    "featured": false,
    "featuredOrder": null,
    "icon": null,
    "aliases": [
      "documentation",
      "documents",
      "Technical documentation"
    ],
    "bestResult": "Wrote the DODBT README covering installation, the API, examples and limitations so developers can learn to use the plugin from its documentation.",
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
      "test-driven development"
    ],
    "bestResult": "",
    "details": null
  }
];
