import { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { useSelector } from "react-redux";
import { InterfaceConteudoDeTabela } from "../../../interfaces";
import { RootState } from "../../../store";
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
  const docentes = useSelector((state: RootState) => state.docentes.filtrados);
  return (
    <div className="container">
      <div
        className="linha colapsavel"
        {...getToggleProps({
          onClick: () => {
            setExpanded(!isExpanded);
          },
        })}
      >
        <div className="celula azul escuro primeira-coluna borda">
          {props.curso.nome}
        </div>
        <div className="linha">
          {docentes.map((docente) => (
            <div
              key={docente.id + props.curso.id}
              className="celula azul escuro borda"
            ></div>
          ))}
        </div>
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
