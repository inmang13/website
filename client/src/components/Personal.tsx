import { Card, CardContent } from "@/components/ui/card";
import { Waves, Cloud, Music, MapPin, BookOpen, Coffee } from "lucide-react";

interface Fact {
  icon: typeof Waves;
  title: string;
  description: string;
}

interface PersonalProps {
  facts?: Fact[];
}

export default function Personal({ facts }: PersonalProps) {
  const defaultFacts = [
    {
      icon: Waves,
      title: "Ocean Lover",
      description: "Weekend trips to the coast are essential. There's something about watching water move that never gets old."
    },
    {
      icon: Coffee,
      title: "Coffee Enthusiast",
      description: "I'm convinced that coffee taste improves by 20% when consumed near a river or stream."
    },
    {
      icon: Music,
      title: "Indie Folk Fan",
      description: "My go-to study playlist features lots of artists singing about nature and water."
    },
    {
      icon: MapPin,
      title: "Adventurer",
      description: "I've hiked to the source of three different rivers. It's a quirky bucket list."
    },
    {
      icon: BookOpen,
      title: "Environmental Justice Reader",
      description: "Passionate about understanding how water systems intersect with community equity and access."
    },
    {
      icon: Cloud,
      title: "Weather Watcher",
      description: "I check the weather forecast way too often and get genuinely excited about predicted precipitation."
    }
  ];

  const displayFacts = facts || defaultFacts;

  return (
    <section 
      id="personal" 
      className="py-20 md:py-32 px-6 relative overflow-hidden"
      data-testid="section-personal"
    >
      {/* Wave motif background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-cyan-400"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center"
          data-testid="text-personal-heading"
        >
          Beyond Water Engineering
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          When I'm not modeling hydraulics, you'll find me exploring rivers, enjoying good coffee, and getting nerdy about weather patterns
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-card-border hover-elevate"
                data-testid={`card-fact-${index}`}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-cyan-500/20 to-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 
                    className="text-lg font-medium text-foreground mb-2"
                    data-testid={`text-fact-title-${index}`}
                  >
                    {fact.title}
                  </h3>
                  <p 
                    className="text-muted-foreground text-sm leading-relaxed"
                    data-testid={`text-fact-description-${index}`}
                  >
                    {fact.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
