
// Array.find<encontrar> e Array.findIndex
// "Find" e "findIndex" são métodos integrados em JavaScript que permitem pesquisar um elemento em um array e retornar o primeiro elemento que satisfaz uma determinada condição.
// "Find":

// Tradução: "encontrar"

// Sintaxe:
// array.find(callback(element[, index[, array]])[, thisArg]);

//Descrição:
// "array" é o array que será pesquisado;
// "callback" é a função que será executada para cada elemento do array até que um elemento que satisfaça a condição seja encontrado. Ela recebe três parâmetros:
// "element" é o valor do elemento atual do array;
// "index" é o índice do elemento atual do array (opcional);
// "array" é o array original que está sendo percorrido (opcional).
// "thisArg" é um valor opcional que pode ser usado como "this" dentro da função "callback".
// O método "find" retorna o valor do primeiro elemento do array que satisfaz a condição da função "callback" ou undefined caso nenhum elemento satisfaça a condição.

// Exemplo:
var arrayEx1 = [1, 2, 3, 4, 5];
var found = arrayEx1.find(function(element) {
  return element > 3;
});
console.log(found); // 4
// Neste exemplo, a função "find" é usada para pesquisar o primeiro elemento do array "array" que seja maior que 3 e atribuir seu valor à variável "found". O valor "4" é exibido no console.



// "FindIndex":

// Tradução: "encontrar índice"

// Sintaxe:

// array.findIndex(callback(element[, index[, array]])[, thisArg]);

// Descrição:
// "array" é o array que será pesquisado;
// "callback" é a função que será executada para cada elemento do array até que um elemento que satisfaça a condição seja encontrado. Ela recebe três parâmetros:
// "element" é o valor do elemento atual do array;
// "index" é o índice do elemento atual do array (opcional);
// "array" é o array original que está sendo percorrido (opcional).
// "thisArg" é um valor opcional que pode ser usado como "this" dentro da função "callback".
// O método "findIndex" retorna o índice do primeiro elemento do array que satisfaz a condição da função "callback" ou -1 caso nenhum elemento satisfaça a condição.

// Exemplo:
var arrayEx2 = [1, 2, 3, 4, 5];
var foundIndex = arrayEx2.findIndex(function(element) {
  return element > 3;
});
console.log(foundIndex); // 3
// Neste exemplo, a função "findIndex" é usada para pesquisar o índice do primeiro elemento do array "array" que seja maior que 3 e atribuir seu índice à variável "foundIndex".
// O valor "3" é exibido no console.


    const data = [
        {
            name: 'Willian',
            age: 26,
            city: 'Dublin'
        },
        {
            name: 'Jonas',
            age: 22,
            city: 'Cologne'
        }
    ];

    // const sampleArray = [4, -5, 0, -1];
    // const underZero = sampleArray.find(x => x < 0);
    // const underZeroIndex = sampleArray.findIndex(x => x < 0);
    // console.log(underZero);
    // console.log(underZeroIndex);

    const jonas = data.find(person => person.name === 'Jonas');
    console.log(jonas);
    const jonasIndex = data.findIndex(person => person.name === 'Jonas');
    console.log(jonasIndex);
