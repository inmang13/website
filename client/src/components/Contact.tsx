import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

interface ContactProps {
  email: string;
  linkedin?: string;
  location: string;
}

export default function Contact({ email, linkedin, location }: ContactProps) {
  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 px-6"
      data-testid="section-contact"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
          data-testid="text-contact-heading"
        >
          Let's Work Together
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Available for consulting, project collaboration, and technical advisory services
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="rounded-full px-8 gap-2"
            onClick={() => window.location.href = `mailto:${email}`}
            data-testid="button-email"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </Button>
          
          {linkedin && (
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 gap-2"
              onClick={() => window.open(linkedin, "_blank")}
              data-testid="button-linkedin"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          )}
        </div>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span data-testid="text-location">{location}</span>
        </div>
      </div>
    </section>
  );
}
