import "./PopUps.css";
import { Disciplina, Docente, GerandoPDF, RemoverDocentes } from "./popUps";
import { Disciplinas } from "./popUps";

function PopUps() {
  return (
    <div className="pop-up-container">
      <Docente />
      <Disciplinas />
      <Disciplina />
      <RemoverDocentes />
      <GerandoPDF />
    </div>
  );
}

export default PopUps;
