import type { BlogArticle } from "@/types/blog";

interface ArticleSEOProps {
  article: BlogArticle;
}

export const ArticleSEO = ({ article }: ArticleSEOProps) => {
  // BlogPosting JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": [
      article.heroImage.src,
    ],
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "jobTitle": article.author.role,
      "url": "https://estimanou.re",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Estimanou",
      "url": "https://estimanou.re",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://estimanou.re/blog/${article.slug}`,
    },
  };

  // FAQPage JSON-LD (if FAQ block present)
  const faqBlock = article.content.find((b) => b.type === "faq");
  const faqJsonLd = faqBlock && faqBlock.type === "faq"
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqBlock.questions.map((q) => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
};
