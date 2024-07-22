import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAllCars } from "../../Feature/Cars/cars-slice";
import SearchBar from "../SearchBar/SearchBar";

function CarSection() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    return state.cars.listCars.cars;
  });
  console.log(cars);
  const pageCount = useSelector((state) => {
    return state.cars.listCars.pageCount;
  });

  const [loading, setLoading] = useState(true);

  const [carName, setCarName] = useState("");
  const [carCategory, setCarCategory] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carStatus, setCarStatus] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const carNameParams = searchParams.get("name");
  const categoryParams = searchParams.get("category");
  const priceParams = searchParams.get("price");
  const statusParams = searchParams.get("status");

  const [currentPage, setCurrentPage] = useState(1);

  const params = {
    name: carNameParams,
    category: categoryParams,
    isRented: statusParams,
    minPrice: priceParams,
    page: currentPage,
  };

  const loadCar = async () => {
    try {
      setLoading(true);
      await dispatch(getAllCars(params));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCar();
  }, [
    currentPage,
    carNameParams,
    categoryParams,
    categoryParams,
    statusParams,
  ]);

  return (
    <Fragment>
      <SearchBar
        setSearchParams={setSearchParams}
        carName={carName}
        setCarName={setCarName}
        carCategory={carCategory}
        setCarCategory={setCarCategory}
        carPrice={carPrice}
        setCarPrice={setCarPrice}
        carStatus={carStatus}
        setCarStatus={setCarStatus}
      />
      <section id="cars">
        <div className="container">
          <div className="d-flex justify-content-end mb-5">
            {currentPage > 1 ? (
              <button
                className="col-3 btn btn-secondary"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                previous
              </button>
            ) : (
              <button className=" col-3 btn btn-secondary" disabled>
                previous
              </button>
            )}
            <p className="col 2 d-flex justify-content-center align-items-center mb-0">
              Page {currentPage}
            </p>
            {cars && currentPage < pageCount ? (
              <button
                className=" col-3 btn btn-secondary"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                next
              </button>
            ) : (
              <button className=" col-3 btn btn-secondary" disabled>
                next
              </button>
            )}
          </div>
          <div className="row">
            {!loading ? (
              cars?.length ? (
                cars?.map((car, index) => {
                  return (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div
                        className="card p-3 d-flex flex-column justify-content-between"
                        style={{ height: "100%" }}
                      >
                        {car.image ? (
                          <img
                            src={car.image}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <img
                            src="/Assets/dummy.png"
                            alt=""
                            style={{ width: "100%" }}
                          />
                        )}

                        <div>
                          {car.name ? (
                            <p className="mt-3">{car.name}</p>
                          ) : (
                            <p className="mt-3">Tidak ada nama</p>
                          )}
                          {car.price ? (
                            <h5>
                              Rp {car.price.toLocaleString("en-US")}/ Hari
                            </h5>
                          ) : (
                            <h5>Tidak Ada Harga</h5>
                          )}
                          <p className="fw-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.{" "}
                          </p>
                          <a
                            href={`/car/${car.id}`}
                            className="btn btn-success"
                            style={{ width: "100%" }}
                          >
                            Pilih Mobil
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2 className="text-center">Mobil Tidak Ditemukan</h2>
              )
            ) : (
              <h2 className="text-center">Loading....</h2>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default CarSection;
