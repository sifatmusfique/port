import Showcase from "@/components/Showcase";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
    title: "Portfolio | Sifat Musfique",
    description: "Explore the projects and technical case studies of Sifat Musfique, featuring Full-Stack Web Applications, AI Integrations, and System Architecture.",
    alternates: {
        canonical: 'https://sifatmusfique.dev/portfolio',
    },
};

export default function PortfolioPage() {
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
                                "name": "Portfolio",
                                "item": "https://sifatmusfique.dev/portfolio"
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
            <Showcase />
        </main>
    );
}
