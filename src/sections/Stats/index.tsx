import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({ end, suffix, label, isVisible }: { end: number; suffix: string; label: string; isVisible: boolean }) => {
  const count = useCountUp(end, 2000, isVisible);
  return (
    <div className="text-center">
      <div className="text-[#1B3A4B] text-5xl md:text-7xl font-cormorant font-light tracking-tight mb-3">
        {count}{suffix}
      </div>
      <div className="text-[#2C2C2C]/40 text-xs uppercase tracking-[0.15em] font-outfit font-medium">
        {label}
      </div>
    </div>
  );
};

export const Stats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-white w-full">
      <div ref={ref} className="container-main py-24 md:py-32">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="section-label mb-4">/les chiffres</div>
          <h2 className="section-heading text-[36px] md:text-[48px] max-w-2xl mx-auto mb-4">
            /estimanou en quelques chiffres depuis sa création
          </h2>
          <p className="text-[#2C2C2C]/50 font-light max-w-lg mx-auto">
            Depuis 2015, Valentin accompagne les propriétaires réunionnais avec rigueur et passion.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto fade-in-up ${isVisible ? "visible" : ""}`}>
          <StatItem end={500} suffix="+" label="Estimations réalisées" isVisible={isVisible} />
          <StatItem end={10} suffix="+" label="Années d'expérience" isVisible={isVisible} />
          <StatItem end={15} suffix="" label="Communes couvertes" isVisible={isVisible} />
          <StatItem end={48} suffix="h" label="Délai moyen de réponse" isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};
