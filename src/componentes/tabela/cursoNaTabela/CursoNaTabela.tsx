import { InterfaceConteudoDeTabela } from "../../../api";
import ModuloNaTabela from "../moduloNaTabela";

interface CursoNaTabelaProps {
  curso: InterfaceConteudoDeTabela.Curso;
  docentes: InterfaceConteudoDeTabela.Docentes;
}

function CursoNaTabela(props: CursoNaTabelaProps) {
  const modulos = Object.values(props.curso.modulos);
  return (
    <div className="container">
      <div className="linha borda ">
        <div className="primeira-coluna">{props.curso.nome}</div>
        <div className="borda "></div>
      </div>
      <div>
        {modulos.map((modulo) => (
          <ModuloNaTabela
            key={props.curso.id + modulo.numero}
            numero={modulo.numero}
            curso={props.curso}
            docentes={props.docentes}
          />
        ))}
      </div>
    </div>
  );
}

export default CursoNaTabela;
