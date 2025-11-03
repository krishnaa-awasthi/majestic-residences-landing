import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home } from "lucide-react";
import floorPlan3BHK from "@/assets/floor-plan-3bhk.jpg";
import floorPlan3BHKStudy from "@/assets/floor-plan-3bhk-study.jpg";
import floorPlan4BHK from "@/assets/floor-plan-4bhk.jpg";

const UnitPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<{
    title: string;
    image: string;
  } | null>(null);

  const units = [
    {
      type: "3 BHK",
      area: "1750 sq.ft",
      price: "₹2.9 Cr onwards",
      image: floorPlan3BHK,
    },
    {
      type: "3 BHK + Study",
      area: "2100 sq.ft",
      price: "₹3.4 Cr onwards",
      image: floorPlan3BHKStudy,
    },
    {
      type: "4 BHK",
      area: "2500 sq.ft",
      price: "₹4.1 Cr onwards",
      image: floorPlan4BHK,
    },
  ];

  return (
    <section id="unit-plans" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Select Your Residence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from meticulously designed floor plans that maximize space, light, and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {units.map((unit, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="p-8 bg-gradient-to-b from-muted/50 to-background">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4">
                  <Home className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  {unit.type}
                </h3>
                <p className="text-lg text-muted-foreground mb-1">{unit.area}</p>
                <p className="text-xl font-semibold text-accent mb-6">
                  {unit.price}
                </p>
                <Button
                  onClick={() => setSelectedPlan({ title: unit.type, image: unit.image })}
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full"
                >
                  View Floor Plan
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Floor Plan Modal */}
      <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedPlan?.title} Floor Plan
            </DialogTitle>
          </DialogHeader>
          {selectedPlan && (
            <div className="mt-4">
              <img
                src={selectedPlan.image}
                alt={selectedPlan.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default UnitPlans;
