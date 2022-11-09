import "./Menu.css";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { EnumPainel } from "../../../enums";
import { RootState } from "../../../store";

interface MenuProps {
  flag: EnumPainel;
  titulo: string;
}

function Menu(props: PropsWithChildren<MenuProps>): JSX.Element {
  const menuVisivel = useSelector((state: RootState) => state.painel.visivel);
  if (props.flag === menuVisivel) {
    return (
      <div className="menu-painel">
        <div className="menu-painel-titulo">{props.titulo}</div>
        <div>{props.children}</div>
      </div>
    );
  }
  return <></>;
}

export default Menu;
