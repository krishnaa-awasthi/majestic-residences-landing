import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EnquiryForm from "@/components/EnquiryForm"; // ✅ Import your form

interface UnitPlan {
  type: string;
  area: string;
  price: string;
  image: string;
}

const UnitPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<UnitPlan | null>(null);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const units: UnitPlan[] = [
    {
      type: "3 BHK",
      area: "1993 Sq.Ft.",
      price: "₹ 2.9 CR* ONWARDS",
      image: "https://www.godrejperoperties.in/Majesty/assets/img/floorplans/3bhk-1993.jpg",
    },
    {
      type: "3 BHK + S",
      area: "2368 Sq.Ft.",
      price: "₹ 3.29 CR* ONWARDS",
      image: "https://www.godrejperoperties.in/Majesty/assets/img/floorplans/3bhk+S-2368.jpg",
    },
    {
      type: "3 BHK + S",
      area: "2503 Sq.Ft.",
      price: "₹ 3.47 CR* ONWARDS",
      image: "https://www.godrejperoperties.in/Majesty/assets/img/floorplans/3bhk+S-2503.jpg",
    },
    {
      type: "4 BHK",
      area: "2576 Sq.Ft.",
      price: "₹ 3.56 CR* ONWARDS",
      image: "https://www.godrejperoperties.in/Majesty/assets/img/floorplans/4bhk-2576.jpg",
    },
    {
      type: "4 BHK + S",
      area: "2799 Sq.Ft.",
      price: "₹ 3.96 CR* ONWARDS",
      image: "https://www.godrejperoperties.in/Majesty/assets/img/floorplans/4bhk+S-2799.jpg",
    },
  ];

  return (
    <section id="unit-plans" className="py-20 bg-[#FFF7EC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5E3D22] mb-4 tracking-wide">
            Select Your Residence
          </h2>
          <p className="text-lg text-[#7C5E3B] max-w-3xl mx-auto">
            Choose from meticulously designed floor plans that blend luxury, comfort, and space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {units.map((unit, index) => (
            <Card
              key={index}
              className="bg-[#8B6F47] text-white text-center rounded-xl shadow-lg border-0 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              <div className="p-10 space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-[#EAD9B0]">TYPE</p>
                <h3 className="text-3xl font-bold">{unit.type}</h3>

                <p className="text-sm uppercase tracking-[0.3em] text-[#EAD9B0] pt-3">
                  SALEABLE AREA
                </p>
                <p className="text-lg font-medium">{unit.area}</p>

                <p className="text-sm uppercase tracking-[0.3em] text-[#EAD9B0] pt-3">
                  PRICE STARTS
                </p>
                <p className="text-xl font-semibold">{unit.price}</p>
              </div>

              <div className="bg-gradient-to-r from-[#C7A456] to-[#B18B30] text-center py-3">
                <Button
                  onClick={() => {
                    setSelectedPlan(unit);
                    setShowEnquiry(true);
                  }}
                  className="text-white text-sm tracking-widest font-semibold bg-transparent hover:bg-[#C7A456]/90"
                >
                  ENQUIRE NOW
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* ✅ Enquiry Form Triggered Externally */}
      {showEnquiry && (
        <EnquiryForm
          open={showEnquiry}
          onClose={() => setShowEnquiry(false)}
        />
      )}
    </section>
  );
};

export default UnitPlans;
