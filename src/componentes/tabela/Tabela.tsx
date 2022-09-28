import "./Tabela.css";
import React, { useEffect, useState } from "react";
import { InterfaceConteudoDeTabela, BackendAPI } from "../../api";
import Cabecalho from "./cabecalho";
import CursoNaTabela from "./cursoNaTabela";

function Tabela() {
  const [docentes, setDocentes] = useState<InterfaceConteudoDeTabela.Docentes>(
    {}
  );
  const [cursos, setCursos] = useState<InterfaceConteudoDeTabela.Cursos>({});
  const [visivel, setVisivel] = useState(false);
  const [docentesFiltrados, setDocentesFiltrados] = useState(
    Object.values(docentes)
  );
  const [montado, setMontado] = useState(false);

  const getConteudo = async () => {
    const api = BackendAPI.construirMockAPI();
    const conteudo = await api.getConteudoDeTabela();
    setDocentes(conteudo.docentes);
    setCursos(conteudo.cursos);
    if (!montado) {
      setDocentesFiltrados(Object.values(conteudo.docentes));
      setMontado(true);
    }
  };

  const filtrarDocentes = (filtro: string): void => {
    const todos = Object.values(docentes);
    const filtrados = todos.filter((docente) => docente.nome.includes(filtro));
    setDocentesFiltrados(filtrados);
  };

  useEffect(() => {
    getConteudo();
  });

  try {
    return (
      <div className="tabela borda">
        <button
          onClick={() => {
            setVisivel(!visivel);
          }}
        >
          {visivel ? "esconder" : "mostrar"}
        </button>
        <input
          type="text"
          onChange={(evento) => filtrarDocentes(evento.target.value)}
        />
        <Cabecalho
          key="cabecalhoDaTabela"
          docentesFiltrados={docentesFiltrados}
        />
        <div>
          {Object.values(cursos).map((curso) => (
            <CursoNaTabela
              key={curso.id}
              curso={curso}
              docentes={docentes}
              docentesFiltrados={docentesFiltrados}
              visivel={visivel}
            />
          ))}
        </div>
      </div>
    );
  } catch (e) {
    return <p>carregando...</p>;
  }
}

export default Tabela;
