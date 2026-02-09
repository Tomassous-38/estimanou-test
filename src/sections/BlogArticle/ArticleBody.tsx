import type { BlogArticle } from "@/types/blog";
import { ContentBlockRenderer } from "./ContentBlockRenderer";
import { ArticleDivider } from "./ArticleDivider";
import { ShareButtons } from "./ShareButtons";
import { AuthorCard } from "./AuthorCard";
import { TagList } from "./TagList";

interface ArticleBodyProps {
  article: BlogArticle;
}

export const ArticleBody = ({ article }: ArticleBodyProps) => {
  return (
    <div className="w-full md:w-[calc(65%-2rem)]">
      <div className="prose-estimanou">
        {article.content.map((block, index) => (
          <ContentBlockRenderer key={index} block={block} />
        ))}
      </div>
      <ArticleDivider />
      <ShareButtons article={article} />
      <ArticleDivider />
      <AuthorCard author={article.author} />
      <ArticleDivider />
      <TagList tags={article.tags} />
    </div>
  );
};
