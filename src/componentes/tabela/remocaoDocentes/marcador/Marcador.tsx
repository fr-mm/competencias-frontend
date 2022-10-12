import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../../store";

interface MarcadorProps {
  docenteId: string;
}

function Marcador(props: MarcadorProps) {
  const dispatch = useDispatch();
  const idsARemover = useSelector(
    (state: RootState) => state.docentes.idsARemover
  );

  function checked(): boolean {
    return idsARemover.includes(props.docenteId);
  }

  function onClick(): void {
    idsARemover.includes(props.docenteId)
      ? dispatch(reducers.docentes.excluirParaRemocao(props.docenteId))
      : dispatch(reducers.docentes.incluirParaRemocao(props.docenteId));
  }

  return (
    <div className="celula marcador azul-claro">
      <input
        type="checkbox"
        defaultChecked={checked()}
        onClick={onClick}
        className="checkbox"
      />
    </div>
  );
}
export default Marcador;
