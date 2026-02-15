"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiUser, FiMail, FiMessageSquare, FiSend, FiShare2, FiMapPin, FiPhone } from "react-icons/fi";
import Ripple from "./Ripple";

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // REPLACE THESE SECRETS WITH YOUR OWN FROM EMAILJS DASHBOARD
        // Service ID, Template ID, Public Key
        emailjs
            .sendForm(
                "service_im92i5i", // e.g., service_z3x2...
                "template_f4hf0b3", // e.g., template_a1b2...
                form.current,
                "sQYAcSr7VHgePGIAC" // e.g., user_8jK9...
            )
            .then(
                (result) => {
                    setStateMessage("Message sent successfully!");
                    setIsSubmitting(false);
                    e.target.reset();
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                },
                (error) => {
                    setStateMessage("Something went wrong, please try again later");
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                }
            );
    };
    const socialLinks = [
        {
            icon: <FaLinkedin className="text-3xl" />,
            title: "LinkedIn",
            subtitle: "sifatmusfique-dev",
            href: "https://linkedin.com/in/sifatmusfique-dev",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            icon: <FaFacebook className="text-blue-600" />,
            title: "Facebook",
            subtitle: "sifatmusfique",
            href: "https://facebook.com/sifatmusfique",
            bg: "bg-blue-600/10",
            border: "border-blue-600/20"
        },
        {
            icon: <FaGithub className="text-gray-200" />,
            title: "Github",
            subtitle: "@sifatmusfique",
            href: "https://github.com/sifatmusfique",
            bg: "bg-gray-700/10",
            border: "border-gray-600/20"
        },
        {
            icon: <FaInstagram className="text-pink-500" />,
            title: "Instagram",
            subtitle: "@sifatmusfique",
            href: "https://instagram.com/sifatmusfique",
            bg: "bg-pink-500/10",
            border: "border-pink-500/20"
        },
    ];

    const contactDetails = [
        {
            icon: <FiMapPin className="text-green-500" />,
            title: "Location",
            subtitle: "Rajshahi-6000, Bangladesh",
            href: "#",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
        {
            icon: <FiMail className="text-cyan-500" />,
            title: "Email",
            subtitle: "sifatmusfique@gmail.com",
            href: "mailto:sifatmusfique@gmail.com",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20"
        },
        {
            icon: <FiPhone className="text-purple-500" />,
            title: "Phone",
            subtitle: "+8801560009992",
            href: "tel:+8801560009992",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        }
    ];

    return (
        <section id="contact" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Got a question? Send me a message, and I'll get back to you soon.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Contact Form Card */}
                    <div className="glass-liquid p-6 rounded-3xl relative overflow-hidden" data-aos="fade-right">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                                    Get in Touch
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Have something to discuss? Send me a message and let's talk.
                                </p>
                            </div>
                            <FiShare2 className="text-gray-500 text-xl" />
                        </div>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="group">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group-focus-within:border-cyan-500/50 transition-colors">
                                    <FiUser className="text-gray-400 group-focus-within:text-cyan-400 text-xl" />
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Your Name"
                                        required
                                        className="bg-transparent w-full outline-none text-white placeholder-gray-500"
                                    />
                                    {/* Hidden input for time to match user's template */}
                                    <input type="hidden" name="time" value={new Date().toLocaleString()} />
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group-focus-within:border-cyan-500/50 transition-colors">
                                    <FiMail className="text-gray-400 group-focus-within:text-cyan-400 text-xl" />
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Your Email"
                                        required
                                        className="bg-transparent w-full outline-none text-white placeholder-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group-focus-within:border-cyan-500/50 transition-colors">
                                    <FiMessageSquare className="text-gray-400 group-focus-within:text-cyan-400 text-xl mt-1" />
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows="4"
                                        required
                                        className="bg-transparent w-full outline-none text-white placeholder-gray-500 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group relative overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    {!isSubmitting && <FiSend className="group-hover:translate-x-1 transition-transform" />}
                                </span>
                                <Ripple />
                            </button>

                            {/* Status Messages */}
                            {stateMessage && (
                                <p className={`text-center text-sm mt-4 ${stateMessage.includes('sent') ? 'text-green-400' : 'text-red-400'}`}>
                                    {stateMessage}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Right Column - Socials & Contact Details */}
                    <div className="flex flex-col gap-6" data-aos="fade-left">

                        {/* Socials Card */}
                        <div className="glass-liquid p-6 rounded-3xl relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
                                <h3 className="text-xl font-bold text-white">Connect With Me</h3>
                            </div>

                            <div className="flex flex-col gap-4">
                                {socialLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Connect on ${item.title}`}
                                        className={`flex items-center gap-4 p-3 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer group ${item.bg} ${item.border} hover:border-opacity-50`}
                                    >
                                        <div className="p-2 rounded-lg bg-black/20 text-lg group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-200">{item.title}</h4>
                                            <p className="text-xs text-gray-400">{item.subtitle}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Details Card */}
                        <div className="glass-liquid p-6 rounded-3xl relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-fuchsia-500 rounded-full"></span>
                                <h3 className="text-xl font-bold text-white">Contact Details</h3>
                            </div>

                            <div className="flex flex-col gap-4">
                                {contactDetails.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        aria-label={`Contact via ${item.title}`}
                                        className={`flex items-center gap-4 p-3 rounded-xl border transition-all hover:bg-white/5 cursor-pointer group ${item.bg} ${item.border} border-opacity-50`}
                                    >
                                        <div className="p-2 rounded-lg bg-black/20 text-lg group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-200">{item.title}</h4>
                                            <p className="text-xs text-gray-400">{item.subtitle}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
