import "./App.css";
import React from "react";
import Tabela from "../tabela/Tabela";
import NavBar from "../navBar";
import Confirmacoes from "../confirmacoes";
import PopUps from "../popUps";

function App() {
  return (
    <div className="app">
      <div className="espacador"></div>
      <NavBar />
      <PopUps />
      <div className="margem">
        <Confirmacoes />
        <Tabela />
      </div>
    </div>
  );
}

export default App;
