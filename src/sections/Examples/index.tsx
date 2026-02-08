export const Examples = () => {
  const examples = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      type: "Maison T5",
      location: "Saint-Gilles",
      estimation: "420 000 € — 460 000 €"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      type: "Appartement T3",
      location: "Saint-Leu",
      estimation: "195 000 € — 215 000 €"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      type: "Maison T4",
      location: "Étang-Salé",
      estimation: "310 000 € — 340 000 €"
    }
  ];

  return (
    <section className="relative bg-sage bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[1080px] text-center mx-auto px-2.5 py-20 md:px-0 md:py-32">
        <h2 className="text-navy text-[42px] md:text-[56px] leading-[1.2] font-cormorant font-light mb-16 tracking-tight">
          Exemples d'estimations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {examples.map((example, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 h-[280px]">
                <img
                  src={example.image}
                  alt={example.type}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-navy text-lg font-cormorant font-medium tracking-tight">
                  {example.type} • {example.location}
                </h3>
                <div className="text-gold text-xl font-cormorant font-medium tracking-tight">
                  {example.estimation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
