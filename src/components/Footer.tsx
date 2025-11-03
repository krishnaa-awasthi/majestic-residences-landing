import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Majestic <span className="text-gold">Residences</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience timeless luxury with Lutyens-inspired architecture and
              modern amenities. Your dream home awaits.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Overview", href: "highlights" },
                { label: "Amenities", href: "amenities" },
                { label: "Floor Plans", href: "unit-plans" },
                { label: "Gallery", href: "gallery" },
                { label: "Location", href: "location" },
                { label: "Contact", href: "enquiry" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-300">+91 98765 43211</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-gray-300">info@majesticresidences.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Premium Location, Central Delhi<br />
                  New Delhi - 110001
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              RERA Registration No: DL/2024/12345 | MahaRERA No: P52100012345
            </p>
            <p>
              © {new Date().getFullYear()} Majestic Residences. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white shadow-luxury transition-all hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <span className="text-2xl">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
