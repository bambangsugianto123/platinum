import E_tiket from "../Component/e-tiket/E_tiket";
import Footer from "../Component/Footer/Footer";
import Navigation from "../Component/Navigation/Navigation";

const E_Tiket = () => {
  return (
    <>
      <Navigation />
      <div className="bg-body-custom" style={{ height: "200px" }}></div>
      <E_tiket />
      <Footer />
    </>
  );
};

export default E_Tiket;
