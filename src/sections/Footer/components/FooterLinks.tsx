import { ContactInfo } from "@/sections/Footer/components/ContactInfo";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 flex flex-col max-w-full gap-y-8 w-full md:flex-row md:justify-center text-center md:text-left">
      <FooterColumn
        title="Secteurs"
        links={[
          { text: "Saint-Gilles-les-Bains", href: "/estimation-immobiliere/saint-gilles" },
          { text: "Saint-Leu", href: "/estimation-immobiliere/saint-leu" },
          { text: "Saint-Paul", href: "/estimation-immobiliere/saint-paul" },
          { text: "Saint-Denis", href: "/estimation-immobiliere/saint-denis" },
          { text: "Saint-Pierre", href: "/estimation-immobiliere/saint-pierre" },
          { text: "Le Tampon", href: "/estimation-immobiliere/le-tampon" }
        ]}
        variant="md:w-auto"
      />
      <FooterColumn
        title="Services"
        links={[
          { text: "Estimer mon bien", href: "/estimer" },
          { text: "Biens à vendre", href: "/biens-a-vendre" },
          { text: "Mise en valeur", href: "/mise-en-valeur" },
          { text: "Blog", href: "/blog" }
        ]}
        variant="md:w-auto"
      />
      <FooterColumn
        title="À propos"
        links={[
          { text: "Qui suis-je", href: "/#apropos" },
          { text: "Actualités", href: "/blog" },
          { text: "Contact", href: "/#contact" }
        ]}
        variant="md:w-auto"
      />
    </div>
  );
};
