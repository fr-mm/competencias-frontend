import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { EnumPopUp } from "../../../enums";
import { RootState } from "../../../store";

interface PopUpProps {
  nome: EnumPopUp;
  titulo: string;
}

function PopUp(props: PropsWithChildren<PopUpProps>): JSX.Element {
  const popUpsVisiveis = useSelector(
    (state: RootState) => state.popUps.visiveis
  );

  if (popUpsVisiveis.includes(props.nome)) {
    return (
      <div className="mascara">
        <div className="popUp">
          <div className="titulo">{props.titulo}</div>
          {props.children}
        </div>
      </div>
    );
  }
  return <></>;
}

export default PopUp;
