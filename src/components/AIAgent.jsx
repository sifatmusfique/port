"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const AIAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm Sifat's Assistant. How can I help you?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const suggestions = [
        "Tell me about Sifat's projects",
        "What are his skills?",
        "How can I contact him?",
        "Does he know Python?",
    ];

    const handleSendMessage = async (text) => {
        if (!text.trim()) return;

        const userMsg = {
            id: Date.now(),
            text: text,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: text }),
            });

            const data = await response.json();

            if (response.ok) {
                const botMsg = {
                    id: Date.now() + 1,
                    text: data.response,
                    sender: "bot",
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, botMsg]);
            } else {
                throw new Error(data.error || "Failed to fetch response");
            }
        } catch (error) {
            console.error("Error:", error);
            const errorMsg = {
                id: Date.now() + 1,
                text: "Sorry, I'm having trouble connecting to Sifat's brain right now. Please try again later!",
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage(inputValue);
        }
    };

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShowPopup(false);
            return;
        }

        const showRandomPopup = () => {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
        };

        const timeout = setTimeout(showRandomPopup, 2000 + Math.random() * 5000); // Show after 2-7 seconds

        return () => clearTimeout(timeout);
    }, [isOpen, showPopup]); // Re-run when popup hides to schedule next one

    return (
        <>
            {/* Random Popup */}
            <AnimatePresence>
                {showPopup && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="fixed bottom-24 right-6 z-50 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-xl"
                    >
                        Sifat's Assistant
                        <div className="absolute -bottom-1 right-6 h-3 w-3 rotate-45 bg-white"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? (
                    <FaTimes size={24} />
                ) : (
                    <div className="h-full w-full rounded-full overflow-hidden p-0.5">
                        <img
                            src="/ai-avatar.png"
                            alt="AI"
                            className="h-full w-full object-cover rounded-full"
                        />
                    </div>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-24 right-4 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/90 shadow-2xl backdrop-blur-md sm:right-6"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between bg-gradient-to-r from-blue-600/20 to-violet-600/20 p-4 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-violet-600/50 mix-blend-overlay z-10" />
                                    <img
                                        src="/ai-avatar.png"
                                        alt="AI Avatar"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white">Sifat's Assistant</h3>
                                    <p className="text-xs text-green-400 flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                        Powered by Gemini
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700">
                            <div className="flex flex-col gap-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.sender === "user"
                                                ? "bg-blue-600 text-white rounded-br-none"
                                                : "bg-gray-800 text-gray-100 rounded-bl-none border border-white/5"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-gray-800 rounded-2xl rounded-bl-none px-4 py-3 border border-white/5">
                                            <div className="flex gap-1">
                                                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"></span>
                                                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce delay-100"></span>
                                                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce delay-200"></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Suggestions */}
                        {messages.length < 2 && !isTyping && (
                            <div className="px-4 pb-2">
                                <p className="mb-2 text-xs text-gray-500 font-medium">Suggestions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {suggestions.map((s, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSendMessage(s)}
                                            className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300 hover:bg-blue-500/20 transition-colors"
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="border-t border-white/10 p-4 bg-gray-900">
                            <div className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 border border-white/5 focus-within:border-blue-500/50 transition-colors">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask about Sifat..."
                                    className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
                                />
                                <button
                                    onClick={() => handleSendMessage(inputValue)}
                                    disabled={!inputValue.trim()}
                                    className="text-blue-500 hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <FaPaperPlane />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIAgent;
