import "./Cabecalho.css";
import { ITabela } from "../../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function separarNome(nome: string): string[] {
  let nomes = nome.split(" ");
  if (nomes.length > 2) {
    nomes = [nomes[0], nomes[nomes.length - 1]];
  }
  return nomes;
}

let proximoIid = 0;

function gerarKey(docente: ITabela.Docente): string {
  const id = docente.id + proximoIid;
  proximoIid++;
  return id;
}

function Cabecalho() {
  const docentesFiltrados = useSelector(
    (state: RootState): ITabela.Docente[] => state.docentes.filtrados
  );
  return (
    <div className="linha">
      <div className="celula azul borda topo primeira-coluna cabecalho centro">
        Unidades Curriculares
      </div>

      <div className="celula azul borda topo coluna-carga-horaria cabecalho centro">
        CH
      </div>

      {docentesFiltrados.map((docente) => (
        <div
          className="celula azul borda topo nome-docente cabecalho"
          key={docente.id}
        >
          {separarNome(docente.nome).map((nome) => (
            <div key={gerarKey(docente)} className="palavra">
              {nome}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Cabecalho;
