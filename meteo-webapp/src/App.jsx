import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MySearch from "./components/MySearch";
import GridMeteo from "./components/GridMeteo";
import { useState } from "react";

function App() {
  const [cittàAggiunteDallUtente, setCittàAggiunteDallUtente] = useState([]);
  return (
    <>
      <MyNav />
      <SearchBar onAggiungi={setCittàAggiunteDallUtente} />
      <GridMeteo cittàExtra={cittàAggiunteDallUtente} />
    </>
  );
}

export default App;
