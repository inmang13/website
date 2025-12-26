import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  sectionId: string;
}

interface NavigationProps {
  name: string;
  navItems: NavItem[];
}

export default function Navigation({ name, navItems }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-transparent backdrop-blur-sm border-b border-border/50" 
          : "bg-transparent"
      }`}
      data-testid="navigation-header"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg font-semibold text-foreground"
          data-testid="link-logo"
        >
          {name}
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`link-nav-${item.sectionId}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>
      
      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          data-testid="mobile-menu"
        >
          <nav className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
                data-testid={`link-mobile-nav-${item.sectionId}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
