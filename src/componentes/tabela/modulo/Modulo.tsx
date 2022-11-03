import { useEffect, useState } from "react";
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

function Modulo(props: ModuloProps): JSX.Element {
  const [visivel, setVisivel] = useState(props.visivel);
  const cargaHoraria = useSelector((state: RootState) => state.cargaHoraria);
  const idsDisciplinas = Object.values(props.modulo.disciplinas);
  const docentes = useSelector((state: RootState) => state.docentes.filtrados);
  const disciplinasFiltradas = useSelector(
    (state: RootState) => state.disciplinas.idsFiltradas
  );

  useEffect(() => {
    setVisivel(props.visivel);
  }, [setVisivel, props.visivel]);

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

  function contemDisciplinasFiltradas(): boolean {
    return idsDisciplinas.some((disciplina) =>
      disciplinasFiltradas.includes(disciplina)
    );
  }

  if (contemDisciplinasFiltradas()) {
    return (
      <div className="container">
        <div className="linha colapsavel">
          <div className="celula azul fonte-forte primeira-coluna borda">
            <SetaExpandir
              expandido={visivel}
              onClick={() => {
                setVisivel(!visivel);
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

          <div className="celula azul fonte-forte coluna-carga-horaria borda">
            {cargaHoraria.modulos[props.modulo.id]}
          </div>

          <div className="linha">
            {docentes.map((docente) => cargaHorariaDeDocente(docente))}
          </div>
        </div>

        <Disciplinas idsDisciplinas={idsDisciplinas} visivel={visivel} />
      </div>
    );
  }
  return <></>;
}

interface DisciplinasProps {
  idsDisciplinas: ITabela.IdDisciplina[];
  visivel: boolean;
}

function Disciplinas(props: DisciplinasProps): JSX.Element {
  if (props.visivel) {
    return (
      <div>
        {props.idsDisciplinas.map((id) => (
          <Disciplina key={id} idDisciplina={id} />
        ))}
      </div>
    );
  }
  return <></>;
}

export default Modulo;
