import { useParams, Link } from "react-router-dom";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import { getArticleBySlug } from "@/data/articles";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ArticleSEO } from "@/sections/BlogArticle/ArticleSEO";
import { ArticleHero } from "@/sections/BlogArticle/ArticleHero";
import { ArticleBody } from "@/sections/BlogArticle/ArticleBody";
import { ArticleSidebar } from "@/sections/BlogArticle/ArticleSidebar";
import { ReadingProgressBar } from "@/sections/BlogArticle/ReadingProgressBar";
import { ArrowLeft } from "lucide-react";

export const BlogArticlePage = () => {
  useScrollAnimations();

  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center px-5">
          <h1 className="text-navy font-cormorant font-light text-3xl md:text-4xl tracking-tight mb-4">
            Article introuvable
          </h1>
          <p className="text-neutral-400 text-sm font-light mb-8">
            Désolé, cet article n’existe pas ou a été déplacé.
          </p>
          <Link
            to="/"
            className="group text-navy text-[13px] items-center inline-flex gap-2 px-6 py-3 rounded-full transition-all duration-300 font-normal tracking-wide"
            style={{ border: '1px solid rgba(27, 58, 75, 0.12)' }}
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
            Retour à l’accueil
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ReadingProgressBar />
      <ArticleSEO article={article} />
      <ArticleHero article={article} />

      <section className="relative bg-white w-full">
        <div className="max-w-[1080px] mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <ArticleBody article={article} />
            <ArticleSidebar article={article} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
