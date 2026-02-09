import { FileText, Search, Mail } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Décrivez votre bien",
      description: "Remplissez le formulaire en ligne en moins de 2 minutes : type de bien, surface, localisation, état général."
    },
    {
      number: "02",
      icon: Search,
      title: "Analyse experte du marché local",
      description: "Valentin croise les transactions récentes (données DVF), l'état du marché local et les spécificités de votre bien : orientation, vue, potentiel, environnement immédiat."
    },
    {
      number: "03",
      icon: Mail,
      title: "Recevez votre estimation sous 48h",
      description: "Vous recevez une fourchette de prix argumentée et détaillée, prête à être présentée à un notaire, une banque ou un acheteur."
    }
  ];

  return (
    <section className="relative bg-navy w-full overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-white/20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/20 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative flex flex-col max-w-[1080px] text-center mx-auto px-5 py-20 md:px-8 md:py-28">
        <div className="animate-fade-in-up flex flex-col items-center">
          <span className="pill-label !border-white/15 !text-white/50">comment ça marche</span>
          <h2 className="animate-fade-in-up section-title !text-white mb-4 mx-auto">
            De la demande à l'estimation,{" "}
            <em className="font-cormorant italic font-normal text-white/60">3 étapes</em>
          </h2>
          <p className="text-white/50 text-[15px] font-light mb-14 md:mb-20 max-w-md">
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl mx-auto">
          {/* Connecting line between circles */}
          <div className="hidden md:block absolute top-6 left-[20%] right-[20%] h-[1px] bg-white/10"></div>

          {steps.map((step, index) => (
            <div key={index} className="animate-fade-in-up text-center relative">
              <div className="relative z-10 w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/20">
                <span className="text-white text-[13px] font-medium">{step.number}</span>
              </div>
              <h3 className="text-white text-lg font-cormorant font-medium mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/55 leading-[1.7] font-light text-[15px] max-w-[260px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
