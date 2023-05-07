//Usa a mesma função duplicada em cada objeto 
// var pessoa={
//     nome:'Rodrigo',
//     sobrenome:'lima',
//     idade:'29',
//     getNome:function(){
//         this.nome;

//     }
// };
// var carros={
//     nome:'Gol',
//     sobrenome:'VW',
//     getNome:function(){
//         this.nome;
//     }
// }
//ou  essa outra forma para usar apenas uma função e usar nos dois objetos 
var pegarNome = function(nome,sobrenome){
    this.nome=nome;
    this.sobrenome=sobrenome;
    console.log(this)
}//se não for colocado na função não vai ser alterado lá na frente utilizando o call

var pessoa={
    nome:'Rodrigo',
    sobrenome:'lima',
    idade:'29',
    getNome:pegarNome //referência para a função 
};

var carros={
    nome:'Gol',
    marca:'VW',
    getNome:pegarNome//referência para a função 
};

pessoa.getNome();
carros.getNome();

pegarNome.call(pessoa,'Pedro','Rocha');
//OU 
pegarNome.apply(pessoa,['Pedro','Rocha']);
//OU
pegarNome.bind(pessoa,'Pedro','Rocha');
