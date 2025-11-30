import Projects from "../Projects";

export default function ProjectsExample() {
  const projects = [
    {
      title: "Regional Flood Mitigation Study",
      location: "Metro Area, TX",
      category: "Flood Control",
      description: "Led comprehensive flood study for a 500 sq mi watershed, developing mitigation alternatives and cost-benefit analysis for a $45M infrastructure program.",
      outcomes: [
        "Reduced 100-year flood risk for 12,000 properties",
        "Secured $28M in federal funding",
        "Implemented nature-based solutions"
      ]
    },
    {
      title: "Urban Stormwater Master Plan",
      location: "Coastal City, FL",
      category: "Stormwater",
      description: "Developed a 20-year capital improvement program addressing aging infrastructure and sea level rise adaptation for a coastal municipality.",
      outcomes: [
        "Prioritized $120M in infrastructure investments",
        "Integrated green infrastructure standards",
        "Improved water quality compliance"
      ]
    },
    {
      title: "Dam Safety Rehabilitation",
      location: "Mountain County, CO",
      category: "Dam Safety",
      description: "Engineered rehabilitation design for a high-hazard dam including spillway improvements and seismic retrofit to meet current safety standards.",
      outcomes: [
        "Upgraded to meet PMF requirements",
        "Extended structure life by 50 years",
        "Zero safety incidents during construction"
      ]
    },
    {
      title: "Stream Restoration Project",
      location: "River Valley, NC",
      category: "Restoration",
      description: "Designed natural channel restoration for 2.5 miles of degraded urban stream, incorporating habitat enhancement and public access features.",
      outcomes: [
        "Restored aquatic habitat connectivity",
        "Reduced streambank erosion by 85%",
        "Created 3-mile greenway trail"
      ]
    }
  ];

  return <Projects projects={projects} />;
}
