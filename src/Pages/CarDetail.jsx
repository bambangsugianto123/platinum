import React, { Fragment, useState} from "react";
import Footer from "../Component/Footer/Footer";
import CarDetailSection from "../Component/CarDetailSection/CarDetailSection";
import Header from "../Component/Header/Header";


function CarDetail() {

    return (
        <Fragment>
            <Header />
            <CarDetailSection />
            <Footer />
        </Fragment>
    )
}

export default CarDetail;