import * as fs from "fs";
import * as path from "path";

interface Competencia {
  nome: string;
  nivel: number;
}

class RandomizadorDeFakeDB {
  readonly arquivo = "./fakeDB.json";
  readonly quantidade = 10;
  readonly competencias = [
    "LOGICA_DE_PROGRAMACAO",
    "BANCO_DE_DADOS",
    "DESENVOLVIMENTO_MOBILE",
    "TCC",
  ];

  public randomizar(): void {
    const conteudo = JSON.stringify(this.conteudoDoDB);
    this.sobrescreverArquivo(conteudo);
    console.log("DB randomizado");
  }

  private sobrescreverArquivo(conteudo: string) {
    const arquivo = path.join(__dirname, this.arquivo);
    fs.writeFileSync(arquivo, conteudo, "utf8");
  }

  private get conteudoDoDB(): object {
    return {
      docentes: this.docentesAleatorios,
    };
  }

  private get docentesAleatorios(): object[] {
    const docentes = [];
    for (let i = 0; i < this.quantidade; i++) {
      docentes.push(this.docenteAleatorio);
    }
    return docentes;
  }

  private get docenteAleatorio() {
    return {
      id: this.idAleatorio,
      nome: this.nomeAleatorio,
      competencias: this.competenciasAleatorias,
    };
  }

  private get competenciasAleatorias(): Competencia[] {
    const resultado = [];
    for (let competencia of this.competencias) {
      const nivel = this.escolher([1, 2, 3, 4]);
      resultado.push({ id: this.idAleatorio, nome: competencia, nivel: nivel });
    }
    return resultado;
  }

  private get nomeAleatorio(): string {
    return Math.random().toString(36).slice(2, 7);
  }

  private get idAleatorio(): string {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  private dec2hex(dec: number): string {
    return dec.toString(16).padStart(2, "0");
  }

  private escolher(opcoes: any[]): any {
    return opcoes[Math.floor(Math.random() * opcoes.length)];
  }
}

new RandomizadorDeFakeDB().randomizar();
