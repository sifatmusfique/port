"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs, FaCode, FaAward, FaChevronDown, FaChevronUp, FaGitAlt, FaFilter } from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiMongodb, SiTailwindcss, SiNextdotjs, SiTypescript, SiPython } from "react-icons/si";
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
        { name: "React", icon: <FaReact />, color: "text-blue-400" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "Python", icon: <SiPython />, color: "text-blue-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
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
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setSelectedCategory(cat);
                                                setShowAllProjects(false);
                                            }}
                                            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                                                selectedCategory === cat
                                                    ? "bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-gray-200 hover:border-white/20"
                                            }`}
                                        >
                                            {selectedCategory === cat && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                                            {cat}
                                        </button>
                                    ))}
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
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                                {techStack.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="glass-liquid p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all group animate-slide-up border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className={`text-5xl ${tech.color} group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg`}>
                                            {tech.icon}
                                        </div>
                                        <span className="font-medium text-gray-300">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
