import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Personal from "@/components/Personal";
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
      description: "Pursuing a study track in Systems, Risk, and Decision with focus in water.",
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
      description: "Managing field crew for monthly sewer sampling program across 25 census tracts in Durham, NC. Resposible for training new technicians, coordinating logistics, and ensuring data quality.",
      skills: ["Basecamp", "Field Team Leadership"]
    },
    {
      title: "Water Resource Engineer I/II",
      company: "CDM Smith",
      location: "Boston, MA",
      period: "2022-2025",
      description: "Worked on hydrologic and hydraulic modeling, water quality analysis, precipitation analysis, field programs, and drinking water planning.",
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
    "I’m an M.S. student in Civil and Environmental Engineering at Duke University, specializing in Systems, Risk, and Decision. My work is grounded in water resources engineering, and I’m currently expanding my expertise in computational methods and programming to better understand and solve complex water challenges."
  ];

  const credentials = [
    "M.S. Candidate - Civil Engineering",
    "B.S. Environmental Engineering",
    "Engineer-in-Training (EIT)"
  ];

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <Navigation name="Grace Inman" navItems={navItems} />
      <main>
        <Hero
          name="Grace Inman"
          title="Water Resource Engineer"
          headshotUrl="./headshot.jpg"
          tagline="Graduate student developing data-driven solutions in water resources engineering."
          initials="GI"
          resumeUrl="/resume.pdf"
        />
        
        <About
          bio={bio}
          credentials={credentials}
        />
                
        <Experience jobs={jobs} />

        <Personal
          photoUrl="/rocks.jpg"
          caption="Me and my shiny rocks"
        />

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
