import Hero from "@/components/Hero";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Press from "@/components/Press";
import Contact from "@/components/Contact";

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
