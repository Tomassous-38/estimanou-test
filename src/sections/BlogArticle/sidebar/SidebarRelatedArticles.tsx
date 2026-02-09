import { Link } from "react-router-dom";
import { getRelatedArticles } from "@/data/articles";

interface SidebarRelatedArticlesProps {
  currentSlug: string;
}

export const SidebarRelatedArticles = ({ currentSlug }: SidebarRelatedArticlesProps) => {
  const related = getRelatedArticles(currentSlug, 3);

  if (related.length === 0) return null;

  return (
    <div className="rounded-xl p-5" style={{ border: '1px solid rgba(27, 58, 75, 0.08)' }}>
      <div className="text-navy font-cormorant font-semibold text-base tracking-tight mb-4">
        Articles similaires
      </div>
      <div className="space-y-4">
        {related.map((article) => (
          <Link
            key={article.slug}
            to={`/blog/${article.slug}`}
            className="group flex gap-3"
          >
            <img
              src={article.heroImage.src}
              alt={article.heroImage.alt}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              loading="lazy"
            />
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-neutral-400 text-[10px] uppercase tracking-[0.12em] font-light">
                {article.category}
              </span>
              <span className="text-navy text-[13px] font-cormorant font-semibold leading-snug line-clamp-2 group-hover:text-navy/70 transition-colors">
                {article.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
