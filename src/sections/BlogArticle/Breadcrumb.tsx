import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  category: string;
  title: string;
}

export const Breadcrumb = ({ category, title }: BreadcrumbProps) => {
  const items = [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/#actualites" },
    { label: category },
  ];

  // Truncate title for breadcrumb
  const truncatedTitle = title.length > 40 ? title.slice(0, 40) + "\u2026" : title;

  // JSON-LD BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      ...items.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.label,
        ...(item.href ? { "item": `https://estimanou.re${item.href}` } : {}),
      })),
      {
        "@type": "ListItem",
        "position": items.length + 1,
        "name": truncatedTitle,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Fil d\u2019Ariane" className="flex items-center gap-1.5 mb-6 flex-wrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link
                to={item.href}
                className="text-neutral-500 text-[12px] uppercase tracking-[0.15em] font-light hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-500 text-[12px] uppercase tracking-[0.15em] font-light">
                {item.label}
              </span>
            )}
            <ChevronRight className="w-3 h-3 text-neutral-300" strokeWidth={1.5} />
          </span>
        ))}
        <span className="text-navy/60 text-[11px] uppercase tracking-[0.15em] font-light">
          {truncatedTitle}
        </span>
      </nav>
    </>
  );
};
