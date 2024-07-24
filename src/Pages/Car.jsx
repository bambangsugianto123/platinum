import Footer from "../Component/Footer/Footer";
import CarSection from "../Component/CarSection/CarSection";
import HeroSection from "../Component/HeroSection/HeroSection";

function Car() {
  return (
    <>
      <HeroSection />
      <div className="mb-5 p-1"></div>
      <CarSection />
      <Footer />
    </>
  );
}

export default Car;
