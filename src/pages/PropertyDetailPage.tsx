import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { getPropertyBySlug } from "@/data/properties";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PropertyDetailSEO } from "@/sections/PropertyDetail/PropertyDetailSEO";
import { PropertyGallery } from "@/sections/PropertyDetail/PropertyGallery";
import { PropertyHeader } from "@/sections/PropertyDetail/PropertyHeader";
import { PropertyKeyFacts } from "@/sections/PropertyDetail/PropertyKeyFacts";
import { PropertyDescription } from "@/sections/PropertyDetail/PropertyDescription";
import { PropertyFeatures } from "@/sections/PropertyDetail/PropertyFeatures";
import { PropertyLocation } from "@/sections/PropertyDetail/PropertyLocation";
import { PropertyContact } from "@/sections/PropertyDetail/PropertyContact";
import { PropertySimilar } from "@/sections/PropertyDetail/PropertySimilar";
import { PropertyDetailCTA } from "@/sections/PropertyDetail/PropertyDetailCTA";
import { PropertyDetailSEOText } from "@/sections/PropertyDetail/PropertyDetailSEOText";
import { SidebarCTA } from "@/sections/BlogArticle/sidebar/SidebarCTA";

export const PropertyDetailPage = () => {
  useScrollAnimations();

  const { citySlug, propertySlug } = useParams<{
    citySlug: string;
    propertySlug: string;
  }>();

  const property =
    citySlug && propertySlug
      ? getPropertyBySlug(citySlug, propertySlug)
      : undefined;

  if (!property) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center px-5">
          <h1 className="text-navy font-cormorant font-light text-3xl md:text-4xl tracking-tight mb-4">
            Bien introuvable
          </h1>
          <p className="text-neutral-400 text-sm font-light mb-8">
            Désolé, ce bien n'existe pas ou a été retiré.
          </p>
          <Link
            to="/biens-a-vendre"
            className="group text-navy text-[13px] items-center inline-flex gap-2 px-6 py-3 rounded-full transition-all duration-300 font-normal tracking-wide"
            style={{ border: "1px solid rgba(27, 58, 75, 0.12)" }}
          >
            <ArrowLeft
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1"
              strokeWidth={1.5}
            />
            Retour aux biens
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Biens à vendre", href: "/biens-a-vendre" },
    { label: property.cityName, href: `/biens-a-vendre/${property.citySlug}` },
  ];

  return (
    <>
      <Header />
      <PropertyDetailSEO property={property} />

      <div className="max-w-[1080px] mx-auto px-5 pt-32 md:px-8 md:pt-40">
        <Breadcrumb items={breadcrumbItems} current={property.title} />
      </div>

      {/* Gallery + Header on mobile */}
      <div className="max-w-[1080px] mx-auto px-5 md:px-8">
        <div className="md:hidden mb-8">
          <PropertyGallery images={property.images} title={property.title} />
          <div className="mt-6">
            <PropertyHeader property={property} />
          </div>
        </div>
      </div>

      {/* Desktop: 2-column layout */}
      <div className="max-w-[1080px] mx-auto px-5 pb-16 md:px-8 md:pb-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Main content — 65% */}
          <div className="w-full md:w-[65%]">
            {/* Gallery — desktop only */}
            <div className="hidden md:block">
              <PropertyGallery images={property.images} title={property.title} />
              <div className="mt-8">
                <PropertyHeader property={property} />
              </div>
            </div>

            <PropertyKeyFacts property={property} />
            <PropertyDescription property={property} />
            <PropertyFeatures features={property.features} />
            <PropertyLocation property={property} />
          </div>

          {/* Sidebar — 35% */}
          <div className="w-full md:w-[35%]">
            <div className="md:sticky md:top-24 flex flex-col gap-6">
              <PropertyContact cityName={property.cityName} />
              <SidebarCTA />
            </div>
          </div>
        </div>
      </div>

      <PropertySimilar property={property} />
      <PropertyDetailSEOText property={property} />
      <PropertyDetailCTA />
      <Footer />
    </>
  );
};
