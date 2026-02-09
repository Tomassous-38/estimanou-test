import { ArrowRight } from "lucide-react";

export const PropertyDetailCTA = () => {
  return (
    <section className="relative bg-sage/40 w-full">
      <div className="max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-20 text-center">
        <div className="animate-fade-in-up">
          <h2
            className="text-navy font-cormorant font-light tracking-tight leading-[1.15] mb-4 mx-auto max-w-lg"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
          >
            Vous vendez aussi ?{" "}
            <em className="italic font-normal text-navy/70">Estimez gratuitement</em>
          </h2>
          <p className="text-neutral-400 text-sm font-light mb-8 max-w-md mx-auto">
            Obtenez une estimation précise et gratuite de votre bien par un expert local. Résultat sous 48h.
          </p>
          <a
            href="/estimer"
            className="group inline-flex items-center gap-2 bg-navy text-white text-[13px] font-normal uppercase tracking-[0.12em] px-8 py-3.5 rounded-full hover:bg-navy/90 hover:shadow-lg transition-all duration-300"
          >
            Faire estimer mon bien
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
