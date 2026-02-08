export const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Décrivez votre bien",
      description: "Formulaire en ligne, moins de 2 minutes"
    },
    {
      number: "2",
      title: "Analyse experte",
      description: "Étude des transactions et du quartier"
    },
    {
      number: "3",
      title: "Recevez l'estimation",
      description: "Fourchette de prix argumentée sous 48h"
    }
  ];

  return (
    <section className="relative bg-navy bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[1080px] text-center mx-auto px-2.5 py-20 md:px-0 md:py-32">
        <h2 className="text-white text-[42px] md:text-[56px] leading-[1.2] font-cormorant font-light mb-20 max-w-2xl mx-auto tracking-tight">
          Comment ça marche
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-white text-xl font-cormorant font-medium mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/70 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
