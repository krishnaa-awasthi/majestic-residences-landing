import React from "react";

export const PropertyCard: React.FC = () => {
  return (
    <div className="
        w-full 
        max-w-sm 
        mx-auto 
        bg-white 
        rounded-2xl 
        overflow-hidden 
        shadow-2xl 
        border border-[#E6D9C5] 
        my-8 lg:my-12          
        max-h-[50vh]           
        overflow-y-auto         
      ">
      {/* Header */}
      <div className="bg-white pt-6 pb-4 px-6 border-t-4 border-[#8B6F47]">
        <h1
          className="text-center text-black tracking-[0.3em] mb-1"
          style={{ fontSize: "24px", fontWeight: 700 }}
        >
          GODREJ MAJESTY
        </h1>
        <div className="bg-[#8B6F47] text-center py-1">
          <p
            className="text-[#D4AF87] tracking-widest"
            style={{ fontSize: "11px", fontWeight: 600 }}
          >
            SECTOR-12 GREATER NOIDA WEST
          </p>
        </div>
      </div>

      {/* Property Type Badge */}
      <div className="relative">
        <div className="bg-[#3D3D3D] text-white text-center py-3 px-4 mx-6 rounded-full animate-zoom-slow">
          <p
            className="tracking-wider"
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            3 BHK + S & 4 BHK ROYALE RESIDENCES
          </p>
        </div>

        
      {/* Features List */}
      <div className="px-6 pt-8 pb-4 space-y-2">
        <div className="bg-[#8B6F47] text-white text-center py-3 px-4 rounded-lg animate-zoom">
          <p
            className="tracking-widest"
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            "ICONIC TOWER LAUNCHED"
          </p>
        </div>

        <div className="bg-[#E8DCC8] text-[#8B6F47] text-center py-3 px-4 rounded-lg border-2 border-[#D4C4AC] animate-zoom">
          <p style={{ fontSize: "12px", fontWeight: 600 }}>
            PAY PER MONTH SCHEME
          </p>
          <p style={{ fontSize: "12px", fontWeight: 600 }}>STARTS FROM ₹9999/-</p>
        </div>

        <div className="bg-[#8B6F47] text-white text-center py-3 px-4 rounded-lg animate-zoom">
          <p style={{ fontSize: "12px", fontWeight: 600 }}>EOI GENERATION OFFER</p>
          <p style={{ fontSize: "12px", fontWeight: 600 }}>UPTO 42 LACS*</p>
        </div>

        <div className="bg-[#E8DCC8] text-[#8B6F47] text-center py-3 px-4 rounded-lg border-2 border-[#D4C4AC] animate-zoom">
          <p style={{ fontSize: "12px", fontWeight: 600 }}>PAY MORE SAVE MORE</p>
          <p style={{ fontSize: "12px", fontWeight: 600 }}>OFFER UPTO 54 LACS*</p>
        </div>

        <div className="bg-[#8B6F47] text-white text-center py-3 px-4 rounded-lg animate-zoom">
          <p style={{ fontSize: "12px", fontWeight: 600 }}>PAY 20% NOW & REST</p>
          <p style={{ fontSize: "12px", fontWeight: 600 }}>ON POSSESSION</p>
        </div>

        <div className="bg-[#E8DCC8] text-[#8B6F47] text-center py-3 px-4 rounded-lg border-2 border-[#D4C4AC] animate-zoom">
          <p style={{ fontSize: "12px", fontWeight: 600 }}>EXCLUSIVE 30:40:30</p>
          <p style={{ fontSize: "12px", fontWeight: 600 }}>PAYMENT PLAN</p>
        </div>

        <div className="bg-[#8B6F47] text-white text-center py-5 px-4 rounded-lg animate-zoom">
          <p
            className="tracking-[0.3em] mb-1"
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            PRICE STARTS AT
          </p>
          <p
            className="tracking-wider"
            style={{ fontSize: "28px", fontWeight: 700 }}
          >
            ₹2.9 CR*
          </p>
          <p
            className="tracking-[0.3em]"
            style={{ fontSize: "16px", fontWeight: 600 }}
          >
            ONWARDS
          </p>
        </div>
      </div>

      {/* Download Buttons */}
      <div className="px-6 pb-6 space-y-4">
        <button className="w-full bg-[#8B6F47] hover:bg-[#6F5838] text-white py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 animate-zoom">
          <span
            className="tracking-wider"
            style={{ fontSize: "14px", fontWeight: 700 }}
          >
            DOWNLOAD BROCHURE
          </span>
        </button>

        <button className="w-full bg-[#3D3D3D] hover:bg-[#2A2A2A] text-white py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 animate-zoom">
          <span
            className="tracking-wider"
            style={{ fontSize: "14px", fontWeight: 700 }}
          >
            GET MORE DETAILS
          </span>   
        </button>
      </div>
    </div>
    </div>
  );
};