'use client';

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Blog = () => {
  const articles = [
    {
      slug: "bilan-2024-marche-immobilier-reunion",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      title: "Bilan 2024 du marché immobilier réunionnais",
      excerpt: "Analyse des tendances, prix au m² et perspectives pour les propriétaires de l’Ouest.",
      date: "15 Jan 2025",
      category: "Marché",
      readTime: "8 min"
    },
    {
      slug: "pourquoi-faire-estimer-avant-de-vendre",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&h=400&fit=crop",
      title: "Pourquoi faire estimer avant de vendre",
      excerpt: "Les 3 erreurs les plus courantes qui font perdre de l’argent aux vendeurs.",
      date: "08 Jan 2025",
      category: "Conseils",
      readTime: "5 min"
    },
    {
      slug: "erreurs-qui-font-baisser-la-valeur",
      image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=400&fit=crop",
      title: "Les erreurs qui font baisser la valeur",
      excerpt: "Mauvais entretien, travaux non déclarés... Ce qui coûte cher lors de l’estimation.",
      date: "22 Déc 2024",
      category: "Guide",
      readTime: "6 min"
    }
  ];

  return (
    <section id="actualites" className="relative bg-white w-full">
      <div className="relative flex flex-col max-w-[1080px] mx-auto px-5 py-20 md:px-8 md:py-28">
        {/* Header row: heading left, button right (TravelTrip style) */}
        <div className="animate-fade-in-up flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div className="text-center md:text-left">
            <span className="pill-label">actualités du marché</span>
            <h2 className="section-title">
              <em className="font-cormorant italic font-normal text-navy/70">Comprendre</em>{" "}
              le marché pour mieux décider
            </h2>
          </div>
          <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-navy/60 text-[12px] tracking-wide border border-navy/12 rounded-full px-5 py-2 hover:bg-navy hover:text-white transition-all duration-300 flex-shrink-0 mt-4 md:mt-0">
            tous les articles
            <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full">
          {articles.map((article, index) => (
            <Link href={`/blog/${article.slug}`} key={index} className="animate-fade-in-up group cursor-pointer text-left block">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/2]">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy text-[10px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {article.category}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-navy/60 text-[10px] font-light px-2 py-1 rounded-md">
                  {article.readTime}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-neutral-500 text-[12px] uppercase tracking-[0.15em] font-light">{article.date}</div>
                <h3 className="text-navy text-base font-cormorant font-semibold leading-snug tracking-tight group-hover:text-navy/70 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-neutral-500 text-[13px] font-light leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-navy/40 text-[11px] font-normal tracking-wide pt-1 underline underline-offset-2 decoration-navy/15 group-hover:text-navy/60 transition-colors duration-300">
                  lire l'article
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
