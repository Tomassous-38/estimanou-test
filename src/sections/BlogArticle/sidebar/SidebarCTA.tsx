import { ArrowRight } from "lucide-react";

export const SidebarCTA = () => {
  return (
    <div className="bg-navy rounded-xl p-6 text-center">
      <h3 className="text-white/90 font-cormorant font-light text-lg tracking-tight mb-2">
        Un expert terrain, pas un algorithme.
      </h3>
      <p className="text-white/60 text-sm font-light mb-5">
        Gratuit, personnalisé et sans engagement. Résultat sous 48h.
      </p>
      <a
        href="/estimer"
        className="group text-navy text-[12px] items-center bg-white inline-flex justify-center text-center px-6 py-3 rounded-full hover:bg-navy-100 transition-all duration-300 font-normal uppercase tracking-[0.12em]"
      >
        Me faire rappeler
        <ArrowRight className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
      </a>
    </div>
  );
};
