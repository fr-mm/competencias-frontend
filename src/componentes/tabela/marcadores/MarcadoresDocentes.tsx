import "./Marcadores.css";
import { useDispatch, useSelector } from "react-redux";
import { EnumPainel } from "../../../enums";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import Marcador from "./base/Marcador";

function MarcadoresDocentes(): JSX.Element {
  const dispatch = useDispatch();
  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );
  const menuDeQuinaVisivel = useSelector(
    (state: RootState) => state.painel.visivel
  );
  const idsARemover = useSelector(
    (state: RootState) => state.docentes.idsARemover
  );
  const removendo = menuDeQuinaVisivel === EnumPainel.REMOVER_DOCENTES;

  function incluirParaRemocao(id: ITabela.IdDocente): void {
    dispatch(reducers.docentes.incluirParaRemocao(id));
  }

  function excluirParaRemocao(id: ITabela.IdDocente): void {
    dispatch(reducers.docentes.excluirParaRemocao(id));
  }

  function getMarcadores() {
    return docentesFiltrados.map((docente) => (
      <div className="celula marcador-docente azul-claro">
        <Marcador
          key={"marcador-" + docente.id}
          idItem={docente.id}
          idsARemover={idsARemover}
          incluirParaRemocao={incluirParaRemocao}
          excluirParaRemocao={excluirParaRemocao}
        />
      </div>
    ));
  }

  function getClassesCargaHoraria(): string {
    let classes = "celula borda coluna-carga-horaria invisivel ";
    if (removendo && docentesFiltrados.length > 0) {
      classes += removendo ? "borda-direita " : "";
    }
    return classes;
  }

  if (removendo) {
    return (
      <div className="linha">
        <div className="celula primeira-coluna borda borda-esquerda invisivel"></div>
        <div className={getClassesCargaHoraria()}></div>
        {getMarcadores()}
      </div>
    );
  }
  return <></>;
}

export default MarcadoresDocentes;
