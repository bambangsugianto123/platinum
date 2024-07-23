import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaStar,
} from "react-icons/fa";

function TestimonialCarousel() {
  const carouselItems = [
    {
      imgSrc: "/src/assets/images/user/user-1.jpg",
      stars: 5,
      quote:
        "Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done",
      name: "Marlene Visconte",
      role: "General Manager - Scouter",
    },
    {
      imgSrc: "/src/assets/images/user/user-2.jpg",
      stars: 5,
      quote:
        "Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done",
      name: "Marlene Visconte",
      role: "General Manager - Scouter",
    },
    {
      imgSrc: "/src/assets/images/user/user-3.jpg",
      stars: 5,
      quote:
        "Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done",
      name: "Marlene Visconte",
      role: "General Manager - Scouter",
    },
    {
      imgSrc: "/src/assets/images/user/user-4.jpg",
      stars: 5,
      quote:
        "Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done",
      name: "Marlene Visconte",
      role: "General Manager - Scouter",
    },
    {
      imgSrc: "/src/assets/images/user/user-5.jpg",
      stars: 5,
      quote:
        "Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done",
      name: "Marlene Visconte",
      role: "General Manager - Scouter",
    },
  ];

  const renderStars = (stars) => {
    const starList = [];
    for (let i = 0; i < stars; i++) {
      starList.push(<FaStar key={i} className="text-warning" />);
    }
    return starList;
  };

  const renderCarouselItems = carouselItems.map((item, index) => {
    const isActive = index === 0 ? "active" : "";
    return (
      <div
        key={index}
        className={`carousel-item bg-body-custom p-3 ${isActive} h-100`}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src={item.imgSrc}
            alt=""
            className="rounded-circle"
            width="100"
          />
          <p className="fs-3">{renderStars(item.stars)}</p>
          <p className="w-75 fst-italic fs-md-5 mb-3 text-center px-md-8">
            {item.quote}
          </p>
          <div className="fw-bold fs-5 mt-1">{item.name}</div>
          <div>{item.role}</div>
        </div>
      </div>
    );
  });

  return (
    <div id="testimonialCarousel" className="carousel slide">
      <div className="row">
        <div className="col-12">
          <div className="carousel-inner">{renderCarouselItems}</div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <FaArrowAltCircleLeft className="fs-1 text-success" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <FaArrowAltCircleRight className="fs-1 text-success" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
