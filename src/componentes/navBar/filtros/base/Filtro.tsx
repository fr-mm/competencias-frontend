interface FiltroProps {
  id: string;
  label: string;
  onChange: Function;
  ativo?: boolean;
}

function Filtro(props: FiltroProps): JSX.Element {
  const ativo = props.ativo === undefined ? true : props.ativo;

  function getClassName(): string {
    let className = "filtro-container";
    if (!ativo) {
      className += " nao-clicavel";
    }
    return className;
  }

  return (
    <div className={getClassName()}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="filtro">
        <input
          className="azul-claro"
          id={props.id}
          type="text"
          onChange={(evento) => props.onChange(evento.target.value)}
        />
      </div>
    </div>
  );
}
export default Filtro;
