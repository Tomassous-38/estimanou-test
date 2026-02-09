import { FooterNewsletter } from "@/sections/Footer/components/FooterNewsletter";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { ContactInfo } from "@/sections/Footer/components/ContactInfo";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-navy-100 w-full">
      <div className="relative flex flex-col max-w-[900px] text-center mx-auto px-5 py-16 md:py-20 md:px-8 gap-y-12">
        <FooterNewsletter />
        <div className="w-full h-[1px] bg-navy/8"></div>
        <FooterLinks />
        <div className="w-full h-[1px] bg-navy/8"></div>
        <ContactInfo />
        <FooterCopyright />
      </div>
    </footer>
  );
};
