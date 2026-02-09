import { ArrowRight } from "lucide-react";

export const BookNowBanner = () => {
  return (
    <section className="relative w-full" style={{ backgroundColor: "#f5f0e8" }}>
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-[1080px] mx-auto py-10 px-5 md:py-14 md:px-8 gap-6">
        <div className="text-center md:text-left max-w-xl">
          <p className="animate-fade-in-up text-navy/50 text-[13px] font-light mb-2 tracking-wide">
            + de 500 propriétaires accompagnés
          </p>
          <h2 className="animate-fade-in-up text-navy/90 text-xl md:text-2xl font-cormorant font-light tracking-tight leading-snug">
            Une estimation immobilière <em className="font-cormorant italic font-normal text-navy/70">fiable</em> pour vendre en confiance
          </h2>
          <p className="animate-fade-in-up text-neutral-600 text-[14px] font-light mt-3 leading-relaxed max-w-lg">
            En 2025, le prix médian à La Réunion tourne autour de <strong>2 880 €/m²</strong>. Mais les écarts sont énormes : de <strong>2 100 €</strong> dans les Hauts à plus de <strong>4 500 €</strong> sur le littoral Ouest. Une estimation approximative peut vous faire perdre plusieurs dizaines de milliers d'euros.
          </p>
        </div>
        <a
          href="/estimer"
          className="animate-fade-in-up group text-white text-[13px] items-center bg-navy inline-flex justify-center text-center px-8 py-3.5 rounded-full hover:bg-navy/90 transition-all duration-300 font-normal uppercase tracking-[0.15em] flex-shrink-0"
        >
          Estimer gratuitement
          <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
};
