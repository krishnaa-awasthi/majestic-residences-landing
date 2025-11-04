import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "./PropertyCard";
import EnquiryCard from "./EnquiryCard";
import AnimatedCardWrapper from "./AnimatedCardWrapper";
import { motion } from "framer-motion";

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
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-[100px]">
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Hero bg ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentImage ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Animated Cards */}
      <AnimatedCardWrapper
        position="left"
        logo="https://www.godrejperoperties.in/Majesty/assets/img/comman/logo-1.png"
      >
        <PropertyCard />
      </AnimatedCardWrapper>

      <AnimatedCardWrapper
        position="right"
        logo="https://www.godrejperoperties.in/Majesty/assets/img/comman/logo-1.png"
      >
        <EnquiryCard />
      </AnimatedCardWrapper>

      {/* Brochure Button */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Button
          onClick={() => window.open("/brochure.pdf", "_blank")}
          className="bg-[#8B6F47] hover:bg-[#6F5838] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Download Brochure
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
