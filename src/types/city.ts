export interface CityNeighborhood {
  name: string;
  description: string;
  avgPricePerSqm: string;
}

export interface CityTestimonial {
  quote: string;
  name: string;
  location: string;
  avatar: string;
}

export interface CityLanding {
  slug: string;
  name: string;
  heroImage: string;
  tagline: string;
  description: string;
  stats: {
    avgPricePerSqm: string;
    estimationsCount: string;
    avgSaleTime: string;
    priceEvolution: string;
  };
  neighborhoods: CityNeighborhood[];
  testimonials: CityTestimonial[];
  faq: { question: string; answer: string }[];
}

// Helpers for price range calculations
export const parsePrice = (priceStr: string): number =>
  parseInt(priceStr.replace(/\s+EUR$/i, "").replace(/\s+/g, ""));

export const getNeighborhoodPriceRange = (city: CityLanding) => {
  const entries = city.neighborhoods.map((n) => ({
    name: n.name,
    price: parsePrice(n.avgPricePerSqm),
  }));
  const sorted = [...entries].sort((a, b) => a.price - b.price);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const pctDiff = Math.round(((max.price - min.price) / min.price) * 100);
  return {
    min: min.price,
    max: max.price,
    minName: min.name,
    maxName: max.name,
    minFormatted: `${min.price.toLocaleString("fr-FR")}`,
    maxFormatted: `${max.price.toLocaleString("fr-FR")}`,
    pctDiff,
  };
};
