import { configureStore } from "@reduxjs/toolkit";
import cursosReducer from "./slices/cursosReducer";
import docentesReducer from "./slices/docentesReducer";

export const store = configureStore({
  reducer: {
    docentes: docentesReducer,
    cursos: cursosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
