import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../api";
import { regex } from "../../../aux";
import { EnumPopUpNomes } from "../../../enums";
import { reducers, RootState } from "../../../store";
import { Erros, Input, PopUp, RodapeEntidade, Lista, Combobox } from "../base";

function Docente(): JSX.Element {
  const dispatch = useDispatch();
  const docente = useSelector((state: RootState) => state.docente);
  const tiposDeContratacao = useSelector(
    (state: RootState) => state.tiposDeContratacao.todos
  );
  const unidadesSenai = useSelector(
    (state: RootState) => state.unidadesSenai.todas
  );
  const mensagemDeErro = {
    telefone: "telefone inválido",
    quantidadeTelefones: "adicione pelo menos 1 telefone",
    nome: "nome inválido",
    email: "email inválido",
  };
  const titulo = docente.id === "" ? "Adicionar docente" : "Docente";

  function nomeOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.docente.setNome(evento.target.value));
  }

  function emailOnChange(evento: ChangeEvent<HTMLInputElement>): void {
    dispatch(reducers.docente.setEmail(evento.target.value));
  }

  function telefoneOnChange(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(reducers.docente.setTelefoneEmEdicao(evento.target.value));
  }

  function unidadeSenaiOnChange(evento: ChangeEvent<HTMLSelectElement>): void {
    dispatch(reducers.docente.setUnidadeSenai(evento.target.value));
  }

  function tipoDeContratacaoOnChange(
    evento: ChangeEvent<HTMLSelectElement>
  ): void {
    dispatch(reducers.docente.setTipoDeContratacao(evento.target.value));
  }

  function editar(): void {
    dispatch(reducers.docente.iniciarEdicao());
  }

  function salvar(): void {
    if (valido()) {
      api.salvarDocente({
        id: docente.id,
        nome: docente.nome,
        email: docente.email,
        telefones: docente.telefones,
        tipoDeContratacao: docente.tipoDeContratacao,
        unidadeSenai: docente.unidadeSenai,
        competencias: docente.competencias,
      });
      dispatch(reducers.popUps.esconder(EnumPopUpNomes.DOCENTE));
      dispatch(reducers.docente.finalizarEdicao());
      dispatch(reducers.tabela.setAtualizada(false));
    }
  }

  function cancelar(): void {
    dispatch(reducers.popUps.esconder(EnumPopUpNomes.DOCENTE));
    dispatch(reducers.docente.finalizarEdicao());
  }

  function valido(): boolean {
    const erros = [];
    let valido = true;
    if (!docente.nome.match(regex.final.nomeDePessoa)) {
      valido = false;
      erros.push(mensagemDeErro.nome);
    }
    if (!docente.email.match(regex.final.email)) {
      valido = false;
      erros.push(mensagemDeErro.email);
    }
    if (docente.telefones.length < 1) {
      valido = false;
      erros.push(mensagemDeErro.quantidadeTelefones);
    }
    dispatch(reducers.docente.setErros(erros));
    return valido;
  }

  function adicionarTelefone(): void {
    let telefone = formatarTelefone(docente.telefoneEmEdicao);

    if (telefone.match(regex.final.telefone)) {
      dispatch(reducers.docente.setTelefoneEmEdicao(telefone));
      dispatch(reducers.docente.adicionarTelefone());
      dispatch(reducers.docente.removerErro(mensagemDeErro.telefone));
    } else {
      const erros = [...docente.erros, mensagemDeErro.telefone];
      dispatch(reducers.docente.setErros(erros));
    }
  }

  function formatarTelefone(telefone: string): string {
    if (telefone.length >= 10) {
      if (telefone[0] !== "(" && telefone[3] !== ")") {
        telefone = `(${telefone.slice(0, 2)})${telefone.slice(2)}`;
      }
      if (telefone.length === 12 || telefone.length === 13) {
        const indiceSepardor = telefone.length - 4;
        telefone = `${telefone.slice(0, indiceSepardor)}-${telefone.slice(
          indiceSepardor
        )}`;
      }
    }
    return telefone;
  }

  function BotaoAdicionarTelefone(): JSX.Element {
    if (docente.editando) {
      return (
        <button
          className="botao-adicionar-telefone"
          onClick={adicionarTelefone}
        >
          adicionar
        </button>
      );
    }
    return <></>;
  }

  function removerTelefone(telefone: string): void {
    dispatch(reducers.docente.removerTelefone(telefone));
  }

  return (
    <PopUp nome={EnumPopUpNomes.DOCENTE} titulo={titulo}>
      <Erros erros={docente.erros} />
      <Input
        label="Nome"
        id={docente.id + "-nome"}
        value={docente.nome}
        placeholder="Nome Completo"
        onChange={nomeOnChange}
        maxLength={70}
        editando={docente.editando}
      />
      <Input
        label="E-mail"
        id={docente.id + "-email"}
        value={docente.email}
        placeholder="email@email.com"
        onChange={emailOnChange}
        maxLength={100}
        editando={docente.editando}
      />
      <Input
        label="Telefones"
        id={docente.id + "-adicionar-telefone"}
        value={docente.telefoneEmEdicao}
        placeholder="(00)00000-0000"
        onChange={telefoneOnChange}
        maxLength={14}
        editando={docente.editando}
      >
        <BotaoAdicionarTelefone />
      </Input>
      <Lista
        itens={docente.telefones}
        editando={docente.editando}
        remover={removerTelefone}
      />
      <Combobox
        label="Unidade SENAI"
        id={docente.id + "-unidade-senai"}
        itens={unidadesSenai}
        value={docente.unidadeSenai}
        onChange={unidadeSenaiOnChange}
        editando={docente.editando}
      />
      <Combobox
        label="Tipo de contratação"
        id={docente.id + "-tipo-de-contratacao"}
        itens={tiposDeContratacao}
        value={docente.tipoDeContratacao}
        onChange={tipoDeContratacaoOnChange}
        editando={docente.editando}
      />
      <RodapeEntidade
        editando={docente.editando}
        editar={editar}
        salvar={salvar}
        cancelar={cancelar}
      />
    </PopUp>
  );
}

export default Docente;
