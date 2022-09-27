import "./tabela.css";
import React, { useEffect, useState } from "react";
import { BackendAPI } from "../../api";
import { InterfaceConteudoDeTabela } from "../../api";
import gerarColunas from "./gerarColunas";

function Tabela() {
  const [conteudo, setConteudo] =
    useState<InterfaceConteudoDeTabela.ConteudoDeTabela>(
      {} as InterfaceConteudoDeTabela.ConteudoDeTabela
    );

  useEffect(() => {
    const api = BackendAPI.construirMockAPI();
    api.getConteudoDeTabela().then((c) => setConteudo(c));
  }, []);

  return (
    <div>
      {Object.values(conteudo.docentes).map((d) => (
        <div>{d.nome}</div>
      ))}
    </div>
  );
}

export default Tabela;
