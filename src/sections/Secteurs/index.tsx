export const Secteurs = () => {
  const secteurs = [
    {
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop",
      title: "Saint-Gilles-les-Bains",
      description: "Bord de mer, résidences de standing"
    },
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
      title: "Saint-Leu",
      description: "Entre mer et montagne"
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
      title: "L'Étang-Salé",
      description: "Cadre de vie familial"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      title: "Saint-Paul",
      description: "Bassin de vie dynamique"
    }
  ];

  return (
    <section id="secteurs" className="relative bg-white bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[1080px] text-center mx-auto px-2.5 py-20 md:px-0 md:py-32">
        <h2 className="text-navy text-[42px] md:text-[56px] leading-[1.2] font-cormorant font-light max-w-2xl mb-20 mx-auto tracking-tight">
          Nos secteurs d'expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
          {secteurs.map((secteur, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 h-[240px]">
                <img
                  src={secteur.image}
                  alt={secteur.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-navy text-xl font-cormorant font-medium mb-2 tracking-tight">
                {secteur.title}
              </h3>
              <p className="text-neutral-500 text-sm font-light">
                {secteur.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
