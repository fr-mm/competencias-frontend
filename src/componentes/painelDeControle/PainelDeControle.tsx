import "./PainelDeControle.css";
import { BotaoExpandir } from "./botaoExpandir";
import { FiltroDocentes } from "./filtroDocentes";
import FiltroCursos from "./filtroCursos";

function PainelDeControle() {
  return (
    <div className="painel-de-controle">
      <div className="coluna">
        <FiltroDocentes />
        <div className="separador"></div>
        <FiltroCursos />
        <div className="separador"></div>

        <BotaoExpandir />
      </div>
    </div>
  );
}

export default PainelDeControle;
