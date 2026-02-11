import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Estimation immobilière gratuite à La Réunion | Estimanou — Résultat sous 48h",
    template: "%s | Estimanou",
  },
  description: "Estimation immobilière gratuite à La Réunion par un expert local. Analyse terrain personnalisée, rapport argumenté sous 48h. Sans engagement. +500 estimations réalisées.",
  metadataBase: new URL("https://estimanou.re"),
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Estimanou",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${outfit.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>" />
        {/* Preconnect to Unsplash for faster image loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Fallback: show all content when JS is disabled */}
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: `.animate-fade-in-up { opacity: 1 !important; transform: none !important; }` }} />
        </noscript>
      </head>
      <body className={`text-neutral-700 text-base font-normal bg-white leading-relaxed font-outfit`}>
        <ScrollAnimations />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
