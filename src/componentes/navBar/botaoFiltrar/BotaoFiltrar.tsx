import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";

function BotaoFiltrar() {
  const dispatch = useDispatch();

  const filtrando = useSelector((state: RootState) => state.tabela.filtrando);

  function onClick(): void {
    dispatch(reducers.tabela.setFiltrando(!filtrando));
  }

  function getClasses(): string {
    let classes = "nav-bar-item azul";
    classes += filtrando ? " ativo" : "";
    return classes;
  }

  return (
    <div className="botao">
      <div className={getClasses()} onClick={onClick}>
        <div className="botao-texto">filtrar</div>
      </div>
    </div>
  );
}

export default BotaoFiltrar;
