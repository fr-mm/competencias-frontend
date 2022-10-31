import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnumPopUpNomes } from "../../../enums";
import { reducers, RootState } from "../../../store";
import { Erros, Input, PopUp, Rodape } from "../base";

function Disciplina(): JSX.Element {
  const dispatch = useDispatch();
  const disciplina = useSelector((state: RootState) => state.disciplina);
  const titulo = disciplina.id === "" ? "Adicionar disciplina" : "Disciplina";
  const mensagemDeErro = {
    nome: "Nome inválido",
    cargaHoraria: "Carga horária inválida",
  };

  function nomeOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.disciplina.setNome(evento.target.value));
  }

  function cargaHorariaOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.disciplina.setCargaHoraria(+evento.target.value));
  }

  function editar(): void {
    dispatch(reducers.disciplina.iniciarEdicao());
  }

  function salvar(): void {
    if (valida()) {
      dispatch(reducers.popUps.esconder(EnumPopUpNomes.DISCIPLINA));
      //enviar request na api
      dispatch(reducers.disciplina.finalizarEdicao());
      dispatch(reducers.tabela.setAtualizada(false));
    }
  }

  function cancelar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUpNomes.DISCIPLINA));
    dispatch(reducers.disciplina.finalizarEdicao());
  }

  function valida(): boolean {
    const erros = [];
    let valido = true;
    if (disciplina.nome.length < 3) {
      erros.push(mensagemDeErro.nome);
      valido = false;
    }
    if (disciplina.cargaHoraria < 1) {
      erros.push(mensagemDeErro.cargaHoraria);
      valido = false;
    }
    dispatch(reducers.disciplina.setErros(erros));
    return valido;
  }

  return (
    <PopUp nome={EnumPopUpNomes.DISCIPLINA} titulo={titulo}>
      <Erros erros={disciplina.erros} />
      <Input
        label="nome"
        id={disciplina.nome + "-nome"}
        value={disciplina.nome}
        placeholder="Nome"
        onChange={nomeOnChange}
        maxLength={50}
        editando={disciplina.editando}
      />
      <Input
        label="carga horaria"
        id={disciplina.nome + "-ch"}
        value={disciplina.cargaHoraria}
        placeholder="0"
        onChange={cargaHorariaOnChange}
        maxLength={4}
        editando={disciplina.editando}
      />
      <Rodape
        editando={disciplina.editando}
        editar={editar}
        salvar={salvar}
        cancelar={cancelar}
      />
    </PopUp>
  );
}

export default Disciplina;
