"use client";

import { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import { getCityBySlug } from "@/data/cities";
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

export default function PropertyListByCityPage() {
  const params = useParams<{ citySlug: string }>();
  const citySlug = params.citySlug;
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  const [filters, setFilters] = useState<PropertyFilter>(() => ({
    ...(citySlug ? { city: citySlug } : {}),
  }));
  const [sortKey, setSortKey] = useState<PropertySortKey>("date-desc");

  // Sync URL city param with filters
  useEffect(() => {
    if (citySlug) {
      setFilters((prev) => ({ ...prev, city: citySlug }));
    }
  }, [citySlug]);

  const allProperties = useMemo(() => getAllProperties(), []);
  const filtered = useMemo(() => filterProperties(filters), [filters]);
  const sorted = useMemo(
    () => sortProperties(filtered, sortKey),
    [filtered, sortKey]
  );

  return (
    <>
      <PropertyListHero city={city} count={sorted.length} />
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

      <PropertyListSEOText city={city} />
      <PropertyListNearbyCities currentCitySlug={citySlug} />
      <PropertyListCTA />
    </>
  );
}
