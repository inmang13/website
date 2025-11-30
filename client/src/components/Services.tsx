import { Card, CardContent } from "@/components/ui/card";
import { 
  Waves, 
  CloudRain, 
  Mountain, 
  AlertTriangle, 
  Droplets, 
  Leaf,
  type LucideIcon 
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicesProps {
  services: Service[];
}

const iconMap: Record<string, LucideIcon> = {
  Waves,
  CloudRain,
  Mountain,
  AlertTriangle,
  Droplets,
  Leaf
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Waves;
}

export default function Services({ services }: ServicesProps) {
  return (
    <section 
      id="services" 
      className="py-20 md:py-32 px-6 bg-card/50"
      data-testid="section-services"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center"
          data-testid="text-services-heading"
        >
          Expertise
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Comprehensive water resource engineering services tailored to your project needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-card-border hover-elevate"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 
                    className="text-xl font-medium text-foreground mb-2"
                    data-testid={`text-service-title-${index}`}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-muted-foreground text-sm leading-relaxed"
                    data-testid={`text-service-description-${index}`}
                  >
                    {service.description}
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
