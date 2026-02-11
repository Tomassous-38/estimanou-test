import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProperties, getPropertyBySlug } from "@/data/properties";
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

interface PropertyDetailPageProps {
  params: Promise<{ citySlug: string; propertySlug: string }>;
}

export async function generateStaticParams() {
  const allProperties = getAllProperties();
  return allProperties.map((p) => ({
    citySlug: p.citySlug,
    propertySlug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { citySlug, propertySlug } = await params;
  const property = getPropertyBySlug(citySlug, propertySlug);

  if (!property) {
    return { title: "Bien introuvable" };
  }

  return {
    title: `${property.title} — ${property.cityName}`,
    description: `${property.title} à ${property.cityName}. ${property.priceDisplay}. ${property.surface > 0 ? `${property.surface} m².` : ""} ${property.bedrooms > 0 ? `${property.bedrooms} chambres.` : ""} Estimation gratuite disponible.`,
    alternates: {
      canonical: `https://estimanou.re/biens-a-vendre/${property.citySlug}/${property.slug}`,
    },
    openGraph: {
      title: `${property.title} — ${property.priceDisplay}`,
      description: property.description.slice(0, 160),
      images: property.images.length > 0
        ? [{ url: property.images[0].src, alt: property.images[0].alt }]
        : [],
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { citySlug, propertySlug } = await params;
  const property = getPropertyBySlug(citySlug, propertySlug);

  if (!property) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Biens à vendre", href: "/biens-a-vendre" },
    {
      label: property.cityName,
      href: `/biens-a-vendre/${property.citySlug}`,
    },
  ];

  return (
    <>
      <PropertyDetailSEO property={property} />

      <div className="max-w-[1080px] mx-auto px-5 pt-32 md:px-8 md:pt-40">
        <Breadcrumb items={breadcrumbItems} current={property.title} />
      </div>

      {/* Gallery + Header on mobile */}
      <div className="max-w-[1080px] mx-auto px-5 md:px-8">
        <div className="md:hidden mb-8">
          <PropertyGallery
            images={property.images}
            title={property.title}
          />
          <div className="mt-6">
            <PropertyHeader property={property} />
          </div>
        </div>
      </div>

      {/* Desktop: 2-column layout */}
      <div className="max-w-[1080px] mx-auto px-5 pb-16 md:px-8 md:pb-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Main content */}
          <div className="w-full md:w-[65%]">
            {/* Gallery -- desktop only */}
            <div className="hidden md:block">
              <PropertyGallery
                images={property.images}
                title={property.title}
              />
              <div className="mt-8">
                <PropertyHeader property={property} />
              </div>
            </div>

            <PropertyKeyFacts property={property} />
            <PropertyDescription property={property} />
            <PropertyFeatures features={property.features} />
            <PropertyLocation property={property} />
          </div>

          {/* Sidebar */}
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
    </>
  );
}
