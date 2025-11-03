import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f9f2e7] text-center text-[#5a4020] py-16 px-6 leading-relaxed text-sm">
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-lg font-semibold tracking-wide">GODREJ MAJESTY</h3>
        <p className="font-medium">
          RERA No. : UPRERAPRJ5082304/2025
        </p>
        <p>
          RERA Website :{" "}
          <a
            href="https://www.up-rera.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            https://www.up-rera.in/
          </a>
        </p>
        <p className="font-medium">
          MARKETING PARTNER RERA Reg. No UPRERAAGT21187
        </p>

        <p>
          <span className="font-semibold">Disclaimer & Privacy Policy:</span> <br />
          The content provided is for informational purposes only and does not constitute an offer to avail any service.
          Prices mentioned are subject to change without notice, and properties are subject to availability. Images are
          for representation purposes only. This is the official website of an authorized marketing partner. Data may be
          shared with RERA-registered brokers/companies for further processing. Updates may be sent to the registered
          mobile number/email ID. All rights reserved.
        </p>

        <p>
          <span className="font-semibold">Privacy Policy:</span> <br />
          The content is for information purposes only and does not constitute an offer to avail of any service. Prices
          mentioned are subject to change without notice and properties mentioned are subject to availability. Images are
          for representation purpose only. This is not the official website of Godrej Majesty. We may share data with
          RERA registered brokers/companies for further processing. We may also send updates to the registered
          mobile/email ID.
        </p>

        <p>
          <span className="font-semibold">Terms and Conditions:</span> <br />
          You understand that your enquiry about our properties on this website or any other channels (online/offline/any
          other) that we use for promoting and/or marketing are captured and stored in our system for analysis and
          present and future promotions.
        </p>

        <p>
          You agree to be contacted by us and/or our affiliates and marketing partners for similar properties or related
          services via all communication and information channels including but not limited to WhatsApp, Phone (overriding
          NDNC registration), SMS, E-mail, Mobile application, etc.
        </p>

        <p className="font-medium mt-4">
          Advertiser Information: <br />
          Mr. Kunwar Singh Rawat <br />
          RERA No. UPRERAAGT21187 <br />
          Authorized Channel Partner For Marketing/Advertising/Promoting of Godrej Majesty Residential Project.
        </p>

        <a
          href="#"
          className="block text-blue-600 underline hover:text-blue-800 font-medium"
        >
          Click To View Channel Partner RERA Certificate
        </a>

        <button className="mt-4 text-blue-600 underline hover:text-blue-800">
          Read Less
        </button>
      </div>
    </footer>
  );
};

export default Footer;
