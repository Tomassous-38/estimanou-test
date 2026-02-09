import { useState, useEffect } from "react";
import { Logo } from "@/sections/Header/components/Logo";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { CTAButton } from "@/sections/Header/components/CTAButton";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[199] transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-neutral-100"
            : "bg-white/80 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-[1080px] mx-auto px-5 py-4 md:px-8 md:py-3.5">
          <Logo />
          <nav className="flex items-center">
            <MobileMenuButton onClick={() => setMobileMenuOpen(true)} />
            <DesktopNav />
          </nav>
          <CTAButton />
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
