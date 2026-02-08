import { ContactInfo } from "@/sections/Footer/components/ContactInfo";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 flex flex-col max-w-full gap-y-8 w-full md:flex-row md:justify-center text-center md:text-left">
      <FooterColumn
        title="Secteurs"
        links={[
          { text: "Saint-Gilles", href: "#" },
          { text: "Saint-Leu", href: "#" },
          { text: "Étang-Salé", href: "#" },
          { text: "Saint-Paul", href: "#" }
        ]}
        variant="md:w-auto"
      />
      <FooterColumn
        title="Estimation"
        links={[
          { text: "En ligne", href: "#" },
          { text: "Comment ça marche", href: "#" },
          { text: "Exemples", href: "#" }
        ]}
        variant="md:w-auto"
      />
      <FooterColumn
        title="À propos"
        links={[
          { text: "Qui suis-je", href: "#" },
          { text: "Actualités", href: "#" },
          { text: "Contact", href: "#" }
        ]}
        variant="md:w-auto"
      />
    </div>
  );
};
