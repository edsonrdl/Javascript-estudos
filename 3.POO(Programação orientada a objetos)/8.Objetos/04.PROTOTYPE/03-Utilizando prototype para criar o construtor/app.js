//outra maneira sem ter que ficar alterando os nomes
function Pessoa(nome,idade,sexo){
    this._nome=nome;
    this._idade=idade;
    this._sexo=sexo;
}
Pessoa.prototype={
    constructor:Pessoa,//Para definir que realmente é instância da function Pessoa que é uma função construtora
    getNome:function(){
        return this._nome;
    },
    getIdade:function(){
    return this._idade;
},

    getSexo:function(){
    return this._sexo; 
}
};

var rodrigo=new Pessoa('Rodrigo',21,'M');
var joao=new Pessoa('João',19,'M');

console.log(rodrigo.getNome(),rodrigo.getIdade(),rodrigo.getSexo());
console.log(joao.getNome(),joao.getIdade(),joao.getSexo());

console.log(rodrigo instanceof Pessoa);
console.log(rodrigo.constructor === Pessoa);

