import "./App.css";
import React from "react";
import { PainelDeControle } from "../painelDeControle";
import Tabela from "../tabela/Tabela";

function App() {
  return (
    <div className="app">
      <PainelDeControle />
      <Tabela />
    </div>
  );
}

export default App;
