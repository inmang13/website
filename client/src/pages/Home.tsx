import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Personal from "@/components/Personal";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import RainEffect from "@/components/RainEffect";
import { projects } from "@/data/projects";

export default function Home() {
  const [rainActive, setRainActive] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
      }
    }
  }, []);

  const navItems = [
    { label: "About", sectionId: "about" },
    { label: "Experience", sectionId: "experience" },
    { label: "Projects", sectionId: "projects" },
    { label: "Personal", sectionId: "personal" },
    { label: "Contact", sectionId: "contact" }
  ];

  const jobs = [
    {
      title: "Graduate Student Researcher",
      company: "ZEDD Lab, Duke University",
      location: "Durham, NC",
      period: "2025 - Present",
      description: "Pursuing a study track in Systems, Risk, and Decision with a focus area in hydrology. My graduate research is developing a pipeline to quantify rainfall-derived inflow and infiltration (RDII) in sanitary sewers directly from flow-meter data, using automated baseline separation and storm-event detection."
    },
    {
      title: "GIS Developer and Field Team Coordinator",
      company: "Edible Atlas, Duke University",
      location: "Durham, NC",
      period: "2025 - Present",
      description: "Maintaining GIS data and a lab-side analytics dashboard, and managing field crew for a monthly sewer sampling program across 25+ sites. Responsible for training new technicians and coordinating logistics."
    },
    {
      title: "Water Resource Engineer I/II",
      company: "CDM Smith",
      location: "Boston, MA",
      period: "2022-2025",
      description: "Supported hydrologic and hydraulic modeling, water quality analysis, precipitation analysis, and field sampling programs across New England. Performed infiltration and inflow analyses, contributed to FEMA floodplain studies and regional water planning, and coordinated interns and specialists on a regulatory documentation project."
    },
    {
      title: "Tufts Data Laboratory Assistant",
      company: "Tufts University",
      location: "Medford, MA",
      period: "2021 - 2022",
      description: "Provided GIS, coding, and data visualization assistance for students and faculty."
    }
  ];

  


  // Collage: width/ratio/focus/tilt are per-photo so the wall reads scrapbook, not grid.
  // focus is a CSS object-position — it picks which part of the frame survives the crop.
  // A portrait ratio (taller than wide) gets the polaroid chin and holds its caption;
  // a landscape ratio gets an even white border and writes its caption directly on the photo.
  // tapes is one to three washi pieces (see TapePiece in Personal.tsx) — "diagonal"
  // crosses a corner, "parallel" lies flat along an edge at `along`% of its length.
  // Both tape width and sticker size are a % of the photo's own card (not px), so
  // the whole composition scales with the layout instead of drifting out of
  // proportion on a narrower screen. sticker art is either a drawn glyph in
  // Personal.tsx or a cut-out in /public/scrap/stickers, looked up by the same name.
  const personalPhotos = [
    {
      src: "/fieldwork.jpg",
      caption: "Did I mention I do fieldwork?",
      width: "28%", ratio: "4/5", focus: "30% 56%", tilt: "-2.2deg", offset: "0px",
      tapes: [
        { color: "grid", mode: "parallel" as const, edge: "top" as const, along: 48, rotate: -1, width: 36.7 },
        { color: "cream-grid", mode: "parallel" as const, edge: "left" as const, along: 53, rotate: 4, width: 27.9 }
      ],
      stickers: [
        { art: "shovel", size: 33.1, style: { left: "84%", top: "-3%" } },
        { art: "boot-orange", size: 28.7, style: { left: "83%", top: "87%" } }
      ]
    },
    {
      src: "/lake-talk.jpg",
      caption: "People don't run away when I speak!",
      width: "42%", ratio: "3/2", focus: "center 62%", tilt: "1.2deg", offset: "26px",
      tapes: [
        { color: "gold", mode: "parallel" as const, edge: "top" as const, along: 52, rotate: 10, width: 26.5 },
        { color: "gold-dot-cream", mode: "parallel" as const, edge: "bottom" as const, along: 96, rotate: -22, width: 21.6 }
      ],
      stickers: [
        { art: "speech-note", text: "Riveting stuff, I promise!", size: 28.9, style: { left: "36%", top: "19%" } }
      ]
    },
    {
      src: "/tire-change.jpg",
      caption: "I do well with (tire) pressure 😂",
      width: "24%", ratio: "3/4", focus: "72% 42%", tilt: "2.4deg", offset: "8px",
      tapes: [
        { color: "dot", mode: "parallel" as const, edge: "top" as const, along: 50, rotate: 0, width: 35.1 },
        { color: "navy-dot", mode: "parallel" as const, edge: "bottom" as const, along: 50, rotate: -2, width: 27.4 }
      ],
      stickers: []
    },
    {
      src: "/sip-n-paint.jpg",
      caption: "Qualified office party organizer!",
      width: "38%", ratio: "4/3", focus: "center 46%", tilt: "-1.4deg", offset: "0px",
      tapes: [
        { color: "terracotta-stripe", mode: "diagonal" as const, corner: "tl" as const, rotate: -34, width: 23.8 },
        { color: "terracotta-stripe", mode: "diagonal" as const, corner: "tr" as const, rotate: 36, width: 22.2 },
        { color: "plum-dot", mode: "diagonal" as const, corner: "br" as const, rotate: -34, width: 28.2 }
      ],
      stickers: [
        { art: "palette", size: 21.4, style: { left: "-6%", top: "57%" } },
        { art: "paintbrush", size: 22.2, style: { left: "80%", top: "5%" } }
      ]
    },
    {
      src: "/tree-hollow.jpg",
      caption: "Not afraid to get my hands dirty!",
      width: "26%", ratio: "3/4", focus: "34% 72%", tilt: "1.8deg", offset: "34px",
      tapes: [
        { color: "bot-eucalyptus", mode: "parallel" as const, edge: "top" as const, along: 50, rotate: -4, width: 55.4 }
      ],
      stickers: [
        { art: "pinecone", size: 23.3, style: { left: "83%", top: "84%" } },
        { art: "oak-acorns", size: 28.9, style: { left: "-3%", top: "-7%" } }
      ]
    },
    {
      src: "/rocks.jpg",
      caption: "Enthusiastic!",
      width: "29%", ratio: "5/4", focus: "center 28%", tilt: "-2deg", offset: "12px",
      tapes: [
        { color: "mustard-stripe", mode: "parallel" as const, edge: "top" as const, along: 50, rotate: -1, width: 32.6 }
      ],
      stickers: [
        { art: "gem", size: 25.5, style: { left: "91%", top: "85%" } }
      ]
    }
  ];

  const bio = [
    "I'm an M.S. student in Civil and Environmental Engineering at Duke University. My work is grounded in water resources engineering, and I'm currently expanding my expertise in computational methods and programming to better understand and solve complex water challenges."
  ];

  const credentials = [
    "M.S. Candidate - Civil Engineering",
    "B.S. Environmental Engineering",
    "Engineer-in-Training (EIT)",
    "WEF InFLOW STEMpath Scholar (2026)"
  ];

  return (
    <div className="min-h-screen mk-page-shell text-foreground">
      <Navigation
        name="Grace Inman"
        navItems={navItems}
        rainActive={rainActive}
        onToggleRain={() => setRainActive((v) => !v)}
      />
      <RainEffect active={rainActive} />
      <main>
        <Hero
          name="Grace Inman"
          title="Water Resource Engineer"
          headshotUrl="./headshot.jpg"
          headline="Data pipelines for"
          headlineAccent="water systems."
          tagline="Graduate student developing data-driven solutions in water resources engineering."
          resumeUrl="/resume.pdf"
        />
        
        <About
          bio={bio}
          credentials={credentials}
        />
                
        <Experience jobs={jobs} />

        <Projects projects={projects} />

        <Personal photos={personalPhotos} />

        <Contact
          email="grace.inman@duke.edu"
          linkedin="https://www.linkedin.com/in/grace-inman-990a881a6/" 
          github="https://github.com/inmang13"
          resumeUrl="/resume.pdf" />      
        
      </main>
      
      <Footer name="Grace Inman" />
    </div>
  );
}
