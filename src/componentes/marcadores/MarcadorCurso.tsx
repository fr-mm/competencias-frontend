import { useDispatch, useSelector } from "react-redux";
import { ITabela } from "../../interfaces";
import { reducers, RootState } from "../../store";
import { Marcador } from "./base";
import MarcadorCursoContainer from "./MarcadorCursoContainer";

interface MarcadorCursoProps {
  idCurso: ITabela.IdCurso;
}

function MarcadorCurso(props: MarcadorCursoProps): JSX.Element {
  const dispatch = useDispatch();
  const idsARemover = useSelector(
    (state: RootState) => state.cursos.idsARemover
  );
  function incluirParaRemocao(): void {
    dispatch(reducers.cursos.incluirParaRemocao(props.idCurso));
  }

  function excluirParaRemocao(): void {
    dispatch(reducers.cursos.excluirParaRemocao(props.idCurso));
  }
  return (
    <MarcadorCursoContainer>
      <Marcador
        idItem={props.idCurso}
        idsARemover={idsARemover}
        incluirParaRemocao={incluirParaRemocao}
        excluirParaRemocao={excluirParaRemocao}
      />
    </MarcadorCursoContainer>
  );
}

export default MarcadorCurso;
