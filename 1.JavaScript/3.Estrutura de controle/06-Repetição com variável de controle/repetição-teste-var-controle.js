//For clássico
// for(Para) Com variável de controle na inicialização 
// O laço for é uma estrutura de repetição muito comum em JavaScript. Ele executa um bloco de código para um número específico de vezes.
// Sintaxe:
// for (inicialização; condição; incremento) {
//    bloco de código a ser executado a cada iteração
// }

//ex 
for (let i = 0; i < 5; i++) {
  console.log(i);
}


// for...in
// O laço for...in é usado para iterar sobre as propriedades de um objeto.
// Sintaxe:
// for (propriedade in objeto) {
//    bloco de código a ser executado para cada propriedade do objeto
// }


//ex
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};

for (let propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}