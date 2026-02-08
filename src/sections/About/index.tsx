import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="apropos" className="relative bg-[#E8EDE6] w-full">
      <div ref={ref} className="container-main py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Left */}
          <div className={`flex-1 fade-in-left ${isVisible ? "visible" : ""}`}>
            <div className="section-label mb-4">/à propos d'estimanou</div>
            <h2 className="section-heading text-[36px] md:text-[48px] mb-8">
              L'estimation immobilière, c'est un métier à part entière
            </h2>
            <div className="space-y-6 text-[#2C2C2C]/60 leading-relaxed font-light">
              <p>
                Depuis plus de 10 ans, j'accompagne les propriétaires réunionnais dans l'évaluation de leur patrimoine. Ancien chef de vente dans la rénovation écologique, investisseur moi-même, je connais chaque quartier du secteur Ouest comme ma poche.
              </p>
              <p>
                Estimer un bien, ce n'est pas entrer des chiffres dans un algorithme. C'est comprendre un quartier, une rue, une orientation, un potentiel. C'est cette expertise terrain que je mets à votre service — gratuitement et sans engagement.
              </p>
            </div>
            <Link
              to="/a-propos"
              className="btn-outline mt-10"
            >
              <span className="opacity-50 mr-1">/</span>en savoir plus
            </Link>
          </div>

          {/* Image Right */}
          <div className={`flex-1 relative fade-in-right ${isVisible ? "visible" : ""}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#B8975A]/10 rounded-[2rem]" />
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=700&fit=crop"
                alt="Réunion Island real estate"
                className="relative rounded-[2rem] w-full h-[400px] md:h-[500px] object-cover shadow-lg"
              />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-[#1B3A4B] font-cormorant text-2xl font-medium">10+</div>
                <div className="text-[#2C2C2C]/50 text-xs tracking-wide">années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
