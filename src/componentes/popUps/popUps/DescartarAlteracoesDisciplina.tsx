import { useDispatch } from "react-redux";
import { EnumPopUp } from "../../../enums";
import { reducers } from "../../../store";
import { Confirmacao } from "../base";

function DescartarAlteracoesDisciplina(): JSX.Element {
  const dispatch = useDispatch();
  function confirmar(): void {
    dispatch(reducers.disciplina.finalizarEdicao());
    dispatch(reducers.popUps.esconder(EnumPopUp.DISCIPLINA));
  }
  return (
    <Confirmacao
      flag={EnumPopUp.DESCARTAR_ALTERACOES_DISCIPLINA}
      titulo="Descartar alterações?"
      confirmar={confirmar}
    />
  );
}

export default DescartarAlteracoesDisciplina;
