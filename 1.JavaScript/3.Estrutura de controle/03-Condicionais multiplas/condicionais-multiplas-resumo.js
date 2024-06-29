// switch(trocar)  break(quebrar)
// O switch é uma estrutura condicional que permite testar uma expressão em vários casos diferentes e executar um bloco de código correspondente ao caso que corresponde à expressão.
//o break serve para parar quando encontrar o valor ,se não ele continua 
// Sintaxe:
// switch (expressão) {
//   case valor1:
//      bloco de código a ser executado se expressão for igual a valor1
//     break;
//   case valor2:
//      bloco de código a ser executado se expressão for igual a valor2
//     break;
//   ...
//   default:
//      bloco de código a ser executado se nenhum dos casos anteriores for verdadeiro
// };

//ex
let diaDaSemana = 2;
switch (diaDaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  // ...
  default:
    console.log("Dia inválido");
}
