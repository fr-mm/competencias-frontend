import "./NavBar.css";
import Filtros from "./filtros";
import { Disciplinas, Docentes, Expandir } from "./botoes";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar azul">
        <Docentes />
        <Disciplinas />
        <Expandir />
      </div>
      <Filtros />
    </div>
  );
}

export default NavBar;
