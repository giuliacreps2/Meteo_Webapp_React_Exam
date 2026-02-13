import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardMeteoDaily({ meteo, timezone }) {
  if (!meteo || timezone === undefined) return null;
  const ora = new Date((meteo.dt + timezone) * 1000).toISOString().slice(11, 16);

  let classe = "card-css";

  if (meteo.weather[0].main === "Clear") classe = "custom-sunny-card";
  if (meteo.weather[0].main === "Clouds") classe = "custom-cloudy-card";
  if (meteo.weather[0].main === "Rain") classe = "custom-stormy-card";
  if (meteo.weather[0].main === "Snow") classe = "custom-snowy-card";

  return (
    <Card className={`${classe} mb-1 p-2`}>
      <Card.Text className={`${classe}-text`} style={{ fontWeight: "bold" }}>
        Previsioni orarie
      </Card.Text>
      <Row>
        <Col xs={4}>
          <p className={`${classe}-text`}>{ora}</p>
        </Col>
        <Col xs={8}>
          <p className={`${classe}-text`}>{meteo.weather[0].description}</p>
        </Col>
        {/* <Col>
          <p className={`${classe}-text`}>MIN</p>
        </Col>
        <Col>
          <p className={`${classe}-text`}>MAX</p>
        </Col>*/}
      </Row>
    </Card>
  );
}

export default CardMeteoDaily;
