import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";

interface ListaDisciplinasProps {
  modulo: ITabela.Modulo;
  editando: boolean;
}

function ListaDisciplinas(props: ListaDisciplinasProps): JSX.Element {
  const disciplinas = useSelector(
    (state: RootState) => state.disciplinas.todas
  );

  return (
    <div>
      {Object.values(props.modulo.disciplinas).map((idDisciplina) => {
        const disciplina = disciplinas[idDisciplina];
        return (
          <div
            className="item-de-lista"
            key={"disciplina-listada-" + idDisciplina}
          >
            <div className="texto-item-lista">
              {`[${disciplina.cargaHoraria}h] ${disciplina.nome}`}
            </div>
            <Remover
              idModulo={props.modulo.id}
              idDisciplina={idDisciplina}
              editando={props.editando}
            />
          </div>
        );
      })}
      <ComboboxDisciplina editando={props.editando} modulo={props.modulo} />
    </div>
  );
}

interface ComboboxDisciplinaProps {
  modulo: ITabela.Modulo;
  editando: boolean;
}

function ComboboxDisciplina(props: ComboboxDisciplinaProps): JSX.Element {
  const dispatch = useDispatch();
  const disciplinas = useSelector(
    (state: RootState) => state.disciplinas.todas
  );
  const [selecionada, setSelecionada] = useState(
    Object.values(disciplinas)[0].id
  );

  function onChange(evento: ChangeEvent<HTMLSelectElement>): void {
    setSelecionada(evento.target.value);
  }

  function adicionar(): void {
    dispatch(
      reducers.curso.adicionarDisciplinaEmModulo({
        idModulo: props.modulo.id,
        idDisciplina: selecionada,
      })
    );
  }

  if (props.editando) {
    return (
      <div className="disciplina-combobox">
        <button onClick={adicionar}>adicionar</button>
        <select value={selecionada} onChange={onChange}>
          {Object.values(disciplinas).map((disciplina) => (
            <option value={disciplina.id} key={disciplina.id}>
              {disciplina.nome}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return <></>;
  }
}

interface RemoverProps {
  idDisciplina: ITabela.IdDisciplina;
  idModulo: ITabela.IdModulo;
  editando: boolean;
}

function Remover(props: RemoverProps): JSX.Element {
  const dispatch = useDispatch();
  function onClick(): void {
    dispatch(
      reducers.curso.removerDisciplinaEmModulo({
        idModulo: props.idModulo,
        idDisciplina: props.idDisciplina,
      })
    );
  }
  if (props.editando) {
    return <button onClick={onClick}>remover</button>;
  }
  return <></>;
}
export default ListaDisciplinas;
