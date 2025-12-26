import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  const navItems = [
    { label: "About", sectionId: "about" },
    { label: "Experience", sectionId: "experience" },
    { label: "Contact", sectionId: "contact" }
  ];

  const jobs = [
    {
      title: "Graduate Student Researcher",
      company: "Duke University",
      location: "Durham, NC",
      period: "2025 - Present",
      description: "Focusing on systems, risk, and decision-making with applications to water resource systems and hydroinformatics.",
      skills: ["Python",
      "Pandas / NumPy",
      "Xarray/Rasterio",
      "bash/cmd",
      "Git",
      "scikit learn"]
    },
    {
      title: "Field Team Leader / Sewer Sampling Technician",
      company: "David Lab, Duke University",
      location: "Durham, NC",
      period: "2025 - Present",
      description: "Managing field crew for monthly sewer sampling program across 25 census tracts in Durham, NC.",
      skills: ["Basecamp", "Field Team Leadership"]
    },
    {
      title: "Water Resources Engineer",
      company: "CDM Smith",
      location: "Boston, MA",
      period: "2021-2025",
      description: "Worked on hydrologic and hydraulic modeling, water quality analysis, field programs, and infrastructure planning.",
      skills:[
      "Python","R","MATLAB","SQL","ArcGIS Online","Field Maps","EPA SWMM","PCSWMM","EPA SSOAP","EFDC","RShiny","renv","SSOAP",
    ]
    },
    {
      title: "Tufts Data Laboratory Assistant",
      company: "Tufts University",
      location: "Medford, MA",
      period: "2021 - 2022",
      description: "Provided GIS, coding, and data visualization assistance for students and faculty.",
      skills: ["ArcMap","ArcGIS Pro","Python","R","Geopandas"]
    }
  ];

  


  const bio = [
    "I’m an M.S. student in Civil and Environmental Engineering at Duke, focusing on Systems, Risk, and Decision. My foundation is in water resources engineering, and I’m currently working on strengthening my computational and programming skills. I love learning new tools and finding ways to bridge the gap between industry and academia."
  ];

  const credentials = [
    "M.S. Candidate - Civil Engineering",
    "B.S. Environmental Engineering",
    "Engineer-in-Training (EIT)"
  ];

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      
      <main>
        <Hero
          name="Grace Inman"
          title="Water Resource Engineer"
          tagline="Graduate student developing data-driven solutions in water resources engineering."
          initials="GI"
        />
        
        <About
          bio={bio}
          credentials={credentials}
        />
                
        <Experience jobs={jobs} />

        <Contact
          email="grace.inman@duke.edu"
          linkedin="https://www.linkedin.com/in/grace-inman-990a881a6/"        />      
        
      </main>
      
      <Footer name="Grace Inman" />
    </div>
  );
}
