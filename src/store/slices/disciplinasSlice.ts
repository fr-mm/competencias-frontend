import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";

const initialState = {
  todas: {} as ITabela.Disciplinas,
  idsFiltradas: [] as ITabela.IdDisciplina[],
};

const disciplinasSlice = createSlice({
  name: "disciplinas",
  initialState,
  reducers: {
    atualizar(state, action: PayloadAction<ITabela.Disciplinas>) {
      state.todas = action.payload;
    },

    filtrarPorNome(state, action: PayloadAction<string>) {
      const todas = Object.values(state.todas);
      const filtro = action.payload.toLowerCase();
      const idsFiltradas = [];
      for (let disciplina of todas) {
        if (disciplina.nome.toLowerCase().includes(filtro)) {
          idsFiltradas.push(disciplina.id);
        }
      }
      state.idsFiltradas = idsFiltradas;
    },
  },
});

export const { atualizar, filtrarPorNome } = disciplinasSlice.actions;
export default disciplinasSlice.reducer;
