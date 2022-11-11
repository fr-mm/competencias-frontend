import "./AtribuirCompetencias.css";
import { useDispatch, useSelector } from "react-redux";
import { EnumPainel, EnumPopUp } from "../../../enums";
import { reducers, RootState } from "../../../store";
import Menu from "../base/Menu";

function AtribuirCompetencias(): JSX.Element {
  const dispatch = useDispatch();
  const docente = useSelector((state: RootState) => state.docente);

  function salvar(): void {
    dispatch(reducers.popUps.mostrar(EnumPopUp.ALTERAR_COMPETENCIAS));
  }
  function cancelar(): void {
    dispatch(
      reducers.popUps.mostrar(
        EnumPopUp.CONFIRMAR_CANCELAMENTO_DE_ATRIBUICAO_DE_COMPETENCIAS
      )
    );
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
