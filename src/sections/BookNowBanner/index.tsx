import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const BookNowBanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative bg-[#1B3A4B] w-full overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8975A]/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className={`container-main relative z-10 py-20 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 fade-in-up ${isVisible ? "visible" : ""}`}>
        <div className="max-w-xl text-center md:text-left">
          <h2 className="font-cormorant font-light text-white text-3xl md:text-4xl leading-[1.2] tracking-tight mb-4">
            Estimez maintenant et prenez les bonnes décisions
          </h2>
          <p className="text-white/50 font-light">
            Une estimation fiable est le point de départ de tout projet immobilier.
          </p>
        </div>
        <Link
          to="/estimer"
          className="btn-gold px-10 py-5 text-base whitespace-nowrap"
        >
          <span className="text-white/60 mr-1">/</span>Estimer gratuitement
        </Link>
      </div>
    </section>
  );
};
