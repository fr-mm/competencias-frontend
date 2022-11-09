import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { RefObject } from "react";
import { BotaoDeNavBar } from "../base";

interface BaixarPDFProps {
  tabelaReferencia: RefObject<HTMLDivElement>;
}

function BaixarPDF(props: BaixarPDFProps): JSX.Element {
  function onClick(): void {
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
      pdf.save("tabela.pdf");
    });
  }

  return <BotaoDeNavBar texto="Baixar PDF" onClick={onClick} />;
}

export default BaixarPDF;
