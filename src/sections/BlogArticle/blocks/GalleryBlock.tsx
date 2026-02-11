import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3;
  caption?: string;
}

export const GalleryBlock = ({ images, columns = 2, caption }: GalleryProps) => {
  const gridClass = columns === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2";

  return (
    <figure className="my-10">
      <div className={`grid ${gridClass} gap-3`}>
        {images.map((img, i) => (
          <div key={i} className="relative group overflow-hidden rounded-lg bg-neutral-100">
            <div className="aspect-[4/3] relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={columns === 3 ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 640px) 100vw, 50vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {img.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-[12px] font-light">{img.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-neutral-500 text-[13px] font-light italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
