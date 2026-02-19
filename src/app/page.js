import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Showcase = dynamic(() => import("@/components/Showcase"));
const Press = dynamic(() => import("@/components/Press"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
    return (
        <main className="min-h-screen bg-transparent">
            <Hero />
            <About />
            <Showcase />
            <Press />
            <Contact />
        </main>
    );
}
