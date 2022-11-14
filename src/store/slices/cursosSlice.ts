import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";

const initialState = {
  todos: {} as ITabela.Cursos,
  filtrados: [] as ITabela.Curso[],
  idsARemover: [] as ITabela.IdCurso[],
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

    incluirParaRemocao(state, action: PayloadAction<ITabela.IdCurso>) {
      const id = action.payload;
      if (!state.idsARemover.includes(id)) {
        state.idsARemover.push(id);
      }
    },

    excluirParaRemocao(state, action: PayloadAction<ITabela.IdCurso>) {
      const id = action.payload;
      if (state.idsARemover.includes(id)) {
        const index = state.idsARemover.indexOf(id);
        state.idsARemover.splice(index);
      }
    },

    setIdsARemover(state, action: PayloadAction<ITabela.IdCurso[]>) {
      state.idsARemover = action.payload;
    },

    limparListaDeRemocao(state) {
      state.idsARemover = [];
    },
  },
});

export const {
  atualizar,
  filtrarPorNome,
  incluirParaRemocao,
  excluirParaRemocao,
  setIdsARemover,
  limparListaDeRemocao,
} = cursosSlice.actions;
export default cursosSlice.reducer;
