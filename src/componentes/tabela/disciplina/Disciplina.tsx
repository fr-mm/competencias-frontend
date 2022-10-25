import { useDispatch, useSelector } from "react-redux";
import { EnumOrdem } from "../../../enums";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import BotoesOrdenadores from "../botoesOrdenadores";
import Competencia from "../competencia";

interface DisciplinaProps {
  idDisciplina: ITabela.IdDisciplina;
}

function Disciplina(props: DisciplinaProps) {
  const dispatch = useDispatch();
  const ordenacao = useSelector((state: RootState) => state.ordenacao);
  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );
  const disciplina = useSelector(
    (state: RootState) => state.disciplinas.todas[props.idDisciplina]
  );

  function mudarOrdem() {
    if (ordenacao.idElemento === disciplina.id) {
      switch (ordenacao.proximaOrdem) {
        case EnumOrdem.DECRESCENTE:
          dispatch(
            reducers.docentes.ordenarPorCompetenciaDecrescente(disciplina.id)
          );
          break;
        case EnumOrdem.CRESCENTE:
          dispatch(
            reducers.docentes.ordenarPorCompetenciaCrescente(disciplina.id)
          );
          break;
        case EnumOrdem.NENHUMA:
          dispatch(reducers.docentes.ordenarAlfabeticamente());
      }
      dispatch(reducers.ordenacao.alternarOrdem());
    } else {
      dispatch(
        reducers.docentes.ordenarPorCompetenciaDecrescente(disciplina.id)
      );
      dispatch(reducers.ordenacao.mudarElemento(disciplina.id));
    }
  }

  return (
    <div className="container">
      <div className="linha">
        <div
          className="celula primeira-coluna texto-esquerda borda"
          onClick={mudarOrdem}
        >
          {disciplina.nome}
          <BotoesOrdenadores idElemento={disciplina.id} />
        </div>

        <div className="celula azul-claro borda coluna-carga-horaria">
          {disciplina.cargaHoraria}
        </div>

        <div className="linha">
          {docentesFiltrados.map((docente) => (
            <Competencia
              key={disciplina.id + docente.id}
              docente={docente}
              disciplina={disciplina}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Disciplina;
