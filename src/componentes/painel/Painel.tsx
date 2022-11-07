import "./Painel.css";
import Legendas from "./legendas";
import { ConfirmarRemocaoDocentes } from "./remocao";

function Painel(): JSX.Element {
  return (
    <div className="painel">
      <ConfirmarRemocaoDocentes />
      <Legendas />
    </div>
  );
}

export default Painel;
