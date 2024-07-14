import React, { Fragment} from "react";
import Footer from "../Component/Footer/Footer";
import CarSection from "../Component/CarSection/CarSection";
import HeroSection from "../Component/HeroSection/HeroSection";


function Car() {
    return (
        <Fragment>
            <HeroSection isButtonShow={false}/>
            <CarSection />
            <Footer />
        </Fragment>
    )
}

export default Car;