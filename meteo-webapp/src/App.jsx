import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MySearch from "./components/MySearch";
import GridMeteo from "./components/GridMeteo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityDetails from "./components/CityDetails";

function App() {
  return (
    <BrowserRouter>
      <MyNav></MyNav>
      <MySearch></MySearch>
      <Routes>
        <Route path="/" element={<GridMeteo />} />
        <Route path="/details/:cityName" element={<CityDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
