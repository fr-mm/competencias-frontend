import "./Tabela.css";
import React, { useEffect, useState } from "react";
import { InterfaceConteudoDeTabela, BackendAPI } from "../../api";
import Cabecalho from "./cabecalho";
import CursoNaTabela from "./cursoNaTabela";

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
      <div className="tabela borda">
        <Cabecalho key="cabecalhoDaTabela" docentes={docentes} />
        <div>
          {Object.values(cursos).map((curso) => (
            <CursoNaTabela key={curso.id} curso={curso} docentes={docentes} />
          ))}
        </div>
      </div>
    );
  } catch (e) {
    return <p>carregando...</p>;
  }
}

export default Tabela;
