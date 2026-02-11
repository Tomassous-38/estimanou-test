import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { ArticleSEO } from "@/sections/BlogArticle/ArticleSEO";
import { ArticleHero } from "@/sections/BlogArticle/ArticleHero";
import { ArticleBody } from "@/sections/BlogArticle/ArticleBody";
import { ArticleSidebar } from "@/sections/BlogArticle/ArticleSidebar";
import { ReadingProgressBar } from "@/sections/BlogArticle/ReadingProgressBar";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article introuvable" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://estimanou.re/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author.name],
      images: [
        {
          url: article.heroImage.src,
          width: article.heroImage.width,
          height: article.heroImage.height,
          alt: article.heroImage.alt,
        },
      ],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
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
    </>
  );
}
