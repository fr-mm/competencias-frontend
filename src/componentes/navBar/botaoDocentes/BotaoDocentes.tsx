import "./BotaoDocentes.css";
import { MenuDocentes } from "./menuDocentes";

function BotaoDocentes() {
  function onClick(): void {}

  return (
    <div className="dropdown">
      <div className="nav-bar-item azul" onClick={onClick}>
        <div className="botao-texto azul">docentes</div>
      </div>
      <MenuDocentes />
    </div>
  );
}

export default BotaoDocentes;
