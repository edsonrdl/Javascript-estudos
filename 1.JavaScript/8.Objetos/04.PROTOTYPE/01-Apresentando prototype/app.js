//Prototype é uma forma que diz que tudo que herdar dele vai ter a mesma característica 
 function Pessoa(nome,idade,sexo){
     this._nome=nome;
     this.idade=idade;
     this.sexo=sexo;
     this.getNome=function(){
         return this._nome;
     };
 }
 var pessoa1=new Pessoa("Rodrigo",21,'M');
 var pessoa2=new Pessoa('João',19,'M');

 console.log(pessoa1.getNome(),pessoa2.getNome());
