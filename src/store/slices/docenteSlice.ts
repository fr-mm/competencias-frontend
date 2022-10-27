import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";

const initialState = {
  id: "",
  nome: "",
  email: "",
  telefones: [] as string[],
  telefoneEmEdicao: "",
  tipoDeContratacao: "",
  unidadesSenai: "",
  competencias: {} as ITabela.Competencias,
  editando: false,
};

const docenteSlice = createSlice({
  name: "docente",
  initialState,
  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },

    setNome(state, action: PayloadAction<string>) {
      state.nome = action.payload;
    },

    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },

    setTelefoneEmEdicao(state, action: PayloadAction<string>) {
      state.telefoneEmEdicao = action.payload;
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
      state.unidadesSenai = action.payload;
    },

    setCompetencia(
      state,
      action: PayloadAction<{ idDisciplina: string; nivel: number }>
    ) {
      state.competencias[action.payload.idDisciplina] = action.payload.nivel;
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
      state.unidadesSenai = initialState.unidadesSenai;
      state.competencias = initialState.competencias;
      state.editando = false;
    },
  },
});

export const {
  setId,
  setNome,
  setEmail,
  setTelefoneEmEdicao,
  adicionarTelefone,
  removerTelefone,
  setTipoDeContratacao,
  setUnidadeSenai,
  setCompetencia,
  iniciarEdicao,
  finalizarEdicao,
} = docenteSlice.actions;
export default docenteSlice.reducer;
