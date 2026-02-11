import Image from "next/image";
import type { CityLanding } from "@/types/city";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowRight } from "lucide-react";

interface CityHeroProps {
  city: CityLanding;
}

export const CityHero = ({ city }: CityHeroProps) => {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src={city.heroImage}
        alt={`Estimation immobilière à ${city.name}`}
        className="absolute inset-0 w-full h-full object-cover"
        priority
        width={1200}
        height={675}
        sizes="100vw"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />

      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-[140px]">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Estimation", href: "/estimer" },
          ]}
          current={city.name}
          variant="dark"
        />

        <h1
          className="text-white font-cormorant font-light tracking-tight leading-[1.1] max-w-2xl mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Estimation immobilière à{" "}
          <em className="italic font-normal text-white/80">{city.name}</em>
        </h1>

        <p className="text-white/65 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
          {city.tagline}
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
