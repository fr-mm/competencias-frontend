import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Marcador from "./marcador";
import "./RemocaoDocentes.css";

function RemocaoDocentes() {
  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );
  const removendo = useSelector((state: RootState) => state.docentes.removendo);

  function getMarcadores() {
    if (removendo) {
      return docentesFiltrados.map((docente) => (
        <Marcador docenteId={docente.id} key={`marcador${docente.id}`} />
      ));
    }
  }

  function getClassesCargaHoraria(): string {
    let classes = "celula borda coluna-carga-horaria invisivel ";
    if (removendo && docentesFiltrados.length > 0) {
      classes += removendo ? "borda-direita " : "";
    }
    return classes;
  }

  return (
    <div className="linha">
      <div className="celula primeira-coluna borda borda-esquerda invisivel"></div>
      <div className={getClassesCargaHoraria()}></div>
      {getMarcadores()}
    </div>
  );
}

export default RemocaoDocentes;
