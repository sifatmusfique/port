"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaTerminal, FaCheck, FaCopy } from "react-icons/fa";
import TechBadge from "./TechBadge";

export default function ProjectSpotlightCard({ project, index }) {
    const [copied, setCopied] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleCopyCommand = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (project.command) {
            navigator.clipboard.writeText(project.command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between border border-white/10 bg-[#070514]/80 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]"
            style={{ animationDelay: `${index * 80}ms` }}
        >
            {/* Dynamic Mouse Spotlight Glow */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: isHovered
                        ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.12), transparent 70%)`
                        : "none",
                }}
            />

            <div>
                {/* Image Banner & Floating Badges */}
                <div className="relative h-52 overflow-hidden w-full bg-slate-950">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070514] via-[#070514]/30 to-transparent" />

                    {/* Floating Badge */}
                    {project.badge && (
                        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-lg flex items-center gap-1.5">
                            {project.badge}
                        </div>
                    )}

                    {/* Category Pill */}
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-gray-300 text-[11px] font-medium">
                        {project.category}
                    </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Quick Metrics Bar */}
                    {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-white/[0.03] border border-white/5">
                            {project.metrics.map((metric, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-medium truncate">
                                        {metric.label}
                                    </div>
                                    <div className="text-xs font-bold text-cyan-300 mt-0.5 truncate">
                                        {metric.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tech Badges with Brand Icons */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tech.map((t, i) => (
                            <TechBadge key={i} name={t} size="sm" />
                        ))}
                    </div>

                    {/* Quick Command Snippet (if available) */}
                    {project.command && (
                        <div className="pt-1">
                            <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs text-gray-300 font-mono group/cmd">
                                <div className="flex items-center gap-2 truncate pr-2">
                                    <FaTerminal className="text-cyan-400 flex-shrink-0 text-[10px]" />
                                    <span className="truncate text-gray-400 select-all">{project.command}</span>
                                </div>
                                <button
                                    onClick={handleCopyCommand}
                                    title="Copy command"
                                    className="text-gray-400 hover:text-white transition-colors flex-shrink-0 p-1 rounded hover:bg-white/10"
                                >
                                    {copied ? (
                                        <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-sans">
                                            <FaCheck size={10} /> Copied
                                        </span>
                                    ) : (
                                        <FaCopy size={11} />
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-6 pt-0 mt-2">
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <a
                        href={project.links.live || project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub repository for ${project.title}`}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold group/link"
                    >
                        <FaGithub size={15} />
                        <span>GitHub Repo</span>
                        <FaExternalLinkAlt size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </a>

                    <Link
                        href={`/project/${project.id}`}
                        aria-label={`View case study details for ${project.title}`}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/30 border border-white/10 transition-all text-sm text-gray-200 hover:text-white group/btn"
                    >
                        <span>Details</span>
                        <FaArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform text-cyan-400" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
