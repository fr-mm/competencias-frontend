import "./PainelDeControle.css";
import { FiltroDocentes } from "./filtroDocentes";
import FiltroCursos from "./filtroCursos";
import BotaoRemoverDocentes from "./botaoRemoverDocentes";

function PainelDeControle() {
  return (
    <div className="painel-de-controle">
      <div className="coluna">
        <FiltroDocentes />
        <div className="separador"></div>
        <FiltroCursos />
        <div className="separador"></div>

        <BotaoRemoverDocentes />
      </div>
    </div>
  );
}

export default PainelDeControle;
