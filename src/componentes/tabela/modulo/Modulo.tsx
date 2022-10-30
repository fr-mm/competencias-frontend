import { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { useSelector } from "react-redux";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import Disciplina from "../disciplina";
import CargaHorariaPorDocente from "../cargaHorariaPorDocente";
import { SetasOrdenadoras } from "../setas";
import SetaExpandir from "../setas/SetaExpandir";

interface ModuloProps {
  modulo: ITabela.Modulo;
  visivel: boolean;
}

function Modulo(props: ModuloProps) {
  const [isExpanded, setExpanded] = useState(props.visivel);
  const { getCollapseProps } = useCollapse({ isExpanded });
  const cargaHoraria = useSelector((state: RootState) => state.cargaHoraria);
  const disciplinas = Object.values(props.modulo.disciplinas);
  const docentes = useSelector((state: RootState) => state.docentes.filtrados);

  useEffect(() => {
    setExpanded(props.visivel);
  }, [setExpanded, props.visivel]);

  function cargaHorariaDeDocente(docente: ITabela.Docente) {
    const cargaDocente =
      cargaHoraria.docentes[docente.id].modulos[props.modulo.id];
    return (
      <CargaHorariaPorDocente
        key={docente.id + props.modulo.id + "ch"}
        horas={cargaDocente.horas}
        porcentagem={cargaDocente.porcentagem}
        extraClassNames=""
      />
    );
  }

  const ordenacaoProps = {
    IdModulo: props.modulo.id,
    cargas: cargaHoraria.docentes,
  };

  return (
    <div className="container">
      <div className="linha colapsavel">
        <div className="celula azul primeira-coluna borda">
          <SetaExpandir
            expandido={isExpanded}
            onClick={() => {
              setExpanded(!isExpanded);
            }}
          />
          <div className="texto-primeira-coluna">
            Módulo {props.modulo.numero}
          </div>
          <SetasOrdenadoras
            idElemento={props.modulo.id}
            ordenarCrescente={() =>
              reducers.docentes.ordenarPorCargaHorariaEmModuloCrescente(
                ordenacaoProps
              )
            }
            ordenarDecrescente={() =>
              reducers.docentes.ordenarPorCargaHorariaEmModuloDecrescente(
                ordenacaoProps
              )
            }
          />
        </div>

        <div className="celula azul coluna-carga-horaria borda">
          {cargaHoraria.modulos[props.modulo.id]}
        </div>

        <div className="linha">
          {docentes.map((docente) => cargaHorariaDeDocente(docente))}
        </div>
      </div>

      <div {...getCollapseProps()}>
        {disciplinas.map((disciplina) => (
          <Disciplina key={disciplina} idDisciplina={disciplina} />
        ))}
      </div>
    </div>
  );
}

export default Modulo;
