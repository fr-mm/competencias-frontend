import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";

const initialState = {
  todas: {} as ITabela.Disciplinas,
  idsFiltradas: [] as ITabela.IdDisciplina[],
  idsARemover: [] as ITabela.IdDisciplina[],
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

    incluirParaRemocao(state, action: PayloadAction<ITabela.IdDisciplina>) {
      if (!state.idsARemover.includes(action.payload))
        state.idsARemover.push(action.payload);
    },

    excluirParaRemocao(state, action: PayloadAction<ITabela.IdDisciplina>) {
      if (state.idsARemover.includes(action.payload)) {
        state.idsARemover.splice(state.idsARemover.indexOf(action.payload), 1);
      }
    },

    setIdsARemover(state, action: PayloadAction<ITabela.IdDisciplina[]>) {
      state.idsARemover = action.payload;
    },
  },
});

export const {
  atualizar,
  filtrarPorNome,
  incluirParaRemocao,
  excluirParaRemocao,
  setIdsARemover,
} = disciplinasSlice.actions;
export default disciplinasSlice.reducer;
