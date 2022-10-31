import { MouseEventHandler } from "react";

interface BotaoDeNavBarProps {
  texto: string;
  className?: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function BotaoDeNavBar(props: BotaoDeNavBarProps) {
  return (
    <div className="botao">
      <div
        className={"nav-bar-item azul " + props.className}
        onClick={props.onClick}
      >
        <div className="botao-texto">{props.texto}</div>
      </div>
    </div>
  );
}

export default BotaoDeNavBar;
