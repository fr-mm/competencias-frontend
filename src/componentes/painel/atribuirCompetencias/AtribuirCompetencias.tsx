import "./AtribuirCompetencias.css";
import { useDispatch, useSelector } from "react-redux";
import { EnumPainel } from "../../../enums";
import { reducers, RootState } from "../../../store";
import Menu from "../base/Menu";

function AtribuirCompetencias(): JSX.Element {
  const dispatch = useDispatch();
  const docente = useSelector((state: RootState) => state.docente);

  function salvar(): void {
    cancelar();
  }
  function cancelar(): void {
    dispatch(reducers.docente.finalizarAtribuicaoCompetencias());
    dispatch(reducers.docentes.filtrarPorNome(""));
    dispatch(reducers.painel.esconder());
  }

  return (
    <Menu
      flag={EnumPainel.ATRIBUIR_COMPETENCIAS}
      titulo={"Competências de " + docente.nome}
    >
      <div className="atribuir-competencias-botao-container">
        <button onClick={salvar}>salvar</button>
        <button onClick={cancelar}>cancelar</button>
      </div>
    </Menu>
  );
}

export default AtribuirCompetencias;
