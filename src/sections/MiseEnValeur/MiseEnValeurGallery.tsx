'use client';

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://static.wixstatic.com/media/cda1c0_b60467e4f60c4ed5a3a7c5bbc4278b83~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_b60467e4f60c4ed5a3a7c5bbc4278b83~mv2.jpg",
    alt: "Villa Carrosse — Jardin tropical",
  },
  {
    src: "https://static.wixstatic.com/media/cda1c0_a9c2029a68264633b1c9e7025250d745~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_a9c2029a68264633b1c9e7025250d745~mv2.jpg",
    alt: "Villa Carrosse — Salon",
  },
  {
    src: "https://static.wixstatic.com/media/cda1c0_fd25c95d3e7d4303b3b96a5d4e38d1d9~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_fd25c95d3e7d4303b3b96a5d4e38d1d9~mv2.jpg",
    alt: "Villa Carrosse — Intérieur",
  },
  {
    src: "https://static.wixstatic.com/media/cda1c0_f322901dd11e43da9ee230a681ef7e15~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_f322901dd11e43da9ee230a681ef7e15~mv2.jpg",
    alt: "Villa Carrosse — Extérieur",
  },
  {
    src: "https://static.wixstatic.com/media/cda1c0_93068053cddb418ab8263aeb9861280c~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_93068053cddb418ab8263aeb9861280c~mv2.jpg",
    alt: "Villa Carrosse — Chambre",
  },
  {
    src: "https://static.wixstatic.com/media/cda1c0_8f8b1c54ae124775b14fd14d50988ce9~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_8f8b1c54ae124775b14fd14d50988ce9~mv2.jpg",
    alt: "Villa Carrosse — Terrasse",
  },
  {
    src: "https://static.wixstatic.com/media/cda1c0_1c5c03ca963a4dc8a4ccc91a37f7bde8~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_1c5c03ca963a4dc8a4ccc91a37f7bde8~mv2.jpg",
    alt: "Villa Carrosse — Piscine",
  },
  {
    src: "https://static.wixstatic.com/media/cda1c0_e01821c332a8451c88f8b68fbdb69ba9~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_e01821c332a8451c88f8b68fbdb69ba9~mv2.jpg",
    alt: "Villa Carrosse — Vue",
  },
  {
    src: "https://static.wixstatic.com/media/cda1c0_13a85821ca0a42da9e22efc5cd12fc0c~mv2.jpg/v1/fill/w_800,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cda1c0_13a85821ca0a42da9e22efc5cd12fc0c~mv2.jpg",
    alt: "Villa Carrosse — Bar",
  },
];

export const MiseEnValeurGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section className="relative bg-sage/40 w-full">
      <div className="max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-24">
        <div className="text-center mb-10">
          <span className="pill-label">en image</span>
          <h2 className="section-title">
            La villa en{" "}
            <em className="font-cormorant italic font-normal text-navy/70">détail</em>
          </h2>
        </div>

        {/* Grid gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="animate-fade-in-up group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
            aria-label="Suivant"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
          </button>

          <Image
            src={galleryImages[lightboxIndex].src.replace(/w_800,h_600/, "w_1400,h_1050")}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-light">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};
