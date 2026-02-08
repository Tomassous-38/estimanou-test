import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Estimer", href: "/estimer" },
    { label: "Secteurs", href: "/#secteurs" },
    { label: "À propos", href: "/a-propos" },
    { label: "Actualités", href: "/actualites" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#1B3A4B] flex items-center justify-center overflow-hidden flex-shrink-0">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <ellipse cx="20" cy="20" rx="18" ry="18" fill="#1B3A4B"/>
              <path d="M20 10 C22 14, 25 13, 26 11 C24 16, 22 18, 20 15 C18 18, 16 16, 14 11 C15 13, 18 14, 20 10 Z" fill="white" opacity="0.9"/>
              <path d="M10 22 Q15 19, 20 21 Q25 19, 30 22 Q28 26, 20 30 Q12 26, 10 22 Z" fill="white" opacity="0.6"/>
              <line x1="20" y1="22" x2="20" y2="28" stroke="white" strokeWidth="0.8" opacity="0.5"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[#1B3A4B] font-serif text-sm font-semibold tracking-wider leading-tight group-hover:text-[#B8975A] transition-colors">
              VALENTIN BOURASSIN
            </span>
            <span className="text-[#1B3A4B] font-serif text-[10px] tracking-[0.2em] leading-tight opacity-70">
              IMMOBILIER
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-[#2C2C2C]/70 text-sm font-outfit font-light hover:text-[#1B3A4B] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B8975A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/estimer"
            className="hidden md:inline-flex items-center gap-2 bg-[#B8975A] text-white text-sm font-outfit font-medium px-6 py-2.5 rounded-full hover:bg-[#a6854d] transition-all hover:scale-[1.02]"
          >
            <span className="text-white/70">/</span>estimer mon bien
          </Link>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#1B3A4B]"
            aria-label="Menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E8EDE6] mobile-menu-enter">
          <div className="container-main py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-[#2C2C2C] text-lg font-outfit font-light py-2 hover:text-[#B8975A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/estimer"
              className="btn-gold text-center mt-4"
            >
              <span className="text-white/70">/</span>estimer mon bien
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
