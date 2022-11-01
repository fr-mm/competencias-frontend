import { PropsWithChildren } from "react";

interface MenuDeNavBarProps {
  texto: string;
}

function MenuDeNavBar(props: PropsWithChildren<MenuDeNavBarProps>) {
  return (
    <div className="dropdown">
      <div className="nav-bar-item azul">
        <div className="botao-texto azul">{props.texto}</div>
      </div>
      <div className="menu azul">{props.children}</div>
    </div>
  );
}
export default MenuDeNavBar;
