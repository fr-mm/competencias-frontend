import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { EnumPainel } from "../../enums";
import { RootState } from "../../store";

interface MarcadorCursoContainerProps {
  cabecalho?: boolean;
}

function MarcadorCursoContainer(
  props: PropsWithChildren<MarcadorCursoContainerProps>
): JSX.Element {
  const removendo = useSelector(
    (state: RootState) => state.painel.visivel === EnumPainel.REMOVER_CURSOS
  );

  function getClassName(): string {
    let className = "marcador-curso-container borda-esquerda";
    if (props.cabecalho) {
      className += "-transparente";
    }
    return className;
  }

  if (removendo) {
    return <div className={getClassName()}>{props.children}</div>;
  } else {
    return <></>;
  }
}

export default MarcadorCursoContainer;
