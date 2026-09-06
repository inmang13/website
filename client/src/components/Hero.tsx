import type { CSSProperties } from "react";
import { Flower } from "@/components/Flower";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  headline: string;
  headlineAccent: string;
  headshotUrl?: string;
  resumeUrl?: string;
}

const flowers: { size: number; style: CSSProperties }[] = [
  { size: 16, style: { top: "-10px", left: "-12px", transform: "rotate(-8deg)" } },
  { size: 12, style: { top: "20%", right: "-14px", transform: "rotate(15deg)" } },
  { size: 14, style: { bottom: "-8px", left: "30%", transform: "rotate(30deg)" } },
  { size: 18, style: { bottom: "10%", right: "-10px", transform: "rotate(-20deg)" } },
  { size: 11, style: { top: "55%", left: "-16px", transform: "rotate(5deg)" } },
];

const features = [
  {
    heading: "Water Resources",
    text: "Hydrology, planning and optimization, and modeling.",
    path: (
      <>
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        <path d="M9.3 15.8c-.35-1.3.25-2.75 1.7-3.75" strokeWidth="1.3" />
      </>
    ),
  },
  {
    heading: "Data and Analytics",
    text: "Data visualizations, UI, and ETL.",
    path: (
      <>
        <path d="M4 20h16" />
        <rect x="6" y="13" width="3.2" height="7" rx="0.6" />
        <rect x="11.4" y="9" width="3.2" height="11" rx="0.6" />
        <rect x="16.8" y="5" width="3.2" height="15" rx="0.6" />
      </>
    ),
  },
  {
    heading: "Programming",
    text: "Python, R, GIS, and a touch of everything else.",
    path: (
      <>
        <polyline points="16 6 22 12 16 18" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
];

export default function Hero({
  name,
  title,
  tagline,
  headline,
  headlineAccent,
  headshotUrl,
  resumeUrl,
}: HeroProps) {
  return (
    <>
      <header className="mk-hero" id="hero" data-testid="section-hero">
        <div className="mk-wrap">
          <div className="mk-photo-wrap">
            <div className="mk-headshot-frame">
              <img src={headshotUrl} alt={`${name}, ${title}`} />
            </div>
            {flowers.map((flower, index) => (
              <Flower key={index} size={flower.size} style={flower.style} />
            ))}
          </div>

          <div className="mk-hero-copy">
            <h1 data-testid="text-name">
              {headline} <span>{headlineAccent}</span>
            </h1>
            <p className="mk-lede" data-testid="text-tagline">
              {tagline}
            </p>
            {resumeUrl && (
              <div className="mk-hero-actions">
                <a className="mk-btn-resume" href={resumeUrl} download data-testid="link-download-resume">
                  Download Resume
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="mk-features" data-testid="section-features">
        <div className="mk-wrap mk-grid3">
          {features.map((feature) => (
            <div
              className="mk-fcard"
              key={feature.heading}
              data-testid={`card-feature-${feature.heading.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <div className="mk-ficon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {feature.path}
                </svg>
              </div>
              <h3>{feature.heading}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

