import "./FiltroDocentes.css";
import { useDispatch } from "react-redux";
import { reducers } from "../../../store";

function FiltroDocentes() {
  const dispatch = useDispatch();

  return (
    <div className="filtro-docentes">
      <label>
        Filtrar docentes:
        <input
          type="text"
          onChange={(evento) =>
            dispatch(reducers.docentes.filtrarPorNome(evento.target.value))
          }
        />
      </label>
    </div>
  );
}

export default FiltroDocentes;
