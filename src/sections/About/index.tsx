import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const highlights = [
    "Connaissance approfondie de chaque micro-marché de l'Ouest",
    "Analyse terrain personnalisée de chaque bien",
    "Rapport d'estimation détaillé et argumenté, utilisable auprès d'un notaire ou d'une banque"
  ];

  return (
    <section id="apropos" className="relative bg-sage/40 w-full">
      <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-[1080px] mx-auto px-5 py-20 md:px-8 md:py-28">
        <div className="animate-fade-in-up md:w-5/12 flex-shrink-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=900&fit=crop&crop=face&auto=format&q=80"
              alt="Valentin Bourassin — Expert immobilier à La Réunion"
              className="rounded-2xl object-cover object-top w-full h-[320px] md:h-[420px]"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-navy text-xs font-medium px-4 py-2 rounded-lg shadow-sm">
              +10 ans d'expertise
            </div>
          </div>
        </div>
        <div className="animate-fade-in-up animate-delay-100 md:w-7/12 text-center md:text-left">
          <span className="pill-label">à propos</span>
          <h2 className="section-title mb-6">
            L'estimation immobilière, c'est un{" "}
            <em className="font-cormorant italic font-normal text-navy/70">métier</em>
            . Pas un formulaire.
          </h2>
          <div className="space-y-4 text-neutral-600 leading-[1.8] text-base font-light">
            <p>
              Depuis plus de <strong>10 ans</strong>, j'accompagne les propriétaires réunionnais dans l'évaluation de leur patrimoine immobilier. Mon travail va bien au-delà des chiffres : je prends le temps de comprendre un quartier, une rue, une orientation, le potentiel d'un bien.
            </p>
            <p>
              Tout ce qu'aucun algorithme ne peut mesurer.
            </p>
          </div>

          {/* Highlights list */}
          <div className="mt-6 space-y-3">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-left">
                <CheckCircle2 className="w-4 h-4 text-gold/70 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-navy/70 text-[15px] font-light">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-navy/8">
            <p className="text-navy font-cormorant text-lg italic font-light">Valentin Bourassin</p>
            <p className="text-neutral-500 text-[13px] font-light mt-1 tracking-wide">Expert en estimation immobilière à La Réunion</p>
          </div>
        </div>
      </div>
    </section>
  );
};
