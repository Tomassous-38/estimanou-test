import { FooterLogo } from "@/sections/Footer/components/FooterLogo";
import { NewsletterForm } from "@/sections/Footer/components/NewsletterForm";

export const FooterNewsletter = () => {
  return (
    <div className="box-border caret-transparent flex flex-col max-w-full gap-y-12 w-full items-center text-center">
      <FooterLogo />
      <NewsletterForm />
    </div>
  );
};
