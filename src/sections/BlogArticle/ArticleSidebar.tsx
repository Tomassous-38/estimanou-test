import type { BlogArticle } from "@/types/blog";
import { SidebarAuthorBio } from "./sidebar/SidebarAuthorBio";
import { SidebarTableOfContents } from "./sidebar/SidebarTableOfContents";
import { SidebarCTA } from "./sidebar/SidebarCTA";
import { SidebarRelatedArticles } from "./sidebar/SidebarRelatedArticles";

interface ArticleSidebarProps {
  article: BlogArticle;
}

export const ArticleSidebar = ({ article }: ArticleSidebarProps) => {
  return (
    <aside className="w-full md:w-[calc(35%-2rem)]">
      <div className="md:sticky md:top-24 space-y-6">
        <SidebarAuthorBio author={article.author} />
        <SidebarTableOfContents content={article.content} />
        <SidebarCTA />
        <SidebarRelatedArticles currentSlug={article.slug} />
      </div>
    </aside>
  );
};
