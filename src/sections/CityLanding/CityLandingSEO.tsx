import type { CityLanding } from "@/types/city";

interface CityLandingSEOProps {
  city: CityLanding;
}

export const CityLandingSEO = ({ city }: CityLandingSEOProps) => {
  // LocalBusiness JSON-LD
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Estimanou — Estimation immobilière à ${city.name}`,
    "description": `Service d'estimation immobilière gratuite à ${city.name}, La Réunion`,
    "url": `https://estimanou.re/estimation-immobiliere/${city.slug}`,
    "telephone": "+262 692 00 00 00",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "La Réunion",
      "addressCountry": "FR",
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
    },
    "priceRange": "Gratuit",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
    />
  );
};
