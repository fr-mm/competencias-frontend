import "./Painel.css";
import Legendas from "./legendas";
import { ConfirmarRemocaoDocentes } from "./remocao";
import AtribuirCompetencias from "./atribuirCompetencias";

function Painel(): JSX.Element {
  return (
    <div className="painel">
      <Legendas />
      <ConfirmarRemocaoDocentes />
      <AtribuirCompetencias />
    </div>
  );
}

export default Painel;
