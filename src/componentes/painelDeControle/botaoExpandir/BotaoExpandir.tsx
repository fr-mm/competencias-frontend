import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";

function BotaoExpandir() {
  const dispatch = useDispatch();

  const tabelaExpandida = useSelector(
    (state: RootState) => state.tabela.expandida
  );

  return (
    <button
      onClick={() => {
        dispatch(reducers.tabela.expandirContrair());
      }}
    >
      {tabelaExpandida ? "esconder" : "mostrar"}
    </button>
  );
}

export default BotaoExpandir;
