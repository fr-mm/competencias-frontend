import "./NavBar.css";
import Filtros from "./filtros";
import { Disciplinas, Docentes, Expandir, Filtrar } from "./botoes";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar azul">
        <Expandir />
        <Filtrar />
        <Docentes />
        <Disciplinas />
      </div>
      <Filtros />
    </div>
  );
}

export default NavBar;
