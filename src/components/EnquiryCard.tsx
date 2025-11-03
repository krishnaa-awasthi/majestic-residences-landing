import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const EnquiryCard = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="absolute top-1/2 right-10 -translate-y-1/2 bg-white shadow-2xl rounded-xl p-6 w-[340px] border border-[#d6c6a1]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 bg-[#4a3a18] text-white rounded-md">
        <button className="flex-1 py-2 text-sm font-semibold flex items-center justify-center gap-2 border-r border-[#8b7b50]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="whatsapp"
            className="w-4 h-4"
          />
          Whatsapp Now
        </button>
        <span className="flex-1 py-2 text-sm font-semibold text-center">
          93544 78720
        </span>
      </div>

      {/* Form */}
      <h2 className="text-center font-semibold text-[#5a4020] text-lg mb-4">
        REQUEST A CALL BACK!
      </h2>

      <form className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b border-gray-400 focus:outline-none focus:border-[#b49557] text-sm py-1"
        />
        <input
          type="tel"
          placeholder="Mobile No"
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
            I consent to the privacy policy, data use, and contact via phone, text or WhatsApp, despite any DNC/NDNC
            listing.
          </span>
        </label>

        <Button
          type="submit"
          className="w-full bg-[#b49557] hover:bg-[#a28245] text-white font-semibold py-2 rounded-sm mt-3"
        >
          SUBMIT NOW
        </Button>
      </form>

      {/* Poster */}
      <div className="mt-2">
        <img
          src="https://www.godrejperoperties.in/Majesty/assets/img/investo-gold-offer-MOB.jpg"
          alt="Godrej Majesty Banner"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default EnquiryCard;
