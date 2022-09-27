import { InterfaceConteudoDeTabela } from "../../../api";

interface CabecalhoProps {
  docentes: InterfaceConteudoDeTabela.Docentes;
}

function Cabecalho(props: CabecalhoProps) {
  const docentes = Object.values(props.docentes);
  return (
    <thead>
      <tr>
        {docentes.map((docente) => (
          <th key={docente.id}>{docente.nome}</th>
        ))}
      </tr>
    </thead>
  );
}

export default Cabecalho;
