export const FooterLogo = () => {
  return (
    <div className="relative items-center bg-cover box-border caret-transparent flex flex-col justify-center w-full md:w-[24.5%]">
      <a
        href="/"
        className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-full hover:opacity-80 transition-opacity"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center overflow-hidden mb-3">
            <svg viewBox="0 0 64 64" className="w-full h-full">
              <ellipse cx="32" cy="32" rx="28" ry="28" fill="#1B3A4B"/>
              <path d="M32 18 L38 28 L32 25 L26 28 Z" fill="white"/>
              <path d="M20 34 Q32 28 44 34 Q44 42 32 48 Q20 42 20 34 Z" fill="white" opacity="0.7"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-navy font-serif text-lg font-semibold tracking-wider leading-tight">VALENTIN BOURASSIN</span>
            <span className="text-navy font-serif text-xs tracking-[0.2em] leading-tight">IMMOBILIER</span>
          </div>
        </div>
      </a>
    </div>
  );
};
