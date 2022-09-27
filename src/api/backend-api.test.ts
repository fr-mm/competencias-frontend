import db from "./mock/fakeDB.json";

import BackendAPI from "./backend-api";

describe("BackendAPI", () => {
  describe("fetch", () => {
    describe("QUANDO construida por construirMockAPI e mock-api rodando", () => {
      it("ENTAO retorna conteudo esperado", async () => {
        const api = BackendAPI.construirAPITeste();

        const docentes = await api.getConteudoDeTabela();

        const conteudoResultante = docentes;

        const conteudoEsperado = db["tabela"]["docentes"];
        expect(conteudoResultante).toBe(conteudoEsperado);
      });
    });
  });
});
