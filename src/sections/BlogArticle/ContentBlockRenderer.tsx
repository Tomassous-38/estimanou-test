import type { ContentBlock } from "@/types/blog";
import { ParagraphBlock } from "./blocks/ParagraphBlock";
import { HeadingBlock } from "./blocks/HeadingBlock";
import { KeyTakeawayBlock } from "./blocks/KeyTakeawayBlock";
import { ExpertQuoteBlock } from "./blocks/ExpertQuoteBlock";
import { StatHighlightBlock } from "./blocks/StatHighlightBlock";
import { ImageCaptionBlock } from "./blocks/ImageCaptionBlock";
import { InfoBoxBlock } from "./blocks/InfoBoxBlock";
import { FAQBlock } from "./blocks/FAQBlock";
import { RelatedArticlesInline } from "./blocks/RelatedArticlesInline";
import { CTABlock } from "./blocks/CTABlock";
import { ComparisonTableBlock } from "./blocks/ComparisonTableBlock";
import { TimelineBlock } from "./blocks/TimelineBlock";

export const ContentBlockRenderer = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case "paragraph":
      return <ParagraphBlock content={block.content} />;
    case "heading":
      return <HeadingBlock level={block.level} content={block.content} id={block.id} />;
    case "key-takeaway":
      return <KeyTakeawayBlock title={block.title} points={block.points} />;
    case "expert-quote":
      return <ExpertQuoteBlock quote={block.quote} author={block.author} role={block.role} />;
    case "stat-highlight":
      return <StatHighlightBlock value={block.value} label={block.label} context={block.context} />;
    case "image-caption":
      return <ImageCaptionBlock src={block.src} alt={block.alt} caption={block.caption} width={block.width} />;
    case "info-box":
      return <InfoBoxBlock variant={block.variant} title={block.title} content={block.content} />;
    case "faq":
      return <FAQBlock questions={block.questions} />;
    case "related-articles":
      return <RelatedArticlesInline articleSlugs={block.articleSlugs} />;
    case "cta-block":
      return <CTABlock title={block.title} description={block.description} buttonText={block.buttonText} buttonHref={block.buttonHref} />;
    case "comparison-table":
      return <ComparisonTableBlock headers={block.headers} rows={block.rows} />;
    case "timeline":
      return <TimelineBlock steps={block.steps} />;
    default:
      return null;
  }
};
