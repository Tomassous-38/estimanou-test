import { BadgeDollarSign, ScrollText, Landmark, Scale, Receipt, TrendingUp } from "lucide-react";

export const Services = () => {
  const services = [
    { label: "Vente de votre bien", description: "Fixez le bon prix dès le départ. Un bien surévalué reste sur le marché et perd en attractivité avec le temps.", icon: BadgeDollarSign, number: "01" },
    { label: "Donation & succession", description: "Une évaluation argumentée pour vos démarches notariales, conforme aux exigences fiscales.", icon: ScrollText, number: "02" },
    { label: "Renégociation de prêt", description: "Prouvez la valorisation de votre patrimoine auprès de votre banque pour obtenir de meilleures conditions.", icon: Landmark, number: "03" },
    { label: "Divorce & partage", description: "Une estimation neutre et documentée pour faciliter un partage équitable.", icon: Scale, number: "04" },
    { label: "Déclaration fiscale (IFI)", description: "Une base fiable et défendable pour vos déclarations.", icon: Receipt, number: "05" },
    { label: "Curiosité patrimoniale", description: "Simplement savoir combien vaut votre bien aujourd'hui. Le marché réunionnais a pris +30 % en 5 ans.", icon: TrendingUp, number: "06" }
  ];

  return (
    <section className="relative bg-sage/40 w-full">
      <div className="relative flex flex-col max-w-[900px] text-center mx-auto px-5 py-20 md:px-8 md:py-28">
        <div className="animate-fade-in-up flex flex-col items-center">
          <span className="pill-label">quand faire estimer son bien</span>
          <h2 className="section-title mb-4 mx-auto">
            Chaque situation mérite une estimation{" "}
            <em className="font-cormorant italic font-normal text-navy/70">sur mesure</em>
          </h2>
          <p className="text-neutral-500 text-[15px] font-light mb-14 max-w-md">
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="animate-fade-in-up group bg-white/80 p-6 md:p-7 rounded-xl text-center hover:bg-white hover:shadow-sm transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(184, 151, 90, 0.12)' }}>
                    <Icon className="w-[18px] h-[18px] text-gold/80" strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-navy text-sm font-medium mb-1.5">
                  {service.label}
                </p>
                <p className="text-neutral-500 text-[13px] font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
