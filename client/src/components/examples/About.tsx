import About from "../About";

export default function AboutExample() {
  return (
    <About
      yearsExperience={15}
      bio={[
        "I am a licensed Professional Engineer specializing in water resources, with expertise spanning hydraulic modeling, stormwater infrastructure design, and sustainable watershed management.",
        "Throughout my career, I have led projects ranging from urban flood mitigation systems to regional water supply planning, working with municipalities, private developers, and federal agencies.",
        "My approach combines rigorous technical analysis with practical, cost-effective solutions that balance environmental stewardship with community needs."
      ]}
      credentials={[
        "P.E. Licensed",
        "CFM Certified",
        "LEED AP",
        "M.S. Civil Engineering",
        "B.S. Environmental Engineering"
      ]}
    />
  );
}
