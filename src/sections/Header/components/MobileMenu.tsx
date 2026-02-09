import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const anchorLinks = [
    { label: "Secteurs", href: "#secteurs" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ];

  const pageLinks = [
    { label: "Biens à vendre", href: "/biens-a-vendre" },
    { label: "Blog", href: "/blog" },
    { label: "Mise en valeur", href: "/mise-en-valeur" },
  ];

  const cityLinks = [
    { label: "Saint-Gilles-les-Bains", href: "/estimation-immobiliere/saint-gilles" },
    { label: "Saint-Leu", href: "/estimation-immobiliere/saint-leu" },
    { label: "Saint-Paul", href: "/estimation-immobiliere/saint-paul" },
    { label: "Saint-Denis", href: "/estimation-immobiliere/saint-denis" },
    { label: "Saint-Pierre", href: "/estimation-immobiliere/saint-pierre" },
    { label: "Le Tampon", href: "/estimation-immobiliere/le-tampon" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu panel */}
      <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl overflow-y-auto">
        {/* Close button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <span className="text-navy font-cormorant text-xl font-semibold tracking-tight">
            Estimanou
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5 text-neutral-600" strokeWidth={1.5} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-6 py-6">
          {/* Home anchor links */}
          <div className="mb-8">
            <h3 className="text-navy text-[11px] uppercase tracking-[0.15em] font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-1">
              {anchorLinks.map((link) => (
                <li key={link.href}>
                  {isHome ? (
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block py-2.5 text-neutral-700 text-[15px] font-light hover:text-navy transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={`/${link.href}`}
                      onClick={onClose}
                      className="block py-2.5 text-neutral-700 text-[15px] font-light hover:text-navy transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Page links */}
          <div className="mb-8">
            <h3 className="text-navy text-[11px] uppercase tracking-[0.15em] font-semibold mb-4">
              Pages
            </h3>
            <ul className="space-y-1">
              {pageLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className={`block py-2.5 text-[15px] font-light transition-colors ${
                        isActive ? "text-navy font-normal" : "text-neutral-700 hover:text-navy"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* City links */}
          <div className="mb-8">
            <h3 className="text-navy text-[11px] uppercase tracking-[0.15em] font-semibold mb-4">
              Nos secteurs
            </h3>
            <ul className="space-y-1">
              {cityLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={onClose}
                      className={`block py-2.5 text-[15px] font-light transition-colors ${
                        isActive ? "text-navy font-normal" : "text-neutral-700 hover:text-navy"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA */}
          <Link
            to="/estimer"
            onClick={onClose}
            className="block w-full text-center text-white text-[13px] bg-navy px-6 py-3.5 rounded-full hover:bg-navy/90 transition-all duration-300 font-normal uppercase tracking-[0.15em]"
          >
            Faire estimer mon bien
          </Link>
        </nav>
      </div>
    </div>
  );
};
