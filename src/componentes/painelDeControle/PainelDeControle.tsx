import "./PainelDeControle.css";
import BotaoRemoverDocentes from "./botaoRemoverDocentes";

function PainelDeControle() {
  return (
    <div className="painel-de-controle">
      <div className="coluna">
        <BotaoRemoverDocentes />
      </div>
    </div>
  );
}

export default PainelDeControle;
