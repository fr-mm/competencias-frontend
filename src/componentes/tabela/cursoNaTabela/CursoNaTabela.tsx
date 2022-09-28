import { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { InterfaceConteudoDeTabela } from "../../../api";
import ModuloNaTabela from "../moduloNaTabela";

interface CursoNaTabelaProps {
  curso: InterfaceConteudoDeTabela.Curso;
  docentes: InterfaceConteudoDeTabela.Docentes;
}

function CursoNaTabela(props: CursoNaTabelaProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const modulos = Object.values(props.curso.modulos);
  return (
    <div className="container">
      <div className="linha borda colapsavel" {...getToggleProps()}>
        <div className="primeira-coluna">{props.curso.nome}</div>
        <div className="borda "></div>
      </div>
      <div {...getCollapseProps()}>
        {modulos.map((modulo) => (
          <ModuloNaTabela
            key={props.curso.id + modulo.numero}
            modulo={modulo}
            docentes={props.docentes}
          />
        ))}
      </div>
    </div>
  );
}

export default CursoNaTabela;
