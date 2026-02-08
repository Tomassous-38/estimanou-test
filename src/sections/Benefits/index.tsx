import { MapPin, Shield, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: MapPin,
      title: "Expertise locale",
      text: "10 ans de connaissance du marché réunionnais. Chaque estimation s'appuie sur les transactions réelles de votre secteur.",
    },
    {
      icon: Shield,
      title: "Gratuit & sans engagement",
      text: "Votre estimation ne vous coûte rien et ne vous engage à rien. C'est un service, pas un piège commercial.",
    },
    {
      icon: User,
      title: "Un interlocuteur unique",
      text: "Pas d'algorithme anonyme. Valentin analyse personnellement chaque bien et vous restitue son évaluation.",
    },
  ];

  return (
    <section className="relative bg-white w-full">
      <div ref={ref} className="container-main py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left content */}
          <div className={`flex-1 fade-in-left ${isVisible ? "visible" : ""}`}>
            <div className="section-label mb-4">/pourquoi estimanou</div>
            <h2 className="section-heading text-[36px] md:text-[44px] mb-14">
              /estimanou vous garantit une estimation fiable et personnalisée
            </h2>

            <div className="space-y-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#E8EDE6] flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#B8975A]" />
                    </div>
                    <div>
                      <h3 className="text-[#1B3A4B] text-xl font-cormorant font-medium mb-2 tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-[#2C2C2C]/50 text-sm font-light leading-relaxed mb-3">
                        {benefit.text}
                      </p>
                      <Link to="/estimer" className="text-[#B8975A] text-xs font-outfit uppercase tracking-[0.15em] font-medium hover:text-[#1B3A4B] transition-colors">
                        /en savoir plus
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right image (overlapping offset style) */}
          <div className={`flex-1 relative hidden lg:block fade-in-right ${isVisible ? "visible" : ""}`}>
            <div className="relative h-full flex items-center">
              <div className="absolute top-8 right-0 w-[85%] h-[80%] bg-[#E8EDE6] rounded-[2rem]" />
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=650&fit=crop"
                alt="Intérieur tropical"
                className="relative rounded-[2rem] w-[90%] h-[450px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
