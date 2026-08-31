import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Personal from "@/components/Personal";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  const navItems = [
    { label: "About", sectionId: "about" },
    { label: "Projects", sectionId: "projects" },
    { label: "Experience", sectionId: "experience" },
    { label: "Contact", sectionId: "contact" }
  ];

  const jobs = [
    {
      title: "Graduate Student Researcher",
      company: "Duke University",
      location: "Durham, NC",
      period: "2025 - Present",
      description: "Pursuing a study track in Systems, Risk, and Decision with focus in water. Current research develops a pipeline to quantify rainfall-derived inflow and infiltration (RDII) in sanitary sewers directly from flow-meter data, using automated baseline separation and storm-event detection across a 15-meter monitoring network in Durham, NC.",
      skills: ["Data Science",
      "Data Engineering",
      "Computer Science",
      "Software Engineering",
      "Hydrology",
      "Planning and Optimization"]
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

  


  const projects = [
    {
      title: "Sewershed Delineation Tool",
      location: "Edible Atlas Lab, Duke University",
      description: "The lab needed to know the population upstream of any given manhole before it could make sense of a wastewater sample. I built a Streamlit app that traces the sewer network upstream via graph traversal from a manhole ID, returns the service-area polygon, and joins it against census geography for population, income, and race/ethnicity estimates.",
      outcomes: [
        "Validated against expert manual delineation at 24 sites: median IoU 0.875 (0.863 leave-one-out)",
        "Lab members scope new sampling sites themselves instead of asking me to trace it by hand"
      ],
      stack: ["Python", "Streamlit", "Graph traversal", "Spatial joins", "Census data cache"],
      codeNote: "Not public - carries the city's private sewer network"
    },
    {
      title: "RDII Analysis Pipeline",
      location: "Graduate research, Duke University",
      description: "Utilities need to quantify rainfall-derived inflow and infiltration (RDII) to plan sewer rehabilitation, but the usual approach leans on incomplete rainfall records. My research pipeline isolates a dry-weather baseline from flow-meter data alone using an iterative Prophet fit, then segments and matches storm events across meters at the basin level.",
      outcomes: [
        "Runs across 15 flow meters and three years of 15-minute readings in Durham, parallelized on the Duke Compute Cluster",
        "Cleaning, baseline, and event-detection stages are built and tested; engineering-indices and dashboard stages are still ahead"
      ],
      stack: ["Python", "pandas", "Prophet", "joblib", "pytest"],
      codeNote: "Not public - active research pipeline"
    },
    {
      title: "Durham Wastewater eDNA Dashboard",
      location: "Edible Atlas Lab, Duke University",
      description: "The lab's monthly wastewater eDNA sampling program produces phyloseq objects, annotation spreadsheets, and shapefiles that nobody without an R environment could read. I built a Python/Dash dashboard behind a staged ETL pipeline: an R step extracts the raw sequencing objects, six Python stages turn that plus shapefiles and spreadsheets into versioned Parquet files, and the dashboard queries them through DuckDB.",
      outcomes: [
        "Live and password-protected for the lab, covering 24 active sites with map, site-detail, and diet-comparison views",
        "Own the pipeline end to end, from a new sequencing batch landing in data/raw/ to it showing up on the dashboard"
      ],
      stack: ["Python", "Dash/Plotly", "DuckDB", "Parquet", "R", "Flask/Gunicorn"],
      codeNote: "Not public - lab-owned, underlying data not yet published"
    },
    {
      title: "MRMS 24-Hour Rainfall Fetcher",
      location: "Personal project, open source",
      description: "Water resources work often needs a 24-hour rainfall total at a point or averaged over a catchment for a specific storm, but pulling it from NOAA's radar-based rainfall archive requires knowing the file naming convention, time-zone rounding, and how to parse grib2. I built three tools sharing one core fetcher - a point lookup, a batch tool, and a catchment areal-average tool - and packaged all three as standalone Windows executables so non-programmer collaborators can run them.",
      outcomes: [
        "Public and in active use for water resources research at Duke"
      ],
      stack: ["Python", "xarray", "geopandas", "grib2", "PyInstaller"],
      link: "https://github.com/inmang13/MRMS-QPE-24-Hour-Rainfall"
    }
  ];

  const personalPhotos = [
    { src: "/fieldwork.jpg", caption: "Did I mention I do fieldwork?" },
    { src: "/secret-tunnel.jpg", caption: "Secret tunnel.", link: "https://www.youtube.com/watch?v=4-GiYP_4qc0", linkLabel: "Listen" },
    { src: "/tire-change.jpg", caption: "Fully installed with the short-haired girl starter pack" },
    { src: "/lake-talk.jpg", caption: "People don't run away when I speak!" },
    { src: "/tree-hollow.jpg", caption: "I think trees are neat!" },
    { src: "/sip-n-paint.jpg", caption: "Also qualified to host your office sip-n-paint" },
    { src: "/rocks.jpg", caption: "You could have this level of excitement on your team! Apply today!" }
  ];

  const bio = [
    "I'm an M.S. student in Civil and Environmental Engineering at Duke University, specializing in Systems, Risk, and Decision. My work is grounded in water resources engineering, and I'm currently expanding my expertise in computational methods and programming to better understand and solve complex water challenges."
  ];

  const credentials = [
    "M.S. Candidate - Civil Engineering",
    "B.S. Environmental Engineering",
    "Engineer-in-Training (EIT)",
    "WEF InFLOW STEMpath Scholar (2026)"
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
                
        <Projects projects={projects} />

        <Experience jobs={jobs} />

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
