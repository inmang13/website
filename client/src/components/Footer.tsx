import { useLocation } from "wouter";

interface FooterProps {
  name: string;
  currentYear?: number;
}

export default function Footer({ name, currentYear = new Date().getFullYear() }: FooterProps) {
  const [location, setLocation] = useLocation();

  const backToTop = () => {
    if (location === "/") {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation("/#hero");
    }
  };

  return (
    <footer 
      className="py-8 px-6 border-t border-border"
      data-testid="secation-footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground text-center">
          <p data-testid="text-copyright">
            {currentYear} {name}. All rights reserved.
          </p>
          <button
            onClick={backToTop}
            className="hover:text-foreground transition-colors"
            data-testid="link-back-to-top"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}