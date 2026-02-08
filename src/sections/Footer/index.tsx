import { FooterNewsletter } from "@/sections/Footer/components/FooterNewsletter";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { ContactInfo } from "@/sections/Footer/components/ContactInfo";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-navy-100 bg-cover box-border caret-transparent w-full bg-center">
      <div className="relative items-start bg-cover box-border caret-transparent flex flex-col max-w-[900px] text-center mx-auto px-2.5 py-16 md:py-20 md:px-0 gap-y-16">
        <FooterNewsletter />
        
        <div className="box-border caret-transparent flex max-w-full w-full">
          <div className="box-border caret-transparent flex w-full">
            <div className="border-t-sage box-border caret-transparent w-full border-t"></div>
          </div>
        </div>
        
        <FooterLinks />
        
        <div className="box-border caret-transparent flex max-w-full w-full">
          <div className="box-border caret-transparent flex w-full">
            <div className="border-t-sage box-border caret-transparent w-full border-t"></div>
          </div>
        </div>
        
        <ContactInfo />
        
        <FooterCopyright />
      </div>
    </footer>
  );
};
