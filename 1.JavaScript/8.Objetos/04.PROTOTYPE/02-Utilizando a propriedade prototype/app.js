function Pessoa(nome,idade,sexo,cabelo){
     this._nome=nome;
     this.idade=idade;
     this.sexo=sexo;
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


