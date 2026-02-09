import { Link } from "react-router-dom";
import type { Property } from "@/types/property";

interface PropertyDescriptionProps {
  property: Property;
}

export const PropertyDescription = ({ property }: PropertyDescriptionProps) => {
  return (
    <div className="animate-fade-in-up mb-10">
      <h2 className="text-navy font-cormorant font-light text-xl tracking-tight mb-4">
        Description
      </h2>
      <div className="text-neutral-600 text-[15px] font-light leading-[1.8]">
        {property.description}
      </div>

      {/* Estimation range */}
      <div
        className="mt-6 rounded-xl p-5"
        style={{ backgroundColor: "rgba(184, 151, 90, 0.06)", border: "1px solid rgba(184, 151, 90, 0.15)" }}
      >
        <div className="text-gold text-[11px] font-medium uppercase tracking-wider mb-1">
          Estimation Estimanou
        </div>
        <div className="text-navy font-cormorant font-semibold text-xl tracking-tight">
          {property.estimationRange}
        </div>
        <div className="text-neutral-400 text-[12px] font-light mt-1">
          Fourchette estimée par nos experts locaux —{" "}
          <Link
            to={`/estimation-immobiliere/${property.citySlug}`}
            className="text-gold underline underline-offset-2 decoration-gold/30 hover:decoration-gold transition-all"
          >
            En savoir plus sur l'estimation à {property.cityName}
          </Link>
        </div>
      </div>
    </div>
  );
};
