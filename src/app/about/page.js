import About from "@/components/About";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
    title: "About Sifat Musfique | Software Developer & Researcher",
    description: "Learn more about Sifat Musfique, a Software Developer and Researcher from Bangladesh specializing in Scalable Web Infrastructure and AI.",
    alternates: {
        canonical: 'https://sifatmusfique.dev/about',
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-transparent pt-24 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://sifatmusfique.dev"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "About",
                                "item": "https://sifatmusfique.dev/about"
                            }
                        ]
                    })
                }}
            />
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </div>

            <About />

            <div className="max-w-7xl mx-auto px-6 mt-16 mb-24">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column - Knowledge Panel (Image, Facts, Quick Links) */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32 space-y-6">

                            {/* Panel Image & Basic Info */}
                            <div className="rounded-2xl glass-liquid border border-white/5 bg-white/5 shadow-lg overflow-hidden">
                                <img
                                    src="https://sifatmusfique.dev/photos/Sifat_Musfique.png"
                                    alt="Sifat Musfique"
                                    className="w-full object-cover border-b border-white/10"
                                />

                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-white mb-1">Sifat Musfique</h2>
                                    <p className="text-gray-400 text-sm mb-4">Software Developer & Researcher</p>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex border-b border-white/5 pb-2">
                                            <span className="w-1/3 text-gray-400">Full Name:</span>
                                            <span className="w-2/3 text-gray-200">Sifat Musfique</span>
                                        </div>
                                        <div className="flex border-b border-white/5 pb-2">
                                            <span className="w-1/3 text-gray-400">Born:</span>
                                            <span className="w-2/3 text-gray-200">12 June 2005 <br />Naogaon, Bangladesh</span>
                                        </div>
                                        <div className="flex border-b border-white/5 pb-2">
                                            <span className="w-1/3 text-gray-400">Hometown:</span>
                                            <span className="w-2/3 text-gray-200">Naogaon, Bangladesh</span>
                                        </div>
                                        <div className="flex border-b border-white/5 pb-2">
                                            <span className="w-1/3 text-gray-400">Current Residence:</span>
                                            <span className="w-2/3 text-gray-200">Rajshahi, Bangladesh</span>
                                        </div>
                                        <div className="flex border-b border-white/5 pb-2">
                                            <span className="w-1/3 text-gray-400">Nationality:</span>
                                            <span className="w-2/3 text-gray-200">Bangladeshi</span>
                                        </div>
                                        <div className="flex border-b border-white/5 pb-2">
                                            <span className="w-1/3 text-gray-400">Religion:</span>
                                            <span className="w-2/3 text-gray-200">Islam</span>
                                        </div>
                                        <div className="flex border-b border-white/5 pb-2">
                                            <span className="w-1/3 text-gray-400">Height:</span>
                                            <span className="w-2/3 text-gray-200">183 cm</span>
                                        </div>
                                        <div className="flex border-b border-white/5 pb-2">
                                            <span className="w-1/3 text-gray-400">Weight:</span>
                                            <span className="w-2/3 text-gray-200">56 kg</span>
                                        </div>
                                        <div className="flex pb-2">
                                            <span className="w-1/3 text-gray-400">Education:</span>
                                            <span className="w-2/3 text-gray-200">
                                                Varendra University <span className="text-xs text-gray-400">(B.Sc in C.S.E)</span><br />
                                                Joypurhat Govt College <span className="text-xs text-gray-400">(H.S.C)</span><br />
                                                R.B Govt High School <span className="text-xs text-gray-400">(S.S.C)</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Overview / Brief Bio */}
                            <div className="p-6 rounded-2xl glass-liquid border border-white/5 bg-white/5 shadow-lg">
                                <h3 className="text-lg font-bold mb-3 text-white border-b border-white/10 pb-2">Overview</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Sifat Musfique is a software developer and researcher based in Bangladesh. He is currently a student of Computer Science and Engineering at Varendra University in Rajshahi. Sifat specializes in scientific computing, cloud architecture, and the development of AI-driven technologies.
                                </p>
                            </div>

                            {/* Quick Facts */}
                            <div className="p-6 rounded-2xl glass-liquid border border-white/5 bg-white/5 shadow-lg">
                                <h3 className="text-lg font-bold mb-3 text-white border-b border-white/10 pb-2">Quick Facts</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex justify-between">
                                        <span className="text-gray-400">Notable Work:</span>
                                        <span className="text-gray-200 text-right">MDL Framework,<br /> FaaS</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-gray-400">FIDE Rating:</span>
                                        <span className="text-cyan-400"><a href="https://ratings.fide.com/profile/315105339" target="_blank" rel="noopener noreferrer">315105339</a></span>
                                    </li>
                                </ul>
                            </div>

                            {/* Online Presence */}
                            <div className="p-6 rounded-2xl glass-liquid border border-white/5 bg-white/5 shadow-lg">
                                <h3 className="text-lg font-bold mb-4 text-white border-b border-white/10 pb-2">Profiles</h3>
                                <div className="flex flex-wrap gap-3">
                                    <a href="https://sifatmusfique.dev" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-gray-300 hover:text-cyan-400 transition-colors">Website</a>
                                    <a href="https://github.com/sifatmusfique" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-gray-300 hover:text-cyan-400 transition-colors">GitHub</a>
                                    <a href="https://scholar.google.com/citations?user=LsO3KMsAAAAJ" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-gray-300 hover:text-cyan-400 transition-colors">Scholar</a>
                                    <a href="https://orcid.org/0009-0009-6985-3080" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-gray-300 hover:text-cyan-400 transition-colors">ORCID</a>
                                    <a href="https://www.researchgate.net/profile/Sifat-Musfique" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-gray-300 hover:text-cyan-400 transition-colors">ResearchGate</a>
                                    <a href="https://www.linkedin.com/in/sifatmusfique-dev" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-gray-300 hover:text-cyan-400 transition-colors">LinkedIn</a>
                                    <a href="https://www.imdb.com/name/nm18221523/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-gray-300 hover:text-cyan-400 transition-colors">IMDb</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content Sections */}
                    <div className="lg:w-2/3 space-y-16 text-gray-300 leading-relaxed">

                        <section>
                            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                                Projects
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </h2>
                            <p className="mb-8 text-lg">Musfique has worked on several software and research initiatives, including:</p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/10 group">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">Formula-as-a-Service (FaaS)</h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">A cloud-based API system designed for evaluating mathematical expressions and computational formulas through scalable backend infrastructure.</p>
                                </div>

                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/10 group">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">TensorTide</h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">TensorTide is a technology and education initiative created by Musfique to simplify complex topics in artificial intelligence, machine learning, and computational science through digital media and educational resources.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                                Applications in Medical Biology
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </h2>
                            <p className="mb-8 text-lg">The MDL framework has been proposed for applications in computational biology and medical diagnostics, particularly in systems requiring high-throughput analysis of biomedical data streams.</p>

                            <div className="space-y-6">
                                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-cyan-400 text-xl mt-1">▹</div>
                                    <div><strong className="text-white text-lg block mb-2">Genomic Sequence Alignment:</strong> <span className="text-gray-400">MDL agents orchestrate distributed clusters to perform real-time sequence alignment.</span></div>
                                </div>
                                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-cyan-400 text-xl mt-1">▹</div>
                                    <div><strong className="text-white text-lg block mb-2">Diagnostic Imaging Analysis:</strong> <span className="text-gray-400">The framework enables distributed processing of high-resolution MRI and CT imaging data.</span></div>
                                </div>
                                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-cyan-400 text-xl mt-1">▹</div>
                                    <div><strong className="text-white text-lg block mb-2">Biometric Telemetry:</strong> <span className="text-gray-400">MDL reasoning nodes filter noise from physiological monitoring signals such as heart-rate and SpO₂ streams.</span></div>
                                </div>
                                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-cyan-400 text-xl mt-1">▹</div>
                                    <div><strong className="text-white text-lg block mb-2">Proteomics and Protein Folding:</strong> <span className="text-gray-400">The architecture allows distributed simulation of protein-ligand interactions in computational biology pipelines.</span></div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                                Research Publications
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <div className="text-fuchsia-400 text-xl mt-1">▹</div>
                                    <div className="text-lg"><strong className="text-white">Agentic Orchestration in Diagnostic Medical Imaging: A Musfique Decision Loop (MDL) Approach</strong> (2026)</div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="text-fuchsia-400 text-xl mt-1">▹</div>
                                    <div className="text-lg"><strong className="text-white">Formula-as-a-Service: Building and Analyzing a PHP and MySQL Cloud-Based API</strong> (2026)</div>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                                Personal Life
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </h2>
                            <div className="space-y-6 text-lg p-8 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-gray-300">Musfique was raised in a Muslim family in Naogaon, Bangladesh.</p>
                                <p className="text-gray-300">Outside of software development and research, he is an active chess player and is registered with the <strong className="text-white">International Chess Federation (FIDE)</strong> under player ID <a href="https://ratings.fide.com/profile/315105339" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">315105339</a>.</p>
                                <p className="text-gray-300">He has expressed interest in analytical chess openings such as the London System and defensive strategies including the Caro-Kann Defense.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                                References & Authority Control
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </h2>
                            <div className="space-y-8">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                                    <li className="flex items-center gap-2"><span className="text-white/30">1.</span> <a href="https://sifatmusfique.dev/about" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Official website biography</a></li>
                                    <li className="flex items-center gap-2"><span className="text-white/30">2.</span> <a href="https://www.imdb.com/name/nm18221523/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">IMDb profile</a></li>
                                    <li className="flex items-center gap-2"><span className="text-white/30">3.</span> <a href="https://hackernoon.com/u/sifatmusfique" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">HackerNoon author profile</a></li>
                                    <li className="flex items-center gap-2"><span className="text-white/30">4.</span> <a href="https://golden.com/profile/sifat-musfique" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Golden knowledge graph profile</a></li>
                                    <li className="flex items-center gap-2"><span className="text-white/30">5.</span> <a href="https://scholar.google.com/citations?user=LsO3KMsAAAAJ" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Google Scholar profile</a></li>
                                    <li className="flex items-center gap-2"><span className="text-white/30">6.</span> <a href="https://orcid.org/0009-0009-6985-3080" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">ORCID researcher ID</a></li>
                                    <li className="flex items-center gap-2"><span className="text-white/30">7.</span> <a href="https://www.openpr.com/news/4391159" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">OpenPR coverage</a></li>
                                    <li className="flex items-center gap-2 col-span-1 md:col-span-2"><span className="text-white/30">8.</span> <a href="https://ratings.fide.com/profile/315105339" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">FIDE chess profile</a></li>
                                    <li className="flex items-start gap-2 col-span-1 md:col-span-2">
                                    </li>
                                </ul>

                                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-cyan-200 text-sm font-mono shadow-sm">ORCID: 0009-0009-6985-3080</span>
                                    <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-cyan-200 text-sm font-mono shadow-sm">FIDE: 315105339</span>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
}

