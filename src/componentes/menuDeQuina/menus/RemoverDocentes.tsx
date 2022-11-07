/*
import { useDispatch, useSelector } from "react-redux";
import { EnumMenuDeQuina, EnumPopUpNomes } from "../../../enums";
import { reducers, RootState } from "../../../store";
import { ConfirmarRemocao } from "../base";

function RemocaoDocentes(): JSX.Element {
  const dispatch = useDispatch();
  const idsARemover = useSelector(
    (state: RootState) => state.docentes.idsARemover
  );

  function cancelar(): void {
    dispatch(reducers.docentes.limparListaDeRemocao());
    dispatch(reducers.menuDeQuina.esconder());
  }

  function confirmar(): void {
    if (idsARemover.length > 0) {
      dispatch(reducers.popUps.mostrar(EnumPopUpNomes.REMOVER_DOCENTES));
    } else {
      dispatch(reducers.menuDeQuina.esconder());
    }
  }

  return (
    <ConfirmarRemocao
      titulo="Remover docentes"
      flag={EnumMenuDeQuina.REMOVER_DOCENTES}
      confirmar={confirmar}
      cancelar={cancelar}
    />
  );
}
export default RemocaoDocentes;
 */
export {};
