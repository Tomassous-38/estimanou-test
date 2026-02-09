import { Search } from "lucide-react";

interface PropertyEmptyStateProps {
  onReset: () => void;
}

export const PropertyEmptyState = ({ onReset }: PropertyEmptyStateProps) => {
  return (
    <div className="max-w-[1080px] mx-auto px-5 md:px-8 py-20">
      <div className="animate-fade-in-up flex flex-col items-center text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "rgba(27, 58, 75, 0.06)" }}
        >
          <Search className="w-6 h-6 text-navy/30" strokeWidth={1.5} />
        </div>
        <h3 className="text-navy font-cormorant font-light text-xl tracking-tight mb-2">
          Aucun bien ne correspond
        </h3>
        <p className="text-neutral-400 text-sm font-light mb-8 max-w-sm">
          Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
        </p>
        <button
          onClick={onReset}
          className="text-navy text-[13px] font-normal tracking-wide px-6 py-3 rounded-full transition-all duration-300 hover:bg-navy hover:text-white"
          style={{ border: "1px solid rgba(27, 58, 75, 0.12)" }}
        >
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
};
