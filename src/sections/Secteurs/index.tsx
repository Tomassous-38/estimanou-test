import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Secteurs = () => {
  const secteurs = [
    {
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=800&fit=crop",
      title: "Saint-Gilles-les-Bains",
      slug: "saint-gilles",
      description: "Le secteur le plus cher de l'île, prix pouvant dépasser 4 500 €/m²",
      count: "120+ estimations"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop",
      title: "Saint-Leu",
      slug: "saint-leu",
      description: "Un marché en hausse porté par la qualité de vie et une demande croissante",
      count: "85+ estimations"
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=800&fit=crop",
      title: "Saint-Paul",
      slug: "saint-paul",
      description: "Commune la plus chère de La Réunion en 2025 (~4 584 €/m²), forte demande",
      count: "150+ estimations"
    },
    {
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&h=800&fit=crop",
      title: "Le Tampon",
      slug: "le-tampon",
      description: "Cadre familial recherché, un marché qui se valorise avec les projets d'aménagement",
      count: "95+ estimations"
    }
  ];

  const autresVilles = [
    { name: "Saint-Denis", slug: "saint-denis", price: "2 800 €/m²" },
    { name: "Saint-Pierre", slug: "saint-pierre", price: "2 600 €/m²" },
  ];

  return (
    <section id="secteurs" className="relative bg-white w-full">
      <div className="relative flex flex-col max-w-[1080px] text-center mx-auto px-5 py-20 md:px-8 md:py-28">
        <div className="animate-fade-in-up flex flex-col items-center">
          <span className="pill-label">nos secteurs d'expertise</span>
          <h2 className="section-title mb-4 mx-auto">
            L'Ouest réunionnais,{" "}
            <em className="font-cormorant italic font-normal text-navy/70">quartier par quartier</em>
          </h2>
          <p className="text-neutral-500 text-[15px] font-light mb-14 md:mb-20 max-w-md">
            Le marché de l'Ouest est le plus tendu de l'île, et le plus variable d'une rue à l'autre. C'est justement cette granularité que les algorithmes ne captent pas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7 w-full">
          {secteurs.map((secteur, index) => (
            <Link to={`/estimation-immobiliere/${secteur.slug}`} key={index} className="animate-fade-in-up group cursor-pointer block">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                <img
                  src={secteur.image}
                  alt={secteur.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white/90 text-[10px] font-light tracking-wider uppercase">{secteur.count}</span>
                </div>
              </div>
              <h3 className="text-navy text-base md:text-lg font-cormorant font-semibold mb-0.5 tracking-tight group-hover:text-navy/70 transition-colors duration-300">
                {secteur.title}
              </h3>
              <p className="text-neutral-500 text-[13px] font-light">
                {secteur.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Autres villes + CTA */}
        <div className="animate-fade-in-up mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-neutral-500 text-[13px] font-light">Également :</span>
            {autresVilles.map((ville) => (
              <Link
                key={ville.slug}
                to={`/estimation-immobiliere/${ville.slug}`}
                className="inline-flex items-center gap-1.5 text-navy/70 text-[13px] font-normal border border-navy/10 rounded-full px-4 py-1.5 hover:bg-navy hover:text-white transition-all duration-300"
              >
                {ville.name}
                <span className="text-[11px] font-light opacity-60">{ville.price}</span>
              </Link>
            ))}
          </div>
          <Link
            to="/biens-a-vendre"
            className="inline-flex items-center gap-2 text-navy/60 text-[12px] tracking-wide border border-navy/12 rounded-full px-5 py-2 hover:bg-navy hover:text-white transition-all duration-300"
          >
            voir tous les biens à vendre
            <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};
