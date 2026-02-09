import { Camera, Video, Sparkles, Home } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photos professionnelles",
    description: "Des clichés soignés qui mettent en lumière chaque espace et chaque détail de votre bien.",
  },
  {
    icon: Video,
    title: "Vidéo immersive",
    description: "Une vidéo professionnelle pour faire vivre votre bien et capter l'attention des acheteurs.",
  },
  {
    icon: Sparkles,
    title: "Home staging virtuel",
    description: "Des recommandations pour optimiser la présentation et maximiser l'attractivité de votre propriété.",
  },
  {
    icon: Home,
    title: "Annonce optimisée",
    description: "Un descriptif accrocheur et des visuels percutants pour une diffusion maximale sur les plateformes.",
  },
];

export const MiseEnValeurIntro = () => {
  return (
    <section className="relative bg-white w-full">
      <div className="max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="pill-label">nos services</span>
          <h2 className="section-title mb-4">
            Sublimer votre bien pour{" "}
            <em className="font-cormorant italic font-normal text-navy/70">mieux vendre</em>
          </h2>
          <p className="text-neutral-600 text-base font-light leading-relaxed">
            La première impression compte. Nous offrons un service complet de mise en valeur pour présenter votre bien sous son meilleur jour et attirer les acheteurs qualifiés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="animate-fade-in-up card-hover bg-sage/30 rounded-2xl p-8"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(184, 151, 90, 0.15)" }}
              >
                <service.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-navy font-cormorant text-xl font-light tracking-tight mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-600 text-[15px] font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
