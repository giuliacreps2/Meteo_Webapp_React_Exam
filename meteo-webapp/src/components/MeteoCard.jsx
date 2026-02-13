import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MeteoCard() {
  return (
    <Card className="custom-sunny-card d-flex flex-nowrap ms-1 mt-3" style={{ width: "380px" }}>
      <Card.Body>
        <Row>
          <Col xs={8} md={8}>
            <Card.Title className="custom-sunny-card-title">Firenze</Card.Title>
            <Card.Text className="custom-sunny-card-text">Ore 13</Card.Text>
          </Col>
          <Col xs={4} md={4}>
            <h2 className="custom-sunny-card-h2 text-center ">13°</h2>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card.Text className="custom-sunny-card-text">Il tempo è bello</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default MeteoCard;
