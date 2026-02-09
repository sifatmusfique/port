export const projects = [
    {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        category: "Full Stack",
        description: "A full-featured online store with cart, checkout, and payments. Users can browse products, add them to cart, and securely checkout using Stripe.",
        about: "This E-Commerce platform was built to address the need for a scalable, user-friendly shopping experience. Focusing on performance and security, it leverages Next.js for server-side rendering and SEO benefits. The architecture separates the frontend storefront from the backend API, ensuring flexibility. Key challenges included implementing a secure payment flow with Stripe and managing complex global state for the shopping cart. The result is a seamless, responsive application that handles thousands of products with ease.",
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
        description: "Real-time task board with drag-and-drop functionality using Kanban methodology. Teams can collaborate in real-time to track project progress.",
        about: "Designed for agile teams, this Task Management App simplifies project tracking. The core feature is the intuitive Kanban board, built using dnd-kit for smooth drag-and-drop interactions. Real-time synchronization is achieved via Firebase, ensuring that all team members see updates instantly. The application supports multiple workspaces and granular permission settings, making it suitable for both personal use and large teams. It taught me the intricacies of WebSocket-like behavior and conflict resolution in distributed state.",
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
        description: "Modern chat UI integrated with OpenAI API. Features a sleek glassmorphism design and maintains context-aware conversations.",
        about: "This project explores the intersection of modern UI design and Artificial Intelligence. The interface mimics a premium native application with glassmorphism effects and fluid animations. Under the hood, it connects to the OpenAI API to provide intelligent responses. I implemented a custom hook to manage conversation history, allowing the AI to maintain context over multiple turns. Special attention was paid to the 'streaming' text effect to make the interaction feel alive and responsive.",
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
        description: "Real-time cryptocurrency tracking with interactive charts. Users can visualize market trends and track their favorite coins.",
        about: "In the fast-paced world of cryptocurrency, data visualization is key. This dashboard fetches real-time data from the CoinGecko API and presents it through interactive, responsive charts using Recharts. Users can toggle between different timeframes, search for specific assets, and create a watchlist. Optimizing the API calls was a significant challenge; I implemented caching strategies and debouncing to respect rate limits while keeping data fresh.",
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
        description: "A social platform with posts, likes, and comments features. Built for scalability and real-time interaction.",
        about: "Building a social media platform requires robust backend architecture. This app features a complete CRUD system for posts and comments, along with real-time notifications using Socket.io. Images are optimized and stored via Cloudinary. I focused heavily on database schema design in MongoDB to ensure efficient querying of feeds and user relationships. The frontend features an 'infinite scroll' mechanism to keep users engaged.",
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
        description: "Comprehensive booking system for flights and hotels. Features a beautiful UI for browsing destinations and managing bookings.",
        about: "This Travel Booking Platform is designed to inspire wanderlust. The UI relies heavily on high-quality imagery and immersive cards. It integrates with Mapbox to show destination locations and nearby amenities. The booking flow is a multi-step wizard that guides users through date selection, guest details, and payment. Validating this complex form data and handling dates across time zones were key technical learnings from this project.",
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
