import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Actualités immobilières à La Réunion",
  description:
    "Retrouvez tous nos articles sur le marché immobilier réunionnais : tendances, conseils, guides et analyses pour les propriétaires de l'Ouest.",
  alternates: { canonical: "https://estimanou.re/blog" },
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function BlogListPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-sage/40 w-full pt-[120px] md:pt-[140px] pb-16 md:pb-20">
        <div className="max-w-[1080px] mx-auto px-5 md:px-8">
          <Breadcrumb
            items={[{ label: "Accueil", href: "/" }]}
            current="Blog"
            variant="light"
          />
          <h1
            className="text-navy font-cormorant font-light tracking-tight leading-[1.1] mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            Nos{" "}
            <em className="italic font-normal text-navy/70">articles</em>
          </h1>
          <p className="text-neutral-600 text-base font-light leading-relaxed max-w-lg">
            Tendances du marché, conseils de vente et guides pratiques pour les
            propriétaires réunionnais.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="relative bg-white w-full">
        <div className="max-w-[1080px] mx-auto px-5 md:px-8 py-16 md:py-20">
          <Link
            href={`/blog/${featured.slug}`}
            className="group flex flex-col md:flex-row gap-8 md:gap-12"
          >
            <div className="md:w-7/12 relative overflow-hidden rounded-2xl aspect-[3/2]">
              <img
                src={featured.heroImage.src}
                alt={featured.heroImage.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy text-[10px] font-medium px-3 py-1 rounded-md uppercase tracking-wider">
                {featured.category}
              </div>
            </div>
            <div className="md:w-5/12 flex flex-col justify-center">
              <span className="pill-label mb-4">à la une</span>
              <h2 className="text-navy font-cormorant text-2xl md:text-3xl font-light tracking-tight leading-snug mb-4 group-hover:text-navy/70 transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-neutral-600 text-[15px] font-light leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-neutral-500 text-[13px] font-light mb-6">
                <span>{formatDate(featured.datePublished)}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                <span>{featured.readingTimeMinutes} min de lecture</span>
              </div>
              <div className="inline-flex items-center gap-2 text-navy/50 text-[12px] font-normal tracking-wide group-hover:text-navy transition-colors duration-300">
                Lire l&apos;article
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All articles grid */}
      {rest.length > 0 && (
        <section className="relative bg-sage/40 w-full">
          <div className="max-w-[1080px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <h2 className="section-title mb-12">
              Tous les{" "}
              <em className="font-cormorant italic font-normal text-navy/70">
                articles
              </em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {rest.map((article) => (
                <Link
                  href={`/blog/${article.slug}`}
                  key={article.slug}
                  className="group bg-white rounded-2xl overflow-hidden card-hover"
                >
                  <div className="relative overflow-hidden aspect-[3/2]">
                    <img
                      src={article.heroImage.src}
                      alt={article.heroImage.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy text-[10px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {article.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-navy/60 text-[10px] font-light px-2 py-1 rounded-md">
                      {article.readingTimeMinutes} min
                    </div>
                  </div>
                  <div className="p-5 text-left">
                    <div className="text-neutral-500 text-[12px] uppercase tracking-[0.15em] font-light mb-2">
                      {formatDate(article.datePublished)}
                    </div>
                    <h3 className="text-navy text-lg font-cormorant font-semibold leading-snug tracking-tight mb-2 group-hover:text-navy/70 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 text-[13px] font-light leading-relaxed line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-navy/50 text-[11px] font-normal tracking-wide underline underline-offset-2 decoration-navy/15 group-hover:text-navy/70 transition-colors duration-300">
                      lire l&apos;article
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
