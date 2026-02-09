export type PropertyType = "appartement" | "maison" | "villa" | "terrain" | "local-commercial";
export type PropertyStatus = "a-vendre" | "sous-compromis" | "vendu";

export interface PropertyImage {
  src: string;
  alt: string;
}

export interface Property {
  slug: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  priceDisplay: string;
  citySlug: string;
  cityName: string;
  neighborhood: string;
  images: PropertyImage[];
  surface: number;
  landSurface?: number;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt?: number;
  floor?: string;
  orientation?: string;
  description: string;
  features: string[];
  estimationRange: string;
  dateAdded: string;
}

export interface PropertyFilter {
  city?: string;
  type?: PropertyType;
  priceMin?: number;
  priceMax?: number;
  roomsMin?: number;
}

export type PropertySortKey = "price-asc" | "price-desc" | "date-desc" | "surface-desc";
