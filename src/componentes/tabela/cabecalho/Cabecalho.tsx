import "./Cabecalho.css";
import { InterfaceConteudoDeTabela } from "../../../api";

interface CabecalhoProps {
  docentesFiltrados: InterfaceConteudoDeTabela.Docente[];
}

function Cabecalho(props: CabecalhoProps) {
  return (
    <div className="linha">
      <div className="borda primeira-coluna"></div>
      {props.docentesFiltrados.map((docente) => (
        <div className="celula borda" key={docente.id}>
          {docente.nome}
        </div>
      ))}
    </div>
  );
}

export default Cabecalho;
