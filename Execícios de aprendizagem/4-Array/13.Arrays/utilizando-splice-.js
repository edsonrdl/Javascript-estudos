//Método splice<remover,tirar,modificar>
// "Splice" refere-se a uma operação que remove ou substitui elementos de um array em um determinado índice e, opcionalmente, adiciona novos elementos.
//  Em português, a tradução pode ser "emendar" ou "modificar".

// Sintaxe: 
// array.splice(start, deleteCount, item1, item2, ...);
// "array" é o array original que será modificado;
// "start" é o índice a partir do qual a modificação será feita. Se "start" for um número negativo, ele conta a partir do final do array. Por exemplo, "-1" significa o último elemento do array;
// "deleteCount" é o número de elementos que serão removidos a partir do índice "start". Se "deleteCount" não for fornecido, todos os elementos a partir do índice "start" até o final do array serão excluídos;
// "item1, item2, ..." são elementos opcionais que serão adicionados ao array a partir do índice "start".
// A função "splice" retorna um novo array contendo os elementos removidos ou um array vazio, se nenhum elemento for removido.

//  Exemplo:
let array = [1, 2, 3, 4, 5];
array.splice(2, 2, 'a', 'b'); // remove 2 elementos a partir do índice 2 e adiciona 'a' e 'b'
console.log(array);


//  Exemplo:
var carros=['vectra','gol','centra'];
var getCarros =function(){
    var carros=['vectra','gol','centra'];

    return carros.splice(1,2)//splice(posicao,qtd)
}
var CarrosA = getCarros(2,1);
console.log(CarrosA);

var CarrosB=carros.splice(0,2,'relampago marquinhos','Mate');
console.log(`O que fica em CarrosB é um novo array com  os carros removidos: ${CarrosB}`);
console.log(`Carros passar a ter outros carros sem o vectar e o gol : ${carros}`);



