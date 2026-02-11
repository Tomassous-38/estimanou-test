import Link from "next/link";
import type { Property } from "@/types/property";
import { getSimilarProperties } from "@/data/properties";
import { PropertyCard } from "@/sections/PropertyList/PropertyCard";

interface PropertySimilarProps {
  property: Property;
}

export const PropertySimilar = ({ property }: PropertySimilarProps) => {
  const similar = getSimilarProperties(property, 3);

  if (similar.length === 0) return null;

  return (
    <section className="relative bg-white w-full">
      <div className="max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-20">
        <div className="animate-fade-in-up text-center mb-12">
          <span className="pill-label">biens similaires</span>
          <h2 className="section-title">
            Biens qui pourraient vous{" "}
            <em className="font-cormorant italic font-normal text-navy/70">intéresser</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {similar.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Link
            href={`/biens-a-vendre/${property.citySlug}`}
            className="inline-flex items-center gap-2 text-navy/60 text-[12px] tracking-wide border border-navy/12 rounded-full px-5 py-2 hover:bg-navy hover:text-white transition-all duration-300"
          >
            Tous les biens à {property.cityName}
          </Link>
          <Link
            href="/biens-a-vendre"
            className="inline-flex items-center gap-2 text-navy/60 text-[12px] tracking-wide border border-navy/12 rounded-full px-5 py-2 hover:bg-navy hover:text-white transition-all duration-300"
          >
            Tous les biens à La Réunion
          </Link>
          <Link
            href={`/estimation-immobiliere/${property.citySlug}`}
            className="inline-flex items-center gap-2 text-navy/60 text-[12px] tracking-wide border border-navy/12 rounded-full px-5 py-2 hover:bg-navy hover:text-white transition-all duration-300"
          >
            Estimation à {property.cityName}
          </Link>
        </div>
      </div>
    </section>
  );
};
