import { useDispatch, useSelector } from "react-redux";
import { EnumPopUp } from "../../../enums";
import { ITabela } from "../../../interfaces";
import { reducers, RootState } from "../../../store";
import { Marcador } from "../../tabela/marcadores/base";
import { PopUp } from "../base";

function Disciplinas(): JSX.Element {
  const dispatch = useDispatch();
  const disciplinas = useSelector(
    (state: RootState) => state.disciplinas.todas
  );

  function voltar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUp.DISCIPLINAS));
  }

  return (
    <PopUp nome={EnumPopUp.DISCIPLINAS} titulo="Disciplinas">
      <div className="lista-em-popup">
        <table className="tabela-disciplinas">
          <th className="coluna-marcador"></th>
          <th className="coluna-nome-disciplina">Nome</th>
          <th className="coluna-ch-disciplina">Carga horária</th>
          <th className="coluna-presente-em">Presente em</th>
          {Object.values(disciplinas).map((disciplina) => (
            <LinhaDisciplina disciplina={disciplina} />
          ))}
        </table>
      </div>
      <BotaoSelecionarTodos />
      <button className="botao-rodape" onClick={voltar}>
        remover selecionados
      </button>
      <button className="botao-rodape" onClick={voltar}>
        voltar
      </button>
    </PopUp>
  );
}

interface LinhaDisciplinaProps {
  disciplina: ITabela.Disciplina;
}

function LinhaDisciplina(props: LinhaDisciplinaProps): JSX.Element {
  const dispatch = useDispatch();
  const cursos = useSelector((state: RootState) => state.cursos.todos);
  const idsARemover = useSelector(
    (state: RootState) => state.disciplinas.idsARemover
  );

  function cursoContemDisciplina(curso: ITabela.Curso): boolean {
    for (let modulo of Object.values(curso.modulos)) {
      if (modulo.disciplinas.includes(props.disciplina.id)) {
        return true;
      }
    }
    return false;
  }

  const cursosPresente = Object.values(cursos).filter((curso) =>
    cursoContemDisciplina(curso)
  );

  function incluirParaRemocao(): void {
    dispatch(reducers.disciplinas.incluirParaRemocao(props.disciplina.id));
  }

  function excluirParaRemocao(): void {
    dispatch(reducers.disciplinas.excluirParaRemocao(props.disciplina.id));
  }

  function disciplinaOnClick(): void {
    dispatch(reducers.disciplina.carregar(props.disciplina));
    dispatch(reducers.popUps.mostrar(EnumPopUp.DISCIPLINA));
  }

  return (
    <tr key={"detalhes" + props.disciplina.id}>
      <td>
        <Marcador
          idItem={props.disciplina.id}
          idsARemover={idsARemover}
          incluirParaRemocao={incluirParaRemocao}
          excluirParaRemocao={excluirParaRemocao}
        />
      </td>
      <td className="lowlight pointer" onClick={disciplinaOnClick}>
        {props.disciplina.nome}
      </td>
      <td>{props.disciplina.cargaHoraria}</td>
      <td>
        {cursosPresente.map((curso) => (
          <div>{curso.nome}</div>
        ))}
      </td>
    </tr>
  );
}

function BotaoSelecionarTodos(): JSX.Element {
  const dispatch = useDispatch();
  const disciplinas = useSelector(
    (state: RootState) => state.disciplinas.todas
  );
  const idsARemover = useSelector(
    (state: RootState) => state.disciplinas.idsARemover
  );

  function selecionarTodos(): void {
    dispatch(
      reducers.disciplinas.setIdsARemover(
        Object.values(disciplinas).map((disciplina) => disciplina.id)
      )
    );
  }

  function desselecionarTodos(): void {
    dispatch(reducers.disciplinas.setIdsARemover([]));
  }

  if (idsARemover.length === Object.values(disciplinas).length) {
    return (
      <button className="botao-rodape" onClick={desselecionarTodos}>
        desselecionar todos
      </button>
    );
  }
  return (
    <button className="botao-rodape" onClick={selecionarTodos}>
      selecionar todos
    </button>
  );
}

export default Disciplinas;
