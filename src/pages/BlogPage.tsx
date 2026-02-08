import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ArrowUpRight, Clock } from "lucide-react";

const categories = ["Tous", "Marché immobilier", "Conseils", "Fiscalité", "Secteurs"];

const articles = [
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    category: "Marché immobilier",
    date: "15 janvier 2025",
    title: "Prix de l'immobilier à La Réunion : bilan 2024 et perspectives pour 2025",
    excerpt:
      "Le marché immobilier réunionnais a connu des évolutions notables en 2024. Entre hausse des prix dans le secteur ouest et stabilisation sur le littoral sud, décryptage des tendances par commune et par type de bien.",
    featured: true,
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    category: "Conseils",
    date: "08 janvier 2025",
    title: "Pourquoi faire estimer son bien avant de le mettre en vente ?",
    excerpt:
      "Une estimation juste est la clé d'une vente rapide et au bon prix. Voici pourquoi faire appel à un professionnel local.",
    featured: false,
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    category: "Fiscalité",
    date: "22 décembre 2024",
    title: "Défiscalisation outre-mer : ce qui change en 2025 pour les propriétaires",
    excerpt:
      "Les dispositifs Pinel et Girardin évoluent. Tour d'horizon des nouvelles mesures fiscales et de leur impact sur votre patrimoine.",
    featured: false,
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    category: "Secteurs",
    date: "10 décembre 2024",
    title: "Saint-Gilles-les-Bains : un marché toujours aussi prisé en 2024",
    excerpt:
      "Le secteur balnéaire de l'ouest continue d'attirer investisseurs et résidents. Analyse des prix et des opportunités.",
    featured: false,
  },
  {
    image: "https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=600&h=400&fit=crop",
    category: "Conseils",
    date: "28 novembre 2024",
    title: "Les 5 erreurs qui font baisser la valeur de votre bien immobilier",
    excerpt:
      "Certains détails peuvent coûter cher lors d'une estimation. Découvrez comment les anticiper pour maximiser la valeur de votre propriété.",
    featured: false,
  },
];

export const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredArticles =
    activeCategory === "Tous"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featuredArticle = filteredArticles.find((a) => a.featured) || filteredArticles[0];
  const gridArticles = filteredArticles.filter((a) => a !== featuredArticle).slice(0, 4);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-[#1B3A4B] w-full overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border border-white/5 translate-y-1/2 -translate-x-1/4" />
          </div>
          <div className="container-main relative z-10 pt-36 pb-20 md:pt-44 md:pb-28 text-center">
            <div className="text-[#B8975A] text-xs font-outfit uppercase tracking-[0.2em] font-medium mb-6">
              /actualités
            </div>
            <h1 className="font-cormorant font-light text-white text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto">
              Actualités
            </h1>
            <p className="text-white/50 text-lg font-outfit font-light max-w-xl mx-auto">
              Conseils et tendances du marché immobilier réunionnais
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white w-full border-b border-[#E8EDE6]">
          <div className="container-main py-6">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-outfit font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#1B3A4B] text-white"
                      : "bg-[#F8F6F2] text-[#2C2C2C]/60 hover:bg-[#E8EDE6] hover:text-[#1B3A4B]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="bg-white w-full">
          <div className="container-main py-16 md:py-24">
            {/* Featured Article */}
            {featuredArticle && (
              <article className="group cursor-pointer card-hover mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="img-zoom rounded-2xl h-[280px] md:h-[360px]">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-block bg-[#B8975A]/10 text-[#B8975A] text-[10px] font-outfit uppercase tracking-[0.15em] font-semibold px-3 py-1 rounded-full">
                        {featuredArticle.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#2C2C2C]/30 text-xs font-outfit">
                        <Clock size={12} />
                        {featuredArticle.date}
                      </span>
                    </div>
                    <h2 className="text-[#1B3A4B] text-2xl md:text-3xl font-cormorant font-medium leading-tight tracking-tight group-hover:text-[#B8975A] transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-[#2C2C2C]/50 text-base font-outfit font-light leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[#B8975A] text-xs font-outfit uppercase tracking-[0.15em] font-medium group-hover:gap-2.5 transition-all">
                      /lire l'article <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </article>
            )}

            {/* Divider */}
            <div className="w-full h-px bg-[#E8EDE6] mb-16" />

            {/* Grid Articles */}
            {gridArticles.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                {gridArticles.map((article, index) => (
                  <article key={index} className="group cursor-pointer card-hover">
                    <div className="img-zoom rounded-2xl mb-5 h-[220px]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-block bg-[#B8975A]/10 text-[#B8975A] text-[10px] font-outfit uppercase tracking-[0.15em] font-semibold px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-[#2C2C2C]/30 text-xs font-outfit">
                          <Clock size={12} />
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-[#1B3A4B] text-lg font-cormorant font-medium leading-tight tracking-tight group-hover:text-[#B8975A] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[#2C2C2C]/50 text-sm font-outfit font-light leading-relaxed">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[#B8975A] text-xs font-outfit uppercase tracking-[0.15em] font-medium group-hover:gap-2.5 transition-all">
                        /lire la suite <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Empty state */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#2C2C2C]/40 text-lg font-outfit font-light">
                  Aucun article dans cette catégorie pour le moment.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
