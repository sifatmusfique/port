"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs, FaCode, FaAward, FaChevronDown, FaChevronUp, FaGitAlt, FaFilter, FaArrowRight } from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiMongodb, SiTailwindcss, SiNextdotjs, SiTypescript, SiPython, SiPhp, SiSqlite, SiPuppeteer, SiDocker } from "react-icons/si";
import { projects } from "@/data/projects";
import ProjectSpotlightCard from "./ProjectSpotlightCard";
import Ripple from "./Ripple";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = ["All", "Systems & Backend", "Security & Automation", "Full Stack", "Frontend"];

const Showcase = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleTabChange = (tabId) => {
        if (activeTab === tabId) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveTab(tabId);
            setIsTransitioning(false);
        }, 100);
    };

    React.useEffect(() => {
        setTimeout(() => {
            AOS.refresh();
        }, 300);
    }, [activeTab, showAllProjects, selectedCategory]);

    const tabs = [
        { id: "projects", label: "Featured Projects", icon: <FaCode /> },
        { id: "certificates", label: "Certificates", icon: <FaAward /> },
        { id: "tech", label: "Tech Stack", icon: <FaReact /> },
    ];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    const displayedProjects = showAllProjects || selectedCategory !== "All"
        ? filteredProjects
        : filteredProjects.slice(0, 3);

    const certificates = [
        { title: "Full Stack Web Development", issuer: "Udemy", date: "2024", image: "/brain/certificate_fullstack_v2_1768770051034.png" },
        { title: "React Native Specialist", issuer: "Coursera", date: "2023", image: "/brain/certificate_reactnative_v2_1768770068530.png" },
        { title: "Advanced Node.js", issuer: "LinkedIn Learning", date: "2023", image: "/brain/certificate_nodejs_v2_1768770085872.png" },
    ];

    const techStack = [
        { name: "TypeScript", icon: <SiTypescript />, color: "text-sky-400", level: "Expert" },
        { name: "React 19", icon: <FaReact />, color: "text-cyan-400", level: "Expert" },
        { name: "Next.js 16", icon: <SiNextdotjs />, color: "text-white", level: "Expert" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-emerald-400", level: "Expert" },
        { name: "Puppeteer", icon: <SiPuppeteer />, color: "text-teal-400", level: "Specialist" },
        { name: "SQLite WAL", icon: <SiSqlite />, color: "text-blue-400", level: "Advanced" },
        { name: "PHP 8.2+", icon: <SiPhp />, color: "text-violet-400", level: "Advanced" },
        { name: "Python 3", icon: <SiPython />, color: "text-blue-400", level: "Advanced" },
        { name: "Tailwind 4", icon: <SiTailwindcss />, color: "text-cyan-300", level: "Expert" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-300", level: "Advanced" },
        { name: "Docker", icon: <SiDocker />, color: "text-sky-400", level: "Proficient" },
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-400", level: "Advanced" },
    ];

    return (
        <section id="portfolio" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
                        <FaCode size={11} /> Open Source & Systems
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Engineering <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Showcase</span>
                    </h2>
                </div>

                {/* Primary Section Tabs */}
                <div className="flex justify-center mb-10" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 rounded-2xl md:rounded-full border border-white/10 backdrop-blur-md shadow-2xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                aria-label={`Switch to ${tab.label} tab`}
                                className={`px-4 sm:px-8 py-3 rounded-xl md:rounded-full text-sm sm:text-base font-semibold flex items-center gap-2 transition-all duration-300 relative overflow-hidden group ${activeTab === tab.id
                                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-white border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                                    }`}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {tab.icon} {tab.label}
                                </span>
                                <Ripple />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className={`min-h-[400px] transition-opacity ${isTransitioning ? "duration-0 opacity-0" : "duration-500 opacity-100 ease-in"}`}>
                    <div key={activeTab} className="w-full">
                        {activeTab === "projects" && (
                            <>
                                {/* Category Filter Pills */}
                                <div className="flex flex-wrap items-center justify-center gap-2 mb-10" data-aos="fade-up" data-aos-delay="150">
                                    {categories.map((cat) => {
                                        const count = cat === "All"
                                            ? projects.length
                                            : projects.filter((p) => p.category === cat).length;
                                        const isActive = selectedCategory === cat;
                                        return (
                                            <button
                                                key={cat}
                                                onClick={() => {
                                                    setSelectedCategory(cat);
                                                    setShowAllProjects(false);
                                                }}
                                                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                                                    isActive
                                                        ? "bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                                        : "bg-white/5 border border-white/10 text-gray-400 hover:text-gray-200 hover:border-white/20"
                                                }`}
                                            >
                                                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                                                <span>{cat}</span>
                                                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                                                    isActive ? "bg-cyan-400/20 text-cyan-200" : "bg-white/10 text-gray-400"
                                                }`}>
                                                    {count}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Projects Grid */}
                                <div id="showcase-projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                                    {displayedProjects.map((project, index) => (
                                        <ProjectSpotlightCard
                                            key={project.id}
                                            project={project}
                                            index={index}
                                        />
                                    ))}
                                </div>

                                {/* Expand/Collapse Button (only shown for "All" when more than 3) */}
                                {selectedCategory === "All" && filteredProjects.length > 3 && (
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => {
                                                if (showAllProjects) {
                                                    const projectsSection = document.getElementById("showcase-projects");
                                                    if (projectsSection) {
                                                        const y = projectsSection.getBoundingClientRect().top + window.scrollY - 100;
                                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                                        setTimeout(() => {
                                                            setShowAllProjects(false);
                                                            window.dispatchEvent(new Event('resize'));
                                                        }, 300);
                                                    }
                                                } else {
                                                    setShowAllProjects(true);
                                                    setTimeout(() => window.dispatchEvent(new Event('resize')), 50);
                                                }
                                            }}
                                            aria-label={showAllProjects ? "Show fewer projects" : "Show all projects"}
                                            className="px-8 py-3 rounded-xl glass-liquid hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] border border-cyan-500/30 transition-all flex items-center gap-2 text-white font-medium group relative overflow-hidden"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                {showAllProjects ? "Show Fewer" : `View All (${filteredProjects.length}) Projects`}
                                                {showAllProjects ? (
                                                    <FaChevronUp className="group-hover:-translate-y-1 transition-transform text-cyan-400" />
                                                ) : (
                                                    <FaChevronDown className="group-hover:translate-y-1 transition-transform text-cyan-400" />
                                                )}
                                            </span>
                                            <Ripple />
                                        </button>
                                    </div>
                                )}
                            </>
                        )}

                        {activeTab === "certificates" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {certificates.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="glass-liquid rounded-2xl p-4 transition-colors animate-slide-up border border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="h-40 rounded-xl overflow-hidden mb-4 relative w-full">
                                            <Image
                                                src={cert.image}
                                                alt={cert.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                                        <p className="text-cyan-400 text-sm">{cert.issuer}</p>
                                        <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "tech" && (
                            <div className="space-y-8 animate-slide-up">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
                                    {techStack.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="glass-liquid p-5 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all group border border-white/10 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                                            style={{ animationDelay: `${index * 40}ms` }}
                                        >
                                            <div className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg`}>
                                                {tech.icon}
                                            </div>
                                            <span className="font-semibold text-xs sm:text-sm text-gray-200 group-hover:text-white transition-colors">{tech.name}</span>
                                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-gray-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30">
                                                {tech.level}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center pt-2">
                                    <a
                                        href="#skills"
                                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 border border-cyan-400/40 text-cyan-300 hover:text-white font-semibold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all group"
                                    >
                                        <span>Explore Full Interactive Skills Matrix & Capabilities</span>
                                        <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
