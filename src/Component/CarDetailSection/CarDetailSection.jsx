import { useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "../../services/redux/apiSlices/carApi";
import SearchCarInput from "../CarSection/SearchCarInput";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Calendar } from "primereact/calendar";

const Car = () => {
  const [dates, setDates] = useState();
  console.log(dates);
  const [carsParams, setCarsParams] = useState({
    name: "",
    category: "",
    isRented: "",
    minPrice: "",
    maxPrice: "",
    page: "",
    pageSize: 8,
  });

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

  const { id } = useParams();
  const {
    data: car,
    isLoading,
    // error
  } = useGetCarByIdQuery(id);

  function formatPrice(price) {
    return price.toLocaleString("id-ID").replace(/,/g, "."); // Replace commas with dots directly
  }
  const renderSpiner = (
    <div className="container mt-7 ">
      <div className="row justify-content-center">
        <div
          className="spinner-border text-success"
          style={{ width: "7rem", height: "7rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isLoading ? (
        renderSpiner
      ) : (
        <>
          <SearchCarInput onSearch={handleSearch} />

          <section>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-7">
                  <div className="card p-4 shadow">
                    <h5>Tentang Paket</h5>
                    <h5>Include</h5>
                    <ul>
                      <li>
                        <p>
                          Apa saja yang termasuk dalam paket misal durasi max 12
                          jam
                        </p>
                      </li>
                      <li>
                        <p>Sudah termasuk bensin selama 12 jam</p>
                      </li>
                      <li>
                        <p>Sudah termasuk Tiket Wisata</p>
                      </li>
                      <li>
                        <p>Sudah termasuk pajak</p>
                      </li>
                    </ul>
                    <h5>Exclude</h5>
                    <ul>
                      <li>
                        <p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
                      </li>
                      <li>
                        <p>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </p>
                      </li>
                      <li>
                        <p>Tidak termasuk akomodasi penginapan</p>
                      </li>
                    </ul>
                    <h5>Refund, Reschedule, Overtime</h5>
                    <ul>
                      <li>
                        <p>Tidak termasuk biaya makan sopir Rp 75.000/hari</p>
                      </li>
                      <li>
                        <p>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </p>
                      </li>
                      <li>
                        <p>Tidak termasuk akomodasi penginapan</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="card p-4 shadow">
                    <img
                      src={car?.image}
                      className="card-img-top"
                      alt={car?.name}
                    />
                    <h5 className="card-title mt-3">{car?.name}</h5>
                    <p className="card-text">
                      {car?.category === "medium"
                        ? "4 - 6 orang"
                        : car?.category === "large"
                        ? "8 - 12 penumpang"
                        : "2 - 4 penumpang"}
                    </p>

                    <Row className="mb-3">
                      <Col>
                        <p>Tentukan lama sewa mobil (max, 7hari) </p>
                        <Calendar
                          value={dates}
                          onChange={(e) => setDates(e.value)}
                          selectionMode="range"
                          readOnlyInput
                          hideOnRangeSelection
                        />
                      </Col>
                    </Row>

                    <div className="row">
                      <div className="col-6">Total</div>
                      <div className="col-6 text-end">
                        Rp. {formatPrice(car?.price)}
                      </div>
                    </div>

                    <Row>
                      <Button variant="success">Lanjutkan Pembayaran</Button>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default Car;
