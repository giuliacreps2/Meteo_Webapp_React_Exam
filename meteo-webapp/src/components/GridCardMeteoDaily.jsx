import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MeteoCard from "./MeteoCard";
import { useEffect, useState } from "react";

const GridCardMeteoDaily = function ({ cittàExtra }) {
  const [meteoData, setMeteoData] = useState([]);

  const API_KEY = "bc45c3a9cab5095ab402b5746a08d45e";
  const urlAPI2 = "https://api.openweathermap.org/data/2.5/forecast";

  const getMeteoData = () => {
    fetch(`${urlAPI2}?q=${cittàExtra}&appid=${API_KEY}&units=metric&lang=it`)
      .then((Response) => {
        if (Response.ok) {
          return Response.json();
        } else {
          throw new Error("Errore nel caricamento dei dati");
        }
      })
      .then((data) => {
        console.log(data);
        setMeteoData(data);
      })
      .catch((error) => {
        console.log("Errore:", error);
      });
  };

  useEffect(() => {
    getMeteoData();
  }, [`${cittàExtra}`]);

  return (
    <Container fluid>
      <Row className="mt-3">
        {meteoData.map((cittàextra) => (
          <Col xs={12} md={4} className="mt-3" key={cittàextra.id}>
            <MeteoCard meteo={cittàextra}></MeteoCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GridCardMeteoDaily;
