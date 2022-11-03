import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";
import { BotaoDeNavBar } from "../base";

function Expandir() {
  const dispatch = useDispatch();
  const tabelaExpandida = useSelector(
    (state: RootState) => state.tabela.expandida
  );
  function onClick() {
    dispatch(reducers.tabela.expandirContrair());
  }
  function texto() {
    return tabelaExpandida ? "Esconder" : "Mostrar";
  }
  return <BotaoDeNavBar texto={texto()} onClick={onClick} />;
}

export default Expandir;
