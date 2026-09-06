export interface ProjectFigure {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  hook: string;
  problem: string;
  whatBuilt: string;
  outcome: string;
  topOutcome: string;
  headlineStack: string[];
  stack: string[];
  link?: string;
  codeNote?: string;
  screenshot?: string;
  figures?: ProjectFigure[];
}

export const projects: Project[] = [
  {
    slug: "sewershed-delineation-tool",
    title: "Sewershed Delineation Tool",
    location: "Edible Atlas Lab, Duke University",
    link: "https://github.com/inmang13/SewershedDelineation",
    hook: "Finds who's upstream of any manhole, instantly.",
    screenshot: "/projects/sewershed-delineation-tool.jpg",
    problem:
      "To make sense of a wastewater sample, the lab needs to know whose sewage it actually is: the population upstream of that one manhole. Working that out by hand means tracing the pipe network manually for every new sampling site.",
    whatBuilt:
      "Built for the lab: a pure-Python pipeline (no ArcGIS or QGIS required) that takes a sampling manhole and a city's sewer network, traces upstream, and builds a clean catchment polygon, joined against Census demographics. Released as an open-source, MIT-licensed package so any city's GIS team can run it on their own data, with a live browser demo on a synthetic network, no real data needed to try it.",
    outcome:
      "Validated against expert manual delineation at 24 sites: median IoU 0.875, 0.863 leave-one-out. Lab members use it to scope new sampling sites without asking me to do it by hand. Since open-sourced under MIT for other WBE/eDNA programs to use.",
    topOutcome: "0.875 median IoU across 24 sites",
    headlineStack: ["Python", "Streamlit", "Graph traversal"],
    stack: ["Python", "Streamlit", "Graph traversal", "Spatial joins", "Census data cache"],
  },
  {
    slug: "mrms-24-hour-rainfall-fetcher",
    title: "MRMS 24-Hour Rainfall Fetcher",
    location: "Personal project, open source",
    link: "https://github.com/inmang13/MRMS-QPE-24-Hour-Rainfall",
    hook: "Pulls 24-hour rainfall totals straight from NOAA radar data.",
    screenshot: "/projects/mrms-24-hour-rainfall-fetcher.png",
    problem:
      "Water resources work often needs a 24-hour rainfall total at a point, or averaged over a catchment, for a specific storm event. NOAA's radar-based rainfall archive (MRMS) has the data, but pulling it out requires knowing the file naming convention, the time-zone rounding rules, and how to parse grib2. Not something a non-programmer collaborator can do.",
    whatBuilt:
      "Three tools sharing one core fetcher: a single-point lookup, a batch tool that appends a rainfall column to a spreadsheet of locations and times, and a polygon tool that computes mean areal precipitation over catchment shapes for rainfall-runoff modeling. I packaged all three as standalone Windows executables, so a labmate without Python installed can still run them.",
    outcome: "Public and in active use for water resources research at Duke.",
    topOutcome: "Public, in active use at Duke",
    headlineStack: ["Python", "xarray", "geopandas"],
    stack: ["Python", "xarray", "geopandas", "grib2", "PyInstaller"],
  },
  {
    slug: "durham-wastewater-edna-dashboard",
    title: "Durham Wastewater eDNA Dashboard",
    location: "Edible Atlas Lab, Duke University",
    codeNote: "Not public - lab-owned, underlying data not yet published",
    hook: "Turns raw eDNA sequencing runs into a live map.",
    screenshot: "/projects/durham-wastewater-edna-dashboard.jpg",
    problem:
      "The lab runs a monthly wastewater eDNA sampling program across 25+ sites in Durham, tracking plant and animal DNA to see what the community eats. The raw output is phyloseq objects, annotation spreadsheets, and shapefiles in half a dozen formats. Nobody without an R environment could look at a result.",
    whatBuilt:
      "A Python/Dash dashboard with a staged ETL pipeline behind it. An R step reads the raw sequencing objects, six Python stages turn that plus shapefiles and Excel exports into versioned Parquet files, and the dashboard queries them through DuckDB. No database server, no manual data wrangling to see a new batch of results.",
    outcome:
      "Live and password-protected for the lab, with map, site-detail, and diet-comparison views. I own the pipeline end to end, from a new sequencing batch landing in data/raw/ to it showing up on the dashboard.",
    topOutcome: "24 active sites, live",
    headlineStack: ["Python", "Dash/Plotly", "DuckDB"],
    stack: ["Python", "Dash/Plotly", "DuckDB", "Parquet", "R", "Flask/Gunicorn"],
    figures: [
      { src: "/projects/edna-dashboard-map.png", caption: "Map view: sampling sites colored by service-area demographics, with per-site detail on click." },
      { src: "/projects/edna-dashboard-richness.png", caption: "Diet richness plotted against neighborhood socioeconomic data across sites." },
      { src: "/projects/edna-dashboard-foods.png", caption: "Per-site food composition over time, with small multiples for each top food." },
    ],
  },
  {
    slug: "rdii-analysis-pipeline",
    title: "RDII Analysis Pipeline",
    location: "Graduate research, Duke University",
    codeNote: "Not public - active research pipeline",
    hook: "Quantifies sewer inflow and infiltration from flow-meter data alone.",
    screenshot: "/projects/rdii-baseline.png",
    problem:
      "Rainfall-derived inflow and infiltration (RDII) is stormwater and groundwater that leaks into sanitary sewers during and after rain, and utilities need to quantify it to plan sewer rehabilitation. The usual approach leans on rainfall records, which are often incomplete. My research asks whether flow-meter data alone is enough.",
    whatBuilt:
      "A pipeline built to run on any utility's flow-meter network. It isolates a dry-weather baseline with an iterative Prophet fit, segments the residual wet-weather flow into storm events, and matches the same event across meters to characterize it at the basin level. It explores what insights can be gathered from each additional level of information.",
    outcome:
      "Ongoing graduate research. The core pipeline is built and validated, and the next phase turns its results into a tool utilities can use directly for capital improvement planning.",
    topOutcome: "15 flow meters, 3 years of 15-min data",
    headlineStack: ["Python", "pandas", "Prophet"],
    stack: ["Python", "pandas", "Prophet", "joblib", "pytest"],
    figures: [
      { src: "/projects/rdii-meters.png", caption: "Per-meter view: measured flow against dry-weather baseline, plus the traced service area for that basin." },
      { src: "/projects/rdii-events.png", caption: "One storm, seen by all 14 meters at once, each against its own dry-weather baseline." },
      { src: "/projects/rdii-bottom-line.png", caption: "The core finding: basin rankings change as more data sources are added, showing what each layer of information actually buys." },
    ],
  },
];
