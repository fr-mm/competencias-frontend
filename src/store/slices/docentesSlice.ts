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
  },
});

export const {
  atualizar,
  filtrarPorNome,
  ordenarAlfabeticamente,
  ordenarPorCompetenciaCrescente,
  ordenarPorCompetenciaDecrescente,
} = docentesSlice.actions;
export default docentesSlice.reducer;
