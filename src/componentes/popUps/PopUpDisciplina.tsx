import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api";
import { EnumPopUpNomes } from "../../enums";
import { reducers, RootState } from "../../store";

function PopUpDisciplina() {
  const dispatch = useDispatch();
  const disciplina = useSelector((state: RootState) => state.disciplina);
  const cursos = useSelector((state: RootState) => state.cursos.todos);
  const [erros, setErros] = useState([] as string[]);
  const mensagemDeErro = {
    nome: "Nome inválido",
    cargaHoraria: "Carga horária inválida",
  };

  function CampoNome(): JSX.Element {
    if (disciplina.editando) {
      return (
        <input
          id="nome"
          className="azul-claro input"
          type="text"
          value={disciplina.nome}
          onChange={nomeOnChange}
          autoComplete="off"
          maxLength={50}
          placeholder="Nome"
        />
      );
    } else {
      return <div>{disciplina.nome}</div>;
    }
  }

  function CampoCargaHoraria(): JSX.Element {
    if (disciplina.editando) {
      return (
        <input
          id="nome"
          className="azul-claro input"
          type="text"
          value={disciplina.cargaHoraria}
          onChange={cargaHorariaOnChange}
          autoComplete="off"
          maxLength={4}
          placeholder="0"
        />
      );
    } else {
      return <div>{disciplina.cargaHoraria}</div>;
    }
  }

  function Rodape(): JSX.Element {
    if (disciplina.editando) {
      return (
        <div className="rodape">
          <button onClick={adicionarOnClick}>salvar</button>
          <button onClick={cancelarOnClick}>cancelar</button>
        </div>
      );
    } else {
      return (
        <div className="rodape">
          <button onClick={() => dispatch(reducers.disciplina.iniciarEdicao())}>
            editar
          </button>
          <button onClick={cancelarOnClick}>sair</button>
        </div>
      );
    }
  }

  function PresenteEmCursos(): JSX.Element {
    if (!disciplina.editando) {
      const presenteEm = [];
      for (let curso of Object.values(cursos)) {
        for (let modulo of Object.values(curso.modulos)) {
          if (Object.values(modulo.disciplinas).includes(disciplina.id)) {
            presenteEm.push(curso.nome);
            break;
          }
        }
      }

      return (
        <div className="par">
          <label htmlFor="">presente em</label>
          <div className="coluna-direita coluna">
            {presenteEm.map((curso) => (
              <div key={"presenteEm" + curso}>{curso}</div>
            ))}
          </div>
        </div>
      );
    }
    return <div></div>;
  }

  function nomeOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.disciplina.setNome(evento.target.value));
  }

  function cargaHorariaOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.disciplina.setCargaHoraria(+evento.target.value));
  }

  function cancelarOnClick(): void {
    dispatch(reducers.popUps.esconder(EnumPopUpNomes.DISCIPLINA));
    dispatch(reducers.disciplina.finalizarEdicao());
  }

  function adicionarOnClick(): void {
    if (disciplinaValida()) {
      dispatch(reducers.popUps.esconder(EnumPopUpNomes.DISCIPLINA));
      //enviar request na api
      dispatch(reducers.disciplina.finalizarEdicao());
      dispatch(reducers.tabela.setAtualizada(false));
    }
  }

  function getTitulo(): string {
    return disciplina.id === "" ? "Adicionar disciplina" : "Disciplina";
  }

  function disciplinaValida(): boolean {
    const errosDeValidacao = [];
    let valido = true;
    if (disciplina.nome.length < 3) {
      errosDeValidacao.push(mensagemDeErro.nome);
      valido = false;
    }
    if (disciplina.cargaHoraria < 1) {
      errosDeValidacao.push(mensagemDeErro.cargaHoraria);
      valido = false;
    }
    setErros(errosDeValidacao);
    return valido;
  }

  return (
    <div className="mascara">
      <div className="popUp">
        <div className="titulo">{getTitulo()}</div>
        <div className="erros">
          {erros.map((erro) => (
            <div key={erro}>{erro}</div>
          ))}
        </div>

        <div className="form">
          <div className="par">
            <label htmlFor="nome">nome</label>
            <div className="coluna-direita">
              <CampoNome />
            </div>
          </div>

          <div className="par">
            <label htmlFor="cargaHoraria">carga horária</label>
            <div className="coluna-direita">
              <CampoCargaHoraria />
            </div>
          </div>

          <PresenteEmCursos />
        </div>
        <Rodape />
      </div>
    </div>
  );
}

export default PopUpDisciplina;
