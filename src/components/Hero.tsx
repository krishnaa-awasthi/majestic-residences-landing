"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://www.godrejperoperties.in/Majesty/assets/img/banner1.jpg",
    "https://www.godrejperoperties.in/Majesty/assets/img/main-bg-4-new.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {images.map(
            (img, i) =>
              i === currentImage && (
                <motion.img
                  key={i}
                  src={img}
                  alt={`Hero background ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              )
          )}
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
      </motion.div>

      {/* Button that stays within hero */}
      <motion.div
        className="absolute bottom-10 inset-x-0 flex justify-center z-30"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Button
          onClick={() => window.open("/brochure.pdf", "_blank")}
          className="
            relative overflow-hidden 
            text-white font-semibold text-lg md:text-xl px-10 py-4 rounded-full 
            shadow-[0_0_25px_rgba(212,175,55,0.35)] 
            transition-all duration-300 
            hover:scale-105 active:scale-95
          "
        >
          {/* Animated Gradient */}
          <span
            className="
              absolute inset-0 
              bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#b8860b]
              bg-[length:200%_200%]
              animate-gradientMove 
              rounded-full
            "
          ></span>

          {/* Shine on Hover */}
          <span
            className="
              absolute inset-0 
              before:content-[''] before:absolute before:inset-0 
              before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
              before:translate-x-[-100%]
              hover:before:translate-x-[100%]
              before:transition-transform before:duration-700 before:ease-in-out
              rounded-full
            "
          ></span>

          <span className="relative z-10">Download Brochure</span>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
