import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MeteoCard from "./MeteoCard";
import { useEffect, useState } from "react";

const GridMeteo = function () {
  const arrayCittàStandard = ["Firenze", "London", "New York", "Beijing", "Cortina d'Ampezzo", "Madrid"];

  const [meteoData, setMeteoData] = useState([]);

  const API_KEY = "bc45c3a9cab5095ab402b5746a08d45e";
  const urlAPI = "https://api.openweathermap.org/data/2.5/weather";

  const getMeteoData = () => {
    const requests = arrayCittàStandard.map((città) =>
      fetch(`${urlAPI}?q=${città}&appid=${API_KEY}&units=metric&lang=it`).then((Response) => {
        if (Response.ok) {
          return Response.json();
        } else {
          throw new Error("Errore nel caricamento dei dati");
        }
      }),
    );

    Promise.all(requests)
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
  }, []);

  return (
    <Container fluid>
      <Row className="mt-3">
        {meteoData.map((città) => (
          <Col xs={12} md={4} className="mt-3" key={città.id}>
            <MeteoCard meteo={città}></MeteoCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GridMeteo;
