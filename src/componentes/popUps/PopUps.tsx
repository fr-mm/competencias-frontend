import { useSelector } from "react-redux";
import { EnumPopUpNomes } from "../../enums";
import { RootState } from "../../store";
import PopUpDocente from "./PopUpDocente";
import PopUpRemoverDocentes from "./PopUpRemoverDocentes";
import "./PopUps.css";

function PopUps() {
  const popUps = useSelector((state: RootState) => state.popUps.visiveis);

  function popUp(nome: EnumPopUpNomes, componente: JSX.Element) {
    if (popUps.includes(nome)) {
      return componente;
    }
  }

  return (
    <div className="pop-up-container">
      {popUp(EnumPopUpNomes.DOCENTE, <PopUpDocente />)}
      {popUp(EnumPopUpNomes.REMOVER_DOCENTES, <PopUpRemoverDocentes />)}
    </div>
  );
}

export default PopUps;
