import React, { useEffect, useState } from "react";
import { BackendAPI } from "../../api";
import { Docente, LinhaDeTabela } from "../../otds";
import "./tabela.css";

export interface IData {}

function Tabela() {
  const [linhas, setLinhas] = useState<LinhaDeTabela[]>([]);
  const [docentes, setDocentes] = useState<Docente[]>([]);

  const fetchData = async () => {
    const api = new BackendAPI("http://localhost:4000");
    const docentes = await api.getDocentes();
    console.log(docentes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>foo</div>;
}

export default Tabela;
