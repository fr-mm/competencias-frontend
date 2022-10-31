import { ReactNode } from "react";

interface MenuDeNavBarProps {
  texto: string;
  menu: ReactNode;
}

function MenuDeNavBar(props: MenuDeNavBarProps) {
  return (
    <div className="dropdown">
      <div className="nav-bar-item azul">
        <div className="botao-texto azul">{props.texto}</div>
      </div>
      {props.menu}
    </div>
  );
}
export default MenuDeNavBar;
