import { useEffect } from "react";
import useCollapse from "react-collapsed";
import { InterfaceConteudoDeTabela } from "../../../api";
import DisciplinaNaTabela from "../disciplinaNaTabela";

interface ModuloNaTabelaProps {
  modulo: InterfaceConteudoDeTabela.Modulo;
  docentes: InterfaceConteudoDeTabela.Docentes;
}

function ModuloNaTabela(props: ModuloNaTabelaProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const disciplinas = Object.values(props.modulo.disciplinas);
  return (
    <div className="container">
      <div className="linha borda colapsavel" {...getToggleProps()}>
        <div className="primeira-coluna">Módulo {props.modulo.numero}</div>
        <div className="borda "></div>
      </div>
      <div {...getCollapseProps()}>
        {disciplinas.map((disciplina) => (
          <DisciplinaNaTabela
            key={disciplina.id}
            disciplna={disciplina}
            docentes={props.docentes}
          />
        ))}
      </div>
    </div>
  );
}

export default ModuloNaTabela;
