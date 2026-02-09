import { Link } from "react-router-dom";
import type { CityLanding } from "@/types/city";
import { CheckCircle2 } from "lucide-react";

interface CityMarketInsightProps {
  city: CityLanding;
}

export const CityMarketInsight = ({ city }: CityMarketInsightProps) => {
  const highlights = [
    "Connaissance approfondie des micro-marchés locaux",
    "Analyse des transactions récentes dans chaque quartier",
    "Prise en compte des projets d'aménagement urbain",
    "Estimation gratuite, sans engagement",
  ];

  return (
    <section className="relative bg-sage/40 w-full">
      <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-[1080px] mx-auto px-5 py-20 md:px-8 md:py-28">
        {/* Image side */}
        <div className="animate-fade-in-up md:w-5/12 flex-shrink-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop"
              alt="Valentin Bourassin — Expert immobilier"
              className="rounded-2xl object-cover w-full h-[280px] md:h-[400px]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                <span className="text-gold text-base font-cormorant font-semibold">10+</span>
              </div>
              <div className="text-left">
                <div className="text-navy text-sm font-cormorant font-semibold">Années d'expertise</div>
                <div className="text-neutral-500 text-[11px] font-light">à La Réunion</div>
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="animate-fade-in-up animate-delay-100 md:w-7/12">
          <span className="pill-label">expertise locale</span>
          <h2 className="section-title mb-6">
            Notre analyse du marché à{" "}
            <em className="font-cormorant italic font-normal text-navy/70">{city.name}</em>
          </h2>
          <p className="text-neutral-600 text-base font-light leading-[1.8] mb-8">
            {city.description}
          </p>
          <ul className="space-y-3 mb-6">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-neutral-600 text-[15px] font-light">{h}</span>
              </li>
            ))}
          </ul>
          <Link
            to={`/biens-a-vendre/${city.slug}`}
            className="inline-flex items-center gap-2 text-gold text-[13px] font-medium tracking-wide hover:text-navy transition-colors"
          >
            Voir les biens estimés à {city.name} →
          </Link>
        </div>
      </div>
    </section>
  );
};
