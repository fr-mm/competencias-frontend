import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { EnumPopUp, EnumTamanhoPopUp } from "../../../enums";
import { reducers } from "../../../store";
import PopUp from "./PopUp";
import RodapeConfirmacao from "./RodapeConfirmacao";

interface ConfirmacaoProps {
  flag: EnumPopUp;
  titulo: string;
  confirmar: MouseEventHandler<HTMLButtonElement>;
}

function Confirmacao(props: ConfirmacaoProps): JSX.Element {
  const dispatch = useDispatch();

  function cancelar(): void {
    dispatch(reducers.popUps.esconder(props.flag));
  }
  return (
    <PopUp
      flag={props.flag}
      titulo={props.titulo}
      tamanho={EnumTamanhoPopUp.PEQUENO}
    >
      <RodapeConfirmacao confirmar={props.confirmar} cancelar={cancelar} />
    </PopUp>
  );
}

export default Confirmacao;
