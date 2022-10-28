const letrasComAcento = "A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ";
const nomeDePessoa = `^([${letrasComAcento}]+[ ']?)*$`;
const email =
  "^([\\w\\d!#$%&'*+-/=?^_`{|}~]+(@)?([\\w\\d]+)?(([.\\w\\d]+)+)?)?$";

const regex = {
  nomeDePessoa,
  email,
};

export default regex;
