import { EnumPopUp, EnumTamanhoPopUp } from "../../../enums";
import { PopUp } from "../base";

function GerandoPDF(): JSX.Element {
  return (
    <PopUp
      flag={EnumPopUp.GERANDO_PDF}
      titulo="Gerando PDF..."
      tamanho={EnumTamanhoPopUp.PEQUENO}
    />
  );
}

export default GerandoPDF;
