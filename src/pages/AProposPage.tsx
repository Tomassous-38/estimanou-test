import { Link } from "react-router-dom";
import { MapPin, Eye, Ruler, ShieldCheck } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AProposPage = () => {
  const bio = useScrollAnimation();
  const values = useScrollAnimation();
  const badge = useScrollAnimation();
  const cta = useScrollAnimation();

  const valueCards = [
    {
      icon: MapPin,
      title: "Expertise locale",
      text: "Une connaissance intime du secteur Ouest de La Réunion, de ses micro-marchés, de ses dynamiques de quartier. Chaque rue a son histoire, chaque orientation son impact sur la valeur.",
    },
    {
      icon: Eye,
      title: "Transparence",
      text: "Pas de chiffre sorti d'un algorithme. Chaque estimation est argumentée, sourcée avec des comparables récents, et livrée avec une explication claire de la méthodologie employée.",
    },
    {
      icon: Ruler,
      title: "Rigueur",
      text: "Un travail méthodique qui croise données du marché, visite terrain et analyse des caractéristiques propres à votre bien. Aucun détail n'est laissé au hasard.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&crop=center"
            alt="Immobilier à La Réunion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1B3A4B]/75" />
        </div>

        {/* Content */}
        <div className="container-main relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="section-label mb-6 !text-[#B8975A]">/à propos</div>
          <h1 className="font-cormorant font-light text-white text-[42px] md:text-[56px] lg:text-[68px] leading-[1.08] tracking-tight mb-6 max-w-3xl">
            Valentin Bourassin
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Expert en estimation immobilière à La Réunion
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative bg-white w-full">
        <div ref={bio.ref} className="container-main py-24 md:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Left */}
            <div className={`flex-1 fade-in-left ${bio.isVisible ? "visible" : ""}`}>
              <div className="section-label mb-4">/qui suis-je</div>
              <h2 className="section-heading text-[36px] md:text-[48px] mb-8">
                Plus de 10 ans au service du patrimoine réunionnais
              </h2>
              <div className="space-y-6 text-[#2C2C2C]/60 leading-relaxed font-light">
                <p>
                  Je m'appelle Valentin Bourassin. Depuis plus de 10 ans, j'accompagne les propriétaires de La Réunion dans l'évaluation de leur patrimoine immobilier. Mon parcours m'a conduit de la vente terrain à l'expertise — un chemin qui m'a donné une vision complète du marché local.
                </p>
                <p>
                  Ancien chef de vente dans le secteur de la rénovation écologique, j'ai passé des années à sillonner les quartiers de l'Ouest réunionnais, à rencontrer des propriétaires, à comprendre leurs projets et à évaluer le potentiel de leurs biens. Cette expérience de terrain est irremplaçable : elle m'a appris à voir ce qu'un algorithme ne verra jamais.
                </p>
                <p>
                  Investisseur immobilier moi-même, je connais les réalités du marché de l'intérieur. Je sais ce qui fait la valeur d'un bien à Saint-Gilles, ce qui distingue une opportunité à Saint-Leu, et pourquoi certaines rues d'Étang-Salé se valorisent plus vite que d'autres. Le secteur Ouest, c'est mon territoire — je le connais comme ma poche.
                </p>
                <p>
                  Mon engagement est simple : vous offrir une estimation juste, argumentée, fondée sur des données réelles et une connaissance intime du terrain. Pas de promesses gonflées pour décrocher un mandat. Pas d'estimation bâclée en deux clics. Un vrai travail d'analyse, personnalisé, gratuit et sans engagement.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div className={`flex-1 relative fade-in-right ${bio.isVisible ? "visible" : ""}`}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-[#B8975A]/10 rounded-[2rem]" />
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=700&fit=crop"
                  alt="Valentin Bourassin — Expert immobilier à La Réunion"
                  className="relative rounded-[2rem] w-full h-[400px] md:h-[550px] object-cover shadow-lg"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-[#1B3A4B] font-cormorant text-2xl font-medium">10+</div>
                  <div className="text-[#2C2C2C]/50 text-xs tracking-wide font-outfit">années d'expérience</div>
                </div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-[#1B3A4B] font-cormorant text-2xl font-medium">500+</div>
                  <div className="text-[#2C2C2C]/50 text-xs tracking-wide font-outfit">estimations réalisées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative bg-[#F8F6F2] w-full">
        <div ref={values.ref} className="container-main py-24 md:py-32">
          <div className={`text-center mb-16 fade-in-up ${values.isVisible ? "visible" : ""}`}>
            <div className="section-label mb-4">/mes valeurs</div>
            <h2 className="section-heading text-[36px] md:text-[48px] max-w-2xl mx-auto">
              Les principes qui guident chaque estimation
            </h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children ${values.isVisible ? "visible" : ""}`}>
            {valueCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="group card-hover bg-white rounded-2xl p-10 text-center border border-transparent hover:border-[#E8EDE6]"
                >
                  <div className="w-14 h-14 rounded-full bg-[#E8EDE6] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B8975A]/10 transition-colors">
                    <Icon size={24} className="text-[#B8975A]" />
                  </div>
                  <h3 className="text-[#1B3A4B] text-2xl font-cormorant font-medium mb-4 tracking-tight group-hover:text-[#B8975A] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#2C2C2C]/50 text-sm font-light leading-relaxed">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SNPI Badge Section */}
      <section className="relative bg-white w-full">
        <div ref={badge.ref} className="container-narrow py-20 md:py-28">
          <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 fade-in-up ${badge.isVisible ? "visible" : ""}`}>
            <div className="w-20 h-20 rounded-full bg-[#E8EDE6] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={36} className="text-[#1B3A4B]" />
            </div>
            <div>
              <h3 className="text-[#1B3A4B] text-2xl md:text-3xl font-cormorant font-medium tracking-tight mb-3">
                Membre du SNPI
              </h3>
              <p className="text-[#2C2C2C]/50 font-light leading-relaxed">
                Valentin Bourassin est membre du Syndicat National des Professionnels Immobiliers (SNPI), gage de sérieux, de formation continue et de respect d'un code de déontologie strict. Cette adhésion garantit à chaque client un accompagnement conforme aux standards les plus exigeants de la profession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#1B3A4B] w-full overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border border-white/5 translate-y-1/2 -translate-x-1/4" />

        <div ref={cta.ref} className={`container-main relative z-10 py-28 md:py-36 flex flex-col items-center text-center fade-in-up ${cta.isVisible ? "visible" : ""}`}>
          <h2 className="font-cormorant font-light text-white text-[36px] md:text-[52px] leading-[1.15] tracking-tight mb-6 max-w-3xl">
            Envie d'en discuter ? Je suis à votre écoute.
          </h2>
          <p className="text-white/40 font-light mb-12 text-lg max-w-xl">
            Que vous ayez un projet concret ou une simple question, n'hésitez pas à me contacter. La première conversation est toujours sans engagement.
          </p>
          <Link
            to="/contact"
            className="btn-gold px-10 py-5 text-base"
          >
            <span className="text-white/50 mr-1">/</span>me contacter
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};
