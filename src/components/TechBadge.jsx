"use client";

import React from "react";
import {
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiPhp,
    SiSqlite,
    SiMysql,
    SiReact,
    SiTailwindcss,
    SiPuppeteer,
    SiVite,
    SiExpress,
    SiTelegram,
    SiDiscord,
    SiNextdotjs,
    SiHtml5,
    SiCss3,
    SiFirebase,
    SiMongodb,
    SiSocketdotio,
    SiStripe,
    SiRedux,
} from "react-icons/si";
import { FaBolt, FaTerminal, FaNetworkWired, FaEye, FaCode } from "react-icons/fa";

const techMeta = {
    typescript: { icon: SiTypescript, color: "#3178C6", bg: "rgba(49, 120, 198, 0.12)" },
    javascript: { icon: SiJavascript, color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.12)" },
    "node.js": { icon: SiNodedotjs, color: "#5FA04E", bg: "rgba(95, 160, 78, 0.12)" },
    node: { icon: SiNodedotjs, color: "#5FA04E", bg: "rgba(95, 160, 78, 0.12)" },
    php: { icon: SiPhp, color: "#777BB4", bg: "rgba(119, 123, 180, 0.15)" },
    sqlite: { icon: SiSqlite, color: "#003B57", bg: "rgba(0, 150, 220, 0.15)" },
    "sqlite wal": { icon: SiSqlite, color: "#38BDF8", bg: "rgba(56, 189, 248, 0.15)" },
    mysql: { icon: SiMysql, color: "#4479A1", bg: "rgba(68, 121, 161, 0.15)" },
    react: { icon: SiReact, color: "#61DAFB", bg: "rgba(97, 218, 251, 0.12)" },
    "tailwind css": { icon: SiTailwindcss, color: "#06B6D4", bg: "rgba(6, 182, 212, 0.12)" },
    tailwind: { icon: SiTailwindcss, color: "#06B6D4", bg: "rgba(6, 182, 212, 0.12)" },
    puppeteer: { icon: SiPuppeteer, color: "#00D8A2", bg: "rgba(0, 216, 162, 0.15)" },
    vite: { icon: SiVite, color: "#646CFF", bg: "rgba(100, 108, 255, 0.15)" },
    express: { icon: SiExpress, color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.1)" },
    telegram: { icon: SiTelegram, color: "#26A5E4", bg: "rgba(38, 165, 228, 0.15)" },
    "telegram api": { icon: SiTelegram, color: "#26A5E4", bg: "rgba(38, 165, 228, 0.15)" },
    discord: { icon: SiDiscord, color: "#5865F2", bg: "rgba(88, 101, 242, 0.15)" },
    "discord api": { icon: SiDiscord, color: "#5865F2", bg: "rgba(88, 101, 242, 0.15)" },
    "next.js": { icon: SiNextdotjs, color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.1)" },
    html5: { icon: SiHtml5, color: "#E34F26", bg: "rgba(227, 79, 38, 0.12)" },
    css3: { icon: SiCss3, color: "#1572B6", bg: "rgba(21, 114, 182, 0.12)" },
    firebase: { icon: SiFirebase, color: "#FFCA28", bg: "rgba(255, 202, 40, 0.15)" },
    mongodb: { icon: SiMongodb, color: "#47A248", bg: "rgba(71, 162, 72, 0.15)" },
    "socket.io": { icon: SiSocketdotio, color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.1)" },
    stripe: { icon: SiStripe, color: "#635BFF", bg: "rgba(99, 91, 255, 0.15)" },
    redux: { icon: SiRedux, color: "#764ABC", bg: "rgba(118, 74, 188, 0.15)" },
    websockets: { icon: FaNetworkWired, color: "#A855F7", bg: "rgba(168, 85, 247, 0.15)" },
    "parallel processing": { icon: FaBolt, color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)" },
    "event loop": { icon: FaBolt, color: "#10B981", bg: "rgba(16, 185, 129, 0.15)" },
    "computer vision": { icon: FaEye, color: "#EC4899", bg: "rgba(236, 72, 153, 0.15)" },
    automation: { icon: FaTerminal, color: "#06B6D4", bg: "rgba(6, 182, 212, 0.15)" },
    "reverse engineering": { icon: FaCode, color: "#F43F5E", bg: "rgba(244, 63, 94, 0.15)" },
    "rest api": { icon: FaNetworkWired, color: "#38BDF8", bg: "rgba(56, 189, 248, 0.15)" },
    chromium: { icon: FaBolt, color: "#3B82F6", bg: "rgba(59, 130, 246, 0.15)" },
    "responsive ui": { icon: FaCode, color: "#8B5CF6", bg: "rgba(139, 92, 246, 0.15)" },
};

export default function TechBadge({ name, size = "sm" }) {
    const key = name.toLowerCase().trim();
    const meta = techMeta[key] || { icon: FaCode, color: "#06B6D4", bg: "rgba(6, 182, 212, 0.1)" };
    const Icon = meta.icon;

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-lg border transition-all duration-300 font-medium ${
                size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm"
            } hover:scale-105`}
            style={{
                backgroundColor: meta.bg,
                borderColor: `${meta.color}35`,
                color: meta.color === "#FFFFFF" ? "#E2E8F0" : meta.color,
            }}
        >
            <Icon size={size === "sm" ? 12 : 14} style={{ color: meta.color }} />
            <span>{name}</span>
        </span>
    );
}
