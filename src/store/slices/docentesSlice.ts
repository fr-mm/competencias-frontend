import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterfaceConteudoDeTabela } from "../../interfaces";

type IdDocente = string;

const initialState = {
  todos: {} as InterfaceConteudoDeTabela.Docentes,
  filtrados: [] as InterfaceConteudoDeTabela.Docente[],
  removendo: false,
  idsARemover: [] as string[],
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

    ordenarAlfabeticamente(state) {
      state.filtrados.sort((a, b) => (a.nome > b.nome ? 1 : -1));
    },

    ordenarPorCompetenciaCrescente(
      state,
      action: PayloadAction<InterfaceConteudoDeTabela.Disciplina>
    ) {
      const competencias = action.payload.competencias;
      state.filtrados.sort((a, b) =>
        competencias[a.id] > competencias[b.id] ? 1 : -1
      );
    },

    ordenarPorCompetenciaDecrescente(
      state,
      action: PayloadAction<InterfaceConteudoDeTabela.Disciplina>
    ) {
      const competencias = action.payload.competencias;
      state.filtrados.sort((a, b) =>
        competencias[a.id] < competencias[b.id] ? 1 : -1
      );
    },

    setRemovendo(state, action: PayloadAction<boolean>) {
      state.removendo = action.payload;
    },

    incluirParaRemocao(state, action: PayloadAction<IdDocente>) {
      const id = action.payload;
      if (!state.idsARemover.includes(id)) {
        state.idsARemover.push(id);
      }
    },

    excluirParaRemocao(state, action: PayloadAction<IdDocente>) {
      const id = action.payload;
      if (state.idsARemover.includes(id)) {
        const index = state.idsARemover.indexOf(id);
        state.idsARemover.splice(index);
      }
    },

    limparListaDeRemocao(state) {
      state.idsARemover = [];
    },
  },
});

export const {
  atualizar,
  filtrarPorNome,
  ordenarAlfabeticamente,
  ordenarPorCompetenciaCrescente,
  ordenarPorCompetenciaDecrescente,
  setRemovendo,
  incluirParaRemocao,
  excluirParaRemocao,
  limparListaDeRemocao,
} = docentesSlice.actions;
export default docentesSlice.reducer;
