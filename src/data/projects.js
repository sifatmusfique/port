export const projects = [
    {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        category: "Full Stack",
        description: "Achieved a 20% reduction in checkout time by implementing a streamlined Stripe payment flow within a React-based architecture.",
        about: "This project engineered a high-performance e-commerce solution capable of handling thousands of concurrent users. By leveraging Next.js for server-side rendering, I improved SEO rankings by 40% and reduced Time to Interactive (TTI). The integration of Redux for global state management ensured a glitch-free shopping cart experience, directly contributing to higher conversion rates.",
        tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
        image: "/projects/ecommerce.png",
        links: { github: "#", live: "#" },
        features: [
            "Secure User Authentication",
            "Dynamic Product Search & Filtering",
            "Shopping Cart Management",
            "Stripe Payment Integration",
            "Admin Dashboard for Products"
        ]
    },
    {
        id: "task-management-app",
        title: "Task Management App",
        category: "Productivity",
        description: "Enabled real-time team collaboration for 50+ users by architecting a conflict-free synchronization system using Firebase.",
        about: "Built to solve communication latency in agile teams, this application delivers instant updates across devices. I implemented an optimized drag-and-drop interface that reduces task organization time by 30%. The focus was on data consistency and race condition handling, ensuring that every team member sees the exact same state at all times.",
        tech: ["Next.js", "Firebase", "Tailwind", "Dnd-Kit"],
        image: "/projects/task.png",
        links: { github: "#", live: "#" },
        features: [
            "Drag and Drop Task Management",
            "Real-time Updates with Firebase",
            "Team Collaboration Features",
            "Dark/Light Mode Support",
            "Task Categorization & Tags"
        ]
    },
    {
        id: "ai-chat-interface",
        title: "AI Chat Interface",
        category: "AI / ML",
        description: "Developed a context-aware AI assistant that retains conversation history, improving user engagement metrics by 25%.",
        about: "This interface bridges the gap between raw LLM capabilities and user-friendly design. By implementing a custom context management system, I solved the common issue of AI 'amnesia,' allowing for multi-turn reasoning. The UI performance optimization ensures that even long conversations render at 60fps, providing a premium user experience.",
        tech: ["React", "Tailwind", "OpenAI API", "Framer Motion"],
        image: "/projects/ai.png",
        links: { github: "#", live: "#" },
        features: [
            "OpenAI GPT Integration",
            "Real-time Typing Effects",
            "Conversation History Storage",
            "Context-Aware Responses",
            "Responsive Modern UI"
        ]
    },
    {
        id: "crypto-dashboard",
        title: "Crypto Dashboard",
        category: "Finance",
        description: "Delivered sub-second market data visualization for 100+ assets by optimizing API polling with aggressive caching strategies.",
        about: "Designed for high-frequency traders, this dashboard prioritizes speed and data accuracy. I engineered a caching layer that reduced external API calls by 60% while keeping data fresh. The interactive charts allow users to spot trends instantly, a critical requirement for financial decision-making.",
        tech: ["React", "Recharts", "CoinGecko API", "Axios"],
        image: "/projects/crypto.png",
        links: { github: "#", live: "#" },
        features: [
            "Live Market Data Visualization",
            "Interactive Price Charts",
            "Top 100 Coins Ranking",
            "Portfolio Value Tracker",
            "Market Trend Analysis"
        ]
    },
    {
        id: "social-media-app",
        title: "Social Media App",
        category: "Social",
        description: "Built a scalable social architecture supporting real-time interactions and infinite scrolling for seamless content consumption.",
        about: "To support a growing user base, I designed a MongoDB schema optimized for heavy read operations. The implementation of Socket.io enables instant notifications, fostering higher user retention. By offloading media processing to Cloudinary, I significantly reduced server load and improved content delivery speeds.",
        tech: ["Next.js", "MongoDB", "Socket.io", "Cloudinary"],
        image: "/projects/social.png",
        links: { github: "#", live: "#" },
        features: [
            "User Profiles & Feeds",
            "Real-time Notifications",
            "Image & Media Uploads",
            "Like & Comment System",
            "Responsive Mobile Design"
        ]
    },
    {
        id: "travel-booking-platform",
        title: "Travel Booking Platform",
        category: "Travel",
        description: "Simplified complex booking workflows into a 3-step process, resulting in a 15% increase in completed reservations.",
        about: "This platform transforms the tedious task of booking travel into an inspiring journey. I focused on reducing friction in the checkout process by validating data in real-time. The integration with Mapbox provides users with essential spatial context, directly aiding in the decision-making process for accommodation selection.",
        tech: ["React", "Node.js", "Stripe", "Mapbox"],
        image: "/projects/travel.png",
        links: { github: "#", live: "#" },
        features: [
            "Destination Search & Filtering",
            "Flight & Hotel Booking",
            "Interactive Map Integration",
            "User Reviews & Ratings",
            "Secure Booking Management"
        ]
    }
];
