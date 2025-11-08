"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryForm from "@/components/EnquiryForm";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const images = [
    "https://www.godrejperoperties.in/Majesty/assets/img/banner1.jpg",
    "https://www.godrejperoperties.in/Majesty/assets/img/main-bg-4-new.jpg",
  ];

  // ✅ Tab Focus Trigger
  useEffect(() => {
    const handleFocus = () => setShowEnquiry(true);
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  // ✅ Background Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "919354478720";
  const whatsappMessage = encodeURIComponent(
    "Hello, I’m interested in Godrej Majesty. Please share more details!"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
      <div className="absolute inset-0 bg-black/45 lg:bg-black/35 z-10" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between h-full">
        {/* LEFT SIDE */}
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
              onClick={() => setShowEnquiry(true)}
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

        {/* RIGHT SIDE — CALL BACK CARD */}
        <motion.div
          className="hidden lg:flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[360px] text-center overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* WhatsApp Top Bar */}
          <div className="flex justify-between items-center bg-[#7a5a2f] text-white px-4 py-2 font-semibold">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-300"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              Whatsapp Now
            </a>
            <span>{whatsappNumber.slice(2, 12)}</span>
          </div>

          {/* Form Section */}
          <div className="p-6">
            <h3 className="text-[22px] font-bold text-[#5E3D22] mb-5">
              REQUEST A CALL BACK!
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowEnquiry(true);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full border-b border-gray-300 focus:border-[#7a5a2f] focus:outline-none py-2 text-sm"
              />
              <input
                type="tel"
                placeholder="Mobile No"
                required
                className="w-full border-b border-gray-300 focus:border-[#7a5a2f] focus:outline-none py-2 text-sm"
              />

              <label className="flex items-start text-[10px] text-gray-600 gap-1">
                <input type="checkbox" className="mt-[3px]" required />
                I consent to the privacy policy, data use, and contact via
                phone, text or WhatsApp, despite any DNC/NDNC listing.
              </label>

              <Button
                type="submit"
                className="w-full bg-[#7a5a2f] hover:bg-[#5E3D22] text-white font-semibold text-sm tracking-wide py-3 rounded-md mt-3 shadow-md transition"
              >
                SUBMIT NOW
              </Button>
            </form>
          </div>

          {/* Brochure Image */}
          <div className="border-t border-gray-200">
            <img
              src="https://www.godrejperoperties.in/Majesty/assets/img/investo-gold-offer-MOB.jpg"
              alt="Brochure Preview"
              className="w-full h-[200px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* MOBILE FOOTER BUTTONS */} 
      <div className="lg:hidden fixed bottom-0 left-0 right-0 flex justify-around bg-[#5E3D22] text-white py-3 z-50">
        <button
          onClick={() => setShowEnquiry(true)}
          className="flex flex-col items-center text-xs"
        >
          📞 <span>Call</span>
        </button>
        <button
          onClick={() => setShowEnquiry(true)}
          className="flex flex-col items-center text-xs"
        >
          💬 <span>WhatsApp</span>
        </button>
        <button
          onClick={() => setShowEnquiry(true)}
          className="flex flex-col items-center text-xs"
        >
          📩 <span>Enquire</span>
        </button>
      </div>

      {/* POPUP FORM */}
      {showEnquiry && (
        <EnquiryForm open={showEnquiry} onClose={() => setShowEnquiry(false)} />
      )}
    </section>
  );
};

export default Hero;
