const letras = "A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ";
const nomeDePessoa = `^([${letras}]+[ ']?)*$`;

const regex = {
  nomeDePessoa,
};

export default regex;
