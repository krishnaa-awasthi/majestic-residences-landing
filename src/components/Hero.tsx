import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "./PropertyCard";
import EnquiryCard from "./EnquiryCard"; // ✅ fixed import name

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://www.godrejperoperties.in/Majesty/assets/img/banner1.jpg",
    "https://www.godrejperoperties.in/Majesty/assets/img/main-bg-4-new.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-[100px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images[currentImage]}
          alt="Background"
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-between items-center w-full px-8 lg:px-20">
        {/* Left: Property Card */}
        <div className="hidden lg:block">
          <PropertyCard />
        </div>

        

        {/* Right: Enquiry Card */}
        <div className="hidden lg:block">
          <EnquiryCard />
        </div>
      </div>

      {/* Brochure Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Button
          onClick={() => window.open("/brochure.pdf", "_blank")}
          className="bg-[#8B6F47] hover:bg-[#6F5838] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
        >
          Download Brochure
        </Button>
      </div>
    </section>
  );
};

export default Hero;
