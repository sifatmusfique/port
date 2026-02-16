import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
    title: "Privacy Policy | Sifat Musfique",
    description: "Privacy Policy and Terms for Sifat Musfique's official website.",
    alternates: {
        canonical: 'https://sifatmusfique.dev/privacy',
    },
};

const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen bg-[#030014] text-gray-200 py-20 px-6">
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
                                "name": "Privacy Policy",
                                "item": "https://sifatmusfique.dev/privacy"
                            }
                        ]
                    })
                }}
            />
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12 group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    Privacy <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Policy</span>
                </h1>

                <p className="text-gray-400 mb-12">
                    Last Updated: February 16, 2026
                </p>

                <div className="space-y-12">
                    <section className="glass-liquid p-8 rounded-3xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Welcome to the official portfolio website of Sifat Musfique. We are committed to protecting your personal information and your right to privacy. This Privacy Policy outlines our practices regarding any information we collect when you visit our website (https://sifatmusfique.dev).
                        </p>
                    </section>

                    <section className="glass-liquid p-8 rounded-3xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Name and Contact Data (Email address, Phone number)</li>
                            <li>Credentials (if you create an account)</li>
                            <li>Payment Data (if you make a purchase)</li>
                        </ul>
                    </section>

                    <section className="glass-liquid p-8 rounded-3xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We use the information we collect or receive:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send you marketing and promotional communications.</li>
                            <li>To send administrative information to you.</li>
                            <li>To fulfill and manage your orders.</li>
                            <li>To protect our Services.</li>
                        </ul>
                    </section>
                    <section className="glass-liquid p-8 rounded-3xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Web Beacons</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
                        </p>
                    </section>

                    <section className="glass-liquid p-8 rounded-3xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                        <p className="text-gray-300 leading-relaxed">
                            If you have questions or comments about this policy, you may email us at <a href="mailto:sifatmusfique@gmail.com" className="text-cyan-400 hover:underline">sifatmusfique@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
