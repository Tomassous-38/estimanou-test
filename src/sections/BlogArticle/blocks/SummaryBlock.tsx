import { BookOpen } from "lucide-react";

interface SummaryProps {
  title?: string;
  points: string[];
}

export const SummaryBlock = ({ title = "En résumé", points }: SummaryProps) => {
  return (
    <div
      className="my-10 rounded-xl p-6 md:p-7"
      style={{
        background: "linear-gradient(135deg, rgba(27, 58, 75, 0.03) 0%, rgba(150, 121, 61, 0.04) 100%)",
        border: "1px solid rgba(27, 58, 75, 0.08)",
      }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
          <BookOpen className="w-4 h-4 text-navy/60" strokeWidth={1.5} />
        </div>
        <h4 className="text-navy font-cormorant font-semibold text-lg tracking-tight">
          {title}
        </h4>
      </div>
      <ul className="space-y-2.5">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <span className="text-gold text-[11px] font-semibold">{i + 1}</span>
            </span>
            <span className="text-neutral-700 text-[14px] font-light leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
