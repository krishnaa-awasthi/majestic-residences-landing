import { Card } from "@/components/ui/card";
import {
  Waves,
  Dumbbell,
  FootprintsIcon,
  Baby,
  ShieldCheck,
  Trees,
  Trophy,
  Car,
} from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Waves, name: "Swimming Pool", description: "Resort-style infinity pool" },
    { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art gym" },
    { icon: FootprintsIcon, name: "Jogging Track", description: "Landscaped walking paths" },
    { icon: Baby, name: "Kids Play Area", description: "Safe & engaging playground" },
    { icon: ShieldCheck, name: "24/7 Security", description: "CCTV & trained personnel" },
    { icon: Trees, name: "Landscaped Gardens", description: "Lush green spaces" },
    { icon: Trophy, name: "Clubhouse", description: "Premium social facilities" },
    { icon: Car, name: "Covered Parking", description: "Multi-level secure parking" },
  ];

  return (
    <section id="amenities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            World-Class Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every detail designed to elevate your lifestyle and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 group-hover:bg-accent mb-4 transition-colors">
                  <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {amenity.name}
                </h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
