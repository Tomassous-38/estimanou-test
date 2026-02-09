interface TagListProps {
  tags: string[];
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex items-center gap-2.5 flex-wrap">
      <span className="text-neutral-400 text-[11px] uppercase tracking-[0.15em] font-light mr-1">
        Tags
      </span>
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block text-[10px] uppercase tracking-[0.12em] font-light text-navy/50 px-3 py-1.5 rounded-full"
          style={{ backgroundColor: 'rgba(248, 246, 242, 0.8)', border: '1px solid rgba(27, 58, 75, 0.06)' }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
