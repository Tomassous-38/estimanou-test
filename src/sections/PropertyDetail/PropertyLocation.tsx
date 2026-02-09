import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Property } from "@/types/property";

interface PropertyLocationProps {
  property: Property;
}

export const PropertyLocation = ({ property }: PropertyLocationProps) => {
  return (
    <div className="animate-fade-in-up mb-10">
      <h2 className="text-navy font-cormorant font-light text-xl tracking-tight mb-4">
        Localisation
      </h2>

      <div className="flex items-start gap-3 mb-4">
        <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
        <div>
          <div className="text-navy text-sm font-medium">
            {property.neighborhood}
          </div>
          <div className="text-neutral-400 text-[13px] font-light">
            {property.cityName}, La Réunion
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div
        className="rounded-xl overflow-hidden aspect-[16/9] flex items-center justify-center"
        style={{ backgroundColor: "rgba(27, 58, 75, 0.04)" }}
      >
        <div className="text-center">
          <MapPin className="w-8 h-8 text-navy/15 mx-auto mb-2" strokeWidth={1} />
          <span className="text-neutral-300 text-[12px] font-light">
            Carte du quartier
          </span>
        </div>
      </div>

      <Link
        to={`/estimation-immobiliere/${property.citySlug}`}
        className="inline-flex items-center gap-1.5 text-navy/60 text-[12px] tracking-wide mt-4 hover:text-navy transition-colors"
      >
        Voir le marché immobilier à {property.cityName} →
      </Link>
    </div>
  );
};
