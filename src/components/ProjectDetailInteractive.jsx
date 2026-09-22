"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FaArrowLeft,
    FaGithub,
    FaExternalLinkAlt,
    FaCheckCircle,
    FaTerminal,
    FaCopy,
    FaCheck,
    FaLayerGroup,
    FaCogs,
    FaStar,
} from "react-icons/fa";
import TechBadge from "./TechBadge";

export default function ProjectDetailInteractive({ project }) {
    const [copied, setCopied] = useState(false);
    const [activeArchStep, setActiveArchStep] = useState(0);

    const handleCopy = () => {
        if (project.command) {
            navigator.clipboard.writeText(project.command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <main className="min-h-screen pt-28 pb-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Top Navigation */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/#portfolio"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all group"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-cyan-400" />
                            <span>Back to Projects</span>
                        </Link>
                    </div>

                    {project.badge && (
                        <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                            {project.badge}
                        </div>
                    )}
                </div>

                {/* Hero Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 animate-fade-in-up">
                    <span className="px-4 py-1.5 rounded-full bg-white/5 text-cyan-300 border border-cyan-500/20 text-xs font-semibold tracking-wide uppercase inline-block">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                        {project.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Interactive Key Metrics Cards */}
                {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {project.metrics.map((metric, i) => (
                            <div
                                key={i}
                                className="glass-liquid p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all text-center relative overflow-hidden group hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                            >
                                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-colors" />
                                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold block mb-1">
                                    {metric.label}
                                </span>
                                <span className="text-2xl md:text-3xl font-extrabold text-cyan-300 tracking-tight">
                                    {metric.value}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Main Content Grid: Visuals + Details */}
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column (5 cols): Media & Action CTAs */}
                    <div className="lg:col-span-5 space-y-6 sticky top-28">
                        {/* Project Image Showcase */}
                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 shadow-2xl relative group">
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#070514] via-transparent to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Quick Command Terminal Widget */}
                        {project.command && (
                            <div className="p-4 rounded-2xl bg-[#09071b] border border-white/10 space-y-2">
                                <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                                    <span className="flex items-center gap-1.5 text-cyan-400">
                                        <FaTerminal size={11} /> Quick Installation / Clone
                                    </span>
                                    <span className="text-[11px] text-gray-500">Terminal</span>
                                </div>
                                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-black/60 border border-white/5 font-mono text-xs">
                                    <span className="text-cyan-300 truncate select-all">{project.command}</span>
                                    <button
                                        onClick={handleCopy}
                                        className="p-2 rounded-lg bg-white/10 hover:bg-cyan-500 hover:text-black text-gray-300 transition-all flex items-center gap-1.5 flex-shrink-0 text-xs font-sans font-semibold"
                                        title="Copy to clipboard"
                                    >
                                        {copied ? (
                                            <>
                                                <FaCheck size={11} className="text-emerald-400" />
                                                <span className="text-emerald-400">Copied</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaCopy size={11} />
                                                <span>Copy</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 group"
                            >
                                <FaGithub size={18} />
                                <span>Star on GitHub</span>
                                <FaExternalLinkAlt size={12} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>
                            {project.links.live && project.links.live !== project.links.github && (
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-3.5 px-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-gray-200 hover:text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                                >
                                    <span>Live Preview</span>
                                    <FaExternalLinkAlt size={12} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right Column (7 cols): Architecture, About, Tech, Features */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* About the Engineering */}
                        <div className="glass-liquid p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
                            <div className="flex items-center gap-2.5 text-white font-bold text-xl">
                                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />
                                <h3>Engineering Background & Purpose</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-base">
                                {project.about}
                            </p>
                        </div>

                        {/* System Architecture Pipeline (if available) */}
                        {project.architecture && project.architecture.length > 0 && (
                            <div className="glass-liquid p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                                <div className="flex items-center gap-2.5 text-white font-bold text-xl">
                                    <FaCogs className="text-cyan-400" />
                                    <h3>System Architecture & Workflow</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {project.architecture.map((stage, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setActiveArchStep(i)}
                                            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                                                activeArchStep === i
                                                    ? "bg-cyan-500/10 border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                                                    : "bg-white/[0.02] border-white/5 hover:border-white/20"
                                            }`}
                                        >
                                            <div className="text-xs font-bold text-cyan-400 mb-1">
                                                {stage.step}
                                            </div>
                                            <div className="text-xs text-gray-300 leading-relaxed">
                                                {stage.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Technologies Used with Rich Icons */}
                        <div className="glass-liquid p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
                            <div className="flex items-center gap-2.5 text-white font-bold text-xl">
                                <FaLayerGroup className="text-purple-400" />
                                <h3>Core Technologies & Protocols</h3>
                            </div>
                            <div className="flex flex-wrap gap-2.5 pt-2">
                                {project.tech.map((t, i) => (
                                    <TechBadge key={i} name={t} size="md" />
                                ))}
                            </div>
                        </div>

                        {/* Key Technical Highlights */}
                        <div className="glass-liquid p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
                            <div className="flex items-center gap-2.5 text-white font-bold text-xl">
                                <FaCheckCircle className="text-emerald-400" />
                                <h3>Key Capabilities & Design Features</h3>
                            </div>
                            <ul className="space-y-3 pt-2">
                                {project.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
