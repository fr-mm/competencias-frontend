import "./PopUps.css";
import {
  AlterarCompetencias,
  Disciplina,
  Docente,
  GerandoPDF,
  RemoverDocentes,
} from "./popUps";
import { Disciplinas } from "./popUps";
import ConfirmarCancelamentoDeAtribuicaoDeCompetencias from "./popUps/ConfirmarCancelamentoDeAtribuicaoDeCompetencias";

function PopUps() {
  return (
    <div className="pop-up-container">
      <Docente />
      <Disciplinas />
      <Disciplina />
      <RemoverDocentes />
      <GerandoPDF />
      <AlterarCompetencias />
      <ConfirmarCancelamentoDeAtribuicaoDeCompetencias />
    </div>
  );
}

export default PopUps;
