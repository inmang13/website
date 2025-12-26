import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

interface ContactProps {
  email: string;
  linkedin?: string;
}

export default function Contact({ email, linkedin }: ContactProps) {
  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 px-6 relative overflow-hidden"
      data-testid="section-contact"
    >
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
          data-testid="text-contact-heading"
        >
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Open to internship opportunities for summer 2026
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="rounded-full px-8 gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"
            onClick={() => window.location.href = `mailto:${email}`}
            data-testid="button-email"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </Button>
          
          {linkedin && (
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 gap-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
              onClick={() => window.open(linkedin, "_blank")}
              data-testid="button-linkedin"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
