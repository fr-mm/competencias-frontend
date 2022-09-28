import { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { InterfaceConteudoDeTabela } from "../../../api";
import DisciplinaNaTabela from "../disciplinaNaTabela";

interface ModuloNaTabelaProps {
  modulo: InterfaceConteudoDeTabela.Modulo;
  docentes: InterfaceConteudoDeTabela.Docentes;
  docentesFiltrados: InterfaceConteudoDeTabela.Docente[];
  visivel: boolean;
}

function ModuloNaTabela(props: ModuloNaTabelaProps) {
  const [isExpanded, setExpanded] = useState(props.visivel);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => {
    setExpanded(props.visivel);
  }, [setExpanded, props.visivel]);

  const disciplinas = Object.values(props.modulo.disciplinas);
  return (
    <div className="container">
      <div
        className="linha borda colapsavel"
        {...getToggleProps({
          onClick: () => setExpanded(!isExpanded),
        })}
      >
        <div className="primeira-coluna">Módulo {props.modulo.numero}</div>
        <div className="borda "></div>
      </div>
      <div {...getCollapseProps()}>
        {disciplinas.map((disciplina) => (
          <DisciplinaNaTabela
            key={disciplina.id}
            disciplna={disciplina}
            docentes={props.docentes}
            docentesFiltrados={props.docentesFiltrados}
          />
        ))}
      </div>
    </div>
  );
}

export default ModuloNaTabela;
