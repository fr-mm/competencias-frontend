import { useDispatch } from "react-redux";
import { EnumPopUp, EnumTamanhoPopUp } from "../../../enums";
import { reducers } from "../../../store";
import { PopUp, RodapeConfirmacao } from "../base";

function ConfirmarCancelamentoDeAtribuicaoDeCompetencias(): JSX.Element {
  const dispatch = useDispatch();
  function confirmar(): void {
    dispatch(reducers.docente.finalizarAtribuicaoCompetencias());
    dispatch(reducers.docentes.filtrarPorNome(""));
    dispatch(reducers.painel.esconder());
    cancelar();
  }
  function cancelar(): void {
    dispatch(
      reducers.popUps.esconder(
        EnumPopUp.CONFIRMAR_CANCELAMENTO_DE_ATRIBUICAO_DE_COMPETENCIAS
      )
    );
  }
  return (
    <PopUp
      flag={EnumPopUp.CONFIRMAR_CANCELAMENTO_DE_ATRIBUICAO_DE_COMPETENCIAS}
      titulo="Descartar alterações?"
      tamanho={EnumTamanhoPopUp.PEQUENO}
    >
      <RodapeConfirmacao confirmar={confirmar} cancelar={cancelar} />
    </PopUp>
  );
}

export default ConfirmarCancelamentoDeAtribuicaoDeCompetencias;
