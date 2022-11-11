import "./NavBar.css";
import Filtros from "./filtros";
import { Cursos, Disciplinas, Docentes, Expandir } from "./botoes";
import BaixarPDF from "./botoes/BaixarPDF";
import { RefObject } from "react";

interface NavBarProps {
  tabelaReferencia: RefObject<HTMLDivElement>;
}

function NavBar(props: NavBarProps): JSX.Element {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar azul">
        <Docentes />
        <Disciplinas />
        <Cursos />
        <Expandir />
        <BaixarPDF tabelaReferencia={props.tabelaReferencia} />
      </div>
      <Filtros />
    </div>
  );
}

export default NavBar;
