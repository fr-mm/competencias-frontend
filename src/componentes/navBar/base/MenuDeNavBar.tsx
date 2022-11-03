import { PropsWithChildren } from "react";

interface MenuDeNavBarProps {
  texto: string;
}

function MenuDeNavBar(props: PropsWithChildren<MenuDeNavBarProps>) {
  return (
    <div className="dropdown">
      <div className="nav-bar-item azul">
        <div className="botao-texto fonte-forte">{props.texto}</div>
      </div>
      <div className="menu azul fonte-forte">{props.children}</div>
    </div>
  );
}
export default MenuDeNavBar;
