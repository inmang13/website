import About from "../About";

export default function AboutExample() {
  return (
    <About
      currentStatus="M.S. Candidate in Civil Engineering"
      bio={[
        "I am a graduate student specializing in water resources engineering, with a focus on hydraulic modeling, stormwater infrastructure design, and sustainable watershed management.",
        "My research explores innovative approaches to urban flood mitigation and nature-based solutions for water quality improvement.",
        "I combine rigorous computational analysis with practical design thinking to develop solutions that balance environmental stewardship with community needs."
      ]}
      credentials={[
        "M.S. Candidate - Civil Engineering",
        "B.S. Environmental Engineering",
        "Hydraulic Modeling",
        "Stormwater Design",
        "GIS Analysis"
      ]}
    />
  );
}
