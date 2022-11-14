import "./PopUps.css";
import {
  AlterarCompetencias,
  Disciplina,
  Docente,
  GerandoPDF,
  RemoverCursos,
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
      <RemoverCursos />
      <GerandoPDF />
      <AlterarCompetencias />
      <ConfirmarCancelamentoDeAtribuicaoDeCompetencias />
    </div>
  );
}

export default PopUps;
