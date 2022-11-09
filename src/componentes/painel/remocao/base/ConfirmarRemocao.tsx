import "./ConfirmarRemocao.css";
import { MouseEventHandler, useState } from "react";
import { EnumPainel } from "../../../../enums";
import Menu from "../../base/Menu";

interface ConfirmarRemocaoProps {
  titulo: string;
  flag: EnumPainel;
  confirmar: MouseEventHandler<HTMLButtonElement>;
  cancelar: MouseEventHandler<HTMLButtonElement>;
  selecionarTodos: Function;
  desselecionarTodos: Function;
}

function ConfirmarRemocao(props: ConfirmarRemocaoProps): JSX.Element {
  const [todosSelecionados, setTodosSelecionados] = useState(false);

  function textoSelecionarTodos(): string {
    return todosSelecionados ? "desselecionar todos" : "selecionar todos";
  }

  function selecionarTodosOnClick(): void {
    if (todosSelecionados) {
      props.desselecionarTodos();
    } else {
      props.selecionarTodos();
    }
    setTodosSelecionados(!todosSelecionados);
  }

  return (
    <Menu titulo={props.titulo} flag={props.flag}>
      <div className="botoes">
        <button className="botao-confirmar" onClick={props.confirmar}>
          remover selecionados
        </button>
        <button
          className="selecionar-todos"
          onClick={() => {
            selecionarTodosOnClick();
          }}
        >
          {textoSelecionarTodos()}
        </button>
        <button className="botao-cancelar" onClick={props.cancelar}>
          cancelar
        </button>
      </div>
    </Menu>
  );
}
export default ConfirmarRemocao;
