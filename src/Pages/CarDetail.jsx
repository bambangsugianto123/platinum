import React, { Fragment, useState } from "react";
import Footer from "../Component/Footer/Footer";
import CarDetailSection from "../Component/CarDetailSection/CarDetailSection";
import HeroSection from "../Component/HeroSection/HeroSection";

function CarDetail() {
  return (
    <>
      <HeroSection />
      <CarDetailSection />
      <Footer />
    </>
  );
}

export default CarDetail;
