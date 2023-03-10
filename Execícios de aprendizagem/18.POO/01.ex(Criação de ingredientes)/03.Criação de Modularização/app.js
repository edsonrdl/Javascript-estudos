import modificador from "./modificador";
console.log(modificador);

var ingredientes=['mel','água','sal','mostarda'];
var resultadoCapitalizado=modificador.capitalizar(ingredientes);
var resultadoOrdernado=modificador.ordernar(resultadoCapitalizado);
var resultadoCaixaAlta=modificador.caixaAlta(ingredientes);

console.log(resultadoCapitalizado);
console.log(resultadoOrdernado);
console.log(resultadoCaixaAlta);




