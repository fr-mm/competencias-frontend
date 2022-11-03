import "./Cabecalho.css";
import { ITabela } from "../../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";
import { EnumPopUpNomes } from "../../../enums";

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
  const dispatch = useDispatch();
  const docentesFiltrados = useSelector(
    (state: RootState): ITabela.Docente[] => state.docentes.filtrados
  );

  function criarCelulaDocente(docente: ITabela.Docente) {
    return (
      <div
        className="celula azul fonte-forte borda topo nome-docente cabecalho highlight"
        key={docente.id}
        onClick={() => abrirPopUpDocente(docente)}
      >
        {separarNome(docente.nome).map((nome) => (
          <div key={gerarKey(docente)} className="palavra">
            {nome}
          </div>
        ))}
      </div>
    );
  }

  function abrirPopUpDocente(docente: ITabela.Docente): void {
    dispatch(reducers.docente.carregar(docente));
    dispatch(reducers.popUps.mostrar(EnumPopUpNomes.DOCENTE));
  }

  return (
    <div className="linha">
      <div className="celula azul fonte-forte borda topo primeira-coluna cabecalho centro">
        Unidades Curriculares
      </div>

      <div className="celula azul fonte-forte borda topo coluna-carga-horaria cabecalho centro">
        CH
      </div>
      {docentesFiltrados.map((docente) => criarCelulaDocente(docente))}
    </div>
  );
}

export default Cabecalho;
