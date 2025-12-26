import Experience from "../Experience";

export default function ExperienceExample() {
  const jobs = [
    {
      title: "Water Resources Engineer",
      company: "Hydro Solutions Inc.",
      location: "Austin, TX",
      period: "2021 - 2023",
      description: "Led hydraulic modeling and stormwater design projects for municipal and private clients. Developed flood mitigation strategies and coordinated with regulatory agencies.",
      skills: ["HEC-RAS", "EPA SWMM", "AutoCAD Civil 3D", "ArcGIS", "Flood Modeling", "FEMA Compliance"]
    },
    {
      title: "Environmental Engineering Intern",
      company: "Stream & Watershed Consultants",
      location: "Portland, OR",
      period: "2020 - 2021",
      description: "Assisted with field data collection, water quality analysis, and GIS mapping for stream restoration projects. Supported grant writing and report preparation.",
      skills: ["Water Quality Testing", "GIS Analysis", "Field Surveying", "Data Analysis", "Python", "Report Writing"]
    },
    {
      title: "Civil Engineering Technician",
      company: "Municipal Public Works",
      location: "Denver, CO",
      period: "2019 - 2020",
      description: "Supported stormwater infrastructure design and maintenance. Created CAD drawings and assisted with capital improvement planning.",
      skills: ["AutoCAD", "Infrastructure Design", "Stormwater Systems", "Project Coordination", "Civil Design", "Documentation"]
    },
    {
      title: "Research Assistant",
      company: "University Water Lab",
      location: "University Campus",
      period: "2018 - 2019",
      description: "Conducted experimental research on green infrastructure performance. Analyzed data and contributed to peer-reviewed publications.",
      skills: ["Research Methods", "Data Analysis", "MATLAB", "Technical Writing", "Green Infrastructure", "Experimentation"]
    }
  ];

  return <Experience jobs={jobs} />;
}
