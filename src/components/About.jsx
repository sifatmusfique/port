"use client";

import React from "react";
import { FaCode, FaAward, FaGlobe, FaArrowRight } from "react-icons/fa";

const About = () => {
    const stats = [
        {
            icon: <FaCode />,
            count: "6",
            label: "TOTAL PROJECTS",
            desc: "Innovative web & mobile solutions crafted"
        },
        {
            icon: <FaAward />,
            count: "3",
            label: "CERTIFICATES",
            desc: "Professional skills validated"
        },
        {
            icon: <FaGlobe />,
            count: "3",
            label: "YEARS OF EXPERIENCE",
            desc: "Continuous learning journey"
        },
    ];

    return (
        <section id="about" className="py-10 md:py-20 relative z-10 overflow-hidden border-none outline-none">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left - Bio */}
                    <div data-aos="fade-right" data-aos-delay="0" data-aos-offset="0">
                        <h2 className="text-4xl font-bold mb-6">
                            About <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Hello, I&apos;m Sifat Musfique, passionate about building smart and scalable web & mobile applications.
                            I&apos;ve completed a full-stack development course and constantly explore new technologies to refine my skills.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Focused on continuous learning, I aim to move towards AI and data science eventually.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <a href="resume.pdf" download className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all font-medium text-cyan-400 hover:text-cyan-300">
                                Download CV
                            </a>
                            <a href="#portfolio" className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 hover:shadow-[0_0_20px_rgba(192,38,211,0.3)] transition-all font-medium text-gray-300 hover:text-fuchsia-300 flex items-center gap-2">
                                <FaCode /> View Projects
                            </a>
                        </div>
                    </div>

                    {/* Right - Stats */}
                    <div data-aos="fade-left" data-aos-delay="0" data-aos-offset="0" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((item, index) => (
                            <div key={index} className="p-6 rounded-2xl glass-liquid transition-all group relative overflow-hidden border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <div className="p-3 bg-white/5 rounded-full text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-110 transition-transform shadow-inner">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">{item.count}</h3>
                                </div>

                                <div className="relative z-10">
                                    <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-1 group-hover:text-white transition-colors">{item.label}</h4>
                                    <p className="text-xs text-gray-300 group-hover:text-gray-200">{item.desc}</p>
                                </div>

                                <div className="absolute bottom-6 right-6 text-gray-500 group-hover:text-cyan-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all z-10">
                                    <FaArrowRight className="-rotate-45 text-xl" />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
