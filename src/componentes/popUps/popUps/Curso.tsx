import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnumPopUp, EnumTamanhoPopUp } from "../../../enums";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import { Combobox, Input, Lista, PopUp, RodapeEntidade } from "../base";
import { Item } from "../base/Combobox";

function Curso(): JSX.Element {
  const dispatch = useDispatch();
  const curso = useSelector((state: RootState) => state.curso);
  const titulo = curso.id === "" ? "Adicionar curso" : `Curso: ${curso.nome}`;
  const disciplinas = useSelector(
    (state: RootState) => state.disciplinas.todas
  );

  interface Quantidades {
    [quantidade: string]: Item;
  }

  function getQuantidadesModulosPossiveis(): Quantidades {
    const quantidades = {} as Quantidades;
    for (let i = 1; i <= 9; i++) {
      const quantidade = i.toString();
      quantidades[quantidade] = { id: quantidade, nome: quantidade };
    }
    return quantidades;
  }

  function editar(): void {
    dispatch(reducers.curso.iniciarEdicao());
  }
  function salvar(): void {}
  function cancelar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUp.CURSO));
    dispatch(reducers.curso.finalizarEdicao());
  }

  function nomeOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.curso.setNome(evento.target.value));
  }

  function quantidadeModulosOnChange(
    evento: ChangeEvent<HTMLSelectElement>
  ): void {
    dispatch(reducers.curso.setQuantidadeModulos(evento.target.value));
  }

  function getCargaHorariaCurso(): number {
    let ch = 0;
    for (let modulo of Object.values(curso.modulos)) {
      ch += getCargaHorariaModulo(modulo);
    }
    return ch;
  }

  function getCargaHorariaModulo(modulo: ITabela.Modulo): number {
    let ch = 0;
    for (let idDisciplina of Object.values(modulo.disciplinas)) {
      ch += disciplinas[idDisciplina].cargaHoraria;
    }
    return ch;
  }

  return (
    <PopUp
      flag={EnumPopUp.CURSO}
      titulo={titulo}
      tamanho={EnumTamanhoPopUp.GRANDE}
    >
      <Input
        label="Nome"
        id={curso.nome + "-nome"}
        value={curso.nome}
        placeholder="Nome"
        onChange={nomeOnChange}
        maxLength={50}
        editando={curso.editando}
      />
      <Combobox
        label="Módulos"
        id={curso.id + "-quantidade-modulos"}
        itens={getQuantidadesModulosPossiveis()}
        value={curso.quantidadeModulos.toString()}
        onChange={quantidadeModulosOnChange}
        editando={curso.editando}
      />
      <Input
        label="Carga horária"
        id={curso.nome + "-carga-horaria"}
        value={getCargaHorariaCurso()}
        placeholder="CHCurso"
        onChange={() => {}}
        maxLength={10}
        editando={false}
      />
      <Modulos curso={curso} editando={curso.editando} />
      <RodapeEntidade
        editando={curso.editando}
        editar={editar}
        salvar={salvar}
        cancelar={cancelar}
      />
    </PopUp>
  );
}

interface ModulosProps {
  curso: ITabela.Curso;
  editando: boolean;
}

function Modulos(props: ModulosProps): JSX.Element {
  return (
    <div className="lista-em-popup">
      <table className="tabela-disciplinas">
        <thead>
          <tr>
            <th className="tabela-curso modulo">Módulo</th>
            <th className="tabela-curso ch">Carga horária</th>
            <th className="tabela-curso disciplinas">Disciplinas</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(props.curso.modulos).map((modulo) => (
            <Modulo modulo={modulo} editando={props.editando} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ModuloProps {
  modulo: ITabela.Modulo;
  editando: boolean;
}

function Modulo(props: ModuloProps): JSX.Element {
  const disciplinas = useSelector(
    (state: RootState) => state.disciplinas.todas
  );

  function getCargaHorariaModulo(): number {
    let ch = 0;
    for (let idDisciplina of Object.values(props.modulo.disciplinas)) {
      ch += disciplinas[idDisciplina].cargaHoraria;
    }
    return ch;
  }

  function getNomesDisciplinas(): string[] {
    const nomes = [];
    for (let idDisciplina of Object.values(props.modulo.disciplinas)) {
      nomes.push(disciplinas[idDisciplina].nome);
    }
    return nomes;
  }

  return (
    <tr>
      <td>{`Módulo ${props.modulo.numero}`}</td>
      <td>{getCargaHorariaModulo()}</td>
      <td>
        <Lista
          itens={getNomesDisciplinas()}
          editando={props.editando}
          remover={() => {}}
        />
      </td>
    </tr>
  );
}

export default Curso;
