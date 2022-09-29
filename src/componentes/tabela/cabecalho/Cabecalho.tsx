import "./Cabecalho.css";
import { InterfaceConteudoDeTabela } from "../../../api";
import { store } from "../../../redux/store";
import { atualizarDocentesFiltrados } from "../../../redux/slices/docentesFiltrados";
import { useDispatch, useSelector } from "react-redux";

interface CabecalhoProps {
  docentesFiltrados: InterfaceConteudoDeTabela.Docente[];
}

function Cabecalho(props: CabecalhoProps) {
  const docentesFiltrados: InterfaceConteudoDeTabela.Docente[] = useSelector(
    (state: any) => {
      console.log(state);
      return state.docentesFiltrados.value;
    }
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
