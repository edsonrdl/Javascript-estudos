var pessoa={};
Object.defineProperties(pessoa,{
   _nome:{
    value:"Rodrigo",
    enumerable:true,
    configurable:false,
    writable:true

   } ,
   _sexo:{
    value:"M",
    enumerable:true,
    configurable:true,
    wiretable:true

   } ,
   _idade:{
    value:"16",
    enumerable:true,
    configurable:true,
    wiretable:true

   } 
   ,
   nome:{
    get: function(){
return this._nome;
    },
    set: function(value){
         this._nome=value;
    }
   },
   sexo:{
    get: function(){
return this._sexo;
    },
    set: function(value){
         this._sexo=value;
    }
   }
});
Object.preventExtensions(pessoa);//tornar objeto n acessível
console.log(Object.isExtensible(pessoa));

Object.seal(pessoa);//Para deixar selado
console.log(Object.isSealed(pessoa));
pessoa.endereco='rua fulano de tal'

Object.freeze(pessoa);//deixar congelado
pessoa.nome='José';
console.log(Object.isFrozen(pessoa))