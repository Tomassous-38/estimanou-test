import { Logo } from "@/sections/Header/components/Logo";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { CTAButton } from "@/sections/Header/components/CTAButton";

export const Header = () => {
  return (
    <header className="absolute border-b-sage border-l-neutral-400 border-r-neutral-400 border-t-neutral-400 box-border caret-transparent w-full z-[199] border-b-2 bg-white/95 backdrop-blur-sm">
      <div className="items-center box-border caret-transparent gap-x-5 flex justify-between max-w-[1080px] gap-y-5 mx-auto px-2.5 py-5 md:px-0 md:py-2.5">
        <Logo />
        <div className="box-border caret-transparent">
          <nav className="relative box-border caret-transparent flex text-left">
            <MobileMenuButton />
            <DesktopNav />
          </nav>
        </div>
        <CTAButton />
      </div>
    </header>
  );
};
