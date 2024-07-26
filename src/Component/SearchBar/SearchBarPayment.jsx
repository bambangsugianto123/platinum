import { useEffect } from "react";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
// import "./style.css";

import { Container, Row, Col, Badge } from "react-bootstrap";

function SearchBarPayment({ detailCar }) {
  const [carDetail, setCarDetail] = useState({});
  const [detailOrder, setDetailOrder] = useState({});

  useEffect(() => {
    if (detailCar) {
      setCarDetail(detailCar.Car);
      setDetailOrder(detailCar);
    }
  }, [detailCar]);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  if (!detailCar) return;
  return (
    <section
      id="searchBarPayment"
      className="mb-5  "
      style={{ marginTop: "-120px" }}
    >
      <div className="container ">
        <Container className="section-step mt-3">
          <Row className="justify-content-end">
            <Row md="auto" className="justify-content-end">
              <Col className="d-flex align-items-center gap-2 fs-6">
                <Badge
                  bg="light"
                  text="dark"
                  className="border border-primary"
                  pill
                >
                  1
                </Badge>
                <div className="label">Pilih Metode</div>
                <img src="/Assets/step.png" alt="Step Indicator" />
              </Col>
              <Col className="d-flex align-items-center gap-2 fs-6">
                <Badge
                  bg="light"
                  text="dark"
                  className="border border-primary"
                  pill
                >
                  2
                </Badge>
                <div className="label">Bayar</div>
                <img src="/Assets/step.png" alt="Step Indicator" />
              </Col>
              <Col className="d-flex align-items-center gap-2 fs-6">
                <Badge
                  bg="light"
                  text="dark"
                  className="border border-primary"
                  pill
                >
                  3
                </Badge>
                <div className="label">Tiket</div>
              </Col>
            </Row>
          </Row>
        </Container>

        <div className=" d-flex row justify-content-center">
          <div className="row"></div>

          <div
            className="card p-3"
            style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", width: "100%" }}
          >
            <h4>Detail Pesananmu</h4>
            <div className="row mt-3">
              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <label htmlFor="name">Nama/Tipe Mobil</label>
                <div>{carDetail?.name}</div>
              </div>

              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <label htmlFor="category">Kategori</label>
                <div>{carDetail?.category}</div>
              </div>

              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <label htmlFor="price">Tanggal Mulai Sewa</label>
                <div>{formatDate(detailOrder?.start_rent_at)}</div>
              </div>

              <div className="col-lg-2 d-flex flex-column justify-content-center">
                <label htmlFor="status">Tanggal Akhir Sewa</label>
                <div>{formatDate(detailOrder?.finish_rent_at)}</div>
              </div>

              <div className="col-lg-1 d-flex align-items-end"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBarPayment;
