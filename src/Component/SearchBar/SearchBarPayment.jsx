import { useEffect } from "react";
import { useState } from "react";

import { Container, Row, Col, Badge } from "react-bootstrap";
import Step from "../DetailPayment/Step";

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
      style={{ marginTop: "100px" }}
    >
      <div className="container ">
        <Step step1={true} />

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
