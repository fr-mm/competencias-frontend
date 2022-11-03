import "./App.css";
import Tabela from "../tabela/Tabela";
import NavBar from "../navBar";
import PopUps from "../popUps";
import MenuDeQuina from "../menuDeQuina";
import Legendas from "../legendas";

function App() {
  return (
    <div className="app">
      <div className="espacador"></div>
      <NavBar />
      <PopUps />
      <div className="margem">
        <MenuDeQuina />
        <Legendas />
        <Tabela />
      </div>
    </div>
  );
}

export default App;
