import React, { useEffect, useState } from "react";
import { BackendAPI } from "../../api";
import { Docente, LinhaDeTabela } from "../../otds";
import "./tabela.css";

export interface IData {}

function Tabela() {
  const [linhas, setLinhas] = useState<LinhaDeTabela[]>([]);
  const [docentes, setDocentes] = useState<Docente[]>([]);

  const fetchData = async () => {
    const api = BackendAPI.construirMockAPI();
    const docentes = await api.getConteudoDeTabela();
    console.log(docentes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>foo</div>;
}

export default Tabela;
