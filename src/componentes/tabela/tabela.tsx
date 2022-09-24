import React, { useEffect, useState } from "react";
import BackendAPI from "../../backend-api";
import { OTDDocente } from "../../otds";
import "./tabela.css";

export interface IData {}

function Tabela() {
  const [docentes, setDocentes] = useState<OTDDocente[]>([]);

  const fetchData = async () => {
    const api = new BackendAPI("http://localhost:4000");
    const payload = await api.getConteudoDaTabela();
    setDocentes(payload);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <table>
        <tbody>
          {docentes.map((docente) => (
            <tr key={docente.id}>
              <td>{docente.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;
