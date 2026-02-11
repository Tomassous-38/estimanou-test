import type { BlogArticle } from "@/types/blog";
import { Breadcrumb } from "./Breadcrumb";
import { Clock, Calendar } from "lucide-react";
import Image from "next/image";

interface ArticleHeroProps {
  article: BlogArticle;
}

export const ArticleHero = ({ article }: ArticleHeroProps) => {
  const formattedDate = new Date(article.datePublished).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative bg-white w-full pt-[110px] md:pt-[130px] pb-4">
      <div className="max-w-[1080px] mx-auto px-5 md:px-8">
        <Breadcrumb category={article.category} title={article.title} />

        <span className="pill-label mb-5">{article.category.toLowerCase()}</span>

        <h1 className="animate-fade-in-up text-navy font-cormorant font-light tracking-tight leading-[1.12] max-w-3xl mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
          {article.title}
        </h1>

        <p className="animate-fade-in-up text-neutral-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8">
          {article.excerpt}
        </p>

        <div className="animate-fade-in-up animate-delay-100 flex items-center gap-4 flex-wrap text-neutral-500 text-[14px] font-light mb-10" style={{ borderTop: '1px solid rgba(27, 58, 75, 0.06)', paddingTop: '1rem' }}>
          <div className="flex items-center gap-2.5">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-navy font-normal text-sm leading-tight">{article.author.name}</span>
              <span className="text-neutral-500 text-[12px] font-light leading-tight">{article.author.role}</span>
            </div>
          </div>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-neutral-300" strokeWidth={1.5} />
            <time dateTime={article.datePublished}>{formattedDate}</time>
          </div>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-neutral-300" strokeWidth={1.5} />
            <span>{article.readingTimeMinutes} min de lecture</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-5 md:px-0">
        <Image
          src={article.heroImage.src}
          alt={article.heroImage.alt}
          width={article.heroImage.width}
          height={article.heroImage.height}
          sizes="(max-width: 1080px) 100vw, 1080px"
          className="animate-fade-in-up animate-delay-200 w-full aspect-[16/9] object-cover rounded-2xl shadow-lg shadow-navy/5"
          priority
        />
        {article.heroImage.caption && (
          <p className="text-neutral-500 text-[12px] font-light italic mt-3 text-center tracking-wide">
            {article.heroImage.caption}
          </p>
        )}
      </div>
    </section>
  );
};
