import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";
import { BotaoDeNavBar } from "../base";

function Filtrar() {
  const dispatch = useDispatch();
  const filtrando = useSelector((state: RootState) => state.tabela.filtrando);

  function onClick() {
    if (filtrando) {
      dispatch(reducers.disciplinas.filtrarPorNome(""));
      dispatch(reducers.docentes.filtrarPorNome(""));
      dispatch(reducers.cursos.filtrarPorNome(""));
    }
    dispatch(reducers.tabela.setFiltrando(!filtrando));
  }
  function className() {
    return filtrando ? "ativo" : "";
  }
  return (
    <BotaoDeNavBar texto="filtrar" onClick={onClick} className={className()} />
  );
}

export default Filtrar;
