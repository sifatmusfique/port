import About from "@/components/About";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-transparent pt-24 pb-12">
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
