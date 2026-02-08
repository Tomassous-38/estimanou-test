import { X } from "lucide-react";
import { useState } from "react";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#E8EDE6] w-full">
      <div className="container-main flex items-center justify-center py-2.5">
        <p className="text-[#1B3A4B] text-xs font-outfit tracking-wide font-light">
          Estimation gratuite et sans engagement — Résultat en 2 minutes
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 text-[#1B3A4B]/50 hover:text-[#1B3A4B] transition-colors"
          aria-label="Fermer"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
