"use client";

import React from "react";
import { FaAward, FaNewspaper, FaUniversity, FaExternalLinkAlt } from "react-icons/fa";

const Press = () => {
    const pressItems = [
        {
            category: "Professional Recognition",
            icon: <FaAward className="text-3xl text-yellow-400" aria-label="Award Icon" />,
            items: [
                {
                    title: "Global Professional Rank: 340",
                    source: "Crunchbase",
                    desc: "Ranked among the top 0.1% of global innovators and founders for contributions to cloud architecture.",
                    link: "https://www.crunchbase.com/person/sifat-musfique",
                    highlight: "Rank #340"
                }
            ]
        },
        {
            category: "Media Mentions",
            icon: <FaNewspaper className="text-3xl text-fuchsia-400" aria-label="Newspaper Icon" />,
            items: [
                {
                    title: "Sifat Musfique Announces FaaS Framework",
                    source: "OpenPR",
                    desc: "Sifat Musfique launches Formula-as-a-Service (FaaS) to solve scalable cloud-based API challenges.",
                    link: "https://www.openpr.com/news/4391159/rising-software-developer-sifat-musfique-redefines-scalable",
                    highlight: "Press Release"
                }
            ]
        },
        {
            category: "Research & Academic Work",
            icon: <FaUniversity className="text-3xl text-cyan-400" aria-label="University Icon" />,
            items: [
                {
                    title: "Formula-as-a-Service (FaaS)",
                    source: "ResearchGate",
                    desc: "Developed a distributed cloud API architecture that optimizes mathematical computation latency by 40%.",
                    link: "https://www.researchgate.net/publication/400668231_Formula-as-a-Service_Building_and_Analyzing_a_PHP_and_MySQL_Cloud-Based_API",
                    highlight: "Research Paper"
                },
                {
                    title: "Beyond Reactive Architectures: The Musfique Decision Loop (MDL)",
                    source: "ResearchGate",
                    desc: "Explores the emergence of Agentic FaaS systems through the Musfique Decision Loop, a novel architecture for intelligent, self-directed cloud functions.",
                    link: "https://www.researchgate.net/publication/400998778_Beyond_Reactive_Architectures_The_Musfique_Decision_Loop_MDL_and_the_Emergence_of_Agentic_FaaS_Systems",
                    highlight: "Research Paper"
                }
            ]
        }
    ];

    const lastUpdated = "February 23, 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "name": "Sifat Musfique",
                "url": "https://sifatmusfique.dev",
                "sameAs": [
                    "https://www.crunchbase.com/person/sifat-musfique",
                    "https://www.researchgate.net/profile/Sifat-Musfique"
                ]
            },
            {
                "@type": "ScholarlyArticle",
                "headline": "Formula-as-a-Service (FaaS): Building and Analyzing a PHP and MySQL Cloud-Based API",
                "author": {
                    "@type": "Person",
                    "name": "Sifat Musfique"
                },
                "datePublished": "2026-02-16",
                "publisher": {
                    "@type": "Organization",
                    "name": "ResearchGate"
                },
                "url": "https://www.researchgate.net/publication/400668231_Formula-as-a-Service_Building_and_Analyzing_a_PHP_and_MySQL_Cloud-Based_API"
            },
            {
                "@type": "ScholarlyArticle",
                "@id": "https://sifatmusfique.dev/#mdl_article",
                "headline": "Beyond Reactive Architectures: The Musfique Decision Loop (MDL) and the Emergence of Agentic FaaS Systems",
                "author": {
                    "@type": "Person",
                    "name": "Sifat Musfique"
                },
                "datePublished": "2026-02-21",
                "publisher": {
                    "@type": "Organization",
                    "name": "ResearchGate"
                },
                "url": "https://www.researchgate.net/publication/400998778_Beyond_Reactive_Architectures_The_Musfique_Decision_Loop_MDL_and_the_Emergence_of_Agentic_FaaS_Systems"
            }
        ]
    };

    return (
        <section id="press" className="py-20 relative z-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
                    Press & <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Publications</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pressItems.map((section, index) => (
                        <div
                            key={index}
                            className="glass-liquid rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-200">{section.category}</h3>
                            </div>

                            <div className="space-y-6">
                                {section.items.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.link}
                                        target={item.link === "#" ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/5 group/item"
                                        aria-label={`Read more about ${item.title}`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-bold px-2 py-1 rounded-md bg-white/10 text-cyan-300 border border-white/5">
                                                {item.highlight}
                                            </span>
                                            <FaExternalLinkAlt className="text-gray-400 group-hover/item:text-white text-xs transition-colors" aria-hidden="true" />
                                        </div>
                                        <h4 className="font-bold text-white mb-1 group-hover/item:text-cyan-300 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-gray-300 mb-2">{item.source}</p>
                                        <p className="text-xs text-gray-400 line-clamp-2">
                                            {item.desc}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
                    <p className="text-gray-400 text-sm">
                        Last Updated: <span className="text-gray-300 font-medium">{lastUpdated}</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Press;
