import { configureStore } from "@reduxjs/toolkit";
import docentesFiltradosReducer from "./slices/docentesFiltrados";

export const store = configureStore({
  reducer: docentesFiltradosReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
