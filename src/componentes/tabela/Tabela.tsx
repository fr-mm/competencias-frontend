import "./Tabela.css";
import React, { RefObject, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, reducers } from "../../store";
import api from "../../api";
import Cabecalho from "./cabecalho";
import Curso from "./curso";
import { ITabela } from "../../interfaces";
import { CargaHorariaState } from "../../store/slices/cargaHorariaSlice";
import Carregando from "./carregando";
import { MarcadoresDocentes } from "../marcadores";

interface TabelaProps {
  referencia: RefObject<HTMLDivElement>;
}

function Tabela(props: TabelaProps): JSX.Element {
  const atualizada = useSelector((state: RootState) => state.tabela.atualizada);
  const dispatch = useDispatch();

  async function atualizar(): Promise<void> {
    if (!atualizada) {
      await getConteudo();
      dispatch(reducers.tabela.setAtualizada(true));
    }
  }

  async function getConteudo(): Promise<void> {
    const response = await api.getConteudoDeTabela();

    if (response.status === 200) {
      const conteudo = await response.json();

      dispatch(reducers.docentes.atualizar(conteudo.docentes));
      dispatch(reducers.docentes.filtrarPorNome(""));
      dispatch(reducers.docentes.ordenarAlfabeticamente());
      dispatch(reducers.cursos.atualizar(conteudo.cursos));
      dispatch(reducers.cursos.filtrarPorNome(""));
      dispatch(reducers.disciplinas.atualizar(conteudo.disciplinas));
      dispatch(reducers.disciplinas.filtrarPorNome(""));
      dispatch(
        reducers.tiposDeContratacao.atualizar(conteudo.tiposDeContratacao)
      );
      dispatch(reducers.unidadesSenaiSlice.atualizar(conteudo.unidadesSenai));
      atualizarCargasHorarias(conteudo);
    }
  }

  function atualizarCargasHorarias(conteudo: ITabela.Tabela): void {
    const cargas: CargaHorariaState = {
      modulos: {},
      cursos: {},
      docentes: {},
    };

    for (let docente of Object.values(conteudo.docentes)) {
      cargas.docentes[docente.id] = { cursos: {}, modulos: {} };
      for (let curso of Object.values(conteudo.cursos)) {
        let cargaCurso = 0;
        let cargaDocenteCurso = 0;

        for (let modulo of Object.values(curso.modulos)) {
          let cargaModulo = 0;
          let cargaDocenteModulo = 0;

          for (let idDisciplina of modulo.disciplinas) {
            const cargaDisciplina =
              conteudo.disciplinas[idDisciplina].cargaHoraria;
            cargaModulo += cargaDisciplina;
            if (docente.competencias[idDisciplina] > 2) {
              cargaDocenteModulo += cargaDisciplina;
            }
          }

          cargas.modulos[modulo.id] = cargaModulo;
          cargaCurso += cargaModulo;
          cargas.docentes[docente.id].modulos[modulo.id] = {
            horas: cargaDocenteModulo,
            porcentagem: porcentagem(cargaDocenteModulo, cargaModulo),
          };
          cargaDocenteCurso += cargaDocenteModulo;
        }
        cargas.cursos[curso.id] = cargaCurso;
        cargas.docentes[docente.id].cursos[curso.id] = {
          horas: cargaDocenteCurso,
          porcentagem: porcentagem(cargaDocenteCurso, cargaCurso),
        };
      }
    }
    dispatch(reducers.cargaHoraria.atualizar(cargas));
  }

  useEffect(() => {
    atualizar();
  });

  const cursosFiltrados = useSelector(
    (state: RootState) => state.cursos.filtrados
  );
  const visivel = useSelector((state: RootState) => state.tabela.expandida);

  if (atualizada) {
    return (
      <div className="tabela" ref={props.referencia}>
        <MarcadoresDocentes />
        <Cabecalho />
        <div>
          {Object.values(cursosFiltrados).map((curso) => (
            <Curso key={curso.id} curso={curso} visivel={visivel} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Carregando />;
  }
}

function porcentagem(menor: number, maior: number): number {
  return (menor / maior) * 100;
}

export default Tabela;
