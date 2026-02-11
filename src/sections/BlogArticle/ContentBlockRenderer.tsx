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
import { VideoEmbedBlock } from "./blocks/VideoEmbedBlock";
import { InteractiveChartBlock } from "./blocks/InteractiveChartBlock";
import { NumberedListBlock } from "./blocks/NumberedListBlock";
import { ProsConsBlock } from "./blocks/ProsConsBlock";
import { EmbedBlock } from "./blocks/EmbedBlock";
import { SummaryBlock } from "./blocks/SummaryBlock";
import { GalleryBlock } from "./blocks/GalleryBlock";

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
    case "video-embed":
      return <VideoEmbedBlock url={block.url} caption={block.caption} aspectRatio={block.aspectRatio} />;
    case "interactive-chart":
      return <InteractiveChartBlock title={block.title} data={block.data} unit={block.unit} source={block.source} variant={block.variant} />;
    case "numbered-list":
      return <NumberedListBlock title={block.title} items={block.items} />;
    case "pros-cons":
      return <ProsConsBlock title={block.title} pros={block.pros} cons={block.cons} />;
    case "embed":
      return <EmbedBlock url={block.url} height={block.height} caption={block.caption} aspectRatio={block.aspectRatio} />;
    case "summary":
      return <SummaryBlock title={block.title} points={block.points} />;
    case "gallery":
      return <GalleryBlock images={block.images} columns={block.columns} caption={block.caption} />;
    default:
      return null;
  }
};
