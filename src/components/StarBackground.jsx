"use client";

import React, { useRef, useEffect } from "react";

const CanvasStarry = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars = Array.from({ length: 150 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5
        }));

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'white';

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                star.y += star.speed;
                if (star.y > height) star.y = 0;
            });
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-transparent" />;
};

const StarBackground = () => {
    return (
        <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none">
            <CanvasStarry />
        </div>
    );
};

export default StarBackground;
