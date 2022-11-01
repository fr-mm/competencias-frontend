import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnumMenuDeQuina } from "../../enums";

const initialState = {
  visivel: EnumMenuDeQuina.NENHUM,
};

const menuDeQuinaSlice = createSlice({
  name: "menuDeQuina",
  initialState,
  reducers: {
    mostrar(state, action: PayloadAction<EnumMenuDeQuina>) {
      state.visivel = action.payload;
    },
    esconder(state) {
      state.visivel = EnumMenuDeQuina.NENHUM;
    },
  },
});

export const { mostrar, esconder } = menuDeQuinaSlice.actions;
export default menuDeQuinaSlice.reducer;
