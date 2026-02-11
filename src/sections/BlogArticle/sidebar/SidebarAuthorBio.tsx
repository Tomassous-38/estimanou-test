import Image from "next/image";
import type { Author } from "@/types/blog";

interface SidebarAuthorBioProps {
  author: Author;
}

export const SidebarAuthorBio = ({ author }: SidebarAuthorBioProps) => {
  return (
    <div className="rounded-xl p-5" style={{ border: '1px solid rgba(27, 58, 75, 0.08)' }}>
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={author.avatar}
          alt={author.name}
          width={44}
          height={44}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm"
        />
        <div>
          <div className="text-navy font-medium text-sm">{author.name}</div>
          <div className="text-gold text-[11px] font-light">{author.role}</div>
        </div>
      </div>
      <p className="text-neutral-600 text-[14px] font-light leading-relaxed">
        {author.bio}
      </p>
    </div>
  );
};
