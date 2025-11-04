import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PropertyCard } from "./PropertyCard";

const PropertyPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Show popup automatically when user lands
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800); // small delay for effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="fixed top-0 left-0 h-full w-[380px] bg-white shadow-2xl z-50 rounded-r-2xl border-r border-[#E6D9C5]"
        >
          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
          >
            <X size={24} />
          </button>

          {/* Property card */}
          <div className="overflow-y-auto max-h-[100vh] p-4">
            <PropertyCard />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PropertyPopup;
