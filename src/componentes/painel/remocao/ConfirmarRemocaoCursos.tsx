import { useDispatch, useSelector } from "react-redux";
import { EnumPainel, EnumPopUp } from "../../../enums";
import { reducers, RootState } from "../../../store";
import ConfirmarRemocao from "./base/ConfirmarRemocao";

function ConfirmarRemocaoCursos(): JSX.Element {
  const dispatch = useDispatch();
  const idsARemover = useSelector(
    (state: RootState) => state.cursos.idsARemover
  );
  const cursosFiltrados = useSelector(
    (state: RootState) => state.cursos.filtrados
  );

  function confirmar(): void {
    if (idsARemover.length > 0) {
      dispatch(reducers.popUps.mostrar(EnumPopUp.REMOVER_CURSOS));
    } else {
      dispatch(reducers.painel.esconder());
    }
  }

  function cancelar(): void {
    dispatch(reducers.cursos.limparListaDeRemocao());
    dispatch(reducers.painel.esconder());
  }

  function selecionarTodos(): void {
    const idsFiltrados = cursosFiltrados.map((curso) => curso.id);
    dispatch(reducers.cursos.setIdsARemover(idsFiltrados));
  }

  function desselecionarTodos(): void {
    dispatch(reducers.cursos.limparListaDeRemocao());
  }

  return (
    <ConfirmarRemocao
      titulo="Remover cursos"
      flag={EnumPainel.REMOVER_CURSOS}
      confirmar={confirmar}
      cancelar={cancelar}
      selecionarTodos={selecionarTodos}
      desselecionarTodos={desselecionarTodos}
    />
  );
}

export default ConfirmarRemocaoCursos;
