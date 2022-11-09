import "./Filtros.css";
import { useDispatch, useSelector } from "react-redux";
import { reducers, RootState } from "../../../store";
import { Filtro } from "./base";

function Filtros(): JSX.Element {
  const dispatch = useDispatch();
  const atribuindoCompetencias = useSelector(
    (state: RootState) => state.docente.atribuindoCompetencias
  );

  function docentesOnChange(nome: string): void {
    nome = nome.trim();
    dispatch(reducers.docentes.filtrarPorNome(nome));
    if (nome === "") {
      dispatch(reducers.docentes.ordenarAlfabeticamente());
    }
  }

  function cursosOnChange(nome: string): void {
    dispatch(reducers.cursos.filtrarPorNome(nome.trim()));
  }

  function disciplinasOnChange(nome: string): void {
    dispatch(reducers.disciplinas.filtrarPorNome(nome.trim()));
  }

  return (
    <div className="filtros azul-escuro fonte-forte">
      <Filtro
        id="filtro-docentes"
        label="Docentes"
        onChange={docentesOnChange}
        ativo={!atribuindoCompetencias}
      />
      <Filtro
        id="filtro-disciplinas"
        label="Disciplinas"
        onChange={disciplinasOnChange}
      />
      <Filtro id="filtro-cursos" label="Cursos" onChange={cursosOnChange} />
    </div>
  );
}

export default Filtros;
