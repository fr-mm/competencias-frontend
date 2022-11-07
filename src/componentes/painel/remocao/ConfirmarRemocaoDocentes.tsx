import { useDispatch, useSelector } from "react-redux";
import { EnumPainel, EnumPopUpNomes } from "../../../enums";
import { reducers, RootState } from "../../../store";
import ConfirmarRemocao from "./base/ConfirmarRemocao";

function ConfirmarRemocaoDocentes(): JSX.Element {
  const dispatch = useDispatch();
  const idsARemover = useSelector(
    (state: RootState) => state.docentes.idsARemover
  );
  const docentesFiltrados = useSelector(
    (state: RootState) => state.docentes.filtrados
  );

  function cancelar(): void {
    dispatch(reducers.docentes.limparListaDeRemocao());
    dispatch(reducers.painel.esconder());
  }

  function confirmar(): void {
    if (idsARemover.length > 0) {
      dispatch(reducers.popUps.mostrar(EnumPopUpNomes.REMOVER_DOCENTES));
    } else {
      dispatch(reducers.painel.esconder());
    }
  }

  function selecionarTodos(): void {
    const idsFiltrados = docentesFiltrados.map((docente) => docente.id);
    dispatch(reducers.docentes.setIdsARemover(idsFiltrados));
  }

  function desselecionarTodos(): void {
    dispatch(reducers.docentes.limparListaDeRemocao());
  }

  return (
    <ConfirmarRemocao
      titulo="Remover docentes"
      flag={EnumPainel.REMOVER_DOCENTES}
      confirmar={confirmar}
      cancelar={cancelar}
      selecionarTodos={selecionarTodos}
      desselecionarTodos={desselecionarTodos}
    />
  );
}
export default ConfirmarRemocaoDocentes;
