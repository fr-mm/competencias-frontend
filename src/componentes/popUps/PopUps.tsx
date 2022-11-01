import "./PopUps.css";
import { useSelector } from "react-redux";
import { EnumPopUpNomes } from "../../enums";
import { RootState } from "../../store";
import PopUpRemoverDocentes from "./PopUpRemoverDocentes";
import { Disciplina, Docente } from "./popUps";

function PopUps() {
  const popUps = useSelector((state: RootState) => state.popUps.visiveis);

  function popUp(nome: EnumPopUpNomes, componente: JSX.Element) {
    if (popUps.includes(nome)) {
      return componente;
    }
  }

  return (
    <div className="pop-up-container">
      {popUp(EnumPopUpNomes.REMOVER_DOCENTES, <PopUpRemoverDocentes />)}
      <Docente />
      <Disciplina />
    </div>
  );
}

export default PopUps;
