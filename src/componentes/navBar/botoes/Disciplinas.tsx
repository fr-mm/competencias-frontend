import { useDispatch } from "react-redux";
import { EnumPopUpNomes } from "../../../enums";
import { reducers } from "../../../store";
import { BotaoDeMenu, MenuDeNavBar } from "../base";

function Disciplinas() {
  const dispatch = useDispatch();

  function adicionar(): void {
    dispatch(reducers.disciplina.iniciarEdicao());
    dispatch(reducers.popUps.mostrar(EnumPopUpNomes.DISCIPLINA));
  }

  function remover(): void {}

  return (
    <MenuDeNavBar texto="disciplinas">
      <BotaoDeMenu texto="adicionar" onClick={adicionar} />
      <BotaoDeMenu texto="remover" onClick={remover} />
    </MenuDeNavBar>
  );
}

export default Disciplinas;
