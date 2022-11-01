import { useDispatch, useSelector } from "react-redux";
import { EnumPopUpNomes } from "../../../enums";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import Competencia from "../competencia";
import { SetasOrdenadoras } from "../setas";

interface DisciplinaProps {
  idDisciplina: ITabela.IdDisciplina;
}

function Disciplina(props: DisciplinaProps) {
  const dispatch = useDispatch();
  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );
  const disciplina = useSelector(
    (state: RootState) => state.disciplinas.todas[props.idDisciplina]
  );

  function onClick() {
    dispatch(reducers.disciplina.carregar(disciplina));
    dispatch(reducers.popUps.mostrar(EnumPopUpNomes.DISCIPLINA));
  }

  return (
    <div className="container">
      <div className="linha">
        <div className="celula primeira-coluna texto-esquerda borda celula-disciplina">
          <div className="seta-container"></div>
          <div
            className="texto-primeira-coluna pointer lowlight"
            onClick={onClick}
          >
            {disciplina.nome}
          </div>
          <SetasOrdenadoras
            idElemento={disciplina.id}
            ordenarCrescente={reducers.docentes.ordenarPorCompetenciaCrescente}
            ordenarDecrescente={
              reducers.docentes.ordenarPorCompetenciaDecrescente
            }
          />
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