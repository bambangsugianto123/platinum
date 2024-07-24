import { useState } from "react";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import PaymentSection from "../Component/PaymentSection/PaymentSection";
import ProgressBar from "../Component/ProgressBar/ProgressBar";

function PaymentTransfer() {
  const [page, setPage] = useState("payment method");

  return (
    <>
      <Header />
      <ProgressBar page={page} setPage={setPage} />
      <PaymentSection />
      <Footer />
    </>
  );
}

export default PaymentTransfer;
