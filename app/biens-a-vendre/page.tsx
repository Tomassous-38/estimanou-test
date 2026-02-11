"use client";

import { useState, useMemo } from "react";
import {
  getAllProperties,
  filterProperties,
  sortProperties,
} from "@/data/properties";
import type { PropertyFilter, PropertySortKey } from "@/types/property";
import { PropertyListHero } from "@/sections/PropertyList/PropertyListHero";
import { PropertyFilters } from "@/sections/PropertyList/PropertyFilters";
import { PropertyActiveFilters } from "@/sections/PropertyList/PropertyActiveFilters";
import { PropertySort } from "@/sections/PropertyList/PropertySort";
import { PropertyGrid } from "@/sections/PropertyList/PropertyGrid";
import { PropertyEmptyState } from "@/sections/PropertyList/PropertyEmptyState";
import { PropertyListCTA } from "@/sections/PropertyList/PropertyListCTA";
import { PropertyListSEOText } from "@/sections/PropertyList/PropertyListSEOText";
import { PropertyListNearbyCities } from "@/sections/PropertyList/PropertyListNearbyCities";

export default function PropertyListPage() {
  const [filters, setFilters] = useState<PropertyFilter>({});
  const [sortKey, setSortKey] = useState<PropertySortKey>("date-desc");

  const allProperties = useMemo(() => getAllProperties(), []);
  const filtered = useMemo(() => filterProperties(filters), [filters]);
  const sorted = useMemo(
    () => sortProperties(filtered, sortKey),
    [filtered, sortKey]
  );

  return (
    <>
      <PropertyListHero city={undefined} count={sorted.length} />
      <PropertyFilters filters={filters} onChange={setFilters} />
      <PropertyActiveFilters filters={filters} onChange={setFilters} />
      <PropertySort
        count={sorted.length}
        sortKey={sortKey}
        onSort={setSortKey}
      />

      {sorted.length > 0 ? (
        <PropertyGrid properties={sorted} />
      ) : (
        <PropertyEmptyState onReset={() => setFilters({})} />
      )}

      <PropertyListSEOText city={undefined} />
      <PropertyListNearbyCities currentCitySlug={undefined} />
      <PropertyListCTA />
    </>
  );
}
