import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MeteoDetails({ meteo }) {
  let classe = "card-css";

  if (meteo.weather[0].main === "Clear") classe = "custom-sunny-card";
  if (meteo.weather[0].main === "Clouds") classe = "custom-cloudy-card";
  if (meteo.weather[0].main === "Rain") classe = "custom-stormy-card";
  if (meteo.weather[0].main === "Snow") classe = "custom-snowy-card";

  return (
    <Container fluid className={`${classe}-container`}>
      <Row>
        <Col>
          <h2 className={`${classe}-title`}>{meteo.name}</h2>
          <h1 className={`${classe}-h2 text-center`}>{Math.round(meteo.main.temp)}°</h1>
          <p className={`${classe}-text`}>{meteo.weather[0].description}</p>
        </Col>
      </Row>
      <Row>
        <CardMeteoDaily></CardMeteoDaily>
      </Row>
    </Container>
  );
}

export default MeteoDetails;
