import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";

function BotaoExpandir() {
  const dispatch = useDispatch();

  const tabelaExpandida = useSelector(
    (state: RootState) => state.tabela.expandida
  );

  return (
    <div className="botao botao-expandir">
      <button
        onClick={() => {
          dispatch(reducers.tabela.expandirContrair());
        }}
      >
        {tabelaExpandida ? "esconder tabela" : "expandir tabela"}
      </button>
    </div>
  );
}

export default BotaoExpandir;
