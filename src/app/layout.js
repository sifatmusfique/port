import { Inter } from "next/font/google";
import "./globals.css";
import AosInit from "@/components/AosInit";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import SmoothScroll from "@/components/SmoothScroll";
import AIAgent from "@/components/AIAgent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://sifatmusfique.dev'),
  title: "Sifat Musfique | Full Stack Developer & FIDE Chess Player",
  description: "Portfolio of Sifat Musfique, a Full Stack Developer and FIDE Chess Player. Explore projects in AI, web development, and more.",
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://sifatmusfique.dev/#person",
        "url": "https://sifatmusfique.dev/",
        "mainEntityOfPage": "https://sifatmusfique.dev/",
        "name": "Sifat Musfique",
        "jobTitle": "Software Developer",
        "description": "Sifat Musfique is a software developer and researcher based in Bangladesh. He is a student of Computer Science and Engineering at Varendra University focusing on web infrastructure and AI-driven technologies.",
        "nationality": "Bangladeshi",
        "affiliation": {
          "@type": "EducationalOrganization",
          "name": "Varendra University",
          "url": "https://vu.edu.bd/"
        },
        "brand": {
          "@type": "Brand",
          "name": "TensorTide"
        },
        "knowsAbout": ["React", "PHP", "Web Development", "Chess Strategy", "AI-driven technologies"],
        "homeLocation": {
          "@type": "Place",
          "name": "Rajshahi, Bangladesh"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rajshahi",
          "postalCode": "6000",
          "addressCountry": "BD"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "sifatmusfique@gmail.com",
          "telephone": "+8801560009992",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.google.com/search?kgmid=/g/11yzdbf2km",
          "https://wikialpha.co/wiki/Sifat_Musfique",
          "https://www.crunchbase.com/person/sifat-musfique",
          "https://www.wikidata.org/wiki/Q138035556",
          "https://ratings.fide.com/profile/315105339",
          "https://scholar.google.com/citations?user=LsO3KMsAAAAJ",
          "https://www.researchgate.net/profile/Sifat-Musfique",
          "https://github.com/sifatmusfique",
          "https://www.linkedin.com/in/sifatmusfique-dev",
          "https://dev.to/sifatmusfique",
          "https://hashnode.com/@sifatmusfique",
          "https://stackoverflow.com/users/32314667/sifat-musfique",
          "https://codepen.io/sifatmusfique",
          "https://www.fiverr.com/sifatmusfique",
          "https://www.xing.com/profile/Sifat_Musfique",
          "https://about.me/sifatmusfique",
          "https://www.ted.com/profiles/51097968",
          "https://gravatar.com/sifatmusfique",
          "https://www.facebook.com/sifatmusfique",
          "https://www.instagram.com/sifat.musfique",
          "https://www.skool.com/@sifat-musfique-8682"
        ]
      }
    ]
  };

  return (
    <html lang="en" className="dark overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden text-gray-200`}>
        <SmoothScroll />
        <BackgroundCanvas />
        <Navbar />
        <AosInit />
        <AIAgent />
        {children}
        <Footer />
      </body>
    </html>
  );
}