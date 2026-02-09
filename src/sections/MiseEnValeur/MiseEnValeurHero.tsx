import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowRight } from "lucide-react";

export const MiseEnValeurHero = () => {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] flex items-end overflow-hidden">
      {/* Background — first gallery image */}
      <img
        src="https://static.wixstatic.com/media/cda1c0_b60467e4f60c4ed5a3a7c5bbc4278b83~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_b60467e4f60c4ed5a3a7c5bbc4278b83~mv2.jpg"
        alt="Mise en valeur immobilière à La Réunion"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-[140px]">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
          ]}
          current="Mise en valeur"
          variant="dark"
        />

        <h1
          className="text-white font-cormorant font-light tracking-tight leading-[1.1] max-w-2xl mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Mise en valeur de{" "}
          <em className="italic font-normal text-white/80">votre bien</em>
        </h1>

        <p className="text-white/65 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
          La Jolie Villa Carrosse — À Saint-Gilles-les-Bains, sur la côte Ouest de l'île
        </p>

        <a
          href="/estimer"
          className="group inline-flex items-center gap-2 bg-white text-navy text-[13px] font-normal uppercase tracking-[0.12em] px-7 py-3.5 rounded-full hover:bg-navy-100 hover:shadow-lg transition-all duration-300"
        >
          Estimer mon bien
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
};
