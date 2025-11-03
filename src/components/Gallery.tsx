import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "https://www.godrejperoperties.in/Majesty/assets/img/g1.jpg", alt: "Luxury Interior" },
    { src: "https://www.godrejperoperties.in/Majesty/assets/img/g2.jpg", alt: "Swimming Pool" },
    { src: "https://www.godrejperoperties.in/Majesty/assets/img/g3.jpg", alt: "Clubhouse" },
    { src: "https://www.godrejperoperties.in/Majesty/assets/img/g4.jpg", alt: "Landscaped Gardens" },
    { src: "https://www.godrejperoperties.in/Majesty/assets/img/g5.jpg", alt: "Fitness Center" },
    { src: "https://www.godrejperoperties.in/Majesty/assets/img/g6.webp", alt: "Fitness Center" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Visual Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the elegance and sophistication of Majestic Residences
          </p>
        </div>

        {/* ✅ Three images per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl border-0 bg-black/95 p-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
