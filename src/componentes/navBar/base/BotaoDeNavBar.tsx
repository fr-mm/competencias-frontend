import { MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface BotaoDeNavBarProps {
  texto: string;
  className?: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function BotaoDeNavBar(props: BotaoDeNavBarProps) {
  const ativo = useSelector(
    (state: RootState) => !state.docente.atribuindoCompetencias
  );

  function getClassName(): string {
    let className = "botao ";
    if (ativo) {
      className += "highlight pointer";
    } else {
      className += "nao-clicavel";
    }
    return className;
  }

  function getOnclick(): MouseEventHandler {
    return ativo ? props.onClick : () => {};
  }

  const extraClass = props.className ? props.className : "";

  return (
    <div className={getClassName()}>
      <div className={"nav-bar-item azul " + extraClass} onClick={getOnclick()}>
        <div className="botao-texto fonte-forte">{props.texto}</div>
      </div>
    </div>
  );
}

export default BotaoDeNavBar;
