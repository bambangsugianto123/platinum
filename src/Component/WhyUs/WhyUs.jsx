import { Card, Col, Container, Row } from "react-bootstrap";
import { FaRegThumbsUp, FaTag, FaRegClock, FaMedal } from "react-icons/fa";
function WhyUs() {
  const cardData = [
    {
      icon: <FaRegThumbsUp className="text-white" />,
      iconBg: "bg-warning",
      title: "Mobil Lengkap",
      text: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icon: <FaTag className="text-white" />,
      iconBg: "bg-primary",
      title: "Layanan 24 Jam",
      text: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      icon: <FaRegClock className="text-white" />,
      iconBg: "bg-danger",
      title: "Harga Murah",
      text: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      icon: <FaMedal className="text-white" />,
      iconBg: "bg-success",
      title: "Sopir Profesional",
      text: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ];

  const renderCards = cardData.map((card, index) => {
    return (
      <Col md={4} xl={3} key={index} className="my-2">
        <Card className="h-100">
          <Card.Body>
            <div className="card-icon-container my-3">
              <i className={`card-icon ${card.iconBg} p-2 rounded-circle`}>
                {card.icon}
              </i>
            </div>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <section id="whyUs">
      <Container className="mb-6">
        <Row>
          <h2>Why Us</h2>
          <p>Mengapa harus pilih Binar Car Rental</p>
        </Row>
        <Row>{renderCards}</Row>
      </Container>
    </section>
  );
}

export default WhyUs;
