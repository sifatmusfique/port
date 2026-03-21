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
    "url": "https://sifatmusfique.dev/",
    "mainEntityOfPage": "https://sifatmusfique.dev",
    "name": "Sifat Musfique",
    "jobTitle": "Software Developer and Researcher",
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
    "gender": "Male",
    "height": "183 cm",
    "birthPlace": {
      "@type": "Place",
      "name": "Naogaon, Bangladesh"
    },
    "affiliation": {
      "@type": "EducationalOrganization",
      "name": "Varendra University",
      "url": "https://vu.edu.bd/"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Varendra University"
      },
      {
        "@type": "EducationalOrganization",
        "name": "R.B govt high school, Joypurhat"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Joypurhat govt college"
      }
    ],
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
    "knowsAbout": [
      "React",
      "PHP",
      "Python",
      "Web Development",
      "AI Orchestration",
      "Chess Strategy",
      "AI-driven technologies",
      {
        "@type": "Person",
        "name": "Andrew Ng",
        "jobTitle": "Computer Scientist"
      },
      {
        "@type": "Person",
        "name": "Yann LeCun",
        "jobTitle": "Computer Scientist"
      },
      {
        "@type": "Person",
        "name": "Geoffrey Hinton",
        "jobTitle": "Computer Scientist"
      },
      {
        "@type": "Person",
        "name": "Demis Hassabis",
        "jobTitle": "AI Researcher"
      },
      {
        "@type": "Person",
        "name": "Linus Torvalds",
        "jobTitle": "Software Engineer"
      },
      {
        "@type": "Person",
        "name": "Guillermo Rauch",
        "jobTitle": "Software Developer"
      },
      {
        "@type": "Person",
        "name": "Rasmus Lerdorf",
        "jobTitle": "Programmer"
      }
    ],
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
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Secondary School Certificate",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "R.B govt high school, Joypurhat"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Higher Secondary Certificate",
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "Joypurhat govt college"
        }
      }
    ],
    "subjectOf": [
      {
        "@type": "ScholarlyArticle",
        "url": "https://sifatmusfique.dev/research/faas-benchmarks",
        "name": "Technical Appendix: Performance Metrics for Agentic FaaS Orchestration",
        "headline": "Performance Metrics for Agentic FaaS Orchestration",
        "image": [
          "https://sifatmusfique.dev/photos/mdl_article.png"
        ],
        "author": {
          "@type": "Person",
          "name": "Sifat Musfique",
          "url": "https://sifatmusfique.dev/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sifat Musfique Research",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sifatmusfique.dev/photos/Sifat_Musfique.png"
          }
        },
        "datePublished": "2026-01-10T00:00:00+06:00",
        "dateModified": "2026-01-10T00:00:00+06:00"
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "Formula-as-a-Service (FaaS): Building and Analyzing a PHP and MySQL Cloud-Based API",
        "name": "Formula-as-a-Service (FaaS): Building and Analyzing a PHP and MySQL Cloud-Based API",
        "image": [
          "https://sifatmusfique.dev/photos/faas_article.png"
        ],
        "author": {
          "@type": "Person",
          "name": "Sifat Musfique",
          "url": "https://sifatmusfique.dev/"
        },
        "datePublished": "2026-02-16T00:00:00+06:00",
        "dateModified": "2026-02-16T00:00:00+06:00",
        "publisher": {
          "@type": "Organization",
          "name": "ResearchGate",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sifatmusfique.dev/photos/Sifat_Musfique.png"
          }
        },
        "sameAs": "https://doi.org/10.13140/RG.2.2.31072.14080",
        "url": "https://www.researchgate.net/publication/400668231_Formula-as-a-Service_Building_and_Analyzing_a_PHP_and_MySQL_Cloud-Based_API"
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "Beyond Reactive Architectures: The Musfique Decision Loop (MDL) and the Emergence of Agentic FaaS Systems",
        "name": "Beyond Reactive Architectures: The Musfique Decision Loop (MDL) and the Emergence of Agentic FaaS Systems",
        "image": [
          "https://sifatmusfique.dev/photos/mdl_article.png"
        ],
        "author": {
          "@type": "Person",
          "name": "Sifat Musfique",
          "url": "https://sifatmusfique.dev/"
        },
        "datePublished": "2026-02-21T00:00:00+06:00",
        "dateModified": "2026-02-21T00:00:00+06:00",
        "publisher": {
          "@type": "Organization",
          "name": "ResearchGate",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sifatmusfique.dev/photos/Sifat_Musfique.png"
          }
        },
        "sameAs": "https://doi.org/10.13140/RG.2.2.24288.34564",
        "url": "https://www.researchgate.net/publication/400998778_Beyond_Reactive_Architectures_The_Musfique_Decision_Loop_MDL_and_the_Emergence_of_Agentic_FaaS_Systems"
      },
      {
        "@type": "ScholarlyArticle",
        "headline": "Agentic Orchestration in Diagnostic Medical Imaging: A Musfique Decision Loop Approach",
        "name": "Agentic Orchestration in Diagnostic Medical Imaging: A Musfique Decision Loop Approach",
        "image": [
          "https://sifatmusfique.dev/photos/diag_imaging_mdl.png"
        ],
        "author": {
          "@type": "Person",
          "name": "Sifat Musfique",
          "url": "https://sifatmusfique.dev/"
        },
        "datePublished": "2026-03-03T00:00:00+06:00",
        "dateModified": "2026-03-03T00:00:00+06:00",
        "publisher": {
          "@type": "Organization",
          "name": "ResearchGate",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sifatmusfique.dev/photos/Sifat_Musfique.png"
          }
        },
        "sameAs": "https://doi.org/10.13140/RG.2.2.21683.28961",
        "url": "https://www.researchgate.net/publication/401495210_Agentic_Orchestration_in_Diagnostic_Medical_Imaging_A_Musfique_Decision_Loop_Approach"
      },
      {
        "@type": "NewsArticle",
        "url": "https://iwantmyopenid.org/rising-software-developer-sifat-musfique-redefines-scalable.html?amp=1",
        "name": "Rising Software Developer Sifat Musfique Redefines Scalable",
        "headline": "Rising Software Developer Sifat Musfique Redefines Scalable",
        "image": [
          "https://sifatmusfique.dev/photos/Sifat_Musfique.png"
        ],
        "author": {
          "@type": "Person",
          "name": "Sifat Musfique",
          "url": "https://sifatmusfique.dev/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "I Want My OpenID",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sifatmusfique.dev/photos/Sifat_Musfique.png"
          }
        },
        "datePublished": "2026-02-16T00:00:00+06:00",
        "dateModified": "2026-02-16T00:00:00+06:00"
      },
      {
        "@type": "NewsArticle",
        "url": "https://www.sysdesai.com/news/YfdYO9e1oyuF",
        "name": "Enhancing Serverless with Agentic FaaS and Musfique Decision Loop",
        "headline": "Enhancing Serverless with Agentic FaaS and Musfique Decision Loop",
        "image": [
          "https://sifatmusfique.dev/photos/mdl_article.png"
        ],
        "author": {
          "@type": "Person",
          "name": "Sifat Musfique",
          "url": "https://sifatmusfique.dev/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "System Design AI",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sifatmusfique.dev/photos/Sifat_Musfique.png"
          }
        },
        "datePublished": "2026-02-21T00:00:00+06:00",
        "dateModified": "2026-02-21T00:00:00+06:00"
      },
      {
        "@type": "TechArticle",
        "url": "https://pub.towardsai.net/building-a-production-grade-ai-agent-from-scratch-in-2026-a-principles-first-guide-5b21754dc201",
        "name": "Building a Production-Grade AI Agent from Scratch in 2026: A Principles-First Guide",
        "headline": "Building a Production-Grade AI Agent from Scratch in 2026: A Principles-First Guide",
        "image": [
          "https://sifatmusfique.dev/photos/Sifat_Musfique_coding.jpg"
        ],
        "author": {
          "@type": "Person",
          "name": "Sifat Musfique",
          "url": "https://sifatmusfique.dev/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Towards AI",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sifatmusfique.dev/photos/Sifat_Musfique.png"
          }
        },
        "datePublished": "2026-03-15T00:00:00+06:00",
        "dateModified": "2026-03-15T00:00:00+06:00"
      },
      {
        "@type": "TechArticle",
        "url": "https://pub.towardsai.net/building-a-high-performance-vector-search-engine-from-scratch-in-2026-9a6d20b516b7",
        "name": "Building a High-Performance Vector Search Engine from Scratch in 2026",
        "headline": "Building a High-Performance Vector Search Engine from Scratch in 2026",
        "image": [
          "https://sifatmusfique.dev/photos/Sifat_Musfique_coding.jpg"
        ],
        "author": {
          "@type": "Person",
          "name": "Sifat Musfique",
          "url": "https://sifatmusfique.dev/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Towards AI",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sifatmusfique.dev/photos/Sifat_Musfique.png"
          }
        },
        "datePublished": "2026-03-21T00:00:00+06:00",
        "dateModified": "2026-03-21T00:00:00+06:00"
      }
    ],
    "sameAs": [
      "https://www.google.com/search?kgmid=/g/11yzdbf2km",
      "https://www.google.com/search?kgmid=/g/11z1cpc8p7",
      "https://www.google.com/search?kgmid=/g/11w3v3jgvx",
      "https://www.google.com/search?kgmid=/g/11xzgftxps",
      "https://isni.org/isni/0000000530071472",
      "https://www.wikidata.org/wiki/Q138683248",
      "https://founderswiki.org/index.php/Sifat_Musfique",
      "https://openalex.org/authors/A5125657845",
      "https://orcid.org/0009-0009-6985-3080",
      "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=LsO3KMsAAAAJ",
      "https://www.crunchbase.com/person/sifat-musfique",
      "https://www.imdb.com/name/nm18221523/",
      "https://ratings.fide.com/profile/315105339",
      "https://www.researchgate.net/profile/Sifat-Musfique",
      "https://www.webofscience.com/wos/author/record/PNI-3967-2026",
      "https://wikialpha.co/wiki/Sifat_Musfique",
      "https://www.behance.net/sifatmusfique",
      "https://golden.com/profile/sifat-musfique",
      "https://varendra.academia.edu/SifatMusfique",
      "https://hackernoon.com/u/sifatmusfique",
      "https://medium.com/@sifatmusfique",
      "https://forem.com/sifatmusfique",
      "https://www.linkedin.com/in/sifatmusfique-dev",
      "https://github.com/sifatmusfique",
      "https://dev.to/sifatmusfique",
      "https://hashnode.com/@sifatmusfique",
      "https://codeforces.com/profile/sifatmusfique",
      "https://stackoverflow.com/users/32314667/sifat-musfique",
      "https://about.me/sifatmusfique",
      "https://www.instagram.com/sifat.musfique"
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