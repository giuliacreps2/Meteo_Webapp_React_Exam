import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import CardMeteoDaily from "./CardMeteoDaily";
import { useParams } from "react-router-dom";

function CityDetails() {
  const { cityName } = useParams();
  const [meteoData, setMeteoData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const API_KEY = "bc45c3a9cab5095ab402b5746a08d45e";

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=it`)
      .then((res) => res.json())
      .then((data) => setMeteoData(data));

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=it`)
      .then((res) => res.json())
      .then((data) => setForecastData(data.list));
  }, [cityName]);

  if (!meteoData) return <p>Caricamento...</p>;

  return (
    <Container>
      <h1 className="text-center mt-4">{meteoData.name}</h1>
      <h2 className="text-center mb-5" style={{ fontSize: "48px" }}>
        {Math.round(meteoData.main.temp)}°
      </h2>
      {forecastData.map((previsione) => (
        <CardMeteoDaily key={previsione.dt} meteo={previsione} timezone={meteoData.timezone} />
      ))}
    </Container>
  );
}

export default CityDetails;
