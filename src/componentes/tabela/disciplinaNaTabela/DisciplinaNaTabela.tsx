import { InterfaceConteudoDeTabela } from "../../../api";

interface DisciplinaNaTabelaProps {
  docentes: InterfaceConteudoDeTabela.Docentes;
  docentesFiltrados: InterfaceConteudoDeTabela.Docente[];
  disciplna: InterfaceConteudoDeTabela.Disciplina;
}

function DisciplinaNaTabela(props: DisciplinaNaTabelaProps) {
  return (
    <div className="container">
      <div className="linha borda ">
        <div className="primeira-coluna">{props.disciplna.nome}</div>
        <div className="linha borda">
          {props.docentesFiltrados.map((docente) => (
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
