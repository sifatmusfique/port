import React from "react";
import Press from "@/components/Press";
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata = {
    title: "Press & Publications | Sifat Musfique",
    description: "Media mentions, academic publications, and professional recognition for Sifat Musfique.",
    alternates: {
        canonical: 'https://sifatmusfique.dev/press',
    },
};

const PressPage = () => {
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
                                "name": "Press",
                                "item": "https://sifatmusfique.dev/press"
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
            <Press />
        </main>
    );
};

export default PressPage;
