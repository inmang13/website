import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AboutProps {
  bio: string[];
  credentials: string[];
}

export default function About({ bio, credentials }: AboutProps) {
  const credentialColors = [
    "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20",
    "bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20",
    "bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20",
    "bg-teal-500/10 text-teal-300 border-teal-500/30 hover:bg-teal-500/20",
  ];

  return (
    <section 
      id="about" 
      className="py-20 md:py-32 px-6"
      data-testid="section-about"
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-semibold text-foreground"
            data-testid="text-about-heading"
          >
            About
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        {/* Bio Section */}
        <div className="space-y-6 mb-10 bg-muted/30 rounded-2xl p-6 shadow-sm border border-border">
          {bio.map((paragraph, index) => (
            <p 
              key={index}
              className="text-base md:text-lg text-foreground/90 leading-relaxed"
              data-testid={`text-bio-${index}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Education  */}

          <div className="flex flex-wrap gap-2">
            {credentials.map((credential, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`px-3 py-1 text-sm rounded-full transition-all ${
                  credentialColors[index % credentialColors.length]
                }`}
                data-testid={`text-credential-${index}`}
              >
                {credential}
              </Badge>
            ))}
          </div>

      </div>
    </section>
  );
}
