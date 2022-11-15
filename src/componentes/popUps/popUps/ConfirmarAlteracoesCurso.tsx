import { useDispatch } from "react-redux";
import { EnumPopUp } from "../../../enums";
import { reducers } from "../../../store";
import { Confirmacao } from "../base";

function ConfirmarAlteracoesCurso(): JSX.Element {
  const dispatch = useDispatch();
  function confirmar(): void {
    //send api request
    dispatch(reducers.curso.finalizarEdicao());
    dispatch(reducers.popUps.esconder(EnumPopUp.CURSO));
    dispatch(reducers.tabela.setAtualizada(false));
  }
  return (
    <Confirmacao
      flag={EnumPopUp.CONFIRMAR_ALTERACOES_CURSO}
      titulo="Confirmar alterações?"
      confirmar={confirmar}
    />
  );
}

export default ConfirmarAlteracoesCurso;
