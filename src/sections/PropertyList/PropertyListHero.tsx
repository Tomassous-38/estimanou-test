import { Breadcrumb } from "@/components/Breadcrumb";
import type { CityLanding } from "@/types/city";

interface PropertyListHeroProps {
  city?: CityLanding;
  count: number;
}

export const PropertyListHero = ({ city, count }: PropertyListHeroProps) => {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    ...(city
      ? [{ label: "Biens à vendre", href: "/biens-a-vendre" }]
      : []),
  ];

  const currentLabel = city ? `Biens à ${city.name}` : "Biens à vendre";

  return (
    <section className="relative bg-white w-full">
      <div className="max-w-[1080px] mx-auto px-5 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16">
        <div className="animate-fade-in-up">
          <Breadcrumb items={breadcrumbItems} current={currentLabel} />

          <h1
            className="text-navy font-cormorant font-light tracking-tight leading-[1.15] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            {city ? (
              <>
                Biens immobiliers à vendre à{" "}
                <em className="italic font-normal text-navy/70">{city.name}</em>
              </>
            ) : (
              <>
                Tous nos biens{" "}
                <em className="italic font-normal text-navy/70">estimés à vendre</em>
              </>
            )}
          </h1>

          <p className="text-neutral-400 text-sm font-light max-w-lg mb-6">
            {city
              ? `${count} bien${count > 1 ? "s" : ""} estimé${count > 1 ? "s" : ""} par nos experts à ${city.name}. Prix moyen : ${city.stats.avgPricePerSqm}/m² · Évolution : ${city.stats.priceEvolution} sur 12 mois.`
              : `${count} bien${count > 1 ? "s" : ""} immobilier${count > 1 ? "s" : ""} estimé${count > 1 ? "s" : ""} par nos experts à La Réunion. Filtrez par ville, type et budget.`}
          </p>

          {/* Mini stats when city is selected */}
          {city && (
            <div className="flex flex-wrap items-center gap-5">
              {[
                { value: city.stats.avgPricePerSqm, label: "Prix/m²" },
                { value: city.stats.priceEvolution, label: "Évolution" },
                { value: city.stats.avgSaleTime, label: "Délai vente" },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-1.5">
                  <span className="text-gold text-lg font-cormorant font-semibold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-neutral-300 text-[10px] uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
