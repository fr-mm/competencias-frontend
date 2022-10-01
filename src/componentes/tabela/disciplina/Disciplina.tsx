import { useSelector } from "react-redux";
import { InterfaceConteudoDeTabela } from "../../../interfaces";
import { RootState } from "../../../store";
import Competencia from "../competencia";

interface DisciplinaProps {
  disciplina: InterfaceConteudoDeTabela.Disciplina;
}

function Disciplina(props: DisciplinaProps) {
  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );
  return (
    <div className="container">
      <div className="linha">
        <div className="celula primeira-coluna texto-esquerda borda">
          {props.disciplina.nome}
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
