import { useDispatch, useSelector } from "react-redux";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import Marcador from "./Marcador";
import "./Remocao.css";

function RemocaoDocentes() {
  const dispatch = useDispatch();
  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );
  const removendo = useSelector((state: RootState) => state.docentes.removendo);
  const idsARemover = useSelector(
    (state: RootState) => state.docentes.idsARemover
  );

  function incluirParaRemocao(id: ITabela.IdDocente): void {
    dispatch(reducers.docentes.incluirParaRemocao(id));
  }

  function excluirParaRemocao(id: ITabela.IdDocente): void {
    dispatch(reducers.docentes.excluirParaRemocao(id));
  }

  function getMarcadores() {
    if (removendo) {
      return docentesFiltrados.map((docente) => (
        <Marcador
          key={"marcador-" + docente.id}
          idItem={docente.id}
          idsARemover={idsARemover}
          incluirParaRemocao={incluirParaRemocao}
          excluirParaRemocao={excluirParaRemocao}
        />
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
