interface CargaHorariaPorDocenteProps {
  horas: number;
  porcentagem: number;
  extraClassNames: string;
}

function formatarPorcentagem(porcentagem: number): string {
  return `${Math.ceil(porcentagem)}%`;
}

function CargaHorariaPorDocente(props: CargaHorariaPorDocenteProps) {
  return (
    <div className={"celula azul borda " + props.extraClassNames}>
      <div className="carga-horaria-docente">{props.horas}</div>
      <div className="porcentagem">
        ({formatarPorcentagem(props.porcentagem)})
      </div>
    </div>
  );
}
export default CargaHorariaPorDocente;
