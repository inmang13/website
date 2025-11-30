import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface Project {
  title: string;
  location: string;
  description: string;
  outcomes: string[];
  category: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section 
      id="projects" 
      className="py-20 md:py-32 px-6"
      data-testid="section-projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center"
          data-testid="text-projects-heading"
        >
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of impactful water resource projects delivered throughout my career
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-card-border hover-elevate overflow-visible"
              data-testid={`card-project-${index}`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-3 h-3" />
                    <span data-testid={`text-project-location-${index}`}>{project.location}</span>
                  </div>
                </div>
                
                <h3 
                  className="text-xl md:text-2xl font-medium text-foreground mb-3"
                  data-testid={`text-project-title-${index}`}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="text-muted-foreground text-sm leading-relaxed mb-4"
                  data-testid={`text-project-description-${index}`}
                >
                  {project.description}
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Key Outcomes
                  </p>
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, oIndex) => (
                      <li 
                        key={oIndex}
                        className="text-sm text-foreground flex items-start gap-2"
                        data-testid={`text-project-outcome-${index}-${oIndex}`}
                      >
                        <span className="text-cyan-400 mt-1.5 text-xs">•</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
