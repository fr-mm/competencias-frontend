import "./Tabela.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, reducers } from "../../store";
import { BackendAPI } from "../../api";
import Cabecalho from "./cabecalho";
import CursoNaTabela from "./cursoNaTabela";

function Tabela() {
  const [montado, setMontado] = useState(false);

  const dispatch = useDispatch();

  const getConteudo = async () => {
    if (!montado) {
      setMontado(true);
      const api = BackendAPI.construirMockAPI();
      const conteudo = await api.getConteudoDeTabela();

      dispatch(reducers.docentes.atualizar(conteudo.docentes));
      dispatch(reducers.cursos.atualizar(conteudo.cursos));
      dispatch(reducers.docentes.filtrarPorNome(""));
      dispatch(reducers.cursos.filtrarPorNome(""));
    }
  };

  useEffect(() => {
    getConteudo();
  });

  const cursosFiltrados = useSelector(
    (state: RootState) => state.cursos.filtrados
  );
  const vis = useSelector((state: RootState) => state.tabela.expandida);

  try {
    return (
      <div className="tabela">
        <Cabecalho key="cabecalhoDaTabela" />
        <div>
          {Object.values(cursosFiltrados).map((curso) => (
            <CursoNaTabela key={curso.id} curso={curso} visivel={vis} />
          ))}
        </div>
      </div>
    );
  } catch (e) {
    return <p>carregando...</p>;
  }
}

export default Tabela;
