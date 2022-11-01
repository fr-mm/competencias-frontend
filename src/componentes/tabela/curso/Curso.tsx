import { useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import { useSelector } from "react-redux";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import CargaHorariaPorDocente from "../cargaHorariaPorDocente";
import Modulo from "../modulo";
import { SetasOrdenadoras } from "../setas";
import SetaExpandir from "../setas/SetaExpandir";

interface CursoProps {
  curso: ITabela.Curso;
  visivel: boolean;
}

function Curso(props: CursoProps): JSX.Element {
  const [isExpanded, setExpanded] = useState(props.visivel);
  const { getCollapseProps } = useCollapse({ isExpanded });
  const cargaHoraria = useSelector((state: RootState) => state.cargaHoraria);
  const docentes = useSelector((state: RootState) => state.docentes.filtrados);
  const disciplinasFiltradas = useSelector(
    (state: RootState) => state.disciplinas.idsFiltradas
  );

  useEffect(() => {
    setExpanded(props.visivel);
  }, [setExpanded, props.visivel]);

  const modulos = Object.values(props.curso.modulos);

  const ordenacaoProps = {
    IdCurso: props.curso.id,
    cargas: cargaHoraria.docentes,
  };

  function contemDisciplinasFiltradas(): boolean {
    return modulos.some((modulo) =>
      modulo.disciplinas.some((disciplina) =>
        disciplinasFiltradas.includes(disciplina)
      )
    );
  }

  if (contemDisciplinasFiltradas()) {
    return (
      <div className="container">
        <div className="linha colapsavel">
          <div className="celula azul escuro primeira-coluna borda">
            <SetaExpandir
              expandido={isExpanded}
              onClick={() => setExpanded(!isExpanded)}
            />
            <div className="texto-primeira-coluna">{props.curso.nome}</div>

            <SetasOrdenadoras
              idElemento={props.curso.id}
              ordenarCrescente={() =>
                reducers.docentes.ordenarPorCargaHorariaEmCursoCrescente(
                  ordenacaoProps
                )
              }
              ordenarDecrescente={() =>
                reducers.docentes.ordenarPorCargaHorariaEmCursoDecrescente(
                  ordenacaoProps
                )
              }
            />
          </div>

          <div className="celula azul escuro coluna-carga-horaria borda">
            {cargaHoraria.cursos[props.curso.id]}
          </div>

          <div className="linha">
            {docentes.map((docente) => {
              const cargaDocente =
                cargaHoraria.docentes[docente.id].cursos[props.curso.id];
              return (
                <CargaHorariaPorDocente
                  key={docente.id + props.curso.id}
                  horas={cargaDocente.horas}
                  porcentagem={cargaDocente.porcentagem}
                  extraClassNames="escuro"
                />
              );
            })}
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
  return <></>;
}

export default Curso;
