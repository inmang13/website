import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Waves, CloudRain, Mountain, AlertTriangle, Droplets, Leaf } from "lucide-react";

export default function Home() {
  const navItems = [
    { label: "About", sectionId: "about" },
    { label: "Expertise", sectionId: "services" },
    { label: "Projects", sectionId: "projects" },
    { label: "Skills", sectionId: "skills" },
    { label: "Contact", sectionId: "contact" }
  ];

  const services = [
    {
      icon: Waves,
      title: "Hydraulic Modeling",
      description: "Advanced computational modeling using HEC-RAS and SWMM for accurate flow analysis and infrastructure design."
    },
    {
      icon: CloudRain,
      title: "Stormwater Management",
      description: "Design of detention systems, green infrastructure, and drainage networks that meet regulatory requirements."
    },
    {
      icon: Mountain,
      title: "Watershed Analysis",
      description: "Comprehensive watershed studies including hydrology, sediment transport, and land use impact assessments."
    },
    {
      icon: AlertTriangle,
      title: "Flood Risk Assessment",
      description: "FEMA floodplain mapping, flood mitigation planning, and emergency response strategy development."
    },
    {
      icon: Droplets,
      title: "Water Quality Analysis",
      description: "Pollutant loading studies, BMP effectiveness evaluation, and water quality improvement strategies."
    },
    {
      icon: Leaf,
      title: "Sustainable Design",
      description: "Low-impact development, stream restoration, and environmentally sensitive water infrastructure solutions."
    }
  ];

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

  const skillCategories = [
    {
      category: "Modeling Software",
      items: ["HEC-RAS", "HEC-HMS", "EPA SWMM", "InfoWorks ICM", "MIKE 21", "FLO-2D"]
    },
    {
      category: "Design & GIS",
      items: ["AutoCAD Civil 3D", "ArcGIS Pro", "QGIS", "Global Mapper", "Bentley OpenFlows"]
    },
    {
      category: "Analysis & Data",
      items: ["Python", "R", "MATLAB", "SQL", "Power BI", "Excel VBA"]
    },
    {
      category: "Standards & Regulations",
      items: ["FEMA NFIP", "Clean Water Act", "MS4 Permits", "ASCE Standards", "State Dam Safety"]
    }
  ];

  const bio = [
    "I am a licensed Professional Engineer specializing in water resources, with expertise spanning hydraulic modeling, stormwater infrastructure design, and sustainable watershed management.",
    "Throughout my career, I have led projects ranging from urban flood mitigation systems to regional water supply planning, working with municipalities, private developers, and federal agencies.",
    "My approach combines rigorous technical analysis with practical, cost-effective solutions that balance environmental stewardship with community needs."
  ];

  const credentials = [
    "P.E. Licensed",
    "CFM Certified",
    "LEED AP",
    "M.S. Civil Engineering",
    "B.S. Environmental Engineering"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation name="D. Mitchell" navItems={navItems} />
      
      <main>
        <Hero
          name="David Mitchell"
          title="Water Resource Engineer"
          tagline="Designing sustainable water infrastructure solutions with over 15 years of experience in hydraulic modeling, stormwater management, and watershed analysis."
        />
        
        <About
          yearsExperience={15}
          bio={bio}
          credentials={credentials}
        />
        
        <Services services={services} />
        
        <Projects projects={projects} />
        
        <Skills skillCategories={skillCategories} />
        
        <Contact
          email="david.mitchell@watereng.com"
          linkedin="https://linkedin.com/in/davidmitchell"
          location="Austin, Texas"
        />
      </main>
      
      <Footer name="David Mitchell" />
    </div>
  );
}
