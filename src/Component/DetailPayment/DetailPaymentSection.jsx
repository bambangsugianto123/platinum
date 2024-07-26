import { useState } from "react";
import SearchBarPayment from "../SearchBar/SearchBarPayment";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/fontawesome-free-solid";
import { useParams, useNavigate } from "react-router-dom";

import { useGetOrderByIdQuery } from "../../services/redux/apiSlices/orderApi";
import { useGetCarByIdQuery } from "../../services/redux/apiSlices/carApi";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";

function DetailPaymentSection() {
  const [isActive, setIsActive] = useState({ type: "", active: false });
  const [detailCar, setDetailCar] = useState({});
  const [detailOrder, setDetailOrder] = useState({});
  const [detailToggle, setDetailToggle] = useState(true);
  const navigate = useNavigate();

  let { id } = useParams();
  const {
    data: order,
    isLoading: isOrderLoading,
    error: orderError,
  } = useGetOrderByIdQuery(id);

  const {
    data: car,
    isLoading: isCarLoading,
    error: carError,
  } = useGetCarByIdQuery(order?.CarId);

  useEffect(() => {
    if (order) {
      setDetailOrder(order);
    }
    if (car) {
      setDetailCar(car);
    }
  }, [order, car]);

  const toggleDescription = () => {
    setDetailToggle((current) => !current);
    console.log(detailToggle);
  };

  const handleClick = (type) => {
    if (type == "BNI") {
      setIsActive(() => ({ type, active: true }));
    } else if (type == "BCA") {
      setIsActive(() => ({ type, active: true }));
    } else if (type == "Mandiri") {
      setIsActive(() => ({ type, active: true }));
    }
  };

  const checkButtonPayment = () => {
    return isActive.active == true ? false : true;
  };

  if (isOrderLoading || isCarLoading) {
    return <p>Loading...</p>;
  }

  if (orderError || carError) {
    return <p>Error loading data</p>;
  }

  const findDayDifference = (startDate, endDate) => {
    const DAY_UNIT_IN_MILLISECONDS = 24 * 3600 * 1000;
    const diffMiliSeconds =
      new Date(endDate).getTime() - new Date(startDate).getTime();
    return diffMiliSeconds / DAY_UNIT_IN_MILLISECONDS;
  };

  const bankOptions = [
    { name: "BCA", text: "BCA Transfer" },
    { name: "BNI", text: "BNI Transfer" },
    { name: "Mandiri", text: "Mandiri Transfer" },
  ];

  return (
    <>
      <SearchBarPayment detailCar={detailOrder} />
      <section className="mb-5" id="detailPayment">
        <Container>
          <Row className="row justify-content-between">
            <div className="col-12 col-md-6 card py-4 payment-card h-100">
              <h5>Pilih Bank Transfer</h5>
              <p>
                Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
                atau Mobile Banking
              </p>
              {bankOptions.map((option, index) => (
                <Row key={index}>
                  <Col className="d-flex gap-2 align-items-center mb-3 border-bottom pb-3">
                    <Button
                      variant={
                        isActive.type === option.name ? "primary" : "light"
                      }
                      onClick={() => handleClick(option.name)}
                      className="d-flex align-items-center  justify-content-center w-25"
                    >
                      <span className="fw-bold">{option.name}</span>
                    </Button>
                    <span>{option.text}</span>
                  </Col>
                </Row>
              ))}
            </div>

            <div className="col-12 col-md-5 card payment-card">
              <div className="detail-payment">
                <div className="detail-payment-item">
                  <h4>{detailCar.name}</h4>
                  <p>{detailCar.category}</p>
                </div>
                <div className="detail-payment-description">
                  <div className="header-detail d-flex justify-content-between">
                    <h5>
                      Total{" "}
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        onClick={toggleDescription}
                        icon={detailToggle ? faChevronDown : faChevronUp}
                      />{" "}
                    </h5>
                    <h5>{detailOrder.total_price}</h5>
                  </div>
                </div>
                <div
                  style={{
                    opacity: !detailToggle ? "0" : "1",
                    transition: "all .2s",
                    height: !detailToggle ? "0px" : "auto",
                    visibility: `${!detailToggle ? "hidden" : "visible"}`,
                  }}
                  className="content-detail mt-3"
                >
                  <div className="content-detail-section">
                    <h5>Harga</h5>
                    <ul className="lh-lg" style={{ listStyleType: "disc" }}>
                      <li className="d-flex justify-content-between mb-1">
                        <p className="">
                          Sewa Mobil {detailCar.price} X{" "}
                          {findDayDifference(
                            detailOrder.start_rent_at,
                            detailOrder.finish_rent_at
                          )}{" "}
                          Hari
                        </p>
                        <p className="">{detailOrder.total_price}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="content-detail-section">
                    <h5>Biaya Lainnya</h5>
                    <ul className="lh-lg" style={{ listStyleType: "disc" }}>
                      <li className="d-flex justify-content-between mb-1">
                        <p className="">Pajak</p>
                        <p className="text-green">Termasuk</p>
                      </li>
                      <li className="d-flex justify-content-between mb-1">
                        <p className="">Biaya Makan Supir</p>
                        <p className="text-green">Termasuk</p>
                      </li>
                    </ul>
                  </div>
                  <div className="content-detail-section">
                    <h5>Belum Termasuk</h5>
                    <ul className="lh-lg" style={{ listStyleType: "disc" }}>
                      <li className="d-flex justify-content-between mb-1">
                        <p className="">Bensin</p>
                      </li>
                      <li className="d-flex justify-content-between mb-1">
                        <p className="">Tol dan Parkir</p>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="total-payment">
                    <div className="d-flex justify-content-between my-3">
                      <h5>Total</h5>
                      <h5>{detailOrder.total_price}</h5>
                    </div>
                  </div>
                </div>
                <Button
                  type="button"
                  disabled={checkButtonPayment()}
                  className={
                    "btn btn-success w-100 mb-3" +
                    (checkButtonPayment() == true ? " disabled" : "")
                  }
                  onClick={() => navigate(`/payment/transfer/${id}`)}
                >
                  Bayar
                </Button>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default DetailPaymentSection;
