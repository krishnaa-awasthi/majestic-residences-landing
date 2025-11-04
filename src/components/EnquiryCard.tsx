import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/context/EnquiryContext";

const EnquiryCard: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const { openEnquiry } = useEnquiry(); // ✅ Access global form trigger

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Form submitted:", formData);

    // ✅ Trigger popup
    openEnquiry();
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E6D9C5] my-8 lg:my-12 max-h-[50vh] overflow-y-auto">
      <div className="flex items-center justify-between bg-[#4a3a18] text-white rounded-t-xl overflow-hidden">
        <button
          className="flex-1 py-2 text-sm font-semibold flex items-center justify-center gap-2 bg-[#5c4720] hover:bg-[#6e5730] transition"
          onClick={() => window.open("https://wa.me/9354478720", "_blank")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="whatsapp"
            className="w-4 h-4"
          />
          Whatsapp Now
        </button>
        <div className="flex-1 py-2 text-sm font-semibold text-center border-l border-[#7a673b]">
          93544 78720
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-center font-semibold text-[#5a4020] text-lg mb-4 tracking-wide">
          REQUEST A CALL BACK!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border-b border-gray-400 focus:outline-none focus:border-[#b49557] text-sm py-1"
          />
          <input
            type="tel"
            placeholder="Mobile No"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border-b border-gray-400 focus:outline-none focus:border-[#b49557] text-sm py-1"
          />

          <label className="flex items-start gap-2 text-xs text-[#5a4020] mt-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="mt-[3px] accent-[#b49557]"
            />
            <span>
              I consent to the privacy policy, data use, and contact via phone, text or WhatsApp,
              despite any DNC/NDNC listing.
            </span>
          </label>

          <Button
            type="submit"
            className="w-full bg-[#b49557] hover:bg-[#a28245] text-white font-semibold py-2 rounded-md mt-3 transition-all"
          >
            SUBMIT NOW
          </Button>
        </form>
      </div>

      <div className="px-6 pb-6">
        <img
          src="https://www.godrejperoperties.in/Majesty/assets/img/investo-gold-offer-MOB.jpg"
          alt="Godrej Majesty Banner"
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default EnquiryCard;
