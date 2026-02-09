import { Link, useLocation } from "react-router-dom";

export const DesktopNav = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const linkClass =
    "text-neutral-600 text-[13.5px] tracking-wide hover:text-navy transition-colors duration-300 font-normal";
  const activeLinkClass =
    "text-navy text-[13.5px] tracking-wide transition-colors duration-300 font-normal";

  // Anchor links — only relevant on homepage
  const anchorLinks = [
    { label: "Secteurs", href: "#secteurs" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ];

  // Page links — always available
  const pageLinks = [
    { label: "Biens à vendre", href: "/biens-a-vendre" },
    { label: "Blog", href: "/blog" },
    { label: "Mise en valeur", href: "/mise-en-valeur" },
  ];

  return (
    <ul className="hidden lg:flex items-center gap-6">
      {anchorLinks.map((link) => (
        <li key={link.href}>
          {isHome ? (
            <a href={link.href} className={linkClass}>
              {link.label}
            </a>
          ) : (
            <Link to={`/${link.href}`} className={linkClass}>
              {link.label}
            </Link>
          )}
        </li>
      ))}
      {pageLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <li key={link.href}>
            <Link
              to={link.href}
              className={isActive ? activeLinkClass : linkClass}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
