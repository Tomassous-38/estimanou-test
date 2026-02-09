import { ArrowRight } from "lucide-react";

export const PropertyListCTA = () => {
  return (
    <section className="relative bg-navy w-full overflow-hidden">
      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
        style={{ backgroundColor: "rgba(184, 151, 90, 0.06)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full"
        style={{ backgroundColor: "rgba(184, 151, 90, 0.04)" }}
      />

      <div className="relative z-10 max-w-[1080px] mx-auto px-5 py-20 md:px-8 md:py-28 text-center">
        <div className="animate-fade-in-up">
          <h2
            className="text-white font-cormorant font-light tracking-tight leading-[1.15] mb-4 mx-auto max-w-xl"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Vous vendez ?{" "}
            <em className="italic font-normal text-white/60">Estimez gratuitement</em>
          </h2>
          <p className="text-white/35 text-sm font-light mb-10 max-w-md mx-auto">
            Obtenez une estimation précise de votre bien par un expert local. Gratuit, sans engagement, résultat sous 48h.
          </p>
          <a
            href="/estimer"
            className="group inline-flex items-center gap-2 bg-white text-navy text-[13px] font-normal uppercase tracking-[0.12em] px-8 py-3.5 rounded-full hover:bg-navy-100 hover:shadow-lg transition-all duration-300"
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
