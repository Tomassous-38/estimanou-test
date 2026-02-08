export const Logo = () => {
  return (
    <a
      href="/"
      className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-full text-left hover:opacity-80 transition-opacity"
    >
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <ellipse cx="20" cy="20" rx="18" ry="18" fill="#1B3A4B"/>
              <path d="M20 12 L24 18 L20 16 L16 18 Z" fill="white"/>
              <path d="M12 22 Q20 18 28 22 Q28 28 20 32 Q12 28 12 22 Z" fill="white" opacity="0.7"/>
            </svg>
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <span className="text-navy font-serif text-sm font-semibold tracking-wider leading-tight">VALENTIN BOURASSIN</span>
          <span className="text-navy font-serif text-[10px] tracking-[0.2em] leading-tight">IMMOBILIER</span>
        </div>
      </div>
    </a>
  );
};
