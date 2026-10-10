"use client";

import React, { useState, useEffect } from "react";
import {
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiPhp,
    SiNextdotjs,
    SiTailwindcss,
    SiSqlite,
    SiPuppeteer,
} from "react-icons/si";
import { FaBolt, FaTerminal, FaShieldAlt, FaMicrochip } from "react-icons/fa";

const orbitingSkills = [
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#38BDF8",
        bg: "rgba(56, 189, 248, 0.15)",
        angle: 0,
        radius: 140,
        delay: "0s",
    },
    {
        name: "React 19",
        icon: SiReact,
        color: "#61DAFB",
        bg: "rgba(97, 218, 251, 0.15)",
        angle: 45,
        radius: 175,
        delay: "-3s",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#4ADE80",
        bg: "rgba(74, 222, 128, 0.15)",
        angle: 90,
        radius: 140,
        delay: "-6s",
    },
    {
        name: "Next.js 16",
        icon: SiNextdotjs,
        color: "#FFFFFF",
        bg: "rgba(255, 255, 255, 0.12)",
        angle: 135,
        radius: 175,
        delay: "-9s",
    },
    {
        name: "Python",
        icon: SiPython,
        color: "#60A5FA",
        bg: "rgba(96, 165, 250, 0.15)",
        angle: 180,
        radius: 140,
        delay: "-12s",
    },
    {
        name: "Puppeteer",
        icon: SiPuppeteer,
        color: "#2DD4BF",
        bg: "rgba(45, 212, 191, 0.15)",
        angle: 225,
        radius: 175,
        delay: "-15s",
    },
    {
        name: "SQLite WAL",
        icon: SiSqlite,
        color: "#38BDF8",
        bg: "rgba(56, 189, 248, 0.15)",
        angle: 270,
        radius: 140,
        delay: "-18s",
    },
    {
        name: "PHP 8.2+",
        icon: SiPhp,
        color: "#A78BFA",
        bg: "rgba(167, 139, 250, 0.15)",
        angle: 315,
        radius: 175,
        delay: "-21s",
    },
];

export default function SkillsHeroVisual() {
    const [activeSkill, setActiveSkill] = useState(orbitingSkills[0]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x: x * 20, y: y * 20 });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[420px] aspect-square flex items-center justify-center select-none"
            style={{
                perspective: "1000px",
            }}
        >
            {/* Outer Subtle Ambient Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-600/10 to-fuchsia-500/20 blur-3xl -z-10 animate-pulse-slow" />

            {/* Orbit Ring 1 - Inner */}
            <div className="absolute w-[280px] h-[280px] rounded-full border border-cyan-500/20 border-dashed animate-spin-reverse opacity-70 pointer-events-none" />

            {/* Orbit Ring 2 - Outer */}
            <div className="absolute w-[350px] h-[350px] rounded-full border border-purple-500/20 border-dotted animate-spin-slow opacity-60 pointer-events-none" />

            {/* Geometric Accent Crosshairs */}
            <div className="absolute w-[370px] h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />
            <div className="absolute h-[370px] w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent pointer-events-none" />

            {/* Orbiting Satellite Nodes */}
            <div
                className="absolute inset-0 w-full h-full flex items-center justify-center animate-spin-orbital pointer-events-auto"
                style={{
                    transform: `rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
                    transition: "transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
            >
                {orbitingSkills.map((skill, index) => {
                    const angleRad = (skill.angle * Math.PI) / 180;
                    const x = Math.cos(angleRad) * skill.radius;
                    const y = Math.sin(angleRad) * skill.radius;
                    const Icon = skill.icon;
                    const isSelected = activeSkill.name === skill.name;

                    return (
                        <div
                            key={index}
                            style={{
                                transform: `translate(${x}px, ${y}px)`,
                            }}
                            className="absolute z-20"
                        >
                            <button
                                type="button"
                                onClick={() => setActiveSkill(skill)}
                                onMouseEnter={() => setActiveSkill(skill)}
                                aria-label={`Skill: ${skill.name}`}
                                className={`group/node relative p-2.5 sm:p-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg animate-counter-rotate ${
                                    isSelected
                                        ? "scale-125 border-cyan-400 bg-cyan-950/80 shadow-[0_0_25px_rgba(6,182,212,0.6)]"
                                        : "scale-100 border-white/10 bg-[#070514]/80 hover:scale-115 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                                }`}
                                style={{
                                    backgroundColor: isSelected ? skill.bg : undefined,
                                }}
                            >
                                <Icon
                                    size={20}
                                    style={{ color: skill.color }}
                                    className="transition-transform duration-300 group-hover/node:scale-110"
                                />

                                {/* Tooltip on hover */}
                                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 pointer-events-none transition-opacity duration-200 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-black/90 text-white border border-white/10 whitespace-nowrap z-30 shadow-md">
                                    {skill.name}
                                </span>
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Central Holographic Reactor Core */}
            <div
                className="relative z-10 w-44 h-44 rounded-3xl p-5 flex flex-col items-center justify-center text-center backdrop-blur-2xl border border-white/15 bg-gradient-to-b from-[#0e0a29]/90 to-[#040212]/95 shadow-[0_0_45px_rgba(112,66,248,0.35)] transition-transform duration-300"
                style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                }}
            >
                {/* Reactor Glowing Inner Ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/15 pointer-events-none" />

                {/* Animated Glowing Ring Border */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-cyan-500/30 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] text-cyan-300">
                    {React.createElement(activeSkill.icon, {
                        size: 26,
                        style: { color: activeSkill.color },
                    })}
                </div>

                <div className="text-white font-bold text-sm tracking-wide truncate max-w-[130px]">
                    {activeSkill.name}
                </div>

                <div className="text-[11px] text-cyan-400 font-mono flex items-center gap-1 mt-0.5">
                    <FaBolt size={9} className="text-amber-400 animate-pulse" />
                    <span>Active Domain</span>
                </div>

                {/* Live micro-telemetry */}
                <div className="mt-2.5 pt-2 border-t border-white/10 w-full flex items-center justify-between text-[10px] text-gray-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                        Online
                    </span>
                    <span className="text-gray-300 font-mono">&lt;0.4ms</span>
                </div>
            </div>

            {/* Floating Live Badge Top Right */}
            <div className="absolute top-2 right-0 px-3 py-1.5 rounded-xl bg-black/60 border border-purple-500/30 backdrop-blur-md shadow-lg text-[11px] text-gray-300 flex items-center gap-2 pointer-events-none animate-float">
                <FaShieldAlt className="text-purple-400 text-xs" />
                <span>Security &amp; Automation</span>
            </div>

            {/* Floating Live Badge Bottom Left */}
            <div className="absolute bottom-2 left-0 px-3 py-1.5 rounded-xl bg-black/60 border border-cyan-500/30 backdrop-blur-md shadow-lg text-[11px] text-gray-300 flex items-center gap-2 pointer-events-none animate-float animation-delay-2000">
                <FaMicrochip className="text-cyan-400 text-xs" />
                <span>Zero-Redis Architecture</span>
            </div>
        </div>
    );
}
