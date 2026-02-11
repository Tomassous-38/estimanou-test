export const MiseEnValeurSEO = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mise en valeur de votre bien",
    description:
      "Estimanou met en valeur votre bien immobilier à La Réunion avec des photos professionnelles et des vidéos drone.",
    url: "https://estimanou.re/mise-en-valeur",
    publisher: {
      "@type": "Organization",
      name: "Estimanou",
      url: "https://estimanou.re",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
