import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getArticleBySlug } from "@/data/articles";

interface RelatedArticlesInlineProps {
  articleSlugs: string[];
}

export const RelatedArticlesInline = ({ articleSlugs }: RelatedArticlesInlineProps) => {
  const articles = articleSlugs
    .map(getArticleBySlug)
    .filter((a): a is NonNullable<typeof a> => a != null);

  if (articles.length === 0) return null;

  return (
    <div className="my-10">
      <h3 className="text-navy font-cormorant font-light text-xl tracking-tight mb-5">
        Articles connexes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-sm"
            style={{ border: '1px solid rgba(27, 58, 75, 0.08)' }}
          >
            <img
              src={article.heroImage.src}
              alt={article.heroImage.alt}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
              loading="lazy"
            />
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-neutral-400 text-[10px] uppercase tracking-[0.15em] font-light mb-1">
                {article.category}
              </span>
              <span className="text-navy text-sm font-cormorant font-semibold leading-snug line-clamp-2 group-hover:text-navy/70 transition-colors">
                {article.title}
              </span>
              <span className="flex items-center gap-1 text-navy/40 text-[11px] mt-1.5 group-hover:text-navy/60 transition-colors">
                Lire <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
