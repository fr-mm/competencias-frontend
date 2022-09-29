import "./Tabela.css";
import React, { useEffect, useState } from "react";
import { InterfaceConteudoDeTabela, BackendAPI } from "../../api";
import Cabecalho from "./cabecalho";
import CursoNaTabela from "./cursoNaTabela";
import {
  atualizarDocentes,
  filtrarDocentesPorNome,
} from "../../store/slices/docentesReducer";
import { useDispatch } from "react-redux";

function Tabela() {
  const [docentes, setDocentes] = useState<InterfaceConteudoDeTabela.Docentes>(
    {}
  );
  const [cursos, setCursos] = useState<InterfaceConteudoDeTabela.Cursos>({});
  const [visivel, setVisivel] = useState(false);
  const [montado, setMontado] = useState(false);

  const dispatch = useDispatch();

  const getConteudo = async () => {
    const api = BackendAPI.construirMockAPI();
    const conteudo = await api.getConteudoDeTabela();
    dispatch(atualizarDocentes(conteudo.docentes));
    setCursos(conteudo.cursos);
    setDocentes({});
    if (!montado) {
      dispatch(filtrarDocentesPorNome(""));
      setMontado(true);
    }
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
          onChange={(evento) =>
            dispatch(filtrarDocentesPorNome(evento.target.value))
          }
        />
        <Cabecalho key="cabecalhoDaTabela" />
        <div>
          {Object.values(cursos).map((curso) => (
            <CursoNaTabela
              key={curso.id}
              curso={curso}
              docentes={docentes}
              docentesFiltrados={[]}
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
