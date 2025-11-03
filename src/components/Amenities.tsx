import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Amenities = () => {
  const amenities = [
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Jogging-Track.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Cycling-Track.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/GYM.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Outdoor-Game-Area.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Jacuzzi.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Admin-Office.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Pet-Park.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Barbeque-Pit.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Amphitheatre.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Outdoor-Party-Area.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Reflexology-Pathway.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Senior-Citizen-Park.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Chess-Plaza.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Yoga-And-Meditation-Deck.svg",
    "https://www.godrejperoperties.in/Majesty/assets/img/amenities/Pedestrian-Walkway.svg",
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % amenities.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) => (prev - itemsPerPage + amenities.length) % amenities.length
    );
  };

  const visibleAmenities = [
    ...amenities.slice(startIndex, startIndex + itemsPerPage),
    ...(startIndex + itemsPerPage > amenities.length
      ? amenities.slice(0, (startIndex + itemsPerPage) % amenities.length)
      : []),
  ];

  return (
    <section
      id="amenities"
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "#f5efea" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative flex items-center justify-center">
          
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white shadow-md rounded-full p-3 hover:bg-gold hover:text-white transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div className="overflow-hidden w-full max-w-6xl">
            <div className="flex transition-transform duration-500 ease-in-out">
              {visibleAmenities.map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/5 px-3 flex justify-center items-center"
                >
                  <img
                    src={src}
                    alt={`Amenity ${index}`}
                    className="w-32 h-32 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white shadow-md rounded-full p-3 hover:bg-gold hover:text-white transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
