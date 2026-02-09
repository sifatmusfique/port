import React from "react";

const Footer = () => {
    return (
        <footer className="py-8 text-center border-t border-white/10 relative z-10 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Sifat Musfique. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
