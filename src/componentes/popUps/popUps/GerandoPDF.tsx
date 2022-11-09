import { EnumPopUp } from "../../../enums";
import { PopUp } from "../base";

function GerandoPDF(): JSX.Element {
  return <PopUp nome={EnumPopUp.GERANDO_PDF} titulo="Gerando PDF..." />;
}

export default GerandoPDF;
