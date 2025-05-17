/* forEach */
// Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
const imgs = document.querySelectorAll("img");
imgs.forEach(function (item) {
  console.log(item);
});

/* Parâmetros do forEach */
// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array;
imgs.forEach(function (valorAtual, index, array) {
  console.log(valorAtual); // O item atual no loop
  console.log(index); // o número do index
  console.log(array); // o Array completo
});

/* forEach e Array */
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});
