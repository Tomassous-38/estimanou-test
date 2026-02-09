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
