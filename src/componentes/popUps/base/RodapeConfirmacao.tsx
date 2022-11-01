import { MouseEventHandler } from "react";

interface RodapeConfirmacaoProps {
  confirmar: MouseEventHandler<HTMLButtonElement>;
  cancelar: MouseEventHandler<HTMLButtonElement>;
}

function RodapeConfirmacao(props: RodapeConfirmacaoProps): JSX.Element {
  return (
    <div className="rodape">
      <button onClick={props.confirmar}>confirmar</button>
      <button onClick={props.cancelar}>cancelar</button>
    </div>
  );
}

export default RodapeConfirmacao;
