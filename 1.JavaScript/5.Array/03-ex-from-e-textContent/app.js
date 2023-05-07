
var numeros = [1, 2, 3, 4, 5];
var quadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(quadrados);// [1, 4, 9, 16, 25]

const list = document.querySelectorAll('#list li');
const listArray = Array.from(list)
console.log(listArray);//Vai criar um array com os indices e o elemento (li
const names = listArray.map(name => name.textContent);//vai mapear o array e pegar de cada elemento li o texto que contem na tag <li>
const NovosNames = listArray.map(name => name.textContent='Heitor','David','Isabella');//vai mapear o array é usado como setter para definir o novo conteúdo de texto do elemento para a tag <li
console.log(names);
