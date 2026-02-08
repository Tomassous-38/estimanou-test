import { Home } from "lucide-react";

type ExploreButtonProps = {
  text: string;
  light?: boolean;
  size?: "sm" | "md";
  onClick?: () => void;
};

export const ExploreButton = ({ text, light = false, size = "md", onClick }: ExploreButtonProps) => {
  const dimension = size === "sm" ? 100 : 120;
  const iconSize = size === "sm" ? 40 : 48;
  const radius = size === "sm" ? 34 : 42;

  const chars = text.split("");
  const angleStep = 360 / chars.length;

  return (
    <div
      className={`explore-btn ${light ? "explore-btn-light" : ""}`}
      style={{ width: dimension, height: dimension }}
      onClick={onClick}
    >
      <svg className="rotate-text" viewBox={`0 0 ${dimension} ${dimension}`}>
        <defs>
          <path
            id={`circlePath-${text.replace(/\s/g, "")}`}
            d={`M ${dimension / 2}, ${dimension / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text>
          <textPath href={`#circlePath-${text.replace(/\s/g, "")}`} startOffset="0%">
            {chars.map((char, i) => char).join("")}
          </textPath>
        </text>
      </svg>
      <div className="btn-icon" style={{ width: iconSize, height: iconSize }}>
        <Home size={iconSize / 2.5} />
      </div>
    </div>
  );
};
