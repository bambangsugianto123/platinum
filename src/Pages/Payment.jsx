import DetailPaymentSection from "../Component/DetailPayment/DetailPaymentSection";
import Footer from "../Component/Footer/Footer";
import HeroSection from "../Component/HeroSection/HeroSection";
import Navigation from "../Component/Navigation/Navigation";

function Payment() {
  return (
    <>
      <Navigation />
      <div className="bg-body-custom" style={{ height: "200px" }}></div>
      <DetailPaymentSection />
      <Footer />
    </>
  );
}

export default Payment;
