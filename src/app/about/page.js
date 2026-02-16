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
        </main>
    );
}
