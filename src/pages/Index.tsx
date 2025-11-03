import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import UnitPlans from "@/components/UnitPlans";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <UnitPlans />
        <Amenities />
        <Gallery />
        <Location />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
