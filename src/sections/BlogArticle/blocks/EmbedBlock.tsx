import { ExternalLink } from "lucide-react";

interface EmbedProps {
  url: string;
  height?: number;
  caption?: string;
  aspectRatio?: "16:9" | "4:3" | "auto";
}

const ALLOWED_DOMAINS = [
  "google.com",
  "google.fr",
  "maps.google.com",
  "datastudio.google.com",
  "lookerstudio.google.com",
  "public.tableau.com",
  "airtable.com",
  "notion.site",
  "figma.com",
  "canva.com",
  "typeform.com",
  "tally.so",
  "loom.com",
  "miro.com",
  "codepen.io",
];

function isDomainAllowed(url: string): boolean {
  try {
    const hostname = new URL(url).hostname;
    return ALLOWED_DOMAINS.some(
      (d) => hostname === d || hostname.endsWith(`.${d}`)
    );
  } catch {
    return false;
  }
}

export const EmbedBlock = ({ url, height = 450, caption, aspectRatio }: EmbedProps) => {
  if (!isDomainAllowed(url)) {
    return (
      <div className="my-10 rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
        <ExternalLink className="w-6 h-6 mx-auto mb-3 text-neutral-400" strokeWidth={1.5} />
        <p className="text-neutral-600 text-sm font-light mb-2">Contenu externe</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy text-sm underline hover:text-gold transition-colors"
        >
          Voir sur le site source →
        </a>
      </div>
    );
  }

  const aspectClass = aspectRatio === "16:9" ? "aspect-video" : aspectRatio === "4:3" ? "aspect-[4/3]" : "";

  return (
    <figure className="my-10">
      <div
        className={`rounded-xl overflow-hidden border border-neutral-200/60 bg-white ${aspectClass}`}
        style={!aspectClass ? { height } : undefined}
      >
        <iframe
          src={url}
          title={caption || "Contenu intégré"}
          loading="lazy"
          className={`w-full ${aspectClass ? "absolute inset-0 h-full" : "h-full"}`}
          style={{ border: 0 }}
          sandbox="allow-scripts allow-same-origin allow-popups"
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
