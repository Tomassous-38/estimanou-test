import type { PropertySortKey } from "@/types/property";

interface PropertySortProps {
  count: number;
  sortKey: PropertySortKey;
  onSort: (key: PropertySortKey) => void;
}

const sortOptions: { value: PropertySortKey; label: string }[] = [
  { value: "date-desc", label: "Plus récents" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "surface-desc", label: "Surface décroissante" },
];

export const PropertySort = ({ count, sortKey, onSort }: PropertySortProps) => {
  return (
    <div className="max-w-[1080px] mx-auto px-5 md:px-8 pt-6 pb-2">
      <div className="flex items-center justify-between">
        <span className="text-neutral-400 text-[12px] font-light">
          {count} bien{count > 1 ? "s" : ""}
        </span>
        <select
          value={sortKey}
          onChange={(e) => onSort(e.target.value as PropertySortKey)}
          className="filter-select"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
