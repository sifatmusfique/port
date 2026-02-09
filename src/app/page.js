import Hero from "@/components/Hero";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-transparent">
            <Hero />
            <About />
            <Showcase />
            <Contact />
        </main>
    );
}
