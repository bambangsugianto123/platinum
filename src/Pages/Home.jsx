import HeroSection from "../Component/HeroSection/HeroSection";
import OurServices from "../Component/OurService/OurServices";
import WhyUs from "../Component/WhyUs/WhyUs";
import CtaBanner from "../Component/CtaBanner/CtaBanner";
import Faq from "../Component/Faq/Faq";
import Footer from "../Component/Footer/Footer";
import Testimonial from "../Component/Testimonial/Testimonial";
import Navigation from "../Component/Navigation/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CtaBanner />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
