import { MouseEventHandler } from "react";
import "./Setas.css";

interface SetaExpandirProps {
  expandido: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function SetaExpandir(props: SetaExpandirProps) {
  function Seta() {
    if (props.expandido) {
      return <div className="seta vertical baixo"></div>;
    }
    return <div className="seta vertical cima"></div>;
  }

  return (
    <div className="seta-container pointer" onClick={props.onClick}>
      {Seta()}
    </div>
  );
}

export default SetaExpandir;
