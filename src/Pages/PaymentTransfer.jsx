import Footer from "../Component/Footer/Footer";
import PaymentSection from "../Component/PaymentSection/PaymentSection";
import Navigation from "../Component/Navigation/Navigation";

function PaymentTransfer() {
  return (
    <>
      <Navigation />
      <div className="bg-body-custom" style={{ height: "200px" }}></div>
      <PaymentSection />
      <Footer />
    </>
  );
}

export default PaymentTransfer;
