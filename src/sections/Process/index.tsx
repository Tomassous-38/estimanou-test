import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Process = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      number: "01",
      title: "Décrivez votre bien en ligne",
      description: "Remplissez le formulaire : type de bien, surface, localisation, état général. Cela prend moins de 2 minutes."
    },
    {
      number: "02",
      title: "Analyse par un expert du terrain",
      description: "Valentin étudie votre bien au regard des transactions récentes, de la dynamique du quartier et des spécificités de votre propriété."
    },
    {
      number: "03",
      title: "Recevez votre estimation détaillée",
      description: "Vous recevez une fourchette de prix argumentée, avec les comparables utilisés. Un échange téléphonique est proposé pour approfondir."
    }
  ];

  return (
    <section className="relative bg-[#F8F6F2] w-full">
      <div ref={ref} className="container-main py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Accordion */}
          <div className={`flex-1 fade-in-left ${isVisible ? "visible" : ""}`}>
            <div className="section-label mb-4">/comment ça marche</div>
            <h2 className="section-heading text-[36px] md:text-[44px] mb-6">
              Comment se déroule votre estimation avec /estimanou
            </h2>
            <p className="text-[#2C2C2C]/50 font-light leading-relaxed mb-12">
              Un processus simple, transparent et rapide. En quelques étapes, vous obtenez une estimation fiable de votre bien immobilier à La Réunion.
            </p>

            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={index} className="accordion-item">
                  <button
                    className="accordion-trigger"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#B8975A] font-cormorant text-2xl font-light">{step.number}</span>
                      <span className="text-[#1B3A4B] font-cormorant text-xl font-medium tracking-tight">{step.title}</span>
                    </div>
                    {openIndex === index ? (
                      <Minus size={18} className="text-[#B8975A] flex-shrink-0" />
                    ) : (
                      <Plus size={18} className="text-[#2C2C2C]/30 flex-shrink-0" />
                    )}
                  </button>
                  <div className={`accordion-content ${openIndex === index ? "open" : ""}`}>
                    <p className="text-[#2C2C2C]/50 text-sm font-light leading-relaxed pl-12">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className={`flex-1 relative hidden lg:flex items-center fade-in-right ${isVisible ? "visible" : ""}`}>
            <div className="relative w-full">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=700&fit=crop"
                alt="Propriété à La Réunion"
                className="rounded-[2rem] w-full h-[500px] object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1B3A4B] rounded-2xl p-6 text-white shadow-xl">
                <div className="font-cormorant text-3xl font-light">48h</div>
                <div className="text-white/60 text-xs tracking-wide font-outfit">délai moyen de réponse</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
