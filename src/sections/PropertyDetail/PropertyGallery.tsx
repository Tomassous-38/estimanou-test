'use client';

import { useState } from "react";
import Image from "next/image";
import type { PropertyImage } from "@/types/property";

interface PropertyGalleryProps {
  images: PropertyImage[];
  title: string;
}

export const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="animate-fade-in-up">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-3">
        <Image
          src={images[activeIndex]?.src || ""}
          alt={images[activeIndex]?.alt || title}
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover transition-opacity duration-500"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-300 ${
                i === activeIndex
                  ? "ring-2 ring-gold ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={225}
                sizes="20vw"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
