export const projects = [
    {
        id: "taskpulse",
        title: "TaskPulse",
        category: "Systems & Backend",
        badge: "⚡ Zero-Redis Engine",
        description: "A resilient, persistent, zero-redis background job and workflow queue engine for TypeScript/Node.js with SQLite WAL & real-time dashboard.",
        about: "TaskPulse was engineered to eliminate heavyweight Redis dependencies for background workers in mid-sized architectures. Built entirely on SQLite with Write-Ahead Logging (WAL), it provides ACID-compliant persistence, priority queues, automated exponential-backoff retries, and an interactive real-time observability dashboard for monitoring worker nodes and throughput latency under sub-millisecond overhead.",
        tech: ["TypeScript", "Node.js", "SQLite", "WebSockets", "Tailwind CSS"],
        image: "/projects/taskpulse.jpg",
        command: "npm install taskpulse",
        links: {
            github: "https://github.com/sifatmusfique/TaskPulse",
            live: "https://github.com/sifatmusfique/TaskPulse"
        },
        metrics: [
            { label: "Storage Engine", value: "SQLite WAL" },
            { label: "Redis Dependency", value: "0 MB" },
            { label: "Enqueue Latency", value: "< 0.4ms" }
        ],
        features: [
            "Zero-Redis Architecture with SQLite WAL",
            "ACID Compliant Job Persistence & Retries",
            "Real-Time WebSocket Observability Dashboard",
            "Priority Queue Scheduling & Concurrency Control",
            "Sub-millisecond Latency Benchmarks"
        ],
        architecture: [
            { step: "01. Enqueue Ingest", desc: "Push typed payload via SDK with instant atomic WAL journal commit" },
            { step: "02. Queue Arbiter", desc: "Priority dispatcher assigns tasks across available worker thread pools" },
            { step: "03. Execution Engine", desc: "Worker processes job with exponential backoff and timeout guards" },
            { step: "04. Real-time Telemetry", desc: "Broadcasts queue throughput and node latency over WebSockets" }
        ]
    },
    {
        id: "asyncbot-php",
        title: "AsyncBot PHP",
        category: "Systems & Backend",
        badge: "🚀 0% Idle CPU",
        description: "Ultra-low footprint, non-blocking asynchronous & parallel worker pool for high-throughput PHP bot development (Telegram & Discord) with 0% idle CPU.",
        about: "AsyncBot-PHP rethinks traditional synchronous PHP execution for real-time bot infrastructure. Built without requiring custom C extensions or heavy daemon wrappers, it achieves true event-loop concurrency and multi-process worker pools. Capable of handling thousands of concurrent Telegram and Discord webhook events with near-zero idle CPU footprint.",
        tech: ["PHP", "Telegram API", "Discord API", "Parallel Processing", "Event Loop"],
        image: "/projects/asyncbot.jpg",
        command: "git clone https://github.com/sifatmusfique/AsyncBot-PHP.git",
        links: {
            github: "https://github.com/sifatmusfique/AsyncBot-PHP",
            live: "https://github.com/sifatmusfique/AsyncBot-PHP"
        },
        metrics: [
            { label: "Idle CPU Load", value: "0.0%" },
            { label: "Event Dispatch", value: "< 10ms" },
            { label: "C Extensions", value: "Zero" }
        ],
        features: [
            "Non-blocking Event Loop Concurrency",
            "Zero C Extension Dependency",
            "Sub-10ms Webhook Event Dispatching",
            "Dynamic Parallel Worker Pool Scaling",
            "Production Ready for Telegram & Discord"
        ],
        architecture: [
            { step: "01. Webhook Capture", desc: "Asynchronously listens for incoming Telegram and Discord payloads" },
            { step: "02. Event Multiplexer", desc: "Non-blocking event loop routes commands to dedicated handlers" },
            { step: "03. Parallel Worker Pool", desc: "Forks heavy computational tasks across isolated worker threads" },
            { step: "04. Instant Response", desc: "Dispatches sub-10ms replies back to user chat sessions" }
        ]
    },
    {
        id: "hcaptcha-toolkit",
        title: "hCaptcha Automation Toolkit",
        category: "Security & Automation",
        badge: "🛡️ Security Research",
        description: "High-efficiency automated challenge resolution toolkit and verification script engine for web scraping and security research workflows.",
        about: "Engineered as an advanced research tool for automated test harnesses and bot defense testing, this toolkit delivers automated identification and solving workflows for interactive visual challenge flows. Features optimized HTTP header synthesis, fingerprint bypass heuristics, and neural-assisted visual object classification.",
        tech: ["JavaScript", "Node.js", "Computer Vision", "Automation", "Reverse Engineering"],
        image: "/projects/hcaptcha.jpg",
        command: "git clone https://github.com/sifatmusfique/hcaptcha.git",
        links: {
            github: "https://github.com/sifatmusfique/hcaptcha",
            live: "https://github.com/sifatmusfique/hcaptcha"
        },
        metrics: [
            { label: "Recognition Yield", value: "94.7%" },
            { label: "Avg Solve Time", value: "3.2s" },
            { label: "Heuristics", value: "Neural" }
        ],
        features: [
            "Automated Visual Challenge Recognition",
            "Fingerprint & Browser Emulation Heuristics",
            "High Throughput Batch Solving Engine",
            "Customizable Proxy & Request Pipeline",
            "Headless Integration API"
        ],
        architecture: [
            { step: "01. Frame Interception", desc: "Inspects and captures challenge tokens and visual grid coordinates" },
            { step: "02. Neural Object Classifier", desc: "Processes target categories and identifies target bounding boxes" },
            { step: "03. Emulation Pipeline", desc: "Simulates natural human cursor gestures and click intervals" },
            { step: "04. Token Validation", desc: "Receives signed verification response for headless workflows" }
        ]
    },
    {
        id: "puppeteer-3ds-api",
        title: "Puppeteer 3DS Automation API",
        category: "Security & Automation",
        badge: "🤖 Fintech Test Automation",
        description: "Headless browser automation API engineered for streamlining 3D Secure (3DS) authentication flows and payment gateway verification.",
        about: "Designed to bridge friction points during automated payment gateway verification and checkout testing. The API orchestrates headless Chromium instances via Puppeteer to handle multi-factor 3DS verification redirects, SMS OTP entry simulations, and banking iframe handshakes with full telemetry reporting.",
        tech: ["Node.js", "Puppeteer", "Express", "REST API", "Chromium"],
        image: "/projects/crypto.png",
        command: "git clone https://github.com/sifatmusfique/puppeteer-3ds-api.git",
        links: {
            github: "https://github.com/sifatmusfique/puppeteer-3ds-api",
            live: "https://github.com/sifatmusfique/puppeteer-3ds-api"
        },
        metrics: [
            { label: "Protocol Support", value: "3DS 2.0" },
            { label: "Isolation", value: "Per-Session" },
            { label: "API Engine", value: "Express/REST" }
        ],
        features: [
            "Headless 3DS Verification Flow Engine",
            "Automated Banking Iframe & Redirect Handling",
            "Configurable REST API Webhook Triggers",
            "Session & Cookie Isolation per Request",
            "Detailed Step-by-Step Telemetry & Screencasts"
        ],
        architecture: [
            { step: "01. Trigger Request", desc: "Receives test payment session parameters via authenticated REST API" },
            { step: "02. Headless Launch", desc: "Spawns isolated Chromium instance with custom fingerprint profile" },
            { step: "03. 3DS Navigation", desc: "Traverses bank security redirect iframes and completes challenge" },
            { step: "04. Callback Payload", desc: "Returns verified session tokens and execution screencast artifacts" }
        ]
    },
    {
        id: "simple-newspaper-php",
        title: "Simple Newspaper Portal & CMS",
        category: "Full Stack",
        badge: "📰 Dynamic CMS",
        description: "A dynamic news publication platform and content management system crafted with PHP, Tailwind CSS, and MySQL.",
        about: "A lightweight yet powerful digital news publishing platform engineered with clean architectural separation. It provides editors with a streamlined admin dashboard for creating breaking news stories, managing multimedia categories, and tracking reader analytics, paired with a blazing-fast, mobile-first frontend experience.",
        tech: ["PHP", "Tailwind CSS", "MySQL", "JavaScript", "HTML5"],
        image: "/projects/ecommerce.png",
        command: "git clone https://github.com/sifatmusfique/Simple_Newspaper-php.git",
        links: {
            github: "https://github.com/sifatmusfique/Simple_Newspaper-php",
            live: "https://github.com/sifatmusfique/Simple_Newspaper-php"
        },
        metrics: [
            { label: "Database", value: "MySQL" },
            { label: "Styling", value: "Tailwind CSS" },
            { label: "Architecture", value: "MVC Pattern" }
        ],
        features: [
            "Full-Featured Editorial CMS & Dashboard",
            "Category & Tag-based Article Publishing",
            "Responsive Mobile-First Tailwind Interface",
            "Role-Based Access Control (Admin/Editor)",
            "Optimized Database Queries with MySQL"
        ],
        architecture: [
            { step: "01. Editorial Admin", desc: "Content authors create and format articles in rich text editor" },
            { step: "02. Relational Storage", desc: "Structured indexing of articles, tags, and media in MySQL" },
            { step: "03. Dynamic Views", desc: "PHP templates render semantic HTML styled with Tailwind CSS" },
            { step: "04. Cache & Delivery", desc: "Fast page delivery with responsive mobile-optimized layouts" }
        ]
    },
    {
        id: "awsome-portfolio",
        title: "Modern React Developer Portfolio",
        category: "Frontend",
        badge: "✨ Modern UI / UX",
        description: "A sleek, responsive developer portfolio and showcase engineered with React JS, modern CSS animations, and modular components.",
        about: "Created as a showcase of modern frontend engineering principles. Features custom interactive cards, dark mode aesthetics, dynamic project filtering, and smooth scroll animations without relying on bulky third-party libraries.",
        tech: ["React", "JavaScript", "CSS3", "Responsive UI", "Vite"],
        image: "/projects/travel.png",
        command: "git clone https://github.com/sifatmusfique/Awsome-Portfolio.git",
        links: {
            github: "https://github.com/sifatmusfique/Awsome-Portfolio",
            live: "https://github.com/sifatmusfique/Awsome-Portfolio"
        },
        metrics: [
            { label: "Framework", value: "React JS" },
            { label: "Build Tool", value: "Vite" },
            { label: "Design", value: "Glassmorphism" }
        ],
        features: [
            "Modular React Component Architecture",
            "Fluid Dark Theme & Responsive Layout",
            "Custom CSS Keyframe & Hover Micro-Interactions",
            "Project Gallery & Experience Timeline",
            "Optimized Asset Loading & Fast FCP"
        ],
        architecture: [
            { step: "01. Component Hierarchy", desc: "Structured modular React components for hero, projects, and contact" },
            { step: "02. Responsive Engine", desc: "Fluid CSS grid & flexbox scaling across mobile, tablet, and desktop" },
            { step: "03. Animation Loop", desc: "Performant GPU-accelerated CSS keyframes and hover transitions" },
            { step: "04. Fast Asset Build", desc: "Optimized Vite bundling for sub-second first contentful paint" }
        ]
    }
];
