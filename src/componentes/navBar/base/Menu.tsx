import { ReactNode } from "react";

interface MenuProps {
  itens: ReactNode[];
}

function Menu(props: MenuProps) {
  return <div className="menu azul">{props.itens.map((item) => item)}</div>;
}

export default Menu;
