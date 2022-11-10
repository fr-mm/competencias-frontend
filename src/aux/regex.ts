const letrasComAcento = "A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'";
const caracteresDeEmail = "\\w\\d!#$%&'*+-/=?^_`{|}~";

const onChange = {
  nomeDePessoa: `^([${letrasComAcento}]+[ ]?)*$`,
  email: `^([${caracteresDeEmail}]+(@)?([\\w\\d]+)?(([.\\w\\d]+)+)?)?$`,
  telefone: "^(\\(?(\\d{0,2})?\\)?(\\d{0,5})-?(\\d{0,4}))?$",
  nomeDeDisciplinaOuCurso: `^([${letrasComAcento}\\d]+[ ]?)*$`,
  nivelDeCompetencia: `^[1234]?$`,
};

const final = {
  nomeDePessoa: `^[${letrasComAcento}]+( [${letrasComAcento}]+)+$`,
  email: `^[${caracteresDeEmail}]+@[\\w\\d]+(.[\\w\\d]+)?$`,
  telefone: "^\\(\\d{2}\\)\\d{4,5}-\\d{4}$",
  nomeDeDisciplinaOuCurso: `^[${letrasComAcento}]+( [${letrasComAcento}]+)*$`,
};

const regex = {
  onChange,
  final,
};

export default regex;
