import { ArrowRight } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="relative flex flex-col justify-center max-w-full w-full">
      <div className="relative flex flex-col items-center justify-center w-full text-center max-w-3xl mx-auto">
        <h1 className="animate-fade-in-up inline-flex items-center text-[12px] font-normal rounded-full px-5 py-2 mb-8 tracking-[0.1em] text-white/80 border border-white/25 font-outfit">
          Estimanou — Estimation immobilière à La Réunion
        </h1>

        <p className="animate-fade-in-up text-white text-[38px] leading-[1.08] max-w-full mb-6 md:text-[68px] font-cormorant font-light tracking-tight" role="doc-subtitle">
          Le <em className="italic font-normal text-white/70">vrai prix</em> de votre bien.
          <br className="hidden md:block" />
          {" "}Sous 48h, gratuitement.
        </p>

        <p className="animate-fade-in-up animate-delay-100 text-white/60 text-base md:text-lg mb-12 max-w-lg font-light leading-relaxed">
          Une estimation gratuite, personnalisée et argumentée par un expert du marché réunionnais. Pas un algorithme. Résultat sous 48h.
        </p>

        <div className="animate-fade-in-up animate-delay-200 w-full px-4 md:w-auto md:px-0">
          <a
            href="/estimer"
            className="group text-navy text-[14px] md:text-[13px] items-center bg-white inline-flex justify-center text-center w-full md:w-auto px-10 py-5 md:px-12 md:py-5 rounded-full hover:bg-white/90 transition-all duration-500 hover:shadow-xl uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium md:font-normal"
          >
            Faire estimer mon bien
            <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </a>
        </div>

        <div className="animate-fade-in-up animate-delay-300 flex items-center gap-6 md:gap-8 mt-16 text-white/45 text-[13px] font-light tracking-wide">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60"></span>
            Gratuit
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60"></span>
            Sans engagement
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60"></span>
            Résultat sous 48h
          </span>
        </div>
      </div>
    </div>
  );
};
