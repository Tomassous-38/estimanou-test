import type { CityLanding } from "@/types/city";

interface CityStatsProps {
  city: CityLanding;
}

export const CityStats = ({ city }: CityStatsProps) => {
  const stats = [
    { value: city.stats.avgPricePerSqm, label: "Prix moyen au m²", sublabel: "estimation 2024" },
    { value: city.stats.estimationsCount, label: "Estimations réalisées", sublabel: `à ${city.name}` },
    { value: city.stats.avgSaleTime, label: "Délai moyen de vente", sublabel: "en jours" },
    { value: city.stats.priceEvolution, label: "Évolution des prix", sublabel: "sur 12 mois" },
  ];

  return (
    <section className="relative bg-white w-full">
      <div className="relative max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-24">
        <div className="animate-fade-in-up flex flex-col items-center mb-12">
          <span className="pill-label">le marché local</span>
          <h2 className="section-title text-center mb-4">
            Le marché immobilier à{" "}
            <em className="font-cormorant italic font-normal text-navy/70">{city.name}</em>
          </h2>
          <p className="text-neutral-500 text-[15px] font-light max-w-md text-center">
            Les chiffres clés pour comprendre le marché de votre commune
          </p>
        </div>

        <div className="animate-fade-in-up w-full h-[1px] bg-navy/6 mb-12" />

        <div className="animate-fade-in-up grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 w-full">
          {stats.map((stat, i) => (
            <div key={i} className="text-center relative group">
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-neutral-200" />
              )}
              <div className="text-navy text-3xl md:text-5xl font-cormorant font-light mb-1.5 tracking-tight group-hover:text-gold transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-neutral-600 text-[11px] uppercase tracking-[0.2em] font-medium mb-0.5">
                {stat.label}
              </div>
              <div className="text-neutral-400 text-[11px] font-light">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
