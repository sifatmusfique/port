"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaCode, FaAward, FaChevronDown, FaChevronUp, FaArrowRight } from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiMongodb, SiTailwindcss, SiNextdotjs, SiTypescript, SiPython } from "react-icons/si";
import { projects } from "@/data/projects";
import Link from "next/link";
import Ripple from "./Ripple";
import AOS from "aos";
import "aos/dist/aos.css";

const Showcase = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleTabChange = (tabId) => {
        if (activeTab === tabId) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveTab(tabId);
            setIsTransitioning(false);
        }, 100); // Fast exit, then smooth enter
    };

    React.useEffect(() => {
        // Refresh AOS when active tab or showAllProjects changes
        setTimeout(() => {
            AOS.refresh();
        }, 300); // Slight delay to ensure DOM update is complete
    }, [activeTab, showAllProjects]);

    const tabs = [
        { id: "projects", label: "Projects", icon: <FaCode /> },
        { id: "certificates", label: "Certificates", icon: <FaAward /> },
        { id: "tech", label: "Tech Stack", icon: <FaReact /> },
    ];

    // Projects data imported from @/data/projects

    const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

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
                <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
                    Portfolio <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Showcase</span>
                </h2>

                {/* Tabs */}
                <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex flex-wrap justify-center gap-2 p-2 bg-white/5 rounded-2xl md:rounded-full border border-white/10 backdrop-blur-md">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                aria-label={`Switch to ${tab.label} tab`}
                                className={`px-4 sm:px-8 py-3 rounded-xl md:rounded-full text-sm sm:text-base font-semibold flex items-center gap-2 transition-all duration-300 relative overflow-hidden group ${activeTab === tab.id
                                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
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

                {/* Content */}
                <div className={`min-h-[400px] transition-opacity ${isTransitioning ? "duration-0 opacity-0" : "duration-500 opacity-100 ease-in"}`}>
                    <div key={activeTab} className="w-full">
                        {activeTab === "projects" && (
                            <>
                                <div id="showcase-projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                                    {displayedProjects.map((project, index) => (
                                        <div
                                            key={index}
                                            className="glass-liquid rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-300 animate-slide-up border border-white/5 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="relative h-48 overflow-hidden w-full">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tech.map((t, i) => (
                                                        <span key={i} className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                                    <a
                                                        href={project.links.live}
                                                        aria-label={`View live demo of ${project.title}`}
                                                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                                                    >
                                                        Live Demo <FaExternalLinkAlt size={12} />
                                                    </a>
                                                    <Link
                                                        href={`/project/${project.id}`}
                                                        aria-label={`View details of ${project.title}`}
                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-300 hover:text-white group/btn"
                                                    >
                                                        Details <FaArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        onClick={() => {
                                            if (showAllProjects) {
                                                const projectsSection = document.getElementById("showcase-projects");
                                                if (projectsSection) {
                                                    // Smooth scroll to top of projects before collapsing
                                                    const y = projectsSection.getBoundingClientRect().top + window.scrollY - 100; // Offset for navbar
                                                    window.scrollTo({ top: y, behavior: 'smooth' });

                                                    // Delay collapse slightly to match scroll start
                                                    setTimeout(() => {
                                                        setShowAllProjects(false);
                                                        // Force Lenis resize update
                                                        window.dispatchEvent(new Event('resize'));
                                                    }, 300);
                                                }
                                            } else {
                                                setShowAllProjects(true);
                                                // Force Lenis resize update immediately for expansion
                                                setTimeout(() => window.dispatchEvent(new Event('resize')), 50);
                                            }
                                        }}
                                        aria-label={showAllProjects ? "Show fewer projects" : "Show all projects"}
                                        className="px-8 py-3 rounded-xl glass-liquid hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all flex items-center gap-2 text-white font-medium group animate-slide-up relative overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {showAllProjects ? "See Less" : "See More"}
                                            {showAllProjects ? <FaChevronUp className="group-hover:-translate-y-1 transition-transform text-cyan-400" /> : <FaChevronDown className="group-hover:translate-y-1 transition-transform text-cyan-400" />}
                                        </span>
                                        <Ripple />
                                    </button>
                                </div>
                            </>
                        )}

                        {activeTab === "certificates" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {certificates.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="glass-liquid rounded-2xl p-4 transition-colors animate-slide-up"
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
                                        className="glass-liquid p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all group animate-slide-up"
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
