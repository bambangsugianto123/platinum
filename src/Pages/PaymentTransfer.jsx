import { useState } from "react";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import PaymentSection from "../Component/PaymentSection/PaymentSection";
import HeroSection from "../Component/HeroSection/HeroSection";
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
