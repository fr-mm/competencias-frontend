import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { EnumMenuDeQuina } from "../../../enums";
import { RootState } from "../../../store";

interface MenuProps {
  flag: EnumMenuDeQuina;
  titulo: string;
}

function Menu(props: PropsWithChildren<MenuProps>): JSX.Element {
  const menuVisivel = useSelector(
    (state: RootState) => state.menuDeQuina.visivel
  );
  if (props.flag === menuVisivel) {
    return (
      <div className="menu-de-quina">
        <div className="menu-de-quina-titulo">{props.titulo}</div>
        <div className="menu-de-quina-corpo">{props.children}</div>
      </div>
    );
  }
  return <></>;
}

export default Menu;
