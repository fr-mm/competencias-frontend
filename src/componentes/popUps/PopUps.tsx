import "./PopUps.css";
import { Disciplina, Docente, RemoverDocentes } from "./popUps";

function PopUps() {
  return (
    <div className="pop-up-container">
      <Docente />
      <Disciplina />
      <RemoverDocentes />
    </div>
  );
}

export default PopUps;
