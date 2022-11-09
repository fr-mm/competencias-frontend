import "./App.css";
import Tabela from "../tabela/Tabela";
import NavBar from "../navBar";
import PopUps from "../popUps";
import Painel from "../painel";
import { useRef } from "react";

function App() {
  const tabelaRef = useRef(null);
  return (
    <div className="app">
      <div className="espacador"></div>
      <NavBar tabelaReferencia={tabelaRef} />
      <PopUps />
      <div className="margem">
        <Painel />
        <Tabela referencia={tabelaRef} />
      </div>
    </div>
  );
}

export default App;
