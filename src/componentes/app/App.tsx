import "./App.css";
import React from "react";
import { PainelDeControle } from "../painelDeControle";
import Tabela from "../tabela/Tabela";
import NavBar from "../navBar";

function App() {
  return (
    <div className="app">
      <div className="espacador"></div>
      <NavBar />
      <div className="margem">
        <PainelDeControle />
        <Tabela />
      </div>
    </div>
  );
}

export default App;
