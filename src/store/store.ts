import { configureStore } from "@reduxjs/toolkit";
import cursos from "./slices/cursosSlice";
import docentes from "./slices/docentesSlice";
import tabela from "./slices/tabelaSlice";

export const store = configureStore({
  reducer: {
    docentes,
    cursos,
    tabela,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
