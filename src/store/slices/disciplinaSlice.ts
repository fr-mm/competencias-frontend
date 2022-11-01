import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { regex } from "../../aux";
import { ITabela } from "../../interfaces";

const initialState = {
  id: "",
  nome: "",
  cargaHoraria: 0,
  editando: false,
  erros: [] as string[],
};

const disciplinasSlice = createSlice({
  name: "disciplina",
  initialState,
  reducers: {
    setId(state, action: PayloadAction<ITabela.IdDisciplina>) {
      state.id = action.payload;
    },

    setNome(state, action: PayloadAction<string>) {
      if (action.payload.match(regex.onChange.nomeDeDisciplinaOuCurso)) {
        state.nome = action.payload;
      }
    },

    setCargaHoraria(state, action: PayloadAction<number>) {
      if (action.payload > 0) {
        state.cargaHoraria = action.payload;
      }
    },

    setErros(state, action: PayloadAction<string[]>) {
      state.erros = action.payload;
    },

    iniciarEdicao(state) {
      state.editando = true;
    },

    finalizarEdicao(state) {
      state.id = initialState.id;
      state.nome = initialState.nome;
      state.cargaHoraria = initialState.cargaHoraria;
      state.editando = initialState.editando;
      state.erros = initialState.erros;
    },

    carregar(state, action: PayloadAction<ITabela.Disciplina>) {
      state.id = action.payload.id;
      state.nome = action.payload.nome;
      state.cargaHoraria = action.payload.cargaHoraria;
    },
  },
});

export const {
  setId,
  setNome,
  setCargaHoraria,
  setErros,
  iniciarEdicao,
  finalizarEdicao,
  carregar,
} = disciplinasSlice.actions;
export default disciplinasSlice.reducer;
