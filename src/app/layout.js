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
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden text-gray-200`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sifat Musfique",
              "url": "https://sifatmusfique.dev/",
              "@id": "https://www.google.com/search?kgmid=/g/11yzdbf2km",
              "jobTitle": "Software Developer",
              "knowsAbout": ["React", "PHP", "Web Development", "Chess Strategy"],
              "nationality": "Bangladeshi",
              "homeLocation": {
                "@type": "Place",
                "name": "Rajshahi, Bangladesh"
              },
              "affiliation": {
                "@type": "EducationalOrganization",
                "name": "Varendra University"
              },
              "brand": {
                "@type": "Brand",
                "name": "TensorTide"
              },
              "knowsAbout": ["React", "PHP", "Web Development", "Chess Strategy"],
              "sameAs": [
                "https://www.crunchbase.com/person/sifat-musfique",
                "https://wikialpha.co/wiki/Sifat_Musfique",
                "https://www.wikidata.org/wiki/Q138035556",
                "https://scholar.google.com/citations?user=LsO3KMsAAAAJ",
                "https://ratings.fide.com/profile/315105339",
                "https://www.linkedin.com/in/sifatmusfique-dev",
                "https://github.com/sifatmusfique",
                "https://dev.to/sifatmusfique",
                "https://www.xing.com/profile/Sifat_Musfique",
                "https://about.me/sifatmusfique",
                "https://www.fiverr.com/sifatmusfique",
                "https://codepen.io/sifatmusfique",
                "https://www.facebook.com/sifatmusfique",
                "https://www.instagram.com/sifat.musfique",
                "https://www.skool.com/@sifat-musfique-8682",
                "https://stackoverflow.com/users/32314667/sifat-musfique",
                "https://hashnode.com/@sifatmusfique",
                "https://www.ted.com/profiles/51097968",
                "https://gravatar.com/sifatmusfique"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "sifatmusfique@gmail.com",
                "telephone": "+8801560009992",
                "contactType": "customer service"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rajshahi",
                "postalCode": "6000",
                "addressCountry": "BD"
              }
            })
          }}
        />
        <SmoothScroll />
        <BackgroundCanvas />
        <Navbar />
        <AosInit />
        <AIAgent />{children}
        <Footer />
      </body>
    </html>
  );
}
