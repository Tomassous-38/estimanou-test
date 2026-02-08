import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Secteurs = () => {
  const { ref, isVisible } = useScrollAnimation();

  const secteurs = [
    {
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=750&fit=crop",
      tag: "/ouest, la réunion",
      title: "Saint-Gilles-les-Bains",
      description: "Le secteur le plus prisé de l'île. Bord de mer, résidences de standing."
    },
    {
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=750&fit=crop",
      tag: "/ouest, la réunion",
      title: "Saint-Leu",
      description: "Entre mer et montagne. Un marché en pleine évolution."
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=750&fit=crop",
      tag: "/sud-ouest, la réunion",
      title: "L'Étang-Salé",
      description: "Cadre de vie prisé des familles. Forte demande."
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=750&fit=crop",
      tag: "/nord-ouest, la réunion",
      title: "Saint-Paul & La Possession",
      description: "Bassin de vie dynamique. Potentiel d'investissement."
    }
  ];

  return (
    <section id="secteurs" className="relative bg-white w-full">
      <div ref={ref} className="container-main py-24 md:py-32">
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6 fade-in-up ${isVisible ? "visible" : ""}`}>
          <div>
            <div className="section-label mb-4">/secteurs couverts</div>
            <h2 className="section-heading text-[40px] md:text-[52px] max-w-lg">
              Nos zones d'expertise
            </h2>
          </div>
          <p className="text-[#2C2C2C]/50 font-light max-w-sm text-sm leading-relaxed italic font-cormorant text-lg">
            "Une estimation fiable repose sur une connaissance intime du terrain. Chaque quartier a ses spécificités, ses tendances, sa valeur."
          </p>
        </div>

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${isVisible ? "visible" : ""}`}>
          {secteurs.map((secteur, index) => (
            <div key={index} className="group cursor-pointer card-hover rounded-2xl overflow-hidden bg-white">
              <div className="img-zoom rounded-2xl mb-5 h-[280px] md:h-[320px]">
                <img
                  src={secteur.image}
                  alt={secteur.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-1">
                <div className="section-label text-[10px] mb-2">{secteur.tag}</div>
                <h3 className="text-[#1B3A4B] text-xl font-cormorant font-medium mb-2 tracking-tight">
                  {secteur.title}
                </h3>
                <p className="text-[#2C2C2C]/50 text-sm font-light leading-relaxed">
                  {secteur.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
