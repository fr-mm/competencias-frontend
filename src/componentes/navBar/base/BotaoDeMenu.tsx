import { MouseEventHandler } from "react";

interface BotaoDeMenuProps {
  texto: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function BotaoDeMenu(props: BotaoDeMenuProps) {
  return (
    <div className="menu-item botao azul" onClick={props.onClick}>
      <div className="menu-item-container">{props.texto}</div>
    </div>
  );
}
export default BotaoDeMenu;
