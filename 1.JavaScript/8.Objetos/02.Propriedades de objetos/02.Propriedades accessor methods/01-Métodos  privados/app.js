var pessoa=(function(nome,idade,sexo){
    return {
        nome:nome,
        idade:idade,
        sexo:sexo,
    }
})('Rodrigo',28,'M');

console.log(pessoa);

var pessoa=(function(nome,idade,sexo){
    var nome=nome;//privados /as informações são armazenadas aqui 
    var idade=idade;
    var sexo=sexo;

    var getNome= function(){//previlegiados//podem acessar e modificar os metodos privados 
        return nome;
    }
    var getSexo= function(){//previlegiados//podem acessar e modificar os metodos privados
        return sexo;
    }
    var getIdade= function(){//previlegiados//podem acessar e modificar os metodos privados
        return idade;
    }
    var metodos= {
        getNome: getNome,
        getSexo: getSexo,
        getIdade: getIdade,
    }

Object.freeze(metodos);//os metodos previlegiados que ja existem n podem ser modificados ,estão congelados
return metodos;

})('Rodrigo',28,'M');

console.log(pessoa.getNome())