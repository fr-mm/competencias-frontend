import { useDispatch } from "react-redux";
import { EnumPopUp } from "../../../enums";
import { reducers } from "../../../store";
import { Confirmacao } from "../base";

function DescartarAlteracoesDocente(): JSX.Element {
  const dispatch = useDispatch();
  function confirmar(): void {
    dispatch(reducers.docente.finalizarEdicao());
    dispatch(reducers.popUps.esconder(EnumPopUp.DOCENTE));
  }
  return (
    <Confirmacao
      flag={EnumPopUp.DESCARTAR_ALTERACOES_DOCENTE}
      titulo="Descartar alterações?"
      confirmar={confirmar}
    />
  );
}

export default DescartarAlteracoesDocente;
