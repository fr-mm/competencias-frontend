import "./BotaoRemoverDocentes.css";
import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";

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
      dispatch(reducers.docentes.setRemovendo(true));
    } else {
      botaoCancelarOnClick();
      alert("place holder: confirmar remoção de docentes");
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
    </div>
  );
}

export default BotaoRemoverDocentes;
