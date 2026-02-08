export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
  variant: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div
      className={`relative items-start bg-cover box-border caret-transparent gap-x-3 flex flex-col justify-start gap-y-3 w-full ${props.variant}`}
    >
      <h3 className="text-navy text-xs box-border caret-transparent leading-6 max-w-full uppercase tracking-[0.15em] font-semibold">
        {props.title}
      </h3>
      <div className="relative items-start bg-cover box-border caret-transparent gap-x-2 flex flex-col max-w-full gap-y-2 w-full">
        {props.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-neutral-500 text-sm box-border caret-transparent flex leading-relaxed hover:text-navy transition-colors font-light"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};
