import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import FiltroCursos from "./FiltroCursos";
import FiltroDocentes from "./FiltroDocentes";
import "./Filtros.css";

function Filtros() {
  const filtrando = useSelector((state: RootState) => state.tabela.filtrando);

  if (filtrando) {
    return (
      <div className="filtros azul">
        <FiltroDocentes />
        <FiltroCursos />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Filtros;
