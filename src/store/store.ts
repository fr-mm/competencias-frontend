import { configureStore } from "@reduxjs/toolkit";
import cursos from "./slices/cursosSlice";
import docentes from "./slices/docentesSlice";
import docente from "./slices/docenteSlice";
import tabela from "./slices/tabelaSlice";
import ordenacao from "./slices/ordenacaoSlice";
import popUps from "./slices/popUsSlice";
import cargaHoraria from "./slices/cargaHorariaSlice";
import disciplinas from "./slices/disciplinaSlice";
import tiposDeContratacao from "./slices/tiposDeContratacaoSlice";
import unidadesSenai from "./slices/unidadesSenaiSlice";

export const store = configureStore({
  reducer: {
    docentes,
    docente,
    cursos,
    tabela,
    ordenacao,
    popUps,
    cargaHoraria,
    disciplinas,
    tiposDeContratacao,
    unidadesSenai,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
