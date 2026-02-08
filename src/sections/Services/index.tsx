export const Services = () => {
  const services = [
    "Vente de votre bien",
    "Donation & succession",
    "Renégociation de prêt",
    "Divorce & partage",
    "Déclaration fiscale",
    "Curiosité patrimoniale"
  ];

  return (
    <section className="relative bg-sage bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[900px] text-center mx-auto px-2.5 py-20 md:px-0 md:py-32">
        <h2 className="text-navy text-[42px] md:text-[56px] leading-[1.2] font-cormorant font-light mb-16 max-w-3xl mx-auto tracking-tight">
          Quand faire estimer son bien
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl text-center hover:shadow-md transition-shadow">
              <p className="text-navy font-normal">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
