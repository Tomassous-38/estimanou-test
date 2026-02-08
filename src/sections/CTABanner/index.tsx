import { Link } from "react-router-dom";
import { ExploreButton } from "@/components/ExploreButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CTABanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-[#1B3A4B] w-full overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border border-white/5 translate-y-1/2 -translate-x-1/4" />

      <div ref={ref} className={`container-main relative z-10 py-28 md:py-36 flex flex-col items-center text-center fade-in-up ${isVisible ? "visible" : ""}`}>
        <h2 className="font-cormorant font-light text-white text-[36px] md:text-[52px] leading-[1.15] tracking-tight mb-6 max-w-3xl">
          Votre bien a une valeur. Nous vous aidons à la connaître.
        </h2>
        <p className="text-white/40 font-light mb-12 text-lg">
          Estimation gratuite, personnalisée, en moins de 48h.
        </p>
        <div className="explore-btn explore-btn-light">
          <svg className="rotate-text" viewBox="0 0 120 120">
            <defs>
              <path id="ctaCircle" d="M 60, 60 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
            </defs>
            <text>
              <textPath href="#ctaCircle" startOffset="0%">
                /estimer  /estimer  /estimer
              </textPath>
            </text>
          </svg>
          <Link to="/estimer" className="btn-icon" style={{ background: '#B8975A' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
