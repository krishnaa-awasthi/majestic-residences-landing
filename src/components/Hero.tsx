"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryForm from "@/components/EnquiryForm"; // ✅ import your existing popup form

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showEnquiry, setShowEnquiry] = useState(false);

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
      {/* ---------- Background Slideshow ---------- */}
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

      {/* ---------- Overlay ---------- */}
      <div className="absolute inset-0 bg-black/45 lg:bg-black/35 z-10" />

      {/* ---------- Main Content ---------- */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between h-full">
        {/* LEFT: Text Section */}
        <motion.div
          className="text-white text-center lg:text-left max-w-lg mt-20 lg:mt-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-3">
            GODREJ MAJESTY
          </h1>
          <p className="uppercase text-[#EAD9B0] text-sm tracking-widest mb-3">
            SECTOR 12, GREATER NOIDA (W)
          </p>
          <p className="text-lg md:text-xl font-medium text-[#fff5dc] mb-6">
            3 BHK + S & 4 BHK Royale Residences <br />
            Starting at{" "}
            <span className="text-[#d4af37] font-semibold">₹ 2.9 Cr*</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={() => window.open("/brochure.pdf", "_blank")}
              className="relative overflow-hidden text-white font-semibold text-lg px-8 py-3 rounded-full shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#b8860b] bg-[length:200%_200%] animate-gradientMove rounded-full"></span>
              <span className="relative z-10">Download Brochure</span>
            </Button>

            <Button
              onClick={() => setShowEnquiry(true)}
              className="bg-transparent border border-[#d4af37] text-[#d4af37] font-semibold text-lg px-8 py-3 rounded-full hover:bg-[#d4af37]/20 transition"
            >
              Request a Call Back
            </Button>
          </div>
        </motion.div>

        {/* RIGHT: Desktop Enquiry Box */}
        <motion.div
          className="hidden lg:flex flex-col bg-[#fff7ec]/95 rounded-2xl shadow-2xl p-8 w-[380px] text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-[#5E3D22] mb-1">
            REQUEST A CALL BACK!
          </h2>
          <p className="text-sm text-[#7C5E3B] mb-5">
            Fill in your details and our team will get in touch.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name*"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#b38b2b]"
            />
            <input
              type="tel"
              placeholder="Mobile No*"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#b38b2b]"
            />
            <label className="text-[10px] text-gray-600 flex items-start gap-1">
              <input type="checkbox" className="mt-[3px]" required />
              I consent to the privacy policy, data use, and contact via phone, text or WhatsApp.
            </label>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#7a5a2f] text-white font-semibold text-[16px] tracking-wide py-3 mt-3 rounded-md shadow-md hover:scale-105"
            >
              SUBMIT NOW
            </Button>
          </form>
        </motion.div>
      </div>

      {/* ---------- Mobile Bottom Buttons ---------- */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-around bg-[#5E3D22] text-white py-3 z-50">
        <button
         onClick={() => setShowEnquiry(true)}
         className="flex flex-col items-center text-xs">
          📞 <span>Call</span>
        </button>
        <button 
        onClick={() => setShowEnquiry(true)}
        className="flex flex-col items-center text-xs">
          💬 <span>WhatsApp</span>
        </button>
        <button
          onClick={() => setShowEnquiry(true)}
          className="flex flex-col items-center text-xs"
        >
          📩 <span>Enquire</span>
        </button>
      </div>

      {/* ✅ Popup Enquiry Form */}
      {showEnquiry && (
        <EnquiryForm open={showEnquiry} onClose={() => setShowEnquiry(false)} />
      )}
    </section>
  );
};

export default Hero;
