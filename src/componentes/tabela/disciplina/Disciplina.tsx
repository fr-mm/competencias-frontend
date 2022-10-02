import { useDispatch, useSelector } from "react-redux";
import { InterfaceConteudoDeTabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import BotoesOrdenadores from "../botoesOrdenadores";
import Competencia from "../competencia";

interface DisciplinaProps {
  disciplina: InterfaceConteudoDeTabela.Disciplina;
}

function Disciplina(props: DisciplinaProps) {
  const dispatch = useDispatch();

  function mudarOrdem() {
    dispatch(reducers.ordenacao.ordenar(props.disciplina.id));
  }

  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );
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
