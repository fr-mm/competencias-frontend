import { configureStore } from "@reduxjs/toolkit";
import cursos from "./slices/cursosSlice";
import docentes from "./slices/docentesSlice";
import tabela from "./slices/tabelaSlice";
import ordenacao from "./slices/ordenacaoSlice";

export const store = configureStore({
  reducer: {
    docentes,
    cursos,
    tabela,
    ordenacao,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
