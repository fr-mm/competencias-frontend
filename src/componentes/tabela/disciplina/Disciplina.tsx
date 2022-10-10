import { useDispatch, useSelector } from "react-redux";
import { InterfaceConteudoDeTabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import BotoesOrdenadores, { Ordem } from "../botoesOrdenadores";
import Competencia from "../competencia";

interface DisciplinaProps {
  disciplina: InterfaceConteudoDeTabela.Disciplina;
}

function Disciplina(props: DisciplinaProps) {
  const dispatch = useDispatch();
  const ordenacao = useSelector((state: RootState) => state.ordenacao);
  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );

  function mudarOrdem() {
    if (ordenacao.idElemento === props.disciplina.id) {
      switch (ordenacao.proximaOrdem) {
        case Ordem.DECRESCENTE:
          dispatch(
            reducers.docentes.ordenarPorCompetenciaDecrescente(props.disciplina)
          );
          break;
        case Ordem.CRESCENTE:
          dispatch(
            reducers.docentes.ordenarPorCompetenciaCrescente(props.disciplina)
          );
          break;
        case Ordem.NENHUMA:
          dispatch(reducers.docentes.ordenarAlfabeticamente());
      }
      dispatch(reducers.ordenacao.alternarOrdem());
    } else {
      dispatch(
        reducers.docentes.ordenarPorCompetenciaDecrescente(props.disciplina)
      );
      dispatch(reducers.ordenacao.mudarElemento(props.disciplina.id));
    }
  }

  return (
    <div className="container">
      <div className="linha">
        <div
          className="celula primeira-coluna texto-esquerda borda"
          onClick={mudarOrdem}
        >
          {props.disciplina.nome}
          <BotoesOrdenadores idElemento={props.disciplina.id} />
        </div>

        <div className="celula azul-claro borda coluna-carga-horaria">
          {props.disciplina.cargaHoraria}
        </div>

        <div className="linha">
          {docentesFiltrados.map((docente) => (
            <Competencia
              key={props.disciplina.id + docente.id}
              docente={docente}
              disciplina={props.disciplina}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Disciplina;
