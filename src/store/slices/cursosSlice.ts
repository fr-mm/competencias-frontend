import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";

const initialState = {
  todos: {} as ITabela.Cursos,
  filtrados: [] as ITabela.Curso[],
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
      const filtro = action.payload.toLowerCase();
      state.filtrados = todos.filter((docente) =>
        docente.nome.toLowerCase().includes(filtro)
      );
    },
  },
});

export const { atualizar, filtrarPorNome } = cursosSlice.actions;
export default cursosSlice.reducer;
