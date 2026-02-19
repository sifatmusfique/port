"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaChessKnight, FaWikipediaW } from "react-icons/fa";

const Hero = () => {
    const [text, setText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(30);

    const phrases = [
        "Computer Science & Engg. Student",
        "Tech Enthusiast",
        "System Architect"
    ];

    React.useEffect(() => {
        const i = loopNum % phrases.length;
        const fullText = phrases[i];

        const handleType = () => {
            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 30);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        // Determine delay: 0 if starting new, otherwise standard speed
        const timerSpeed = (text === "" && !isDeleting) ? 0 : typingSpeed;

        const timer = setTimeout(handleType, timerSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, phrases, typingSpeed]);

    return (
        <section id="home" className="min-h-[auto] md:min-h-screen flex items-center justify-center pt-24 pb-8 md:pt-20 md:pb-0 relative overflow-hidden border-none outline-none">
            {/* Background Glows */}
            {/* Background Glows - Removed to fix lighting difference with About section */}

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <div className="text-left space-y-6 z-10 animate-fade-right">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-500/50 shadow-[0_0_20px_rgba(192,38,211,0.3)] bg-fuchsia-950/30 backdrop-blur-xl hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(192,38,211,0.5)] transition-all cursor-default group">
                        <span className="text-fuchsia-200 text-[13px] font-semibold tracking-wide flex items-center gap-2">
                            <span className="text-fuchsia-400 group-hover:animate-spin-slow">✨</span> Ready to Innovate
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Software Developer & <br />
                        <span className="bg-gradient-to-r from-cyan-300 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x bg-300% drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                            Researcher
                        </span>
                    </h1>

                    <div className="md:text-xl text-gray-300 max-w-lg leading-relaxed">
                        <span className="block text-white font-semibold mb-2 min-h-[1.5em] text-lg bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {text}
                            <span className="animate-pulse text-cyan-400">|</span>
                        </span>
                        I architect scalable computational infrastructures and craft intuitive user experiences using modern technologies.
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2 mb-8">
                        {["React", "Javascript", "Node.js", "PostgreSQL"].map((tech, index) => (
                            <span
                                key={index}
                                className="px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-gray-300 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-row gap-4 md:gap-6">
                        <a
                            href="#portfolio"
                            className="bg-white/5 backdrop-blur-md px-6 md:px-10 py-3 rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all group relative overflow-hidden flex-1 text-center justify-center"
                        >
                            <span className="relative z-10 font-semibold text-white flex items-center justify-center gap-2 group-hover:scale-105 transition-transform">
                                Projects <FaGithub className="text-cyan-400 group-hover:text-white transition-colors" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </a>
                        <a
                            href="#contact"
                            className="bg-white/5 backdrop-blur-md px-6 md:px-10 py-3 rounded-xl border border-fuchsia-500/30 shadow-[0_0_20px_rgba(192,38,211,0.2)] hover:border-fuchsia-400 hover:shadow-[0_0_35px_rgba(192,38,211,0.4)] transition-all group relative overflow-hidden flex-1 text-center justify-center"
                        >
                            <span className="relative z-10 font-semibold text-white flex items-center justify-center gap-2 group-hover:scale-105 transition-transform">
                                Contact <FaLinkedin className="text-fuchsia-400 group-hover:text-white transition-colors" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 via-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4 pt-6">
                        {[
                            { icon: <FaGithub />, href: "https://github.com/sifatmusfique" },
                            { icon: <FaLinkedin />, href: "https://linkedin.com/in/sifatmusfique-dev" },
                            { icon: <FaWikipediaW />, href: "https://wikialpha.co/wiki/Sifat_Musfique" },
                            { icon: <FaChessKnight />, href: "https://ratings.fide.com/profile/315105339", rel: "me" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                rel={social.rel}
                                target="_blank"
                                aria-label={`Connect on ${social.href.split('://')[1].split('/')[0]}`} // Simple extraction for label
                                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-[#7042f8]/60 shadow-[0_0_15px_rgba(112,66,248,0.4)] hover:bg-white/10 hover:border-blue-500/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] text-gray-400 hover:text-white transition-all hover:-translate-y-1"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Content - Tech Stack Visualization */}
                <div className="relative hidden md:flex justify-center animate-fade-left">
                    <div className="relative w-80 h-80 md:w-96 md:h-96">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
