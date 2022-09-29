import "./Cabecalho.css";
import { InterfaceConteudoDeTabela } from "../../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function Cabecalho() {
  const docentesFiltrados = useSelector(
    (state: RootState): InterfaceConteudoDeTabela.Docente[] =>
      state.docentes.filtrados
  );
  return (
    <div className="linha">
      <div className="borda primeira-coluna"></div>
      {docentesFiltrados.map((docente) => (
        <div className="celula borda" key={docente.id}>
          {docente.nome}
        </div>
      ))}
    </div>
  );
}

export default Cabecalho;
