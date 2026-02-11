import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/data/cities";
import { CityLandingSEO } from "@/sections/CityLanding/CityLandingSEO";
import { CityHero } from "@/sections/CityLanding/CityHero";
import { CityStats } from "@/sections/CityLanding/CityStats";
import { CityNeighborhoods } from "@/sections/CityLanding/CityNeighborhoods";
import { CityProcess } from "@/sections/CityLanding/CityProcess";
import { CityMidCTA } from "@/sections/CityLanding/CityMidCTA";
import { CityMarketInsight } from "@/sections/CityLanding/CityMarketInsight";
import { CityTestimonials } from "@/sections/CityLanding/CityTestimonials";
import { CityPropertiesPreview } from "@/sections/CityLanding/CityPropertiesPreview";
import { CityFAQ } from "@/sections/CityLanding/CityFAQ";
import { CityCTA } from "@/sections/CityLanding/CityCTA";
import { CityLandingSEOText } from "@/sections/CityLanding/CityLandingSEOText";

interface CityLandingPageProps {
  params: Promise<{ citySlug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    citySlug: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: CityLandingPageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return { title: "Ville introuvable" };
  }

  return {
    title: `Estimation immobilière gratuite à ${city.name}`,
    description: `Estimation immobilière gratuite à ${city.name}, La Réunion. Prix moyen : ${city.stats.avgPricePerSqm}/m². ${city.stats.estimationsCount} estimations réalisées. Résultat sous 48h par un expert local.`,
    alternates: {
      canonical: `https://estimanou.re/estimation-immobiliere/${city.slug}`,
    },
  };
}

export default async function CityLandingPage({
  params,
}: CityLandingPageProps) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  return (
    <>
      <CityLandingSEO city={city} />
      <CityHero city={city} />
      <CityStats city={city} />
      <CityNeighborhoods city={city} />
      <CityProcess city={city} />
      <CityMidCTA city={city} />
      <CityMarketInsight city={city} />
      <CityTestimonials city={city} />
      <CityPropertiesPreview city={city} />
      <CityFAQ city={city} />
      <CityCTA city={city} />
      <CityLandingSEOText city={city} />
    </>
  );
}
