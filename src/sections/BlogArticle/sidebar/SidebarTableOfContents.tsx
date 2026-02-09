import { useState, useEffect } from "react";
import type { ContentBlock } from "@/types/blog";

interface SidebarTableOfContentsProps {
  content: ContentBlock[];
}

export const SidebarTableOfContents = ({ content }: SidebarTableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  const headings = content.filter(
    (block): block is Extract<ContentBlock, { type: "heading" }> =>
      block.type === "heading"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="rounded-xl p-5" style={{ border: '1px solid rgba(27, 58, 75, 0.08)' }}>
      <div className="text-navy font-cormorant font-semibold text-base tracking-tight mb-4">
        Sommaire
      </div>
      <ul className="space-y-2.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-[14px] font-light transition-all duration-200 ${
                h.level === 3 ? "pl-3" : ""
              } ${
                activeId === h.id
                  ? "text-gold font-normal"
                  : "text-neutral-600 hover:text-navy"
              }`}
              style={activeId === h.id ? { borderLeft: '2px solid #B8975A', paddingLeft: h.level === 3 ? '0.75rem' : '0.5rem' } : undefined}
            >
              {h.content}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
