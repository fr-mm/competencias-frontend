import { InterfaceConteudoDeTabela } from "../../../api";

interface ModuloNaTabelaProps {
  numero: string;
  curso: InterfaceConteudoDeTabela.Curso;
  docentes: InterfaceConteudoDeTabela.Docentes;
}

function ModuloNaTabela(props: ModuloNaTabelaProps) {
  return (
    <div className="linha borda ">
      <div className="primeira-coluna">Módulo {props.numero}</div>
      <div className="borda "></div>
    </div>
  );
}

export default ModuloNaTabela;
