import { Button } from "@/components/ui/button";

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            Experience the epitome of luxury living at Godrej Majesty, where every detail is crafted to perfection. 
            Nestled in the prime Sector 12 of Greater Noida West, these exquisite 3 & 4 BHK residences redefine 
            urban living with their sophisticated design and impeccable craftsmanship.
            <br /><br />
            Spread across a meticulously planned development, Godrej Majesty offers spacious apartments that 
            blend contemporary aesthetics with functional design. Each residence is thoughtfully designed to 
            provide ample natural light, ventilation, and views of the surrounding greenery, creating a perfect 
            harmony between indoor and outdoor living.
          </p>

          {/* Centered Video Section */}
          <div className="flex justify-center mb-12">
            <video
              src="https://www.godrejperoperties.in/Majesty/video.mp4" // <-- change this to your actual video path
              controls
              autoPlay
              muted
              loop
              className="rounded-2xl shadow-2xl border border-gray-300 w-full md:w-3/4 lg:w-2/3 transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Centered Download Button */}
        <div className="text-center mt-10">
          <Button
            className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => window.open('/brochure.pdf', '_blank')}
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
