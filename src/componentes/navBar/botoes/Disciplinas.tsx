import { useDispatch } from "react-redux";
import { EnumPopUpNomes } from "../../../enums";
import { reducers } from "../../../store";
import { BotaoDeMenu, Menu, MenuDeNavBar } from "../base";

function Disciplinas() {
  const dispatch = useDispatch();

  function Adicionar() {
    function onClick(): void {
      dispatch(reducers.disciplina.iniciarEdicao());
      dispatch(reducers.popUps.mostrar(EnumPopUpNomes.DISCIPLINA));
    }
    return (
      <BotaoDeMenu
        key="adicionarDisciplina"
        texto="adicionar"
        onClick={onClick}
      />
    );
  }

  const menu = <Menu itens={[Adicionar()]} />;

  return <MenuDeNavBar texto="disciplinas" menu={menu} />;
}

export default Disciplinas;
