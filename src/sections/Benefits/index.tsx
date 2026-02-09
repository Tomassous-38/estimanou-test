import { MapPin, Gift, User } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Expertise locale, pas nationale",
      description: "10 ans sur le terrain réunionnais. Chaque quartier a ses codes, ses tendances, ses exceptions. Les connaître, c'est la base pour estimer un bien correctement.",
      number: "01"
    },
    {
      icon: Gift,
      title: "Gratuit, vraiment",
      description: "Notre estimation est un vrai service, pas un prétexte pour vous démarcher. Vous restez libre de vos choix, sans aucune obligation.",
      number: "02"
    },
    {
      icon: User,
      title: "Un interlocuteur, pas un chatbot",
      description: "Valentin analyse personnellement chaque bien. Pas d'algorithme, pas de stagiaire. Un expert dédié qui connaît votre quartier.",
      number: "03"
    }
  ];

  return (
    <section className="relative bg-white w-full">
      <div className="relative flex flex-col max-w-[1080px] text-center mx-auto px-5 py-20 md:px-8 md:py-28">
        <div className="animate-fade-in-up flex flex-col items-center">
          <span className="pill-label">pourquoi Estimanou</span>
          <h2 className="section-title mb-4 mx-auto">
            Ce qui nous{" "}
            <em className="font-cormorant italic font-normal text-navy/70">différencie</em>{" "}
            d'une estimation en ligne
          </h2>
          <p className="text-neutral-500 text-[15px] font-light mb-14 md:mb-20 max-w-md">
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="animate-fade-in-up text-center p-8 md:p-10 relative"
            >
              {/* Vertical divider between items on desktop */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-navy/8"></div>
              )}
              <div className="number-badge">
                {benefit.number}
              </div>
              <h3 className="text-navy text-lg md:text-xl font-cormorant font-semibold mb-3 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-neutral-500 leading-[1.7] font-light text-[15px] max-w-[260px] mx-auto">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
