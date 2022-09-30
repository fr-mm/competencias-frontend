import { configureStore } from "@reduxjs/toolkit";
import cursos from "./slices/cursosSlice";
import docentes from "./slices/docentesSlice";

export const store = configureStore({
  reducer: {
    docentes,
    cursos,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
