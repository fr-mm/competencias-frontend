import { useDispatch, useSelector } from "react-redux";
import { EnumPopUp, EnumTamanhoPopUp } from "../../../enums";
import { reducers, RootState } from "../../../store";
import api from "../../../api";
import { PopUp, RodapeConfirmacao } from "../base";

function RemoverDocentes(): JSX.Element {
  const dispatch = useDispatch();
  const popUpsVisiveis = useSelector(
    (state: RootState) => state.popUps.visiveis
  );
  const idsARemover = useSelector(
    (state: RootState) => state.docentes.idsARemover
  );
  const docentes = useSelector((state: RootState) => state.docentes.todos);
  const nomes = idsARemover.map((id) => docentes[id].nome);

  function cancelar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUp.REMOVER_DOCENTES));
  }

  function confirmar(): void {
    api.removerDocentes(idsARemover);
    dispatch(reducers.painel.esconder());
    dispatch(reducers.docentes.limparListaDeRemocao());
    dispatch(reducers.popUps.esconder(EnumPopUp.REMOVER_DOCENTES));
    dispatch(reducers.tabela.setAtualizada(false));
  }

  if (popUpsVisiveis.includes(EnumPopUp.REMOVER_DOCENTES)) {
    return (
      <PopUp
        flag={EnumPopUp.REMOVER_DOCENTES}
        titulo="Remover docentes"
        tamanho={EnumTamanhoPopUp.MEDIO}
      >
        <div className="lista-em-popup">
          {nomes.map((nome) => (
            <p key={nome}>{nome}</p>
          ))}
        </div>
        <RodapeConfirmacao confirmar={confirmar} cancelar={cancelar} />
      </PopUp>
    );
  } else {
    return <></>;
  }
}

export default RemoverDocentes;
