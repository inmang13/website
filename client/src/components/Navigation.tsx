import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X, CloudRain } from "lucide-react";

interface NavItem {
  label: string;
  sectionId: string;
}

interface NavigationProps {
  name: string;
  navItems: NavItem[];
  /** Omit both to leave the Rain toggle out of the nav entirely. */
  rainActive?: boolean;
  onToggleRain?: () => void;
}

export default function Navigation({ name, navItems, rainActive, onToggleRain }: NavigationProps) {
  const [location, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState(navItems[0]?.sectionId ?? "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = navItems
        .map((item) => {
          const el = document.getElementById(item.sectionId);
          return el ? { id: item.sectionId, top: el.getBoundingClientRect().top } : null;
        })
        .filter((entry): entry is { id: string; top: number } => entry !== null)
        .filter((entry) => entry.top <= 120)
        .pop();
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    if (location === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="mk-nav" data-testid="navigation-header">
      <div className="mk-wrap">
        <button
          onClick={() => scrollToSection("hero")}
          className="mk-brand"
          data-testid="link-logo"
        >
          {name}
        </button>

        <ul className="mk-navlinks mk-navlinks-desktop">
          {navItems.map((item) => (
            <li key={item.sectionId}>
              <button
                onClick={() => scrollToSection(item.sectionId)}
                className={activeSection === item.sectionId ? "mk-active" : undefined}
                data-testid={`link-nav-${item.sectionId}`}
              >
                {item.label}
              </button>
            </li>
          ))}
          {onToggleRain && (
            <li>
              <button
                onClick={onToggleRain}
                className={`mk-nav-rain${rainActive ? " mk-rain-on" : ""}`}
                data-testid="button-toggle-rain"
              >
                <CloudRain className="w-4 h-4" />
                Rain
              </button>
            </li>
          )}
        </ul>

        <button
          className="mk-nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div data-testid="mobile-menu">
          <ul className="mk-navlinks mk-navlinks-mobile">
            {navItems.map((item) => (
              <li key={item.sectionId}>
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  data-testid={`link-mobile-nav-${item.sectionId}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            {onToggleRain && (
              <li>
                <button
                  onClick={onToggleRain}
                  className={`mk-nav-rain${rainActive ? " mk-rain-on" : ""}`}
                  data-testid="button-toggle-rain-mobile"
                >
                  <CloudRain className="w-4 h-4" />
                  Rain
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
