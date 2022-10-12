import "./Tabela.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, reducers } from "../../store";
import api from "../../api";
import Cabecalho from "./cabecalho";
import Curso from "./curso";
import RemocaoDocentes from "./remocaoDocentes";

function Tabela() {
  const atualizada = useSelector((state: RootState) => state.tabela.atualizada);

  const dispatch = useDispatch();

  const getConteudo = async () => {
    if (!atualizada) {
      const conteudo = await api.getConteudoDeTabela();

      dispatch(reducers.docentes.atualizar(conteudo.docentes));
      dispatch(reducers.docentes.filtrarPorNome(""));
      dispatch(reducers.docentes.ordenarAlfabeticamente());
      dispatch(reducers.cursos.atualizar(conteudo.cursos));
      dispatch(reducers.cursos.filtrarPorNome(""));
      dispatch(reducers.tabela.setAtualizada(true));
    }
  };

  useEffect(() => {
    getConteudo();
  });

  const cursosFiltrados = useSelector(
    (state: RootState) => state.cursos.filtrados
  );
  const visivel = useSelector((state: RootState) => state.tabela.expandida);

  try {
    return (
      <div className="tabela">
        <RemocaoDocentes />
        <Cabecalho />
        <div>
          {Object.values(cursosFiltrados).map((curso) => (
            <Curso key={curso.id} curso={curso} visivel={visivel} />
          ))}
        </div>
      </div>
    );
  } catch (e) {
    return <p>carregando...</p>;
  }
}

export default Tabela;
