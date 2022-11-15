import { MouseEventHandler, PropsWithChildren } from "react";

interface RodapeEntidadeProps {
  editando: boolean;
  editar: MouseEventHandler<HTMLButtonElement>;
  salvar: MouseEventHandler<HTMLButtonElement>;
  descartarAlteracoes: MouseEventHandler<HTMLButtonElement>;
  sair: MouseEventHandler<HTMLButtonElement>;
}

function RodapeEntidade(
  props: PropsWithChildren<RodapeEntidadeProps>
): JSX.Element {
  if (props.editando) {
    return (
      <div className="rodape">
        <button onClick={props.salvar}>salvar</button>
        <button onClick={props.descartarAlteracoes}>cancelar</button>
      </div>
    );
  } else {
    return (
      <div className="rodape">
        {props.children}
        <button onClick={props.editar}>editar</button>
        <button onClick={props.sair}>sair</button>
      </div>
    );
  }
}

export default RodapeEntidade;
