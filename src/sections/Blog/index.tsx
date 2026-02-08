import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();

  const articles = [
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      category: "Marché immobilier",
      title: "Prix de l'immobilier à La Réunion : bilan 2024 et perspectives",
      date: "15/01/2025",
      excerpt: "Le marché immobilier réunionnais a connu des évolutions notables. Décryptage secteur par secteur."
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      category: "Conseils",
      title: "Pourquoi faire estimer son bien avant de le mettre en vente ?",
      date: "08/01/2025",
      excerpt: "Une estimation juste est la clé d'une vente rapide et au bon prix. Voici pourquoi."
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      category: "Conseils",
      title: "Les 5 erreurs qui font baisser la valeur de votre bien",
      date: "22/12/2024",
      excerpt: "Certains détails peuvent coûter cher lors d'une estimation. Comment les anticiper."
    }
  ];

  return (
    <section id="actualites" className="relative bg-[#F8F6F2] w-full">
      <div ref={ref} className="container-main py-24 md:py-32">
        {/* Header */}
        <div className={`flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6 fade-in-up ${isVisible ? "visible" : ""}`}>
          <div>
            <div className="section-label mb-4">/actualités</div>
            <h2 className="section-heading text-[36px] md:text-[48px]">
              Conseils et tendances du marché immobilier réunionnais
            </h2>
          </div>
          <Link to="/actualites" className="text-[#B8975A] text-xs font-outfit uppercase tracking-[0.15em] font-medium hover:text-[#1B3A4B] transition-colors flex items-center gap-1">
            /voir tous les articles <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children ${isVisible ? "visible" : ""}`}>
          {articles.map((article, index) => (
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
                  <span className="section-label text-[10px]">{article.category}</span>
                  <span className="text-[#2C2C2C]/30 text-xs">{article.date}</span>
                </div>
                <h3 className="text-[#1B3A4B] text-lg font-cormorant font-medium leading-tight tracking-tight group-hover:text-[#B8975A] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#2C2C2C]/50 text-sm font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
