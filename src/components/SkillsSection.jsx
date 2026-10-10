"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiPhp,
    SiCplusplus,
    SiPostgresql,
    SiSqlite,
    SiMongodb,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiPuppeteer,
    SiDocker,
    SiGit,
    SiLinux,
    SiVite,
    SiRedis,
} from "react-icons/si";
import {
    FaCode,
    FaServer,
    FaShieldAlt,
    FaLayerGroup,
    FaSearch,
    FaArrowRight,
    FaExternalLinkAlt,
    FaCheck,
    FaTerminal,
    FaMicrochip,
} from "react-icons/fa";
import Ripple from "./Ripple";

export const skillsData = [
    // Languages & Runtimes
    {
        name: "TypeScript",
        category: "Languages",
        level: 95,
        rating: "Expert",
        experience: "3+ Years",
        icon: SiTypescript,
        color: "#38BDF8",
        bg: "rgba(56, 189, 248, 0.12)",
        borderColor: "rgba(56, 189, 248, 0.3)",
        highlight: "Strict type safety, generics & enterprise system modeling",
        projects: ["TaskPulse", "Modern Portfolio"],
        projectId: "taskpulse",
    },
    {
        name: "JavaScript (ESNext)",
        category: "Languages",
        level: 98,
        rating: "Master",
        experience: "4+ Years",
        icon: SiJavascript,
        color: "#FACC15",
        bg: "rgba(250, 204, 21, 0.12)",
        borderColor: "rgba(250, 204, 21, 0.3)",
        highlight: "Asynchronous concurrency, event-loop mastery & closures",
        projects: ["hCaptcha Automation", "Awsome Portfolio"],
        projectId: "hcaptcha-toolkit",
    },
    {
        name: "PHP 8.2+",
        category: "Languages",
        level: 90,
        rating: "Advanced",
        experience: "3+ Years",
        icon: SiPhp,
        color: "#A78BFA",
        bg: "rgba(167, 139, 250, 0.12)",
        borderColor: "rgba(167, 139, 250, 0.3)",
        highlight: "Non-blocking event loop bot infrastructure & zero-CPU idle workers",
        projects: ["AsyncBot PHP", "Simple Newspaper CMS"],
        projectId: "asyncbot-php",
    },
    {
        name: "Python 3",
        category: "Languages",
        level: 88,
        rating: "Advanced",
        experience: "2+ Years",
        icon: SiPython,
        color: "#60A5FA",
        bg: "rgba(96, 165, 250, 0.12)",
        borderColor: "rgba(96, 165, 250, 0.3)",
        highlight: "Scientific computing, neural heuristics & automated scrapers",
        projects: ["Research Benchmarks", "Vision Classifiers"],
        projectId: "hcaptcha-toolkit",
    },
    {
        name: "C++",
        category: "Languages",
        level: 82,
        rating: "Proficient",
        experience: "2+ Years",
        icon: SiCplusplus,
        color: "#0284C7",
        bg: "rgba(2, 132, 199, 0.12)",
        borderColor: "rgba(2, 132, 199, 0.3)",
        highlight: "High-performance memory control & algorithmic complexity optimization",
        projects: ["Algorithmic Engines"],
        projectId: null,
    },

    // Frontend & Interfaces
    {
        name: "React 19",
        category: "Frontend",
        level: 96,
        rating: "Expert",
        experience: "3+ Years",
        icon: SiReact,
        color: "#61DAFB",
        bg: "rgba(97, 218, 251, 0.12)",
        borderColor: "rgba(97, 218, 251, 0.3)",
        highlight: "Modern Server Components, custom hooks & reactive state engines",
        projects: ["Modern React Portfolio", "TaskPulse Dashboard"],
        projectId: "awsome-portfolio",
    },
    {
        name: "Next.js 16",
        category: "Frontend",
        level: 94,
        rating: "Expert",
        experience: "2+ Years",
        icon: SiNextdotjs,
        color: "#FFFFFF",
        bg: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.25)",
        highlight: "App Router, SSG/SSR pipelines, Turbopack & edge routing",
        projects: ["Sifat Musfique Official Site"],
        projectId: "awsome-portfolio",
    },
    {
        name: "Tailwind CSS 4",
        category: "Frontend",
        level: 96,
        rating: "Expert",
        experience: "3+ Years",
        icon: SiTailwindcss,
        color: "#06B6D4",
        bg: "rgba(6, 182, 212, 0.12)",
        borderColor: "rgba(6, 182, 212, 0.3)",
        highlight: "Modern utility-first styling, glassmorphism, responsive grids",
        projects: ["Simple Newspaper CMS", "Official Portfolio"],
        projectId: "simple-newspaper-php",
    },
    {
        name: "Framer Motion",
        category: "Frontend",
        level: 88,
        rating: "Advanced",
        experience: "2+ Years",
        icon: SiFramer,
        color: "#F43F5E",
        bg: "rgba(244, 63, 94, 0.12)",
        borderColor: "rgba(244, 63, 94, 0.3)",
        highlight: "Fluid physics-based micro-interactions, layout transitions & springs",
        projects: ["Interactive Showcases"],
        projectId: "awsome-portfolio",
    },
    {
        name: "Vite",
        category: "Frontend",
        level: 92,
        rating: "Advanced",
        experience: "2+ Years",
        icon: SiVite,
        color: "#818CF8",
        bg: "rgba(129, 140, 248, 0.12)",
        borderColor: "rgba(129, 140, 248, 0.3)",
        highlight: "Lightning-fast HMR and optimized production bundling",
        projects: ["Awsome Portfolio"],
        projectId: "awsome-portfolio",
    },

    // Backend & Systems
    {
        name: "Node.js & Express",
        category: "Backend",
        level: 94,
        rating: "Expert",
        experience: "3+ Years",
        icon: SiNodedotjs,
        color: "#4ADE80",
        bg: "rgba(74, 222, 128, 0.12)",
        borderColor: "rgba(74, 222, 128, 0.3)",
        highlight: "High-throughput asynchronous REST APIs & multi-process worker pools",
        projects: ["TaskPulse", "Puppeteer 3DS API"],
        projectId: "taskpulse",
    },
    {
        name: "SQLite WAL Engine",
        category: "Backend",
        level: 92,
        rating: "Advanced",
        experience: "2+ Years",
        icon: SiSqlite,
        color: "#38BDF8",
        bg: "rgba(56, 189, 248, 0.12)",
        borderColor: "rgba(56, 189, 248, 0.3)",
        highlight: "Sub-millisecond ACID queues with zero-Redis footprint",
        projects: ["TaskPulse Queue Engine"],
        projectId: "taskpulse",
    },
    {
        name: "PostgreSQL & MySQL",
        category: "Backend",
        level: 90,
        rating: "Advanced",
        experience: "3+ Years",
        icon: SiPostgresql,
        color: "#60A5FA",
        bg: "rgba(96, 165, 250, 0.12)",
        borderColor: "rgba(96, 165, 250, 0.3)",
        highlight: "Relational indexing, transactional queries & schema optimization",
        projects: ["Simple Newspaper CMS"],
        projectId: "simple-newspaper-php",
    },
    {
        name: "WebSockets & Event Loops",
        category: "Backend",
        level: 92,
        rating: "Advanced",
        experience: "2+ Years",
        icon: SiRedis,
        color: "#EC4899",
        bg: "rgba(236, 72, 153, 0.12)",
        borderColor: "rgba(236, 72, 153, 0.3)",
        highlight: "Bi-directional real-time telemetry streaming & pub/sub architecture",
        projects: ["TaskPulse Dashboard", "AsyncBot PHP"],
        projectId: "taskpulse",
    },

    // Security & Automation
    {
        name: "Puppeteer & Headless Chromium",
        category: "Security & Automation",
        level: 95,
        rating: "Expert",
        experience: "3+ Years",
        icon: SiPuppeteer,
        color: "#2DD4BF",
        bg: "rgba(45, 212, 191, 0.12)",
        borderColor: "rgba(45, 212, 191, 0.3)",
        highlight: "3DS banking flow bypass, biometric emulation & headless execution",
        projects: ["Puppeteer 3DS API", "hCaptcha Automation"],
        projectId: "puppeteer-3ds-api",
    },
    {
        name: "Bot Defense & Heuristics",
        category: "Security & Automation",
        level: 92,
        rating: "Specialist",
        experience: "2+ Years",
        icon: FaShieldAlt,
        color: "#F43F5E",
        bg: "rgba(244, 63, 94, 0.12)",
        borderColor: "rgba(244, 63, 94, 0.3)",
        highlight: "Fingerprint synthesis, HTTP header emulation & anti-bot research",
        projects: ["hCaptcha Automation Toolkit"],
        projectId: "hcaptcha-toolkit",
    },

    // DevOps & Cloud
    {
        name: "Git & CI/CD",
        category: "DevOps & Cloud",
        level: 90,
        rating: "Advanced",
        experience: "4+ Years",
        icon: SiGit,
        color: "#F97316",
        bg: "rgba(249, 115, 22, 0.12)",
        borderColor: "rgba(249, 115, 22, 0.3)",
        highlight: "Version control workflows, release orchestration & automated testing",
        projects: ["All Open-Source Repositories"],
        projectId: "taskpulse",
    },
    {
        name: "Linux & Shell Scripting",
        category: "DevOps & Cloud",
        level: 88,
        rating: "Advanced",
        experience: "3+ Years",
        icon: SiLinux,
        color: "#E2E8F0",
        bg: "rgba(226, 232, 240, 0.1)",
        borderColor: "rgba(226, 232, 240, 0.25)",
        highlight: "Process management, daemonization, cron triggers & system profiling",
        projects: ["AsyncBot Daemon", "TaskPulse Workers"],
        projectId: "asyncbot-php",
    },
    {
        name: "Docker & Containerization",
        category: "DevOps & Cloud",
        level: 85,
        rating: "Proficient",
        experience: "2+ Years",
        icon: SiDocker,
        color: "#38BDF8",
        bg: "rgba(56, 189, 248, 0.12)",
        borderColor: "rgba(56, 189, 248, 0.3)",
        highlight: "Isolated container runtimes, multi-stage builds & environment parity",
        projects: ["Automated Worker Nodes"],
        projectId: null,
    },
];

