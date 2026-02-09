type MobileMenuButtonProps = {
  onClick: () => void;
};

export const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Ouvrir le menu"
      onClick={onClick}
      className="text-neutral-900 font-normal items-center bg-transparent caret-transparent flex leading-[16.1px] min-h-[30px] min-w-[auto] text-center p-0 lg:hidden lg:min-h-8 lg:min-w-0"
    >
      <span className="relative box-border caret-transparent block h-[18px] min-h-[auto] min-w-[auto] w-[30px] lg:inline-block lg:h-6 lg:min-h-0 lg:min-w-0 lg:w-8">
        <span className="absolute bg-neutral-900 box-border caret-transparent content-[''] block h-0.5 w-[30px] -mt-px top-2/4 lg:h-1 lg:w-8 lg:-mt-0.5 before:accent-auto before:bg-neutral-900 before:box-border before:caret-transparent before:text-neutral-900 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-[16.1px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-[30px] before:border-separate before:-top-2 before:font-manrope before:lg:h-1 before:lg:w-8 before:lg:-top-2.5 after:accent-auto after:bg-neutral-900 after:box-border after:caret-transparent after:text-neutral-900 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[16.1px] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-[30px] after:border-separate after:-bottom-2 after:font-manrope after:lg:h-1 after:lg:w-8 after:lg:-bottom-2.5"></span>
      </span>
    </button>
  );
};
