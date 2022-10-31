interface ErrosProps {
  erros: string[];
}

function Erros(props: ErrosProps): JSX.Element {
  return (
    <div className="erros">
      {props.erros.map((erro) => (
        <div key={erro}>{erro}</div>
      ))}
    </div>
  );
}
export default Erros;
