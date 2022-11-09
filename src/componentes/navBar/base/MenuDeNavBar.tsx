import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface MenuDeNavBarProps {
  texto: string;
}

function MenuDeNavBar(props: PropsWithChildren<MenuDeNavBarProps>) {
  const ativo = useSelector(
    (state: RootState) => !state.docente.atribuindoCompetencias
  );

  function getClassName(): string {
    let className = "dropdown ";
    if (ativo) {
      className += "dropdown-ativo pointer";
    } else {
      className += "nao-clicavel";
    }
    return className;
  }

  function getItemClassName(): string {
    let className = "nav-bar-item azul ";
    if (ativo) {
      className += "highlight";
    }
    return className;
  }
  return (
    <div className={getClassName()}>
      <div className={getItemClassName()}>
        <div className="botao-texto fonte-forte">{props.texto}</div>
      </div>
      <div className="menu azul fonte-forte">{props.children}</div>
    </div>
  );
}
export default MenuDeNavBar;
