import { Fragment } from "react";
import Header from "../Component/e-tiket/Header";
import E_tiket from "../Component/e-tiket/E_tiket";
import Footer from "../Component/Footer/Footer";

const E_Tiket = () => {
  return (
    <Fragment>
      <Header />
      <E_tiket />
      <Footer />
    </Fragment>
  );
};

export default E_Tiket;
