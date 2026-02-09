import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";
import type { BlogArticle } from "@/types/blog";

interface ShareButtonsProps {
  article: BlogArticle;
}

export const ShareButtons = ({ article }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const url = `https://estimanou.re/blog/${article.slug}`;
  const title = article.title;

  const shareLinks = [
    {
      label: "Facebook",
      Icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: "Twitter",
      Icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      label: "LinkedIn",
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-neutral-400 text-[11px] uppercase tracking-[0.15em] font-light">
        Partager
      </span>
      <div className="flex items-center gap-2.5">
        {shareLinks.map(({ label, Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Partager sur ${label}`}
            className="w-9 h-9 rounded-full flex items-center justify-center text-navy/30 hover:text-navy hover:bg-sage/30 transition-all duration-300"
            style={{ border: '1px solid rgba(27, 58, 75, 0.08)' }}
          >
            <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          aria-label="Copier le lien"
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            copied
              ? "text-gold bg-gold/10"
              : "text-navy/30 hover:text-navy hover:bg-sage/30"
          }`}
          style={{ border: copied ? '1px solid rgba(184, 151, 90, 0.2)' : '1px solid rgba(27, 58, 75, 0.08)' }}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" strokeWidth={2} />
          ) : (
            <Link2 className="w-3.5 h-3.5" strokeWidth={1.5} />
          )}
        </button>
        {copied && (
          <span className="text-gold text-[11px] font-light animate-fade-in-up visible">
            Copié !
          </span>
        )}
      </div>
    </div>
  );
};
