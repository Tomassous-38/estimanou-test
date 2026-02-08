export const DesktopNav = () => {
  return (
    <ul className="absolute items-stretch bg-white box-border caret-transparent gap-x-0 flex flex-col h-0 justify-start left-[-335px] list-none max-h-[881.406px] min-h-0 min-w-0 pointer-events-none gap-y-0 invisible w-screen z-[1000] overflow-hidden pl-0 top-[calc(100%_+_15px)] md:static md:items-center md:bg-transparent md:flex-row md:h-auto md:max-h-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-auto md:visible md:w-auto md:z-auto md:overflow-visible md:left-auto md:top-auto md:gap-x-8">
      <li className="relative box-border caret-transparent pointer-events-none invisible md:pointer-events-auto md:visible">
        <a
          href="#estimer"
          className="text-neutral-500 text-sm box-border caret-transparent hover:text-navy transition-colors font-light"
        >
          Estimer
        </a>
      </li>
      <li className="relative box-border caret-transparent pointer-events-none invisible md:pointer-events-auto md:visible">
        <a
          href="#secteurs"
          className="text-neutral-600 text-sm box-border caret-transparent hover:text-navy transition-colors"
        >
          Secteurs
        </a>
      </li>
      <li className="relative box-border caret-transparent pointer-events-none invisible md:pointer-events-auto md:visible">
        <a
          href="#apropos"
          className="text-neutral-600 text-sm box-border caret-transparent hover:text-navy transition-colors"
        >
          À propos
        </a>
      </li>
      <li className="relative box-border caret-transparent pointer-events-none invisible md:pointer-events-auto md:visible">
        <a
          href="#actualites"
          className="text-neutral-600 text-sm box-border caret-transparent hover:text-navy transition-colors"
        >
          Actualités
        </a>
      </li>
      <li className="relative box-border caret-transparent pointer-events-none invisible md:pointer-events-auto md:visible">
        <a
          href="#contact"
          className="text-neutral-600 text-sm box-border caret-transparent hover:text-navy transition-colors"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};
