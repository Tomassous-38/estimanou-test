import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { CityLanding } from "@/types/city";

interface CityCTAProps {
  city: CityLanding;
}

export const CityCTA = ({ city }: CityCTAProps) => {
  return (
    <section className="relative bg-navy w-full overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full" style={{ backgroundColor: "rgba(184, 151, 90, 0.06)" }} />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full" style={{ backgroundColor: "rgba(184, 151, 90, 0.04)" }} />

      <div className="relative z-10 max-w-[1080px] mx-auto px-5 py-20 md:px-8 md:py-28 text-center">
        <div className="animate-fade-in-up">
          <h2
            className="text-white font-cormorant font-light tracking-tight leading-[1.15] mb-4 mx-auto max-w-xl"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Votre bien à {city.name} a une{" "}
            <em className="italic font-normal text-white/60">valeur</em>, découvrez-la
          </h2>
          <p className="text-white/35 text-sm font-light mb-10 max-w-md mx-auto">
            Gratuit, personnalisé et sans engagement. Résultat sous 48h par un expert local.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/estimer"
              className="group inline-flex items-center gap-2 bg-white text-navy text-[13px] font-normal uppercase tracking-[0.12em] px-8 py-3.5 rounded-full hover:bg-navy-100 hover:shadow-lg transition-all duration-300"
            >
              Estimer mon bien à {city.name}
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
            <Link
              to={`/biens-a-vendre/${city.slug}`}
              className="inline-flex items-center gap-2 text-white/50 text-[13px] font-light tracking-wide border border-white/15 px-6 py-3 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Voir les biens à {city.name}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
