import { MouseEventHandler } from "react";
import { EnumMenuDeQuina } from "../../../enums";
import Menu from "./Menu";

interface ConfirmarRemocaoProps {
  titulo: string;
  flag: EnumMenuDeQuina;
  confirmar: MouseEventHandler<HTMLDivElement>;
  cancelar: MouseEventHandler<HTMLDivElement>;
}

function ConfirmarRemocao(props: ConfirmarRemocaoProps): JSX.Element {
  return (
    <Menu titulo={props.titulo} flag={props.flag}>
      <div className="botao confirmar rosa" onClick={props.confirmar}>
        remover selecionados
      </div>
      <div className="botao cancelar azul-claro" onClick={props.cancelar}>
        cancelar
      </div>
    </Menu>
  );
}
export default ConfirmarRemocao;
