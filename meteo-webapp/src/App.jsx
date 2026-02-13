import "./App.css";
import MeteoCard from "./components/MeteoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MySearch from "./components/MySearch";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <MySearch></MySearch>
      <MeteoCard></MeteoCard>
    </>
  );
}

export default App;
