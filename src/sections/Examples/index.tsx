import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExploreButton } from "@/components/ExploreButton";
import { Link } from "react-router-dom";

export const Examples = () => {
  const { ref, isVisible } = useScrollAnimation();

  const examples = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop",
      type: "Maison T5 • Saint-Gilles-les-Bains",
      details: "160 m² • Terrain 450 m² • Vue mer",
      estimation: "420 000 € — 460 000 €",
      date: "Estimé en janvier 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop",
      type: "Appartement T3 • Saint-Leu",
      details: "75 m² • Résidence récente • Balcon",
      estimation: "195 000 € — 215 000 €",
      date: "Estimé en décembre 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=450&fit=crop",
      type: "Maison créole T4 • Étang-Salé",
      details: "110 m² • Terrain 300 m² • Rénové",
      estimation: "310 000 € — 340 000 €",
      date: "Estimé en janvier 2025"
    }
  ];

  return (
    <section className="relative bg-[#E8EDE6] w-full">
      <div ref={ref} className="container-main py-24 md:py-32">
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8 fade-in-up ${isVisible ? "visible" : ""}`}>
          <div>
            <div className="section-label mb-4">/exemples d'estimations</div>
            <h2 className="section-heading text-[36px] md:text-[48px]">
              Dernières estimations réalisées dans l'Ouest
            </h2>
          </div>
          <ExploreButton text="  Explorer les exemples  " />
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children ${isVisible ? "visible" : ""}`}>
          {examples.map((example, index) => (
            <div key={index} className="group card-hover bg-white rounded-2xl overflow-hidden cursor-pointer">
              <div className="img-zoom h-[240px]">
                <img
                  src={example.image}
                  alt={example.type}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#1B3A4B] text-lg font-cormorant font-medium tracking-tight mb-1">
                  {example.type}
                </h3>
                <p className="text-[#2C2C2C]/40 text-sm font-light mb-4">
                  {example.details}
                </p>
                <div className="text-[#B8975A] text-xl font-cormorant font-medium tracking-tight mb-2">
                  {example.estimation}
                </div>
                <div className="text-[#2C2C2C]/30 text-xs font-outfit">
                  {example.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 fade-in-up ${isVisible ? "visible" : ""}`}>
          <Link to="/estimer" className="text-[#B8975A] text-xs font-outfit uppercase tracking-[0.15em] font-medium hover:text-[#1B3A4B] transition-colors">
            /voir tous les exemples
          </Link>
        </div>
      </div>
    </section>
  );
};
