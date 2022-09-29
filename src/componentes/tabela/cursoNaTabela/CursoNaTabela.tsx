import { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { InterfaceConteudoDeTabela } from "../../../api";
import ModuloNaTabela from "../moduloNaTabela";

interface CursoNaTabelaProps {
  curso: InterfaceConteudoDeTabela.Curso;
  visivel: boolean;
}

function CursoNaTabela(props: CursoNaTabelaProps) {
  const [isExpanded, setExpanded] = useState(props.visivel);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => {
    setExpanded(props.visivel);
  }, [setExpanded, props.visivel]);

  const modulos = Object.values(props.curso.modulos);
  return (
    <div className="container">
      <div
        className="linha borda colapsavel"
        {...getToggleProps({
          onClick: () => {
            setExpanded(!isExpanded);
          },
        })}
      >
        <div className="primeira-coluna">{props.curso.nome}</div>
        <div className="borda "></div>
      </div>
      <div {...getCollapseProps()}>
        {modulos.map((modulo) => (
          <ModuloNaTabela
            key={props.curso.id + modulo.numero}
            modulo={modulo}
            visivel={isExpanded}
          />
        ))}
      </div>
    </div>
  );
}

export default CursoNaTabela;
