import React, { useEffect, useState } from "react";
import { BackendAPI } from "../../api";
import { Docente, LinhaDeTabela } from "../../otds";
import { ServicoConstruirPropsDeTabela } from "../../servicos";
import "./tabela.css";

export interface IData {}

function Tabela() {
  const [linhas, setLinhas] = useState<LinhaDeTabela[]>([]);
  const [docentes, setDocentes] = useState<Docente[]>([]);

  const fetchData = async () => {
    const api = new BackendAPI("http://localhost:4000");
    const docentes = await api.getDocentes();
    const servicoConstruirPropsDeTabela = new ServicoConstruirPropsDeTabela();
    const linhas = servicoConstruirPropsDeTabela.executar(docentes);
    setLinhas(linhas);
    setDocentes(docentes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <td></td>
            {docentes.map((docente) => (
              <td>{docente.nome}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha) => (
            <tr key={linha.disciplina.id}>
              <td>{linha.disciplina.nome}</td>
              {linha.niveisDeDocentes.map((nivel) => (
                <td>{nivel}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;
