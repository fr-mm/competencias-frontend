import { useSelector } from "react-redux";
import { InterfaceConteudoDeTabela } from "../../../interfaces";
import { RootState } from "../../../store";
import CompetenciaNaTabela from "../competenciaNaTabela";

interface DisciplinaNaTabelaProps {
  disciplina: InterfaceConteudoDeTabela.Disciplina;
}

function DisciplinaNaTabela(props: DisciplinaNaTabelaProps) {
  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );
  return (
    <div className="container">
      <div className="linha">
        <div className="celula primeira-coluna texto-esquerda borda">
          {props.disciplina.nome}
        </div>
        <div className="linha">
          {docentesFiltrados.map((docente) => (
            <CompetenciaNaTabela
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

export default DisciplinaNaTabela;
