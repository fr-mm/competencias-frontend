import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceConteudoDeTabela } from "../../interfaces";

const initialState = {
  todos: {} as InterfaceConteudoDeTabela.Cursos,
  filtrados: [] as InterfaceConteudoDeTabela.Curso[],
};

const cursosSlice = createSlice({
  name: "cursos",
  initialState,
  reducers: {
    atualizar(state, action: PayloadAction<typeof initialState.todos>) {
      state.todos = action.payload;
    },

    filtrarPorNome(state, action: PayloadAction<string>) {
      const todos = Object.values(state.todos);
      const filtro = action.payload;
      state.filtrados = todos.filter((docente) =>
        docente.nome.includes(filtro)
      );
    },
  },
});

export const { atualizar, filtrarPorNome } = cursosSlice.actions;
export default cursosSlice.reducer;
