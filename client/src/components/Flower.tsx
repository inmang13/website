import type { CSSProperties } from "react";

interface FlowerProps {
  size: number;
  style?: CSSProperties;
}

export function Flower({ size, style }: FlowerProps) {
  return (
    <svg className="mk-flower" style={style} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <g fill="#E8720C">
        <circle cx="12" cy="6" r="3.2" />
        <circle cx="18" cy="12" r="3.2" />
        <circle cx="12" cy="18" r="3.2" />
        <circle cx="6" cy="12" r="3.2" />
      </g>
      <circle cx="12" cy="12" r="2.3" fill="#f4c430" />
    </svg>
  );
}

const GARLAND_FLOWERS: { size: number; style: CSSProperties }[] = [
  { size: 11, style: { left: "1%", top: "2px", transform: "rotate(-16deg)" } },
  { size: 8, style: { left: "9%", top: "-5px", transform: "rotate(10deg)" } },
  { size: 13, style: { left: "17%", top: "5px", transform: "rotate(-6deg)" } },
  { size: 9, style: { left: "26%", top: "-3px", transform: "rotate(20deg)" } },
  { size: 12, style: { left: "35%", top: "4px", transform: "rotate(-12deg)" } },
  { size: 8, style: { left: "44%", top: "-6px", transform: "rotate(14deg)" } },
  { size: 14, style: { left: "53%", top: "3px", transform: "rotate(-4deg)" } },
  { size: 9, style: { left: "62%", top: "-4px", transform: "rotate(22deg)" } },
  { size: 12, style: { left: "71%", top: "5px", transform: "rotate(-18deg)" } },
  { size: 8, style: { left: "80%", top: "-5px", transform: "rotate(8deg)" } },
  { size: 13, style: { left: "89%", top: "3px", transform: "rotate(-10deg)" } },
  { size: 9, style: { left: "97%", top: "-4px", transform: "rotate(16deg)" } },
];

export function FlowerGarland({ className }: { className?: string }) {
  return (
    <div className={`mk-garland ${className ?? ""}`} aria-hidden="true">
      {GARLAND_FLOWERS.map((f, i) => (
        <Flower key={i} size={f.size} style={f.style} />
      ))}
    </div>
  );
}
