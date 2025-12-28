import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  headshotUrl?: string;
  initials?: string;
}

export default function Hero({ name, title, tagline, headshotUrl, initials = "GI" }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-transparent" />
      

      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
          <AvatarImage src={headshotUrl} alt={name} className="w-full h-full object-cover" />
          <AvatarFallback className="text-3xl md:text-4xl font-semibold bg-primary/20 text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <p 
          className="text-sm md:text-base uppercase tracking-[0.2em] text-primary mb-6"
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
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          data-testid="text-tagline"
        >
          {tagline}
        </p>
      </div>
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary hover:text-primary/80 transition-colors"
        aria-label="Scroll to about section"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
}