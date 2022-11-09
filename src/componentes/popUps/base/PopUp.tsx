import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { EnumPopUp, EnumTamanhoPopUp } from "../../../enums";
import { RootState } from "../../../store";

interface PopUpProps {
  flag: EnumPopUp;
  titulo: string;
  tamanho: EnumTamanhoPopUp;
}

function PopUp(props: PropsWithChildren<PopUpProps>): JSX.Element {
  const popUpsVisiveis = useSelector(
    (state: RootState) => state.popUps.visiveis
  );

  if (popUpsVisiveis.includes(props.flag)) {
    return (
      <div className="mascara">
        <div className={"popUp " + props.tamanho}>
          <div className="titulo">{props.titulo}</div>
          {props.children}
        </div>
      </div>
    );
  }
  return <></>;
}

export default PopUp;
