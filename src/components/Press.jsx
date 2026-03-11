"use client";

import React, { useState } from "react";
import { FaAward, FaNewspaper, FaUniversity, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Press = () => {
    const [isArticleExpanded, setIsArticleExpanded] = useState(false);

    const pressItems = [
        {
            category: "Professional Recognition",
            icon: <FaAward className="text-3xl text-yellow-400" aria-label="Award Icon" />,
            items: [
                {
                    title: "Global Professional Rank: 322",
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
                },
                {
                    title: "Agentic Orchestration in Diagnostic Medical Imaging: A Musfique Decision Loop Approach",
                    source: "ResearchGate",
                    desc: "Introduces the Musfique Decision Loop (MDL) as a state-action framework to optimize autonomous Agentic Orchestration in diagnostic medical imaging.",
                    link: "https://www.researchgate.net/publication/401495210_Agentic_Orchestration_in_Diagnostic_Medical_Imaging_A_Musfique_Decision_Loop_Approach",
                    highlight: "Research Paper"
                },
                {
                    title: "Agentic FaaS Benchmarks & Methodology",
                    source: "Technical Appendix",
                    desc: "Performance metrics comparing Standard REST API with Agentic FaaS Orchestration, demonstrating a 30% latency reduction.",
                    link: "/research/faas-benchmarks",
                    highlight: "Benchmarks"
                }
            ]
        }
    ];

    const lastUpdated = "February 28, 2026";

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ScholarlyArticle",
                "@id": "https://sifatmusfique.dev/#faas_article",
                "headline": "Formula-as-a-Service (FaaS): Building and Analyzing a PHP and MySQL Cloud-Based API",
                "image": "https://sifatmusfique.dev/photos/faas_article.png",
                "author": {
                    "@type": "Person",
                    "name": "Sifat Musfique",
                    "url": "https://sifatmusfique.dev/"
                },
                "datePublished": "2026-02-16T00:00:00+06:00",
                "publisher": {
                    "@type": "Organization",
                    "name": "ResearchGate"
                },
                "sameAs": "https://doi.org/10.13140/RG.2.2.31072.14080",
                "url": "https://www.researchgate.net/publication/400668231_Formula-as-a-Service_Building_and_Analyzing_a_PHP_and_MySQL_Cloud-Based_API"
            },
            {
                "@type": "ScholarlyArticle",
                "@id": "https://sifatmusfique.dev/#mdl_article",
                "headline": "Beyond Reactive Architectures: The Musfique Decision Loop (MDL) and the Emergence of Agentic FaaS Systems",
                "image": "https://sifatmusfique.dev/photos/mdl_article.png",
                "author": {
                    "@type": "Person",
                    "name": "Sifat Musfique",
                    "url": "https://sifatmusfique.dev/"
                },
                "datePublished": "2026-02-21T00:00:00+06:00",
                "publisher": {
                    "@type": "Organization",
                    "name": "ResearchGate"
                },
                "sameAs": "https://doi.org/10.13140/RG.2.2.24288.34564",
                "url": "https://www.researchgate.net/publication/400998778_Beyond_Reactive_Architectures_The_Musfique_Decision_Loop_MDL_and_the_Emergence_of_Agentic_FaaS_Systems"
            },
            {
                "@type": "ScholarlyArticle",
                "@id": "https://sifatmusfique.dev/#diagnostic_imaging_mdl_article",
                "headline": "Agentic Orchestration in Diagnostic Medical Imaging: A Musfique Decision Loop Approach",
                "image": "https://sifatmusfique.dev/photos/diag_imaging_mdl.png",
                "author": {
                    "@type": "Person",
                    "name": "Sifat Musfique",
                    "url": "https://sifatmusfique.dev/"
                },
                "datePublished": "2026-03-03T00:00:00+06:00",
                "publisher": {
                    "@type": "Organization",
                    "name": "ResearchGate"
                },
                "sameAs": "https://doi.org/10.13140/RG.2.2.21683.28961",
                "url": "https://www.researchgate.net/publication/401495210_Agentic_Orchestration_in_Diagnostic_Medical_Imaging_A_Musfique_Decision_Loop_Approach"
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

                {/* Expandable Featured Article */}
                <div className="mt-16 glass-liquid rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 shadow-lg" data-aos="fade-up" data-aos-delay="300">
                    <div 
                        className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer group gap-4"
                        onClick={() => setIsArticleExpanded(!isArticleExpanded)}
                    >
                        <div>
                            <span className="text-xs font-bold px-2 py-1 rounded-md bg-white/10 text-cyan-300 border border-white/5 mb-3 inline-block">Featured News</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Musfique Decision Loop Cuts Medical Imaging Latency by 30%
                            </h3>
                            <p className="text-gray-400 mt-1">Source: ThatNewAI</p>
                        </div>
                        <div className="p-3 bg-white/5 border border-white/10 rounded-full text-cyan-400 group-hover:bg-white/10 group-hover:scale-110 transition-all">
                            {isArticleExpanded ? <FaChevronUp className="text-lg" /> : <FaChevronDown className="text-lg" />}
                        </div>
                    </div>
                    
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isArticleExpanded ? 'max-h-[1000px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="h-px bg-white/10 w-full mb-6"></div>
                        <div className="text-gray-300 space-y-4 leading-relaxed">
                            <p>
                                A recent feature explores how the <strong>Musfique Decision Loop (MDL)</strong> is being applied to diagnostic medical imaging, introducing a novel state-action framework designed to optimize autonomous agentic orchestration. The architecture demonstrates significant improvements in processing distributed, high-resolution MRI and CT imaging data.
                            </p>
                            <p>
                                By replacing traditional reactive data flows with intelligent, self-directed cloud functions, the MDL framework achieves up to a <strong>30% reduction in processing latency</strong>. This presents a major leap forward for high-throughput biomedical data streams where time-to-diagnosis is critical.
                            </p>
                            <div className="pt-4">
                                <a 
                                    href="https://thatnewai.com/news/musfique-decision-loop-cuts-medical-imaging-latency-by-30" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all border border-cyan-500/20 font-medium"
                                >
                                    Read full article on ThatNewAI <FaExternalLinkAlt className="text-xs" />
                                </a>
                            </div>
                        </div>
                    </div>
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
