import Footer from "../Component/Footer/Footer";
import CarDetailSection from "../Component/CarDetailSection/CarDetailSection";
import Navigation from "../Component/Navigation/Navigation";

function CarDetail() {
  return (
    <>
      <Navigation />
      <div className="bg-body-custom" style={{ height: "200px" }}></div>
      <CarDetailSection />
      <Footer />
    </>
  );
}

export default CarDetail;
