import { MapPin } from "lucide-react";
import type { Property } from "@/types/property";

interface PropertyHeaderProps {
  property: Property;
}

const typeLabels: Record<string, string> = {
  appartement: "Appartement",
  maison: "Maison",
  villa: "Villa",
  terrain: "Terrain",
  "local-commercial": "Local commercial",
};

const statusLabels: Record<string, { label: string; className: string }> = {
  "a-vendre": { label: "À vendre", className: "bg-green-50 text-green-700 border-green-200" },
  "sous-compromis": { label: "Sous compromis", className: "bg-gold/10 text-gold border-gold/20" },
  "vendu": { label: "Vendu", className: "bg-navy/10 text-navy border-navy/20" },
};

export const PropertyHeader = ({ property }: PropertyHeaderProps) => {
  const status = statusLabels[property.status] || statusLabels["a-vendre"];

  return (
    <div className="animate-fade-in-up mb-8">
      {/* Badges */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-md bg-navy-100 text-navy border border-navy/8">
          {typeLabels[property.type] || property.type}
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-md border ${status.className}`}>
          {status.label}
        </span>
      </div>

      {/* Title */}
      <h1
        className="text-navy font-cormorant font-light tracking-tight leading-[1.15] mb-3"
        style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
      >
        {property.title}
      </h1>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-neutral-400 text-sm font-light mb-4">
        <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
        {property.neighborhood}, {property.cityName}
      </div>

      {/* Price */}
      <div className="text-gold font-cormorant font-semibold tracking-tight" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
        {property.priceDisplay}
      </div>
    </div>
  );
};
