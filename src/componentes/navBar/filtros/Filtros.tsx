import "./Filtros.css";
import { useDispatch } from "react-redux";
import { reducers } from "../../../store";
import { Filtro } from "./base";

function Filtros(): JSX.Element {
  const dispatch = useDispatch();

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
    <div className="filtros azul escuro">
      <Filtro
        id="filtro-docentes"
        label="Docentes"
        onChange={docentesOnChange}
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
