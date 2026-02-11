import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { CityLanding } from "@/types/city";
import { getNeighborhoodPriceRange } from "@/types/city";

interface CityMidCTAProps {
  city: CityLanding;
}

export const CityMidCTA = ({ city }: CityMidCTAProps) => {
  const range = getNeighborhoodPriceRange(city);

  return (
    <section className="relative w-full min-h-[420px] md:min-h-[480px] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=800&fit=crop&q=80"
        alt={`Estimation immobilière à ${city.name}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/80 to-navy/90" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
        <div className="animate-fade-in-up max-w-2xl mx-auto">
          <h2
            className="text-white font-cormorant font-light tracking-tight leading-[1.12] mb-6"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            À {city.name}, chaque rue a son prix.{" "}
            <em className="italic font-normal text-white/75">
              Connaissez le vôtre.
            </em>
          </h2>

          <p className="text-white/65 text-[15px] md:text-base font-light leading-relaxed mb-10 max-w-lg mx-auto">
            De{" "}
            <strong className="text-white font-medium">
              {range.minFormatted}&nbsp;€/m²
            </strong>{" "}
            à {range.minName} jusqu'à{" "}
            <strong className="text-white font-medium">
              {range.maxFormatted}&nbsp;€/m²
            </strong>{" "}
            à {range.maxName}, l'écart dépasse{" "}
            <strong className="text-white font-medium">{range.pctDiff}%</strong>{" "}
            selon le quartier. Une estimation locale fait toute la différence.
          </p>

          <Link
            href="/estimer"
            className="group inline-flex items-center gap-2.5 bg-white text-navy text-[13px] font-normal uppercase tracking-[0.15em] px-9 py-4 rounded-full hover:shadow-xl transition-all duration-500 mb-8"
          >
            Estimer mon bien à {city.name}
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7 text-white/50 text-[13px] font-light">
            {["Gratuit", "Sous 48h", "Sans engagement"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-gold/70" strokeWidth={2} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
