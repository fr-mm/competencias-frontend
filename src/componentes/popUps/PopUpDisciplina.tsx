import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnumPopUpNomes } from "../../enums";
import { reducers, RootState } from "../../store";

function PopUpDisciplina() {
  const dispatch = useDispatch();
  const disciplina = useSelector((state: RootState) => state.disciplina);
  const [erros, setErros] = useState([] as string[]);
  const mensagemDeErro = {
    nome: "Nome inválido",
    cargaHoraria: "Carga horária inválida",
  };

  function titulo(): string {
    if (disciplina.id === "") {
      return "Adicionar disciplina";
    }
    return "Disciplina";
  }

  function campoNome() {
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

  function campoCargaHoraria() {
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

  function cancelar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUpNomes.DISCIPLINA));
    dispatch(reducers.disciplina.finalizarEdicao());
  }

  function adicionar(): void {
    if (disciplinaValida()) {
      dispatch(reducers.popUps.esconder(EnumPopUpNomes.DISCIPLINA));
      //enviar request na api
      dispatch(reducers.disciplina.finalizarEdicao());
      dispatch(reducers.tabela.setAtualizada(false));
    }
  }

  function rodape() {
    if (disciplina.editando) {
      return (
        <div className="rodape">
          <button onClick={adicionar}>salvar</button>
          <button onClick={cancelar}>cancelar</button>
        </div>
      );
    } else {
      return (
        <div className="rodape">
          <button onClick={() => dispatch(reducers.disciplina.iniciarEdicao())}>
            editar
          </button>
          <button onClick={cancelar}>sair</button>
        </div>
      );
    }
  }

  function nomeOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.disciplina.setNome(evento.target.value));
  }

  function cargaHorariaOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.disciplina.setCargaHoraria(+evento.target.value));
  }

  return (
    <div className="mascara">
      <div className="popUp">
        <div className="titulo">{titulo()}</div>
        <div className="erros">
          {erros.map((erro) => (
            <div key={erro}>{erro}</div>
          ))}
        </div>

        <div className="form">
          <div className="par">
            <label htmlFor="nome">nome</label>
            <div className="coluna-direita">{campoNome()}</div>
          </div>
        </div>

        <div className="form">
          <div className="par">
            <label htmlFor="cargaHoraria">carga horária</label>
            <div className="coluna-direita">{campoCargaHoraria()}</div>
          </div>
        </div>
        {rodape()}
      </div>
    </div>
  );
}

export default PopUpDisciplina;
