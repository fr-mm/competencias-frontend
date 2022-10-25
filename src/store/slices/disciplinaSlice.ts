import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITabela } from "../../interfaces";

const initialState = {
  todas: {} as ITabela.Disciplinas,
};

const disciplinaSlice = createSlice({
  name: "disciplinas",
  initialState,
  reducers: {
    atualizar(state, action: PayloadAction<ITabela.Disciplinas>) {
      state.todas = action.payload;
    },
  },
});

export const { atualizar } = disciplinaSlice.actions;
export default disciplinaSlice.reducer;
