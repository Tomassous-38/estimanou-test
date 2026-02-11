import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface CityCard {
  name: string;
  slug: string;
  price: string;
  estimations: string;
  accroche: string;
  image: string;
}

interface Secteur {
  id: string;
  label: string;
  description: string;
  cities: CityCard[];
}

const secteurs: Secteur[] = [
  {
    id: "ouest",
    label: "Ouest",
    description: "Le marché le plus tendu de l'île, et le plus variable d'une rue à l'autre. C'est justement cette granularité que les algorithmes ne captent pas.",
    cities: [
      { name: "Saint-Gilles-les-Bains", slug: "saint-gilles", price: "~4 500 €+", estimations: "120+", accroche: "Résidences de standing, bord de mer", image: "https://images.unsplash.com/photo-1683020370912-f18ae0dea454?w=600&h=400&fit=crop" },
      { name: "Saint-Paul", slug: "saint-paul", price: "~4 584 €", estimations: "150+", accroche: "Commune la plus chère de l'île", image: "https://images.unsplash.com/photo-1683020368252-27d1d9a2add4?w=600&h=400&fit=crop" },
      { name: "Les Trois-Bassins", slug: "trois-bassins", price: "~3 875 €", estimations: "35+", accroche: "Vues spectaculaires, marché premium", image: "https://images.unsplash.com/photo-1700514113263-6285a2f12f2a?w=600&h=400&fit=crop" },
      { name: "L'Étang-Salé", slug: "etang-sale", price: "~3 630 €", estimations: "95+", accroche: "Cadre familial, projets d'aménagement", image: "https://images.unsplash.com/photo-1674595976615-879d60ca55e0?w=600&h=400&fit=crop" },
      { name: "Saint-Leu", slug: "saint-leu", price: "~3 400 €", estimations: "85+", accroche: "Entre mer et montagne, demande croissante", image: "https://images.unsplash.com/photo-1683020369473-1ecaba0cdece?w=600&h=400&fit=crop" },
      { name: "La Possession", slug: "la-possession", price: "~3 390 €", estimations: "65+", accroche: "Projets urbains ambitieux, forte valorisation", image: "https://images.unsplash.com/photo-1585697386654-e025feaa654a?w=600&h=400&fit=crop" },
      { name: "Les Avirons", slug: "les-avirons", price: "~2 420 €", estimations: "50+", accroche: "Vue mer, proximité plages", image: "https://images.unsplash.com/photo-1683020368543-5920a2488303?w=600&h=400&fit=crop" },
      { name: "Le Port", slug: "le-port", price: "~1 960 €", estimations: "55+", accroche: "Prix accessibles, potentiel de revalorisation", image: "https://images.unsplash.com/photo-1725789836723-c5015ed6745f?w=600&h=400&fit=crop" },
    ]
  },
  {
    id: "nord",
    label: "Nord",
    description: "Saint-Denis et ses communes voisines concentrent la majorité des emplois et services. Un marché dynamique avec des prix en hausse de 6 % sur deux ans.",
    cities: [
      { name: "Saint-Denis", slug: "saint-denis", price: "~2 830 €", estimations: "180+", accroche: "Chef-lieu, écarts importants selon les quartiers", image: "https://images.unsplash.com/photo-1625561428064-78dc30d8ecf3?w=600&h=400&fit=crop" },
      { name: "Sainte-Marie", slug: "sainte-marie", price: "~2 670 €", estimations: "60+", accroche: "Proximité aéroport, marché en développement", image: "https://images.unsplash.com/photo-1715851463964-925a036c5258?w=600&h=400&fit=crop" },
      { name: "Sainte-Suzanne", slug: "sainte-suzanne", price: "~2 040 €", estimations: "45+", accroche: "Prix accessibles, nouveaux acquéreurs", image: "https://images.unsplash.com/photo-1617972405994-b3932f05d83a?w=600&h=400&fit=crop" },
    ]
  },
  {
    id: "sud",
    label: "Sud",
    description: "Le Sud offre un rapport qualité de vie / prix parmi les meilleurs de l'île. Saint-Pierre joue le rôle de capitale du Sud.",
    cities: [
      { name: "Saint-Pierre", slug: "saint-pierre", price: "~3 200 €", estimations: "145+", accroche: "Pôle urbain du Sud, front de mer prisé", image: "https://images.unsplash.com/photo-1683020369776-fc8dee039740?w=600&h=400&fit=crop" },
      { name: "Les Avirons", slug: "les-avirons", price: "~2 420 €", estimations: "50+", accroche: "Entre Ouest et Sud, vue mer", image: "https://images.unsplash.com/photo-1683020368543-5920a2488303?w=600&h=400&fit=crop" },
      { name: "Le Tampon", slug: "le-tampon", price: "~2 340 €", estimations: "120+", accroche: "Cadre familial, prix plus accessibles", image: "https://images.unsplash.com/photo-1715851472125-3caf2f7d9ca9?w=600&h=400&fit=crop" },
      { name: "Entre-Deux", slug: "entre-deux", price: "~2 240 €", estimations: "30+", accroche: "Village de charme, cadre de vie unique", image: "https://images.unsplash.com/photo-1698625799324-346a6145b973?w=600&h=400&fit=crop" },
      { name: "Petite-Île", slug: "petite-ile", price: "~2 230 €", estimations: "40+", accroche: "Résidentielle calme, prisée des familles", image: "https://images.unsplash.com/photo-1683020368389-2159113c2341?w=600&h=400&fit=crop" },
      { name: "Saint-Louis", slug: "saint-louis", price: "~2 150 €", estimations: "75+", accroche: "Porte de Cilaos, bon potentiel", image: "https://images.unsplash.com/photo-1683020370020-0ea4637bd1b0?w=600&h=400&fit=crop" },
      { name: "Saint-Joseph", slug: "saint-joseph", price: "~2 100 €", estimations: "55+", accroche: "Sud sauvage, prix attractifs", image: "https://images.unsplash.com/photo-1683020368406-856dd5ebe0e9?w=600&h=400&fit=crop" },
      { name: "Saint-Philippe", slug: "saint-philippe", price: "~1 650 €", estimations: "20+", accroche: "Coin le plus préservé, environnement incomparable", image: "https://images.unsplash.com/photo-1675407638407-078a7b5a6840?w=600&h=400&fit=crop" },
    ]
  },
  {
    id: "est",
    label: "Est",
    description: "L'Est reste le secteur le plus accessible. Des prix 30 à 50 % inférieurs à l'Ouest : fort potentiel pour les primo-accédants et investisseurs.",
    cities: [
      { name: "Saint-André", slug: "saint-andre", price: "~2 060 €", estimations: "70+", accroche: "2e ville de l'île, prix contenus", image: "https://images.unsplash.com/photo-1609572847658-a2f35fc1755d?w=600&h=400&fit=crop" },
      { name: "Saint-Benoît", slug: "saint-benoit", price: "~1 900 €", estimations: "50+", accroche: "Sous-préfecture Est, biens spacieux compétitifs", image: "https://images.unsplash.com/photo-1580910727537-e4c80c6a6a29?w=600&h=400&fit=crop" },
      { name: "Bras-Panon", slug: "bras-panon", price: "~1 920 €", estimations: "30+", accroche: "Rivières et vanille, cadre paisible", image: "https://images.unsplash.com/photo-1677488743224-be0457458f17?w=600&h=400&fit=crop" },
      { name: "Sainte-Rose", slug: "sainte-rose", price: "~1 720 €", estimations: "20+", accroche: "Au pied du volcan, potentiel sous-évalué", image: "https://images.unsplash.com/photo-1665422276005-18116a1e6225?w=600&h=400&fit=crop" },
    ]
  },
  {
    id: "hauts",
    label: "Hauts & Cirques",
    description: "Un marché de niche : contraintes d'accès, rareté du foncier, attractivité touristique. L'estimation terrain est indispensable.",
    cities: [
      { name: "Les Trois-Bassins", slug: "trois-bassins", price: "~3 875 €", estimations: "35+", accroche: "Commune haute de l'Ouest, marché premium", image: "https://images.unsplash.com/photo-1700514113263-6285a2f12f2a?w=600&h=400&fit=crop" },
      { name: "La Plaine-des-Palmistes", slug: "plaine-des-palmistes", price: "~2 040 €", estimations: "25+", accroche: "Fraîcheur et tranquillité, idéal familles", image: "https://images.unsplash.com/photo-1668687387467-c14f144e37f3?w=600&h=400&fit=crop" },
      { name: "Salazie", slug: "salazie", price: "~1 935 €", estimations: "10+", accroche: "Cirque vert, biens de caractère recherchés", image: "https://images.unsplash.com/photo-1684403483852-2ef75e337352?w=600&h=400&fit=crop" },
      { name: "Cilaos", slug: "cilaos", price: "~1 810 €", estimations: "15+", accroche: "+45 % de hausse récente, attractivité touristique", image: "https://images.unsplash.com/photo-1677492155383-51d23bfbc46f?w=600&h=400&fit=crop" },
    ]
  },
];

