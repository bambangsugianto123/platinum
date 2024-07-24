import { useState } from "react";
import { useGetCarsQuery } from "../../services/redux/apiSlices/carApi";
import ShowCars from "./ShowCars";
import ShowCarsLoader from "./ShowCarsLoader";
import { useForm } from "react-hook-form";
import CarsPagination from "./CarPagination";
import { Col, Container, Row } from "react-bootstrap";

const CarSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [carsParams, setCarsParams] = useState({
    name: "",
    category: "",
    isRented: "",
    minPrice: "",
    maxPrice: "",
    page: "",
    pageSize: 8,
  });

  const {
    data: carsData,
    isLoading,
    // error,
  } = useGetCarsQuery(carsParams);

  const handleSearch = (formData) => {
    let minPrice = "";
    let maxPrice = "";

    if (formData.price) {
      const [min, max] = formData.price.split("-");
      minPrice = min || "";
      maxPrice = max || "";
    }

    setCarsParams((prev) => ({
      ...prev,
      ...formData,
      minPrice,
      maxPrice,
      page: 1,
    }));
  };

  return (
    <>
      <section id="searchCarInput" style={{ marginTop: "-90px" }}>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <form onSubmit={handleSubmit(handleSearch)}>
                    <div className="row">
                      <div className="col-xl-3">
                        <div className="mb-3">
                          <label htmlFor="carName" className="form-label mb-1">
                            Nama Mobil
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="carName"
                            placeholder="Ketik nama/tipe mobil"
                            {...register("name")}
                          />
                        </div>
                      </div>

                      <div className="col-xl-3">
                        <div className="mb-3">
                          <label htmlFor="category" className="form-label mb-1">
                            Kategori
                          </label>
                          <select
                            className="form-control"
                            id="category"
                            {...register("category")}
                          >
                            <option value="">Pilih Kategori</option>
                            <option value={"small"}>2 - 4 Orang</option>
                            <option value={"medium"}>4 - 6 Orang</option>
                            <option value={"large"}>6 - 8 Orang</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-xl-2">
                        <div className="mb-3">
                          <label htmlFor="price" className="form-label mb-1">
                            Harga
                          </label>
                          <select
                            className="form-control"
                            id="price"
                            {...register("price")}
                          >
                            <option value="">Pilih Harga</option>
                            <option value="100000-500000">
                              100,000 - 500,000
                            </option>
                            <option value="500000-1000000">
                              500,000 - 1,000,000
                            </option>
                            <option value="1000000-2000000">
                              1,000,000 - 2,000,000
                            </option>
                            <option value="2000000-3000000">
                              2,000,000 - 3,000,000
                            </option>
                            <option value="3000000-4000000">
                              3,000,000 - 4,000,000
                            </option>
                            <option value="5000000-10000000">
                              5,000,000 - 10,000,000
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-xl-2">
                        <div className="mb-3">
                          <label htmlFor="status" className="form-label mb-1">
                            Status
                          </label>
                          <select
                            className="form-control"
                            id="status"
                            {...register("isRented")}
                          >
                            <option value="">Pilih Status</option>
                            <option value={true}>Tidak Tersedia</option>
                            <option value={false}>Tersedia</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-xl-2 d-flex align-items-end">
                        <div className="mb-3">
                          <button
                            type="submit"
                            className="btn btn-success same-height d-flex align-self-center"
                          >
                            Cari Mobil
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShowCars cars={carsData} />
      {isLoading && <ShowCarsLoader />}
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <CarsPagination
              carsParams={carsParams}
              setCarsParams={setCarsParams}
              carsData={carsData}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CarSection;
