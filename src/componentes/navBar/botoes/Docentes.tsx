import { useDispatch } from "react-redux";
import { EnumPainel, EnumPopUpNomes } from "../../../enums";
import { reducers } from "../../../store";
import { BotaoDeMenu, MenuDeNavBar } from "../base";

function Docentes() {
  const dispatch = useDispatch();

  function adicionar(): void {
    dispatch(reducers.docente.iniciarEdicao());
    dispatch(reducers.popUps.mostrar(EnumPopUpNomes.DOCENTE));
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
