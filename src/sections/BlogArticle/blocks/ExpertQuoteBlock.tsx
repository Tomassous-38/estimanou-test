interface ExpertQuoteProps {
  quote: string;
  author: string;
  role?: string;
}

export const ExpertQuoteBlock = ({ quote, author, role }: ExpertQuoteProps) => {
  return (
    <blockquote
      className="my-10 rounded-xl py-8 px-7 md:px-8"
      style={{
        backgroundColor: 'rgba(232, 237, 230, 0.25)',
        borderLeft: '3px solid rgba(184, 151, 90, 0.5)',
      }}
    >
      <p className="text-navy font-cormorant italic text-xl md:text-[1.65rem] font-light leading-relaxed tracking-tight mb-5">
        &laquo;&nbsp;{quote}&nbsp;&raquo;
      </p>
      <footer className="flex items-center gap-3">
        <div className="w-8 h-[1.5px] rounded-full" style={{ backgroundColor: '#B8975A' }} />
        <div className="flex items-center gap-2">
          <span className="text-navy text-sm font-medium">{author}</span>
          {role && (
            <>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span className="text-neutral-400 text-xs font-light">{role}</span>
            </>
          )}
        </div>
      </footer>
    </blockquote>
  );
};
