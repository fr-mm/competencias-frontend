import { useDispatch } from "react-redux";
import { BotaoDeMenu, MenuDeNavBar } from "../base";

function Cursos(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <MenuDeNavBar texto="Cursos">
      <BotaoDeMenu texto="Adicionar" onClick={() => {}} />
      <BotaoDeMenu texto="Remover" onClick={() => {}} />
    </MenuDeNavBar>
  );
}

export default Cursos;
