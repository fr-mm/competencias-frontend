import { ITabela } from "../../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function Cabecalho() {
  const docentesFiltrados = useSelector(
    (state: RootState): ITabela.Docente[] => state.docentes.filtrados
  );
  return (
    <div className="linha">
      <div className="celula azul borda topo primeira-coluna">
        Unidades Curriculares
      </div>

      <div className="celula azul borda topo coluna-carga-horaria ">CH</div>

      {docentesFiltrados.map((docente) => (
        <div className="celula azul borda topo" key={docente.id}>
          {docente.nome}
        </div>
      ))}
    </div>
  );
}

export default Cabecalho;
