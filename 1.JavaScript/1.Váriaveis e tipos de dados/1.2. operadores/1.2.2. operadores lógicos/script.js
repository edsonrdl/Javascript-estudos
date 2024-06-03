//                                      Operadores lógicos

//Maior que >
function maiorQue(num1,num2){
    return num1>num2
};
console.log(`Maior que: ${maiorQue(2,3)}`);

//Menor que<
function menorQue(num1,num2){
    return num1<num2
};
console.log(`Menor que: ${menorQue(2,3)}`);


//Maior ou igual a >=
function maiorOuIgual(num1,num2){
    return num1>=num2
};
console.log(`Maior ou igual a : ${maiorOuIgual(2,3)}`);

//Menor ou igual a <=
function mmenorOuIgual(num1,num2){
    return num1<=num2
};
console.log(`Menor ou igual a: ${mmenorOuIgual(2,3)}`);


//Igual a
function igualA(num1,num2){
    return num1==num2
};
console.log(`Igual a: ${igualA(2,2)}`);

//Diferente de
function diferenteDe(num1,num2){
    return num1!=num2
};
console.log(`Diferente de : ${diferenteDe(2,2)}`);

//Idêntico
function identico(num1,num2){
    return num1===num2
};
console.log(`Idêntico: ${identico(2,"2")}`);

// Não idêntico a
function naoIdenticoA(num1,num2){
    return num1!==num2
};
console.log(`Não idêntico a: ${naoIdenticoA(2,2)}`);

//E and
function eAnd(num1,num2){
    return num1>num2 && num1===num2
};
console.log(`Se num1 for maior que num2 e num1 for igual no valor e tipo a num2 vai dar true: ${eAnd(2,"2")}`);

//Ou our
function OuOur(num1,num2){
    return num1>num2 || num1===num2
};
console.log(`Se num1 for maior que num2  vai dar true mesno que  num1 for igual no valor e tipo a num2 vai dar true: ${OuOur(3,2)}`);