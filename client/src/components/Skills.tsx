import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  category: string;
  items: string[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <section 
      id="skills" 
      className="py-20 md:py-32 px-6 bg-card/50"
      data-testid="section-skills"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center"
          data-testid="text-skills-heading"
        >
          Technical Skills
        </h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} data-testid={`skill-category-${index}`}>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm"
                    data-testid={`badge-skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
