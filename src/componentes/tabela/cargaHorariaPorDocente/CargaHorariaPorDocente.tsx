import { InterfaceConteudoDeTabela } from "../../../interfaces";

interface CargaHorariaPorDocenteProps {
  docente: InterfaceConteudoDeTabela.Docente;
  colecao: InterfaceConteudoDeTabela.Modulo | InterfaceConteudoDeTabela.Curso;
  extraClassNames: string;
}

function calcularPorcentagem(parcial: number, total: number): number {
  return Math.ceil((parcial / total) * 100);
}

function CargaHorariaPorDocente(props: CargaHorariaPorDocenteProps) {
  const cargaHoraria = props.colecao.cargaHorariaPorDocente[props.docente.id];
  return (
    <div className={"celula azul borda " + props.extraClassNames}>
      <div className="carga-horaria-docente">{cargaHoraria}</div>
      <div className="porcentagem">
        ({calcularPorcentagem(cargaHoraria, props.colecao.cargaHoraria)}%)
      </div>
    </div>
  );
}
export default CargaHorariaPorDocente;
