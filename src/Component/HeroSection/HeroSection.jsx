import { Link, useLocation } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";

function HeroSection() {
  const location = useLocation();

  return (
    <>
      <section id="banner" className="container-fluid bg-body-custom pt-7">
        <Container>
          <Row>
            <Col md={6} className="pb-3">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="lead">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              {location.pathname === "/" && (
                <Link to="/car" className="btn btn-success fw-bold">
                  Mulai Sewa Mobil
                </Link>
              )}
            </Col>
            <Col md={6}>
              <Image
                fluid
                src="/src/assets/images/img_car.png"
                className="mt-5"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HeroSection;
