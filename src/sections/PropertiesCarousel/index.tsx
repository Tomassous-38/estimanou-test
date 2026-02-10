import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getAllProperties } from "@/data/properties";

export const PropertiesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const properties = getAllProperties().slice(0, 6);

  if (properties.length === 0) return null;

  return (
    <section className="relative bg-white w-full">
      <div className="relative flex flex-col max-w-[1080px] mx-auto px-5 py-20 md:px-8 md:py-28">
        <div className="animate-fade-in-up flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div className="text-center md:text-left">
            <span className="pill-label">biens à vendre</span>
            <h2 className="section-title">
              Nos{" "}
              <em className="font-cormorant italic font-normal text-navy/70">biens</em>{" "}
              en vente à La Réunion
            </h2>
            <p className="text-neutral-500 text-[15px] font-light mt-3 max-w-lg">
              Tous nos biens sont accompagnés d'une fourchette d'estimation transparente, pour acheter en toute confiance.
            </p>
          </div>
          <Link to="/biens-a-vendre" className="hidden md:inline-flex items-center gap-2 text-navy/60 text-[12px] tracking-wide border border-navy/12 rounded-full px-5 py-2 hover:bg-navy hover:text-white transition-all duration-300 flex-shrink-0 mt-4 md:mt-0">
            Voir tous les biens
            <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Desktop: grid — Mobile: carousel */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 w-full">
          {properties.slice(0, 3).map((property) => (
            <Link
              key={property.slug}
              to={`/biens-a-vendre/${property.citySlug}/${property.slug}`}
              className="animate-fade-in-up group bg-white rounded-2xl overflow-hidden card-hover"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={property.images[0]?.src} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {property.surface} m²
                </div>
                {property.status === "sous-compromis" && (
                  <div className="absolute top-3 right-3 bg-gold/90 text-white text-[10px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Sous compromis
                  </div>
                )}
              </div>
              <div className="p-5 text-left">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-navy text-base font-cormorant font-semibold tracking-tight">{property.title}</h3>
                  <span className="text-neutral-400 text-xs font-light">{property.neighborhood}</span>
                </div>
                <p className="text-neutral-500 text-[11px] font-light mb-2">
                  {property.rooms} pièces · {property.bedrooms} ch. · {property.surface} m²
                </p>
                <div className="text-navy text-lg font-cormorant font-semibold tracking-tight mb-1">
                  {property.priceDisplay}
                </div>
                {property.estimationRange && (
                  <p className="text-gold/80 text-[12px] font-light">
                    Estimation : {property.estimationRange}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-5 px-5">
            {properties.slice(0, 4).map((property) => (
              <Link
                key={property.slug}
                to={`/biens-a-vendre/${property.citySlug}/${property.slug}`}
                className="group bg-white rounded-2xl overflow-hidden card-hover flex-shrink-0 snap-start"
                style={{ width: "80vw", maxWidth: "320px" }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={property.images[0]?.src} alt={property.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {property.surface} m²
                  </div>
                </div>
                <div className="p-5 text-left">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-navy text-base font-cormorant font-semibold tracking-tight">{property.title}</h3>
                    <span className="text-neutral-400 text-xs font-light">{property.neighborhood}</span>
                  </div>
                  <p className="text-neutral-500 text-[11px] font-light mb-2">
                    {property.rooms} pièces · {property.bedrooms} ch. · {property.surface} m²
                  </p>
                  <div className="text-navy text-lg font-cormorant font-semibold tracking-tight">
                    {property.priceDisplay}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Double CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10">
          <Link
            to="/biens-a-vendre"
            className="inline-flex items-center justify-center gap-2 text-navy/60 text-[12px] tracking-wide border border-navy/12 rounded-full px-6 py-2.5 hover:bg-navy hover:text-white transition-all duration-300"
          >
            Voir tous les biens à vendre
            <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
          <Link
            to="/estimer"
            className="inline-flex items-center justify-center gap-2 bg-navy text-white text-[12px] tracking-wide rounded-full px-6 py-2.5 hover:bg-navy/90 transition-all duration-300"
          >
            Faire estimer mon bien gratuitement
            <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};
