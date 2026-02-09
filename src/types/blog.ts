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
  | { type: "timeline"; steps: { number: string; title: string; description: string }[] };

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
