//Prototype é uma forma que diz que tudo que herdar dele vai ter a mesma característica 
// function Pessoa(nome,idade,sexo,cabelo){
//     this._nome=this.nome;
//     this.idade=this.idade;
//     this.sexo=this.sexo;
//     this.getNome=function(){
//         return this.nome;
//     }
// }
// var rodrigo=new Pessoa('Rodrigo',21,'M');
// var joao=new Pessoa('João',19,'M');
// console.log(rodrigo.getNome(),joao.getNome())


//outra maneira 
 function Pessoa(nome,idade,sexo,cabelo){
     this._nome=this.nome;
     this.idade=this.idade;
     this.sexo=this.sexo;
 }
 Pessoa.prototype.getNome=function(){
    return this.nome;
 }
 Pessoa.prototype.getIdade=function(){
    return this.idade;
 }

  var rodrigo=new Pessoa('Rodrigo',21,'M');
 var joao=new Pessoa('João',19,'M');

console.log(rodrigo.getNome(),rodrigo.getIdade())
console.log(joao.getNome(),joao.getIdade())

//outra maneira sem ter que ficar alterando os nomes
function Pessoa(nome,idade,sexo,cabelo){
    this._nome=this.nome;
    this.idade=this.idade;
    this.sexo=this.sexo;
}
Pessoa.prototype={
    constructor:Pessoa,//Para definir que realmente é instância
    getNome:function(){
        return this.nome;
    }
},
Pessoa.prototype={
    getIdade:function(){
        return this.idade;
    }
},
Pessoa.prototype={
    getSexo:function(){
        return this.sexo;
    }
}

var rodrigo=new Pessoa('Rodrigo',21,'M');
var joao=new Pessoa('João',19,'M');

console.log(rodrigo.getNome(),rodrigo.getIdade(),rodrigo.getSexo());
console.log(joao.getNome(),joao.getIdade(),joao.getSexo());

console.log(rodrigo instanceof Pessoa);
console.log(rodrigo.constructor === Pessoa);

