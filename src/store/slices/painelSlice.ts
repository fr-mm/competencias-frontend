import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumPainel } from "../../enums";

const initialState = {
  visivel: EnumPainel.NENHUM,
};

const painelSlice = createSlice({
  name: "painel",
  initialState,
  reducers: {
    mostrar(state, action: PayloadAction<EnumPainel>) {
      state.visivel = action.payload;
    },
    esconder(state) {
      state.visivel = EnumPainel.NENHUM;
    },
  },
});

export const { mostrar, esconder } = painelSlice.actions;
export default painelSlice.reducer;
