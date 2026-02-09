import type { CityLanding } from "@/types/city";
import { MapPin } from "lucide-react";

interface CityNeighborhoodsProps {
  city: CityLanding;
}

export const CityNeighborhoods = ({ city }: CityNeighborhoodsProps) => {
  return (
    <section className="relative bg-white w-full">
      <div className="relative flex flex-col max-w-[1080px] text-center mx-auto px-5 py-20 md:px-8 md:py-28">
        <div className="animate-fade-in-up flex flex-col items-center">
          <span className="pill-label">quartiers couverts</span>
          <h2 className="section-title mb-4 mx-auto">
            Estimation par quartier à{" "}
            <em className="font-cormorant italic font-normal text-navy/70">{city.name}</em>
          </h2>
          <p className="text-neutral-500 text-[15px] font-light mb-14 md:mb-20 max-w-md">
            Chaque quartier a ses spécificités — nous les connaissons
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 w-full">
          {city.neighborhoods.map((neighborhood, i) => (
            <div
              key={i}
              className="animate-fade-in-up group text-left p-5 rounded-xl transition-all duration-300 hover:shadow-md cursor-default"
              style={{ border: "1px solid rgba(27, 58, 75, 0.08)" }}
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-navy font-cormorant font-semibold text-base tracking-tight mb-1.5 group-hover:text-navy/70 transition-colors">
                {neighborhood.name}
              </h3>
              <p className="text-neutral-500 text-[13px] font-light leading-relaxed mb-3">
                {neighborhood.description}
              </p>
              <div className="text-gold text-sm font-cormorant font-semibold">
                {neighborhood.avgPricePerSqm}
              </div>
              <div className="text-neutral-400 text-[10px] uppercase tracking-[0.15em] font-light">
                prix moyen/m²
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
