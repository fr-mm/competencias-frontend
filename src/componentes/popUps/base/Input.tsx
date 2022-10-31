import { ChangeEventHandler } from "react";
import Atributo from "./Campo";

interface InputProps {
  id: string;
  label: string;
  value: string | number;
  placeholder?: string;
  onChange: ChangeEventHandler;
  maxLength: number;
  editando: boolean;
}

function Input(props: InputProps): JSX.Element {
  function Valor(): JSX.Element {
    if (props.editando) {
      return (
        <input
          className="azul-claro input"
          type="text"
          autoComplete="off"
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
        />
      );
    }
    return <div>{props.value}</div>;
  }

  return (
    <Atributo id={props.id} label={props.label} editando={props.editando}>
      <Valor />
    </Atributo>
  );
}
export default Input;
