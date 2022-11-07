import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";
import { CHDocentes } from "./cargaHorariaSlice";

type IdDocente = string;

const initialState = {
  todos: {} as ITabela.Docentes,
  filtrados: [] as ITabela.Docente[],
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
      action: PayloadAction<ITabela.IdDisciplina>
    ) {
      state.filtrados.sort((docente1, docente2) =>
        docente1.competencias[action.payload] >
        docente2.competencias[action.payload]
          ? 1
          : -1
      );
    },

    ordenarPorCompetenciaDecrescente(
      state,
      action: PayloadAction<ITabela.IdDisciplina>
    ) {
      state.filtrados.sort((docente1, docente2) =>
        docente1.competencias[action.payload] <
        docente2.competencias[action.payload]
          ? 1
          : -1
      );
    },

    ordenarPorCargaHorariaEmModuloCrescente(
      state,
      action: PayloadAction<{
        IdModulo: ITabela.IdModulo;
        cargas: CHDocentes;
      }>
    ) {
      state.filtrados.sort((docente1, docente2) =>
        action.payload.cargas[docente1.id].modulos[action.payload.IdModulo]
          .horas >
        action.payload.cargas[docente2.id].modulos[action.payload.IdModulo]
          .horas
          ? 1
          : -1
      );
    },

    ordenarPorCargaHorariaEmModuloDecrescente(
      state,
      action: PayloadAction<{
        IdModulo: ITabela.IdModulo;
        cargas: CHDocentes;
      }>
    ) {
      state.filtrados.sort((docente1, docente2) =>
        action.payload.cargas[docente1.id].modulos[action.payload.IdModulo]
          .horas <
        action.payload.cargas[docente2.id].modulos[action.payload.IdModulo]
          .horas
          ? 1
          : -1
      );
    },

    ordenarPorCargaHorariaEmCursoCrescente(
      state,
      action: PayloadAction<{
        IdCurso: ITabela.IdCurso;
        cargas: CHDocentes;
      }>
    ) {
      state.filtrados.sort((docente1, docente2) =>
        action.payload.cargas[docente1.id].cursos[action.payload.IdCurso]
          .horas >
        action.payload.cargas[docente2.id].cursos[action.payload.IdCurso].horas
          ? 1
          : -1
      );
    },

    ordenarPorCargaHorariaEmCursoDecrescente(
      state,
      action: PayloadAction<{
        IdCurso: ITabela.IdCurso;
        cargas: CHDocentes;
      }>
    ) {
      state.filtrados.sort((docente1, docente2) =>
        action.payload.cargas[docente1.id].cursos[action.payload.IdCurso]
          .horas <
        action.payload.cargas[docente2.id].cursos[action.payload.IdCurso].horas
          ? 1
          : -1
      );
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

    setIdsARemover(state, action: PayloadAction<IdDocente[]>) {
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
  ordenarAlfabeticamente,
  ordenarPorCompetenciaCrescente,
  ordenarPorCompetenciaDecrescente,
  ordenarPorCargaHorariaEmModuloCrescente,
  ordenarPorCargaHorariaEmModuloDecrescente,
  ordenarPorCargaHorariaEmCursoCrescente,
  ordenarPorCargaHorariaEmCursoDecrescente,
  incluirParaRemocao,
  excluirParaRemocao,
  setIdsARemover,
  limparListaDeRemocao,
} = docentesSlice.actions;
export default docentesSlice.reducer;
