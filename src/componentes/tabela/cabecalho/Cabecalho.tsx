import "./Cabecalho.css";
import { InterfaceConteudoDeTabela } from "../../../api";

interface CabecalhoProps {
  docentes: InterfaceConteudoDeTabela.Docentes;
}

function Cabecalho(props: CabecalhoProps) {
  const docentes = Object.values(props.docentes);
  return (
    <div className="linha">
      <div className="borda primeira-coluna"></div>
      {docentes.map((docente) => (
        <div className="celula borda" key={docente.id}>
          {docente.nome}
        </div>
      ))}
    </div>
  );
}

export default Cabecalho;
