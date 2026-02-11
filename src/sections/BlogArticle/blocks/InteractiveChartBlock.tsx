"use client";

import { useState } from "react";
import { BarChart3 } from "lucide-react";

interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

interface InteractiveChartProps {
  title?: string;
  data: ChartDataPoint[];
  unit?: string;
  source?: string;
  variant?: "bar" | "horizontal-bar";
}

export const InteractiveChartBlock = ({
  title,
  data,
  unit = "",
  source,
  variant = "bar",
}: InteractiveChartProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxValue = Math.max(...data.map((d) => d.value));

  const defaultColors = [
    "#1B3A4B", "#96793D", "#3B82F6", "#059669", "#D97706",
    "#8B5CF6", "#EC4899", "#F97316", "#06B6D4", "#84CC16",
  ];

  if (variant === "horizontal-bar") {
    return (
      <div className="my-10 rounded-xl border border-neutral-200/60 bg-white p-6 md:p-8">
        {title && (
          <div className="flex items-center gap-2.5 mb-6">
            <BarChart3 className="w-4 h-4 text-navy/40" strokeWidth={1.5} />
            <h4 className="text-navy text-base font-cormorant font-semibold tracking-tight">
              {title}
            </h4>
          </div>
        )}
        <div className="space-y-4">
          {data.map((item, i) => {
            const barColor = item.color || defaultColors[i % defaultColors.length];
            const pct = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={i}
                className="group cursor-default"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-navy text-[13px] font-light">{item.label}</span>
                  <span
                    className="text-sm font-medium tabular-nums transition-colors duration-200"
                    style={{ color: isHovered ? barColor : "#525252" }}
                  >
                    {item.value.toLocaleString("fr-FR")}
                    {unit && <span className="text-[11px] font-light ml-0.5">{unit}</span>}
                  </span>
                </div>
                <div className="h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: barColor,
                      opacity: hoveredIndex === null || isHovered ? 1 : 0.35,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {source && (
          <p className="mt-5 text-neutral-400 text-[11px] font-light">Source : {source}</p>
        )}
      </div>
    );
  }

  // Vertical bar chart
  return (
    <div className="my-10 rounded-xl border border-neutral-200/60 bg-white p-6 md:p-8">
      {title && (
        <div className="flex items-center gap-2.5 mb-6">
          <BarChart3 className="w-4 h-4 text-navy/40" strokeWidth={1.5} />
          <h4 className="text-navy text-base font-cormorant font-semibold tracking-tight">
            {title}
          </h4>
        </div>
      )}
      <div className="flex items-end justify-between gap-2 h-52 md:h-64">
        {data.map((item, i) => {
          const barColor = item.color || defaultColors[i % defaultColors.length];
          const pct = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
          const isHovered = hoveredIndex === i;
          return (
            <div
              key={i}
              className="flex-1 flex flex-col items-center justify-end h-full cursor-default"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Value label */}
              <span
                className="text-[11px] md:text-xs font-medium tabular-nums mb-1.5 transition-opacity duration-200"
                style={{
                  color: barColor,
                  opacity: isHovered || hoveredIndex === null ? 1 : 0.35,
                }}
              >
                {item.value.toLocaleString("fr-FR")}{unit}
              </span>
              {/* Bar */}
              <div
                className="w-full max-w-[48px] rounded-t-md transition-all duration-500 ease-out"
                style={{
                  height: `${Math.max(pct, 4)}%`,
                  backgroundColor: barColor,
                  opacity: hoveredIndex === null || isHovered ? 1 : 0.35,
                }}
              />
              {/* Label */}
              <span
                className="mt-2 text-[10px] md:text-[11px] text-neutral-500 font-light text-center leading-tight"
                style={{ maxWidth: "60px" }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      {source && (
        <p className="mt-5 text-neutral-400 text-[11px] font-light">Source : {source}</p>
      )}
    </div>
  );
};
