import "./PainelDeControle.css";
import { BotaoExpandir } from "./botaoExpandir";
import { FiltroDocentes } from "./filtroDocentes";
import FiltroCursos from "./filtroCursos";

function PainelDeControle() {
  return (
    <div className="painel-de-controle">
      <div className="coluna">
        <FiltroDocentes />
        <FiltroCursos />

        <BotaoExpandir />
      </div>
    </div>
  );
}

export default PainelDeControle;
