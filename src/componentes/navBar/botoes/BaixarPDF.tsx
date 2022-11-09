import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { RefObject } from "react";
import { useDispatch } from "react-redux";
import { EnumPopUp } from "../../../enums";
import { reducers } from "../../../store";
import { BotaoDeNavBar } from "../base";

interface BaixarPDFProps {
  tabelaReferencia: RefObject<HTMLDivElement>;
}

function BaixarPDF(props: BaixarPDFProps): JSX.Element {
  const dispatch = useDispatch();
  function onClick(): void {
    dispatch(reducers.popUps.mostrar(EnumPopUp.GERANDO_PDF));
    const input = props.tabelaReferencia.current;
    html2canvas(input as HTMLElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        unit: "px",
        format: [
          Math.round(canvas.width * 0.56),
          Math.round(canvas.height * 0.8),
        ],
      });
      pdf.addImage(imgData, "JPEG", 0, 0, 0, 0);
      pdf.save("competencias.pdf");
      dispatch(reducers.popUps.esconder(EnumPopUp.GERANDO_PDF));
    });
  }

  return <BotaoDeNavBar texto="Baixar PDF" onClick={onClick} />;
}

export default BaixarPDF;
