import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MySearch from "./components/MySearch";
import GridMeteo from "./components/GridMeteo";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <MySearch></MySearch>
      <GridMeteo></GridMeteo>
    </>
  );
}

export default App;
