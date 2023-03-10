//Alguns métodos de array avançados
var carros=['vectra','gol','centra'];
var resultado=carros.filter(function(value){
    return value=='gol';
});

console.log(resultado);
var result =carros.some(function(valor){
    return valor=='gol';
})
console.log(result);//boolean

var result2=carros.find(function(valor){
    return valor=='gol';
});
console.log(result2)