import { ThumbsUp, ThumbsDown } from "lucide-react";

interface ProsConsProps {
  title?: string;
  pros: string[];
  cons: string[];
}

export const ProsConsBlock = ({ title, pros, cons }: ProsConsProps) => {
  return (
    <div className="my-10">
      {title && (
        <h4 className="text-navy text-base font-cormorant font-semibold tracking-tight mb-4">
          {title}
        </h4>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Pros */}
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "rgba(209, 250, 229, 0.3)", border: "1px solid rgba(5, 150, 105, 0.1)" }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
              <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" strokeWidth={1.5} />
            </div>
            <span className="text-emerald-800 text-sm font-medium">Avantages</span>
          </div>
          <ul className="space-y-2.5">
            {pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-neutral-700 text-[14px] font-light leading-relaxed">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: "rgba(254, 226, 226, 0.3)", border: "1px solid rgba(239, 68, 68, 0.1)" }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
              <ThumbsDown className="w-3.5 h-3.5 text-red-500" strokeWidth={1.5} />
            </div>
            <span className="text-red-800 text-sm font-medium">Inconvénients</span>
          </div>
          <ul className="space-y-2.5">
            {cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                <span className="text-neutral-700 text-[14px] font-light leading-relaxed">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
