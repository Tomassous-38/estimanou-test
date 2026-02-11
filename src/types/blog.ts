export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface ArticleImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export type ContentBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; level: 2 | 3; content: string; id: string }
  | { type: "key-takeaway"; title?: string; points: string[] }
  | { type: "expert-quote"; quote: string; author: string; role?: string }
  | { type: "stat-highlight"; value: string; label: string; context?: string }
  | { type: "image-caption"; src: string; alt: string; caption?: string; width?: "full" | "wide" | "default" }
  | { type: "info-box"; variant: "info" | "warning" | "tip"; title?: string; content: string }
  | { type: "faq"; questions: { question: string; answer: string }[] }
  | { type: "related-articles"; articleSlugs: string[] }
  | { type: "cta-block"; title: string; description: string; buttonText: string; buttonHref: string }
  | { type: "comparison-table"; headers: string[]; rows: string[][] }
  | { type: "timeline"; steps: { number: string; title: string; description: string }[] }
  | { type: "video-embed"; url: string; caption?: string; aspectRatio?: "16:9" | "4:3" | "1:1" }
  | { type: "interactive-chart"; title?: string; data: { label: string; value: number; color?: string }[]; unit?: string; source?: string; variant?: "bar" | "horizontal-bar" }
  | { type: "numbered-list"; title?: string; items: { title: string; description?: string }[] }
  | { type: "pros-cons"; title?: string; pros: string[]; cons: string[] }
  | { type: "embed"; url: string; height?: number; caption?: string; aspectRatio?: "16:9" | "4:3" | "auto" }
  | { type: "summary"; title?: string; points: string[] }
  | { type: "gallery"; images: { src: string; alt: string; caption?: string }[]; columns?: 2 | 3; caption?: string };

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  heroImage: ArticleImage;
  author: Author;
  category: string;
  tags: string[];
  datePublished: string;
  dateModified: string;
  readingTimeMinutes: number;
  content: ContentBlock[];
}
