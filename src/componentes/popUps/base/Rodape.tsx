import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { reducers } from "../../../store";

interface RodapeProps {
  editando: boolean;
  editar: MouseEventHandler<HTMLButtonElement>;
  salvar: MouseEventHandler<HTMLButtonElement>;
  cancelar: MouseEventHandler<HTMLButtonElement>;
}

function Rodape(props: RodapeProps): JSX.Element {
  const dispatch = useDispatch();

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
        <button onClick={() => dispatch(reducers.disciplina.iniciarEdicao())}>
          editar
        </button>
        <button onClick={props.cancelar}>sair</button>
      </div>
    );
  }
}

export default Rodape;
