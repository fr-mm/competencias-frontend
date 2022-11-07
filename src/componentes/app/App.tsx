import "./App.css";
import Tabela from "../tabela/Tabela";
import NavBar from "../navBar";
import PopUps from "../popUps";
import Painel from "../painel";

function App() {
  return (
    <div className="app">
      <div className="espacador"></div>
      <NavBar />
      <PopUps />
      <div className="margem">
        <Painel />
        <Tabela />
      </div>
    </div>
  );
}

export default App;
