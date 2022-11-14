import { useDispatch, useSelector } from "react-redux";
import api from "../../../api";
import { EnumPopUp, EnumTamanhoPopUp } from "../../../enums";
import { reducers, RootState } from "../../../store";
import { PopUp, RodapeConfirmacao } from "../base";

function RemoverCursos(): JSX.Element {
  const dispatch = useDispatch();
  const idsARemover = useSelector(
    (state: RootState) => state.cursos.idsARemover
  );
  const cursos = useSelector((state: RootState) => state.cursos.todos);
  const nomes = idsARemover.map((id) => cursos[id].nome);

  function cancelar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUp.REMOVER_CURSOS));
  }

  function confirmar(): void {
    api.removerDocentes(idsARemover);
    dispatch(reducers.painel.esconder());
    dispatch(reducers.cursos.limparListaDeRemocao());
    dispatch(reducers.popUps.esconder(EnumPopUp.REMOVER_CURSOS));
    dispatch(reducers.tabela.setAtualizada(false));
  }
  return (
    <PopUp
      flag={EnumPopUp.REMOVER_CURSOS}
      titulo="Remover cursos"
      tamanho={EnumTamanhoPopUp.MEDIO}
    >
      <div className="lista-em-popup">
        {nomes.map((nome) => (
          <p key={nome}>{nome}</p>
        ))}
      </div>
      <RodapeConfirmacao
        confirmar={confirmar}
        cancelar={cancelar}
      ></RodapeConfirmacao>
    </PopUp>
  );
}

export default RemoverCursos;
