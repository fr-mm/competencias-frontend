import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { regex } from "../../aux";
import { EnumNivelDeCompetencia } from "../../enums";
import { ITabela } from "../../interfaces";

const initialState = {
  id: "",
  nome: "",
  email: "",
  telefones: [] as string[],
  telefoneEmEdicao: "",
  tipoDeContratacao: "",
  unidadeSenai: "",
  competencias: {} as ITabela.Competencias,
  editando: false,
  erros: [] as string[],
  atribuindoCompetencias: false,
};

const docenteSlice = createSlice({
  name: "docente",
  initialState,
  reducers: {
    setId(state, action: PayloadAction<ITabela.IdDocente>) {
      state.id = action.payload;
    },

    setNome(state, action: PayloadAction<string>) {
      if (action.payload.match(regex.onChange.nomeDePessoa)) {
        state.nome = action.payload;
      }
    },

    setEmail(state, action: PayloadAction<string>) {
      if (action.payload.match(regex.onChange.email)) {
        state.email = action.payload;
      }
    },

    setTelefoneEmEdicao(state, action: PayloadAction<string>) {
      if (action.payload.match(regex.onChange.telefone)) {
        state.telefoneEmEdicao = action.payload;
      }
    },

    adicionarTelefone(state) {
      if (
        !state.telefones.includes(state.telefoneEmEdicao) &&
        state.telefoneEmEdicao !== ""
      ) {
        state.telefones.push(state.telefoneEmEdicao);
        state.telefoneEmEdicao = initialState.telefoneEmEdicao;
      }
    },

    removerTelefone(state, action: PayloadAction<string>) {
      state.telefones.splice(state.telefones.indexOf(action.payload), 1);
      state.telefoneEmEdicao = initialState.telefoneEmEdicao;
    },

    setTipoDeContratacao(state, action: PayloadAction<string>) {
      state.tipoDeContratacao = action.payload;
    },

    setUnidadeSenai(state, action: PayloadAction<string>) {
      state.unidadeSenai = action.payload;
    },

    setCompetencia(
      state,
      action: PayloadAction<{
        idDisciplina: ITabela.IdDisciplina;
        nivel: EnumNivelDeCompetencia;
      }>
    ) {
      state.competencias[action.payload.idDisciplina] = action.payload.nivel;
    },

    setErros(state, action: PayloadAction<string[]>) {
      state.erros = action.payload;
    },

    removerErro(state, action: PayloadAction<string>) {
      if (state.erros.includes(action.payload)) {
        state.erros.splice(state.erros.indexOf(action.payload));
      }
    },

    iniciarEdicao(state) {
      state.editando = true;
    },

    finalizarEdicao(state) {
      state.id = initialState.id;
      state.nome = initialState.nome;
      state.email = initialState.email;
      state.telefones = initialState.telefones;
      state.tipoDeContratacao = initialState.tipoDeContratacao;
      state.unidadeSenai = initialState.unidadeSenai;
      state.editando = false;
    },

    carregar(state, action: PayloadAction<ITabela.Docente>) {
      const docente = action.payload;
      state.id = docente.id;
      state.nome = docente.nome;
      state.email = docente.email;
      state.telefones = docente.telefones;
      state.tipoDeContratacao = docente.tipoDeContratacao;
      state.unidadeSenai = docente.unidadeSenai;
      state.competencias = docente.competencias;
      state.editando = false;
    },

    atribuirCompetencias(state) {
      state.atribuindoCompetencias = true;
    },

    finalizarAtribuicaoCompetencias(state) {
      state.atribuindoCompetencias = false;
    },
  },
});

export const {
  setId,
  setNome,
  setEmail,
  setTelefoneEmEdicao,
  setTipoDeContratacao,
  setUnidadeSenai,
  setCompetencia,
  setErros,
  removerErro,
  adicionarTelefone,
  removerTelefone,
  iniciarEdicao,
  finalizarEdicao,
  carregar,
  atribuirCompetencias,
  finalizarAtribuicaoCompetencias,
} = docenteSlice.actions;
export default docenteSlice.reducer;
