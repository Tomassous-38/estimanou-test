import { Phone, ArrowRight } from "lucide-react";

interface PropertyContactProps {
  cityName: string;
}

export const PropertyContact = ({ cityName }: PropertyContactProps) => {
  return (
    <div className="animate-fade-in-up bg-navy rounded-2xl p-6 text-center">
      <h3 className="text-white font-cormorant font-light text-xl tracking-tight mb-2">
        Intéressé par ce bien ?
      </h3>
      <p className="text-white/40 text-[13px] font-light mb-6">
        Notre expert à {cityName} vous répond sous 24h
      </p>
      <a
        href="/estimer"
        className="group w-full inline-flex items-center justify-center gap-2 bg-white text-navy text-[13px] font-normal uppercase tracking-[0.1em] px-6 py-3 rounded-full hover:bg-navy-100 hover:shadow-lg transition-all duration-300 mb-3"
      >
        Demander une visite
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
      </a>
      <div className="flex items-center justify-center gap-2 text-white/50 text-[12px] font-light">
        <Phone className="w-3 h-3" strokeWidth={1.5} />
        ou appelez-nous
      </div>
    </div>
  );
};
