const letrasComAcento = "A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ";

const regex = {
  nomeDePessoa: `^([${letrasComAcento}]+[ ']?)*$`,
  email: "^([\\w\\d!#$%&'*+-/=?^_`{|}~]+(@)?([\\w\\d]+)?(([.\\w\\d]+)+)?)?$",
  telefoneEmEdicao: "^(\\(?(\\d{0,2})?\\)?(\\d{0,5})-?(\\d{0,4}))?$",
  telefone: "^\\(\\d{2}\\)\\d{4,5}-\\d{4}$",
};

export default regex;
