import { Info, AlertTriangle, CheckCircle2 } from "lucide-react";

interface InfoBoxProps {
  variant: "info" | "warning" | "tip";
  title?: string;
  content: string;
}

const variants = {
  info: {
    bg: "rgba(219, 234, 254, 0.4)",
    borderColor: "rgba(59, 130, 246, 0.15)",
    iconColor: "#3B82F6",
    titleColor: "#1E40AF",
    Icon: Info,
    defaultTitle: "Bon à savoir",
  },
  warning: {
    bg: "rgba(254, 243, 199, 0.45)",
    borderColor: "rgba(217, 119, 6, 0.12)",
    iconColor: "#D97706",
    titleColor: "#92400E",
    Icon: AlertTriangle,
    defaultTitle: "Attention",
  },
  tip: {
    bg: "rgba(209, 250, 229, 0.35)",
    borderColor: "rgba(5, 150, 105, 0.12)",
    iconColor: "#059669",
    titleColor: "#065F46",
    Icon: CheckCircle2,
    defaultTitle: "Conseil",
  },
};

export const InfoBoxBlock = ({ variant, title, content }: InfoBoxProps) => {
  const v = variants[variant];
  const displayTitle = title || v.defaultTitle;

  return (
    <div
      className="my-10 rounded-xl p-5 md:p-6"
      style={{ backgroundColor: v.bg, border: `1px solid ${v.borderColor}` }}
    >
      <div className="flex items-start gap-3.5">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: `${v.iconColor}10` }}
        >
          <v.Icon className="w-4 h-4" style={{ color: v.iconColor }} strokeWidth={1.5} />
        </div>
        <div>
          <div className="font-medium text-sm mb-1.5" style={{ color: v.titleColor }}>
            {displayTitle}
          </div>
          <div className="text-neutral-600 text-[15px] font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};
