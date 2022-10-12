import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";

function BotaoExpandir() {
  const dispatch = useDispatch();

  const tabelaExpandida = useSelector(
    (state: RootState) => state.tabela.expandida
  );

  return (
    <div
      className="nav-bar-item botao-expandir azul"
      onClick={() => {
        dispatch(reducers.tabela.expandirContrair());
      }}
    >
      <div>{tabelaExpandida ? "esconder" : "mostrar"}</div>
    </div>
  );
}

export default BotaoExpandir;
