import { useDispatch } from "react-redux";
import { EnumPopUp } from "../../../enums";
import { reducers } from "../../../store";
import { Confirmacao } from "../base";

function DescartarAlteracoesCurso(): JSX.Element {
  const dispatch = useDispatch();
  function confirmar(): void {
    dispatch(reducers.curso.finalizarEdicao());
    dispatch(reducers.popUps.esconder(EnumPopUp.CURSO));
  }
  return (
    <Confirmacao
      flag={EnumPopUp.DESCARTAR_ALTERACOES_CURSO}
      titulo="Descartar alterações?"
      confirmar={confirmar}
    />
  );
}

export default DescartarAlteracoesCurso;
