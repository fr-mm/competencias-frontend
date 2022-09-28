import { InterfaceConteudoDeTabela } from "../../../api";

interface DisciplinaNaTabelaProps {
  docentes: InterfaceConteudoDeTabela.Docentes;
  disciplna: InterfaceConteudoDeTabela.Disciplina;
}

function DisciplinaNaTabela(props: DisciplinaNaTabelaProps) {
  return (
    <div className="container">
      <div className="linha borda ">
        <div className="primeira-coluna">{props.disciplna.nome}</div>
        <div className="borda "></div>
      </div>
    </div>
  );
}

export default DisciplinaNaTabela;
