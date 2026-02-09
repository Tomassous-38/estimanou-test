interface StatHighlightProps {
  value: string;
  label: string;
  context?: string;
}

export const StatHighlightBlock = ({ value, label, context }: StatHighlightProps) => {
  return (
    <div className="my-10 bg-navy-100 rounded-2xl p-8 md:p-12 text-center">
      {/* Decorative gold line */}
      <div className="w-10 h-[1.5px] rounded-full mx-auto mb-5" style={{ backgroundColor: 'rgba(184, 151, 90, 0.5)' }} />
      <div className="text-navy font-cormorant font-light text-5xl md:text-6xl tracking-tight mb-3">
        {value}
      </div>
      <div className="text-navy text-sm font-medium tracking-wide">
        {label}
      </div>
      {context && (
        <div className="text-neutral-400 text-xs font-light mt-3 max-w-sm mx-auto">
          {context}
        </div>
      )}
    </div>
  );
};
