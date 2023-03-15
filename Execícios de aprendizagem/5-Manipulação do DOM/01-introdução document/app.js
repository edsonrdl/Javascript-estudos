// Para acessar a árvore DOM em um documento HTML usando JavaScript, você pode usar a propriedade document para selecionar elementos HTML e interagir com eles.

// Existem várias maneiras de selecionar elementos HTML. Algumas das propriedades mais comuns incluem:

// - document.getElementById(id): seleciona um elemento HTML com o ID especificado.
// - document.getElementsByClassName(className): seleciona um ou mais elementos HTML que têm a classe especificada.
// - document.getElementsByTagName(tagName): seleciona um ou mais elementos HTML com a tag especificada.
// - document.querySelector(selector): seleciona o primeiro elemento HTML que corresponde ao seletor CSS especificado.
// - document.querySelectorAll(selector): seleciona todos os elementos HTML que correspondem ao seletor CSS especificado.
// 1. Acesso aos elementos HTML:
//    // Acessando um elemento pelo ID
//    const elementById = document.getElementById('my-element-id');

//    // Acessando elementos pelo nome da tag
//    const elementsByTagName = document.getElementsByTagName('div');

//    // Acessando o primeiro elemento que corresponde ao seletor
//    const elementBySelector = document.querySelector('.my-class');

//    // Acessando todos os elementos que correspondem ao seletor
//    const elementsBySelectorAll = document.querySelectorAll('p');



// Exemplo


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