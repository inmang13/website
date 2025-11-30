import Skills from "../Skills";

export default function SkillsExample() {
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

  return <Skills skillCategories={skillCategories} />;
}
