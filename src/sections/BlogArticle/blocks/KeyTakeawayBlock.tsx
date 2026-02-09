import { Lightbulb } from "lucide-react";

interface KeyTakeawayProps {
  title?: string;
  points: string[];
}

export const KeyTakeawayBlock = ({ title = "À retenir", points }: KeyTakeawayProps) => {
  return (
    <div
      className="my-10 rounded-xl p-6 md:p-7"
      style={{
        backgroundColor: 'rgba(232, 237, 230, 0.35)',
        borderLeft: '3px solid #B8975A',
      }}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(184, 151, 90, 0.1)' }}>
          <Lightbulb className="w-4 h-4" style={{ color: '#B8975A' }} strokeWidth={1.5} />
        </div>
        <span className="text-navy font-cormorant font-semibold text-lg tracking-tight">{title}</span>
      </div>
      <ul className="space-y-2.5">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5 text-neutral-600 text-base font-light leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgba(184, 151, 90, 0.5)' }} />
            <span dangerouslySetInnerHTML={{ __html: point }} />
          </li>
        ))}
      </ul>
    </div>
  );
};
