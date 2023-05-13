//usar a primeira palavra da funcção sempre q usar uma function construção
//Construtores são funções chamadas pela palavra new
function Pessoa(nome,idade,sexo){
    this._nome=this.nome;
    this.idade=this.idade;
    this.sexo=this.sexo;

    Object.defineProperties(this,{
        _nome:{
            enumerable:true,
            configurable:true,
            writable:true
        },

        nome:{
            get:function(){
                return this._nome;
            },
            set:function(value){
                this._nome=value;
            }
        }
    });
    Object.preventExtensions(this);//não vai poder ser adicionado novas propriedades
};

var rodrigo=new pessoa('Rodrigo',29,'M');//quando usa new ele cria um objeto
console.log(rodrigo);

//saber de qual foi criado
console.log(rodrigo instanceof Pessoa)//retorna boolean//para saber de qual função construtora foi criada 
//ou
console.log(rodrigo.constructor===Pessoa)//retorna boolean//para saber de qual função construtora foi criada 

rodrigo.nome ="joão";

 for(propriedade in rodrigo){
    console.log(propriedade +':'+ rodrigo[propriedade]);//imprimir a propriedade e o valor
 }