import { useParams, Link } from "react-router-dom";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { getCityBySlug } from "@/data/cities";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { CityLandingSEO } from "@/sections/CityLanding/CityLandingSEO";
import { CityHero } from "@/sections/CityLanding/CityHero";
import { CityStats } from "@/sections/CityLanding/CityStats";
import { CityMarketInsight } from "@/sections/CityLanding/CityMarketInsight";
import { CityNeighborhoods } from "@/sections/CityLanding/CityNeighborhoods";
import { CityProcess } from "@/sections/CityLanding/CityProcess";
import { CityPropertiesPreview } from "@/sections/CityLanding/CityPropertiesPreview";
import { CityTestimonials } from "@/sections/CityLanding/CityTestimonials";
import { CityFAQ } from "@/sections/CityLanding/CityFAQ";
import { CityCTA } from "@/sections/CityLanding/CityCTA";
import { CityLandingSEOText } from "@/sections/CityLanding/CityLandingSEOText";
import { ArrowLeft } from "lucide-react";

export const CityLandingPage = () => {
  useScrollAnimations();

  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!city) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center px-5">
          <h1 className="text-navy font-cormorant font-light text-3xl md:text-4xl tracking-tight mb-4">
            Ville introuvable
          </h1>
          <p className="text-neutral-400 text-sm font-light mb-8">
            Désolé, cette page d'estimation n'existe pas.
          </p>
          <Link
            to="/"
            className="group text-navy text-[13px] items-center inline-flex gap-2 px-6 py-3 rounded-full transition-all duration-300 font-normal tracking-wide"
            style={{ border: "1px solid rgba(27, 58, 75, 0.12)" }}
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
            Retour à l'accueil
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <CityLandingSEO city={city} />
      <CityHero city={city} />
      <CityStats city={city} />
      <CityMarketInsight city={city} />
      <CityNeighborhoods city={city} />
      <CityProcess city={city} />
      <CityPropertiesPreview city={city} />
      <CityTestimonials city={city} />
      <CityFAQ city={city} />
      <CityLandingSEOText city={city} />
      <CityCTA city={city} />
      <Footer />
    </>
  );
};
