import { MouseEventHandler } from "react";

interface RodapeEntidadeProps {
  editando: boolean;
  editar: MouseEventHandler<HTMLButtonElement>;
  salvar: MouseEventHandler<HTMLButtonElement>;
  cancelar: MouseEventHandler<HTMLButtonElement>;
}

function RodapeEntidade(props: RodapeEntidadeProps): JSX.Element {
  if (props.editando) {
    return (
      <div className="rodape">
        <button onClick={props.salvar}>salvar</button>
        <button onClick={props.cancelar}>cancelar</button>
      </div>
    );
  } else {
    return (
      <div className="rodape">
        <button onClick={props.editar}>editar</button>
        <button onClick={props.cancelar}>sair</button>
      </div>
    );
  }
}

export default RodapeEntidade;