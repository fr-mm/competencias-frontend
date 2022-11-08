import { useDispatch } from "react-redux";
import { EnumPopUp } from "../../../enums";
import { reducers } from "../../../store";
import { BotaoDeMenu, MenuDeNavBar } from "../base";

function Disciplinas() {
  const dispatch = useDispatch();

  function adicionar(): void {
    dispatch(reducers.disciplina.iniciarEdicao());
    dispatch(reducers.popUps.mostrar(EnumPopUp.DISCIPLINA));
  }

  function listar(): void {
    dispatch(reducers.popUps.mostrar(EnumPopUp.DISCIPLINAS));
  }

  return (
    <MenuDeNavBar texto="Disciplinas">
      <BotaoDeMenu texto="Adicionar" onClick={adicionar} />
      <BotaoDeMenu texto="Listar" onClick={listar} />
    </MenuDeNavBar>
  );
}

export default Disciplinas;
