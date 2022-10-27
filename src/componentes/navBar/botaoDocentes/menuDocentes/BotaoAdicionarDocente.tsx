import { useDispatch } from "react-redux";
import { EnumPopUpNomes } from "../../../../enums";
import { reducers } from "../../../../store";

function BotaoAdicionarDocente() {
  const dispatch = useDispatch();

  function botaoAdicionarOnClick(): void {
    dispatch(reducers.popUps.mostrar(EnumPopUpNomes.ADICIONAR_DOCENTE));
  }

  return (
    <div className="menu-item botao azul" onClick={botaoAdicionarOnClick}>
      <div className="menu-item-container">adicionar</div>
    </div>
  );
}

export default BotaoAdicionarDocente;
