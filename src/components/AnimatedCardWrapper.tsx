import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AnimatedCardWrapperProps {
  children: React.ReactNode;
  position: "left" | "right";
  logo: string;
}

const AnimatedCardWrapper: React.FC<AnimatedCardWrapperProps> = ({
  children,
  position,
  logo,
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 z-30 ${
        position === "left" ? "left-4" : "right-4"
      }`}
    >
      <AnimatePresence>
        {expanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, x: position === "left" ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: position === "left" ? -100 : 100 }}
            transition={{ type: "spring", stiffness: 90, damping: 15 }}
            className="relative bg-white rounded-2xl shadow-2xl w-[350px] max-h-[90vh] overflow-y-auto border border-[#E6D9C5]"
          >
            {/* Close Button */}
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black transition"
            >
              <X size={20} />
            </button>

            {/* Card Content */}
            <div className="p-4">{children}</div>
          </motion.div>
        ) : (
          <motion.div
            key="minimized"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setExpanded(true)}
            className={`bg-white border border-[#E6D9C5] rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 cursor-pointer ${
              position === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm font-semibold text-[#8B6F47] tracking-wide">
              Exclusive Offers →
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedCardWrapper;
