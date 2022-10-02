import { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { useSelector } from "react-redux";
import { InterfaceConteudoDeTabela } from "../../../interfaces";
import { RootState } from "../../../store";
import Disciplina from "../disciplina";
import CargaHorariaPorDocente from "../cargaHorariaPorDocente";

interface ModuloProps {
  modulo: InterfaceConteudoDeTabela.Modulo;
  visivel: boolean;
}

function Modulo(props: ModuloProps) {
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

        <div className="celula azul coluna-carga-horaria borda">
          {props.modulo.cargaHoraria}
        </div>

        <div className="linha">
          {docentes.map((docente) => (
            <CargaHorariaPorDocente
              key={docente.id + props.modulo.id + "ch"}
              docente={docente}
              colecao={props.modulo}
              extraClassNames=""
            />
          ))}
        </div>
      </div>

      <div {...getCollapseProps()}>
        {disciplinas.map((disciplina) => (
          <Disciplina key={disciplina.id} disciplina={disciplina} />
        ))}
      </div>
    </div>
  );
}

export default Modulo;
