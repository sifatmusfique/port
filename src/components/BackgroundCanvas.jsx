

import React from "react";

const BackgroundCanvas = () => {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-[#030014]">
            {/* Global Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-violet-900/10 via-transparent to-transparent z-0"></div>

            {/* Moving Gradients - Multi-colored Fast Blobs */}
            {/* Moving Gradients - Simplified as requested */}
            <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-fast"></div>
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-blue-700/30 rounded-full mix-blend-screen filter blur-[80px] animate-pulse-fast" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-[10%] left-[20%] w-[200px] h-[200px] bg-cyan-500/40 rounded-full mix-blend-screen filter blur-[60px] animate-pulse-fast" style={{ animationDelay: '1s' }}></div>

            {/* Heartbeat Core - Kept for depth but aligned with theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-heartbeat z-0"></div>

            {/* Fixed Grid Overlay */}
            <div className="absolute inset-0 bg-grid-fixed z-0"></div>
        </div>
    );
};

export default BackgroundCanvas;
