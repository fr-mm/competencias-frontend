import { PropsWithChildren } from "react";

interface CampoProps {
  id: string;
  label: string;
  editando: boolean;
}

function Atributo(props: PropsWithChildren<CampoProps>): JSX.Element {
  return (
    //juntar css de form e par?
    <div className="form">
      <div className="par">
        <label htmlFor={props.id}>{props.label}</label>
        <div className="coluna-direita">{props.children}</div>
      </div>
    </div>
  );
}

export default Atributo;
