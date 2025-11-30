import Services from "../Services";
import { Waves, CloudRain, Mountain, AlertTriangle, Droplets, Leaf } from "lucide-react";

export default function ServicesExample() {
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

  return <Services services={services} />;
}
