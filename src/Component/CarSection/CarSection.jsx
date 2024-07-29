import { useState } from "react";
import { useGetCarsQuery } from "../../services/redux/apiSlices/carApi";
import ShowCars from "./ShowCars";
import ShowCarsLoader from "./ShowCarsLoader";
import SearchCarInput from "./SearchCarInput";
import CarsPagination from "./CarPagination";
import { Col, Container, Row } from "react-bootstrap";

const CarSection = () => {
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
      <div style={{ marginTop: "-100px" }}>
        <SearchCarInput onSearch={handleSearch} />
      </div>
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
