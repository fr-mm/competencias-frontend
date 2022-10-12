import { useDispatch, useSelector } from "react-redux";
import { EnumPopUpNomes } from "../../../enums";
import { reducers, RootState } from "../../../store";

function ConfirmarRemocaoDocentes() {
  const dispatch = useDispatch();
  const removendo = useSelector((state: RootState) => state.docentes.removendo);
  const idsARemover = useSelector(
    (state: RootState) => state.docentes.idsARemover
  );

  function botaoCancelarOnClick(): void {
    dispatch(reducers.docentes.setRemovendo(false));
    dispatch(reducers.docentes.limparListaDeRemocao());
  }

  function removerSelecionados(): void {
    if (idsARemover.length > 0) {
      dispatch(reducers.popUps.mostrar(EnumPopUpNomes.REMOVER_DOCENTES));
    } else {
      dispatch(reducers.docentes.setRemovendo(false));
    }
  }

  if (removendo) {
    return (
      <div className="remover-docentes">
        <div className="botao confirmar vermelho" onClick={removerSelecionados}>
          remover selecionados
        </div>
        <div className="botao cancelar azul" onClick={botaoCancelarOnClick}>
          cancelar
        </div>
        <div className="pop-up-container"></div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ConfirmarRemocaoDocentes;
