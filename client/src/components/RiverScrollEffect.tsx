import { useEffect } from "react";

export default function RiverScrollEffect() {
  useEffect(() => {
   const paths = [
  // Generation 0: Main Trunk
  { id: "river-main", start: 0, end: 0.08 },

  // Generation 1: The Y-Split (Starts at 8% scroll)
  { id: "river-L1", start: 0.08, end: 0.6 },
  { id: "river-R1", start: 0.08, end: 0.6 },

  // Generation 2: Left Splits (Starts at 25% scroll)
  { id: "river-L2-outer", start: 0.25, end: 0.8 },
  { id: "river-L2-inner", start: 0.25, end: 0.8 },

  // Generation 2: Right Splits (Starts at 45% scroll)
  { id: "river-R2-inner", start: 0.45, end: 1.0 },
  { id: "river-R2-outer", start: 0.45, end: 1.0 },
];

    const setup = (el: SVGPathElement) => {
      const len = el.getTotalLength();
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
      return len;
    };

    const updatePaths = () => {
      const pathData = paths.map((p) => {
        const el = document.getElementById(p.id);
        if (!(el instanceof SVGPathElement)) return null;
        const len = setup(el); // Recalculate length for responsiveness
        return { el, len, start: p.start, end: p.end };
      }).filter(Boolean) as { el: SVGPathElement; len: number; start: number; end: number }[];

      const onScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        const scroll = scrollTop / docHeight;

        pathData.forEach(({ el, len, start, end }) => {
          if (scroll < start) {
            el.style.strokeDashoffset = `${len}`;
            return;
          }
          const range = end - start;
          const progress = Math.min(Math.max((scroll - start) / range, 0), 1);
          el.style.strokeDashoffset = `${len - len * progress}`;
        });
      };

      onScroll();
      return onScroll;
    };

    let currentOnScroll = updatePaths();

    const handleResize = () => {
      window.removeEventListener("scroll", currentOnScroll);
      currentOnScroll = updatePaths();
      window.addEventListener("scroll", currentOnScroll);
    };

    window.addEventListener("scroll", currentOnScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", currentOnScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}