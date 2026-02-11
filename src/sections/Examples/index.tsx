'use client';

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Examples = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const examples = [
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      type: "Maison T5",
      location: "Saint-Gilles",
      estimation: "420 000 € — 460 000 €",
      surface: "180 m²",
      detail: "4 chambres · Piscine · Vue mer"
    },
    {
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
      type: "Appartement T3",
      location: "Saint-Leu",
      estimation: "195 000 € — 215 000 €",
      surface: "72 m²",
      detail: "2 chambres · Balcon · Résidence récente"
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop",
      type: "Maison T4",
      location: "Étang-Salé",
      estimation: "310 000 € — 340 000 €",
      surface: "120 m²",
      detail: "3 chambres · Jardin 400m² · Quartier calme"
    }
  ];

  return (
    <section className="relative bg-sage/30 w-full">
      <div className="relative flex flex-col max-w-[1080px] mx-auto px-5 py-20 md:px-8 md:py-28">
        <div className="animate-fade-in-up flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div className="text-center md:text-left">
            <span className="pill-label">estimations récentes</span>
            <h2 className="section-title">
              Nos dernières{" "}
              <em className="font-cormorant italic font-normal text-navy/70">estimations</em>{" "}
              réalisées
            </h2>
            <p className="text-neutral-500 text-[15px] font-light mt-3 max-w-md">
              Chaque estimation est unique. Voici un aperçu de biens récemment évalués dans nos secteurs.
            </p>
          </div>
          <Link href="/estimer" className="hidden md:inline-flex items-center gap-2 text-navy/60 text-[12px] tracking-wide border border-navy/12 rounded-full px-5 py-2 hover:bg-navy hover:text-white transition-all duration-300 flex-shrink-0 mt-4 md:mt-0">
            voir tout
            <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Desktop: grid — Mobile: carousel */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 w-full">
          {examples.map((example, index) => (
            <div key={index} className="animate-fade-in-up group cursor-pointer bg-white rounded-2xl overflow-hidden card-hover">
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image src={example.image} alt={example.type} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={600} height={400} sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy text-[11px] font-medium px-2.5 py-1 rounded-md">{example.surface}</div>
              </div>
              <div className="p-5 text-left">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-navy text-base font-cormorant font-semibold tracking-tight">{example.type}</h3>
                  <span className="text-neutral-500 text-[13px] font-light">{example.location}</span>
                </div>
                <p className="text-neutral-500 text-[13px] font-light mb-3">{example.detail}</p>
                <div className="text-gold text-lg font-cormorant font-semibold tracking-tight">{example.estimation}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mx-5 px-5">
            {examples.map((example, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden card-hover flex-shrink-0 snap-start" style={{ width: "80vw", maxWidth: "320px" }}>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image src={example.image} alt={example.type} className="w-full h-full object-cover" loading="lazy" width={600} height={400} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy text-[11px] font-medium px-2.5 py-1 rounded-md">{example.surface}</div>
                </div>
                <div className="p-5 text-left">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-navy text-base font-cormorant font-semibold tracking-tight">{example.type}</h3>
                    <span className="text-neutral-500 text-[13px] font-light">{example.location}</span>
                  </div>
                  <p className="text-neutral-500 text-[13px] font-light mb-3">{example.detail}</p>
                  <div className="text-gold text-lg font-cormorant font-semibold tracking-tight">{example.estimation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
