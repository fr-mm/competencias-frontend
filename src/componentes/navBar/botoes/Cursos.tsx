import { useDispatch } from "react-redux";
import { EnumPainel } from "../../../enums";
import { reducers } from "../../../store";
import { BotaoDeMenu, MenuDeNavBar } from "../base";

function Cursos(): JSX.Element {
  const dispatch = useDispatch();

  function adicionar(): void {}

  function remover(): void {
    dispatch(reducers.painel.mostrar(EnumPainel.REMOVER_CURSOS));
  }

  return (
    <MenuDeNavBar texto="Cursos">
      <BotaoDeMenu texto="Adicionar" onClick={adicionar} />
      <BotaoDeMenu texto="Remover" onClick={remover} />
    </MenuDeNavBar>
  );
}

export default Cursos;
