import "./PopUps.css";
import { Disciplina, Docente, RemoverDocentes } from "./popUps";
import { Disciplinas } from "./popUps";

function PopUps() {
  return (
    <div className="pop-up-container">
      <Docente />
      <Disciplinas />
      <Disciplina />
      <RemoverDocentes />
    </div>
  );
}

export default PopUps;
