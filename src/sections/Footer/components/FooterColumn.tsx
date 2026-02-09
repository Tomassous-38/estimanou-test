import { Link } from "react-router-dom";

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
      className={`flex flex-col gap-y-4 w-full ${props.variant}`}
    >
      <h3 className="text-navy text-xs uppercase tracking-[0.15em] font-semibold">
        {props.title}
      </h3>
      <div className="flex flex-col gap-y-2.5">
        {props.links.map((link, index) => {
          const isExternal = link.href.startsWith("http");
          const isAnchor = link.href.startsWith("#") || link.href.startsWith("/#");
          const linkClass = "text-neutral-600 text-[15px] leading-relaxed hover:text-gold transition-colors font-light";

          if (isExternal || isAnchor) {
            return (
              <a
                key={index}
                href={link.href}
                className={linkClass}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.text}
              </a>
            );
          }

          return (
            <Link
              key={index}
              to={link.href}
              className={linkClass}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
