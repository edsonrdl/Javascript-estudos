//Alguns métodos de array
var carros=['vectra','gol','centra'];
var getCarros =function(){
    var carros=['vectra','gol','centra'];

    return carros.splice(posicao,qtd)
}
var NovosCarros = getCarros(1,2);
console.log(NovosCarros);

var NovosCarros=carros.splice();
console.log(NovosCarros);
var carro= NovosCarros[1];
console.log(carro);

NovosCarros.forEach(function(item,index){
    console.log(index,item);
})