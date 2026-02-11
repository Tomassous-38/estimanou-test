import { Play } from "lucide-react";

interface VideoEmbedProps {
  url: string;
  caption?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
}

function getEmbedUrl(url: string): string | null {
  // YouTube
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?rel=0`;

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?dnt=1`;

  return null;
}

const aspectClasses = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
};

export const VideoEmbedBlock = ({ url, caption, aspectRatio = "16:9" }: VideoEmbedProps) => {
  const embedUrl = getEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className="my-10 rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
        <Play className="w-8 h-8 mx-auto mb-3 text-neutral-400" strokeWidth={1.5} />
        <p className="text-neutral-500 text-sm font-light">
          Vidéo non disponible —{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-navy underline">
            voir sur le site source
          </a>
        </p>
      </div>
    );
  }

  return (
    <figure className="my-10">
      <div className={`${aspectClasses[aspectRatio]} relative rounded-xl overflow-hidden bg-neutral-100`}>
        <iframe
          src={embedUrl}
          title={caption || "Vidéo intégrée"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-neutral-500 text-[13px] font-light italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
