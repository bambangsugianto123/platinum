import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetCarByIdQuery } from "../../services/redux/apiSlices/carApi";
import { useCreateOrderMutation } from "../../services/redux/apiSlices/orderApi";
import SearchCarInput from "../CarSection/SearchCarInput";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Car = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const {
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });
  const [dateRange, setDateRange] = useState([]);
  const [isDateRangeValid, setIsDateRangeValid] = useState(false);
  const navigate = useNavigate();

  const [carsParams, setCarsParams] = useState({
    name: "",
    category: "",
    isRented: "",
    minPrice: "",
    maxPrice: "",
    page: "",
    pageSize: 8,
  });
  const [createOrder] = useCreateOrderMutation();

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

  useEffect(() => {
    setIsDateRangeValid(dateRange && dateRange.length === 2);
  }, [dateRange]);

  const handleOrder = async () => {
    // check if login then navigate to "/login"
    if (!userInfo) {
      toast.error("Please login to make an order.");
      navigate("/login");
      return;
    }
    if (!dateRange || dateRange.length !== 2) {
      toast.error("Please select a valid rental period.");
      return;
    }

    const [startDate, endDate] = dateRange.map(
      (date) => date.toISOString().split("T")[0]
    );

    const orderData = {
      car_id: car.id,
      start_rent_at: startDate,
      finish_rent_at: endDate,
    };

    try {
      const res = await createOrder(orderData).unwrap();
      // console.log("Order created:", res);
      const orderId = res.id; // Assuming 'id' is the field in the response containing the order ID
      toast.success("Order created successfully.");
      navigate(`/payment/${orderId}`); // Navigate to the payment page
    } catch (error) {
      // console.error("Failed to create order:", error);
      toast.error("There was an error creating your order. Please try again.");
    }
  };

  return (
    <>
      {isLoading ? (
        renderSpiner
      ) : (
        <>
          <div style={{ marginTop: "-100px" }}>
            <SearchCarInput onSearch={handleSearch} />
          </div>

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

                    <Form onSubmit={handleSubmit(handleOrder)}>
                      <Row className="mb-3">
                        <Col>
                          <p>Tentukan lama sewa mobil (max, 7hari) </p>
                          <Calendar
                            selectionMode="range"
                            readOnlyInput
                            hideOnRangeSelection
                            value={dateRange}
                            onChange={(e) => setDateRange(e.value)}
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
                        <Col>
                          <Button
                            variant="success"
                            disabled={!isValid || !isDateRangeValid}
                            type="submit"
                            className="w-100"
                          >
                            Lanjutkan Pembayaran
                          </Button>
                        </Col>
                      </Row>
                    </Form>
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
