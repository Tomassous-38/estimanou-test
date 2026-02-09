import { Link } from "react-router-dom";
import { Bed, Maximize, Home } from "lucide-react";
import type { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

const typeLabels: Record<string, string> = {
  appartement: "Appartement",
  maison: "Maison",
  villa: "Villa",
  terrain: "Terrain",
  "local-commercial": "Local commercial",
};

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link
      to={`/biens-a-vendre/${property.citySlug}/${property.slug}`}
      className="animate-fade-in-up group bg-white rounded-2xl overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={property.images[0]?.src}
          alt={property.images[0]?.alt || property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Type badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy text-[10px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wider">
          {typeLabels[property.type] || property.type}
        </div>
        {/* Status badge */}
        {property.status === "sous-compromis" && (
          <div className="absolute top-3 right-3 bg-gold/90 text-white text-[10px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wider">
            Sous compromis
          </div>
        )}
        {property.status === "vendu" && (
          <div className="absolute top-3 right-3 bg-navy/80 text-white text-[10px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wider">
            Vendu
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-baseline justify-between mb-1">
          <h3 className="text-navy text-base font-cormorant font-semibold tracking-tight">
            {property.title}
          </h3>
        </div>
        <p className="text-neutral-400 text-[11px] font-light mb-3">
          {property.cityName} · {property.neighborhood}
        </p>

        {/* Key details */}
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1 text-neutral-400 text-[11px]">
            <Maximize className="w-3 h-3" strokeWidth={1.5} />
            {property.surface} m²
          </span>
          <span className="flex items-center gap-1 text-neutral-400 text-[11px]">
            <Home className="w-3 h-3" strokeWidth={1.5} />
            {property.rooms} p.
          </span>
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1 text-neutral-400 text-[11px]">
              <Bed className="w-3 h-3" strokeWidth={1.5} />
              {property.bedrooms} ch.
            </span>
          )}
        </div>

        {/* Price */}
        <div className="text-gold text-lg font-cormorant font-semibold tracking-tight">
          {property.priceDisplay}
        </div>
      </div>
    </Link>
  );
};
