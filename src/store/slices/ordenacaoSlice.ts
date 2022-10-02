import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ordem } from "../../componentes/tabela/botoesOrdenadores";

const initialState = {
  ordem: Ordem.NENHUMA,
  idElemento: "",
};

const ordenacaoSlice = createSlice({
  name: "ordenacao",
  initialState,
  reducers: {
    ordenar(state, action: PayloadAction<string>) {
      const idElemento = action.payload;
      if (idElemento !== state.idElemento) {
        state.idElemento = idElemento;
        state.ordem = Ordem.CRESCENTE;
      } else {
        switch (state.ordem) {
          case Ordem.NENHUMA:
            state.ordem = Ordem.CRESCENTE;
            break;
          case Ordem.CRESCENTE:
            state.ordem = Ordem.DECRESCENTE;
            break;
          case Ordem.DECRESCENTE:
            state.ordem = Ordem.NENHUMA;
        }
      }
    },
  },
});

export const { ordenar } = ordenacaoSlice.actions;
export default ordenacaoSlice.reducer;
