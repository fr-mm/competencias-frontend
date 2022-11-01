interface FiltroProps {
  id: string;
  label: string;
  onChange: Function;
}

function Filtro(props: FiltroProps): JSX.Element {
  return (
    <div className="filtro-container">
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
