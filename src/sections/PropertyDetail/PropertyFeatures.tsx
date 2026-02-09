import { CheckCircle2 } from "lucide-react";

interface PropertyFeaturesProps {
  features: string[];
}

export const PropertyFeatures = ({ features }: PropertyFeaturesProps) => {
  if (features.length === 0) return null;

  return (
    <div className="animate-fade-in-up mb-10">
      <h2 className="text-navy font-cormorant font-light text-xl tracking-tight mb-4">
        Caractéristiques
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={1.5} />
            <span className="text-neutral-600 text-[14px] font-light">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
