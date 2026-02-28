import { Inter } from "next/font/google";
import "./globals.css";
import AosInit from "@/components/AosInit";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import SmoothScroll from "@/components/SmoothScroll";
import AIAgent from "@/components/AIAgent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

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
    "@type": "Person",
    "@id": "https://sifatmusfique.dev/#person",
    "url": "https://sifatmusfique.dev/",
    "mainEntityOfPage": "https://sifatmusfique.dev",
    "name": "Sifat Musfique",
    "jobTitle": ["Software Developer", "Research Scientist"],
    "description": "Sifat Musfique is a software developer and researcher based in Bangladesh. He is a Computer Science and Engineering (CSE) student at Varendra University focusing on web infrastructure and AI-driven technologies.",
    "nationality": "Bangladeshi",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://sifatmusfique.dev/photos/Sifat_Musfique.png",
        "representativeOfPage": "true"
      },
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
    "gender": "Male",
    "height": {
      "@type": "QuantitativeValue",
      "value": "182",
      "unitCode": "CMT"
    },
    "knowsLanguage": ["Bengali", "English"],
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
      },
      {
        "@type": "EducationalOrganization",
        "name": "Varendra University Computer Club"
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
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "BSc in Computer Science and Engineering (Candidate)",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "Varendra University"
        }
      }
    ],
    "sameAs": [
      "https://www.google.com/search?kgmid=/g/11yzdbf2km",
      "https://orcid.org/0009-0009-6985-3080",
      "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=LsO3KMsAAAAJ",
      "https://www.crunchbase.com/person/sifat-musfique",
      "https://www.imdb.com/name/nm18221523/",
      "https://ratings.fide.com/profile/315105339",
      "https://www.researchgate.net/profile/Sifat-Musfique",
      "https://hackernoon.com/u/sifatmusfique",
      "https://medium.com/@sifatmusfique",
      "https://www.forem.com/sifatmusfique",
      "https://www.linkedin.com/in/sifatmusfique-dev",
      "https://dev.to/sifatmusfique",
      "https://hashnode.com/@sifatmusfique",
      "https://stackoverflow.com/users/32314667/sifat-musfique",
      "https://about.me/sifatmusfique",
      "https://www.facebook.com/sifatmusfique",
      "https://www.instagram.com/sifat.musfique"
    ],
    "@reverse": {
      "author": [
        {
          "@type": "CreativeWork",
          "headline": "Formula-as-a-Service (FaaS) Optimization Patterns",
          "sameAs": "https://doi.org/10.13140/RG.2.2.31072.14080",
          "url": "https://www.researchgate.net/publication/400668231_Formula-as-a-Service_Building_and_Analyzing_a_PHP_and_MySQL_Cloud-Based_API"
        },
        {
          "@type": "CreativeWork",
          "headline": "Beyond Reactive Architectures: The Musfique Decision Loop (MDL)",
          "sameAs": "https://doi.org/10.13140/RG.2.2.24288.34564",
          "url": "https://www.researchgate.net/publication/400998778_Beyond_Reactive_Architectures_The_Musfique_Decision_Loop_MDL_and_the_Emergence_of_Agentic_FaaS_Systems"
        }
      ]
    }
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