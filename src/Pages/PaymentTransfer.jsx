import { useState } from "react";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import PaymentSection from "../Component/PaymentSection/PaymentSection";
import HeroSection from "../Component/HeroSection/HeroSection";

function PaymentTransfer() {
  return (
    <>
      <HeroSection />
      <PaymentSection />
      <Footer />
    </>
  );
}

export default PaymentTransfer;
