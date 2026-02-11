import type { Property } from "@/types/property";

interface PropertyDetailSEOProps {
  property: Property;
}

export const PropertyDetailSEO = ({ property }: PropertyDetailSEOProps) => {
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
