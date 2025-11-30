import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  onContactClick?: () => void;
}

export default function Hero({ name, title, tagline, onContactClick }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent opacity-90" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p 
          className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground mb-6"
          data-testid="text-title"
        >
          {title}
        </p>
        
        <h1 
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8"
          data-testid="text-name"
        >
          {name}
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
          data-testid="text-tagline"
        >
          {tagline}
        </p>
        
        <Button
          size="lg"
          className="rounded-full px-8"
          onClick={() => {
            onContactClick?.();
            scrollToSection("contact");
          }}
          data-testid="button-contact-cta"
        >
          Get in Touch
        </Button>
      </div>
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
}
