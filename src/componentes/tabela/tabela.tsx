import React, { useEffect } from "react";
import BackendAPI from "../../backend-api";
import "./tabela.css";

function Tabela() {
  useEffect(() => {
    const fetchData = async () => {
      const api = new BackendAPI("http://localhost:4000");
      const conteudo = await api.getConteudoDaTabela();
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>Simple Inventory Table</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Unit Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;
