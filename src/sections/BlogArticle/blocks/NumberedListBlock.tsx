interface NumberedListProps {
  title?: string;
  items: {
    title: string;
    description?: string;
  }[];
}

export const NumberedListBlock = ({ title, items }: NumberedListProps) => {
  return (
    <div className="my-10 rounded-xl border border-neutral-200/60 bg-white p-6 md:p-8">
      {title && (
        <h4 className="text-navy text-base font-cormorant font-semibold tracking-tight mb-5">
          {title}
        </h4>
      )}
      <ol className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center text-navy text-sm font-cormorant font-semibold">
              {i + 1}
            </span>
            <div className="pt-0.5">
              <div className="text-navy text-[15px] font-medium leading-snug">
                {item.title}
              </div>
              {item.description && (
                <p className="text-neutral-600 text-[14px] font-light leading-relaxed mt-1">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
