import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ShowCars = ({ cars }) => {
  function formatPrice(price) {
    return price.toLocaleString("id-ID").replace(/,/g, "."); // Replace commas with dots directly
  }

  //   console.log(cars);
  // eslint-disable-next-line react/prop-types
  const renderCars = cars?.cars?.map((car) => {
    return (
      <div key={car.id} className="col-md-4 col-xl-3 mb-4">
        <div className="card h-100 d-flex flex-column">
          <img src={car.image} className="card-img-top" alt={car.name} />
          <div className="card-body d-flex flex-column">
            <p>{car.name}</p>
            <h6 className="card-title">{formatPrice(car.price)} / Hari</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              to={`/car/${car.id}`}
              className="btn btn-success fw-bold btn-sm mt-auto w-100"
            >
              Pilih Mobil
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="showCars">
      <div className="container">
        <div className="row">{renderCars}</div>
      </div>
    </section>
  );
};
export default ShowCars;
