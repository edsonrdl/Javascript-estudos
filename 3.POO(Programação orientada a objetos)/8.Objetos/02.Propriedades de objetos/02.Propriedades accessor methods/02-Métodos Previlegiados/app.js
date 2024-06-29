//Métodos previlegiados de acesso e de modificação
var pessoa=(function(nome,idade,sexo){
    return {
        nome:nome,
        idade:idade,
        sexo:sexo,
    }

})('Rodrigo',28,'M');
console.log(pessoa);

var pessoa=(function(nome,idade,sexo){
    var nome=nome;
    var idade=idade;
    var sexo=sexo;

    var getNome= function(){
        return nome;
    }
    var getSexo= function(){
        return sexo;
    }
    var getIdade= function(){
        return idade
    }
    var setNome= function(value){
        nome=value;
    }
    var setSexo= function(value){
        sexo=value;
    }
    var setIdade= function(value){
        idade=value;
    };

    var metodos= {
        getNome: getNome,
        getSexo: getSexo,
        getIdade: getIdade,
        setNome: setNome,
        setSexo: setSexo,
        setIdade: setIdade,
    };

    Object.defineProperties(metodos,{
        getNome:{
            enumerable:false
        },
        getSexo:{
            enumerable:false
        },
        getIdade:{
            enumerable:false
        },
        setNome:{
            enumerable:false
        },
        setSexo:{
            enumerable:false
        },
        setIdade:{
            enumerable:false
        },
     
    });

    Object.freeze(metodos);
    return metodos;

})('Rodrigo',28,'M');

for(propriedades in pessoa){
    console.log(propriedades);
};

pessoa.setNome('André');

console.log(pessoa.getNome());