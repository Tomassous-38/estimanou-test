import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** The final page title (displayed but not linked) */
  current: string;
  /** Use "dark" when breadcrumb is on a dark background (hero images) */
  variant?: "light" | "dark";
}

export const Breadcrumb = ({ items, current, variant = "light" }: BreadcrumbProps) => {
  const truncated = current.length > 45 ? current.slice(0, 45) + "\u2026" : current;

  const isDark = variant === "dark";

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
        "name": truncated,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 mb-6 flex-wrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link
                href={item.href}
                className={`text-[11px] uppercase tracking-[0.15em] font-light transition-colors ${
                  isDark
                    ? "text-white/50 hover:text-white/80"
                    : "text-neutral-400 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={`text-[11px] uppercase tracking-[0.15em] font-light ${
                isDark ? "text-white/50" : "text-neutral-400"
              }`}>
                {item.label}
              </span>
            )}
            <ChevronRight className={`w-3 h-3 ${isDark ? "text-white/30" : "text-neutral-300"}`} strokeWidth={1.5} />
          </span>
        ))}
        <span className={`text-[11px] uppercase tracking-[0.15em] font-light ${
          isDark ? "text-white/70" : "text-navy/60"
        }`}>
          {truncated}
        </span>
      </nav>
    </>
  );
};
