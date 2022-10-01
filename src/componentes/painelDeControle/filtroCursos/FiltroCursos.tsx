import { useDispatch } from "react-redux";
import { reducers } from "../../../store";

function FiltroCursos() {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Filtrar cursos:
        <input
          type="text"
          onChange={(evento) =>
            dispatch(reducers.cursos.filtrarPorNome(evento.target.value))
          }
        />
      </label>
    </div>
  );
}

export default FiltroCursos;
