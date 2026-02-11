import type { Property } from "@/types/property";
import type { CityLanding } from "@/types/city";

interface PropertyListSEOProps {
  city?: CityLanding;
  properties: Property[];
  filteredCount: number;
}

export const PropertyListSEO = ({ city, properties, filteredCount }: PropertyListSEOProps) => {
  // ItemList JSON-LD
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": city ? `Biens à vendre à ${city.name}` : "Biens à vendre à La Réunion",
    "numberOfItems": filteredCount,
    "itemListElement": properties.slice(0, 10).map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": p.title,
      "url": `https://estimanou.re/biens-a-vendre/${p.citySlug}/${p.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
    />
  );
};
