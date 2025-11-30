import Navigation from "../Navigation";

export default function NavigationExample() {
  const navItems = [
    { label: "About", sectionId: "about" },
    { label: "Expertise", sectionId: "services" },
    { label: "Projects", sectionId: "projects" },
    { label: "Skills", sectionId: "skills" },
    { label: "Contact", sectionId: "contact" }
  ];

  return <Navigation name="D. Mitchell" navItems={navItems} />;
}
