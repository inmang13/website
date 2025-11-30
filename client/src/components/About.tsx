import { Badge } from "@/components/ui/badge";

interface AboutProps {
  bio: string[];
  credentials: string[];
  yearsExperience: number;
}

export default function About({ bio, credentials, yearsExperience }: AboutProps) {
  return (
    <section 
      id="about" 
      className="py-20 md:py-32 px-6"
      data-testid="section-about"
    >
      <div className="max-w-3xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center"
          data-testid="text-about-heading"
        >
          About
        </h2>
        
        <div className="flex items-center justify-center mb-12">
          <div className="text-center">
            <span 
              className="text-5xl md:text-6xl font-bold text-primary"
              data-testid="text-years-experience"
            >
              {yearsExperience}+
            </span>
            <p className="text-muted-foreground mt-2">Years of Experience</p>
          </div>
        </div>
        
        <div className="space-y-6 mb-12">
          {bio.map((paragraph, index) => (
            <p 
              key={index}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
              data-testid={`text-bio-${index}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
        <div>
          <h3 className="text-xl font-medium text-foreground mb-4">
            Credentials & Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {credentials.map((credential, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                data-testid={`badge-credential-${index}`}
              >
                {credential}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
