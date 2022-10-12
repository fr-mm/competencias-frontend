import BotaoDocentes from "./botaoDocentes/BotaoDocentes";
import { BotaoExpandir } from "./botaoExpandir";
import BotaoFiltrar from "./botaoFiltrar";
import Filtros from "./filtros";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar azul">
        <BotaoExpandir />
        <BotaoFiltrar />
        <BotaoDocentes />
      </div>
      <Filtros />
    </div>
  );
}

export default NavBar;
