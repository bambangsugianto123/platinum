import { Link } from "react-router-dom";

const ShowCarsLoader = () => {
  const array = Array(20).fill();
  const renderCars = array.map((_, index) => {
    return (
      <div key={index} className="col-md-4 col-xl-3 mb-4">
        <div className="card h-100 d-flex flex-column">
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
          </svg>
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <Link
              className="btn btn-success btn-sm  disabled placeholder col-12"
              aria-disabled="true"
            ></Link>
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
export default ShowCarsLoader;
