interface ImageCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  width?: "full" | "wide" | "default";
}

export const ImageCaptionBlock = ({ src, alt, caption, width = "default" }: ImageCaptionProps) => {
  const widthClass = width === "full"
    ? "-mx-5 md:-mx-8"
    : width === "wide"
      ? "-mx-2 md:-mx-4"
      : "";

  return (
    <figure className={`my-8 ${widthClass}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover ${width === "full" ? "rounded-none md:rounded-xl" : "rounded-xl"}`}
        loading="lazy"
      />
      {caption && (
        <figcaption className="text-neutral-400 text-xs font-light italic mt-3 text-center px-5">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
