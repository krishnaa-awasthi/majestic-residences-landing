import { Button } from "@/components/ui/button";
import { MapPin, School, ShoppingBag, Plane, Train } from "lucide-react";

const Location = () => {
  const landmarks = [
    { icon: School, name: "Top International Schools", distance: "2-5 km" },
    { icon: ShoppingBag, name: "Premium Shopping Malls", distance: "3 km" },
    { icon: Train, name: "Metro Station", distance: "1.5 km" },
    { icon: Plane, name: "International Airport", distance: "15 km" },
  ];

  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Prime Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategically located with seamless connectivity to everything that matters
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Landmarks */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Nearby Landmarks</h3>
            {landmarks.map((landmark, index) => {
              const Icon = landmark.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal mb-1">
                      {landmark.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {landmark.distance}
                    </p>
                  </div>
                </div>
              );
            })}
            <Button
              className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps?q=luxury+residences",
                  "_blank"
                )
              }
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-luxury h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1752921977745!2d77.20902931508042!3d28.613939382422146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d97c0d7%3A0x3d26e8e96e729d5!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Majestic Residences Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
