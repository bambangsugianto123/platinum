import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/redux/reducerSlices/authSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { toast } from "react-toastify";

function HeroSection() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const handleLogout = () => {
    try {
      dispatch(logout());
      navigate("/");
      toast.success("Logout Success");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error?.error);
    }
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-sticky");
      } else {
        navbar.classList.remove("navbar-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section id="navbar">
        <Navbar expand={"lg"} className="navbar fixed-top bg-body-custom mb-3">
          <Container>
            <Navbar.Brand>
              <Link to={"/"} className="btn btn-primary fw-bold">
                Cars-Rental
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"lg"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#ourServices">Our Services</Nav.Link>
                  <Nav.Link href="#whyUs">Why Us</Nav.Link>
                  <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#FAQ">FAQ</Nav.Link>
                  {!userInfo ? (
                    <Button
                      as={Link}
                      to={"/login"}
                      variant="success"
                      className="btn btn-success fw-bold"
                    >
                      Login
                    </Button>
                  ) : (
                    <Button onClick={handleLogout}> Logout</Button>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </section>

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
