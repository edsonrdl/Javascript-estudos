var pessoa={
    nome:'Rodrigo',
    _idade:'29',
    _sexo:'Masculino',
    casado:false,
    get idade(){//declaração literal
        return this._idade;
    },
    set idade(value){//declaração literal
        this._idade=value
    }
};

//utlizando atributos das propriedades de acesso
Object.defineProperty(pessoa,'sexo',{
    get : function(){//objeto ja existe e é feito pelo atributo de configuração 
     return this._sexo;
    },
    set : function(value){//objeto ja existe e é feito pelo atributo de configuração
         this._sexo=value;
       }
 });
pessoa.sexo='Feminino';

 var sexo=pessoa.sexo;
 console.log(sexo);

//para não exibir,para n aparecer nos laços de interações 
Object.defineProperty(pessoa,'idade',{
    enumerabler:false ,//n aparecer nos laços de interações 
    configurable:false
});

//para sempre fazendo parte, mesmo usando delete
Object.defineProperty(pessoa,'idade',{
    configurable:false ,// a pripriedade n pode ser modificada ,mas seu índice sim 
});

//modificar o dado
Object.defineProperties(pessoa,'nome',{
    configurable:false ,// a pripriedade n pode ser modificada ,mas seu índice sim 
    enumerabler:false,//não vai mais ser exibido 
    value:'Roberto',//define um valor
    writable:false,//não pode mais ser reescrita
});

delete pessoa.nome;
pessoa.nome='João';

console.log(pessoa)//vai permanecer o nome
console.log(pessoa.propertyIsEnumerable("idade"));

for( propriedade in pessoa){
    console.log(propriedade)
}

