import "./Painel.css";
import Legendas from "./legendas";
import { ConfirmarRemocaoDocentes } from "./remocao";

function Painel(): JSX.Element {
  return (
    <div className="painel">
      <Legendas />
      <ConfirmarRemocaoDocentes />
    </div>
  );
}

export default Painel;
