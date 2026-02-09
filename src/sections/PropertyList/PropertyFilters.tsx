import { X } from "lucide-react";
import type { PropertyFilter, PropertyType } from "@/types/property";
import { getAllCities } from "@/data/cities";

interface PropertyFiltersProps {
  filters: PropertyFilter;
  onChange: (filters: PropertyFilter) => void;
}

const typeOptions: { value: PropertyType; label: string }[] = [
  { value: "appartement", label: "Appartement" },
  { value: "maison", label: "Maison" },
  { value: "villa", label: "Villa" },
  { value: "terrain", label: "Terrain" },
  { value: "local-commercial", label: "Local commercial" },
];

const priceRanges = [
  { label: "Tous les prix", min: undefined, max: undefined },
  { label: "Moins de 150 000 €", min: undefined, max: 150000 },
  { label: "150 000 — 250 000 €", min: 150000, max: 250000 },
  { label: "250 000 — 400 000 €", min: 250000, max: 400000 },
  { label: "400 000 — 600 000 €", min: 400000, max: 600000 },
  { label: "Plus de 600 000 €", min: 600000, max: undefined },
];

const roomOptions = [
  { label: "Toutes", value: undefined },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
  { label: "4+", value: 4 },
  { label: "5+", value: 5 },
];

export const PropertyFilters = ({ filters, onChange }: PropertyFiltersProps) => {
  const cities = getAllCities();
  const hasFilters = filters.city || filters.type || filters.priceMin !== undefined || filters.priceMax !== undefined || filters.roomsMin !== undefined;

  const currentPriceIndex = priceRanges.findIndex(
    (r) => r.min === filters.priceMin && r.max === filters.priceMax
  );

  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm" style={{ borderBottom: "1px solid rgba(27, 58, 75, 0.08)" }}>
      <div className="max-w-[1080px] mx-auto px-5 py-4 md:px-8">
        <div className="flex flex-wrap items-center gap-3">
          {/* Ville */}
          <select
            value={filters.city || ""}
            onChange={(e) => onChange({ ...filters, city: e.target.value || undefined })}
            className="filter-select"
          >
            <option value="">Toutes les villes</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Type */}
          <select
            value={filters.type || ""}
            onChange={(e) => onChange({ ...filters, type: (e.target.value as PropertyType) || undefined })}
            className="filter-select"
          >
            <option value="">Tous les types</option>
            {typeOptions.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>

          {/* Prix */}
          <select
            value={currentPriceIndex >= 0 ? currentPriceIndex : 0}
            onChange={(e) => {
              const range = priceRanges[Number(e.target.value)];
              onChange({ ...filters, priceMin: range.min, priceMax: range.max });
            }}
            className="filter-select"
          >
            {priceRanges.map((r, i) => (
              <option key={i} value={i}>
                {r.label}
              </option>
            ))}
          </select>

          {/* Pièces */}
          <select
            value={filters.roomsMin ?? ""}
            onChange={(e) =>
              onChange({ ...filters, roomsMin: e.target.value ? Number(e.target.value) : undefined })
            }
            className="filter-select"
          >
            <option value="">Pièces</option>
            {roomOptions.slice(1).map((r) => (
              <option key={r.value} value={r.value}>
                {r.label} pièces
              </option>
            ))}
          </select>

          {/* Clear */}
          {hasFilters && (
            <button
              onClick={() => onChange({})}
              className="inline-flex items-center gap-1 text-navy/50 text-[11px] uppercase tracking-wider hover:text-navy transition-colors ml-auto"
            >
              <X className="w-3 h-3" strokeWidth={1.5} />
              Effacer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
