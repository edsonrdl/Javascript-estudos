//Método ForEach<Para cada>
// O método "forEach" é uma função integrada em JavaScript que permite iterar sobre os elementos de um array e executar uma ação para cada elemento, sem a necessidade de criar um loop explícito. O método "forEach" é uma alternativa ao laço "for" convencional para percorrer um array.

// A sintaxe do método "forEach" em JavaScript é a seguinte:
//array.forEach(callback(currentValue[, index[, array]])[, thisArg])

// "array" é o array que será iterado;
// "callback" é a função que será executada para cada elemento do array. Ela recebe três parâmetros:
// "currentValue" é o valor do elemento atual do array;
// "index" é o índice do elemento atual do array (opcional);
// "array" é o array original que está sendo iterado (opcional).
// "thisArg" é um valor opcional que pode ser usado como "this" dentro da função "callback".
// O método "forEach" não retorna nada, apenas executa a função "callback" para cada elemento do array.

//  Exemplo:
let arrayEx1 = [1, 2, 3, 4, 5];
arrayEx1.forEach(function(element) {
  console.log(element);
});

// Neste exemplo, a função "forEach" é usada para iterar sobre cada elemento do array "array" e exibir o valor de cada elemento no console.

// Exemplo com o uso do parâmetro "index":
let arrayEx2 = [1, 2, 3, 4, 5];
arrayEx2.forEach(function(element, index) {
  console.log(`Elemento ${index}: ${element}`);
});

// Neste exemplo, a função "forEach" é usada para iterar sobre cada elemento do array "array" e exibir o valor de cada elemento, juntamente com seu índice correspondente, no console.

// Exemplo com o uso do parâmetro "thisArg":
let arrayEx3 = [1, 2, 3, 4, 5];
let obj = {
  valor: 10
};
arrayEx3.forEach(function(element) {
  console.log(element + this.valor);
}, obj);
// Neste exemplo, a função "forEach" é usada para iterar sobre cada elemento do array "array" e exibir a soma do valor de cada elemento com o valor da propriedade "valor" do objeto "obj".
//  O parâmetro "thisArg" é usado para passar o objeto "obj" como o valor de "this" dentro da função "callback".


//  Exemplo:
var carros=['vectra','gol','centra'];
var getCarros =function(){
    var carros=['vectra','gol','centra'];

    return carros.splice(1,2)//splice(posicao,qtd)
}

var CarrosB=carros.splice(0,2,'relampago marquinhos','Mate');

CarrosB.forEach(function(item,index){
    console.log(index,item);
})



