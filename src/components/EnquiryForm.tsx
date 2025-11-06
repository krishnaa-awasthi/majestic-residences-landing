import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
  open?: boolean; // External trigger from Navbar
  onClose?: () => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ open = false, onClose }) => {
  const { toast } = useToast();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  // ✅ Show popup 1.5s after page load (only once)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Respond to Navbar trigger (open manually)
  useEffect(() => {
    if (open) setShowPopup(true);
  }, [open]);

  // ✅ Lock scroll when popup open
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
    onClose?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you soon.",
    });

    setFormData({ name: "", phone: "" });
    handleClose();
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div
        className="
          relative bg-[#f8f1e7] rounded-2xl shadow-2xl 
          w-full max-w-lg p-8 md:p-10 text-center 
          border border-[#d4af37]/40 
          transform transition-all duration-500 ease-out 
          animate-[fadeSlideUp_0.4s_ease-out]
        "
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-8">
          <img
            src="https://www.godrejperoperties.in/Majesty/assets/img/comman/logo-1.png"
            alt="Godrej Majesty"
            className="h-12 w-auto mb-3"
          />
          <p className="text-[13px] tracking-widest text-[#5a4632] uppercase font-medium">
            SECTOR 12, GREATER NOIDA (W)
          </p>

          <h2 className="mt-6 text-[22px] tracking-[4px] font-semibold text-[#7a5a2f]">
            ENQUIRE NOW!
          </h2>

          <p className="text-[16px] font-semibold text-[#5a4632] mt-2">
            Register Here & Avail{" "}
            <span className="text-[#d40f0f] font-bold">Exclusive Offers!!</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            id="name"
            type="text"
            placeholder="Name*"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="rounded-md py-3 border-gray-300 focus:ring-2 focus:ring-[#7a5a2f] transition"
          />
          <Input
            id="phone"
            type="tel"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="rounded-md py-3 border-gray-300 focus:ring-2 focus:ring-[#7a5a2f] transition"
          />

          <label className="text-[10px] text-gray-600 flex items-start gap-1 mt-1">
            <input type="checkbox" className="mt-[3px]" required />
            I consent to the privacy policy, data use, and contact via phone, text or WhatsApp,
            despite any DNC/NDNC listing.
          </label>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#d4af37] to-[#7a5a2f] text-white font-semibold text-[16px] tracking-wide py-3 mt-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Send className="mr-2 h-5 w-5" />
            SUBMIT NOW
          </Button>

          <p className="text-[10px] text-gray-500 text-center mt-4">
            By submitting, you agree to be contacted regarding this property.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
