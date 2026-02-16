import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-8 text-center border-t border-white/10 relative z-10 text-gray-500 text-sm flex flex-col gap-2 items-center justify-center">
            <p>&copy; {new Date().getFullYear()} Sifat Musfique. All Rights Reserved.</p>
            <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                    Privacy Policy & Terms
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
