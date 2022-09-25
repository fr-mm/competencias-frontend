import db from "../mockAPI/fakeDB.json";

import BackendAPI from "./backend-api";

describe("BackendAPI", () => {
  describe("fetch", () => {
    describe("QUANDO construida por construirMockAPI e mock-api rodando", () => {
      it("ENTAO retorna conteudo onde primeiro docente tem id esperado", async () => {
        const api = BackendAPI.construirAPITeste();

        const docentes = await api.getDocentes();

        const idDocenteResultante = docentes[0].id;
        const idDocenteEsperado = db["docentes"][0].id;
        expect(idDocenteResultante).toBe(idDocenteEsperado);
      });
      it("ENTAO retorna conteudo onde primeiro docente tem competencias esperadas", async () => {
        const api = BackendAPI.construirAPITeste();

        const docentes = await api.getDocentes();

        const idDocenteResultante = docentes[0].competencias;
        const idDocenteEsperado = db["docentes"][0].competencias;
        expect(idDocenteResultante).toBe(idDocenteEsperado);
      });
    });
  });
});
