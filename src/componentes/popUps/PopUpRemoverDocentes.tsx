import { useDispatch, useSelector } from "react-redux";
import { EnumPopUpNomes } from "../../enums";
import { reducers, RootState } from "../../store";
import api from "../../api";

function PopUpRemoverDocentes() {
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
    dispatch(reducers.popUps.esconder(EnumPopUpNomes.REMOVER_DOCENTES));
  }

  function confirmar(): void {
    api.removerDocentes(idsARemover);
    dispatch(reducers.tabela.setAtualizada(false));
    dispatch(reducers.docentes.limparListaDeRemocao());
    dispatch(reducers.docentes.setRemovendo(false));
    dispatch(reducers.popUps.esconder(EnumPopUpNomes.REMOVER_DOCENTES));
  }

  if (popUpsVisiveis.includes(EnumPopUpNomes.REMOVER_DOCENTES)) {
    return (
      <div className="mascara">
        <div className="popUp">
          <div className="titulo">Remover docentes selecionados?</div>
          {nomes.map((nome) => (
            <p key={nome}>{nome}</p>
          ))}
          <button onClick={confirmar}>remover</button>
          <button onClick={cancelar}>cancelar</button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default PopUpRemoverDocentes;
