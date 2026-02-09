import { Ruler, Home, Bed, Bath, Calendar, Compass } from "lucide-react";
import type { Property } from "@/types/property";

interface PropertyKeyFactsProps {
  property: Property;
}

export const PropertyKeyFacts = ({ property }: PropertyKeyFactsProps) => {
  const facts = [
    { icon: Ruler, value: `${property.surface} m²`, label: "Surface habitable" },
    { icon: Home, value: `${property.rooms}`, label: "Pièces" },
    ...(property.bedrooms > 0
      ? [{ icon: Bed, value: `${property.bedrooms}`, label: "Chambres" }]
      : []),
    ...(property.bathrooms > 0
      ? [{ icon: Bath, value: `${property.bathrooms}`, label: "Salle(s) de bain" }]
      : []),
    ...(property.yearBuilt
      ? [{ icon: Calendar, value: `${property.yearBuilt}`, label: "Année de construction" }]
      : []),
    ...(property.orientation
      ? [{ icon: Compass, value: property.orientation, label: "Orientation" }]
      : []),
  ];

  return (
    <div className="animate-fade-in-up mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {facts.map((fact, i) => {
          const Icon = fact.icon;
          return (
            <div
              key={i}
              className="bg-navy-100 rounded-xl p-4 text-center"
            >
              <Icon className="w-5 h-5 text-gold mx-auto mb-2" strokeWidth={1.5} />
              <div className="text-navy font-cormorant font-semibold text-lg tracking-tight">
                {fact.value}
              </div>
              <div className="text-neutral-400 text-[11px] font-light">
                {fact.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
