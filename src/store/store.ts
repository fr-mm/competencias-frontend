import { configureStore } from "@reduxjs/toolkit";
import docentesReducer from "./slices/docentesReducer";

export const store = configureStore({
  reducer: {
    docentes: docentesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
