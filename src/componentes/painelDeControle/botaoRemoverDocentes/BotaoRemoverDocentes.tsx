import "./BotaoRemoverDocentes.css";
import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";
import { PopUpRemomverDocentes } from "../../popUps";
import { EnumPopUpNomes } from "../../../enums";

function BotaoRemoverDocentes() {
  const dispatch = useDispatch();
  const removendo = useSelector((state: RootState) => state.docentes.removendo);
  const idsARemover = useSelector(
    (state: RootState) => state.docentes.idsARemover
  );

  function getClasses(): string {
    let classes = "botao ";
    classes += removendo ? "removendo " : "";
    return classes;
  }

  function botaoCancelarOnClick(): void {
    dispatch(reducers.docentes.setRemovendo(false));
    dispatch(reducers.docentes.limparListaDeRemocao());
  }

  function botaoRemoverOnClick(): void {
    if (!removendo) {
      iniciarSelecao();
    } else {
      removerSelecionados();
    }
  }

  function iniciarSelecao(): void {
    dispatch(reducers.docentes.setRemovendo(true));
  }

  function removerSelecionados(): void {
    if (idsARemover.length > 0) {
      dispatch(reducers.popUps.mostrar(EnumPopUpNomes.REMOVER_DOCENTES));
    }
  }

  function getBotaoCancelar() {
    if (removendo) {
      return <button onClick={botaoCancelarOnClick}>x</button>;
    }
  }

  return (
    <div>
      <button className={getClasses()} onClick={botaoRemoverOnClick}>
        remover docentes
      </button>
      {getBotaoCancelar()}
      <PopUpRemomverDocentes />
    </div>
  );
}

export default BotaoRemoverDocentes;
