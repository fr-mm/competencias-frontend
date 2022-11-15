import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnumPopUp } from "../../../enums";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import { MarcadorCurso } from "../../marcadores";
import CargaHorariaPorDocente from "../cargaHorariaPorDocente";
import Modulo from "../modulo";
import { SetasOrdenadoras } from "../setas";
import SetaExpandir from "../setas/SetaExpandir";

interface CursoProps {
  curso: ITabela.Curso;
  visivel: boolean;
}

function Curso(props: CursoProps): JSX.Element {
  const dispatch = useDispatch();
  const [visivel, setVisivel] = useState(props.visivel);
  const cargaHoraria = useSelector((state: RootState) => state.cargaHoraria);
  const docentes = useSelector((state: RootState) => state.docentes.filtrados);
  const disciplinasFiltradas = useSelector(
    (state: RootState) => state.disciplinas.idsFiltradas
  );

  useEffect(() => {
    setVisivel(props.visivel);
  }, [setVisivel, props.visivel]);

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

  function onClick() {
    dispatch(reducers.curso.carregar(props.curso));
    dispatch(reducers.popUps.mostrar(EnumPopUp.CURSO));
  }

  if (contemDisciplinasFiltradas()) {
    return (
      <div className="container">
        <div className="linha colapsavel">
          <MarcadorCurso idCurso={props.curso.id} />
          <div className="celula azul-escuro fonte-forte primeira-coluna borda highlight">
            <SetaExpandir
              expandido={visivel}
              onClick={() => setVisivel(!visivel)}
            />
            <div className="texto-primeira-coluna pointer" onClick={onClick}>
              {props.curso.nome}
            </div>

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
          <div className="celula azul-escuro fonte-forte coluna-carga-horaria borda">
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
                  extraClassNames="azul-escuro"
                />
              );
            })}
          </div>
        </div>
        <Modulos modulos={modulos} idCurso={props.curso.id} visivel={visivel} />
      </div>
    );
  }
  return <></>;
}

interface ModulosProps {
  modulos: ITabela.Modulo[];
  idCurso: ITabela.IdCurso;
  visivel: boolean;
}

function Modulos(props: ModulosProps): JSX.Element {
  if (props.visivel) {
    return (
      <div>
        {props.modulos.map((modulo) => (
          <Modulo
            key={props.idCurso + modulo.numero}
            modulo={modulo}
            visivel={props.visivel}
          />
        ))}
      </div>
    );
  }
  return <></>;
}

export default Curso;
