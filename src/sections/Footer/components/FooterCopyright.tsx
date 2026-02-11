export const FooterCopyright = () => {
  return (
    <div className="relative items-center bg-cover box-border caret-transparent flex flex-col justify-center max-w-full gap-y-3 w-full text-center">
      <div className="box-border caret-transparent max-w-full text-neutral-600 text-[15px] font-light">
        © 2025 Estimanou — Valentin Bourassin Immobilier
      </div>
      <div className="flex items-center gap-3 text-neutral-600 text-[13px] font-light">
        <a href="#" className="hover:text-navy transition-colors duration-300">Mentions légales</a>
        <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
        <a href="#" className="hover:text-navy transition-colors duration-300">Confidentialité</a>
        <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
        <a href="#" className="hover:text-navy transition-colors duration-300">CGU</a>
      </div>
    </div>
  );
};
