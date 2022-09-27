import { Docente } from "../../otds";

function getColunas(docentes: Docente[]): object[] {
  const colunas = [];
  for (let docente of docentes) {
    const coluna = {
      Header: docente.nome,
      accessor: "nome",
    };
    colunas.push(coluna);
  }
  return colunas;
}

export default getColunas;