export const Secteurs = () => {
  const [activeTab, setActiveTab] = useState("ouest");
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeSecteur = secteurs.find((s) => s.id === activeTab)!;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="secteurs" className="relative bg-white w-full">
      <div className="relative flex flex-col max-w-[1080px] text-center mx-auto px-5 py-20 md:px-8 md:py-28">
        <div className="animate-fade-in-up flex flex-col items-center">
          <span className="pill-label">nos secteurs d'expertise</span>
          <h2 className="section-title mb-3 mx-auto">
            Toute La Réunion,{" "}
            <em className="font-cormorant italic font-normal text-navy/70">quartier par quartier</em>
          </h2>
          <p className="text-neutral-500 text-[15px] font-light mb-10 md:mb-14">
            24 communes couvertes · Prix actualisés 2025
          </p>
        </div>

        {/* Onglets */}
        <div className="animate-fade-in-up flex items-center justify-center gap-2 md:gap-3 mb-8 flex-wrap">
          {secteurs.map((secteur) => (
            <button
              key={secteur.id}
              onClick={() => setActiveTab(secteur.id)}
              className={`px-4 md:px-5 py-2 rounded-full text-[12px] md:text-[13px] tracking-wide transition-all duration-300 ${
                activeTab === secteur.id
                  ? "bg-navy text-white shadow-md"
                  : "text-navy/60 border border-navy/12 hover:bg-navy/5"
              }`}
            >
              {secteur.label}
            </button>
          ))}
        </div>

        {/* Description du secteur */}
        <p className="text-neutral-500 text-[14px] font-light max-w-xl mx-auto mb-10 leading-relaxed">
          {activeSecteur.description}
        </p>

        {/* Carrousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-navy/8 items-center justify-center text-navy/60 hover:text-navy hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-navy/8 items-center justify-center text-navy/60 hover:text-navy hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-5 px-5 md:mx-0 md:px-0"
          >
            {activeSecteur.cities.map((city) => (
              <Link
                key={city.slug + activeTab}
                to={`/estimation-immobiliere/${city.slug}`}
                className="group flex-shrink-0 snap-start bg-white rounded-2xl overflow-hidden text-left hover:shadow-md transition-all duration-300"
                style={{ width: "260px" }}
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm text-navy text-[11px] font-medium px-2 py-0.5 rounded-md">
                    {city.price}/m²
                  </div>
                  <div className="absolute top-2.5 right-2.5 bg-navy/70 backdrop-blur-sm text-white text-[10px] font-light px-2 py-0.5 rounded-md">
                    {city.estimations} est.
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-navy text-[15px] font-cormorant font-semibold tracking-tight mb-1 group-hover:text-navy/80 transition-colors duration-300">
                    {city.name}
                  </h3>
                  <p className="text-neutral-500 text-[12px] font-light leading-relaxed line-clamp-2">
                    {city.accroche}
                  </p>
                  <div className="flex items-center gap-1 mt-2.5 text-navy/40 text-[11px] font-normal tracking-wide group-hover:text-navy/60 transition-colors duration-300">
                    Voir l'estimation
                    <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
