import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceConteudoDeTabela } from "../../interfaces";

const initialState = {
  todos: {} as InterfaceConteudoDeTabela.Docentes,
  filtrados: [] as InterfaceConteudoDeTabela.Docente[],
};

const docentesSlice = createSlice({
  name: "docentes",
  initialState,
  reducers: {
    atualizar(state, action: PayloadAction<typeof initialState.todos>) {
      state.todos = action.payload;
    },

    filtrarPorNome(state, action: PayloadAction<string>) {
      const todos = Object.values(state.todos);
      const filtro = action.payload.toLowerCase();
      state.filtrados = todos.filter((docente) =>
        docente.nome.toLowerCase().includes(filtro)
      );
    },
  },
});

export const { atualizar, filtrarPorNome } = docentesSlice.actions;
export default docentesSlice.reducer;
