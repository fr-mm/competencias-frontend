import { useDispatch } from "react-redux";
import { reducers } from "../../../store";

function FiltroCursos() {
  const dispatch = useDispatch();

  return (
    <div className="filtro">
      <label htmlFor="filtrarCursos">cursos</label>
      <input
        className="azul-claro"
        id="filtrarCursos"
        type="text"
        onChange={(evento) =>
          dispatch(reducers.cursos.filtrarPorNome(evento.target.value))
        }
      />
    </div>
  );
}

export default FiltroCursos;
