import { useDispatch } from "react-redux";
import { reducers } from "../../../../store";

function BotaoRemoverDocentes() {
  const dispatch = useDispatch();

  function botaoRemoverOnClick(): void {
    dispatch(reducers.docentes.setRemovendo(true));
  }

  return (
    <div className="menu-item botao azul" onClick={botaoRemoverOnClick}>
      <div className="menu-item-container">remover</div>
    </div>
  );
}

export default BotaoRemoverDocentes;
