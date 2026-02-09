import React from 'react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Sifat Musfique`,
        description: project.description,
        alternates: {
            canonical: `https://sifatmusfique.dev/project/${id}`,
        },
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.image],
        },
    };
}


export default async function ProjectDetails({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-3xl font-bold text-gray-200 mb-4">Project Not Found</h1>
                <Link href="/" className="px-6 py-2 bg-cyan-500 rounded-full text-white hover:bg-cyan-600 transition-colors">
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">

                {/* Navigation */}
                <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                {/* Header / Hero */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm font-medium mb-4 inline-block">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {project.description}
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Visuals Column */}
                    <div className="space-y-8 animate-fade-in-left">
                        <div className="glass-liquid rounded-3xl p-2 overflow-hidden relative group">
                            <div className="relative rounded-2xl overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[160px] py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group">
                                Live Demo <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform text-sm" />
                            </a>
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[160px] py-4 rounded-xl glass-liquid border border-white/10 hover:bg-white/5 transition-all text-white font-bold text-lg flex items-center justify-center gap-2 group">
                                GitHub <FaGithub className="group-hover:scale-110 transition-transform text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Details Column */}
                    <div className="space-y-10 animate-fade-in-right">

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/30 transition-all cursor-default relative overflow-hidden group">
                                        <span className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-cyan-500 rounded-full"></span>
                                Key Features
                            </h3>
                            <ul className="space-y-4">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-400 group">
                                        <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <span className="group-hover:text-gray-300 transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* About Project Block */}
                        <div className="glass-liquid p-6 rounded-2xl border border-white/5">
                            <h4 className="text-lg font-bold text-white mb-3">About this Project</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {project.about}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
