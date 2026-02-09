import { ArrowRight } from "lucide-react";

export const MiseEnValeurCTA = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="https://static.wixstatic.com/media/cda1c0_1c5c03ca963a4dc8a4ccc91a37f7bde8~mv2.jpg/v1/fill/w_1920,h_800,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_1c5c03ca963a4dc8a4ccc91a37f7bde8~mv2.jpg"
        alt="Villa avec piscine à La Réunion"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative z-10 max-w-[1080px] mx-auto px-5 py-20 md:px-8 md:py-28 text-center">
        <h2
          className="animate-fade-in-up text-white font-cormorant font-light tracking-tight leading-[1.15] mb-4"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
        >
          Vous souhaitez mettre en valeur{" "}
          <em className="italic font-normal text-white/70">votre bien</em> ?
        </h2>
        <p className="animate-fade-in-up animate-delay-100 text-white/65 text-[17px] font-light leading-relaxed max-w-lg mx-auto mb-10">
          Contactez-nous pour une estimation gratuite et découvrez comment nous pouvons sublimer la présentation de votre propriété.
        </p>
        <div className="animate-fade-in-up animate-delay-200">
          <a
            href="/estimer"
            className="group inline-flex items-center gap-2 bg-white text-navy text-[13px] font-normal uppercase tracking-[0.12em] px-8 py-4 rounded-full hover:bg-navy-100 hover:shadow-lg transition-all duration-300"
          >
            Estimer gratuitement
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};