const categories = [
    { id: "All", label: "All Skills", icon: FaLayerGroup },
    { id: "Languages", label: "Languages & Runtimes", icon: FaCode },
    { id: "Frontend", label: "Frontend & UI/UX", icon: SiReact },
    { id: "Backend", label: "Backend & Systems", icon: FaServer },
    { id: "Security & Automation", label: "Security & Automation", icon: FaShieldAlt },
    { id: "DevOps & Cloud", label: "DevOps & Tools", icon: SiLinux },
];

export default function SkillsSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [inspectedSkill, setInspectedSkill] = useState(null);

    const filteredSkills = useMemo(() => {
        return skillsData.filter((skill) => {
            const matchesCategory =
                selectedCategory === "All" || skill.category === selectedCategory;
            const matchesSearch =
                skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()) ||
                skill.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <section id="skills" className="py-24 relative z-10 overflow-hidden">
            {/* Ambient Lighting & Background Accents */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-pink-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                        <FaMicrochip className="text-cyan-400" size={13} />
                        <span>Technical Arsenal &amp; Capabilities</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        Mastered <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">Technologies</span> &amp; Systems
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        A battle-tested technical matrix across low-latency backend architectures, modern reactive interfaces, security automation, and distributed systems.
                    </p>
                </div>

                {/* Quick Core Strengths Matrix Bar */}
                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {[
                        { label: "Technologies Mastered", value: "19+", desc: "Full-Stack & Systems" },
                        { label: "Performance Benchmark", value: "< 0.4ms", desc: "Engine Latency" },
                        { label: "Zero-Dependency", value: "100%", desc: "Lightweight Architecture" },
                        { label: "Continuous Experience", value: "3+ Yrs", desc: "Software & Research" },
                    ].map((metric, i) => (
                        <div
                            key={i}
                            className="p-5 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                                {metric.value}
                            </div>
                            <div className="text-xs font-semibold text-gray-200 mt-1 uppercase tracking-wider">
                                {metric.label}
                            </div>
                            <div className="text-[11px] text-gray-400 mt-0.5">{metric.desc}</div>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Filter Controls & Search */}
                <div
                    className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = selectedCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-300 relative ${
                                        isActive
                                            ? "bg-gradient-to-r from-cyan-500/25 to-blue-600/25 text-white border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                                            : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                                    }`}
                                >
                                    <Icon size={14} className={isActive ? "text-cyan-400" : "text-gray-400"} />
                                    <span>{cat.label}</span>
                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse ml-0.5" />
                                    )}
                                    <Ripple />
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full lg:w-72">
                        <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search skill, engine, or tool..."
                            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all backdrop-blur-md"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* Skills Interactive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
                    {filteredSkills.map((skill, index) => {
                        const Icon = skill.icon;
                        const isInspected = inspectedSkill?.name === skill.name;

                        return (
                            <div
                                key={skill.name}
                                onClick={() => setInspectedSkill(isInspected ? null : skill)}
                                data-aos="fade-up"
                                data-aos-delay={(index % 6) * 50}
                                className={`group relative rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between backdrop-blur-xl ${
                                    isInspected
                                        ? "bg-[#0b0824] border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] -translate-y-1.5"
                                        : "bg-[#060417]/80 border-white/10 hover:border-cyan-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                                }`}
                            >
                                {/* Glow Accent on hover */}
                                <div
                                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(280px circle at 50% 0%, ${skill.bg}, transparent 70%)`,
                                    }}
                                />

                                <div>
                                    {/* Top Row: Icon + Rating Badge */}
                                    <div className="flex items-center justify-between mb-4 relative z-10">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-inner"
                                            style={{
                                                backgroundColor: skill.bg,
                                                borderColor: skill.borderColor,
                                            }}
                                        >
                                            <Icon size={24} style={{ color: skill.color }} />
                                        </div>

                                        <div className="flex flex-col items-end">
                                            <span
                                                className="px-2.5 py-0.5 rounded-full text-[11px] font-bold border tracking-wide"
                                                style={{
                                                    color: skill.color,
                                                    borderColor: skill.borderColor,
                                                    backgroundColor: skill.bg,
                                                }}
                                            >
                                                {skill.rating}
                                            </span>
                                            <span className="text-[10px] text-gray-400 font-mono mt-0.5">
                                                {skill.experience}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Skill Title & Category */}
                                    <div className="relative z-10">
                                        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                                            <span>{skill.name}</span>
                                            <span className="text-xs text-gray-400 font-mono">
                                                {skill.level}%
                                            </span>
                                        </h3>

                                        <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                                            {skill.highlight}
                                        </p>
                                    </div>

                                    {/* Animated Proficiency Bar */}
                                    <div className="mt-4 relative z-10">
                                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    backgroundColor: skill.color,
                                                    boxShadow: `0 0 10px ${skill.color}80`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Meta: Production Use */}
                                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] relative z-10">
                                    <span className="text-gray-400 truncate max-w-[170px]">
                                        <strong className="text-gray-300">Used in:</strong> {skill.projects[0]}
                                    </span>

                                    {skill.projectId ? (
                                        <Link
                                            href={`/project/${skill.projectId}`}
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold transition-colors flex-shrink-0"
                                            title="View Project Case Study"
                                        >
                                            <span>Case</span>
                                            <FaArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                                        </Link>
                                    ) : (
                                        <span className="text-gray-500 text-[10px]">Core Stack</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredSkills.length === 0 && (
                    <div className="text-center py-16 bg-white/[0.02] rounded-2xl border border-white/10 my-8">
                        <FaSearch className="mx-auto text-3xl text-gray-500 mb-3" />
                        <h4 className="text-lg font-bold text-white mb-1">No matching skills found</h4>
                        <p className="text-sm text-gray-400">
                            Try searching for &quot;TypeScript&quot;, &quot;Puppeteer&quot;, &quot;SQLite&quot;, or reset category filter.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setSearchQuery("");
                            }}
                            className="mt-4 px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/30 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}

                {/* Inspect Drawer/Modal if a skill is clicked */}
                {inspectedSkill && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-slide-up">
                        <div
                            className="relative max-w-lg w-full rounded-2xl border border-cyan-500/30 bg-[#070517] p-6 shadow-[0_0_50px_rgba(6,182,212,0.25)] text-left"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setInspectedSkill(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                                aria-label="Close dialog"
                            >
                                ✕
                            </button>

                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg"
                                    style={{
                                        backgroundColor: inspectedSkill.bg,
                                        borderColor: inspectedSkill.borderColor,
                                    }}
                                >
                                    {React.createElement(inspectedSkill.icon, {
                                        size: 30,
                                        style: { color: inspectedSkill.color },
                                    })}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-bold text-white">
                                            {inspectedSkill.name}
                                        </h3>
                                        <span
                                            className="px-2 py-0.5 rounded text-[10px] font-bold border"
                                            style={{
                                                color: inspectedSkill.color,
                                                borderColor: inspectedSkill.borderColor,
                                                backgroundColor: inspectedSkill.bg,
                                            }}
                                        >
                                            {inspectedSkill.rating}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        {inspectedSkill.category} • {inspectedSkill.experience} hands-on
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 my-5 text-sm text-gray-300">
                                <div>
                                    <span className="text-xs uppercase text-gray-400 font-semibold tracking-wider block mb-1">
                                        Key Technical Focus
                                    </span>
                                    <p className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-gray-200">
                                        {inspectedSkill.highlight}
                                    </p>
                                </div>

                                <div>
                                    <span className="text-xs uppercase text-gray-400 font-semibold tracking-wider block mb-1">
                                        Production Implementations
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {inspectedSkill.projects.map((p, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/20 font-medium"
                                            >
                                                {p}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                                <button
                                    onClick={() => setInspectedSkill(null)}
                                    className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    Close
                                </button>
                                {inspectedSkill.projectId && (
                                    <Link
                                        href={`/project/${inspectedSkill.projectId}`}
                                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                    >
                                        <span>View Related Project</span>
                                        <FaExternalLinkAlt size={11} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Call to Action Banner inside Skills Section */}
                <div
                    className="p-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#0c082e] via-[#08051e] to-[#12082b] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
                    data-aos="fade-up"
                >
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white">
                            Looking for a tailored architecture or custom automation?
                        </h3>
                        <p className="text-gray-300 text-sm max-w-xl">
                            From zero-dependency backend queuing engines to headless anti-bot testing pipelines, let&apos;s build resilient systems together.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0">
                        <Link
                            href="/portfolio"
                            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all hover:scale-105"
                        >
                            Explore Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all hover:scale-105"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
