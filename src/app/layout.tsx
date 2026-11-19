import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile, socials } from "@/lib/content";
import { siteUrl } from "@/lib/site";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Alex Kemboi is a senior software developer in Nairobi. He has delivered loan and leasing systems for four banks across Kenya, Malawi and Uganda, and works across full stack development, systems integration and DevOps.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alex Kemboi · Senior Software Developer, Nairobi",
    template: "%s · Alex Kemboi",
  },
  description,
  keywords: [
    "Alex Kemboi",
    "Software Engineer Nairobi",
    "Full Stack Developer Kenya",
    "Core Banking",
    "Fintech",
    "Healthtech",
    "Edtech",
    "Agritech",
    "ERP",
    "CRM",
    "Point of Sale",
    "Business Intelligence",
    "Systems Integration",
    "React",
    "Next.js",
    "Java",
    "ASP.NET",
  ],
  authors: [{ name: profile.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Alex Kemboi",
    title: "Alex Kemboi · Senior Software Developer",
    description,
    images: [{ url: "/og-alex-kemboi.jpg", width: 1200, height: 630, alt: "Alex Kemboi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Kemboi · Senior Software Developer",
    description,
    images: ["/og-alex-kemboi.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#10284A",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Kisii University" },
  sameAs: socials.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head>
        {/* Without JS, scroll-reveal content would stay at its initial hidden state */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>[style*="opacity:0"]{opacity:1!important;transform:none!important}</style>`,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-amber focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="pt-[76px] lg:pt-[88px]">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
