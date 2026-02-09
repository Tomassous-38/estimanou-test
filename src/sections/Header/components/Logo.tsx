export const Logo = () => {
  return (
    <a
      href="/"
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <div className="flex flex-col">
        <span className="text-navy text-[13px] font-semibold tracking-[0.18em] leading-tight uppercase font-cormorant">
          Valentin Bourassin
        </span>
        <span className="text-navy/40 text-[8px] tracking-[0.25em] leading-tight uppercase font-outfit font-light">
          Immobilier
        </span>
      </div>
    </a>
  );
};
