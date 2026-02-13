import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MeteoCard({ meteo }) {
  if (!meteo) return null;

  const ora = new Date((meteo.dt + meteo.timezone) * 1000).toISOString().slice(11, 16);

  let classe = "card-css";

  if (meteo.weather[0].main === "Clear") classe = "custom-sunny-card";
  if (meteo.weather[0].main === "Clouds") classe = "custom-cloudy-card";
  if (meteo.weather[0].main === "Rain") classe = "custom-stormy-card";
  if (meteo.weather[0].main === "Snow") classe = "custom-snowy-card";

  return (
    <Card className={`${classe} d-flex flex-nowrap ms-1 mb-1`} style={{ width: "350px" }}>
      <Card.Body>
        <Row>
          <Col xs={8} md={8}>
            <Card.Title className={`${classe}-title`}>{meteo.name}</Card.Title>
            <Card.Text className={`${classe}-text`}>Ore {ora}</Card.Text>
          </Col>
          <Col xs={4} md={4}>
            <h2 className={`${classe}-h2 text-center`}>{Math.round(meteo.main.temp)}°</h2>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Card.Text className={`${classe}-text`}>{meteo.weather[0].description}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default MeteoCard;
