import { Column } from "react-table";
import { InterfaceConteudoDeTabela } from "../../api";

type Coluna = Column<InterfaceConteudoDeTabela.Docente>;

function gerarColunas(docentes: InterfaceConteudoDeTabela.Docentes): Coluna[] {
  if (docentes === undefined) {
    return [];
  }
  const colunas: Coluna[] = [];
  for (let docente of Object.values(docentes)) {
    const coluna: Coluna = {
      Header: docente.nome,
      accessor: "id",
    };
    colunas.push(coluna);
  }
  return colunas;
}

export default gerarColunas;
