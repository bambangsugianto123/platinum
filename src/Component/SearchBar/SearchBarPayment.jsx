import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import "./style.css";

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
        <div className="section-step ">
          <ul className="stepper stepper-horizontal">
            <li className="completed">
              <img src="/Assets/1.png" alt="" />
              <span className="label">Pilih Metode</span>
            </li>

            <li className="active">
              <img src="/Assets/step.png" alt="" />
              <img src="/Assets/2.png" alt="" />
              <span className="label">Bayar</span>
            </li>

            <li className="warning">
              <img src="/Assets/step.png" alt="" />
              <img src="/Assets/3.png" alt="" />
              <span className="label">Tiket</span>
            </li>
          </ul>
        </div>
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
                <div className="text-secondary">{carDetail?.name}</div>
              </div>

              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <label htmlFor="category">Kategori</label>
                <div className="text-secondary">{carDetail?.category}</div>
              </div>

              <div className="col-lg-3 d-flex flex-column justify-content-center">
                <label htmlFor="price">Tanggal Mulai Sewa</label>
                <div className="text-secondary">
                  {formatDate(detailOrder?.start_rent_at)}
                </div>
              </div>

              <div className="col-lg-2 d-flex flex-column justify-content-center">
                <label htmlFor="status">Tanggal Akhir Sewa</label>
                <div className="text-secondary">
                  {formatDate(detailOrder?.finish_rent_at)}
                </div>
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
