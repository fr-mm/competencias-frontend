interface MarcadorProps {
  idItem: string;
  idsARemover: string[];
  incluirParaRemocao: Function;
  excluirParaRemocao: Function;
}

function Marcador(props: MarcadorProps): JSX.Element {
  function checked(): boolean {
    return props.idsARemover.includes(props.idItem);
  }

  function onClick(): void {
    props.idsARemover.includes(props.idItem)
      ? props.excluirParaRemocao(props.idItem)
      : props.incluirParaRemocao(props.idItem);
  }

  return (
    <div className="celula marcador azul-claro">
      <input
        type="checkbox"
        defaultChecked={checked()}
        onClick={onClick}
        className="checkbox"
      />
    </div>
  );
}
export default Marcador;
