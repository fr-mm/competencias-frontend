import { useDispatch } from "react-redux";
import { EnumPopUpNomes } from "../../../enums";
import { reducers } from "../../../store";
import { BotaoDeMenu, MenuDeNavBar } from "../base";

function Docentes() {
  const dispatch = useDispatch();

  function adicionar(): void {
    dispatch(reducers.docente.iniciarEdicao());
    dispatch(reducers.popUps.mostrar(EnumPopUpNomes.DOCENTE));
  }

  function remover(): void {
    dispatch(reducers.docentes.setRemovendo(true));
  }

  return (
    <MenuDeNavBar texto="docentes">
      <BotaoDeMenu texto="adicionar" onClick={adicionar} />
      <BotaoDeMenu texto="remover" onClick={remover} />
    </MenuDeNavBar>
  );
}

export default Docentes;
