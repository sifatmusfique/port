"use client";

import React, { useState } from "react";


import Link from "next/link";
import Ripple from "./Ripple";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = React.useRef(0);

    React.useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    if (currentScrollY > 0) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }

                    if (currentScrollY < 10) {
                        setIsVisible(true);
                        lastScrollY.current = currentScrollY;
                        ticking = false;
                        return;
                    }

                    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                        setIsVisible(false);
                        setIsOpen(false);
                    } else if (currentScrollY < lastScrollY.current) {
                        setIsVisible(true);
                    }

                    lastScrollY.current = currentScrollY;
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Portfolio", href: "/portfolio" },
        { title: "Press", href: "/press" },
        { title: "Contact", href: "/contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-[100px] h-[65px] flex items-center justify-between transition-transform duration-200 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "glass-nav" : "bg-transparent"}`} style={{ willChange: "transform" }}>
            <div className="w-full flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
                    Sifat Musfique
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.title}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm font-semibold"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 relative z-50 group overflow-hidden rounded-md"
                    aria-label="Toggle Menu"
                >
                    <span
                        className={`w-8 h-[2px] bg-gray-300 rounded-full transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-2 bg-cyan-400" : "group-hover:bg-cyan-400"
                            }`}
                    />
                    <span
                        className={`w-6 h-[2px] bg-gray-300 rounded-full transition-all duration-300 ease-in-out ml-auto ${isOpen ? "opacity-0 w-0" : "opacity-100 group-hover:bg-cyan-400"
                            }`}
                    />
                    <span
                        className={`w-8 h-[2px] bg-gray-300 rounded-full transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2 bg-cyan-400" : "group-hover:bg-cyan-400"
                            }`}
                    />
                    <Ripple />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-[65px] left-0 w-full bg-[#030014]/90 backdrop-blur-md form-container overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                    ? "max-h-screen py-6 border-b border-white/10 opacity-100"
                    : "max-h-0 py-0 border-none opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-4 px-4">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-cyan-400 text-lg font-medium"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
