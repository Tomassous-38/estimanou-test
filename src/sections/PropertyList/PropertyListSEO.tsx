import { useDocumentHead } from "@/hooks/useDocumentHead";
import type { Property } from "@/types/property";
import type { CityLanding } from "@/types/city";

interface PropertyListSEOProps {
  city?: CityLanding;
  properties: Property[];
  filteredCount: number;
}

export const PropertyListSEO = ({ city, properties, filteredCount }: PropertyListSEOProps) => {
  const title = city
    ? `${filteredCount} biens à vendre à ${city.name} — prix dès ${
        Math.min(...properties.filter(p => p.citySlug === city.slug).map(p => p.price)).toLocaleString("fr-FR")
      } € | Estimanou`
    : `Biens immobiliers estimés à vendre à La Réunion (${filteredCount}) | Estimanou`;

  const description = city
    ? `Trouvez votre bien à ${city.name} : ${filteredCount} appartements, maisons et villas estimés par nos experts. Prix moyen ${city.stats.avgPricePerSqm}/m². Contactez-nous.`
    : `${filteredCount} biens immobiliers estimés à vendre à La Réunion. Appartements, maisons, villas, terrains — tous expertisés par Estimanou avec fourchette de prix.`;

  const canonicalUrl = city
    ? `https://estimanou.re/biens-a-vendre/${city.slug}`
    : "https://estimanou.re/biens-a-vendre";

  useDocumentHead({
    title,
    description,
    canonicalUrl,
    ogType: "website",
  });

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
