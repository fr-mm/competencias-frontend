import { ChangeEventHandler } from "react";
import Atributo from "./Atributo";

interface Item {
  id: string;
  nome: string;
}

interface ComboboxProps {
  id: string;
  label: string;
  itens: { [idItem: string]: Item };
  onChange: ChangeEventHandler;
  editando: boolean;
  value: string;
}

interface SelectProps {
  super: ComboboxProps;
}

function Select(props: SelectProps): JSX.Element {
  if (props.super.editando) {
    return (
      <select
        id={"select" + props.super.id}
        value={props.super.value}
        onChange={props.super.onChange}
      >
        {Object.values(props.super.itens).map((item) => (
          <option value={item.id} key={item.id}>
            {item.nome}
          </option>
        ))}
      </select>
    );
  }
  return <div>{props.super.itens[props.super.value].nome}</div>;
}

function Combobox(props: ComboboxProps): JSX.Element {
  return (
    <Atributo id={props.id} label={props.label} editando={props.editando}>
      <Select super={props} />
    </Atributo>
  );
}
export default Combobox;
