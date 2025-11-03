import { Button } from "@/components/ui/button";
import { Download, Calendar, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

const Hero = () => {
  const scrollToEnquiry = () => {
    const element = document.getElementById("enquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Majestic Residences"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          Majestic Residences
        </h1>
        <p className="text-xl md:text-2xl mb-2 font-light">
          3 & 4 BHK Luxury Homes | Starting ₹2.9 Cr
        </p>
        <p className="text-lg md:text-xl mb-8 italic opacity-90">
          Lutyens-Inspired Architecture Meets Modern Comfort
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-gold text-white font-semibold rounded-full px-8 hover:scale-105 transition-transform shadow-luxury"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Brochure
          </Button>
          <Button
            onClick={scrollToEnquiry}
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold rounded-full px-8 hover:scale-105 transition-transform backdrop-blur-sm"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Visit
          </Button>
        </div>
      </div>

      {/* Floating Contact Strip */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-luxury"
          onClick={() => window.open("tel:+919876543210", "_blank")}
        >
          <Phone className="mr-2 h-5 w-5" />
          Call Now
        </Button>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full shadow-luxury"
          onClick={() => window.open("https://wa.me/919876543210", "_blank")}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default Hero;
