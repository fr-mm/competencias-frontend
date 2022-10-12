import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";

function BotaoExpandir() {
  const dispatch = useDispatch();

  const tabelaExpandida = useSelector(
    (state: RootState) => state.tabela.expandida
  );

  return (
    <div className="botao highlight">
      <div
        className="nav-bar-item botao-expandir azul"
        onClick={() => {
          dispatch(reducers.tabela.expandirContrair());
        }}
      >
        <div className="botao-texto">
          {tabelaExpandida ? "esconder" : "mostrar"}
        </div>
      </div>
    </div>
  );
}

export default BotaoExpandir;
