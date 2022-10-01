import { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { useSelector } from "react-redux";
import { InterfaceConteudoDeTabela } from "../../../interfaces";
import { RootState } from "../../../store";
import DisciplinaNaTabela from "../disciplinaNaTabela";

interface ModuloNaTabelaProps {
  modulo: InterfaceConteudoDeTabela.Modulo;
  visivel: boolean;
}

function ModuloNaTabela(props: ModuloNaTabelaProps) {
  const [isExpanded, setExpanded] = useState(props.visivel);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => {
    setExpanded(props.visivel);
  }, [setExpanded, props.visivel]);

  const disciplinas = Object.values(props.modulo.disciplinas);
  const docentes = useSelector((state: RootState) => state.docentes.filtrados);

  return (
    <div className="container">
      <div
        className="linha colapsavel"
        {...getToggleProps({
          onClick: () => setExpanded(!isExpanded),
        })}
      >
        <div className="celula azul primeira-coluna borda">
          Módulo {props.modulo.numero}
        </div>

        <div className="linha">
          {docentes.map((docente) => (
            <div
              key={docente.id + props.modulo.id}
              className="celula azul borda"
            ></div>
          ))}
        </div>
      </div>
      <div {...getCollapseProps()}>
        {disciplinas.map((disciplina) => (
          <DisciplinaNaTabela key={disciplina.id} disciplina={disciplina} />
        ))}
      </div>
    </div>
  );
}

export default ModuloNaTabela;
