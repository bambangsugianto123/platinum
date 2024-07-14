import React, { Fragment, useState} from "react";
import DetailPaymentSection from "../Component/DetailPayment/DetailPaymentSection";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import PaymentSection from "../Component/PaymentSection/PaymentSection";


function Payment() {

    return (
        <Fragment>
            <Header />
            <DetailPaymentSection />

            <Footer />
        </Fragment>
    )
}

export default Payment;