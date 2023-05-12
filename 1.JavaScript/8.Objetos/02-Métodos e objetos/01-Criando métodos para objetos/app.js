//Usa a mesma função duplicada em cada objeto 
var pessoa={
    nome:'Rodrigo',
    sobrenome:'lima',
    idade:'29',
    getNome:function(){
       return this.nome;
    }
};
var carros={
    nome:'Gol',
    sobrenome:'VW',
    getNome:function(){
       return this.nome;
    }
}
console.log(pessoa.getNome());
console.log(carros.getNome());
