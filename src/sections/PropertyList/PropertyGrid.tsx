import type { Property } from "@/types/property";
import { PropertyCard } from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
}

export const PropertyGrid = ({ properties }: PropertyGridProps) => {
  return (
    <div className="max-w-[1080px] mx-auto px-5 md:px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>
    </div>
  );
};
