import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTAFinal = () => {
  return (
    <section className="relative bg-navy w-full overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-white/20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/20 translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative flex flex-col items-center justify-center max-w-[900px] text-center mx-auto py-24 px-5 md:py-32 md:px-8">
        <span className="animate-fade-in-up pill-label !border-white/15 !text-white/50 mb-8">
          + de 500 propriétaires accompagnés
        </span>

        <h2 className="animate-fade-in-up text-white font-cormorant font-light tracking-tight mb-5 max-w-2xl" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', lineHeight: '1.15' }}>
          Votre bien a une{" "}
          <em className="font-cormorant italic font-normal text-white/70">valeur</em>.
          {" "}Découvrez-la.
        </h2>

        <p className="animate-fade-in-up text-white/55 text-[15px] font-light mb-10 max-w-lg leading-relaxed">
          En 2025, le prix médian au m² à La Réunion tourne autour de <strong className="text-white/75 font-medium">2 880 €/m²</strong>. Mais les écarts sont énormes : de <strong className="text-white/75 font-medium">2 100 €</strong> dans les Hauts à plus de <strong className="text-white/75 font-medium">4 500 €</strong> sur le littoral Ouest. Dans un marché aussi contrasté, une estimation approximative peut vous faire perdre plusieurs dizaines de milliers d'euros.
        </p>

        <Link
          href="/estimer"
          className="animate-fade-in-up group text-navy text-[13px] items-center bg-white inline-flex justify-center text-center px-10 py-4 md:px-12 md:py-5 rounded-full hover:bg-white/90 transition-all duration-500 hover:shadow-xl uppercase tracking-[0.2em] font-normal"
        >
          Estimer gratuitement
          <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
        </Link>

        <div className="animate-fade-in-up flex items-center gap-6 mt-12 text-white/40 text-[12px] font-light tracking-wide">
          <span>✓ 100% gratuit</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>✓ Résultat sous 48h</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>✓ Sans engagement</span>
        </div>
      </div>
    </section>
  );
};
