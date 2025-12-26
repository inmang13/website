import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase } from "lucide-react";

interface ExpertiseItem {
  role: string;
  organization: string;
  location: string;
  timeframe: string;
  focus: string;
  highlights: string[];
  tools?: string[];
}

interface ExpertiseProps {
  expertise: ExpertiseItem[];
}

export default function Expertise({ expertise }: ExpertiseProps) {
  // Color schemes for different positions
  const colorSchemes = [
    { 
      gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
      border: "border-cyan-500/30 hover:border-cyan-500/50",
      accent: "bg-cyan-500",
      badge: "bg-cyan-500/10 text-cyan-700 border-cyan-500/30 hover:bg-cyan-500/20"
    },
    { 
      gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
      border: "border-blue-500/30 hover:border-blue-500/50",
      accent: "bg-blue-500",
      badge: "bg-blue-500/10 text-blue-700 border-blue-500/30 hover:bg-blue-500/20"
    },
    { 
      gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
      border: "border-purple-500/30 hover:border-purple-500/50",
      accent: "bg-purple-500",
      badge: "bg-purple-500/10 text-purple-700 border-purple-500/30 hover:bg-purple-500/20"
    },
    { 
      gradient: "from-teal-500/10 via-teal-500/5 to-transparent",
      border: "border-teal-500/30 hover:border-teal-500/50",
      accent: "bg-teal-500",
      badge: "bg-teal-500/10 text-teal-700 border-teal-500/30 hover:bg-teal-500/20"
    }
  ];

  return (
    <section 
      id="expertise" 
      className="py-20 md:py-32 px-6"
      data-testid="section-expertise"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center"
          data-testid="text-expertise-heading"
        >
          Experience
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A snapshot of the work I've done across engineering, modeling, fieldwork, and data-driven decision making
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {expertise.map((exp, index) => {
            const colors = colorSchemes[index % colorSchemes.length];

            return (
              <Card
                key={index}
                className={`bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                data-testid={`card-expertise-${index}`}
              >
                {/* Color accent bar at top */}
                <div className={`h-1.5 ${colors.accent}`} />
                
                <CardContent className="p-6 md:p-8">
                  {/* Header with timeframe and location */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.timeframe}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span data-testid={`text-expertise-location-${index}`}>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Role & Organization */}
                  <div className="mb-4">
                    <h3 
                      className="text-xl md:text-2xl font-semibold text-foreground mb-1.5"
                      data-testid={`text-expertise-role-${index}`}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      <p className="text-base font-medium text-foreground/80">
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  {/* Focus */}
                  <p 
                    className="text-muted-foreground leading-relaxed mb-6 text-sm"
                    data-testid={`text-expertise-focus-${index}`}
                  >
                    {exp.focus}
                  </p>

                  {/* Skills Gained */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">
                      Skills Gained
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((skill, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-sm text-foreground/90 flex items-start gap-2"
                          data-testid={`text-expertise-highlight-${index}-${hIndex}`}
                        >
                          <span className={`${colors.accent} w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0`} />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools as Badges */}
                  {exp.tools && exp.tools.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">
                        Tools Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, tIndex) => (
                          <Badge
                            key={tIndex}
                            variant="outline"
                            className={`${colors.badge} transition-all text-xs`}
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}