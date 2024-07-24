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
              <a href="#" className="btn btn-primary fw-bold">
                Cars-Rental
              </a>
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

      {/* <section id="hero" style={{ minHeight: "500px" }}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container mt-3">
            <a className="navbar-brand text-light px-3 ml-3" href="/">
              BinarRent
            </a>
            <button
              onClick={() => setSidebar("show")}
              className="navbar-toggler"
              type="button"
              aria-label="open sidebar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`sidebar-background ${sidebar}`}
              onClick={() => setSidebar("")}
            ></div>
            <div className={`navbar-collapse ${sidebar}`} id="navbarNav">
              <button
                onClick={() => setSidebar("")}
                className={`close-navbar ${sidebar} justify-content-center align-items-center`}
                type="button"
                aria-label="close sidebar"
              >
                ✕
              </button>
              <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/#ourServices">
                    Our Services
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/#whyUs">
                    Why Us
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item mr-3">
                  {isLoggedIn ? (
                    <button
                      className="nav-link btn bg-success text-light d-flex justify-content-center px-3"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      className="nav-link btn bg-success text-light d-flex justify-content-center px-3"
                      onClick={() => navigate("/signup")}
                    >
                      Register
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="mt-4 mr-4">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <a href="/car" className="text-reset text-decoration-none">
                {isButtonShow && (
                  <button className="btn btn-success">Mulai Sewa Mobil</button>
                )}
              </a>
            </div>
            <div className="col-lg-6">
              <div className="car-background"></div>
              <img className="car-img" src="/Assets/car.png" alt="car" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default HeroSection;
