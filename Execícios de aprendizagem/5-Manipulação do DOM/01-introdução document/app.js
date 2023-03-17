
// Acessando um elemento pelo ID
var elementById = document.getElementById("cabecalho");
console.log(elementById);

// Acessando elementos pelo nome da tag
let elementsByTagName = document.getElementsByTagName('main');
console.log(elementsByTagName);

// Acessando um elemento pelo Class
let elementsByClassName = document.getElementsByClassName('classDiv');
console.log(elementsByClassName);

// Acessando o primeiro elemento que corresponde ao seletor
let elementBySelector = document.querySelector('h1');
console.log(elementBySelector);

// Acessando todos os elementos que correspondem ao seletor
let elementsBySelectorAll = document.querySelectorAll('h1');
console.log(elementsBySelectorAll);