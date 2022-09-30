import "./PainelDeControle.css";
import { BotaoExpandir } from "./botaoExpandir";
import { FiltroDocentes } from "./filtroDocentes";

function PainelDeControle() {
  return (
    <div className="painel-de-controle">
      <div className="coluna">
        <FiltroDocentes />
        <BotaoExpandir />
      </div>
    </div>
  );
}

export default PainelDeControle;
