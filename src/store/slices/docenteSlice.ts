import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { regex } from "../../aux";
import { ITabela } from "../../interfaces";

const initialState = {
  id: "",
  nome: "",
  email: "",
  telefones: [] as string[],
  telefoneEmEdicao: "",
  tipoDeContratacao: "",
  unidadesSenai: "",
  editando: false,
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
      state.unidadesSenai = action.payload;
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
      state.editando = false;
    },

    carregar(state, action: PayloadAction<ITabela.Docente>) {
      const docente = action.payload;
      state.id = docente.id;
      state.nome = docente.nome;
      state.email = docente.email;
      state.telefones = docente.telefones;
      state.tipoDeContratacao = docente.tipoDeContratacao;
      state.unidadesSenai = docente.unidadeSenai;
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
  iniciarEdicao,
  finalizarEdicao,
  carregar,
} = docenteSlice.actions;
export default docenteSlice.reducer;
