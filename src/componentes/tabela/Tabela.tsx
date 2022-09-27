import "./Tabela.css";
import React, { useEffect, useState } from "react";
import { InterfaceConteudoDeTabela, BackendAPI } from "../../api";
import Cabecalho from "./cabecalho";

function Tabela() {
  const [docentes, setDocentes] = useState<InterfaceConteudoDeTabela.Docentes>(
    {}
  );
  const [cursos, setCursos] = useState<InterfaceConteudoDeTabela.Cursos>({});

  const getConteudo = async () => {
    const api = BackendAPI.construirMockAPI();
    const conteudo = await api.getConteudoDeTabela();
    setDocentes(conteudo.docentes);
    setCursos(conteudo.cursos);
  };

  useEffect(() => {
    getConteudo();
  }, []);

  try {
    return (
      <table>
        <Cabecalho key="cabecalhoDaTabela" docentes={docentes} />
      </table>
    );
  } catch (e) {
    return <p>carregando...</p>;
  }
}

export default Tabela;
