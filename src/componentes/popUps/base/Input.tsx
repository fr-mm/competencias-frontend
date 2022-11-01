import { ChangeEventHandler, PropsWithChildren } from "react";
import Atributo from "./Atributo";

interface InputProps {
  id: string;
  label: string;
  value: string | number;
  placeholder?: string;
  onChange: ChangeEventHandler;
  maxLength: number;
  editando: boolean;
}

interface ValorProps {
  super: InputProps;
}

function Valor(props: PropsWithChildren<ValorProps>): JSX.Element {
  if (props.super.editando) {
    return (
      <div className="input-container">
        <input
          className="azul-claro input"
          type="text"
          autoComplete="off"
          id={props.super.id}
          value={props.super.value}
          onChange={props.super.onChange}
          maxLength={props.super.maxLength}
          placeholder={props.super.placeholder}
        />
        {props.children}
      </div>
    );
  }
  return <div>{props.super.value}</div>;
}

function Input(props: PropsWithChildren<InputProps>): JSX.Element {
  return (
    <Atributo id={props.id} label={props.label} editando={props.editando}>
      <Valor super={props}>{props.children}</Valor>
    </Atributo>
  );
}
export default Input;
