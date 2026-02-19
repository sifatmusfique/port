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
  title: "Sifat Musfique - Official Website",
  description: "Sifat Musfique is a software developer and researcher based in Bangladesh. CSE student at Varendra University specializing in PHP, React, and AI-driven technologies.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sifat Musfique - Official Website",
    description: "Software developer and researcher focusing on web infrastructure and AI-driven technologies.",
    url: 'https://sifatmusfique.dev',
    siteName: 'Sifat Musfique Official Website',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/brain/metad.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        "mainEntityOfPage": "https://sifatmusfique.dev",
        "name": "Sifat Musfique",
        "jobTitle": "Software Developer",
        "description": "Sifat Musfique is a software developer and researcher based in Bangladesh. He is a Computer Science and Engineering (CSE) student at Varendra University focusing on web infrastructure and AI-driven technologies.",
        "nationality": "Bangladeshi",
        "image": [
          "https://sifatmusfique.dev/photos/Sifat_Musfique.png",
          "https://sifatmusfique.dev/photos/Sifat_Musfique_chess.png",
          "https://sifatmusfique.dev/photos/Sifat_Musfique_election.jpg",
          "https://sifatmusfique.dev/photos/Sifat_Musfique_hoodie.jpg",
          "https://sifatmusfique.dev/photos/Sifat_Musfique_live.jpg",
          "https://sifatmusfique.dev/photos/Sifat_Musfique_night.jpg",
          "https://sifatmusfique.dev/photos/Sifat_Musfique_pic.jpg",
          "https://sifatmusfique.dev/photos/Sifat_Musfique_punjabi.jpg",
          "https://sifatmusfique.dev/photos/Sifat_Musfique_stand.jpg"
        ],
        "birthDate": "2005-06-12",
        "birthPlace": {
          "@type": "Place",
          "name": "Naogaon, Bangladesh"
        },
        "affiliation": {
          "@type": "EducationalOrganization",
          "name": "Varendra University",
          "url": "https://vu.edu.bd/"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Varendra University"
        },
        "memberOf": [
          {
            "@type": "Organization",
            "name": "FIDE - International Chess Federation"
          }
        ],
        "brand": {
          "@type": "Brand",
          "name": "TensorTide",
          "alternateName": "TensorTide Education"
        },
        "knowsAbout": ["React", "PHP", "Python", "Web Development", "AI Orchestration", "Chess Strategy", "AI-driven technologies"],
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
          "https://www.wikidata.org/wiki/Q138035556",
          "https://www.crunchbase.com/person/sifat-musfique",
          "https://www.imdb.com/name/nm18221523/",
          "https://ratings.fide.com/profile/315105339",
          "https://www.researchgate.net/profile/Sifat-Musfique",
          "https://hackernoon.com/u/sifatmusfique",
          "https://medium.com/@sifatmusfique",
          "https://forem.com/sifatmusfique",
          "https://www.linkedin.com/in/sifatmusfique-dev",
          "https://dev.to/sifatmusfique",
          "https://forem.com/sifatmusfique",
          "https://hashnode.com/@sifatmusfique",
          "https://stackoverflow.com/users/32314667/sifat-musfique",
          "https://www.fiverr.com/sifatmusfique",
          "https://about.me/sifatmusfique",
          "https://www.facebook.com/sifatmusfique",
          "https://www.instagram.com/sifat.musfique",
          "https://wikialpha.co/wiki/Sifat_Musfique",
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