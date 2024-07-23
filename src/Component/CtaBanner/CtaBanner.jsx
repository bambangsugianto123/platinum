// import './CtaBanner.css';

import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CtaBanner() {
  return (
    <>
      <section id="ctaBanner">
        <Container className="my-5">
          <Row>
            <Card className="bg-primary h-100 p-5 text-center">
              <Card.Title className=" text-white my-2">
                Sewa Mobil di (Lokasimu) Sekarang
              </Card.Title>

              <Card.Text className="my-2 text-white lead p-md-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Col>
                <Link to="/car" className="btn btn-success fw-bold">
                  Mulai Sewa Mobil
                </Link>
              </Col>
            </Card>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CtaBanner;
