export default function BackgroundRiver() {
  return (
    <svg
      id="river-svg"
      viewBox="0 0 1000 4500"
      preserveAspectRatio="none"
      className="absolute top-0 left-0 -z-10 pointer-events-none w-full h-[450vh]"
    >
      {/* 1. THE ROOT (Main Trunk) */}
      <path
        id="river-main"
        d="M500 0 L 500 500" 
        stroke="#38bdf8" strokeWidth="8" fill="none" strokeLinecap="round" opacity ="0.4"
      />

      {/* 2. THE FIRST GENERATION (The Y-Split) */}
      <path
        id="river-L1"
        d="M500 500 C 450 600, 250 700, 250 1000 L 250 1000" 
        stroke="#38bdf8" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.3"
      />
      <path
        id="river-R1"
        d="M500 500 C 550 600, 750 700, 750 1000 L 750 1800" 
        stroke="#38bdf8" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.3"
      />

      {/* 3. THE SECOND GENERATION (Splitting the L and R branches) */}
      {/* Left-Outer Branch */}
      <path
        id="river-L2-outer"
        d="M250 1000 C 200 1400, 125 1500, 125 1800 L 125 4500" 
        stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.2"
      />
      {/* Left-Inner Branch */}
      <path
        id="river-L2-inner"
        d="M250 1000 C 300 1400, 375 1500, 375 1800 L 375 4500" 
        stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.2"
      />

      {/* Right-Inner Branch */}
      <path
        id="river-R2-inner"
        d="M750 1800 C 700 2200, 625 2300, 625 2600 L 625 4500" 
        stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.2"
      />
      {/* Right-Outer Branch */}
      <path
        id="river-R2-outer"
        d="M750 1800 C 800 2200, 875 2300, 875 2600 L 875 4500" 
        stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.2"
      />
    </svg>
  );
}