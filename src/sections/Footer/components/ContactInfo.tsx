import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const ContactInfo = () => {
  return (
    <div className="relative items-center bg-cover box-border caret-transparent flex flex-col justify-center gap-y-6 w-full text-center">
      <div className="text-navy text-base box-border caret-transparent leading-relaxed max-w-full font-light">
        06 93 48 88 83
        <br className="box-border caret-transparent" />
        valentinbourassin@gmail.com
      </div>
      <SocialLinks />
    </div>
  );
};
