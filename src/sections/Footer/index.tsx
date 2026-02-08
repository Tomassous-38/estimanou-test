import { Link } from "react-router-dom";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const secteurLinks = [
    { text: "Saint-Gilles", href: "#" },
    { text: "Saint-Leu", href: "#" },
    { text: "Étang-Salé", href: "#" },
    { text: "Saint-Paul", href: "#" },
    { text: "La Possession", href: "#" },
  ];

  const estimationLinks = [
    { text: "Estimation en ligne", href: "/estimer" },
    { text: "Comment ça marche", href: "/#process" },
    { text: "Exemples", href: "/#examples" },
    { text: "FAQ", href: "#" },
  ];

  const aboutLinks = [
    { text: "Qui suis-je", href: "/a-propos" },
    { text: "Témoignages", href: "/#temoignages" },
    { text: "Actualités", href: "/actualites" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#F8F6F2] w-full">
      <div className="container-narrow py-20 md:py-24">
        {/* Logo */}
        <div className="flex flex-col items-center text-center mb-12">
          <Link to="/" className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-[#1B3A4B] flex items-center justify-center overflow-hidden mb-4">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <ellipse cx="32" cy="32" rx="28" ry="28" fill="#1B3A4B"/>
                <path d="M32 16 C35 22, 40 21, 42 18 C39 25, 35 28, 32 24 C29 28, 25 25, 22 18 C24 21, 29 22, 32 16 Z" fill="white" opacity="0.9"/>
                <path d="M16 35 Q24 30, 32 33 Q40 30, 48 35 Q45 42, 32 48 Q19 42, 16 35 Z" fill="white" opacity="0.6"/>
              </svg>
            </div>
            <span className="text-[#1B3A4B] font-serif text-lg font-semibold tracking-wider">VALENTIN BOURASSIN</span>
            <span className="text-[#1B3A4B]/60 font-serif text-xs tracking-[0.2em]">IMMOBILIER</span>
          </Link>
        </div>

        {/* Newsletter */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h3 className="text-[#1B3A4B] text-xl font-cormorant font-light tracking-tight mb-6">
            Recevez nos analyses du marché immobilier réunionnais
          </h3>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-sm px-6 py-3.5 rounded-full border border-[#E8EDE6] outline-none focus:border-[#B8975A] focus:ring-1 focus:ring-[#B8975A]/20 transition-all font-outfit"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              <span className="text-white/50 mr-1">/</span>s'inscrire
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E8EDE6] mb-16" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Contact */}
          <div>
            <h4 className="text-[#1B3A4B] text-xs uppercase tracking-[0.15em] font-outfit font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-[#2C2C2C]/50 text-sm font-light">
              <p>06 93 48 88 83</p>
              <p>Secteur Ouest, Île de La Réunion</p>
              <p>valentinbourassin@gmail.com</p>
            </div>
          </div>

          {/* Secteurs */}
          <div>
            <h4 className="text-[#1B3A4B] text-xs uppercase tracking-[0.15em] font-outfit font-semibold mb-4">Secteurs</h4>
            <div className="space-y-2">
              {secteurLinks.map((link, i) => (
                <a key={i} href={link.href} className="block text-[#2C2C2C]/50 text-sm font-light hover:text-[#1B3A4B] transition-colors">
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Estimation */}
          <div>
            <h4 className="text-[#1B3A4B] text-xs uppercase tracking-[0.15em] font-outfit font-semibold mb-4">Estimation</h4>
            <div className="space-y-2">
              {estimationLinks.map((link, i) => (
                <Link key={i} to={link.href} className="block text-[#2C2C2C]/50 text-sm font-light hover:text-[#1B3A4B] transition-colors">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* À propos */}
          <div>
            <h4 className="text-[#1B3A4B] text-xs uppercase tracking-[0.15em] font-outfit font-semibold mb-4">À propos</h4>
            <div className="space-y-2">
              {aboutLinks.map((link, i) => (
                <Link key={i} to={link.href} className="block text-[#2C2C2C]/50 text-sm font-light hover:text-[#1B3A4B] transition-colors">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E8EDE6] mb-10" />

        {/* Social */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#E8EDE6] flex items-center justify-center hover:bg-[#B8975A] hover:text-white text-[#1B3A4B] transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://www.facebook.com/" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#E8EDE6] flex items-center justify-center hover:bg-[#B8975A] hover:text-white text-[#1B3A4B] transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#E8EDE6] flex items-center justify-center hover:bg-[#B8975A] hover:text-white text-[#1B3A4B] transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-[#2C2C2C]/30 text-sm font-light">
            © 2025 Estimanou — Valentin Bourassin Immobilier. Tous droits réservés.
          </p>
          <p className="text-[#2C2C2C]/30 text-xs font-light">
            <a href="#" className="hover:text-[#1B3A4B] transition-colors">Mentions légales</a>
            {" | "}
            <a href="#" className="hover:text-[#1B3A4B] transition-colors">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
