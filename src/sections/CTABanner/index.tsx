import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=800&fit=crop"
          alt="Plage de La Réunion"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1200}
          height={600}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy/80" />
      </div>

      <div className="relative flex flex-col items-center justify-center max-w-[900px] text-center mx-auto py-24 px-5 md:py-36 md:px-8">
        <h2 className="animate-fade-in-up text-white font-cormorant font-light tracking-tight mb-5 max-w-2xl" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: '1.15' }}>
          Mal estimer, c'est{" "}
          <em className="font-cormorant italic font-normal text-white/80">perdre</em>{" "}
          de l'argent.
        </h2>

        <p className="animate-fade-in-up text-white/60 text-[15px] font-light mb-10 max-w-md leading-relaxed">
          En 2025 à La Réunion, <strong className="text-white/80 font-medium">7 vendeurs sur 10</strong> doivent revoir leur prix à la baisse après mise en vente. Ne faites pas partie de cette statistique.
        </p>

        <Link
          href="/estimer"
          className="animate-fade-in-up group text-navy text-[13px] items-center bg-white inline-flex justify-center text-center px-10 py-4 md:px-12 md:py-5 rounded-full hover:bg-white/90 transition-all duration-500 hover:shadow-xl uppercase tracking-[0.2em] font-normal"
        >
          Estimer gratuitement
          <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
        </Link>

        <div className="animate-fade-in-up flex items-center gap-6 mt-12 text-white/45 text-[12px] font-light tracking-wide">
          <span>✓ 100% gratuit</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>✓ Résultat sous 48h</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>✓ Sans engagement</span>
        </div>
      </div>
    </section>
  );
};
