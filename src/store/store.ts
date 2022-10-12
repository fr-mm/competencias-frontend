import { configureStore } from "@reduxjs/toolkit";
import cursos from "./slices/cursosSlice";
import docentes from "./slices/docentesSlice";
import tabela from "./slices/tabelaSlice";
import ordenacao from "./slices/ordenacaoSlice";
import popUps from "./slices/popUsSlice";

export const store = configureStore({
  reducer: {
    docentes,
    cursos,
    tabela,
    ordenacao,
    popUps,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
