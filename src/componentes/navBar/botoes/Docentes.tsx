import { useDispatch } from "react-redux";
import { EnumPopUpNomes } from "../../../enums";
import { reducers } from "../../../store";
import { BotaoDeMenu, Menu, MenuDeNavBar } from "../base";

function Docentes() {
  const dispatch = useDispatch();

  function Adicionar() {
    function onClick(): void {
      dispatch(reducers.docente.iniciarEdicao());
      dispatch(reducers.popUps.mostrar(EnumPopUpNomes.DOCENTE));
    }

    return (
      <BotaoDeMenu key="adicionarDocente" texto="adicionar" onClick={onClick} />
    );
  }

  function Remover() {
    function onClick(): void {
      dispatch(reducers.docentes.setRemovendo(true));
    }

    return (
      <BotaoDeMenu key="removerDocente" texto="remover" onClick={onClick} />
    );
  }

  const menu = <Menu itens={[Adicionar(), Remover()]} />;

  return <MenuDeNavBar texto="docentes" menu={menu} />;
}

export default Docentes;
