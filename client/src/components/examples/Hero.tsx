import Hero from "../Hero";

export default function HeroExample() {
  return (
    <Hero
      name="David Mitchell"
      title="Water Resource Engineer"
      tagline="Designing sustainable water infrastructure solutions with over 15 years of experience in hydraulic modeling, stormwater management, and watershed analysis."
      onContactClick={() => console.log("Contact clicked")}
    />
  );
}
