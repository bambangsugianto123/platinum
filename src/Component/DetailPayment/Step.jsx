import { Badge, Col, Container, Row } from "react-bootstrap";

const Step = ({ step1, step2, step3 }) => {
  const getStepStyle = (isActive) => (isActive ? "primary" : "light");
  const getTextStyle = (isActive) => (isActive ? "light" : "dark");

  return (
    <Container className="section-step mt-3">
      <Row className="justify-content-end">
        <Row md="auto" className="justify-content-end">
          <Col className="d-flex align-items-center gap-2 fs-6">
            <Badge
              bg={getStepStyle(step1)}
              text={getTextStyle(step1)}
              className="border border-primary"
              pill
            >
              1
            </Badge>
            <div className="label">Pilih Metode</div>
            <img src="/Assets/step.png" alt="Step Indicator" />
          </Col>
          <Col className="d-flex align-items-center gap-2 fs-6">
            <Badge
              bg={getStepStyle(step2)}
              text={getTextStyle(step2)}
              className="border border-primary"
              pill
            >
              2
            </Badge>
            <div className="label">Bayar</div>
            <img src="/Assets/step.png" alt="Step Indicator" />
          </Col>
          <Col className="d-flex align-items-center gap-2 fs-6">
            <Badge
              bg={getStepStyle(step3)}
              text={getTextStyle(step3)}
              className="border border-primary"
              pill
            >
              3
            </Badge>
            <div className="label">Tiket</div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Step;
