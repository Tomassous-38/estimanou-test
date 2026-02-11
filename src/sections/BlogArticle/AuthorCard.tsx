import Image from "next/image";
import type { Author } from "@/types/blog";

interface AuthorCardProps {
  author: Author;
}

export const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <div
      className="flex items-start gap-5 rounded-xl p-6"
      style={{ backgroundColor: 'rgba(232, 237, 230, 0.2)' }}
    >
      <Image
        src={author.avatar}
        alt={author.name}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-white shadow-sm"
      />
      <div>
        <div className="text-neutral-500 text-[11px] uppercase tracking-[0.15em] font-light mb-1">
          À propos de l'auteur
        </div>
        <h3 className="text-navy font-cormorant font-semibold text-lg tracking-tight mb-0.5">
          {author.name}
        </h3>
        <div className="text-gold text-xs font-light mb-3">{author.role}</div>
        <p className="text-neutral-600 text-[15px] font-light leading-relaxed">
          {author.bio}
        </p>
      </div>
    </div>
  );
};
