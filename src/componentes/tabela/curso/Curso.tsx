import { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { useSelector } from "react-redux";
import { InterfaceConteudoDeTabela } from "../../../interfaces";
import { RootState } from "../../../store";
import CargaHorariaPorDocente from "../cargaHorariaPorDocente";
import Modulo from "../modulo";

interface CursoProps {
  curso: InterfaceConteudoDeTabela.Curso;
  visivel: boolean;
}

function Curso(props: CursoProps) {
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

        <div className="celula azul escuro coluna-carga-horaria borda">
          {props.curso.cargaHoraria}
        </div>

        <div className="linha">
          {docentes.map((docente) => (
            <CargaHorariaPorDocente
              key={docente.id + props.curso.id}
              docente={docente}
              colecao={props.curso}
              extraClassNames="escuro"
            />
          ))}
        </div>
      </div>
      <div {...getCollapseProps()}>
        {modulos.map((modulo) => (
          <Modulo
            key={props.curso.id + modulo.numero}
            modulo={modulo}
            visivel={isExpanded}
          />
        ))}
      </div>
    </div>
  );
}

export default Curso;
