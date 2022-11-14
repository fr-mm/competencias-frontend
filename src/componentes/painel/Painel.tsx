import "./Painel.css";
import Legendas from "./legendas";
import { ConfirmarRemocaoCursos, ConfirmarRemocaoDocentes } from "./remocao";
import AtribuirCompetencias from "./atribuirCompetencias";

function Painel(): JSX.Element {
  return (
    <div className="painel">
      <Legendas />
      <ConfirmarRemocaoDocentes />
      <ConfirmarRemocaoCursos />
      <AtribuirCompetencias />
    </div>
  );
}

export default Painel;
