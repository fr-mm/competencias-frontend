import { useDispatch } from "react-redux";
import { EnumPainel, EnumPopUp } from "../../../enums";
import { reducers } from "../../../store";
import { BotaoDeMenu, MenuDeNavBar } from "../base";

function Docentes(): JSX.Element {
  const dispatch = useDispatch();

  function adicionar(): void {
    dispatch(reducers.docente.iniciarEdicao());
    dispatch(reducers.popUps.mostrar(EnumPopUp.DOCENTE));
  }

  function remover(): void {
    dispatch(reducers.painel.mostrar(EnumPainel.REMOVER_DOCENTES));
  }

  return (
    <MenuDeNavBar texto="Docentes">
      <BotaoDeMenu texto="Adicionar" onClick={adicionar} />
      <BotaoDeMenu texto="Remover" onClick={remover} />
    </MenuDeNavBar>
  );
}

export default Docentes;
