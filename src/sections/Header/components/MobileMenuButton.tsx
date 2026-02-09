type MobileMenuButtonProps = {
  onClick: () => void;
};

export const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Ouvrir le menu"
      onClick={onClick}
      className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-navy/5 active:bg-navy/10 transition-colors duration-200 lg:hidden"
    >
      <div className="flex flex-col items-end gap-[5px]">
        <span className="block h-[2px] w-[22px] bg-navy rounded-full transition-all duration-300" />
        <span className="block h-[2px] w-[17px] bg-navy rounded-full transition-all duration-300" />
        <span className="block h-[2px] w-[22px] bg-navy rounded-full transition-all duration-300" />
      </div>
    </button>
  );
};
