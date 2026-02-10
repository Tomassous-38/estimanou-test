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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full">
          {city.neighborhoods.map((neighborhood, i) => (
            <div
              key={i}
              className="animate-fade-in-up group text-left p-6 md:p-7 rounded-xl transition-all duration-300 hover:shadow-md cursor-default"
              style={{ border: "1px solid rgba(27, 58, 75, 0.08)" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-navy font-cormorant font-semibold text-lg tracking-tight group-hover:text-navy/70 transition-colors">
                      {neighborhood.name}
                    </h3>
                    <div className="flex flex-col items-end flex-shrink-0 ml-4">
                      <span className="text-navy font-cormorant font-bold text-lg tracking-tight">
                        {neighborhood.avgPricePerSqm}
                      </span>
                      <span className="text-neutral-400 text-[10px] uppercase tracking-[0.12em] font-light">
                        prix moyen/m²
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-[14px] font-light leading-relaxed">
                    {neighborhood.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
