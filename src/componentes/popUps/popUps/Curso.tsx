import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnumPopUp, EnumTamanhoPopUp } from "../../../enums";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import {
  Combobox,
  Erros,
  Input,
  ListaDisciplinas,
  PopUp,
  RodapeEntidade,
} from "../base";
import { Item } from "../base/Combobox";

function Curso(): JSX.Element {
  const dispatch = useDispatch();
  const curso = useSelector((state: RootState) => state.curso);
  const titulo = curso.id === "" ? "Adicionar curso" : `Curso: ${curso.nome}`;
  const disciplinas = useSelector(
    (state: RootState) => state.disciplinas.todas
  );
  const modulosOrdenados = Object.values(curso.modulos).sort(
    (a, b) => +a.numero - +b.numero
  );

  interface Quantidades {
    [quantidade: string]: Item;
  }

  function getQuantidadesModulosPossiveis(): Quantidades {
    const quantidades = {} as Quantidades;
    for (let i = 1; i <= curso.quantidadeMaximaDeModulos; i++) {
      const quantidade = i.toString();
      quantidades[quantidade] = { id: quantidade, nome: quantidade };
    }
    return quantidades;
  }

  function editar(): void {
    dispatch(reducers.curso.iniciarEdicao());
  }
  function salvar(): void {
    const erros = [];
    for (let i = 0; i < curso.quantidadeModulos; i++) {
      const modulo = modulosOrdenados[i];
      if (modulo.disciplinas.length === 0) {
        erros.push(`Módulo ${modulo.numero} tem 0 disciplinas`);
      }
    }
    if (erros.length > 0) {
      dispatch(reducers.curso.setErros(erros));
    } else {
      dispatch(reducers.popUps.mostrar(EnumPopUp.CONFIRMAR_ALTERACOES_CURSO));
    }
  }
  function cancelar(): void {
    dispatch(reducers.popUps.mostrar(EnumPopUp.DESCARTAR_ALTERACOES_CURSO));
  }

  function sair(): void {
    dispatch(reducers.popUps.esconder(EnumPopUp.CURSO));
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
    if (modulosOrdenados.length === 0) {
      return 0;
    }
    for (let i = 0; i < curso.quantidadeModulos; i++) {
      const modulo = modulosOrdenados[i];
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
      <Erros erros={curso.erros} />
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
      <Modulos
        curso={curso}
        modulosOrdenados={modulosOrdenados}
        mostrarQuantidade={curso.quantidadeModulos}
        editando={curso.editando}
      />
      <RodapeEntidade
        editando={curso.editando}
        editar={editar}
        salvar={salvar}
        sair={sair}
        descartarAlteracoes={cancelar}
      />
    </PopUp>
  );
}

interface ModulosProps {
  curso: ITabela.Curso;
  modulosOrdenados: ITabela.Modulo[];
  mostrarQuantidade: number;
  editando: boolean;
}

function Modulos(props: ModulosProps): JSX.Element {
  const modulos = [];
  for (let i = 0; i < props.mostrarQuantidade; i++) {
    modulos.push(props.modulosOrdenados[i]);
  }
  return (
    <div className="tabela-modulos-container">
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
            {modulos.map((modulo) => (
              <Modulo
                key={modulo.id}
                modulo={modulo}
                editando={props.editando}
              />
            ))}
          </tbody>
        </table>
      </div>
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
  return (
    <tr>
      <td>{`Módulo ${props.modulo.numero}`}</td>
      <td>{getCargaHorariaModulo()}</td>
      <td>
        <ListaDisciplinas modulo={props.modulo} editando={props.editando} />
      </td>
    </tr>
  );
}

export default Curso;
