"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            delay: 0,
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
            offset: 0, // Trigger immediately when element is in view
        });

        // Refresh immediately to detect elements
        AOS.refresh();

        const handleResize = () => {
            AOS.refresh();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return null;
}
