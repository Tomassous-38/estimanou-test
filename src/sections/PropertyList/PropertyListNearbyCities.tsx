import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { getAllCities } from "@/data/cities";
import { getPropertiesByCity } from "@/data/properties";

interface PropertyListNearbyCitiesProps {
  currentCitySlug?: string;
}

export const PropertyListNearbyCities = ({ currentCitySlug }: PropertyListNearbyCitiesProps) => {
  const allCities = getAllCities();
  const otherCities = currentCitySlug
    ? allCities.filter((c) => c.slug !== currentCitySlug)
    : allCities;

  return (
    <section className="relative bg-white w-full">
      <div className="max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-20">
        <div className="animate-fade-in-up text-center mb-12">
          <span className="pill-label">autres villes</span>
          <h2 className="section-title">
            {currentCitySlug ? (
              <>
                Biens à vendre dans les{" "}
                <em className="font-cormorant italic font-normal text-navy/70">
                  villes proches
                </em>
              </>
            ) : (
              <>
                Parcourir par{" "}
                <em className="font-cormorant italic font-normal text-navy/70">ville</em>
              </>
            )}
          </h2>
        </div>

        <div className="animate-fade-in-up grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {otherCities.map((city) => {
            const propertyCount = getPropertiesByCity(city.slug).length;
            return (
              <Link
                key={city.slug}
                to={`/biens-a-vendre/${city.slug}`}
                className="group flex items-start gap-3 p-5 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{ border: "1px solid rgba(27, 58, 75, 0.08)" }}
              >
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                  <MapPin className="w-4 h-4 text-navy/40 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-navy text-sm font-cormorant font-semibold tracking-tight group-hover:text-navy/70 transition-colors">
                    {city.name}
                  </div>
                  <div className="text-neutral-400 text-[11px] font-light">
                    {propertyCount} bien{propertyCount > 1 ? "s" : ""} · {city.stats.avgPricePerSqm}/m²
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-200 group-hover:text-gold group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" strokeWidth={1.5} />
              </Link>
            );
          })}
        </div>

        {/* Link to estimation pages */}
        <div className="animate-fade-in-up mt-10 text-center">
          <p className="text-neutral-300 text-[12px] font-light mb-3">Vous vendez ?</p>
          <div className="flex flex-wrap justify-center gap-2">
            {allCities.map((city) => (
              <Link
                key={city.slug}
                to={`/estimation-immobiliere/${city.slug}`}
                className="text-navy/50 text-[11px] font-light tracking-wide px-3 py-1.5 rounded-full border border-navy/8 hover:bg-navy hover:text-white transition-all duration-300"
              >
                Estimation {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
