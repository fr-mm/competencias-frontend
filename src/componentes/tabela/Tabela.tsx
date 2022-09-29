import "./Tabela.css";
import React, { useEffect, useState } from "react";
import { BackendAPI } from "../../api";
import Cabecalho from "./cabecalho";
import CursoNaTabela from "./cursoNaTabela";
import {
  atualizarDocentes,
  filtrarDocentesPorNome,
} from "../../store/slices/docentesReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  atualizarCursos,
  filtrarCursosPorNome,
} from "../../store/slices/cursosReducer";

function Tabela() {
  const [visivel, setVisivel] = useState(false);
  const [montado, setMontado] = useState(false);

  const dispatch = useDispatch();

  const getConteudo = async () => {
    if (!montado) {
      const api = BackendAPI.construirMockAPI();
      const conteudo = await api.getConteudoDeTabela();
      dispatch(atualizarDocentes(conteudo.docentes));
      dispatch(atualizarCursos(conteudo.cursos));
      dispatch(filtrarDocentesPorNome(""));
      dispatch(filtrarCursosPorNome(""));
      setMontado(true);
    }
  };

  useEffect(() => {
    getConteudo();
  });

  const cursosFiltrados = useSelector(
    (state: RootState) => state.cursos.filtrados
  );

  try {
    return (
      <div className="tabela borda">
        <button
          onClick={() => {
            setVisivel(!visivel);
          }}
        >
          {visivel ? "esconder" : "mostrar"}
        </button>
        <input
          type="text"
          onChange={(evento) =>
            dispatch(filtrarDocentesPorNome(evento.target.value))
          }
        />
        <Cabecalho key="cabecalhoDaTabela" />
        <div>
          {Object.values(cursosFiltrados).map((curso) => (
            <CursoNaTabela key={curso.id} curso={curso} visivel={visivel} />
          ))}
        </div>
      </div>
    );
  } catch (e) {
    return <p>carregando...</p>;
  }
}

export default Tabela;
