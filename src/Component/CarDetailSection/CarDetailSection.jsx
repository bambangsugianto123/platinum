import { Fragment, useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getCarById } from "../../Feature/Cars/cars-slice";
// import "./detailCar.css";
import { DateRangePicker } from "rsuite";

function CarDetailSection() {
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const dispatch = useDispatch();
  const car = useSelector((state) => {
    return state.cars.detailCar;
  });

  const [carName, setCarName] = useState("");
  const [carCategory, setCarCategory] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carStatus, setCarStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  let { id } = useParams();

  const navigate = useNavigate();

  const API_URL = "https://api-car-rental.binaracademy.org/customer";
  const getLocalStorage = JSON.parse(localStorage.getItem("user"));
  console.log(getLocalStorage.access_token);

  const { allowedMaxDays, beforeToday, combine } = DateRangePicker;

  const onChangeDate = (date) => {
    if (!date) return;
    let startDate = date[0];
    let endDate = date[1];
    setStartDate(formatDate(startDate));
    setEndDate(formatDate(endDate));
  };

  // format date sesuai api
  const formatDate = (date) => {
    const offset = date.getTimezoneOffset();
    const yourDate = new Date(date.getTime() - offset * 60 * 1000);
    return yourDate.toISOString().split("T")[0];
  };

  const loadCarDetail = async () => {
    try {
      await dispatch(getCarById({ id }));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCarDetail();
  }, []);

  const checkButtonPayment = () => {
    return !startDate && !endDate ? true : false;
  };

  const config = {
    headers: { access_token: getLocalStorage.access_token },
  };

  const addPosts = async (startDate, endDate) => {
    try {
      let response = await axios.post(
        `${API_URL}/order`,
        {
          start_rent_at: startDate,
          finish_rent_at: endDate,
          car_id: id,
        },
        config
      );
      if (response) {
        setPosts([response.data, ...posts]);
        const { id } = response.data;
        setTimeout(() => {
          navigate(`/payment/${id}`);
        }, 3000);
      }
      setStartDate("");
      setEndDate("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingButton(true);

    let response = addPosts(startDate, endDate);
    if (response) {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <SearchBar
        carName={carName}
        setCarName={setCarName}
        carCategory={carCategory}
        setCarCategory={setCarCategory}
        carPrice={carPrice}
        setCarPrice={setCarPrice}
        carStatus={carStatus}
        setCarStatus={setCarStatus}
        setSearchParams={setSearchParams}
      />
      {!loading ? (
        car ? (
          <section className="mb-5" id="carDetail">
            <div className="container">
              <div className="row d-flex flex-row-reverse justify-content-evenly mx-1">
                <div className="col-lg-4">
                  <div className=" row card p-3 d">
                    <div className="col-12 p-3">
                      {car.image ? (
                        <img src={car.image} alt="" style={{ width: "100%" }} />
                      ) : (
                        <img
                          src="/Assets/dummy.png"
                          alt=""
                          style={{ width: "100%" }}
                        />
                      )}
                    </div>
                    <div>
                      <h4>{car.name}</h4>
                      {car.category ? (
                        <p>
                          <i className="fa-regular fa-user mr-2"></i>{" "}
                          {car.category}
                        </p>
                      ) : (
                        <p>
                          <i className="fa-regular fa-user mr-2"></i>tidak ada
                          data
                        </p>
                      )}
                    </div>
                    {/* date range */}

                    <p className="info-date">
                      Tentukan lama sewa mobil (max. 7 hari)
                    </p>
                    <DateRangePicker
                      style={{ width: "100%" }}
                      onChange={(e) => onChangeDate(e)}
                      placeholder="Pilih tanggal mulai dan akhir sewa"
                      disabledDate={combine(allowedMaxDays(7), beforeToday())}
                      showOneCalendar
                    />
                    <div className="d-flex justify-content-between my-3">
                      <h4>Total</h4>
                      {car.price ? (
                        <h5>Rp {car.price.toLocaleString("en-US")}/ Hari</h5>
                      ) : (
                        <h5>Rp. 0</h5>
                      )}
                    </div>
                    <div className="px-2">
                      <button
                        type="submit"
                        disabled={checkButtonPayment()}
                        className={
                          "cst-button" +
                          (checkButtonPayment() == true ? " disabled" : "")
                        }
                        onClick={handleSubmit}
                      >
                        {loadingButton && (
                          <>
                            <i
                              className="fa fa-refresh fa-spin"
                              style={{ marginRight: "5px" }}
                            />
                            <span> Lanjutkan pembayaran</span>
                          </>
                        )}
                        {!loadingButton && <span> Lanjutkan Pembayaran</span>}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 card p-4">
                  <h4>Tentang Paket</h4>
                  <h5 className="my-3">Include</h5>
                  <ul className="lh-lg" style={{ listStyleType: "disc" }}>
                    <li>
                      Apa saja yang termasuk dalam paket misal durasi max 12 jam
                    </li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata </li>
                    <li>Sudah termasuk Pajak </li>
                  </ul>
                  <h5 className="my-3">Exclude</h5>
                  <ul className="lh-lg" style={{ listStyleType: "disc" }}>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <h5 className="my-3">Refund, Reschedule, Overtime</h5>
                  <ul className="lh-lg" style={{ listStyleType: "disc" }}>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>
                      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                      20.000/jam
                    </li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <h2 className="d-flex justify-content-center m-5">
            {" "}
            Mobil Tidak Ditemukan
          </h2>
        )
      ) : (
        <h2 className="d-flex justify-content-center m-5">Loading...</h2>
      )}
    </Fragment>
  );
}

export default CarDetailSection;
