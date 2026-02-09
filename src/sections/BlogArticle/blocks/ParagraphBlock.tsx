export const ParagraphBlock = ({ content }: { content: string }) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: content }} />
  );
};
