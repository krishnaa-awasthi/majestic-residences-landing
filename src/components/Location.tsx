import React from "react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Prime Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically located with seamless connectivity to everything that matters
          </p>
        </div>

        {/* Embedded Google Map */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1383101887177!2d77.47655377495433!3d28.565609187117623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5228dabc701%3A0x21b5ca0ce3446638!2sGodrej%20Majesty%2C%20Sector%2012%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1762195054647!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Majestic Residences Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;