import Atributo from "./Atributo";

interface ListaProps {
  itens: string[];
  editando: boolean;
  remover: Function;
}

interface RemoverProps {
  item: string;
  onClick: Function;
  editando: boolean;
}

function Remover(props: RemoverProps): JSX.Element {
  if (props.editando) {
    return (
      <button
        onClick={() => {
          props.onClick(props.item);
        }}
      >
        remover
      </button>
    );
  }
  return <></>;
}

function Lista(props: ListaProps): JSX.Element {
  function remover(item: string) {
    props.remover(item);
  }

  return (
    <Atributo id={""} label={""} editando={props.editando}>
      {props.itens.map((item) => (
        <div className="item-de-lista" key={"telefone-" + item}>
          <div className="texto-item-lista">{item}</div>
          <Remover
            item={item}
            onClick={() => {
              remover(item);
            }}
            editando={props.editando}
          />
        </div>
      ))}
    </Atributo>
  );
}

export default Lista;
