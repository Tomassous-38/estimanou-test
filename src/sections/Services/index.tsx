import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExploreButton } from "@/components/ExploreButton";

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      title: "Vente de votre bien",
      description: "Fixez le juste prix pour vendre dans les meilleures conditions et les meilleurs délais.",
      icon: "🏠",
    },
    {
      title: "Donation & succession",
      description: "Une estimation officielle est souvent demandée par le notaire pour les actes de donation.",
      icon: "📋",
    },
    {
      title: "Renégociation de prêt",
      description: "Votre banque peut exiger une estimation actualisée pour renégocier vos conditions.",
      icon: "🏦",
    },
    {
      title: "Divorce & partage",
      description: "Déterminer la valeur du bien commun pour un partage équitable.",
      icon: "⚖️",
    },
    {
      title: "Déclaration fiscale (IFI)",
      description: "Justifiez la valeur déclarée de votre patrimoine immobilier auprès de l'administration.",
      icon: "📊",
    },
    {
      title: "Curiosité patrimoniale",
      description: "Vous souhaitez simplement savoir combien vaut votre bien aujourd'hui ? C'est une raison suffisante.",
      icon: "🔍",
    },
  ];

  return (
    <section className="relative bg-white w-full">
      <div ref={ref} className="container-main py-24 md:py-32">
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8 fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="max-w-xl">
            <div className="section-label mb-4">/nos services d'estimation</div>
            <h2 className="section-heading text-[36px] md:text-[48px]">
              Les situations où une estimation est essentielle
            </h2>
            <p className="text-[#2C2C2C]/50 font-light mt-4 leading-relaxed text-sm">
              Que vous envisagiez de vendre, de faire une donation, de renégocier votre prêt ou simplement de connaître la valeur de votre patrimoine — une estimation professionnelle est votre point de départ.
            </p>
          </div>
          <ExploreButton text="  Explorer nos services  " />
        </div>

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${isVisible ? "visible" : ""}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-hover bg-[#F8F6F2] rounded-2xl p-8 cursor-pointer border border-transparent hover:border-[#E8EDE6]"
            >
              <div className="text-3xl mb-5">{service.icon}</div>
              <h3 className="text-[#1B3A4B] text-xl font-cormorant font-medium mb-3 tracking-tight group-hover:text-[#B8975A] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#2C2C2C]/50 text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
