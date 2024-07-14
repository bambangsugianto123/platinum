import React, { Fragment } from "react";
import { useState } from "react";
import SearchBarPayment from "../SearchBar/SearchBarPayment";
import "./detailPayment.css";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronDown, faChevronUp } from '@fortawesome/fontawesome-free-solid'
import { useParams, useNavigate } from "react-router-dom";


const API_URL = "";
const getLocalStorage = JSON.parse(localStorage.getItem("user"));
function DetailPaymentSection() {
  const [isActive, setIsActive] = useState({ type: "", active: false });
  const [detailCar, setDetailCar] = useState({});
  const [detailOrder, setDetailOrder] = useState({});
  const [detailToggle, setDetailToggle] = useState(true);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  const toggleDescription = () => {
    setDetailToggle((current) => (!current))
    console.log(detailToggle)
  }
  const handleClick = (type) => {
    if (type == "BNI") {
      setIsActive(() => ({  type, active: true }));
    } else if (type == "BCA") {
      setIsActive(() => ({  type, active: true }));
    } else if (type == "Mandiri") {
      setIsActive(() => ({  type, active: true }));
    }
  };

  const checkButtonPayment = () => {
    return isActive.active == true ? false : true;
  };

  const config = {
    headers: { access_token: getLocalStorage.access_token },
  };

  const getDetailCar = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/order/${id}`, config);
      const res2 = await axios.get(`${API_URL}/car/${res.data.CarId}`);
      setDetailOrder(res.data);
      setDetailCar(res2.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailCar();
  }, []);

  const findDayDifference = (startDate, endDate) => {
    const DAY_UNIT_IN_MILLISECONDS = 24 * 3600 * 1000;
    const diffMiliSeconds =
      new Date(endDate).getTime() - new Date(startDate).getTime();
    return diffMiliSeconds / DAY_UNIT_IN_MILLISECONDS;
  };

  const formatterRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  if (loading) {
    return;
  } else {
    return (
      <>
        <SearchBarPayment detailCar={detailOrder} />
        <section className="mb-5" id="detailPayment">
          <div className="container">
            <div className="row justify-content-between">
              <div style={{ height: '100%' }} className="col-12 col-md-6 card py-4 payment-card">
                <h5>Pilih Bank Transfer</h5>
                <p>
                  Kamu bisa membayar dengan transfer melalui ATM, Internet
                  Banking atau Mobile Banking
                </p>
                <ul
                  className="list-group list-group-flush"
                  style={{ border: "none" }}
                >
                  <li className="list-group-item flex">
                    <button
                      onClick={() => handleClick("BCA")}
                      className={
                        isActive.type == "BCA" && isActive.type
                          ? "button-bank active"
                          : "button-bank"
                      }
                    >
                      <div className="d-flex align-items-center">
                        <div className="bank-text">BCA</div>
                        <div className="bank-text-info">BCA Transfer</div>
                      </div>
                    </button>
                  </li>
                  <li className="list-group-item ">
                    <button
                      onClick={() => handleClick("BNI")}
                      className={
                        isActive.type == "BNI" && isActive.type
                          ? "button-bank active"
                          : "button-bank"
                      }
                    >
                      <div className="d-flex align-items-center">
                        <div className="bank-text">BNI</div>
                        <div className="bank-text-info">BNI Transfer</div>
                      </div>
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      onClick={() => handleClick("Mandiri")}
                      className={
                        isActive.type == "Mandiri" && isActive.type
                          ? "button-bank active"
                          : "button-bank"
                      }
                    >
                      <div className="d-flex align-items-center">
                        <div className="bank-text">Mandiri</div>
                        <div className="bank-text-info">Mandiri Transfer</div>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-5 card payment-card">
                <div className="detail-payment">
                  <div className="detail-payment-item">
                    <h4>{detailCar.name}</h4>
                    <p>{detailCar.category}</p>
                  </div>
                  <div className="detail-payment-description">
                    <div className="header-detail d-flex justify-content-between">
                      <h5>Total <FontAwesomeIcon style={{ cursor: 'pointer' }} onClick={toggleDescription} icon={detailToggle ?faChevronDown : faChevronUp} /> </h5>
                      <h5>{formatterRupiah(detailOrder.total_price)}</h5>
                    </div>
                  </div>
                  <div style={{ 
                    opacity: !detailToggle ? "0" : "1",
                   transition: "all .2s",
                   height: !detailToggle ? "0px" : "auto",
                    visibility: `${!detailToggle ? 'hidden' : 'visible'}` }} className="content-detail mt-3">
                    <div className="content-detail-section">
                      <h5>Harga</h5>
                      <ul className="lh-lg" style={{ listStyleType: "disc" }}>
                        <li className="d-flex justify-content-between mb-1">
                          <p className="">
                            Sewa Mobil {formatterRupiah(detailCar.price)} X{" "}
                            {findDayDifference(
                              detailOrder.start_rent_at,
                              detailOrder.finish_rent_at
                            )}{" "}
                            Hari
                          </p>
                          <p className="">
                            {formatterRupiah(detailOrder.total_price)}
                          </p>
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
                        <h5>{formatterRupiah(detailOrder.total_price)}</h5>
                      </div>
                     
                    </div>
                  </div>
                  <button
                        type="button"
                        disabled={checkButtonPayment()}
                        className={
                          "cst-button" +
                          (checkButtonPayment() == true ? " disabled" : "")
                        }
                        onClick={() => navigate(`/payment/transfer/${id}`)}
                      >
                        Bayar
                      </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DetailPaymentSection;
