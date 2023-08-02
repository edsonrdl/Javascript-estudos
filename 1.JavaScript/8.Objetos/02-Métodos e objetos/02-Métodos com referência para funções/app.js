
var pegarNome = function(nome){
 return this.nome;
};

var pessoa={
    nome:'Rodrigo',
    sobrenome:'lima',
    idade:'29',
    getNome:pegarNome
};

var carro={
    nome:'Gol',
    marca:'VW',
    getNome:pegarNome
};



var teste1=pessoa.getNome();
console.log(teste1);

var teste2=carro.getNome();
console.log(teste2);


