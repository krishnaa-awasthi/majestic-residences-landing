import { Building2, Trees, Award, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const Highlights = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Neoclassical Design",
      description: "Timeless architecture with modern amenities",
    },
    {
      icon: Trees,
      title: "4.5 Acres Landscaped Greens",
      description: "Expansive gardens and open spaces",
    },
    {
      icon: Award,
      title: "Exclusive Clubhouse & Pool",
      description: "World-class recreational facilities",
    },
    {
      icon: ShieldCheck,
      title: "RERA Registered Project",
      description: "Transparent and trustworthy development",
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Experience Timeless Luxury
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Majestic Residences brings together architectural grandeur and
            contemporary living standards, offering an unparalleled lifestyle in
            the heart of the city.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
