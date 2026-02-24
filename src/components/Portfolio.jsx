"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with cart, checkout, and payments.",
            tech: ["React", "Node.js", "MongoDB"],
            image: "https://via.placeholder.com/400x250/0f172a/06b6d4?text=E-Commerce",
            links: { github: "#", live: "#" }
        },
        {
            title: "Task Management App",
            description: "Real-time task board with drag-and-drop functionality.",
            tech: ["Next.js", "Firebase", "Tailwind"],
            image: "https://via.placeholder.com/400x250/0f172a/3b82f6?text=Task+App",
            links: { github: "#", live: "#" }
        },
        {
            title: "AI Chat Interface",
            description: "Modern chat UI integrated with OpenAI API.",
            tech: ["React", "Tailwind", "OpenAI"],
            image: "https://via.placeholder.com/400x250/0f172a/a855f7?text=AI+Chat",
            links: { github: "#", live: "#" }
        }
    ];

    return (
        <section id="portfolio" className="py-20 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
                    My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] hover-gradient-glow glass-card group cursor-pointer"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.links.github} className="p-3 bg-white/10 rounded-full hover:bg-cyan-500 hover:text-white transition-colors">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href={project.links.live} className="p-3 bg-white/10 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
