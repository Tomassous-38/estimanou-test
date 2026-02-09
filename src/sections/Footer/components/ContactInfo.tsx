import { Phone, Mail } from "lucide-react";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const ContactInfo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-y-6 w-full text-center">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <a href="tel:0693488883" className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-light">
          <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
          06 93 48 88 83
        </a>
        <a href="mailto:valentinbourassin@gmail.com" className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-light">
          <Mail className="w-4 h-4 text-gold" strokeWidth={1.5} />
          valentinbourassin@gmail.com
        </a>
      </div>
      <SocialLinks />
    </div>
  );
};
