 function Pessoa(nome,idade,sexo){
     this._nome=nome;
     this.idade=idade;
     this.sexo=sexo;
 };

var makePessoa = function(nome,idade,sexo){
    return {
        construtor:makePessoa,
        nome:nome,
        idade:idade,
        sexo:sexo,
        getIdade:function(){
            return this.idade;
        }
        }
};

var rodrigo=new Pessoa('Rodrigo',21,'M');
var roberto=new makePessoa('Roberto',25,'M');

console.log(rodrigo);
console.log(roberto);

