import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

interface ExperienceProps {
  jobs: Job[];
}

export default function Experience({ jobs }: ExperienceProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section 
      id="experience" 
      className="py-20 md:py-32 px-6 relative overflow-hidden"
      data-testid="section-experience"
    >
      <div className="absolute inset-0 bg-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center"
          data-testid="text-experience-heading"
        >
          Experience
          <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />

        </h2>
        
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <Collapsible
              key={index}
              open={openIndex === index}
              onOpenChange={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <Card 
                className="bg-gradient-to-br from-card via-card to-cyan-950/20 border-cyan-400/20 hover-elevate"
                data-testid={`card-job-${index}`}
              >
                <CardContent className="p-6 md:p-8">
                  <CollapsibleTrigger asChild>
                    <button className="w-full text-left flex items-start justify-between gap-4 hover:opacity-80 transition-opacity">
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h3 
                            className="text-xl md:text-2xl font-medium text-foreground"
                            data-testid={`text-job-title-${index}`}
                          >
                            {job.title}
                          </h3>
                          <span className="text-sm text-muted-foreground">{job.period}</span>
                        </div>
                        <p 
                          className="text-cyan-400 font-medium mb-2"
                          data-testid={`text-job-company-${index}`}
                        >
                          {job.company}
                        </p>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin className="w-3 h-3" />
                          <span data-testid={`text-job-location-${index}`}>{job.location}</span>
                        </div>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="mt-6 pt-6 border-t border-cyan-400/20">
                      <p 
                        className="text-muted-foreground mb-4 leading-relaxed"
                        data-testid={`text-job-description-${index}`}
                      >
                        {job.description}
                      </p>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                          Skills & Tools
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex}
                              variant="secondary"
                              className="text-xs bg-cyan-500/15 text-cyan-300 border-cyan-400/20"
                              data-testid={`badge-skill-${index}-${skillIndex}`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </CardContent>
              </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
