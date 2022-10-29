import { useDispatch } from "react-redux";
import { EnumPopUpNomes } from "../../../../enums";
import { reducers } from "../../../../store";

function BotaoAdicionarDocente() {
  const dispatch = useDispatch();

  function botaoAdicionarOnClick(): void {
    dispatch(reducers.docente.iniciarEdicao());
    dispatch(reducers.popUps.mostrar(EnumPopUpNomes.DOCENTE));
  }

  return (
    <div className="menu-item botao azul" onClick={botaoAdicionarOnClick}>
      <div className="menu-item-container">adicionar</div>
    </div>
  );
}

export default BotaoAdicionarDocente;
