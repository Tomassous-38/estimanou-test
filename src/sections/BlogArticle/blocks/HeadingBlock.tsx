export const HeadingBlock = ({ level, content, id }: { level: 2 | 3; content: string; id: string }) => {
  const Tag = level === 2 ? "h2" : "h3";
  return <Tag id={id}>{content}</Tag>;
};
