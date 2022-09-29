import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceConteudoDeTabela } from "../../api";

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
      const filtro = action.payload;
      state.filtrados = todos.filter((docente) =>
        docente.nome.includes(filtro)
      );
    },
  },
});

export const {
  atualizar: atualizarDocentes,
  filtrarPorNome: filtrarDocentesPorNome,
} = docentesSlice.actions;
export default docentesSlice.reducer;
