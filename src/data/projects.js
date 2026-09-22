export const projects = [
    {
        id: "taskpulse",
        title: "TaskPulse",
        category: "Systems / Backend",
        description: "A resilient, persistent, zero-redis background job and workflow queue engine for TypeScript/Node.js with SQLite WAL & real-time dashboard.",
        about: "TaskPulse was engineered to eliminate heavyweight Redis dependencies for background workers in mid-sized architectures. Built entirely on SQLite with Write-Ahead Logging (WAL), it provides ACID-compliant persistence, priority queues, automated exponential-backoff retries, and an interactive real-time observability dashboard for monitoring worker nodes and throughput latency under sub-millisecond overhead.",
        tech: ["TypeScript", "Node.js", "SQLite WAL", "WebSockets", "Tailwind CSS"],
        image: "/projects/taskpulse.jpg",
        links: {
            github: "https://github.com/sifatmusfique/TaskPulse",
            live: "https://github.com/sifatmusfique/TaskPulse"
        },
        features: [
            "Zero-Redis Architecture with SQLite WAL",
            "ACID Compliant Job Persistence & Retries",
            "Real-Time WebSocket Observability Dashboard",
            "Priority Queue Scheduling & Concurrency Control",
            "Sub-millisecond Latency Benchmarks"
        ]
    },
    {
        id: "asyncbot-php",
        title: "AsyncBot PHP",
        category: "Asynchronous Systems",
        description: "Ultra-low footprint, non-blocking asynchronous & parallel worker pool for high-throughput PHP bot development (Telegram & Discord) with 0% idle CPU.",
        about: "AsyncBot-PHP rethinks traditional synchronous PHP execution for real-time bot infrastructure. Built without requiring custom C extensions or heavy daemon wrappers, it achieves true event-loop concurrency and multi-process worker pools. Capable of handling thousands of concurrent Telegram and Discord webhook events with near-zero idle CPU footprint.",
        tech: ["PHP", "Event Loop", "Parallel Processing", "Telegram API", "Discord API"],
        image: "/projects/asyncbot.jpg",
        links: {
            github: "https://github.com/sifatmusfique/AsyncBot-PHP",
            live: "https://github.com/sifatmusfique/AsyncBot-PHP"
        },
        features: [
            "Non-blocking Event Loop Concurrency",
            "Zero C Extension Dependency",
            "Sub-10ms Webhook Event Dispatching",
            "Dynamic Parallel Worker Pool Scaling",
            "Production Ready for Telegram & Discord"
        ]
    },
    {
        id: "hcaptcha-toolkit",
        title: "hCaptcha Automation Toolkit",
        category: "Security & Automation",
        description: "High-efficiency automated challenge resolution toolkit and verification script engine for web scraping and security research workflows.",
        about: "Engineered as an advanced research tool for automated test harnesses and bot defense testing, this toolkit delivers automated identification and solving workflows for interactive visual challenge flows. Features optimized HTTP header synthesis, fingerprint bypass heuristics, and neural-assisted visual object classification.",
        tech: ["JavaScript", "Node.js", "Computer Vision", "Automation", "Reverse Engineering"],
        image: "/projects/hcaptcha.jpg",
        links: {
            github: "https://github.com/sifatmusfique/hcaptcha",
            live: "https://github.com/sifatmusfique/hcaptcha"
        },
        features: [
            "Automated Visual Challenge Recognition",
            "Fingerprint & Browser Emulation Heuristics",
            "High Throughput Batch Solving Engine",
            "Customizable Proxy & Request Pipeline",
            "Headless Integration API"
        ]
    },
    {
        id: "puppeteer-3ds-api",
        title: "Puppeteer 3DS Automation API",
        category: "Fintech & Automation",
        description: "Headless browser automation API engineered for streamlining 3D Secure (3DS) authentication flows and payment gateway verification.",
        about: "Designed to bridge friction points during automated payment gateway verification and checkout testing. The API orchestrates headless Chromium instances via Puppeteer to handle multi-factor 3DS verification redirects, SMS OTP entry simulations, and banking iframe handshakes with full telemetry reporting.",
        tech: ["Node.js", "Puppeteer", "Express", "REST API", "Chromium"],
        image: "/projects/crypto.png",
        links: {
            github: "https://github.com/sifatmusfique/puppeteer-3ds-api",
            live: "https://github.com/sifatmusfique/puppeteer-3ds-api"
        },
        features: [
            "Headless 3DS Verification Flow Engine",
            "Automated Banking Iframe & Redirect Handling",
            "Configurable REST API Webhook Triggers",
            "Session & Cookie Isolation per Request",
            "Detailed Step-by-Step Telemetry & Screencasts"
        ]
    },
    {
        id: "simple-newspaper-php",
        title: "Simple Newspaper Portal & CMS",
        category: "Full Stack Web",
        description: "A dynamic news publication platform and content management system crafted with PHP, Tailwind CSS, and MySQL.",
        about: "A lightweight yet powerful digital news publishing platform engineered with clean architectural separation. It provides editors with a streamlined admin dashboard for creating breaking news stories, managing multimedia categories, and tracking reader analytics, paired with a blazing-fast, mobile-first frontend experience.",
        tech: ["PHP", "Tailwind CSS", "MySQL", "JavaScript", "HTML5"],
        image: "/projects/ecommerce.png",
        links: {
            github: "https://github.com/sifatmusfique/Simple_Newspaper-php",
            live: "https://github.com/sifatmusfique/Simple_Newspaper-php"
        },
        features: [
            "Full-Featured Editorial CMS & Dashboard",
            "Category & Tag-based Article Publishing",
            "Responsive Mobile-First Tailwind Interface",
            "Role-Based Access Control (Admin/Editor)",
            "Optimized Database Queries with MySQL"
        ]
    },
    {
        id: "awsome-portfolio",
        title: "Modern React Developer Portfolio",
        category: "Frontend Development",
        description: "A sleek, responsive developer portfolio and showcase engineered with React JS, modern CSS animations, and modular components.",
        about: "Created as a showcase of modern frontend engineering principles. Features custom interactive cards, dark mode aesthetics, dynamic project filtering, and smooth scroll animations without relying on bulky third-party libraries.",
        tech: ["React", "JavaScript", "CSS3", "Responsive UI", "Vite"],
        image: "/projects/travel.png",
        links: {
            github: "https://github.com/sifatmusfique/Awsome-Portfolio",
            live: "https://github.com/sifatmusfique/Awsome-Portfolio"
        },
        features: [
            "Modular React Component Architecture",
            "Fluid Dark Theme & Responsive Layout",
            "Custom CSS Keyframe & Hover Micro-Interactions",
            "Project Gallery & Experience Timeline",
            "Optimized Asset Loading & Fast FCP"
        ]
    }
];
