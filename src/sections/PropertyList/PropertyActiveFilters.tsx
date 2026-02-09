import { X } from "lucide-react";
import type { PropertyFilter } from "@/types/property";
import { getAllCities } from "@/data/cities";

interface PropertyActiveFiltersProps {
  filters: PropertyFilter;
  onChange: (filters: PropertyFilter) => void;
}

const typeLabels: Record<string, string> = {
  appartement: "Appartement",
  maison: "Maison",
  villa: "Villa",
  terrain: "Terrain",
  "local-commercial": "Local commercial",
};

export const PropertyActiveFilters = ({ filters, onChange }: PropertyActiveFiltersProps) => {
  const pills: { label: string; onRemove: () => void }[] = [];

  if (filters.city) {
    const city = getAllCities().find((c) => c.slug === filters.city);
    pills.push({
      label: city?.name || filters.city,
      onRemove: () => onChange({ ...filters, city: undefined }),
    });
  }

  if (filters.type) {
    pills.push({
      label: typeLabels[filters.type] || filters.type,
      onRemove: () => onChange({ ...filters, type: undefined }),
    });
  }

  if (filters.priceMin !== undefined || filters.priceMax !== undefined) {
    const label =
      filters.priceMin && filters.priceMax
        ? `${(filters.priceMin / 1000).toFixed(0)}k — ${(filters.priceMax / 1000).toFixed(0)}k €`
        : filters.priceMin
        ? `> ${(filters.priceMin / 1000).toFixed(0)}k €`
        : `< ${((filters.priceMax || 0) / 1000).toFixed(0)}k €`;
    pills.push({
      label,
      onRemove: () => onChange({ ...filters, priceMin: undefined, priceMax: undefined }),
    });
  }

  if (filters.roomsMin !== undefined) {
    pills.push({
      label: `${filters.roomsMin}+ pièces`,
      onRemove: () => onChange({ ...filters, roomsMin: undefined }),
    });
  }

  if (pills.length === 0) return null;

  return (
    <div className="max-w-[1080px] mx-auto px-5 md:px-8 pt-4">
      <div className="flex flex-wrap gap-2">
        {pills.map((pill, i) => (
          <button
            key={i}
            onClick={pill.onRemove}
            className="inline-flex items-center gap-1.5 bg-navy-100 text-navy text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-full hover:bg-navy hover:text-white transition-all duration-300"
          >
            {pill.label}
            <X className="w-3 h-3" strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </div>
  );
};
