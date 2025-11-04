import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import EnquiryForm from "@/components/EnquiryForm";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [manualEnquiryOpen, setManualEnquiryOpen] = useState(false);

  // ✅ Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Overview", href: "highlights" },
    { label: "Amenities", href: "amenities" },
    { label: "Floor Plans", href: "unit-plans" },
    { label: "Gallery", href: "gallery" },
    { label: "Location", href: "location" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-card" : "bg-white"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://www.godrejperoperties.in/Majesty/assets/img/comman/logo-1.png"
                alt="Majestic Residences Logo"
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => setManualEnquiryOpen(true)} // ✅ Manual trigger
                className="bg-gradient-gold text-white font-semibold rounded-full px-6 hover:scale-105 transition-transform"
              >
                Enquire Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-2 text-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  setManualEnquiryOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-gold text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* ✅ Enquiry Form Handles Auto + Manual Opening */}
      <EnquiryForm
        open={manualEnquiryOpen}
        onClose={() => setManualEnquiryOpen(false)}
      />
    </>
  );
};

export default Navbar;
