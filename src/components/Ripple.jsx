"use client";

import React, { useState, useLayoutEffect, useRef } from "react";

const Ripple = ({ color = "rgba(255, 255, 255, 0.3)", duration = 850 }) => {
    const [ripples, setRipples] = useState([]);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const parent = container.parentElement;
        if (!parent) return;

        // Ensure parent has relative positioning and hidden overflow for the effect to work
        const parentStyle = window.getComputedStyle(parent);
        if (parentStyle.position === 'static') {
            parent.style.position = 'relative';
        }
        if (parentStyle.overflow !== 'hidden') {
            parent.style.overflow = 'hidden';
        }

        const handleClick = (e) => {
            const rect = parent.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            const newRipple = {
                x,
                y,
                size,
                id: Date.now(),
            };

            setRipples((prev) => [...prev, newRipple]);
        };

        parent.addEventListener('click', handleClick);

        return () => {
            parent.removeEventListener('click', handleClick);
        };
    }, []);

    // Clean up ripples
    useLayoutEffect(() => {
        if (ripples.length > 0) {
            const timeout = setTimeout(() => {
                setRipples((prev) => prev.slice(1));
            }, duration);
            return () => clearTimeout(timeout);
        }
    }, [ripples, duration]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none"
            style={{ zIndex: 0 }}
        >
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full bg-white animate-ripple"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: ripple.size,
                        height: ripple.size,
                        backgroundColor: color,
                        opacity: 0.3,
                        transform: 'scale(0)',
                        animation: `ripple ${duration}ms linear`,
                    }}
                />
            ))}
        </div>
    );
};

export default Ripple;
