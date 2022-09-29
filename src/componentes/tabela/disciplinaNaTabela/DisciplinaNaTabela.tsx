import { useSelector } from "react-redux";
import { InterfaceConteudoDeTabela } from "../../../interfaces";
import { RootState } from "../../../store";

interface DisciplinaNaTabelaProps {
  disciplna: InterfaceConteudoDeTabela.Disciplina;
}

function DisciplinaNaTabela(props: DisciplinaNaTabelaProps) {
  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );
  return (
    <div className="container">
      <div className="linha borda ">
        <div className="primeira-coluna">{props.disciplna.nome}</div>
        <div className="linha borda">
          {docentesFiltrados.map((docente) => (
            <div key={props.disciplna.id + docente.id} className="celula borda">
              {props.disciplna.competencias[docente.id]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisciplinaNaTabela;
