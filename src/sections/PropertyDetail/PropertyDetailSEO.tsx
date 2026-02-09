import { useDocumentHead } from "@/hooks/useDocumentHead";
import type { Property } from "@/types/property";

interface PropertyDetailSEOProps {
  property: Property;
}

export const PropertyDetailSEO = ({ property }: PropertyDetailSEOProps) => {
  useDocumentHead({
    title: `${property.title} à ${property.cityName} | ${property.priceDisplay} | Estimanou`,
    description: `${property.title} — ${property.surface} m², ${property.rooms} pièces à ${property.neighborhood}, ${property.cityName}. Estimation : ${property.estimationRange}. Découvrez ce bien estimé par Estimanou.`,
    canonicalUrl: `https://estimanou.re/biens-a-vendre/${property.citySlug}/${property.slug}`,
    ogImage: property.images[0]?.src,
    ogType: "article",
  });

  // RealEstateListing JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": property.title,
    "description": property.description,
    "url": `https://estimanou.re/biens-a-vendre/${property.citySlug}/${property.slug}`,
    "image": property.images.map((img) => img.src),
    "offers": {
      "@type": "Offer",
      "price": property.price,
      "priceCurrency": "EUR",
      "availability":
        property.status === "a-vendre"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": property.cityName,
      "addressRegion": "La Réunion",
      "addressCountry": "FR",
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": property.surface,
      "unitCode": "MTK",
    },
    "numberOfRooms": property.rooms,
    "numberOfBedrooms": property.bedrooms,
    "numberOfBathroomsTotal": property.bathrooms,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
