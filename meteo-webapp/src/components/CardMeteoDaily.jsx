import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardMeteoDaily({ meteo }) {
  const ora = new Date((meteo.dt + meteo.timezone) * 1000).toISOString().slice(11, 16);

  return (
    <Card>
      <Card.Body>Previsioni per oggi</Card.Body>
      <Row>
        <Col>
          <p>{ora}</p>
        </Col>
        <Col>
          <p>{meteo.weather[0].description}</p>
        </Col>
        <Col>
          <p>temperatura min</p>
        </Col>
        <Col>
          <p>temperatura max</p>
        </Col>
      </Row>
    </Card>
  );
}

export default CardMeteoDaily;
