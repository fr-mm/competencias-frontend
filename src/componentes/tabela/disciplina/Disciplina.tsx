import "./Disciplina.css";
import { useDispatch, useSelector } from "react-redux";
import { EnumOrdem } from "../../../enums";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
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

  function setasOrdenadoras() {
    const corSeta = {
      esquerda: "cinza",
      direita: "cinza",
    };

    if (ordenacao.idElemento === disciplina.id) {
      switch (ordenacao.ordem) {
        case EnumOrdem.CRESCENTE:
          corSeta.esquerda = "preta";
          break;
        case EnumOrdem.DECRESCENTE:
          corSeta.direita = "preta";
          break;
      }
    }
    return (
      <div className="seta-container">
        <div className={"seta esquerda " + corSeta.esquerda}></div>
        <div className={"seta direita " + corSeta.direita}></div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="linha">
        <div className="celula primeira-coluna texto-esquerda borda celula-disciplina">
          <div className="seta-container"></div>
          <div className="nome-disciplina">{disciplina.nome}</div>
          <div className="seta-container" onClick={mudarOrdem}>
            {setasOrdenadoras()}
          </div>
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
